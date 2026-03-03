import Link from "next/link";

export function ContactPartnership() {
    return (
        <section id="partnership" className="w-full bg-primary py-24 px-6 md:px-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-extrabold font-dm-sans mb-6 drop-shadow-sm text-white">
                    Ready to collaborate?
                </h2>
                <p className="text-xl md:text-2xl font-open-sans text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Join us in spreading the culture of sharing through exceptional coffee. Let's build something great together.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link href="/partnership" className="px-8 py-4 bg-white text-primary font-bold font-open-sans tracking-widest uppercase rounded-full shadow-xl hover:scale-105 transition-transform">
                        Info Partnership
                    </Link>
                    <Link href="/partnership#form" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold font-open-sans tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors">
                        Daftar Sekarang
                    </Link>
                </div>
            </div>
        </section>
    );
}
