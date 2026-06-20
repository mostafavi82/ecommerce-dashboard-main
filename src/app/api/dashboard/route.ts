import { NextResponse } from "next/server";

const DASHBOARD_API_URL = "https://wgm5g.wiremockapi.cloud/dashboard";

/**
 * Server-side proxy for the dashboard API.
 * The upstream API does not send CORS headers, so the browser cannot call it
 * directly — routing it through a Next.js Route Handler solves that and keeps
 * the upstream URL out of the client bundle.
 */
export async function GET() {
  try {
    const res = await fetch(DASHBOARD_API_URL, {
      // Always fetch fresh data, but allow a short revalidation window.
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Upstream API responded with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to reach the dashboard API" },
      { status: 502 }
    );
  }
}
