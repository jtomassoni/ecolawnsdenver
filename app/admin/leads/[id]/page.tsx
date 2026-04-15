import { verifySession } from '@/lib/auth';
import { getLeadById } from '@/lib/crm-store';
import LeadWorkspace from '@/components/crm/LeadWorkspace';
import { notFound, redirect } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function AdminLeadPage({ params }: Props) {
  const ok = await verifySession();
  if (!ok) redirect('/login');

  const { id } = await params;
  const lead = await getLeadById(id);
  if (!lead) notFound();

  return <LeadWorkspace initialLead={lead} />;
}
