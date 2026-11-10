# Norma Portfolio — Next.js Migration & Netlify Deployment Specification

- **Date:** 2026-11-03
- **Status:** Approved / In Review
- **Target Platform:** Next.js (App Router, TypeScript), Netlify Static Hosting & Netlify Forms

---

## 1. Overview & Goals

Transform the existing Python Flask + SQLite portfolio into a modern, blazingly fast, and maintainable Next.js single-page portfolio application configured for automated deployment on Netlify via GitHub.

### Key Objectives:
1. **Preserve Visual Identity:** Recreate 100% of the hand-drawn scrapbook aesthetic (fonts `Patrick Hand`, `Caveat`, `Special Elite`, paper cards, tape strips, pins, gingham grid patterns, and animated emojis).
2. **Component & Data Modularity:** Separate portfolio content (bio, skills, projects, contact details) into a structured TypeScript data file (`src/data/portfolioData.ts`) and modular React components.
3. **Serverless Contact Form via Netlify Forms:** Replace the local SQLite database (`messages.db`) with Netlify Forms (`data-netlify="true"`), submitted via client-side AJAX fetch. No external email notification services are needed; messages will be viewed in the Netlify Dashboard.
4. **Optimal Deployment:** Configure static export (`output: 'export'`) so Netlify hosts the pre-rendered HTML/CSS/JS across its global edge CDN with zero cold starts, zero backend runtime costs, and optimal SEO.
5. **Clean Version Control:** Initialize a clean Git repository in `d:\My-portofolio-main` ready for pushing to GitHub and linking to Netlify CI/CD.

---

## 2. Architecture & Directory Structure

```
My-portofolio-main/
├── .gitignore
├── netlify.toml              # Netlify build and publish configuration
├── next.config.mjs           # Next.js configuration (static export)
├── package.json              # Next.js 15, React 19 / React 18, TypeScript, dependencies
├── tsconfig.json             # TypeScript compiler settings
├── public/
│   ├── __forms.html          # Build-time static form detector for Netlify Forms
│   ├── cv-norma.pdf          # CV document (migrated from static/)
│   └── norma-photo.png       # Profile picture (migrated from static/)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # HTML shell, metadata (SEO), next/font/google loaders
│   │   ├── page.tsx          # Main single-page combining sections
│   │   └── globals.css       # Complete scrapbook styling, keyframe animations, textures
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navbar with mobile hamburger menu and CV trigger
│   │   ├── Hero.tsx          # Intro banner, Polaroid photo, status badge, stat chips
│   │   ├── About.tsx         # Bio description & Education timeline
│   │   ├── Skills.tsx        # Skill categories & badges grid
│   │   ├── Projects.tsx      # Project showcase cards with live demo & repo links
│   │   ├── Contact.tsx       # Netlify contact form & contact cards (email, GitHub, WA)
│   │   ├── CvModal.tsx       # Interactive PDF modal preview and download dialog
│   │   ├── Notification.tsx  # Toast notification for form success/error
│   │   └── Footer.tsx        # Footer signature
│   └── data/
│       └── portfolioData.ts  # Structured content for bio, education, skills, projects, links
└── _legacy_flask/            # Archived original Flask files (app.py, templates, messages.db, etc.)
```

---

## 3. Technology Choices & Configurations

### 3.1 Framework & Runtime
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules / Scoped Global CSS recreating the original custom aesthetic with CSS custom properties (`--cream`, `--red`, `--blue-gingham`, `--paper`, `--tape`, etc.).
- **Typography:** `next/font/google` loading:
  - `Patrick Hand` (Body text)
  - `Caveat` (Accent labels, buttons, handwritten notes)
  - `Special Elite` (Titles, vintage typewriter headings)

### 3.2 Build & Netlify Configuration
- **`next.config.mjs`**:
  ```javascript
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
  };
  export default nextConfig;
  ```
- **`netlify.toml`**:
  ```toml
  [build]
    command = "npm run build"
    publish = "out"

  [[headers]]
    for = "/*"
    [headers.values]
      X-Frame-Options = "DENY"
      X-Content-Type-Options = "nosniff"
      Referrer-Policy = "strict-origin-when-cross-origin"
  ```

---

## 4. Feature Specifications

### 4.1 Contact Form & Netlify Forms Integration
- **Mechanism:**
  - Build-time detection: `public/__forms.html` contains `<form name="contact" netlify netlify-honeypot="bot-field" hidden><input type="text" name="name" /><input type="email" name="email" /><input type="text" name="subject" /><textarea name="message"></textarea></form>`.
  - Client component `Contact.tsx` renders form with `name="contact"`, `data-netlify="true"`, and a hidden `form-name` field.
  - Form handles submission via `fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(formData).toString() })`.
- **User Feedback:**
  - Submitting: Button disabled, text changes to `"Mengirim... 🍓"`.
  - On Success: Form fields reset, notification displays `"Pesan berhasil dikirim! Terima kasih 🌸"` (green toast for 4 seconds).
  - On Error: Notification displays `"Mohon isi Nama, Email, dan Pesan dulu ya! 🌷"` or network error message (red toast).
- **Backend Storage:**
  - Messages are stored natively in the Netlify Dashboard (**Site Configuration > Forms**).
  - Per user specification: No email notifications will be triggered.

### 4.2 Interactive Components
- **Navbar:**
  - Sticky glassmorphism header with soft blur.
  - Smooth-scrolling anchor links (`#about`, `#skills`, `#projects`, `#contact`).
  - Mobile hamburger toggle with animated icon, drawer menu auto-closes on item click.
  - "Lihat CV 📄" button opens `CvModal`.
- **Hero & Floating Stickers:**
  - Polaroid frame displaying `/norma-photo.png` with subtle rotation.
  - Animated floating strawberry stickers and badges (`pulse`, `floatBob`).
  - Stat counters: 3+ years experience, 15+ AI projects, 98% accuracy.
- **About & Education:**
  - Personal bio card with paper shadow and tape graphic.
  - Education cards: Politeknik Negeri Semarang & SMA N 1 Cepu.
- **Skills Grid:**
  - Categorized skill cards (Machine Learning, NLP, Data Engineering, Web & APIs, Cloud & MLOps).
- **Projects Grid:**
  - Showcase cards: Customer Churn Prediction, AI Customer Support Bot, Multilingual Hate Speech Detector, Deepfake Audio Detection, Default Credit Card.
  - Tags and active links to GitHub repositories and live Streamlit demos.
- **CV Modal:**
  - Accessible modal dialog for previewing `/cv-norma.pdf` in an iframe, with direct download button.
  - Dismissible via Escape key, close button, or background click. Prevents background page scrolling while active.

---

## 5. Migration & Execution Steps

1. **Archive Legacy Files:** Move `app.py`, `templates/`, `messages.db`, `Procfile`, and `requirements.txt` into `_legacy_flask/`.
2. **Move Assets:** Copy `static/norma-photo.png` and `static/cv-norma.pdf` into `public/`.
3. **Scaffold Next.js App:** Initialize Next.js dependencies (`package.json`, `tsconfig.json`, `next.config.mjs`, `netlify.toml`).
4. **Implement Data & Theme:** Create `src/data/portfolioData.ts`, `src/app/globals.css`, and `src/app/layout.tsx`.
5. **Implement Components:** Build `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `CvModal`, `Notification`, `Footer`.
6. **Form & Netlify Integration:** Add `public/__forms.html` and verify Netlify Forms setup.
7. **Verification & Testing:**
   - Run `npm run build` and ensure clean export into `out/`.
   - Run local static preview to verify all styles, animations, responsive design, and links work.
8. **Git Commit & Deployment Guide:** Provide clean commit and step-by-step instructions for pushing to GitHub and deploying to Netlify.

