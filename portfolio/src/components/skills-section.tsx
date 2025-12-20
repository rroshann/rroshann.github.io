"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/ui/cn";

const SKILLS = [
    {
        category: "Generative AI & Vision",
        items: [
            "RAG Architectures",
            "LLM APIs (OpenAI, Claude)",
            "Prompt Engineering",
            "Deep Learning (CNNs)",
            "Computer Vision (YOLOv8)",
            "PyTorch",
            "OpenCV",
        ],
    },
    {
        category: "Data Science & ML",
        items: [
            "Machine Learning",
            "Scikit-learn",
            "Statistical Modeling",
            "Feature Engineering",
            "Pandas & NumPy",
            "Data Visualization",
        ],
    },
    {
        category: "Engineering & Web",
        items: [
            "Python",
            "ETL Pipelines",
            "Web Scraping",
            "Flask & Streamlit",
            "Playwright",
            "SQL Querying",
            "NoSQL Design",
        ],
    },
    {
        category: "Platforms & Tools",
        items: [
            "AWS & Docker",
            "Git & GitHub Actions",
            "MySQL & MongoDB",
            "Tableau & PowerBI",
            "Amazon QuickSight",
            "Azure AD",
            "Jupyter",
        ],
    },
];

export default function SkillsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.15], [80, 0]);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24"
        >
            <motion.div style={{ opacity, y }} className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)] mb-4"
                >
                    02 — Toolkit
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
                        "text-foreground mb-16"
                    )}
                >
                    TECHNICAL <span className="text-[var(--accent)]">SKILLS</span>
                </motion.h2>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SKILLS.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="border-2 border-[var(--border)] p-8 hover:border-[var(--accent)] transition-colors duration-300 group"
                        >
                            <h3 className="text-xl font-bold uppercase tracking-tight mb-8 group-hover:text-[var(--accent)] transition-colors">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className={cn(
                                            "px-3 py-1 text-sm font-medium uppercase tracking-wide",
                                            "border border-[var(--border)] text-[var(--foreground)]/80",
                                            "group-hover:text-[var(--foreground)] transition-colors"
                                        )}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
