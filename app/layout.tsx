import type { Metadata } from 'next';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SiteShell from '@/components/SiteShell';

export const metadata: Metadata = {
  title: {
    default: 'EcoLawns Denver | Professional Electric Lawn Care Services | Starting at $40/visit',
    template: '%s | EcoLawns Denver',
  },
  description:
    'Free quotes. Electric lawn mowing in Denver—quiet, battery-powered equipment, with charging supported by home solar and portable power on job sites. Weekly & bi-weekly mowing, spring/fall cleanup, snow removal. Licensed & insured. From $40/visit.',
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
  alternates: {
    canonical: 'https://ecolawnsdenver.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecolawnsdenver.com',
    siteName: 'EcoLawns Denver',
    title: 'EcoLawns Denver | Professional Electric Lawn Care Services',
    description:
      'Free quotes for Denver lawn care. Quiet electric mowing, solar-backed battery charging, spring/fall cleanup & snow removal. From $40/visit.',
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
    description:
      'Denver electric lawn care—free quotes, quiet battery equipment, solar-assisted charging. Mowing, cleanups & snow removal.',
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
        <GoogleAnalytics />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

