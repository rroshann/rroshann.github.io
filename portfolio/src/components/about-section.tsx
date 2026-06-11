"use client";

import { motion } from "framer-motion";
import { cn } from "@/components/ui/cn";
import { EASE } from "@/components/ui/motion";

/**
 * About section for the homepage.
 * Kinetic Brutalist design with scroll-triggered animations.
 */
export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24 flex items-center"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)] mb-4"
                >
                    01 — About
                </motion.p>

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.05, ease: EASE }}
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
                    >
                        I build intelligent systems that turn messy data into clear decisions.
                        With an M.S. in Data Science from Vanderbilt, I bring
                        a Mechanical Engineering foundation that taught me to think in systems:
                        tolerances, constraints, and trade-offs. Now I apply that rigor to
                        machine learning pipelines, scalable architectures, and production AI.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
                    >
                        My recent work spans industry and academia. At SERVPRO, I built a GPT-4 Vision
                        agent that automates BI reporting for 13,500+ job records nightly, eliminating
                        40+ hours of manual work. At Nissan, I led a team that analyzed 140,000+ training
                        logs and built a RAG-based chatbot presented to NA executives. In research,
                        I achieved 98% accuracy on AI-generated image detection using deep learning.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
                    >
                        Right now, I&apos;m most energized by Generative AI, computer vision,
                        and the craft of turning complex systems into intuitive experiences.
                        When I&apos;m not shipping code, you&apos;ll find me exploring
                        the latest AI tooling, immersed in story-driven games, or watching WWE.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
