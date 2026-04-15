import { NextResponse } from 'next/server';
import { requireCrmSession } from '@/lib/auth';

/**
 * Staff-only: confirms what this deployment actually sees at runtime (no secret values).
 * Open while logged into CRM: GET /api/crm/diagnostics
 * Use on a Preview URL to verify BLOB_READ_WRITE_TOKEN and DATABASE_URL are present after redeploy.
 */
export async function GET() {
  const denied = await requireCrmSession();
  if (denied) return denied;

  return NextResponse.json({
    blobConfigured: Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim()),
    databaseConfigured: Boolean(process.env.DATABASE_URL?.trim()),
    vercelEnv: process.env.VERCEL_ENV ?? null,
    nodeEnv: process.env.NODE_ENV,
  });
}
