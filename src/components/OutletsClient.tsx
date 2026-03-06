"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Outlet = {
    id: string;
    area: string;
    name: string;
    description: string;
    maps: string;
    whatsapp: string;
    tag?: string;
};

const mockOutlets: Outlet[] = [
    // Tangerang
    { id: "tgr-1", area: "Tangerang", name: "Bagi Kopi Bintaro", description: "Pusat reservasi area Tangerang", maps: "#", whatsapp: "6281234567890" },
    { id: "tgr-2", area: "Tangerang", name: "Bagi Kopi Ciledug", description: "Pusat reservasi area Tangerang", maps: "#", whatsapp: "6281234567890" },
    { id: "tgr-3", area: "Tangerang", name: "Bagi Kopi Jombang", description: "Pusat reservasi area Tangerang", maps: "#", whatsapp: "6281234567890" },
    { id: "tgr-4", area: "Tangerang", name: "Bagi Kopi Juanda", description: "Pusat reservasi area Tangerang", maps: "#", whatsapp: "6281234567890" },
    { id: "tgr-5", area: "Tangerang", name: "Bagi Kopi Pamulang", description: "Pusat reservasi area Tangerang", maps: "#", whatsapp: "6281234567890" },
    { id: "tgr-6", area: "Tangerang", name: "Bagi Kopi Karawaci", description: "Pusat reservasi area Tangerang", maps: "#", whatsapp: "6281234567890" },
    
    // Jakarta
    { id: "jkt-1", area: "Jakarta", name: "Bagi Kopi Pengumben", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-2", area: "Jakarta", name: "Bagi Kopi Kemang", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-3", area: "Jakarta", name: "Bagi Kopi Cilandak", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-4", area: "Jakarta", name: "Bagi Kopi Lebak Bulus", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-5", area: "Jakarta", name: "Bagi Kopi Kayu Putih", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-6", area: "Jakarta", name: "Bagi Kopi Cawang", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-7", area: "Jakarta", name: "Bagi Kopi Setu", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },
    { id: "jkt-8", area: "Jakarta", name: "Bagi Kopi Kalimalang", description: "Pusat reservasi area Jakarta", maps: "#", whatsapp: "6281234567890" },

    // Jawa Barat
    { id: "jbr-1", area: "Jawa Barat", name: "Bagi Kopi Margonda", description: "Pusat reservasi area Jawa Barat", maps: "#", whatsapp: "6281234567890" },
    { id: "jbr-2", area: "Jawa Barat", name: "Bagi Kopi Lenteng Agung", description: "Pusat reservasi area Jawa Barat", maps: "#", whatsapp: "6281234567890" },
    { id: "jbr-3", area: "Jawa Barat", name: "Bagi Kopi Kota Wisata", description: "Pusat reservasi area Jawa Barat", maps: "#", whatsapp: "6281234567890" },
    { id: "jbr-4", area: "Jawa Barat", name: "Bagi Kopi Kranggan", description: "Pusat reservasi area Jawa Barat", maps: "#", whatsapp: "6281234567890" },
    { id: "jbr-5", area: "Jawa Barat", name: "Bagi Kopi Pekayon", description: "Pusat reservasi area Jawa Barat", maps: "#", whatsapp: "6281234567890" },

    // Bandung Raya
    { id: "bdg-1", area: "Bandung Raya", name: "Bagi Kopi Buah Batu", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-2", area: "Bandung Raya", name: "Bagi Kopi Kiara Artha", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-3", area: "Bandung Raya", name: "Bagi Kopi Jatinangor", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-4", area: "Bandung Raya", name: "Bagi Kopi Metro", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-5", area: "Bandung Raya", name: "Bagi Kopi Ujung Berung", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-6", area: "Bandung Raya", name: "Bagi Kopi Cimahi", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-7", area: "Bandung Raya", name: "Bagi Kopi Ciumbuleuit", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-8", area: "Bandung Raya", name: "Bagi Kopi Melong", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },
    { id: "bdg-9", area: "Bandung Raya", name: "Bagi Kopi Peta", description: "Pusat reservasi area Bandung Raya", maps: "#", whatsapp: "6281234567890" },

    // Surabaya
    { id: "sby-1", area: "Surabaya", name: "Bagi Kopi Citraland", description: "Pusat reservasi area Surabaya", maps: "#", whatsapp: "6281234567890" },
    { id: "sby-2", area: "Surabaya", name: "Bagi Kopi Margorejo", description: "Pusat reservasi area Surabaya", maps: "#", whatsapp: "6281234567890" },
];

const AREAS = ["All", "Tangerang", "Jakarta", "Jawa Barat", "Bandung Raya", "Surabaya"];

export function OutletsClient() {
    const [activeArea, setActiveArea] = useState("All");

    const filtered =
        activeArea === "All"
            ? mockOutlets
            : mockOutlets.filter((o) => o.area === activeArea);

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
            {/* Area Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
                {AREAS.map((area) => {
                    const isActive = activeArea === area;
                    return (
                        <button
                            key={area}
                            onClick={() => setActiveArea(area)}
                            className={`px-6 py-2.5 rounded-full font-open-sans font-semibold text-sm transition-all duration-300 ${isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/30"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {area}
                        </button>
                    );
                })}
            </div>

            {/* Outlet Cards */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filtered.map((outlet) => (
                        <OutletCard key={outlet.id} outlet={outlet} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
                <p className="text-center text-slate-400 font-open-sans py-24">
                    Tidak ada outlet di area ini.
                </p>
            )}
        </div>
    );
}

function OutletCard({ outlet }: { outlet: Outlet }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="group relative flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
            {/* Top accent bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary to-blue-400" />

            <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                    <div>
                        <h3 className="text-lg font-bold font-dm-sans text-slate-900 leading-tight">
                            {outlet.name}
                        </h3>
                        <span className="text-xs font-open-sans text-primary font-semibold uppercase tracking-wider">
                            {outlet.area}
                        </span>
                    </div>
                    {outlet.tag && (
                        <span
                            className={`shrink-0 px-3 py-1 rounded-full text-xs font-bold font-open-sans ${outlet.tag === "Flagship"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-green-100 text-green-700"
                                }`}
                        >
                            {outlet.tag}
                        </span>
                    )}
                </div>

                {/* Description */}
                <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-slate-400 shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>
                    <p className="text-sm font-open-sans text-slate-500 leading-relaxed">{outlet.description}</p>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-col items-center gap-3 pt-4 border-t border-slate-100">
                    <a
                        href={`https://wa.me/${outlet.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl text-sm font-semibold font-open-sans hover:bg-[#20bd5a] transition-colors shadow-sm shadow-[#25D366]/20"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.843L.057 23.486a.5.5 0 00.619.617l5.741-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.738 9.738 0 016.4 19.99l-.38-.228-3.908 1.024 1.005-3.795-.243-.392A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                        </svg>
                        Reservasi Sekarang (WA)
                    </a>
                    <a
                        href={outlet.maps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-primary border border-primary rounded-xl text-sm font-semibold font-open-sans hover:bg-primary hover:text-white transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Buka di Google Maps
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

