import { get, set } from 'idb-keyval';

const KEY_TEXT = 'tle-data';
const KEY_TIME = 'tle-time';
const TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

export async function getCachedTLE(): Promise<{ text: string; timestamp: number } | null> {
  try {
    const text = await get<string>(KEY_TEXT);
    const timestamp = await get<number>(KEY_TIME);
    if (!text || !timestamp) return null;
    if (Date.now() - timestamp > TTL_MS) return null;
    return { text, timestamp };
  } catch {
    return null;
  }
}

export async function setCachedTLE(text: string): Promise<void> {
  try {
    await set(KEY_TEXT, text);
    await set(KEY_TIME, Date.now());
  } catch {
    // Ignore cache write failures
  }
}
