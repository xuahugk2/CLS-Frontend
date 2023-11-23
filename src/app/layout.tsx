import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { cx } from '@/utils';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-in' });
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-mr' });

export const metadata: Metadata = {
  title: 'CLS - Coding Life Sharing',
  description: 'We are going to share our coding experience daily life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, 'font-mr bg-light dark:bg-dark')}>{children}</body>
    </html>
  );
}
