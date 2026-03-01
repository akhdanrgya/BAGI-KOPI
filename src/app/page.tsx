"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { BagiKopiCanvas } from "@/components/BagiKopiCanvas";
import { useRef } from "react";

export default function Home() {
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
    <>
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
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-2xl">
                BAGI KOPI
              </h1>
              <p className="text-xl md:text-3xl text-white/60 font-light tracking-wide max-w-xl mx-auto drop-shadow-md">
                A cup of comfort, assembled before your eyes.
              </p>
            </motion.div>
          </div>

          {/* Beat B: 25 - 45% */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-32">
            <motion.div style={{ opacity: opacityB, y: yB }} className="max-w-2xl text-left">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-2xl leading-tight">
                THE PERFECT<br />EXTRACTION
              </h2>
              <p className="text-lg md:text-2xl text-white/60 font-light tracking-wide drop-shadow-md">
                Premium beans, extracted to absolute perfection.
              </p>
            </motion.div>
          </div>

          {/* Beat C: 50 - 70% */}
          <div className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-32 text-right">
            <motion.div style={{ opacity: opacityC, y: yC }} className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90 mb-6 drop-shadow-2xl leading-tight">
                CREAMY<br />SYMPHONY
              </h2>
              <p className="text-lg md:text-2xl text-white/60 font-light tracking-wide drop-shadow-md">
                Swirling fresh milk meets authentic palm sugar.
              </p>
            </motion.div>
          </div>

          {/* Beat D: 75 - 95% */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-[25vh]">
            <motion.div style={{ opacity: opacityD, y: yD }}>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 mb-8 drop-shadow-2xl">
                YOUR DAILY DOSE
              </h2>
              <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide max-w-xl mx-auto mb-10 drop-shadow-md">
                Ready to drink, ready to inspire. Grab yours today.
              </p>
              <button className="px-10 py-4 bg-white/90 text-[#050505] font-semibold tracking-widest text-sm uppercase hover:bg-white transition-all transform hover:scale-105 rounded-full pointer-events-auto backdrop-blur-sm shadow-xl">
                Order Now
              </button>
            </motion.div>
          </div>

        </div>
      </main>

      {/* About Section */}
      <section className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center py-32 px-6 border-t border-foreground/5 z-10 transition-colors duration-500">

        <div className="max-w-6xl w-full text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-8">
            BEYOND THE CUP
          </h2>
          <p className="text-xl md:text-2xl text-foreground/50 font-light leading-relaxed mb-20 max-w-4xl mx-auto">
            Bagi Kopi is more than just an extraction. It is an atmosphere, a community, and a commitment to quality. Every bean is carefully selected to ensure a symphony of flavors in every sip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-10 border border-foreground/5 rounded-3xl bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors duration-500">
              <h3 className="text-2xl font-bold text-foreground/80 mb-4 tracking-tight">Quality</h3>
              <p className="text-foreground/40 leading-relaxed font-light text-lg">Finest Arabica beans ethically sourced directly from our local farming partners.</p>
            </div>
            <div className="p-10 border border-foreground/5 rounded-3xl bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors duration-500">
              <h3 className="text-2xl font-bold text-foreground/80 mb-4 tracking-tight">Precision</h3>
              <p className="text-foreground/40 leading-relaxed font-light text-lg">Extracted with scientific precision to capture maximum flavor and ultimate clarity.</p>
            </div>
            <div className="p-10 border border-foreground/5 rounded-3xl bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors duration-500">
              <h3 className="text-2xl font-bold text-foreground/80 mb-4 tracking-tight">Community</h3>
              <p className="text-foreground/40 leading-relaxed font-light text-lg">A welcoming space designed for deep connection, creativity, and sharing raw stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App & Loyalty Section */}
      <section className="relative w-full min-h-screen bg-[#0077f9] flex flex-col items-center justify-center py-32 px-6 z-10 transition-colors duration-500 overflow-hidden">

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
          <div className="w-full md:w-1/2 text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              Bagi Kopi App
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-tight drop-shadow-sm">
              REWARDS IN<br />EVERY DROP.
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 max-w-lg">
              Unlock exclusive perks, skip the line with order-ahead, and earn points towards your next flawless extraction. The complete Bagi Kopi experience, right in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-[#0077f9] font-bold tracking-widest text-sm uppercase transition-all transform hover:scale-105 hover:bg-white/90 rounded-full shadow-xl">
                Download Now
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold tracking-widest text-sm uppercase transition-all hover:bg-white/10 rounded-full">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center transform hover:-translate-y-2 transition-transform duration-700">
            {/* Mockup Phone Silhouette */}
            <div className="relative w-72 h-[600px] bg-[#050505] rounded-[3rem] border-8 border-white/10 shadow-2xl flex flex-col overflow-hidden items-center p-6">
              {/* Dynamic Island Notch */}
              <div className="absolute top-4 w-24 h-6 bg-[#1A1A1A] rounded-full z-20" />

              {/* Mockup Screen Content */}
              <div className="w-full h-full pt-16 flex flex-col">
                <div className="text-white/90 text-xl font-bold tracking-tight mb-8">Good morning.</div>

                {/* Reward Card */}
                <div className="w-full h-40 bg-gradient-to-br from-white/20 to-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between mb-6 shadow-xl backdrop-blur-md">
                  <div className="text-white/80 text-xs font-semibold tracking-widest uppercase">Loyalty Points</div>
                  <div className="text-white text-4xl font-bold tracking-tighter">1,250<span className="text-lg font-light text-white/70"> pts</span></div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 space-y-4">
                  <div className="w-full h-20 bg-white/5 rounded-xl flex items-center p-4 gap-4 border border-white/5">
                    <div className="w-12 h-12 bg-white/10 rounded-lg" />
                    <div className="flex-1">
                      <div className="h-4 w-24 bg-white/20 rounded mb-2" />
                      <div className="h-3 w-16 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="w-full h-20 bg-white/5 rounded-xl flex items-center p-4 gap-4 border border-white/5">
                    <div className="w-12 h-12 bg-white/10 rounded-lg" />
                    <div className="flex-1">
                      <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                      <div className="h-3 w-20 bg-white/10 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
