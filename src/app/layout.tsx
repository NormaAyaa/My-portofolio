import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Norma Zuhrotul Hayati | AI & Data Engineer',
  description:
    'Portfolio of Norma Zuhrotul Hayati – AI & Data Engineer specializing in Machine Learning, Explainable AI (SHAP + LIME), and LLMs.',
  keywords: [
    'Norma Zuhrotul Hayati',
    'AI Engineer',
    'Data Engineer',
    'Machine Learning',
    'Explainable AI',
    'Portfolio',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Playfair+Display:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
