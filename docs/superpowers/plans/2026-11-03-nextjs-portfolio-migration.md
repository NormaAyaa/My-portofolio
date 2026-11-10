# Next.js Portfolio Migration & Netlify Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate Norma Zuhrotul Hayati's portfolio from Python Flask + SQLite into a modern Next.js 15 (TypeScript) static export application with Netlify Forms, ready for automated GitHub CI/CD deployment on Netlify.

**Architecture:** Replatform the Flask monolithic templates into modular React/TypeScript components (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `CvModal`, `Footer`, `Notification`) powered by a centralized data file (`portfolioData.ts`). Build configuration compiles via `output: 'export'` to standard static assets (`out/`) hosted on Netlify's global CDN, with contact submissions captured via Netlify Forms without backend database overhead.

**Tech Stack:** Next.js 15, React 19, TypeScript, `next/font/google` (`Patrick Hand`, `Caveat`, `Special Elite`), Vanilla CSS with custom properties & keyframes, Netlify Forms, `netlify.toml`.

**Spec:** [`docs/superpowers/specs/2026-11-03-nextjs-portfolio-migration-design.md`](file:///d:/My-portofolio-main/docs/superpowers/specs/2026-11-03-nextjs-portfolio-migration-design.md)

## Global Constraints

- Preserve 100% of the hand-drawn scrapbook aesthetic (color scheme, paper-card shadows, tape, pins, gingham grids, rotation offsets, and floating emoji animations).
- Contact form must integrate with Netlify Forms (`data-netlify="true"`) using client-side AJAX fetch; no email notification triggers to be configured.
- Static export build must succeed (`npm run build` outputting to `out/`) with no unoptimized image loader errors (`images: { unoptimized: true }`).
- Legacy Flask code must remain safely archived in `_legacy_flask/` without deletion.
- All links (GitHub repos, Streamlit apps, LinkedIn/Email/WhatsApp) must accurately match the original portfolio.

## Review Focus

1. **Netlify Form Detection Failure:** Netlify's build crawler must detect the form schema; verified by presence of `public/__forms.html` and proper `data-netlify="true"` with hidden `form-name` input in `Contact.tsx`.
2. **Missing Static Assets:** PDF modal preview and hero polaroid image failing to load if files are misplaced; verified by checking `/norma-photo.png` and `/cv-norma.pdf` in `public/`.
3. **Mobile Menu Breaking Layout:** Navigation bar overflowing on screens under 600px; verified by responsive CSS media queries and drawer toggle behavior.
4. **Form Submit Network Disconnection:** Form submit failure handling showing a user-friendly error toast instead of crashing or silent failure.
5. **PDF Modal Scroll Lock:** Opening CV modal locking page scroll and closing modal restoring `overflow: auto` on document body cleanly.

---

### Task 1: Archive Legacy Flask Files & Organize Assets

**Files:**
- Create: `_legacy_flask/`
- Move: `app.py`, `templates/`, `messages.db`, `Procfile`, `requirements.txt` -> `_legacy_flask/`
- Move: `static/norma-photo.png` -> `public/norma-photo.png`
- Move: `static/cv-norma.pdf` -> `public/cv-norma.pdf`

**Interfaces:**
- Produces: `public/norma-photo.png`, `public/cv-norma.pdf` available at web root `/norma-photo.png` and `/cv-norma.pdf`.

- [ ] **Step 1: Move Flask server and template files to `_legacy_flask/`**
  Archive `app.py`, `templates`, `messages.db`, `Procfile`, and `requirements.txt`.
- [ ] **Step 2: Copy static media to `public/` directory**
  Ensure `public/norma-photo.png` and `public/cv-norma.pdf` exist and are accessible.
- [ ] **Step 3: Verify directory structure**
  Run: `Get-ChildItem -Path public, _legacy_flask`
  Expected: `norma-photo.png` and `cv-norma.pdf` in `public/`; Flask files in `_legacy_flask/`.
- [ ] **Step 4: Commit**
  ```bash
  git add _legacy_flask public
  git commit -m "chore: archive legacy flask app and move static assets to public/"
  ```

---

### Task 2: Scaffold Next.js Project & Netlify Configuration

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `netlify.toml`
- Create: `.gitignore`
- Create: `public/__forms.html`

**Interfaces:**
- Produces: Runnable npm scripts (`npm run dev`, `npm run build`), TypeScript compilation, Netlify build instructions (`publish = "out"`).

- [ ] **Step 1: Create `.gitignore`**
  Exclude `node_modules/`, `.next/`, `out/`, `.env*`.
- [ ] **Step 2: Create `package.json` with Next.js and React dependencies**
  Include `next`, `react`, `react-dom`, `@types/node`, `@types/react`, `@types/react-dom`, `typescript`.
- [ ] **Step 3: Create `tsconfig.json`**
  Standard Next.js TypeScript config with `@/*` paths mapped to `./src/*`.
- [ ] **Step 4: Create `next.config.mjs` with static export**
  Set `output: 'export'` and `images: { unoptimized: true }`.
- [ ] **Step 5: Create `netlify.toml`**
  Set build command to `npm run build` and publish to `out`.
- [ ] **Step 6: Create `public/__forms.html` for Netlify Forms build crawler**
  Add hidden form `<form name="contact" netlify netlify-honeypot="bot-field" hidden>...</form>`.
- [ ] **Step 7: Install dependencies**
  Run: `npm install`
  Expected: Clean install with exit code 0.
- [ ] **Step 8: Commit**
  ```bash
  git add package.json tsconfig.json next.config.mjs netlify.toml .gitignore public/__forms.html package-lock.json
  git commit -m "chore: scaffold Next.js 15 TypeScript setup and Netlify configuration"
  ```

---

### Task 3: Create Portfolio Data Model & Content File

**Files:**
- Create: `src/data/portfolioData.ts`

**Interfaces:**
- Produces:
  - `personalInfo`: `{ name: string, role: string, bio: string[], stats: Array<{ num: string, label: string }>, contacts: Array<{ type: string, label: string, val: string, href: string, icon: string }> }`
  - `education`: `Array<{ school: string, major: string, period: string, badge?: string }>`
  - `skills`: `Array<{ title: string, desc: string, icon: string, tags: string[] }>`
  - `projects`: `Array<{ title: string, desc: string, emoji: string, badge: { text: string, color: string }, stack: string[], githubUrl?: string, demoUrl?: string }>`

- [ ] **Step 1: Write test/validation script for portfolio data**
  Create `src/data/portfolioData.ts` with typed interfaces and exact copy from original portfolio:
  - Projects: Customer Churn Prediction, AI Customer Support Bot, Multilingual Hate Speech Detector, Deepfake Audio Detection, Default Credit Card.
  - Skills: Machine Learning, NLP & LLMs, Data Engineering, Web & APIs, Cloud & MLOps, Statistics & Mathematics.
  - Education: Politeknik Negeri Semarang (D4 Teknik Telekomunikasi) & SMA N 1 Cepu.
- [ ] **Step 2: Verify TypeScript compiles without type errors**
  Run: `npx tsc --noEmit`
  Expected: Exit code 0 (no type errors in `src/data/portfolioData.ts`).
- [ ] **Step 3: Commit**
  ```bash
  git add src/data/portfolioData.ts
  git commit -m "feat: add structured portfolio data and TypeScript interfaces"
  ```

---

### Task 4: Layout, Typography, & Scrapbook Global CSS

**Files:**
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`

**Interfaces:**
- Consumes: Google Fonts (`Patrick Hand`, `Caveat`, `Special Elite`) via `next/font/google`.
- Produces: Global styles, CSS custom properties (`--cream`, `--red`, `--blue-gingham`, `--paper`, etc.), animations (`charBounce`, `charSwing`, `charSpin`, `charJump`, `charFloat`), tape/pin pseudo-elements, HTML metadata.

- [ ] **Step 1: Create `src/app/globals.css`**
  Port all original CSS rules faithfully, including background grids, button styles, paper cards, pins, tapes, character animation keyframes, and responsive media queries.
- [ ] **Step 2: Create `src/app/layout.tsx`**
  Configure `next/font/google` for `Patrick_Hand`, `Caveat`, and `Special_Elite`, setting CSS variables on `<html>` / `<body>`, with complete meta tags (title, description, viewport).
- [ ] **Step 3: Verify TypeScript compilation**
  Run: `npx tsc --noEmit`
  Expected: Clean compilation with exit code 0.
- [ ] **Step 4: Commit**
  ```bash
  git add src/app/globals.css src/app/layout.tsx
  git commit -m "feat: setup scrapbook typography and global stylesheet"
  ```

---

### Task 5: Core Visual Components (Navbar, Hero, About, Skills, Projects, Footer)

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Skills.tsx`
- Create: `src/components/Projects.tsx`
- Create: `src/components/Footer.tsx`

**Interfaces:**
- Consumes: `src/data/portfolioData.ts`
- Produces:
  - `Navbar`: Props `{ onOpenCv: () => void }`
  - `Hero`: Props `{ onOpenCv: () => void }`
  - `About`, `Skills`, `Projects`, `Footer`: Standalone React components.

- [ ] **Step 1: Implement `Navbar.tsx`**
  Sticky header, Ay.dev 🍓 brand, smooth scroll nav items, mobile hamburger toggle, and "Lihat CV 📄" button triggering `onOpenCv`.
- [ ] **Step 2: Implement `Hero.tsx`**
  Paper headline, status pulse badge, polaroid photo (`/norma-photo.png`), floating character emojis, stat chips, and CTA buttons.
- [ ] **Step 3: Implement `About.tsx`**
  Paper card with narrative paragraphs and education card timeline.
- [ ] **Step 4: Implement `Skills.tsx`**
  Grid of categorized skill paper cards with icons and tags.
- [ ] **Step 5: Implement `Projects.tsx`**
  Project cards with tape headers, status badges, tech stack pills, and GitHub / Live Demo links.
- [ ] **Step 6: Implement `Footer.tsx`**
  Footer signature matching original copy.
- [ ] **Step 7: Verify TypeScript compilation**
  Run: `npx tsc --noEmit`
  Expected: Exit code 0.
- [ ] **Step 8: Commit**
  ```bash
  git add src/components/
  git commit -m "feat: build Navbar, Hero, About, Skills, Projects, and Footer components"
  ```

---

### Task 6: Interactive Components (Contact Form with Netlify Forms, Notification Toast, CV Modal)

**Files:**
- Create: `src/components/Notification.tsx`
- Create: `src/components/Contact.tsx`
- Create: `src/components/CvModal.tsx`
- Create: `src/app/page.tsx`

**Interfaces:**
- Consumes: `portfolioData.contacts`, `/cv-norma.pdf`.
- Produces:
  - `Notification`: Props `{ message: string, type: 'success' | 'error', isVisible: boolean }`
  - `Contact`: Props `{ onNotify: (msg: string, type: 'success' | 'error') => void }`
  - `CvModal`: Props `{ isOpen: boolean, onClose: () => void }`
  - `page.tsx`: Main page assembling all sections and state management for modal and notifications.

- [ ] **Step 1: Implement `Notification.tsx`**
  Fixed bottom toast notification matching `#notif-bar` styles.
- [ ] **Step 2: Implement `CvModal.tsx`**
  Full-screen overlay previewing `/cv-norma.pdf`, download button, close button, backdrop click handler, Escape key listener, and `body.style.overflow` locking.
- [ ] **Step 3: Implement `Contact.tsx`**
  Form with `name="contact"`, `data-netlify="true"`, hidden `form-name` field. Form submit sends encoded form data via `fetch('/', { method: 'POST', ... })`. Validates fields client-side. Disables button while submitting. Dispatches toast notification.
- [ ] **Step 4: Implement `src/app/page.tsx`**
  Assemble `Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Footer`, `CvModal`, and `Notification`. Includes scroll observer for `.fade-up` animations.
- [ ] **Step 5: Verify build**
  Run: `npm run build`
  Expected: Next.js static export succeeds, outputting directory `out/` with `index.html`.
- [ ] **Step 6: Commit**
  ```bash
  git add src/components/ src/app/page.tsx
  git commit -m "feat: implement Contact form with Netlify Forms, CV modal, and main page assembly"
  ```

---

### Task 7: End-to-End Build Verification & Deployment Guide

**Files:**
- Test: Static output in `out/`
- Create: `README.md` (Update with Next.js development and Netlify deployment instructions)

- [ ] **Step 1: Run production build**
  Run: `npm run build`
  Expected: Clean build into `out/` without errors or warnings.
- [ ] **Step 2: Verify generated static output**
  Check that `out/index.html`, `out/norma-photo.png`, `out/cv-norma.pdf`, and `out/__forms.html` exist.
- [ ] **Step 3: Update `README.md`**
  Document project setup, `npm run dev`, `npm run build`, and complete instructions for connecting GitHub to Netlify for continuous deployment.
- [ ] **Step 4: Final Git Commit**
  ```bash
  git add README.md out/
  git commit -m "docs: update README with Next.js setup and Netlify deployment guide"
  ```

