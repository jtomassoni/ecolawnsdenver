import { verifySession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function LegacyCrmHomePage() {
  if (!(await verifySession())) {
    redirect('/login');
  }
  redirect('/admin');
}
