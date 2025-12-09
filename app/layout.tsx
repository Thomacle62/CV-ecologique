import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'CV de Thomas Calujek',
  description:
    'CV de Thomas Calujek, développeur web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
