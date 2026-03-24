import CrmChrome from '@/components/crm/CrmChrome';

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 min-h-0 flex-col bg-slate-100">
      <CrmChrome>{children}</CrmChrome>
    </div>
  );
}
