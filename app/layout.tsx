import type { Metadata } from 'next';
import { headers } from 'next/headers';
import './globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import SiteShell from '@/components/SiteShell';
import { verifySession } from '@/lib/auth';

export const metadata: Metadata = {
  title: {
    default: 'EcoLawns Denver | Permanently Closed',
    template: '%s | EcoLawns Denver',
  },
  description:
    'EcoLawns Denver is permanently closed and no longer in operation. We are not accepting new customers, quotes, or bookings.',
  keywords: ['EcoLawns Denver', 'closed', 'Denver lawn care'],
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
    title: 'EcoLawns Denver | Permanently Closed',
    description:
      'EcoLawns Denver is permanently closed and no longer in operation. We are not accepting new customers or bookings.',
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
    title: 'EcoLawns Denver | Permanently Closed',
    description:
      'EcoLawns Denver is permanently closed and no longer in operation.',
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasCrmSession = await verifySession();
  const hdrs = await headers();
  const pathnameFromServer = hdrs.get('x-pathname') ?? '';

  return (
    <html lang="en">
      <body className="h-screen flex flex-col overflow-hidden" suppressHydrationWarning>
        <GoogleAnalytics />
        <SiteShell hasCrmSession={hasCrmSession} pathnameFromServer={pathnameFromServer}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}

