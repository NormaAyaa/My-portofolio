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
      onNotify('Mohon isi Nama, Email, dan Pesan terlebih dahulu 🌷', 'error');
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
        onNotify('Gagal mengirim pesan ke Netlify. Silakan coba lagi nanti.', 'error');
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
    <section id="contact" className="canva-page-wrapper">
      <div className="canva-contact-section">
        <div className="canva-pill-header-wrap">
          <div className="canva-section-pill">Contact Me</div>
          <p className="canva-section-subtitle">
            Let&apos;s build intelligent, explainable, and trustworthy AI solutions together.
          </p>
        </div>

        <div className="canva-contact-grid">
          {/* Left Column: Contact Form */}
          <div className="canva-contact-form-card">
            <h3 className="canva-form-title">Send a Message</h3>
            <p className="canva-form-sub">
              Feel free to reach out anytime for collaboration, project inquiries, or job opportunities.
            </p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out if you&apos;re human:{' '}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="canva-input-group">
                <label htmlFor="c-name" className="canva-input-label">
                  Nama Lengkap ✏️
                </label>
                <input
                  type="text"
                  id="c-name"
                  name="name"
                  placeholder="Nama kamu"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="canva-input-field"
                />
              </div>

              <div className="canva-input-group">
                <label htmlFor="c-email" className="canva-input-label">
                  Alamat Email 📮
                </label>
                <input
                  type="email"
                  id="c-email"
                  name="email"
                  placeholder="email@kamu.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="canva-input-field"
                />
              </div>

              <div className="canva-input-group">
                <label htmlFor="c-subject" className="canva-input-label">
                  Subjek Pesan 📌
                </label>
                <input
                  type="text"
                  id="c-subject"
                  name="subject"
                  placeholder="Topik pembicaraan..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="canva-input-field"
                />
              </div>

              <div className="canva-input-group">
                <label htmlFor="c-msg" className="canva-input-label">
                  Isi Pesan 🌷
                </label>
                <textarea
                  id="c-msg"
                  name="message"
                  placeholder="Ceritakan tentang proyek atau ide kolaborasimu..."
                  value={formData.message}
                  onChange={handleChange}
                  className="canva-textarea-field"
                ></textarea>
              </div>

              <button
                type="submit"
                className="canva-btn-brown"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim... 🍓' : 'Send Message 🌸'}
              </button>
            </form>
          </div>

          {/* Right Column: "Let's work together!" & Contact Cards */}
          <div className="canva-contact-info-wrap">
            <div style={{ marginBottom: '0.5rem' }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: 'var(--canva-text)',
                  lineHeight: 1.15,
                  marginBottom: '0.85rem',
                }}
              >
                Let&apos;s work <br />
                together! 🌸
              </h2>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--canva-text-muted)',
                  lineHeight: 1.7,
                }}
              >
                Whether you&apos;re looking for a dedicated AI & Data Engineer, a collaborator for machine learning research, or an end-to-end data pipeline builder — I&apos;d love to hear about your project!
              </p>
            </div>

            {personalInfo.contacts.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                target={c.type !== 'email' ? '_blank' : undefined}
                rel={c.type !== 'email' ? 'noopener noreferrer' : undefined}
                className="canva-contact-card-item"
              >
                <div className="canva-contact-icon">{c.icon}</div>
                <div>
                  <div className="canva-contact-label">{c.label}</div>
                  <div className="canva-contact-val">{c.val}</div>
                </div>
              </a>
            ))}

            <div className="canva-contact-quote-card">
              <p>
                ✨ &ldquo;Always excited to discuss AI, data systems, and impactful technology projects!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
