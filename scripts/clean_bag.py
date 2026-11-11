import os
import numpy as np
from PIL import Image, ImageFilter
from scipy.ndimage import binary_fill_holes, gaussian_filter

def create_clean_transparent_bag():
    src_path = "public/whats-in-my-bag.jpg"
    dst_path = "public/whats-in-my-bag-transparent.png"
    
    img = Image.open(src_path).convert("RGBA")
    arr = np.array(img, dtype=float)
    
    r = arr[:, :, 0]
    g = arr[:, :, 1]
    b = arr[:, :, 2]
    
    brightness = (r + g + b) / 3.0
    color_diff = np.maximum(np.maximum(np.abs(r - g), np.abs(r - b)), np.abs(g - b))
    
    # 1. Background detection: high brightness and low color difference
    # Off-white studio background
    is_bg = (brightness > 205) & (color_diff < 26)
    
    # Also clear lighter gray floor regions
    is_light_gray = (brightness > 190) & (color_diff < 15)
    is_bg = is_bg | is_light_gray
    
    # Floor shadow region on the right side of the bag base
    # (x > 570 and y > 720 has no bag/strap, only table shadow)
    H, W = r.shape
    y_coords, x_coords = np.ogrid[:H, :W]
    floor_shadow_right = (x_coords > 575) & (y_coords > 720)
    is_bg = is_bg | floor_shadow_right
    
    # Below the base of the bag (y > 885)
    floor_shadow_bottom = (y_coords > 886)
    is_bg = is_bg | floor_shadow_bottom
    
    # Base mask of the bag
    bag_mask = ~is_bg
    
    # Remove tiny disconnected noise specs
    from scipy.ndimage import label
    labeled, num_features = label(bag_mask)
    if num_features > 0:
        sizes = np.bincount(labeled.ravel())
        # Keep only large components (the main bag & strap)
        mask_clean = np.zeros_like(bag_mask, dtype=bool)
        for i in range(1, num_features + 1):
            if sizes[i] > 2000: # only the real bag and strap parts
                mask_clean |= (labeled == i)
        bag_mask = mask_clean
        
    # Fill small interior holes (e.g., text or stitching highlights),
    # but do NOT fill the strap loop!
    # The strap loop is huge (tens of thousands of pixels), so filling small holes < 1000px:
    inv_mask = ~bag_mask
    labeled_inv, num_inv = label(inv_mask)
    inv_sizes = np.bincount(labeled_inv.ravel())
    for i in range(1, num_inv + 1):
        if inv_sizes[i] < 500: # tiny hole inside bag
            bag_mask |= (labeled_inv == i)
            
    # Now create feathered alpha for silky smooth antialiased edges
    alpha = np.zeros((H, W), dtype=float)
    alpha[bag_mask] = 255.0
    
    # Smooth edge with slight gaussian filter (sigma=0.9 for ultra crisp yet smooth anti-aliased edge)
    smooth_alpha = gaussian_filter(alpha, sigma=0.85)
    
    # Clip and assign
    arr[:, :, 3] = np.clip(smooth_alpha, 0, 255).astype(np.uint8)
    
    out_img = Image.fromarray(arr.astype(np.uint8), "RGBA")
    
    # Tightly crop to bounding box + padding
    bbox = out_img.getbbox()
    if bbox:
        crop_box = (
            max(0, bbox[0] - 12),
            max(0, bbox[1] - 12),
            min(W, bbox[2] + 12),
            min(H, bbox[3] + 12),
        )
        out_img = out_img.crop(crop_box)
        
    out_img.save(dst_path, "PNG", optimize=True)
    print(f"Successfully created clean transparent bag: {dst_path} ({out_img.size[0]}x{out_img.size[1]})")

if __name__ == "__main__":
    create_clean_transparent_bag()

