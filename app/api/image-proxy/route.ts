import { NextRequest, NextResponse } from "next/server";

const ALLOWED_HOSTNAMES = new Set(["lh3.googleusercontent.com"]);

function isAllowedImageUrl(url: URL): boolean {
  if (url.protocol !== "https:") return false;
  if (!ALLOWED_HOSTNAMES.has(url.hostname)) return false;

  // Google Photos direct links typically live under /pw/...
  if (!url.pathname.startsWith("/pw/")) return false;

  return true;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get("url");

  if (!rawUrl) {
    return NextResponse.json(
      { error: "url query param is required" },
      { status: 400 },
    );
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(rawUrl);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!isAllowedImageUrl(targetUrl)) {
    return NextResponse.json({ error: "URL not allowed" }, { status: 400 });
  }

  try {
    const upstream = await fetch(targetUrl.toString(), {
      headers: {
        Accept: "image/avif,image/webp,image/*,*/*",
      },
      // Avoid caching issues for signed URLs by letting upstream decide; we add client cache below.
      cache: "no-store",
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image" },
        { status: upstream.status },
      );
    }

    const contentType = upstream.headers.get("content-type") || "";
    if (!contentType.toLowerCase().startsWith("image/")) {
      return NextResponse.json(
        { error: "Upstream did not return an image" },
        { status: 502 },
      );
    }

    return new NextResponse(upstream.body, {
      headers: {
        "Content-Type": contentType,
        // Cache at the edge/browser for a day; adjust later if you update photos frequently.
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error: any) {
    console.error("Image Proxy Error:", error);
    return NextResponse.json({ error: "Image proxy failed" }, { status: 500 });
  }
}
