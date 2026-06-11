"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/ui/motion";
import SectionHeading from "@/components/section-heading";

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
                <SectionHeading
                    index="02"
                    label="Toolkit"
                    title={<>TECHNICAL <span className="text-[var(--accent)]">SKILLS</span></>}
                />

                {/* Skills Columns — editorial, top-rule per group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
                    {SKILLS.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: EASE }}
                            className="group border-t-2 border-[var(--border)] pt-6 hover:border-[var(--accent)] transition-colors duration-200"
                        >
                            <div className="flex items-baseline justify-between mb-6">
                                <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                                    {group.category}
                                </h3>
                                <span className="text-sm font-medium text-[var(--foreground)]/40">
                                    0{index + 1}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {group.items.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="px-3 py-1 text-sm font-medium uppercase tracking-wide border border-[var(--border)] text-[var(--foreground)]/80 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 cursor-default"
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
