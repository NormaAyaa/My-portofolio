'use client';

import React from 'react';
import { educationHistory } from '@/data/portfolioData';

export default function About() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <div className="inner">
        <div className="sec-header fade-up">
          <div className="sec-label">✦ About Me</div>
          <h2 className="sec-title">
            Data & AI enthusiast
            <br />
            dari Semarang 🍵
          </h2>
        </div>

        <div className="about-layout">
          <div className="paper-card about-paper fade-up">
            <div
              className="tape"
              style={{
                top: '-8px',
                left: '18px',
                width: '60px',
                height: '16px',
                transform: 'rotate(-1.5deg)',
              }}
            ></div>
            <p>
              I&apos;m a fresh graduate in Informatics Engineering from
              Universitas Negeri Semarang (2025), passionate about data analytics,
              machine learning, and artificial intelligence.
            </p>
            <p>
              My thesis focused on optimizing credit card default classification
              using ANN with XGBoost feature selection, SMOTE balancing, and
              Hybrid Explainable AI (SHAP + LIME) — achieving 81.7% accuracy.
            </p>
            <p>
              I love bridging the gap between technical complexity and
              real-world impact — turning raw data into meaningful insights and
              actionable business recommendations 🌷
            </p>
            <a
              href="#contact"
              className="btn-red"
              onClick={scrollToContact}
              style={{ display: 'inline-block', marginTop: '1rem' }}
            >
              Kerja Sama →
            </a>
          </div>

          <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
            <div
              style={{
                fontFamily: "var(--font-caveat), 'Caveat', cursive",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--red)',
                marginBottom: '0.85rem',
                letterSpacing: '0.04em',
              }}
            >
              📚 EDUCATION & EXPERIENCE
            </div>

            <div className="edu-stack">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="edu-card">
                  <h4>{edu.title}</h4>
                  <div className="edu-sub">{edu.sub}</div>
                  <div
                    className="edu-badge"
                    style={
                      edu.badgeStyle
                        ? Object.fromEntries(
                            edu.badgeStyle
                              .split(';')
                              .filter(Boolean)
                              .map((rule) => {
                                const [key, val] = rule.split(':');
                                return [
                                  key.trim().replace(/-([a-z])/g, (_, l) => l.toUpperCase()),
                                  val.trim(),
                                ];
                              })
                          )
                        : undefined
                    }
                  >
                    {edu.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
