import { NextRequest } from "next/server";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// In-memory, per-warm-instance limiter. Good enough for a low-to-moderate
// traffic marketing site's form endpoints without standing up an external
// store; it resets on cold start and isn't shared across instances, so treat
// it as a speed bump against bursts and scripted abuse, not a hard guarantee.
const buckets = new Map<string, RateLimitEntry>();

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5; // per identifier, per window

// Periodic sweep so long-lived warm instances don't accumulate stale entries forever.
if (typeof setInterval !== "undefined") {
  const timer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of buckets.entries()) {
      if (now > entry.resetAt) buckets.delete(key);
    }
  }, 5 * 60 * 1000);
  timer.unref?.();
}

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds?: number;
}

export function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const entry = buckets.get(identifier);

  if (!entry || now > entry.resetAt) {
    buckets.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true };
}

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "unknown";
}

export const RATE_LIMIT_MESSAGE = "Too many requests from this connection. Please wait a few minutes and try again.";
