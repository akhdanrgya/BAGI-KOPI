import type { Metadata } from "next";
import { OutletsClient } from "@/components/OutletsClient";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Outlets | Bagi Kopi",
    description: "Temukan outlet Bagi Kopi terdekat di kotamu.",
};

export default function OutletsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative w-full bg-primary pt-36 pb-24 px-6 overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full -translate-y-1/3" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/10 blur-[100px] rounded-full translate-y-1/2" />
                </div>

                <div className="relative max-w-5xl mx-auto text-center z-10">
                    <FadeIn delay={0.1}>
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-open-sans font-semibold uppercase tracking-widest border border-white/20">
                            Lokasi Kami
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-extrabold font-dm-sans text-white mb-6 leading-tight">
                            Our Outlets
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <p className="text-lg md:text-xl text-white/90 font-open-sans max-w-2xl mx-auto leading-relaxed">
                            Untuk Lebih Dekat Dengan Kami, Silahkan Kunjungi atau Reservasi Dari Outlet Bagi Kopi Terdekat!
                        </p>
                    </FadeIn>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </section>

            {/* Outlet Grid */}
            <section className="pt-4">
                <FadeIn delay={0.3}>
                    <OutletsClient />
                </FadeIn>
            </section>

            {/* CTA */}
            <section className="w-full bg-white border-t border-slate-100 py-20 px-6 text-center">
                <FadeIn delay={0.1}>
                    <h2 className="text-3xl md:text-4xl font-extrabold font-dm-sans text-slate-900 mb-4">
                        Mau buka outlet baru?
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p className="text-slate-500 font-open-sans max-w-xl mx-auto mb-8">
                        Bergabunglah bersama kami dan hadirkan Bagi Kopi di kotamu.
                    </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <Link
                        href="/partnership"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold font-open-sans tracking-wide uppercase rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 transition-all"
                    >
                        Info Partnership
                    </Link>
                </FadeIn>
            </section>
        </main>
    );
}
