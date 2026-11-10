'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';
import Notification from '@/components/Notification';

export default function Home() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const showNotification = useCallback(
    (message: string, type: 'success' | 'error') => {
      setNotification({ message, type, isVisible: true });
    },
    []
  );

  // Auto-dismiss notification after 4 seconds
  useEffect(() => {
    if (!notification.isVisible) return;

    const timer = setTimeout(() => {
      setNotification((prev) => ({ ...prev, isVisible: false }));
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification.isVisible]);

  // Fade-up scroll intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navbar onOpenCv={() => setIsCvOpen(true)} />
      <Hero onOpenCv={() => setIsCvOpen(true)} />
      <About />
      <Skills />
      <Projects />
      <Contact onNotify={showNotification} />
      <Footer />

      {/* CV Preview Modal */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />

      {/* Floating feedback toast */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
      />
    </main>
  );
}
