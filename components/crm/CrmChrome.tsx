'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

function navLinkClass(active: boolean) {
  return [
    'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    active
      ? 'bg-white/10 text-white'
      : 'text-slate-300 hover:bg-white/5 hover:text-white',
  ].join(' ');
}

export default function CrmChrome({
  children,
  pathnameFromServer = '',
}: {
  children: React.ReactNode;
  /** From middleware — avoids SSR/client `usePathname()` mismatches (e.g. mobile Safari). */
  pathnameFromServer?: string;
}) {
  const clientPath = usePathname();
  const pathname = pathnameFromServer || clientPath || '';
  const router = useRouter();
  const isLogin = pathname === '/login';

  async function signOut() {
    await fetch('/api/crm/logout', { method: 'POST' });
    router.push('/login');
    router.refresh();
  }

  if (isLogin) {
    return (
      <div className="flex flex-1 min-h-0 flex-col bg-slate-950">
        <header className="shrink-0 border-b border-slate-800/80 bg-slate-900/50 px-4 py-3">
          <div className="max-w-md mx-auto flex items-center justify-center">
            <span className="text-sm font-semibold tracking-tight text-white">EcoLawns CRM</span>
          </div>
        </header>
        <main className="flex-1 min-h-0 overflow-y-auto px-4 py-8">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-1 min-h-0">
      <aside className="hidden sm:flex w-56 shrink-0 flex-col border-r border-slate-800 bg-slate-900 text-slate-200">
        <div className="p-4 border-b border-slate-800">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Workspace</p>
          <p className="text-lg font-semibold text-white leading-tight mt-0.5">EcoLawns</p>
          <p className="text-xs text-slate-400">Lead inbox</p>
        </div>
        <nav className="flex-1 p-2 space-y-0.5" aria-label="CRM">
          <Link href="/admin" className={navLinkClass(pathname === '/admin' || pathname.startsWith('/admin/leads/'))}>
            <span className="text-slate-400" aria-hidden>
              ◇
            </span>
            Leads
          </Link>
          <Link href="/admin?newLead=1" className={navLinkClass(false)}>
            <span className="text-slate-400" aria-hidden>
              +
            </span>
            New lead
          </Link>
        </nav>
        <div className="p-2 border-t border-slate-800 space-y-1">
          <Link
            href="/"
            className="block rounded-lg px-3 py-2 text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5 transition-colors"
          >
            ← Public site
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="w-full text-left rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-red-950/40 hover:text-red-200 transition-colors"
          >
            Sign out
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="flex flex-1 min-h-0 min-w-0 flex-col bg-slate-100">
        <header className="sm:hidden shrink-0 flex items-center justify-between gap-2 border-b border-slate-200 bg-white px-3 py-2.5">
          <span className="text-sm font-semibold text-slate-900">EcoLawns CRM</span>
          <div className="flex items-center gap-1">
            <Link
              href="/admin"
              className="px-2 py-1.5 text-xs font-medium text-slate-600 rounded-md hover:bg-slate-100"
            >
              Leads
            </Link>
            <Link
              href="/admin?newLead=1"
              className="px-2 py-1.5 text-xs font-medium text-slate-600 rounded-md hover:bg-slate-100"
            >
              New
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="px-2 py-1.5 text-xs font-medium text-red-700 rounded-md hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        </header>

        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
