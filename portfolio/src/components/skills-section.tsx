"use client";

import { motion } from "framer-motion";
import { cn } from "@/components/ui/cn";
import { EASE } from "@/components/ui/motion";

const SKILLS = [
    {
        category: "Generative AI & Vision",
        items: [
            { name: "RAG Architectures" },
            { name: "LLM APIs (OpenAI, Claude, Gemini)" },
            { name: "GPT-4 Vision" },
            { name: "Prompt Engineering" },
            { name: "PyTorch" },
            { name: "Deep Learning (CNNs)" },
            { name: "Transfer Learning" },
            { name: "Computer Vision (YOLOv8)" },
            { name: "Grad-CAM" },
            { name: "OpenCV" },
        ],
    },
    {
        category: "Data Science & ML",
        items: [
            { name: "Machine Learning" },
            { name: "Scikit-learn" },
            { name: "Feature Engineering" },
            { name: "Statistical Modeling" },
            { name: "Pandas & NumPy" },
            { name: "Data Visualization" },
        ],
    },
    {
        category: "Data Engineering",
        items: [
            { name: "Python" },
            { name: "ETL Pipelines" },
            { name: "SQL Querying" },
            { name: "NoSQL Design" },
            { name: "Web Scraping" },
            { name: "Flask & Streamlit" },
            { name: "Playwright" },
        ],
    },
    {
        category: "Platforms & Tools",
        items: [
            { name: "AWS & Docker" },
            { name: "Git & GitHub Actions" },
            { name: "MySQL & MongoDB" },
            { name: "Tableau & PowerBI" },
            { name: "Amazon QuickSight" },
            { name: "Azure AD" },
            { name: "Jupyter" },
        ],
    },
];


export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)] mb-4"
                >
                    02 — Toolkit
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: EASE }}
                            className="border-2 border-[var(--border)] p-8 hover:border-[var(--accent)] transition-colors duration-200 group"
                        >
                            <h3 className="text-xl font-bold uppercase tracking-tight mb-8 group-hover:text-[var(--accent)] transition-colors">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className={cn(
                                            "px-3 py-1 text-sm font-medium uppercase tracking-wide",
                                            "border border-[var(--border)] text-[var(--foreground)]/80",
                                            "group-hover:text-[var(--foreground)] transition-colors"
                                        )}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
