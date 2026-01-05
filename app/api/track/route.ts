import { siteVisits } from "@/app/lib/metrics";

export async function POST() {
  siteVisits.inc();
  return new Response(null, { status: 204 });
}
