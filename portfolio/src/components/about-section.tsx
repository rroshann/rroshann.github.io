"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/ui/cn";

/**
 * About section for the homepage.
 * Kinetic Brutalist design with scroll-triggered animations.
 */
export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24 flex items-center"
        >
            <motion.div
                style={{ opacity, y }}
                className="max-w-4xl mx-auto"
            >
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)] mb-4"
                >
                    01 — About
                </motion.p>

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={cn(
                        "font-display font-bold tracking-tighter leading-[0.9]",
                        "text-[clamp(2rem,8vw,6rem)]",
                        "text-foreground mb-12"
                    )}
                >
                    ABOUT <span className="text-[var(--accent)]">ME</span>
                </motion.h2>

                {/* Bio Content */}
                <div className="space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 sm:text-xl">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I build intelligent systems that turn messy data into clear decisions.
                        Currently finishing my M.S. in Data Science at Vanderbilt, I bring
                        a Mechanical Engineering foundation that taught me to think in systems:
                        tolerances, constraints, and trade-offs. Now I apply that rigor to
                        machine learning pipelines, scalable architectures, and production AI.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        My recent work spans industry and academia. At SERVPRO, I built a GPT-4 Vision
                        agent that automates BI reporting for 13,500+ job records nightly, eliminating
                        40+ hours of manual work. At Nissan, I led a team that analyzed 140,000+ training
                        logs and built a RAG-based chatbot presented to NA executives. In research,
                        I achieved 98% accuracy on AI-generated image detection using deep learning.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Right now, I&apos;m most energized by Generative AI, computer vision,
                        and the craft of turning complex systems into intuitive experiences.
                        When I&apos;m not shipping code, you&apos;ll find me exploring
                        the latest AI tooling, immersed in story-driven games, or watching WWE.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
