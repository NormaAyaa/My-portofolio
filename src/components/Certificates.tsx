'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { educationHistory, certificatesList } from '@/data/portfolioData';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const cert = certificatesList[0];

  return (
    <section id="education" className="canva-page-wrapper" style={{ marginBottom: '6rem' }}>
      <div className="canva-certs-section">
        {/* Stage Header */}
        <div className="canva-pill-header-wrap" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="canva-section-pill">Certifications & Credentials</div>
          <h2 className="canva-section-title" style={{ marginTop: '0.8rem', marginBottom: '0.4rem' }}>
            Sertifikasi Resmi & Riwayat Pendidikan
          </h2>
          <p className="canva-section-subtitle">
            Kualifikasi kejuruan bersertifikat resmi Kementerian Ketenagakerjaan RI, gelar sarjana komputer, dan pengalaman industri.
          </p>
        </div>

        {/* ── FEATURED CERTIFICATE SHOWCASE ── */}
        <div className="canva-cert-featured-card">
          <div className="canva-cert-featured-grid">
            {/* Left: Certificate Preview Thumbnail */}
            <div
              className="canva-cert-image-container"
              onClick={() => setSelectedCert(cert.image)}
              title="Klik untuk melihat sertifikat ukuran penuh"
            >
              <div className="canva-cert-image-wrapper">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={600}
                  height={432}
                  className="canva-cert-thumb-img"
                  priority
                />
                <div className="canva-cert-image-overlay">
                  <span className="canva-cert-zoom-btn">🔍 Lihat Sertifikat HD</span>
                </div>
              </div>
              <span className="canva-cert-caption">
                📜 Sertifikat Resmi No. {cert.credentialId} · BBPVP Semarang
              </span>
            </div>

            {/* Right: Certificate Detailed Information */}
            <div className="canva-cert-details">
              <div className="canva-cert-top-badge">
                <span className="canva-cert-status-pill">✓ Verified Official Credential</span>
                <span className="canva-cert-hours-pill">⏱️ {cert.hours}</span>
              </div>

              <h3 className="canva-cert-featured-title">{cert.title}</h3>

              <div className="canva-cert-issuers-box">
                <p className="canva-cert-issuer-main">
                  🏛️ <strong>{cert.issuer}</strong>
                </p>
                <p className="canva-cert-issuer-sub">
                  📍 {cert.organizer} · {cert.date}
                </p>
              </div>

              <div className="canva-cert-desc-box">
                <h4 className="canva-cert-desc-heading">Keterangan Pelatihan:</h4>
                <p className="canva-cert-desc-text">{cert.description}</p>
              </div>

              {/* Competencies Acquired */}
              <div className="canva-cert-skills-wrap">
                <span className="canva-cert-skills-label">Kompetensi yang Dicapai:</span>
                <div className="canva-cert-skills-list">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="canva-cert-skill-tag">
                      ✦ {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="canva-cert-actions">
                <button
                  type="button"
                  className="canva-btn-brown"
                  onClick={() => setSelectedCert(cert.image)}
                  style={{ padding: '0.65rem 1.6rem', fontSize: '0.9rem' }}
                >
                  🔍 Preview Sertifikat HD
                </button>
                <a
                  href={cert.image}
                  download="Sertifikat-Web-Programming-AI-Norma.jpg"
                  className="canva-btn-outline"
                  style={{ padding: '0.65rem 1.6rem', fontSize: '0.9rem' }}
                >
                  ⬇️ Unduh Sertifikat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACADEMIC & INTERNSHIP MILESTONES ── */}
        <div style={{ marginTop: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: '1.45rem',
                color: 'var(--canva-brown-dark)',
                fontWeight: 700,
              }}
            >
              Academic Background & Experience
            </h3>
          </div>

          <div className="canva-certs-grid">
            {educationHistory.map((edu, idx) => (
              <div key={idx} className="canva-cert-card">
                <span className="canva-cert-badge">Verified Academic Record</span>
                <h3 className="canva-cert-title">{edu.title}</h3>
                <p className="canva-cert-inst">{edu.sub}</p>
                <span className="canva-cert-honor" style={edu.badgeStyle ? { background: '#f6f3ed' } : {}}>
                  {edu.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX MODAL FOR FULL-RESOLUTION CERTIFICATE ── */}
      {selectedCert && (
        <div className="canva-cert-lightbox-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="canva-cert-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="canva-cert-lightbox-header">
              <span className="lightbox-title">{cert.title}</span>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup preview sertifikat"
              >
                ✕
              </button>
            </div>
            <div className="canva-cert-lightbox-img-wrap">
              <Image
                src={selectedCert}
                alt="Sertifikat Ukuran Penuh"
                width={1024}
                height={738}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  display: 'block',
                }}
                priority
              />
            </div>
            <div className="canva-cert-lightbox-footer">
              <span style={{ fontSize: '0.85rem', color: 'var(--canva-text-muted)' }}>
                Nomor Sertifikat: {cert.credentialId} · BBPVP Semarang
              </span>
              <a
                href={selectedCert}
                download="Sertifikat-Web-Programming-AI-Norma.jpg"
                className="canva-btn-brown"
                style={{ padding: '0.45rem 1.25rem', fontSize: '0.85rem' }}
              >
                ⬇️ Unduh Asli
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
