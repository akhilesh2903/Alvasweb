import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawUrl = searchParams.get("url");

  if (!rawUrl) {
    return NextResponse.json({ error: "url param required" }, { status: 400 });
  }

  try {
    const range = request.headers.get("range");
    const headers: Record<string, string> = {
      Accept: "video/*,*/*",
    };
    
    // Forward the Range header to Google Drive so video seeking/streaming works
    if (range) {
      headers["Range"] = range;
    }

    const upstream = await fetch(rawUrl, {
      headers,
    });

    if (!upstream.ok && upstream.status !== 206) {
      return NextResponse.json(
        { error: "Failed to fetch video" },
        { status: upstream.status }
      );
    }

    const responseHeaders = new Headers();
    responseHeaders.set("Content-Type", upstream.headers.get("content-type") || "video/mp4");
    responseHeaders.set("Accept-Ranges", "bytes");
    
    if (upstream.headers.has("Content-Length")) {
      responseHeaders.set("Content-Length", upstream.headers.get("Content-Length")!);
    }
    if (upstream.headers.has("Content-Range")) {
      responseHeaders.set("Content-Range", upstream.headers.get("Content-Range")!);
    }

    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Video Proxy Error:", error);
    return NextResponse.json({ error: "proxy failed" }, { status: 500 });
  }
}
