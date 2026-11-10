import React from 'react';
import { projectsList } from '@/data/portfolioData';

export default function Projects() {
  return (
    <section id="projects">
      <div className="inner">
        <div className="sec-header fade-up">
          <div className="sec-label">✦ Portfolio</div>
          <h2 className="sec-title">GitHub Projects 🗂️</h2>
          <p className="sec-sub">
            Proyek nyata dari riset akademik, internship, dan eksplorasi pribadi di dunia AI & data.
          </p>
        </div>

        <div className="proj-grid">
          {projectsList.map((proj, idx) => (
            <div
              key={idx}
              className="paper-card proj-card fade-up"
              style={{ transitionDelay: `${(idx % 3) * 0.08}s` }}
            >
              <div className="proj-top">
                <div className="proj-emoji-big">{proj.emoji}</div>
                <span className={`proj-badge ${proj.badge.class}`}>
                  {proj.badge.text}
                </span>
              </div>

              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="proj-stack">
                {proj.stack.map((tech, sIdx) => (
                  <span key={sIdx}>{tech}</span>
                ))}
              </div>

              <div className="proj-links">
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-link"
                  >
                    ↗ GitHub Repo
                  </a>
                )}
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-link"
                  >
                    ▶ Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
