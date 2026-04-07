import { siteVisits } from "@/app/lib/metrics";
import { rateLimit } from "@/app/lib/rateLimit";

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  const { allowed } = rateLimit(ip);

  if (!allowed) {
    return new Response("Too Many Requests", { status: 429 });
  }

  try {
    siteVisits.inc();
  } catch {
    // Non-critical — don't fail the request if metrics fail
  }
  return new Response(null, { status: 204 });
}
