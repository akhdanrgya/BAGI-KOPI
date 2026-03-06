"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Different thresholds for home vs other pages
    const isHome = pathname === "/";
    const threshold = isHome ? window.innerHeight * 3.8 : 50;

    if (latest > threshold) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  });

  const isSolid = !isTransparent || isMobileMenuOpen;

  const navClass = !isSolid
    ? "fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 bg-transparent text-white border-b border-transparent"
    : `fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 border-b border-slate-200 shadow-sm ${
        isMobileMenuOpen
          ? "bg-white text-slate-900"
          : "bg-white/95 backdrop-blur-md text-slate-900"
      }`;

  const textClass = !isSolid
    ? "text-white/80 hover:text-white"
    : "text-slate-600 hover:text-primary";

  return (
    <>
      <nav className={navClass}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-[102]">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-xl md:text-2xl font-bold tracking-tight font-dm-sans transition-colors duration-500 ${!isSolid ? "text-white" : "text-primary"}`}
          >
            Bagi Kopi
          </Link>

          {/* Desktop Nav */}
          <div
            className={`hidden md:flex gap-8 text-sm font-semibold font-open-sans uppercase tracking-wider ${textClass}`}
          >
            <Link href="/" className="transition-colors">
              Home
            </Link>
            <Link href="/outlets" className="transition-colors">
              Outlets
            </Link>
            <Link href="/partnership" className="transition-colors">
              Partnership
            </Link>
            <Link href="/career" className="transition-colors">
              Career
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden gap-4 items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`text-sm uppercase tracking-widest font-open-sans p-2 -mr-2 ${isMobileMenuOpen ? "text-slate-900" : textClass}`}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen z-[105] bg-white text-slate-900 px-6 py-6 md:hidden flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold tracking-tight font-dm-sans text-primary"
              >
                Bagi Kopi
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-6 text-2xl font-bold font-dm-sans">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/outlets"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-primary transition-colors"
              >
                Outlets
              </Link>
              <Link
                href="/partnership"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-primary transition-colors"
              >
                Partnership
              </Link>
              <Link
                href="/career"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-primary transition-colors"
              >
                Career
              </Link>
            </div>

            {/* Additional Info / Footer */}
            <div className="mt-auto pb-12">
              <p className="text-sm font-open-sans text-slate-500 mb-4">
                Connect with us
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/bagikopi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
