"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { BagiKopiCanvas } from "@/components/BagiKopiCanvas";
import { useRef } from "react";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Beat A: 0 - 20% Scroll
  const opacityA = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.20], [0, 1, 1, 0]);
  const yA = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.20], [20, 0, 0, -20]);

  // Beat B: 25 - 45% Scroll
  const opacityB = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.45], [0, 1, 1, 0]);
  const yB = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.45], [20, 0, 0, -20]);

  // Beat C: 50 - 70% Scroll
  const opacityC = useTransform(scrollYProgress, [0.50, 0.55, 0.65, 0.70], [0, 1, 1, 0]);
  const yC = useTransform(scrollYProgress, [0.50, 0.55, 0.65, 0.70], [20, 0, 0, -20]);

  // Beat D: 75 - 95% Scroll
  const opacityD = useTransform(scrollYProgress, [0.75, 0.80, 0.90, 0.95], [0, 1, 1, 0]);
  const yD = useTransform(scrollYProgress, [0.75, 0.80, 0.90, 0.95], [20, 0, 0, -20]);

  // "Scroll to Explore" indicator
  const opacityIndicator = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <main ref={containerRef} className="relative w-full h-[400vh] bg-[#050505] selection:bg-white/20">
      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: opacityIndicator }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-3 z-50 pointer-events-none"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <BagiKopiCanvas />
      </div>

      {/* Text Overlays Layer (Now Sticky) */}
      <div className="sticky top-0 left-0 w-full h-screen pointer-events-none -mt-[100vh]">

        {/* Beat A: 0 - 20% */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div style={{ opacity: opacityA, y: yA }}>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-2xl font-dm-sans">
              BAGI KOPI
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-light tracking-wide max-w-xl mx-auto drop-shadow-md font-open-sans">
              A cup of comfort, assembled before your eyes.
            </p>
          </motion.div>
        </div>

        {/* Beat B: 25 - 45% */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-32">
          <motion.div style={{ opacity: opacityB, y: yB }} className="max-w-2xl text-left">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-2xl leading-tight font-dm-sans">
              THE PERFECT<br />EXTRACTION
            </h2>
            <p className="text-lg md:text-2xl text-white/60 font-light tracking-wide drop-shadow-md font-open-sans">
              Premium beans, extracted to absolute perfection.
            </p>
          </motion.div>
        </div>

        {/* Beat C: 50 - 70% */}
        <div className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-32 text-right">
          <motion.div style={{ opacity: opacityC, y: yC }} className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-2xl leading-tight font-dm-sans">
              CREAMY<br />SYMPHONY
            </h2>
            <p className="text-lg md:text-2xl text-white/60 font-light tracking-wide drop-shadow-md font-open-sans">
              Swirling fresh milk meets authentic palm sugar.
            </p>
          </motion.div>
        </div>

        {/* Beat D: 75 - 95% */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-[25vh]">
          <motion.div style={{ opacity: opacityD, y: yD }}>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 mb-8 drop-shadow-2xl font-dm-sans">
              YOUR DAILY DOSE
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide max-w-xl mx-auto mb-10 drop-shadow-md font-open-sans">
              Ready to drink, ready to inspire. Grab yours today.
            </p>
            <button className="px-10 py-4 bg-white/90 text-[#050505] font-semibold tracking-widest text-sm uppercase hover:bg-white transition-all transform hover:scale-105 rounded-full pointer-events-auto backdrop-blur-sm shadow-xl font-open-sans">
              Order Now
            </button>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
