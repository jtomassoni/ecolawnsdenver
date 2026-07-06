'use client';

import { usePathname } from 'next/navigation';

export default function SiteShell({
  children,
  pathnameFromServer = '',
}: {
  children: React.ReactNode;
  hasCrmSession?: boolean;
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
    <main className="flex-1 relative min-h-0 overflow-y-auto overflow-x-hidden w-full bg-white">
      {children}
    </main>
  );
}
