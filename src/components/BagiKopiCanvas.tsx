"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

export const BagiKopiCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    const FRAME_COUNT = 174;

    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // The image naming follows ezgif-frame-001.jpg up to ezgif-frame-174.jpg
        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const paddedIndex = String(i).padStart(3, "0");
            img.src = `/sequence/ezgif-frame-${paddedIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    // Draw current frame inside canvas
    useEffect(() => {
        if (!loaded || images.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const render = () => {
            // map 0 -> 1 progress to 0 -> 173 frame index
            const currentFrameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.floor(smoothProgress.get() * FRAME_COUNT)
            );

            const img = images[currentFrameIndex];
            if (!img) {
                animationFrameId = requestAnimationFrame(render);
                return;
            }

            // We ensure the canvas dimension matches viewport dynamically
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // "cover" fit logic to keep the coffee cup fully covering the screen
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Ensure the rest of the canvas is the pure void #050505
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShift_x,
                centerShift_y,
                img.width * ratio,
                img.height * ratio
            );

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [smoothProgress, loaded, images]);

    if (!loaded) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-screen bg-[#050505] text-white absolute top-0 left-0 z-50">
                <div className="w-16 h-16 border-4 border-white/10 border-t-white/80 rounded-full animate-spin mb-6" />
                <p className="text-white/60 font-medium tracking-widest text-sm uppercase">Loading Experience</p>
                <p className="text-white/40 mt-3 text-xs">{progress}%</p>
            </div>
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="sticky top-0 h-screen w-full object-cover pointer-events-none"
        />
    );
};
