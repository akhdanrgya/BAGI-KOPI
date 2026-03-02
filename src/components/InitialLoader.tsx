"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function InitialLoader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Start progress animation shortly after mount
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 50);

    // Show the loader for a minimum duration to ensure the animation is visible
    const timer = setTimeout(() => {
      setLoading(false);
      // Wait for the fade-out transition before completely removing it from the DOM
      const hideTimer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(hideTimer);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(progressTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Loading Bar at the top */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gray-100">
        <div 
          className="h-full bg-[#0066FF] transition-all ease-out"
          style={{ width: `${progress}%`, transitionDuration: '1.4s' }}
        />
      </div>

      <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32">
        <Image
          src="/bagikopi-android-chrome-512x512-1.png"
          alt="Bagi Kopi Logo"
          fill
          className="object-contain animate-pulse"
          priority
        />
      </div>
    </div>
  );
}
