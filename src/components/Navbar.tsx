'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onOpenCv: () => void;
}

export default function Navbar({ onOpenCv }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a
        href="#hero"
        className="logo"
        onClick={(e) => handleNavClick(e, '#hero')}
      >
        Ay<span>.dev 🍓</span>
      </a>

      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} id="navLinks">
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            Contact
          </a>
        </li>
        <li>
          <button
            className="nav-cv-btn"
            onClick={() => {
              setIsMenuOpen(false);
              onOpenCv();
            }}
          >
            📄 Lihat CV
          </button>
        </li>
      </ul>
    </nav>
  );
}
