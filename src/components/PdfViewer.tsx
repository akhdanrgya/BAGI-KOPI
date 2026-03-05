"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Worker served locally from /public — version matches installed pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PdfViewerProps {
    file: string;
}

export function PdfViewer({ file }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col items-center w-full pb-4">
            <div className="w-full flex justify-center py-6 bg-slate-100 rounded-2xl min-h-[400px] overflow-auto">
                <Document
                    file={file}
                    onLoadSuccess={({ numPages }) => {
                        setNumPages(numPages);
                    }}
                    onLoadError={(err) => {
                        console.error("react-pdf load error:", err);
                    }}
                    loading={
                        <div className="flex items-center justify-center min-h-[400px]">
                            <div className="flex flex-col items-center gap-3">
                                <div className="animate-spin rounded-full h-10 w-10 border-4 border-orange-400 border-t-transparent" />
                                <p className="text-slate-400 text-sm font-open-sans">Memuat menu...</p>
                            </div>
                        </div>
                    }
                    error={
                        <div className="flex items-center justify-center min-h-[400px] text-slate-400 font-open-sans text-sm px-6 text-center">
                            Gagal memuat PDF.
                        </div>
                    }
                >
                    <Page
                        pageNumber={currentPage}
                        width={Math.min(
                            typeof window !== "undefined" ? window.innerWidth * 0.85 : 400,
                            typeof window !== "undefined" ? (window.innerHeight * 0.65) * (1 / 1.414) : 400 // Assuming basic 1:1.414 aspect ratio (A4)
                        )}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg rounded-xl overflow-hidden"
                    />
                </Document>
            </div>

            {numPages > 1 && (
                <div className="flex items-center gap-4 mt-5">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage <= 1}
                        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        ← Prev
                    </button>
                    <span className="text-sm text-slate-500 font-open-sans">
                        Halaman {currentPage} / {numPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))}
                        disabled={currentPage >= numPages}
                        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
}
