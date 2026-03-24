import { verifySession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function NewLeadPage() {
  const ok = await verifySession();
  if (!ok) redirect('/crm/login');

  redirect('/crm?newLead=1');
}
