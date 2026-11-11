'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyWorkWithMe() {
  const points = [
    {
      title: 'Research Before Everything',
      desc: 'Every model and data pipeline is backed by solid academic research, meticulous preprocessing, and cross-validated evaluation metrics.',
    },
    {
      title: 'Explainable, Not Black-Box',
      desc: 'Specialized in Explainable AI (SHAP & LIME) so stakeholders and domain experts understand exactly why the model makes each prediction.',
    },
    {
      title: 'End-to-End Delivery',
      desc: 'Bridging model training to real-world usage through interactive web applications (Streamlit, FastAPI, & Next.js).',
    },
    {
      title: 'Ownership & Reliability',
      desc: 'Committed to transparent communication, hitting development milestones, and writing clean, reproducible code.',
    },
    {
      title: 'Ready to Help, Easy to Reach',
      desc: 'Accessible via Email, GitHub, and WhatsApp with fast response times and an eager, collaborative attitude.',
    },
  ];

  return (
    <section id="why-me" className="canva-page-wrapper">
      <div className="canva-pill-header-wrap">
        <div className="canva-section-pill">Why Work With Me</div>
        <p className="canva-section-subtitle">
          Here is what you can expect when we collaborate, beyond just model training:
        </p>
      </div>

      <div className="canva-why-card">
        {/* Photo on Left */}
        <div className="canva-why-photo">
          <Image
            src="/norma-photo.png"
            alt="Norma Zuhrotul Hayati"
            fill
            sizes="(max-width: 768px) 100vw, 440px"
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </div>

        {/* Value Points on Right */}
        <div>
          <div className="canva-why-list">
            {points.map((pt, idx) => (
              <div key={idx} className="canva-why-item">
                <div className="canva-check-circle">✓</div>
                <div>
                  <h4 className="canva-why-heading">{pt.title}</h4>
                  <p className="canva-why-text">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="canva-why-footer-banner">
            &ldquo;When you work with me, you get someone who genuinely cares about data integrity and treats every project as an opportunity to build trustworthy AI. Let&apos;s build something impactful together.&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
