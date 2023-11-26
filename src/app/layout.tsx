import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { cx } from '@/utils';
// Custom components/libs
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteMetadata from '@/utils/SiteMetadata';
// css
import './globals.css';
import Script from 'next/script';

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
  metadataBase: new URL(SiteMetadata.siteUrl),
  title: {
    template: `%s | ${SiteMetadata.title}`,
    default: SiteMetadata.title, // TODO
  },
  description: SiteMetadata.description,
  openGraph: {
    title: SiteMetadata.title,
    description: SiteMetadata.description,
    url: SiteMetadata.siteUrl,
    siteName: SiteMetadata.title,
    images: [SiteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: SiteMetadata.title,
    images: [SiteMetadata.socialBanner],
  },
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
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
