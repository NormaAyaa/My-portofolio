'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import WhatsInMyBag from '@/components/WhatsInMyBag';
import Projects from '@/components/Projects';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Certificates from '@/components/Certificates';
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

  useEffect(() => {
    if (!notification.isVisible) return;

    const timer = setTimeout(() => {
      setNotification((prev) => ({ ...prev, isVisible: false }));
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification.isVisible]);

  return (
    <main>
      <Navbar onOpenCv={() => setIsCvOpen(true)} />
      <Hero onOpenCv={() => setIsCvOpen(true)} />
      <About />
      <Skills />
      {/* "What's in my bag" visual component matching video */}
      <WhatsInMyBag />
      <Projects />
      <WhyWorkWithMe />
      <Certificates />
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
