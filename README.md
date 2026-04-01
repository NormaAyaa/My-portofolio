# 🌸 Norma Portfolio — Flask + SQLite

Portfolio Norma Zuhrotul Hayati yang di-host menggunakan **Python Flask** dengan **SQLite** sebagai database untuk menyimpan pesan kontak dan data kunjungan.

---

## 📁 Struktur File

```
norma-portfolio/
├── app.py                  ← Flask server utama
├── requirements.txt        ← Daftar dependensi Python
├── messages.db             ← Database SQLite (dibuat otomatis)
├── templates/
│   └── index.html          ← Halaman portfolio
└── README.md
```

---

## 🚀 Cara Menjalankan

### 1. Install Python (minimal versi 3.9)
Download di https://www.python.org/downloads/

### 2. Install dependensi
```bash
pip install -r requirements.txt
```

### 3. Jalankan server
```bash
python app.py
```

### 4. Buka di browser
- **Portfolio** → http://localhost:5000
- **Admin pesan** → http://localhost:5000/admin/messages

---

## 🗄️ Database (SQLite)

Database `messages.db` dibuat **otomatis** saat pertama kali server dijalankan.

### Tabel `messages`
| Kolom       | Tipe    | Keterangan                     |
|-------------|---------|--------------------------------|
| id          | INTEGER | Primary key, auto-increment    |
| name        | TEXT    | Nama pengirim                  |
| email       | TEXT    | Email pengirim                 |
| subject     | TEXT    | Subjek pesan (opsional)        |
| message     | TEXT    | Isi pesan                      |
| ip_address  | TEXT    | IP address pengirim            |
| created_at  | TEXT    | Waktu kirim (ISO format)       |

### Tabel `page_visits`
| Kolom       | Tipe    | Keterangan                     |
|-------------|---------|--------------------------------|
| id          | INTEGER | Primary key, auto-increment    |
| path        | TEXT    | URL path yang dikunjungi       |
| ip_address  | TEXT    | IP pengunjung                  |
| user_agent  | TEXT    | Browser/device info            |
| visited_at  | TEXT    | Waktu kunjungan                |

---

## 🔌 API Endpoints

| Method | URL             | Keterangan                        |
|--------|-----------------|-----------------------------------|
| GET    | `/`             | Halaman portfolio                 |
| POST   | `/api/contact`  | Kirim pesan (JSON body)           |
| GET    | `/admin/messages` | Lihat semua pesan masuk         |

### Contoh request `/api/contact`:
```json
{
  "name": "Budi Santoso",
  "email": "budi@email.com",
  "subject": "Kolaborasi Project",
  "message": "Halo Norma, saya tertarik untuk berkolaborasi!"
}
```

---

## 🌐 Deploy ke Internet (opsional)

Untuk deploy gratis, bisa menggunakan:
- **Railway** → https://railway.app
- **Render** → https://render.com
- **PythonAnywhere** → https://pythonanywhere.com

Pastikan ubah `debug=True` menjadi `debug=False` sebelum deploy ke production.
