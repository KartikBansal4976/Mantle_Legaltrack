import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const backendBase = process.env.NEXT_PUBLIC_UPLOAD_URL || "http://localhost:3001";
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    const proxyForm = new FormData();
    proxyForm.append("file", file, (file as any).name || "upload.pdf");

    const res = await fetch(`${backendBase}/upload`, {
      method: "POST",
      body: proxyForm as any,
      // fetch will set proper multipart headers automatically for FormData
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: text || "Upload failed" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Proxy error" }, { status: 500 });
  }
}


