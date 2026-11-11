'use client';

import React from 'react';
import { educationHistory } from '@/data/portfolioData';

export default function Certificates() {
  return (
    <section id="education" className="canva-page-wrapper">
      <div className="canva-certs-section">
        <div className="canva-pill-header-wrap">
          <div className="canva-section-pill">Education & Experience</div>
          <p className="canva-section-subtitle">
            Formal degrees, verified internships, and academic milestones.
          </p>
        </div>

        <div className="canva-certs-grid">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="canva-cert-card">
              <span className="canva-cert-badge">Verified Credential</span>
              <h3 className="canva-cert-title">{edu.title}</h3>
              <p className="canva-cert-inst">{edu.sub}</p>
              <span className="canva-cert-honor">{edu.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

