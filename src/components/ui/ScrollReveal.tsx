"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function ScrollReveal({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: ScrollRevealProps) {
    const getInitialY = () => {
        switch (direction) {
            case "up":
                return 40;
            case "down":
                return -40;
            default:
                return 0;
        }
    };

    const getInitialX = () => {
        switch (direction) {
            case "left":
                return 40;
            case "right":
                return -40;
            default:
                return 0;
        }
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: getInitialY(),
                x: getInitialX()
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98], // custom apple-like ease
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
