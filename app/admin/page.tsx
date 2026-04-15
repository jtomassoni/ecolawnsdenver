import { verifySession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminEntryPage() {
  const ok = await verifySession();
  if (!ok) redirect('/admin/login');
  redirect('/crm');
}
