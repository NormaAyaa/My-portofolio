import type { Metadata } from 'next';
import { Patrick_Hand, Caveat, Special_Elite } from 'next/font/google';
import './globals.css';

const patrickHand = Patrick_Hand({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-patrick-hand',
  display: 'swap',
});

const caveat = Caveat({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

const specialElite = Special_Elite({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-special-elite',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Norma Zuhrotul Hayati 🍓',
  description: 'Norma Zuhrotul Hayati – AI & Data Engineer Portfolio',
  keywords: [
    'Norma Zuhrotul Hayati',
    'AI Engineer',
    'Data Engineer',
    'Machine Learning',
    'Portfolio',
    'Explainable AI',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${patrickHand.variable} ${caveat.variable} ${specialElite.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
