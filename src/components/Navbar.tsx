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
        : "fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 bg-background/90 backdrop-blur-md text-foreground border-b border-foreground/10";

    const textClass = isTransparent ? "text-white/70 hover:text-white" : "text-foreground/70 hover:text-foreground";

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    BAGI KOPI.
                </Link>
                <div className={`hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase ${textClass}`}>
                    <Link href="#about" className="transition-colors">About</Link>
                    <Link href="#menu" className="transition-colors">Menu</Link>
                    <Link href="#locations" className="transition-colors">Locations</Link>
                </div>
                <div className="flex gap-4 items-center">
                    <button className="md:hidden text-sm uppercase tracking-widest hidden">
                        Menu
                    </button>
                </div>
            </div>
        </nav>
    );
};
