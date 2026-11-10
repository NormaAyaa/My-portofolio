'use client';

import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';

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
    <section id="hero">
      {/* Floating decorative stickers */}
      <div
        className="char-bounce"
        style={{ top: '15%', left: '4%', fontSize: '2.5rem', '--rot': '-8deg' } as React.CSSProperties}
      >
        🍓
      </div>
      <div
        className="char-swing"
        style={{ top: '18%', right: '5%', fontSize: '2.2rem' }}
      >
        🌸
      </div>
      <div
        className="char-spin"
        style={{ bottom: '14%', left: '8%', fontSize: '1.8rem' }}
      >
        ✨
      </div>
      <div
        className="char-jump"
        style={{ bottom: '12%', right: '7%', fontSize: '2.4rem' }}
      >
        🌷
      </div>
      <div
        className="char-float"
        style={{ top: '48%', left: '2%', fontSize: '2rem', '--r': '10deg' } as React.CSSProperties}
      >
        🍰
      </div>

      <div className="hero-board">
        {/* Main hero paper card */}
        <div className="paper-card hero-paper">
          <div className="pin"></div>
          <div
            className="tape"
            style={{
              top: '-8px',
              left: '28px',
              width: '68px',
              height: '17px',
              transform: 'rotate(-2deg)',
            }}
          ></div>
          <div
            className="tape"
            style={{
              top: '-8px',
              right: '40px',
              width: '45px',
              height: '17px',
              transform: 'rotate(1.5deg)',
            }}
          ></div>

          <div className="hero-tag-row">
            <div className="tag-sticker">
              <div className="pulse-dot"></div>
              {personalInfo.tag}
            </div>
          </div>

          <h1>
            Norma
            <br />
            Zuhrotul
            <br />
            <span className="name-red">Hayati</span>
          </h1>

          <p className="hero-desc">{personalInfo.description}</p>

          <div className="stats-row">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-chip">
                <div className="stat-num">{stat.num}</div>
                <div className="stat-lbl">{stat.lbl}</div>
              </div>
            ))}
          </div>

          <div className="hero-btns">
            <a
              href="#projects"
              className="btn-red"
              onClick={(e) => scrollTo(e, '#projects')}
            >
              Lihat Projects →
            </a>
            <a
              href="#contact"
              className="btn-outline"
              onClick={(e) => scrollTo(e, '#contact')}
            >
              Hubungi Saya 🌷
            </a>
            <button
              className="btn-outline"
              onClick={onOpenCv}
              style={{ borderColor: 'var(--red)', color: 'var(--red)' }}
            >
              📄 Lihat CV
            </button>
          </div>
        </div>

        {/* Sidebar scrapbook */}
        <div className="hero-sidebar">
          <div className="polaroid">
            <div className="polaroid-inner">
              <Image
                src="/norma-photo.png"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  borderRadius: '1px',
                }}
                priority
              />
            </div>
            <div className="polaroid-caption">{personalInfo.name}</div>
            <div
              className="tape"
              style={{
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '48px',
                height: '14px',
              }}
            ></div>
          </div>

          <div className="mini-note">
            {personalInfo.quote}
            <div
              style={{
                fontSize: '0.78rem',
                marginTop: '0.35rem',
                color: 'var(--brown-light)',
              }}
            >
              {personalInfo.quoteAuthor}
            </div>
          </div>

          <div className="gingham-info">
            <div className="gingham-info-inner">
              {personalInfo.location}
              <br />
              {personalInfo.educationSummary}
              <br />
              {personalInfo.workSummary}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
