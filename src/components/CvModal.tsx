'use client';

import React, { useEffect } from 'react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CvModal({ isOpen, onClose }: CvModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="cv-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="cv-modal-card">
        <div className="cv-modal-header">
          <h3 id="cv-modal-title" className="cv-modal-title">
            📄 Curriculum Vitae · Norma Zuhrotul Hayati
          </h3>
          <div className="cv-modal-actions">
            <a
              href="/cv-norma.pdf"
              download="CV_Norma_Zuhrotul_Hayati.pdf"
              className="btn-red"
              style={{
                fontSize: '0.95rem',
                padding: '4px 12px',
                transform: 'none',
              }}
            >
              ⬇ Unduh PDF
            </a>
            <button
              className="cv-close-btn"
              onClick={onClose}
              aria-label="Tutup CV"
            >
              &times;
            </button>
          </div>
        </div>

        <div className="cv-modal-body">
          <iframe
            src="/cv-norma.pdf#toolbar=1"
            title="Curriculum Vitae Norma Zuhrotul Hayati"
          />
        </div>
      </div>
    </div>
  );
}
