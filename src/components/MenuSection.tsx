"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import menuData from "@/data/menu.json";

export function MenuSection() {
    const [activeCategory, setActiveCategory] = useState(menuData.menu[0].category);

    const activeMenu = menuData.menu.find((cat) => cat.category === activeCategory);
    const isDarkSection = activeCategory === "Signature Coffee";

    return (
        <section id="menu" className={`w-full py-24 px-6 md:px-12 transition-colors duration-500 ${isDarkSection ? 'bg-zinc-900' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-5xl font-extrabold font-dm-sans mb-4 tracking-tight ${isDarkSection ? 'text-white' : 'text-slate-900'}`}>
                        Our Menu
                    </h2>
                    <p className={`font-open-sans max-w-2xl mx-auto ${isDarkSection ? 'text-slate-400' : 'text-slate-500'}`}>
                        Explore our carefully crafted selections, from our signature extractions to delightful bites.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {menuData.menu.map((category) => {
                        const isActive = activeCategory === category.category;
                        return (
                            <button
                                key={category.category}
                                onClick={() => setActiveCategory(category.category)}
                                className={`px-6 py-3 rounded-full font-open-sans font-semibold text-sm transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-md' : isDarkSection ? 'bg-zinc-800 text-slate-300 hover:bg-zinc-700 hover:text-white border border-zinc-700' : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-primary border border-slate-200'}`}
                            >
                                {category.category}
                            </button>
                        );
                    })}
                </div>

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
                                className={`flex flex-col p-5 rounded-2xl shadow-sm border hover:shadow-md transition-shadow h-full ${isDarkSection ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-slate-100'}`}
                            >
                                <div className="flex-1">
                                    <h3 className={`text-lg font-bold font-dm-sans tracking-tight ${isDarkSection ? 'text-white' : 'text-slate-900'}`}>
                                        {item.name}
                                    </h3>
                                    {item.description && (
                                        <p className={`text-sm font-open-sans mt-1 line-clamp-2 ${isDarkSection ? 'text-slate-400' : 'text-slate-500'}`}>
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                                
                                <div className={`flex gap-4 mt-4 pt-4 border-t ${isDarkSection ? 'border-zinc-700' : 'border-slate-100'}`}>
                                    {item.prices.R && (
                                        <span className="font-medium text-orange-500 font-open-sans text-sm">R: {item.prices.R}K</span>
                                    )}
                                    {item.prices.L && (
                                        <span className="font-medium text-orange-500 font-open-sans text-sm">L: {item.prices.L}K</span>
                                    )}
                                    {item.prices["1L"] && (
                                        <span className="font-medium text-orange-500 font-open-sans text-sm">1L: {item.prices["1L"]}K</span>
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
