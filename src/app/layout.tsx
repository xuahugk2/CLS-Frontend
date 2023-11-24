import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { cx } from '@/utils';
// Custom components/libs
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// css
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-in',
});
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mr',
});

export const metadata: Metadata = {
  title: 'Coding Life Sharing',
  description: 'We are going to share our coding experience daily life.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          'font-mr bg-light dark:bg-dark'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
