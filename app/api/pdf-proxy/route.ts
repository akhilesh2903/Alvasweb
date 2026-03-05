import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get("id");

  if (!fileId) {
    return NextResponse.json({ error: "File ID is required" }, { status: 400 });
  }

  const googleDriveUrl = `https://docs.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await fetch(googleDriveUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch from Google Drive: ${response.statusText}`,
      );
    }

    const { body, headers } = response;

    // Stream the PDF response back to the client
    return new NextResponse(body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="newsletter-${fileId}.pdf"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error: any) {
    console.error("PDF Proxy Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch PDF from source" },
      { status: 500 },
    );
  }
}
