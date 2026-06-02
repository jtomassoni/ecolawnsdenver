import path from 'path';

/**
 * Directory for CRM JSON files (`crm-store.json`, inbound sync state).
 *
 * - **Local:** `./data` under the project (gitignored).
 * - **Vercel / Lambda:** `/tmp/ecolawns-crm-data` — only used when `DATABASE_URL` is unset; data is
 *   ephemeral. Set `DATABASE_URL` (e.g. Neon) so CRM uses Postgres instead.
 * - **Override:** set `CRM_DATA_DIR` to an absolute path.
 */
export function getCrmDataDir(): string {
  const fromEnv = process.env.CRM_DATA_DIR?.trim();
  if (fromEnv) {
    return path.isAbsolute(fromEnv) ? fromEnv : path.resolve(process.cwd(), fromEnv);
  }

  if (isServerlessReadOnlyCwd()) {
    return '/tmp/ecolawns-crm-data';
  }

  return path.join(process.cwd(), 'data');
}

function isServerlessReadOnlyCwd(): boolean {
  if (process.env.VERCEL) return true;
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) return true;
  if (process.env.LAMBDA_TASK_ROOT) return true;
  return false;
}
