import React from 'react';
import { skillsList } from '@/data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <div className="inner">
        <div className="sec-header fade-up">
          <div className="sec-label">✦ Expertise</div>
          <h2 className="sec-title">Skills & Tools 🛠️</h2>
          <p className="sec-sub">
            Kemampuan yang dibangun dari proyek nyata, internship, dan riset akademik.
          </p>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill, idx) => (
            <div
              key={idx}
              className="paper-card sk-paper fade-up"
              style={{ transitionDelay: `${(idx % 4) * 0.07}s` }}
            >
              <div className="sk-icon-wrap">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="tag-row">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`tag ${tag.highlight ? 'red' : ''}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
