import { verifySession } from '@/lib/auth';
import { listLeads } from '@/lib/crm-store';
import CrmLeadsTable from '@/components/crm/CrmLeadsTable';
import { redirect } from 'next/navigation';

export default async function AdminEntryPage() {
  const ok = await verifySession();
  if (!ok) redirect('/login');
  const leads = await listLeads();
  return (
    <div>
      <CrmLeadsTable initialLeads={leads} />
    </div>
  );
}
