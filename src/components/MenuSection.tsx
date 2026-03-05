"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(
    () => import("@/components/PdfViewer").then((mod) => mod.PdfViewer),
    { ssr: false, loading: () => <div className="animate-pulse bg-slate-100 rounded-2xl min-h-[400px] w-full" /> }
);

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuData.menu[0].category);
    const [showPdf, setShowPdf] = useState(false);

    const activeMenu = menuData.menu.find((cat) => cat.category === activeCategory);

    return (
        <section id="menu" className="w-full py-16 px-6 md:px-12 transition-colors duration-500 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-dm-sans mb-3 tracking-tight text-slate-900">
                        Our Menu
                    </h2>
                    <p className="font-open-sans max-w-2xl mx-auto text-sm text-slate-500">
                        Explore our carefully crafted selections, from our signature extractions to delightful bites.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {menuData.menu.map((category) => {
                        const isActive = activeCategory === category.category;
                        return (
                            <button
                                key={category.category}
                                onClick={() => setActiveCategory(category.category)}
                                className={`px-4 py-2 rounded-full font-open-sans font-semibold text-xs transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-primary border border-slate-200'}`}
                            >
                                {category.category}
                            </button>
                        );
                    })}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {activeMenu?.items.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="flex flex-col p-4 rounded-2xl shadow-sm border hover:shadow-md transition-shadow h-full bg-white border-slate-100"
                            >
                                <div className="flex-1">
                                    <h3 className="text-base font-bold font-dm-sans tracking-tight text-slate-900">
                                        {item.name}
                                    </h3>
                                    {item.description && (
                                        <p className="text-xs font-open-sans mt-1 line-clamp-2 text-slate-500">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                                    {('R' in item.prices) && (item.prices as any).R && (
                                        <span className="font-medium text-orange-500 font-open-sans text-xs">R: {(item.prices as any).R}K</span>
                                    )}
                                    {('L' in item.prices) && (item.prices as any).L && (
                                        <span className="font-medium text-orange-500 font-open-sans text-xs">L: {(item.prices as any).L}K</span>
                                    )}
                                    {('1L' in item.prices) && (item.prices as any)["1L"] && (
                                        <span className="font-medium text-orange-500 font-open-sans text-xs">1L: {(item.prices as any)["1L"]}K</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Browse Catalog CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 flex justify-center"
                >
                    <button 
                        onClick={() => setShowPdf(!showPdf)}
                        className="px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 font-dm-sans group flex items-center gap-2"
                    >
                        {showPdf ? "Hide Full Catalog" : "Browse Full Catalog"}
                        <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${showPdf ? '-rotate-90' : 'group-hover:translate-x-1'}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            {showPdf ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            )}
                        </svg>
                    </button>
                </motion.div>

                {/* PDF Viewer Section */}
                <AnimatePresence>
                    {showPdf && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold font-dm-sans text-slate-900">Full Catalog Menu</h3>
                                    <p className="text-slate-500 font-open-sans mt-2">Geser untuk melihat halaman selanjutnya</p>
                                </div>
                                <PdfViewer file="/data/bagi_kopi_menu.pdf" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
