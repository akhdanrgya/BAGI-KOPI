"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";
import dynamic from "next/dynamic";
import Image from "next/image";

const PdfViewer = dynamic(
    () => import("@/components/PdfViewer").then((mod) => mod.PdfViewer),
    { ssr: false, loading: () => <div className="animate-pulse bg-slate-100 rounded-2xl min-h-[400px] w-full" /> }
);

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuData.menu[0].category);
    // Track selected item explicitly
    const [selectedItem, setSelectedItem] = useState<any>(menuData.menu[0].items[0]);
    const [showPdf, setShowPdf] = useState(false);

    const activeMenu = menuData.menu.find((cat) => cat.category === activeCategory);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        const newCategory = menuData.menu.find((cat) => cat.category === category);
        if (newCategory && newCategory.items.length > 0) {
            setSelectedItem(newCategory.items[0]); // Select first item automatically
        }
    };

    return (
        <section id="menu" className="w-full py-16 px-6 md:px-12 transition-colors duration-500 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold font-dm-sans mb-4 tracking-tight text-slate-900">
                        Our Menu
                    </h2>
                    <p className="font-open-sans max-w-2xl mx-auto text-base text-slate-500">
                        Explore our carefully crafted selections, from our signature extractions to delightful bites.
                    </p>
                </div>

                {/* Split View Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
                    
                    {/* Left Column: Sticky Visual */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-24 w-full h-[600px] bg-[#CEE8F5] flex flex-col items-center justify-center p-8 text-center overflow-hidden rounded-3xl">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={selectedItem?.name || 'default'}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="z-10 flex flex-col items-center w-full"
                                >
                                    {/* Placeholder Image container */}
                                    <div className="w-48 h-48 lg:w-64 lg:h-64 mb-8 relative flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-full shadow-inner border border-white/60">
                                        <svg className="w-20 h-20 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <div className="absolute -bottom-4 bg-white px-5 py-2 rounded-full shadow-md border border-slate-100 transform rotate-[-3deg]">
                                            <span className="font-bold text-primary text-sm font-dm-sans uppercase">{activeCategory}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl lg:text-3xl font-extrabold font-dm-sans text-primary mb-3 leading-tight uppercase tracking-tight">
                                        {selectedItem?.name || "Lini Produk Bagi Kopi"}
                                    </h3>
                                    <p className="font-open-sans text-slate-700 font-medium max-w-sm line-clamp-3">
                                        {selectedItem?.description || "Pilihan kopi terbaik dan cemilan lezat untuk menemani hari-harimu."}
                                    </p>
                                    
                                    {/* Price Preview on Left */}
                                    <div className="mt-8 flex gap-3">
                                        {selectedItem && ('R' in selectedItem.prices) && (selectedItem.prices as any).R && (
                                            <div className="px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                                                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">REGULAR</span>
                                                <span className="font-extrabold text-[#EDB917] font-dm-sans text-lg">{(selectedItem.prices as any).R}K</span>
                                            </div>
                                        )}
                                        {selectedItem && ('L' in selectedItem.prices) && (selectedItem.prices as any).L && (
                                            <div className="px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                                                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">LARGE</span>
                                                <span className="font-extrabold text-[#EDB917] font-dm-sans text-lg">{(selectedItem.prices as any).L}K</span>
                                            </div>
                                        )}
                                        {selectedItem && ('1L' in selectedItem.prices) && (selectedItem.prices as any)["1L"] && (
                                            <div className="px-5 py-2.5 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                                                <span className="text-[10px] text-slate-400 font-bold block mb-0.5">1 LITER</span>
                                                <span className="font-extrabold text-[#EDB917] font-dm-sans text-lg">{(selectedItem.prices as any)["1L"]}K</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Decorative element */}
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column: Menu List & Tabs */}
                    <div className="flex flex-col">
                        
                        {/* Category Tabs (Sharp boxes, not pills) */}
                        <div className="flex flex-wrap gap-0 mb-4 bg-white border border-slate-200">
                            {menuData.menu.map((category) => {
                                const isActive = activeCategory === category.category;
                                return (
                                    <button
                                        key={category.category}
                                        onClick={() => handleCategoryChange(category.category)}
                                        className={`flex-1 min-w-[120px] px-4 py-3 font-open-sans font-bold text-xs sm:text-sm transition-all duration-300 border-r border-slate-200 last:border-r-0 ${
                                            isActive 
                                                ? 'bg-primary text-white border-b-4 border-b-[#EDB917]' 
                                                : 'bg-white text-primary hover:bg-slate-50 border-b-4 border-b-transparent hover:border-b-slate-300'
                                        }`}
                                    >
                                        {category.category.toUpperCase()}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Menu Flat List */}
                        <motion.div layout className="flex flex-col w-full">
                            <AnimatePresence mode="popLayout">
                                {activeMenu?.items.map((item, idx) => {
                                    const isSelected = selectedItem?.name === item.name;
                                    
                                    return (
                                        <motion.div
                                            key={item.name}
                                            layout
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                            transition={{ duration: 0.2, delay: idx * 0.03 }}
                                            onClick={() => setSelectedItem(item)}
                                            className={`group flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-dashed gap-4 cursor-pointer transition-all duration-300 px-4 -mx-4 rounded-xl ${
                                                isSelected 
                                                    ? 'border-transparent bg-blue-50/60 shadow-sm' 
                                                    : 'border-slate-300 hover:bg-slate-50 border-transparent hover:border-transparent'
                                            }`}
                                        >
                                            {/* Left Side: Name and Description */}
                                            <div className="flex-1 pr-4">
                                                <h3 className={`text-lg font-extrabold font-dm-sans tracking-tight uppercase transition-colors ${isSelected ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                                                    {item.name}
                                                </h3>
                                                {item.description && (
                                                    <p className={`text-sm font-open-sans mt-1 transition-colors ${isSelected ? 'text-slate-700' : 'text-slate-500'}`}>
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Right Side: Prices */}
                                            <div className="flex gap-4 sm:gap-6 items-center flex-shrink-0">
                                                {('R' in item.prices) && (item.prices as any).R && (
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">R</span>
                                                        <span className="font-bold text-[#EDB917] font-dm-sans text-base">{(item.prices as any).R}K</span>
                                                    </div>
                                                )}
                                                {('L' in item.prices) && (item.prices as any).L && (
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">L</span>
                                                        <span className="font-bold text-[#EDB917] font-dm-sans text-base">{(item.prices as any).L}K</span>
                                                    </div>
                                                )}
                                                {('1L' in item.prices) && (item.prices as any)["1L"] && (
                                                    <div className="flex flex-col items-center">
                                                        <span className="text-[10px] text-slate-400 font-bold mb-0.5">1L</span>
                                                        <span className="font-bold text-[#EDB917] font-dm-sans text-base">{(item.prices as any)["1L"]}K</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>

                        {/* Browse Catalog CTA */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-8 flex justify-start"
                        >
                            <button 
                                onClick={() => setShowPdf(!showPdf)}
                                className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-none hover:bg-primary hover:text-white transition-colors duration-300 font-dm-sans group flex items-center gap-3 w-full justify-center sm:w-auto"
                            >
                                <span className="tracking-widest uppercase text-sm">
                                    {showPdf ? "Tutup Katalog" : "Lihat Buku Menu"}
                                </span>
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

                    </div>
                </div>

                {/* PDF Viewer Section (Full width at bottom) */}
                <AnimatePresence>
                    {showPdf && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white p-6 md:p-8 border-t-4 border-t-primary shadow-lg rounded-b-xl border-x border-b border-slate-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-extrabold font-dm-sans text-slate-900 uppercase tracking-tight">Katalog Lengkap</h3>
                                    <p className="text-slate-500 font-open-sans mt-2">Geser untuk melihat halaman menu kami</p>
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
