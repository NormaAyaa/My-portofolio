import os
import sys
import numpy as np
from PIL import Image

def remove_background_pure_python(input_path, output_path):
    print("Processing with PIL / NumPy...")
    img = Image.open(input_path).convert("RGBA")
    arr = np.array(img)
    
    # Extract channels
    r = arr[:, :, 0].astype(float)
    g = arr[:, :, 1].astype(float)
    b = arr[:, :, 2].astype(float)
    
    # Calculate brightness and color deviation
    brightness = (r + g + b) / 3.0
    color_diff = np.maximum(np.maximum(np.abs(r - g), np.abs(r - b)), np.abs(g - b))
    
    # The bag is brown leather (warm tones with significant R > B and moderate brightness)
    # Background is studio off-white: high brightness (> 205) and low color difference (< 25)
    # Also near top-center inside the strap loop: background is off-white.
    
    # Threshold for background
    is_bg = (brightness > 200) & (color_diff < 28)
    
    # Soft alpha feathering based on distance to threshold
    alpha = np.ones_like(brightness) * 255.0
    
    # Full transparency for clear background
    full_bg = (brightness > 215) & (color_diff < 20)
    alpha[full_bg] = 0.0
    
    # Gradual transition for edge pixels
    trans_zone = is_bg & ~full_bg
    # Linear ramp
    ramp = (215.0 - brightness[trans_zone]) / 15.0
    ramp = np.clip(ramp, 0.0, 1.0)
    alpha[trans_zone] = ramp * 255.0
    
    # Preserve shadow directly under bag slightly if desired, or make completely clean
    # The user asked: "buat agak bessar dan transparans seperti gambar satu"
    # In Image 1, the background is completely transparent, clean edges around bag silhouette.
    
    arr[:, :, 3] = alpha.astype(np.uint8)
    
    out_img = Image.fromarray(arr, "RGBA")
    
    # Crop transparent borders tightly with slight padding
    bbox = out_img.getbbox()
    if bbox:
        # Add 10px padding
        w, h = out_img.size
        crop_box = (
            max(0, bbox[0] - 15),
            max(0, bbox[1] - 15),
            min(w, bbox[2] + 15),
            min(h, bbox[3] + 15),
        )
        out_img = out_img.crop(crop_box)
        
    out_img.save(output_path, "PNG", optimize=True)
    print(f"Saved transparent bag to: {output_path} with size {out_img.size}")

def try_rembg(input_path, output_path):
    try:
        from rembg import remove
        print("Using rembg library...")
        with open(input_path, 'rb') as i:
            input_bytes = i.read()
            output_bytes = remove(input_bytes)
            with open(output_path, 'wb') as o:
                o.write(output_bytes)
        print("rembg succeeded!")
        return True
    except Exception as e:
        print(f"rembg error or not ready: {e}")
        return False

if __name__ == "__main__":
    inp = "public/whats-in-my-bag.jpg"
    out = "public/whats-in-my-bag-transparent.png"
    
    if not try_rembg(inp, out):
        remove_background_pure_python(inp, out)

