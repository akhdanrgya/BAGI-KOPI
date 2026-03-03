import type { Metadata } from "next";
import Link from "next/link";
import { PartnershipForm } from "@/components/PartnershipForm";

export const metadata: Metadata = {
    title: "Partnership | Bagi Kopi",
    description: "Bergabunglah bersama Bagi Kopi dan hadirkan pengalaman kopi premium di kotamu.",
};

const BENEFITS = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Brand Terpercaya",
        desc: "Bergabung dengan merek kopi yang sudah dikenal dan dipercaya ribuan pelanggan setia.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Modal Terjangkau",
        desc: "Investasi awal yang kompetitif dengan potensi balik modal cepat dan margin keuntungan menarik.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: "Dukungan Penuh",
        desc: "Tim kami siap mendampingi dari training barista, setup outlet, hingga operasional harian.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
        ),
        title: "Sistem Terbukti",
        desc: "SOP operasional yang sudah diuji di puluhan outlet dengan standar kualitas konsisten.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
        ),
        title: "Jaringan Nasional",
        desc: "Bergabung dengan jaringan mitra di seluruh Indonesia dan dapatkan akses eksklusif ke ekosistem Bagi Kopi.",
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
        ),
        title: "Marketing Bersama",
        desc: "Dukungan promosi digital, materi branding, dan kampanye bersama untuk mendatangkan pelanggan.",
    },
];

const STEPS = [
    { num: "01", title: "Isi Formulir", desc: "Lengkapi form partnership di bawah dengan informasi diri dan rencana lokasi outlet." },
    { num: "02", title: "Presentasi & Review", desc: "Tim kami akan menghubungi kamu untuk sesi presentasi dan review kelayakan lokasi." },
    { num: "03", title: "Perjanjian Kerja Sama", desc: "Penandatanganan MOU dan perjanjian kerja sama resmi bersama tim legal Bagi Kopi." },
    { num: "04", title: "Setup & Training", desc: "Tim kami mendampingi setup outlet, pengadaan peralatan, dan pelatihan barista." },
    { num: "05", title: "Grand Opening", desc: "Soft launch dan grand opening dengan dukungan penuh dari tim marketing Bagi Kopi." },
];

const FAQS = [
    {
        q: "Berapa modal minimal untuk bermitra?",
        a: "Modal awal bervariasi tergantung tipe outlet (kios, booth, atau full cafe). Tim kami akan memberikan rincian investasi yang sesuai setelah sesi konsultasi.",
    },
    {
        q: "Apakah saya perlu pengalaman di industri F&B?",
        a: "Tidak wajib! Kami menyediakan pelatihan lengkap untuk kamu dan tim. Semangat berwirausaha dan komitmen adalah yang terpenting.",
    },
    {
        q: "Bagaimana sistem royalti dan bagi hasil?",
        a: "Detail sistem royalti akan dibahas pada sesi presentasi. Kami memiliki skema yang kompetitif dan transparan untuk semua mitra.",
    },
    {
        q: "Berapa lama proses hingga outlet bisa buka?",
        a: "Rata-rata 4–8 minggu sejak perjanjian kerja sama ditandatangani, tergantung kesiapan lokasi dan proses perizinan.",
    },
];

export default function PartnershipPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="relative w-full bg-[#050505] pt-36 pb-28 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-primary/25 blur-[130px] rounded-full -translate-y-1/2" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/15 blur-[100px] rounded-full translate-y-1/2" />
                </div>
                <div className="relative max-w-5xl mx-auto text-center z-10">
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-xs font-open-sans font-semibold uppercase tracking-widest border border-white/10">
                        Jadi Mitra Kami
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold font-dm-sans text-white mb-6 leading-tight">
                        Tumbuh Bersama{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Bagi Kopi
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 font-open-sans max-w-2xl mx-auto leading-relaxed mb-10">
                        Hadirkan pengalaman kopi premium yang menyatukan komunitas. Bersama kami, bangun bisnis yang menguntungkan sekaligus bermakna.
                    </p>
                    <a
                        href="#form"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold font-open-sans uppercase tracking-wide rounded-full shadow-lg shadow-primary/40 hover:bg-primary/90 hover:scale-105 transition-all"
                    >
                        Daftar Sekarang
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
            </section>

            {/* Benefits */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-slate-900 mb-4">
                            Mengapa Bermitra dengan Kami?
                        </h2>
                        <p className="text-slate-500 font-open-sans max-w-xl mx-auto">
                            Dapatkan keuntungan nyata dengan bergabung bersama ekosistem Bagi Kopi.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BENEFITS.map((b) => (
                            <div key={b.title} className="group flex flex-col gap-4 p-7 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {b.icon}
                                </div>
                                <h3 className="text-lg font-bold font-dm-sans text-slate-900">{b.title}</h3>
                                <p className="text-sm font-open-sans text-slate-500 leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-24 px-6 md:px-12 bg-white border-y border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-slate-900 mb-4">
                            Proses Partnership
                        </h2>
                        <p className="text-slate-500 font-open-sans">Mudah, transparan, dan didampingi penuh oleh tim kami.</p>
                    </div>
                    <div className="flex flex-col gap-0">
                        {STEPS.map((step, i) => (
                            <div key={step.num} className="flex gap-6 group">
                                {/* Line + Circle */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold font-dm-sans text-sm shrink-0 shadow-md shadow-primary/30">
                                        {step.num}
                                    </div>
                                    {i < STEPS.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-slate-200 my-2" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className={`pb-${i < STEPS.length - 1 ? "10" : "0"} pt-2`}>
                                    <h3 className="text-lg font-bold font-dm-sans text-slate-900 mb-1">{step.title}</h3>
                                    <p className="text-sm font-open-sans text-slate-500 leading-relaxed pb-8">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-slate-900 mb-4">
                            Pertanyaan Umum
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        {FAQS.map((faq) => (
                            <div key={faq.q} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                <h3 className="font-bold font-dm-sans text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-sm font-open-sans text-slate-500 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section id="form" className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans text-slate-900 mb-4">
                            Daftar Partnership
                        </h2>
                        <p className="text-slate-500 font-open-sans">
                            Isi formulir di bawah dan tim kami akan menghubungimu dalam 1–2 hari kerja.
                        </p>
                    </div>
                    <PartnershipForm />
                </div>
            </section>
        </main>
    );
}
