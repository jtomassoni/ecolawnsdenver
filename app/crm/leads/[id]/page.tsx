import { verifySession } from '@/lib/auth';
import { redirect } from 'next/navigation';

type Props = { params: Promise<{ id: string }> };

export default async function LegacyCrmLeadPage({ params }: Props) {
  if (!(await verifySession())) {
    redirect('/login');
  }
  const { id } = await params;
  redirect(`/admin/leads/${id}`);
}
