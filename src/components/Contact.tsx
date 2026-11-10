'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';

interface ContactProps {
  onNotify: (message: string, type: 'success' | 'error') => void;
}

export default function Contact({ onNotify }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      onNotify('Mohon isi Nama, Email, dan Pesan dulu ya! 🌷', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }).toString(),
      });

      if (response.ok) {
        onNotify('Pesan berhasil dikirim! Terima kasih 🌸', 'success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        onNotify(
          'Gagal mengirim pesan ke Netlify. Silakan coba lagi nanti.',
          'error'
        );
      }
    } catch {
      onNotify(
        'Gagal terhubung ke server. Silakan hubungi langsung via WhatsApp atau Email.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="inner">
        <div className="sec-header fade-up">
          <div className="sec-label">✦ Contact</div>
          <h2 className="sec-title">Mari berkolaborasi! 🌸</h2>
          <p className="sec-sub">
            Tertarik bekerja sama atau punya proyek AI yang menarik? Kirim pesan!
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact form card */}
          <div className="paper-card contact-paper fade-up">
            <div
              className="tape"
              style={{
                top: '-8px',
                left: '18px',
                width: '62px',
                height: '16px',
                transform: 'rotate(-1deg)',
              }}
            ></div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden field for Netlify Forms routing */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out if you&apos;re human:{' '}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="form-row-2">
                <div className="fg">
                  <label htmlFor="c-name">Nama ✏️</label>
                  <input
                    type="text"
                    id="c-name"
                    name="name"
                    placeholder="Nama kamu"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="fg">
                  <label htmlFor="c-email">Email 📮</label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    placeholder="email@kamu.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="fg">
                <label htmlFor="c-subject">Subjek 📌</label>
                <input
                  type="text"
                  id="c-subject"
                  name="subject"
                  placeholder="Topik pembicaraan..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="fg">
                <label htmlFor="c-msg">Pesan 🌷</label>
                <textarea
                  id="c-msg"
                  name="message"
                  placeholder="Ceritakan proyekmu atau pertanyaan kamu..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim... 🍓' : 'Kirim Pesan 🍓'}
              </button>
            </form>
          </div>

          {/* Social and contact details */}
          <div
            className="contact-deco fade-up"
            style={{ transitionDelay: '0.15s' }}
          >
            {personalInfo.contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                target={c.type !== 'email' ? '_blank' : undefined}
                rel={c.type !== 'email' ? 'noopener noreferrer' : undefined}
                className="contact-card"
              >
                <div className="contact-card-icon">{c.icon}</div>
                <div>
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-val">{c.val}</div>
                </div>
              </a>
            ))}

            <div className="gingham-box">
              <p>
                ✨ Selalu senang berdiskusi tentang AI, data, dan kolaborasi proyek keren!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
