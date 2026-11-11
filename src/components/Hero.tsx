'use client';

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  onOpenCv: () => void;
}

export default function Hero({ onOpenCv }: HeroProps) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="canva-hero">
      <div className="canva-page-wrapper">
        <div className="canva-hero-container">
          {/* Left Column: Canva Hero Text */}
          <div>
            <div className="canva-hero-intro">Hi, I am</div>
            <h1 className="canva-hero-name">Norma Zuhrotul</h1>
            
            {/* Canva Role Pill Banner */}
            <div className="canva-role-pill">
              AI & Data Engineer | Machine Learning, LLM & XAI Researcher
            </div>

            <p className="canva-hero-desc">
              I help organizations and digital products turn complex, messy data into smart and trustworthy decisions through research-driven machine learning, explainable AI, and end-to-end web deployment.
            </p>

            <div className="canva-hero-btns">
              <a
                href="#contact"
                className="canva-btn-brown"
                onClick={(e) => scrollTo(e, '#contact')}
              >
                Hire Me 🌸
              </a>
              <a
                href="#projects"
                className="canva-btn-outline"
                onClick={(e) => scrollTo(e, '#projects')}
              >
                View Projects 🗂️
              </a>
              <button
                className="canva-btn-outline"
                onClick={onOpenCv}
                style={{ borderColor: 'var(--canva-gold-border)' }}
              >
                📄 Lihat CV
              </button>
            </div>
          </div>

          {/* Right Column: Photo Frame */}
          <div className="canva-hero-photo-wrap">
            <div className="canva-hero-photo-card">
              <Image
                src="/norma-photo.png"
                alt="Norma Zuhrotul Hayati"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
                priority
              />
            </div>
          </div>
        </div>

        {/* 4 Highlights Cards with Yellow Border (Frame 00:02 in Video) */}
        <div className="canva-stats-strip">
          <div className="canva-stats-grid">
            <div className="canva-stat-card">
              <span className="canva-stat-pill">3.65</span>
              <span className="canva-stat-label">GPA · With Honours</span>
            </div>

            <div className="canva-stat-card">
              <span className="canva-stat-pill">81.7%</span>
              <span className="canva-stat-label">Akurasi Riset Thesis</span>
            </div>

            <div className="canva-stat-card">
              <span className="canva-stat-pill">20</span>
              <span className="canva-stat-label">GitHub Repositories</span>
            </div>

            <div className="canva-stat-card">
              <span className="canva-stat-pill">6 Bln</span>
              <span className="canva-stat-label">Data Science Internship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
