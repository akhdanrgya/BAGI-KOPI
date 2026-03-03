import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    try {
        const pdfPath = path.join(process.cwd(), "public", "data", "bagi_kopi_menu.pdf");
        const fileBuffer = fs.readFileSync(pdfPath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": "inline; filename=\"bagi_kopi_menu.pdf\"",
                "Cache-Control": "public, max-age=3600",
            },
        });
    } catch {
        return new NextResponse("PDF not found", { status: 404 });
    }
}
