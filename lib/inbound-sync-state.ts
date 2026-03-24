import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

const PATH = path.join(process.cwd(), 'data', 'inbound-synced-message-ids.json');
const MAX_IDS = 4000;

type FileShape = { ids: string[] };

let mutex = Promise.resolve();

async function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = mutex.then(() => fn());
  mutex = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

export async function hasSyncedMessageId(id: string): Promise<boolean> {
  const norm = id.trim();
  if (!norm) return false;
  return withLock(async () => {
    try {
      const raw = await readFile(PATH, 'utf8');
      const j = JSON.parse(raw) as FileShape;
      return Array.isArray(j.ids) && j.ids.includes(norm);
    } catch {
      return false;
    }
  });
}

export async function markMessageIdSynced(id: string): Promise<void> {
  const norm = id.trim();
  if (!norm) return;
  await withLock(async () => {
    let ids: string[] = [];
    try {
      const raw = await readFile(PATH, 'utf8');
      const j = JSON.parse(raw) as FileShape;
      if (Array.isArray(j.ids)) ids = j.ids;
    } catch {
      ids = [];
    }
    if (ids.includes(norm)) return;
    ids.push(norm);
    if (ids.length > MAX_IDS) {
      ids = ids.slice(ids.length - MAX_IDS);
    }
    await mkdir(path.dirname(PATH), { recursive: true });
    await writeFile(PATH, JSON.stringify({ ids }, null, 2), 'utf8');
  });
}
