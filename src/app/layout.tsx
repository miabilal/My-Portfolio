import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Muhammad Bilal - Software Engineer',
  description: 'Passionate Software Engineer specializing in mobile development, IoT solutions, and full-stack applications. Flutter, iOS, Node.js, and more.',
  keywords: [
    'Software Engineer',
    'Mobile Development',
    'Flutter',
    'iOS Development',
    'IoT Solutions',
    'Full Stack Developer',
    'React',
    'Node.js',
    'Muhammad Bilal'
  ],
  authors: [{ name: 'Muhammad Bilal' }],
  creator: 'Muhammad Bilal',
  publisher: 'Muhammad Bilal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mbilal.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Muhammad Bilal - Software Engineer',
    description: 'Passionate Software Engineer specializing in mobile development, IoT solutions, and full-stack applications.',
    url: 'https://mbilal.dev',
    siteName: 'Muhammad Bilal Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Bilal - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Bilal - Software Engineer',
    description: 'Passionate Software Engineer specializing in mobile development, IoT solutions, and full-stack applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}