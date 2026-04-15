'use client';

import { usePathname } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SiteShell({
  children,
  hasCrmSession = false,
  pathnameFromServer = '',
}: {
  children: React.ReactNode;
  hasCrmSession?: boolean;
  /** From middleware — avoids SSR/client `usePathname()` mismatches (e.g. mobile Safari). */
  pathnameFromServer?: string;
}) {
  const pathname = usePathname();
  const effectivePath = pathnameFromServer || pathname || '';
  const isCrm =
    effectivePath === '/crm' ||
    effectivePath.startsWith('/crm/') ||
    effectivePath === '/admin' ||
    effectivePath.startsWith('/admin/') ||
    effectivePath === '/login';

  if (isCrm) {
    return (
      <div className="flex-1 min-h-0 flex flex-col overflow-hidden w-full bg-white">{children}</div>
    );
  }

  return (
    <>
      <Navigation pathnameFromServer={pathnameFromServer} />
      <main className="flex-1 relative min-h-0 overflow-y-auto overflow-x-hidden w-full">{children}</main>
      {!hasCrmSession ? <Footer /> : null}
    </>
  );
}
