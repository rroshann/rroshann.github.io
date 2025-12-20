"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/components/ui/cn";

/**
 * Hero component implementing Kinetic Brutalist design:
 * - Massive fluid typography with clamp()
 * - Scroll-triggered parallax via Framer Motion
 * - Sharp corners (no rounded edges)
 * - Acid Yellow (#DFE104) accent on CTA hover
 */
export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);

    // Parallax scroll effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Transform values for parallax layers
    const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const taglineY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 sm:px-12 lg:px-24 text-center bg-black"
        >
            {/* Background grain texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Main content */}
            <motion.div style={{ opacity }} className="relative z-10">
                {/* Eyebrow text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)]"
                >
                    Data Scientist & Engineer
                </motion.p>

                {/* Main headline — Kinetic typography */}
                <motion.h1
                    style={{ y: headlineY }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className={cn(
                        "font-display font-bold tracking-tighter leading-[0.85]",
                        "text-[clamp(3rem,12vw,14rem)]",
                        "text-foreground"
                    )}
                >
                    HI! I&apos;M
                    <br />
                    <span className="text-[var(--accent)]">ROSHAN</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    style={{ y: taglineY }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-8 mx-auto max-w-xl text-lg leading-relaxed text-[var(--foreground)]/70 sm:text-xl"
                >
                    Analyzing and visualizing data to make better and informed business
                    decisions.
                </motion.p>

                {/* CTA Button — Brutalist styling */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-12"
                >
                    <a
                        href="#about"
                        className={cn(
                            "group inline-flex items-center gap-3 px-8 py-4",
                            "border-2 border-[var(--border)] rounded-none",
                            "text-sm font-medium uppercase tracking-[0.2em]",
                            "transition-all duration-300",
                            "hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]"
                        )}
                    >
                        About Me
                        <span
                            className={cn(
                                "inline-block transition-transform duration-300",
                                "group-hover:translate-y-1"
                            )}
                        >
                            ↓
                        </span>
                    </a>
                </motion.div>


            </motion.div>

            {/* Glitch Arrow Indicator (Option 3) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <div className="relative group cursor-pointer">
                    <style jsx>{`
                        @keyframes glitch-anim-1 {
                            0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
                            20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
                            40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
                            60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
                            80% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
                            100% { clip-path: inset(30% 0 30% 0); transform: translate(1px, -1px); }
                        }
                        @keyframes glitch-anim-2 {
                            0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
                            20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
                            40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
                            60% { clip-path: inset(15% 0 80% 0); transform: translate(-1px, -2px); }
                            80% { clip-path: inset(55% 0 10% 0); transform: translate(1px, 1px); }
                            100% { clip-path: inset(40% 0 30% 0); transform: translate(-2px, -1px); }
                        }
                        .glitch-wrapper:hover .glitch-1 {
                            animation: glitch-anim-1 2.5s infinite linear alternate-reverse;
                            opacity: 1;
                        }
                        .glitch-wrapper:hover .glitch-2 {
                            animation: glitch-anim-2 3s infinite linear alternate-reverse;
                            opacity: 1;
                        }
                        /* Auto-glitch occasionally */
                        .glitch-1 { animation: glitch-anim-1 4s infinite linear alternate-reverse; opacity: 0.7; }
                        .glitch-2 { animation: glitch-anim-2 3s infinite linear alternate-reverse; opacity: 0.7; }
                    `}</style>
                    <div className="glitch-wrapper relative">
                        {/* Base Arrow */}
                        <div className="text-4xl font-bold text-[var(--accent)]">↓</div>

                        {/* Glitch Layers */}
                        <div className="glitch-1 absolute top-0 left-0 w-full h-full text-4xl font-bold text-[var(--accent)] opacity-0">↓</div>
                        <div className="glitch-2 absolute top-0 left-0 w-full h-full text-4xl font-bold text-white opacity-0 mix-blend-difference">↓</div>
                    </div>
                </div>
            </motion.div>




        </section>
    );
}
