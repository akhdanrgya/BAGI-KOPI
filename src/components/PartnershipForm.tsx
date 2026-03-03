"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function PartnershipForm() {
    const [state, setState] = useState<FormState>("idle");
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        location: "",
        message: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setState("loading");
        // Simulate submission — replace with real API call
        await new Promise((r) => setTimeout(r, 1200));
        setState("success");
    }

    if (state === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-dm-sans text-slate-900 mb-2">Formulir Terkirim!</h3>
                    <p className="text-slate-500 font-open-sans">
                        Terima kasih, <strong>{form.name}</strong>! Tim kami akan menghubungimu dalam 1–2 hari kerja.
                    </p>
                </div>
                <button
                    onClick={() => { setState("idle"); setForm({ name: "", phone: "", email: "", city: "", location: "", message: "" }); }}
                    className="px-6 py-3 rounded-full border border-slate-300 text-slate-600 font-open-sans text-sm hover:bg-slate-50 transition-colors"
                >
                    Kirim Lagi
                </button>
            </div>
        );
    }

    const inputClass = "w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white font-open-sans text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";
    const labelClass = "block text-sm font-semibold font-open-sans text-slate-700 mb-1.5";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Nama Lengkap *</label>
                    <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className={labelClass}>Nomor WhatsApp *</label>
                    <input
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="08xxxxxxxxxx"
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label className={labelClass}>Email *</label>
                <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className={inputClass}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className={labelClass}>Kota *</label>
                    <select
                        required
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">Pilih kota...</option>
                        {["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang", "Medan", "Makassar", "Denpasar", "Lainnya"].map((c) => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={labelClass}>Rencana Lokasi</label>
                    <input
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Nama area / mall / ruko"
                        className={inputClass}
                    />
                </div>
            </div>

            <div>
                <label className={labelClass}>Pesan / Pertanyaan</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ceritakan sedikit tentang rencanamu..."
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                disabled={state === "loading"}
                className="w-full py-4 bg-primary text-white font-bold font-open-sans uppercase tracking-wide rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.01] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {state === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Mengirim...
                    </span>
                ) : "Kirim Formulir"}
            </button>

            <p className="text-center text-xs text-slate-400 font-open-sans">
                Atau hubungi langsung via WhatsApp:{" "}
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-semibold">
                    +62 812-3456-7890
                </a>
            </p>
        </form>
    );
}
