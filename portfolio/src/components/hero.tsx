"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/components/ui/cn";
import { DUR, EASE } from "@/components/ui/motion";

/**
 * Hero component implementing Kinetic Brutalist design:
 * - Left-aligned, asymmetric composition
 * - Massive fluid typography with clamp(); solid + outlined kinetic lines
 * - Scroll-triggered parallax via Framer Motion
 * - Sharp corners (no rounded edges)
 */
export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    // Parallax scroll effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Transform values for parallax layers (disabled under reduced motion)
    const headlineParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const taglineParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const headlineY = prefersReducedMotion ? 0 : headlineParallax;
    const taglineY = prefersReducedMotion ? 0 : taglineParallax;
    const opacity = prefersReducedMotion ? 1 : scrollOpacity;

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-24 bg-black"
        >
            {/* Background grain texture overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Main content */}
            <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.md, delay: 0.05, ease: EASE }}
                    className="mb-6 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50"
                >
                    <span className="w-2.5 h-2.5 bg-[var(--accent)]" aria-hidden="true" />
                    Data Scientist &amp; Engineer
                </motion.p>

                {/* Main headline — Kinetic typography */}
                <motion.h1
                    style={{ y: headlineY }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.xl, delay: 0.1, ease: EASE }}
                    className={cn(
                        "font-display font-bold tracking-tighter leading-[0.82]",
                        "text-[clamp(3.5rem,13vw,12rem)]",
                        "text-foreground uppercase"
                    )}
                >
                    <span className="block">
                        Roshan<span className="text-[var(--accent)]">.</span>
                    </span>
                    <span className="block text-outline">Sivakumar</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    style={{ y: taglineY }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.lg, delay: 0.18, ease: EASE }}
                    className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--foreground)]/70 sm:text-xl"
                >
                    Building predictive systems and scalable pipelines that transform complex data into decisive action.
                </motion.p>

                {/* CTA Buttons — Brutalist styling */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: DUR.lg, delay: 0.25, ease: EASE }}
                    className="mt-12 flex flex-wrap gap-4"
                >
                    <a
                        href="#projects"
                        className={cn(
                            "group inline-flex items-center gap-3 px-8 py-4",
                            "bg-[var(--accent)] text-[var(--background)] rounded-none",
                            "text-sm font-bold uppercase tracking-[0.2em]",
                            "transition-all duration-200 hover:bg-[var(--foreground)]"
                        )}
                    >
                        View Projects
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className={cn(
                            "inline-flex items-center gap-3 px-8 py-4",
                            "border-2 border-[var(--border)] rounded-none",
                            "text-sm font-medium uppercase tracking-[0.2em]",
                            "transition-all duration-200",
                            "hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]"
                        )}
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </motion.div>

            {/* Bottom meta row */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: DUR.lg }}
                className="absolute bottom-12 left-6 sm:left-12 lg:left-24 hidden sm:block text-xs font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/40"
            >
                Based in Nashville, TN
            </motion.p>

            {/* Glitch Arrow Indicator (decorative) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: DUR.lg }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
                aria-hidden="true"
            >
                <div className="relative">
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
