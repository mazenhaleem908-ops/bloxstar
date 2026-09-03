/**
 * Lightweight health probe.
 *
 * Returns basic liveness information without touching the database,
 * payment provider, or any secret value.
 */
export const config = { runtime: "edge" };

export default function handler(): Response {
  return new Response(
    JSON.stringify({
      ok: true,
      service: "bloxstar",
      status: "healthy",
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store",
      },
    },
  );
}
