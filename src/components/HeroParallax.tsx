"use client";

import { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import Image from "next/image";

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Fase 1 & 2: Koreografi Gelas Coffee
  // 0 - 0.3: Scale 1.8, Center
  // 0.3 - 0.6: Scale ke 1, Pindah ke Kanan (25vw dari tengah)
  const cupScale = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [1.8, 1.8, 1, 1]);
  const cupX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], ["0vw", "0vw", "25vw", "25vw"]);
  
  // Rotasi: 0 -> miring -12deg saat bergerak -> kembali ke 0
  const cupRotate = useTransform(smoothProgress, [0, 0.3, 0.45, 0.6, 1], [0, 0, -12, 0, 0]);

  // Outline Typography Parallax (z-10)
  // 0 - 0.6: Bergerak perlahan ke kiri (berlawanan gelas) dan sedikit ke atas
  const bagiTextX = useTransform(smoothProgress, [0, 0.6, 1], ["0vw", "-20vw", "-20vw"]);
  const bagiTextY = useTransform(smoothProgress, [0, 0.6, 1], ["0px", "-50px", "-50px"]);

  // Fase 3: Koreografi Teks Masuk
  // 0.4 - 0.7: Muncul ke atas
  const textOpacity = useTransform(smoothProgress, [0, 0.4, 0.7, 1], [0, 0, 1, 1]);
  const textY = useTransform(smoothProgress, [0, 0.4, 0.7, 1], [50, 50, 0, 0]);

  return (
    <main ref={containerRef} className="relative w-full h-[300vh]">
      {/* Scroll track: h-[300vh] di outer, inner sticky top-0 */}
      {/* Background Layer (z-0): bg-[#0076F8] */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-[#0076F8] flex items-center justify-center">
        
        {/* Outline Typography Parallax (z-10) */}
        <motion.div 
          className="absolute z-10 flex items-center justify-center pointer-events-none"
          style={{ 
            x: bagiTextX,
            y: bagiTextY,
            willChange: "transform" 
          }}
        >
          <span className="text-[20vw] font-extrabold text-transparent opacity-30 [-webkit-text-stroke:2px_white] select-none tracking-tighter">
            BAGI
          </span>
        </motion.div>

        {/* Yellow Accent Glow (z-20) */}
        <motion.div 
          className="absolute z-20 flex items-center justify-center pointer-events-none"
          style={{ 
            scale: cupScale, 
            x: cupX, 
            rotate: cupRotate,
            willChange: "transform"
          }}
        >
          <div className="w-96 h-96 rounded-full bg-[#EDB917] blur-[70px]" />
        </motion.div>

        {/* Subject / Gelas Kopi (z-30) */}
        <motion.div 
          className="absolute z-30 flex items-center justify-center pointer-events-none"
          style={{ 
            scale: cupScale, 
            x: cupX, 
            rotate: cupRotate,
            willChange: "transform"
          }}
        >
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] drop-shadow-2xl">
            <Image 
              src="/images/hero-cup.png"
              alt="Bagi Kopi Cup"
              fill
              priority
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Foreground Text (z-40) */}
        <motion.div 
          className="absolute left-0 w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 z-40 pointer-events-none"
          style={{ 
            opacity: textOpacity, 
            y: textY, 
            willChange: "transform, opacity" 
          }}
        >
          <div className="max-w-xl text-left pointer-events-auto">
            <h1 className="font-dm-sans text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 md:mb-6 leading-tight drop-shadow-xl">
              Berbagi segala,<br />segala berbagi
            </h1>
            <p className="font-open-sans text-white/90 text-lg md:text-xl tracking-wide drop-shadow-md">
              A cup of comfort, assembled before your eyes.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
