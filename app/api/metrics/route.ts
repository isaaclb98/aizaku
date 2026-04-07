import { register } from "@/app/lib/metrics";

const METRICS_USER = process.env.METRICS_BASIC_AUTH_USER;
const METRICS_PASS = process.env.METRICS_BASIC_AUTH_PASS;

function unauthorized() {
  return new Response("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="metrics"' },
  });
}

export async function GET(request: Request) {
  // If no credentials configured, allow access (preserves original behavior)
  if (!METRICS_USER || !METRICS_PASS) {
    return new Response(await register.metrics(), {
      headers: { "Content-Type": register.contentType },
    });
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorized();
  }

  const encoded = authHeader.slice(6);
  const decoded = atob(encoded);
  const [user, pass] = decoded.split(":");

  if (user !== METRICS_USER || pass !== METRICS_PASS) {
    return unauthorized();
  }

  return new Response(await register.metrics(), {
    headers: { "Content-Type": register.contentType },
  });
}
