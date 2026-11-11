'use client';

import React, { useState } from 'react';
import { projectsList } from '@/data/portfolioData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ai' | 'web' | 'other'>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  const counts = {
    all: projectsList.length,
    ai: projectsList.filter((p) => p.category === 'ai').length,
    web: projectsList.filter((p) => p.category === 'web').length,
    other: projectsList.filter((p) => p.category === 'other').length,
  };

  return (
    <section id="projects" className="canva-page-wrapper">
      <div className="canva-projects-section">
        <div className="canva-pill-header-wrap">
          <div className="canva-section-pill">My Previous Projects</div>
          <h2 className="canva-section-title" style={{ marginTop: '0.8rem', marginBottom: '0.4rem' }}>
            Featured Work & GitHub Repositories
          </h2>
          <p className="canva-section-subtitle">
            Kumpulan riset Explainable AI, Agentic LLM, Computer Vision, serta sistem informasi web & desktop.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="canva-project-filter-bar">
          <button
            type="button"
            className={`canva-filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Semua ({counts.all})
          </button>
          <button
            type="button"
            className={`canva-filter-tab ${activeCategory === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveCategory('ai')}
          >
            🧠 AI & Machine Learning ({counts.ai})
          </button>
          <button
            type="button"
            className={`canva-filter-tab ${activeCategory === 'web' ? 'active' : ''}`}
            onClick={() => setActiveCategory('web')}
          >
            🌐 Web & Enterprise ({counts.web})
          </button>
          <button
            type="button"
            className={`canva-filter-tab ${activeCategory === 'other' ? 'active' : ''}`}
            onClick={() => setActiveCategory('other')}
          >
            💻 Desktop & Stats ({counts.other})
          </button>
        </div>

        {/* Projects Grid */}
        <div className="canva-projects-grid">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="canva-project-card animate-fade-in">
              {/* Canva Card Banner */}
              <div className="canva-project-banner">
                <span className="canva-project-tag">{proj.badge.text}</span>
                <span style={{ fontSize: '1.4rem' }}>{proj.emoji}</span>
              </div>

              {/* Card Body */}
              <div className="canva-project-body">
                <h3 className="canva-project-title">{proj.title}</h3>
                <p className="canva-project-desc">{proj.description}</p>

                {/* Tech Stack Pills */}
                <div className="canva-project-stack">
                  {proj.stack.map((tech, sIdx) => (
                    <span key={sIdx} className="canva-stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="canva-project-actions">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="canva-btn-outline"
                      style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      ↗ GitHub Repo
                    </a>
                  )}
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="canva-btn-brown"
                      style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                    >
                      ▶ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to GitHub Profile */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            href="https://github.com/NormaAyaa"
            target="_blank"
            rel="noopener noreferrer"
            className="canva-btn-brown"
            style={{
              padding: '0.85rem 2.25rem',
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>Lihat Semua 20 Repositori di GitHub @NormaAyaa</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
