/**
 * Simple in-memory sliding window rate limiter.
 * Works for single-instance deployments. For multi-instance, replace with Redis.
 */

type Entry = {
  count: number;
  windowStart: number;
};

const windowMs = 60_000; // 1 minute
const maxRequests = 30; // per IP per window

const store = new Map<string, Entry>();

export function rateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now - entry.windowStart > windowMs) {
    // New window
    store.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: maxRequests - 1 };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: maxRequests - entry.count };
}

// Periodic cleanup to prevent memory leaks from stale IPs
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    if (now - entry.windowStart > windowMs * 2) {
      store.delete(key);
    }
  }
}, windowMs);
