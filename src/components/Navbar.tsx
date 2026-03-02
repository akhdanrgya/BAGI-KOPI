"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const { scrollY } = useScroll();

    useEffect(() => setMounted(true), []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Change to solid when scrolled past the 400vh container
        if (latest > window.innerHeight * 3.8) {
            setIsTransparent(false);
        } else {
            setIsTransparent(true);
        }
    });

    const navClass = isTransparent
        ? "fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 bg-transparent text-white border-b border-transparent"
        : "fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 bg-white/90 backdrop-blur-md text-slate-900 border-b border-slate-200 shadow-sm";

    const textClass = isTransparent ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-primary";

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className={`text-2xl font-bold tracking-tight font-dm-sans transition-colors duration-500 ${isTransparent ? 'text-white' : 'text-primary'}`}>
                    Bagi Kopi
                </Link>
                <div className={`hidden md:flex gap-8 text-sm font-semibold font-open-sans uppercase tracking-wider ${textClass}`}>
                    <Link href="/" className="transition-colors">Home</Link>
                    <Link href="#outlets" className="transition-colors">Outlets</Link>
                    <Link href="#partnership" className="transition-colors">Partnership</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <button className={`md:hidden text-sm uppercase tracking-widest font-open-sans ${textClass}`}>
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    );
};
