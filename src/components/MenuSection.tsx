"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import dynamic from "next/dynamic";
import { ScrollReveal } from "./ui/ScrollReveal";

const PdfViewer = dynamic(() => import("./PdfViewer").then((m) => m.PdfViewer), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-orange-400 border-t-transparent" />
        </div>
    ),
});

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuData.menu[0].category);

    const activeMenu = menuData.menu.find((cat) => cat.category === activeCategory);

    return (
        <section id="menu" className="w-full py-24 px-6 md:px-12 transition-colors duration-500 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal delay={0.1}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-dm-sans mb-4 tracking-tight text-slate-900">
                            Our Menu
                        </h2>
                        <p className="font-open-sans max-w-2xl mx-auto text-slate-500 mb-8">
                            Explore our carefully crafted selections, from our signature extractions to delightful bites.
                        </p>

                        {/* PDF Menu Display */}
                        <div className="w-full max-w-4xl mx-auto mb-16 bg-white p-2 md:p-4 rounded-3xl shadow-sm border border-slate-200">
                            <div className="mb-4 px-4 text-left">
                                <h3 className="text-lg font-bold text-slate-800 font-dm-sans">Digital Menu</h3>
                            </div>
                            <PdfViewer file="/api/menu-pdf" />
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <span className="text-slate-400 font-open-sans text-sm uppercase tracking-widest font-semibold">Or Browse Catalog</span>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>
                </ScrollReveal>

                {/* Category Tabs */}
                <ScrollReveal delay={0.3}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {menuData.menu.map((category) => {
                            const isActive = activeCategory === category.category;
                            return (
                                <button
                                    key={category.category}
                                    onClick={() => setActiveCategory(category.category)}
                                    className={`px-6 py-3 rounded-full font-open-sans font-semibold text-sm transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-primary border border-slate-200'}`}
                                >
                                    {category.category}
                                </button>
                            );
                        })}
                    </div>
                </ScrollReveal>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                                className="flex flex-col p-5 rounded-2xl shadow-sm border hover:shadow-md transition-shadow h-full bg-white border-slate-100"
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold font-dm-sans tracking-tight text-slate-900">
                                        {item.name}
                                    </h3>
                                    {item.description && (
                                        <p className="text-sm font-open-sans mt-1 line-clamp-2 text-slate-500">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex gap-4 mt-4 pt-4 border-t border-slate-100">
                                    {('R' in item.prices) && (item.prices as any).R && (
                                        <span className="font-medium text-orange-500 font-open-sans text-sm">R: {(item.prices as any).R}K</span>
                                    )}
                                    {('L' in item.prices) && (item.prices as any).L && (
                                        <span className="font-medium text-orange-500 font-open-sans text-sm">L: {(item.prices as any).L}K</span>
                                    )}
                                    {('1L' in item.prices) && (item.prices as any)["1L"] && (
                                        <span className="font-medium text-orange-500 font-open-sans text-sm">1L: {(item.prices as any)["1L"]}K</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
