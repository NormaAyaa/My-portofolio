'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TechIcon } from './TechIcons';

interface TechTool {
  name: string;
  category: string;
  top: string;
  left: string;
  shape?: 'squircle' | 'circle';
  floatDelay?: number;
}

export default function WhatsInMyBag() {
  const [activeTool, setActiveTool] = useState<TechTool | null>(null);

  // App icon tiles arranged closely hugging the bag in a tight halo/heart formation
  // Matching the Canva video reference (frame 00:10 - 00:11)
  const tools: TechTool[] = [
    // Left curve (closely following the left strap and bag edge)
    { name: 'Python', category: 'Programming & Data', top: '14%', left: '17%', shape: 'squircle', floatDelay: 0.1 },
    { name: 'PyTorch', category: 'Deep Learning', top: '30%', left: '13%', shape: 'circle', floatDelay: 0.4 },
    { name: 'Pandas', category: 'Data Analysis', top: '46%', left: '11%', shape: 'squircle', floatDelay: 0.2 },
    { name: 'NumPy', category: 'Numerical Computing', top: '62%', left: '12%', shape: 'squircle', floatDelay: 0.6 },
    { name: 'Scikit-learn', category: 'Machine Learning', top: '78%', left: '17%', shape: 'circle', floatDelay: 0.3 },

    // Top arch (hugging the apex and curves of the leather shoulder strap)
    { name: 'LangChain', category: 'Agent & LLM Framework', top: '6%', left: '27%', shape: 'squircle', floatDelay: 0.5 },
    { name: 'OpenAI', category: 'GPT Models & Embeddings', top: '1%', left: '39%', shape: 'circle', floatDelay: 0.2 },
    { name: 'Claude', category: 'Advanced Reasoning', top: '1%', left: '52%', shape: 'circle', floatDelay: 0.7 },
    { name: 'Hugging Face', category: 'Open-Source Models', top: '5%', left: '64%', shape: 'circle', floatDelay: 0.3 },
    { name: 'FastAPI', category: 'High-Performance API', top: '12%', left: '74%', shape: 'circle', floatDelay: 0.6 },

    // Right curve (hugging the right strap loop and bag contours)
    { name: 'Streamlit', category: 'Data Web Applications', top: '24%', left: '79%', shape: 'squircle', floatDelay: 0.2 },
    { name: 'Docker', category: 'Containers & Deployment', top: '38%', left: '81%', shape: 'squircle', floatDelay: 0.5 },
    { name: 'PostgreSQL', category: 'Relational & Vector DB', top: '52%', left: '80%', shape: 'circle', floatDelay: 0.1 },
    { name: 'GitHub', category: 'Version Control & CI/CD', top: '66%', left: '77%', shape: 'circle', floatDelay: 0.4 },
    { name: 'SHAP', category: 'Explainable AI (Thesis)', top: '80%', left: '71%', shape: 'squircle', floatDelay: 0.3 },
    { name: 'Notion', category: 'Research & Knowledge', top: '57%', left: '69%', shape: 'squircle', floatDelay: 0.5 },
  ];

  return (
    <section id="my-bag" className="canva-page-wrapper" style={{ marginBottom: '6rem' }}>
      {/* Stage Header */}
      <div className="canva-pill-header-wrap" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <div className="canva-section-pill">Tech Stack & Tools</div>
        <h2 className="canva-section-title" style={{ marginTop: '0.8rem', marginBottom: '0.4rem' }}>
          What&apos;s in My Bag? ✨
        </h2>
        <p className="canva-section-subtitle">
          The engineering toolkit, AI frameworks, and data platforms I work with every day.
        </p>
      </div>

      {/* Visual Arena: Transparent Bag + Pure Floating App Icons Closely Hugging Bag */}
      <div className="canva-bag-interactive-arena">
        {/* Floating App Icons surrounding the bag closely */}
        {tools.map((t, idx) => (
          <div
            key={idx}
            className={`canva-app-icon-tile ${t.shape === 'circle' ? 'shape-circle' : 'shape-squircle'}`}
            style={{
              top: t.top,
              left: t.left,
              animationDelay: `${t.floatDelay || 0}s`,
            }}
            onMouseEnter={() => setActiveTool(t)}
            onMouseLeave={() => setActiveTool(null)}
            onClick={() => setActiveTool(t)}
            aria-label={`${t.name}: ${t.category}`}
          >
            <TechIcon name={t.name} size={38} />

            {/* Floating Tooltip Bubble */}
            <div className="canva-tile-tooltip">
              <span className="tooltip-title">{t.name}</span>
              <span className="tooltip-cat">{t.category}</span>
            </div>
          </div>
        ))}

        {/* Center Large Transparent Bag */}
        <div className="canva-center-bag-graphic">
          <Image
            src="/whats-in-my-bag-transparent.png"
            alt="What's in my bag — Norma Zuhrotul Hayati"
            width={440}
            height={500}
            priority
            className="canva-transparent-bag-img"
          />
          {/* Subtle natural ground shadow beneath the leather bag */}
          <div className="canva-bag-ground-shadow" />
        </div>
      </div>

      {/* Active Selection / Tool Detail Strip */}
      <div className="canva-tool-info-strip">
        {activeTool ? (
          <div className="tool-strip-active animate-fade-in">
            <TechIcon name={activeTool.name} size={24} />
            <span className="tool-strip-name">{activeTool.name}</span>
            <span className="tool-strip-dot">·</span>
            <span className="tool-strip-cat">{activeTool.category}</span>
          </div>
        ) : (
          <div className="tool-strip-hint">
            Arahkan kursor atau sentuh logo untuk melihat detail tools ✦
          </div>
        )}
      </div>

      {/* Signature Quote from the Canva Video */}
      <div className="canva-bag-quote-wrapper">
        <p className="canva-bag-signature-quote">
          &ldquo;The tools I use took years to learn, but the values I bring took a lifetime to choose.&rdquo;
        </p>
        <span className="canva-bag-quote-author">
          — Norma Zuhrotul Hayati, AI & Data Engineer
        </span>
      </div>
    </section>
  );
}
