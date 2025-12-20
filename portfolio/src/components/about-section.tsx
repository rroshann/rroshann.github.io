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
                        I&apos;m a Data Science graduate student at Vanderbilt University
                        with a background in Mechanical Engineering. I&apos;m passionate
                        about solving real-world problems through data, especially when it
                        means creating tools that help people make better decisions.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        I&apos;ve led projects that range from building predictive models
                        for B2B sales to analyzing global economic patterns and improving
                        supply chain packaging for a major automotive client. I enjoy
                        working through complexity, whether it&apos;s cleaning a massive
                        dataset, designing a machine learning pipeline, or creating
                        dashboards that make insights easy to act on.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Right now, I&apos;m most excited about scalable data systems,
                        applied machine learning, and the power of thoughtful data
                        storytelling. Outside of work, you&apos;ll probably find me
                        exploring new AI tools, diving into story-driven games, or listening
                        to music that sparks ideas.
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
