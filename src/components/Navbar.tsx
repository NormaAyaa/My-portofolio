'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onOpenCv: () => void;
}

export default function Navbar({ onOpenCv }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="canva-navbar">
      <div className="canva-nav-inner">
        <a
          href="#hero"
          className="canva-logo-box"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <div className="canva-logo-circle">NZ</div>
          <span className="canva-logo-text">Norma.</span>
        </a>

        <ul className={`canva-nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => handleNavClick(e, '#education')}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#why-me" onClick={(e) => handleNavClick(e, '#why-me')}>
              Why Me
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>

        <div className="canva-nav-right">
          <button
            className="canva-btn-brown"
            style={{ padding: '0.55rem 1.4rem', fontSize: '0.88rem' }}
            onClick={() => {
              setIsMenuOpen(false);
              onOpenCv();
            }}
          >
            📄 Lihat CV
          </button>

          <button
            className="canva-hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
