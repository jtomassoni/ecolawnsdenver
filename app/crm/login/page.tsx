import { redirect } from 'next/navigation';

export default function LegacyCrmLoginRedirect() {
  redirect('/admin/login');
}
