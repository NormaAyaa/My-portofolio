"""
app.py – Flask server untuk portfolio Norma Zuhrotul Hayati
Database: SQLite (messages.db)
Jalankan: python app.py
Akses: http://localhost:5000
"""

import sqlite3
import os
from datetime import datetime
from flask import Flask, render_template, request, jsonify, g

# ── Konfigurasi ──────────────────────────────────────────────────────────────
app = Flask(__name__)
DATABASE = os.path.join(os.path.dirname(__file__), "messages.db")


# ── Database helpers ──────────────────────────────────────────────────────────
def get_db():
    """Buka koneksi database (sekali per request)."""
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row          # akses kolom pakai nama
    return db


@app.teardown_appcontext
def close_connection(exception):
    """Tutup koneksi database di akhir setiap request."""
    db = getattr(g, "_database", None)
    if db is not None:
        db.close()


def init_db():
    """Buat tabel jika belum ada."""
    with app.app_context():
        db = get_db()
        db.executescript("""
            CREATE TABLE IF NOT EXISTS messages (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                name        TEXT    NOT NULL,
                email       TEXT    NOT NULL,
                subject     TEXT,
                message     TEXT    NOT NULL,
                ip_address  TEXT,
                created_at  TEXT    NOT NULL
            );

            CREATE TABLE IF NOT EXISTS page_visits (
                id         INTEGER PRIMARY KEY AUTOINCREMENT,
                path       TEXT    NOT NULL,
                ip_address TEXT,
                user_agent TEXT,
                visited_at TEXT    NOT NULL
            );
        """)
        db.commit()
        print("✅  Database siap:", DATABASE)


# ── Routes ────────────────────────────────────────────────────────────────────
@app.route("/")
def index():
    """Tampilkan halaman portfolio."""
    # catat kunjungan
    db = get_db()
    db.execute(
        "INSERT INTO page_visits (path, ip_address, user_agent, visited_at) VALUES (?,?,?,?)",
        (
            request.path,
            request.remote_addr,
            request.headers.get("User-Agent", ""),
            datetime.now().isoformat(sep=" ", timespec="seconds"),
        ),
    )
    db.commit()
    return render_template("index.html")


@app.route("/api/contact", methods=["POST"])
def contact():
    """Terima pesan dari form kontak dan simpan ke database."""
    data = request.get_json(silent=True) or {}

    name    = (data.get("name")    or "").strip()
    email   = (data.get("email")   or "").strip()
    subject = (data.get("subject") or "").strip()
    message = (data.get("message") or "").strip()

    # validasi sederhana
    if not name or not email or not message:
        return jsonify({"ok": False, "error": "Nama, email, dan pesan wajib diisi."}), 400

    db = get_db()
    db.execute(
        """INSERT INTO messages (name, email, subject, message, ip_address, created_at)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (
            name,
            email,
            subject,
            message,
            request.remote_addr,
            datetime.now().isoformat(sep=" ", timespec="seconds"),
        ),
    )
    db.commit()

    print(f"📨  Pesan baru dari {name} <{email}>")
    return jsonify({"ok": True, "message": "Pesan berhasil dikirim! Terima kasih 🌸"})


@app.route("/admin/messages")
def admin_messages():
    """Halaman admin dashboard – lihat semua pesan masuk."""
    db = get_db()
    rows = db.execute(
        "SELECT * FROM messages ORDER BY created_at DESC"
    ).fetchall()

    total_visits = db.execute(
        "SELECT COUNT(*) as total FROM page_visits"
    ).fetchone()["total"]

    today_str = datetime.now().strftime("%Y-%m-%d")
    today_messages = db.execute(
        "SELECT COUNT(*) as total FROM messages WHERE created_at LIKE ?",
        (today_str + "%",)
    ).fetchone()["total"]

    unique_senders = db.execute(
        "SELECT COUNT(DISTINCT email) as total FROM messages"
    ).fetchone()["total"]

    return render_template(
        "admin.html",
        messages=rows,
        total_messages=len(rows),
        total_visits=total_visits,
        today_messages=today_messages,
        today_str=today_str,
        unique_senders=unique_senders,
    )


@app.route("/admin/visits")
def admin_visits():
    """Halaman kunjungan halaman."""
    db = get_db()
    rows = db.execute(
        "SELECT * FROM page_visits ORDER BY visited_at DESC LIMIT 100"
    ).fetchall()
    total = db.execute("SELECT COUNT(*) as t FROM page_visits").fetchone()["t"]
    msgs  = db.execute("SELECT COUNT(*) as t FROM messages").fetchone()["t"]

    rows_html = ""
    for r in rows:
        rows_html += f"""
        <tr>
          <td style="font-family:monospace;font-size:.72rem;color:#4a4768">#{r['id']}</td>
          <td style="font-size:.82rem">{r['path']}</td>
          <td style="font-family:monospace;font-size:.75rem;color:#8884a8">{r['ip_address'] or '—'}</td>
          <td style="font-size:.72rem;color:#4a4768;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{(r['user_agent'] or '—')[:60]}</td>
          <td style="font-family:monospace;font-size:.75rem;color:#4a4768">{r['visited_at']}</td>
        </tr>"""

    return f"""<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<title>Kunjungan · Norma Admin</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{font-family:'Inter',sans-serif;background:#0a0a0f;color:#f0eeff;min-height:100vh;padding:2rem 2.5rem}}
h1{{font-size:1.4rem;font-weight:600;margin-bottom:.25rem}}
.meta{{color:#8884a8;font-size:.82rem;margin-bottom:1.5rem}}
.back{{display:inline-flex;align-items:center;gap:6px;color:#7ab8c9;text-decoration:none;font-size:.82rem;margin-bottom:1.5rem}}
.back:hover{{color:#f0eeff}}
.table-wrap{{background:#16161f;border:1px solid #ffffff12;border-radius:16px;overflow:hidden}}
table{{width:100%;border-collapse:collapse}}
thead tr{{background:#1c1c28}}
th{{padding:.75rem 1.25rem;font-size:.68rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#8884a8;text-align:left;border-bottom:1px solid #ffffff12}}
td{{padding:.8rem 1.25rem;border-bottom:1px solid #ffffff10;font-size:.83rem;vertical-align:top}}
tr:last-child td{{border-bottom:none}}
tbody tr:hover{{background:#1c1c28}}
</style>
</head>
<body>
<a href="/admin/messages" class="back">← Kembali ke Pesan</a>
<h1>Kunjungan Halaman</h1>
<p class="meta">Total kunjungan: <b style="color:#7ab8c9">{total}</b> &nbsp;·&nbsp; Total pesan: <b style="color:#c084a8">{msgs}</b></p>
<div class="table-wrap">
<table>
<thead><tr><th>#</th><th>Path</th><th>IP</th><th>User Agent</th><th>Waktu</th></tr></thead>
<tbody>{'<tr><td colspan="5" style="text-align:center;color:#4a4768;padding:2rem">Belum ada kunjungan.</td></tr>' if not rows else rows_html}</tbody>
</table>
</div>
</body>
</html>"""


# ── Entry point ───────────────────────────────────────────────────────────────
if __name__ == "__main__":
    init_db()
    print("🌸  Server berjalan di http://localhost:5000")
    print("📋  Halaman admin: http://localhost:5000/admin/messages")
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=False, host="0.0.0.0", port=port)
