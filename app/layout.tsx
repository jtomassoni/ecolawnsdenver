import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: {
    default: 'EcoLawns Denver | Professional Electric Lawn Care Services | Starting at $40/visit',
    template: '%s | EcoLawns Denver',
  },
  description: 'Professional eco-friendly lawn care in Denver, Colorado. Battery-powered electric mowers for quiet, emission-free lawn mowing. Weekly & bi-weekly service, spring cleanup, snow removal. Licensed & insured. Starting at $40/visit.',
  keywords: [
    'lawn care Denver',
    'electric lawn mowing Denver',
    'battery-powered lawn service',
    'eco-friendly lawn care Denver',
    'Denver lawn maintenance',
    'quiet lawn mowing',
    'electric lawn mower service',
    'snow removal Denver',
    'spring cleanup Denver',
    'lawn service Bear Valley',
    'sustainable lawn care Denver',
    'zero emission lawn service'
  ],
  authors: [{ name: 'EcoLawns Denver' }],
  creator: 'EcoLawns Denver',
  publisher: 'EcoLawns Denver',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ecolawnsdenver.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecolawnsdenver.com',
    siteName: 'EcoLawns Denver',
    title: 'EcoLawns Denver | Professional Electric Lawn Care Services',
    description: 'Professional eco-friendly lawn care in Denver with battery-powered electric equipment. Quiet, emission-free lawn mowing starting at $40/visit.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 2000,
        height: 1200,
        alt: 'Professional lawn care service in Denver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoLawns Denver | Professional Electric Lawn Care',
    description: 'Professional eco-friendly lawn care in Denver with battery-powered electric equipment. Quiet, emission-free service.',
    images: ['/images/hero.jpg'],
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
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-hidden" suppressHydrationWarning>
        <Navigation />
        <main className="flex-1 relative overflow-y-auto overflow-x-hidden min-h-[calc(100vh-60px)] w-full">
          {children}
        </main>
      </body>
    </html>
  );
}

