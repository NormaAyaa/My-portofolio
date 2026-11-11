'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="canva-page-wrapper">
      {/* ── PART 1: "WHO AM I?" SECTION (FROM VIDEO FRAME 00:03) ── */}
      <div className="canva-whoami-section">
        <div className="canva-whoami-grid">
          {/* Photo on Left */}
          <div className="canva-whoami-photo">
            <Image
              src="/norma-whoami.jpg"
              alt="Norma Zuhrotul Hayati"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              style={{
                objectFit: 'cover',
                objectPosition: 'center 35%',
              }}
              priority
            />
          </div>

          {/* Narrative on Right */}
          <div>
            <h2 className="canva-whoami-title">Who am I? ✨</h2>

            <p className="canva-whoami-p">
              I&apos;m an <strong>AI & Data Engineer</strong> and fresh graduate in Informatics Engineering from <strong>Universitas Negeri Semarang (2025)</strong>, passionate about data analytics, machine learning, and artificial intelligence.
            </p>

            <p className="canva-whoami-p">
              My thesis focused on optimizing credit card default classification using <strong>Artificial Neural Networks (ANN)</strong> with <strong>XGBoost feature selection</strong>, <strong>SMOTE balancing</strong>, and <strong>Hybrid Explainable AI (SHAP + LIME)</strong> — achieving an accuracy of <strong>81.7%</strong>.
            </p>

            <p className="canva-whoami-p">
              I love bridging the gap between technical complexity and real-world impact — turning raw data into meaningful insights, explainable predictions, and actionable business recommendations 🌷
            </p>

            <div className="canva-whoami-tags">
              <span className="canva-tag-badge">🤖 Machine Learning</span>
              <span className="canva-tag-badge">🔍 Explainable AI (XAI)</span>
              <span className="canva-tag-badge">💬 LLMs & LangChain</span>
              <span className="canva-tag-badge">📊 Data Analytics</span>
              <span className="canva-tag-badge">🚀 Streamlit & Next.js</span>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a
                href="#contact"
                className="canva-btn-brown"
                onClick={scrollToContact}
              >
                Let&apos;s Connect →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 2: "MORE ABOUT ME" SIGNATURE SECTION WITH CURVED ARROWS (FRAME 00:05) ── */}
      <div className="canva-more-about-box">
        <div className="canva-pill-header-wrap" style={{ marginBottom: '1.5rem' }}>
          <div className="canva-section-pill">More About Me</div>
          <p className="canva-section-subtitle">
            A closer look at my background, research interests, and daily inspiration.
          </p>
        </div>

        <div className="canva-callout-stage">
          {/* Top Left Callout */}
          <div className="canva-callout-card callout-pos-tl">
            <h4>🎓 Academic Background</h4>
            <p>S1 Teknik Informatika UNNES, graduated with GPA 3.65 & Honours predicate.</p>
          </div>

          {/* Curved Arrow SVG TL -> Center */}
          <svg
            className="canva-curved-arrow"
            style={{ top: '80px', left: '260px', width: '130px', height: '80px' }}
            viewBox="0 0 130 80"
            fill="none"
          >
            <path
              d="M 10 20 Q 70 10 115 65"
              stroke="#d99222"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <polygon points="115,65 105,58 116,52" fill="#d99222" />
          </svg>

          {/* Top Right Callout */}
          <div className="canva-callout-card callout-pos-tr">
            <h4>🧠 Research & XAI</h4>
            <p>Passionate about Explainable AI (SHAP + LIME) to make ML models transparent & trustworthy.</p>
          </div>

          {/* Curved Arrow SVG TR -> Center */}
          <svg
            className="canva-curved-arrow"
            style={{ top: '80px', right: '260px', width: '130px', height: '80px' }}
            viewBox="0 0 130 80"
            fill="none"
          >
            <path
              d="M 120 20 Q 60 10 15 65"
              stroke="#d99222"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <polygon points="15,65 25,58 14,52" fill="#d99222" />
          </svg>

          {/* Center Avatar */}
          <div className="canva-center-avatar">
            <Image
              src="/norma-photo.png"
              alt="Norma Zuhrotul Hayati"
              fill
              sizes="220px"
              style={{
                objectFit: 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>

          {/* Bottom Left Callout */}
          <div className="canva-callout-card callout-pos-bl">
            <h4>💼 Corporate Experience</h4>
            <p>Data Science Intern at PT. DataIns: Built multi-PDF QA systems with LangChain & OpenAI.</p>
          </div>

          {/* Curved Arrow SVG BL -> Center */}
          <svg
            className="canva-curved-arrow"
            style={{ bottom: '90px', left: '260px', width: '130px', height: '80px' }}
            viewBox="0 0 130 80"
            fill="none"
          >
            <path
              d="M 10 60 Q 70 70 115 15"
              stroke="#d99222"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <polygon points="115,15 105,22 116,28" fill="#d99222" />
          </svg>

          {/* Bottom Right Callout */}
          <div className="canva-callout-card callout-pos-br">
            <h4>📍 Origin & Global Reach</h4>
            <p>Based in Semarang, Indonesia. Open for remote & on-site AI/Data roles globally 🌷</p>
          </div>

          {/* Curved Arrow SVG BR -> Center */}
          <svg
            className="canva-curved-arrow"
            style={{ bottom: '90px', right: '260px', width: '130px', height: '80px' }}
            viewBox="0 0 130 80"
            fill="none"
          >
            <path
              d="M 120 60 Q 60 70 15 15"
              stroke="#d99222"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              fill="none"
            />
            <polygon points="15,15 25,22 14,28" fill="#d99222" />
          </svg>
        </div>
      </div>
    </section>
  );
}
