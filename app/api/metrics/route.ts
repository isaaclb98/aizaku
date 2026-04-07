import { register } from "@/app/lib/metrics";
import { timingSafeEqual } from "crypto";

const METRICS_USER = process.env.METRICS_BASIC_AUTH_USER;
const METRICS_PASS = process.env.METRICS_BASIC_AUTH_PASS;

function unauthorized() {
  return new Response("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="metrics"' },
  });
}

export async function GET(request: Request) {
  // Require BOTH vars to be non-empty to skip auth (prevents accidental half-config)
  if (!METRICS_USER || METRICS_USER.trim() === "" || !METRICS_PASS || METRICS_PASS.trim() === "") {
    console.error("METRICS_BASIC_AUTH_USER and METRICS_BASIC_AUTH_PASS must both be set — denying access");
    return unauthorized();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorized();
  }

  let user: string, pass: string;
  const encoded = authHeader.slice(6);
  // Buffer.from is stricter than atob — rejects invalid base64 characters
  const decoded = Buffer.from(encoded, "base64").toString("utf-8");
  const colonIdx = decoded.indexOf(":");
  if (colonIdx === -1) return unauthorized();
  user = decoded.slice(0, colonIdx);
  pass = decoded.slice(colonIdx + 1);

  // Constant-time comparison to prevent timing attacks on credentials
  const userMatch =
    user.length === METRICS_USER.length &&
    timingSafeEqual(Buffer.from(user), Buffer.from(METRICS_USER));
  const passMatch =
    pass.length === METRICS_PASS.length &&
    timingSafeEqual(Buffer.from(pass), Buffer.from(METRICS_PASS));
  if (!userMatch || !passMatch) {
    return unauthorized();
  }

  return new Response(await register.metrics(), {
    headers: { "Content-Type": register.contentType },
  });
}
