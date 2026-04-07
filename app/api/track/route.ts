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

  siteVisits.inc();
  return new Response(null, { status: 204 });
}
