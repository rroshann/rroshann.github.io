"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/ui/cn";

/**
 * Resume section for the homepage.
 * Kinetic Brutalist design with scroll-triggered animations.
 */
export default function ResumeSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.15], [80, 0]);

    return (
        <section
            id="resume"
            ref={sectionRef}
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24"
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
                    05 — Resume
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
                        "text-foreground mb-6"
                    )}
                >
                    MY <span className="text-[var(--accent)]">RESUME</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-[var(--foreground)]/70 mb-8 max-w-2xl"
                >
                    You can view or download my full resume below for more details on my
                    education, skills, and experience.
                </motion.p>

                {/* Download Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-12"
                >
                    <a
                        href="/files/Roshan_Sivakumar_Resume.pdf"
                        download="Roshan_Sivakumar_Resume.pdf"
                        className={cn(
                            "inline-flex items-center gap-3 px-8 py-4",
                            "bg-[var(--accent)] text-[var(--background)] rounded-none",
                            "text-sm font-medium uppercase tracking-[0.1em]",
                            "hover:bg-[var(--foreground)] transition-all duration-300"
                        )}
                    >
                        Download Resume (PDF)
                        <span className="text-lg">↓</span>
                    </a>
                </motion.div>

                {/* PDF Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-2 border-[var(--border)] bg-[var(--muted)]"
                >
                    <iframe
                        src="/files/Roshan_Sivakumar_Resume.pdf"
                        className="w-full aspect-[8.5/11]"
                        title="Resume PDF"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
