# 🌸 Norma Portfolio — Next.js + Netlify

Portfolio interaktif Norma Zuhrotul Hayati (AI & Data Engineer) yang dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript**, dan **Netlify Forms**, dengan estetika visual *hand-drawn scrapbook / cottagecore*.

---

## ✨ Fitur Utama

- **Modern & Blazing Fast:** Dibangun dengan Next.js 15 dan diekspor sebagai situs statis murni (`output: 'export'`) yang disajikan langsung dari edge CDN Netlify (0 detik cold start, performa instan).
- **100% Scrapbook Aesthetic:** Mempertahankan seluruh detail visual unik—tekstur kertas, selotip (*tape*), pin mading, motif kotak-kotak piknik (*gingham*), font *Caveat*, *Patrick Hand*, dan *Special Elite*, serta animasi stiker lucu.
- **Netlify Forms Terintegrasi:** Form kontak langsung ditangani oleh Netlify tanpa memerlukan database lokal atau backend terpisah. Pesan masuk secara otomatis ke dashboard Netlify Anda.
- **Data Terpusat & Rapi:** Seluruh konten (proyek, bio, riwayat pendidikan, keahlian) tersimpan di `src/data/portfolioData.ts`, sehingga sangat mudah diperbarui sewaktu-waktu.
- **CV Viewer Modal:** Pratinjau langsung file CV PDF di browser lengkap dengan tombol unduh.
- **Desain Responsif:** Tampilan optimal di semua ukuran layar (smartphone, tablet, maupun laptop/desktop).

---

## 📁 Struktur Direktori

```
My-portofolio-main/
├── public/
│   ├── __forms.html          # Form detector statis untuk bot build Netlify
│   ├── cv-norma.pdf          # Dokumen CV
│   └── norma-photo.png       # Foto profil polaroid
├── src/
│   ├── app/
│   │   ├── globals.css       # Style scrapbook, tekstur gingham, selotip, & animasi
│   │   ├── layout.tsx        # Shell layout, Google Fonts loader, & metadata SEO
│   │   └── page.tsx          # Halaman utama menggabungkan seluruh komponen
│   ├── components/
│   │   ├── Navbar.tsx        # Navigasi sticky, logo Ay.dev, & hamburger mobile
│   │   ├── Hero.tsx          # Headline, polaroid foto, stat chips, & stiker
│   │   ├── About.tsx         # Bio perkenalan & riwayat pendidikan/magang
│   │   ├── Skills.tsx        # Grid badge keahlian & tools
│   │   ├── Projects.tsx      # Kartu-kartu proyek, demo link, & GitHub repo
│   │   ├── Contact.tsx       # Form kontak terintegrasi Netlify Forms
│   │   ├── CvModal.tsx       # Pop-up modal pratinjau PDF CV
│   │   ├── Notification.tsx  # Toast feedback pesan sukses/gagal
│   │   └── Footer.tsx        # Footer copyright
│   └── data/
│       └── portfolioData.ts  # File data terpusat (bio, skills, projects, contact)
├── _legacy_flask/            # Arsip aman kode server Flask & SQLite lama
├── netlify.toml              # Konfigurasi build command & publish directory Netlify
├── next.config.mjs           # Konfigurasi Next.js static export
├── package.json              # Daftar dependensi React & Next.js
└── tsconfig.json             # Konfigurasi TypeScript
```

---

## 🚀 Menjalankan di Komputer Lokal (Localhost)

### 1. Prasyarat
Pastikan sudah terinstal **Node.js** (versi 18.x atau 20.x ke atas):
```bash
node -v
npm -v
```

### 2. Jalankan Mode Development
```bash
npm run dev
```
Buka browser dan akses **http://localhost:3000**.

### 3. Build Versi Produksi (Static Export)
```bash
npm run build
```
Hasil build statis akan dihasilkan di folder `out/`.

---

## 🌐 Cara Deploy ke Netlify (Melalui GitHub)

Situs ini telah dikonfigurasi penuh dengan `netlify.toml` dan `public/__forms.html` sehingga siap di-deploy secara otomatis setiap kali Anda melakukan `git push`.

### Langkah 1: Buat Repository di GitHub
1. Buka [GitHub](https://github.com) dan buat repository baru (misalnya diberi nama `norma-portfolio`).
2. Jangan centang "Add a README file" (karena kita sudah punya file lokal).

### Langkah 2: Hubungkan & Push Repository Lokal ke GitHub
Jalankan perintah berikut di terminal (ganti `USERNAME` dan `REPO_NAME` sesuai akun Anda):
```bash
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Langkah 3: Hubungkan Repository ke Netlify
1. Masuk ke [Netlify Dashboard](https://app.netlify.com).
2. Klik tombol **"Add new site"** > pilih **"Import an existing project"**.
3. Pilih penyedia Git: **GitHub** dan berikan otorisasi jika diminta.
4. Cari dan pilih repositori Anda (`norma-portfolio`).
5. Netlify akan otomatis membaca konfigurasi dari `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
6. Klik **"Deploy site"**.

### Langkah 4: Selesai! 🎉
- Dalam 1–2 menit, portofolio Anda sudah aktif di internet dengan URL gratis dari Netlify (misalnya `https://nama-unik.netlify.app`).
- Anda juga dapat menghubungkannya ke custom domain pribadi (misalnya `normazuhrotul.com`) melalui menu **Domain management** di Netlify.

---

## 📬 Melihat Pesan Kontak yang Masuk

Setiap kali ada pengunjung yang mengirim pesan melalui form di halaman portofolio:
1. Buka [Netlify Dashboard](https://app.netlify.com).
2. Pilih situs portofolio Anda.
3. Klik menu **Site Configuration** (atau tab **Forms**).
4. Klik pada form bernama **`contact`**.
5. Semua pesan yang dikirim pengunjung (Nama, Email, Subjek, Pesan, dan waktu pengiriman) akan tersusun rapi di sana!

---

## ✏️ Cara Mengubah Konten Portofolio

Untuk menambahkan proyek baru, mengubah bio, atau memperbarui skill, cukup edit file:
👉 **`src/data/portfolioData.ts`**

Lalu lakukan git commit dan push:
```bash
git add .
git commit -m "update: perbarui data proyek"
git push
```
Netlify akan otomatis men-deploy versi terbaru dalam hitungan detik! 🚀
