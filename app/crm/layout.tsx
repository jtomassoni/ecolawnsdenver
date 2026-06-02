import { headers } from 'next/headers';
import CrmChrome from '@/components/crm/CrmChrome';

export default async function CrmLayout({ children }: { children: React.ReactNode }) {
  const hdrs = await headers();
  const pathnameFromServer = hdrs.get('x-pathname') ?? '';
  return (
    <div className="flex flex-1 min-h-0 flex-col bg-slate-100">
      <CrmChrome pathnameFromServer={pathnameFromServer}>{children}</CrmChrome>
    </div>
  );
}
