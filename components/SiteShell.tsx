'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCrm = pathname === '/crm' || pathname?.startsWith('/crm/');

  if (isCrm) {
    return (
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden w-full bg-white">{children}</div>
    );
  }

  return (
    <>
      <Navigation />
      <main className="flex-1 relative min-h-0 overflow-y-auto overflow-x-hidden w-full">{children}</main>
      <Footer />
    </>
  );
}
