"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/ui/cn";
import ProjectCard from "@/components/project-card";

const nissanProjects = [
    {
        title: "Nissan Dealer Training Analytics & AI Chatbot",
        description:
            "Developed a RAG-based chatbot using AWS Bedrock and analyzed 140k+ logs to diagnose engagement issues for Nissan North America.",
        href: "/projects/nissan-chatbot",
    },
    {
        title: "Packaging Optimization for Automotive Supply Chain",
        description:
            "Led an optimization initiative for Nissan using Python & Tableau to identify packaging inefficiencies, projecting ~20% cost savings.",
        href: "/projects/nissan",
    },
];

const aiProjects = [
    {
        title: "Scene Reader: Real-Time Visual Accessibility",
        description:
            "Built a hybrid YOLO + LLM pipeline for visually impaired users, achieving 0.54s latency and 3x speedup over pure VLMs.",
        href: "/projects/scene-reader",
    },
    {
        title: "AI-Generated Image Detection",
        description:
            "Achieved 98% detection accuracy for AI images using EfficientNet-B0 and VGG16 transfer learning with Grad-CAM interpretability.",
        href: "/projects/ai-detection",
    },
];

const analyticsProjects = [
    {
        title: "European Soccer Analytics Platform",
        description:
            "Architected a MongoDB & Flask platform analyzing 25k+ matches, using Gradient Boosting to predict outcomes with custom feature engineering.",
        href: "/projects/soccer-analytics",
    },
    {
        title: "Sales Playbook Optimization with Machine Learning",
        description:
            "Improved sales targeting by building predictive models and interactive dashboards for deal outcomes.",
        href: "/projects/sales",
    },
    {
        title: "Economic Freedom and Global Well-Being",
        description:
            "Analyzed the connection between economic freedom and societal outcomes using PCA and clustering.",
        href: "/projects/eda",
    },
    {
        title: "North Carolina Voter Database System",
        description:
            "Built a full-scale relational database from raw voter data with normalization, stored procedures, triggers, and front-end integration.",
        href: "/projects/sql",
    },
];

const engineeringProjects = [
    {
        title: "Optimizing a Lightweight 3D-Printed Prosthetic Arm",
        description:
            "Led the development of a low-cost, durable prosthetic arm using carbon fiber and generative design.",
        href: "/projects/prosthetic",
    },
    {
        title: "Obstacle Avoidance with a ROS-Simulated Mobile Robot",
        description:
            "Designed and simulated a two-wheeled robot using ROS and Gazebo with Bug2 algorithm, SLAM, and LIDAR-based mapping.",
        href: "/projects/ros",
    },
    {
        title: "Stabilizing a Tumbling Satellite Using Control Wheel Dynamics",
        description:
            "Designed and simulated a MATLAB-based control system using momentum wheels and Lyapunov stability theory.",
        href: "/projects/satellite",
    },
];

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.1], [60, 0]);

    return (
        <section
            id="projects"
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
                    04 — Projects
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
                    <span className="text-[var(--accent)]">SELECTED WORKS</span>
                </motion.h2>

                {/* Nissan / Industry Section */}
                <div className="mb-32">
                    <div className="flex items-end justify-between border-b-2 border-[var(--accent)] mb-12 pb-4">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-[var(--accent)]"
                        >
                            Industry Collaborations (Nissan)
                        </motion.h3>
                        <span className="hidden md:block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-1">
                            Featured Work
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {nissanProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="group relative"
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    category="data"
                                    isNissan={true}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Generative AI & Computer Vision */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50 mb-12 border-b border-[var(--border)] pb-4"
                    >
                        Generative AI & Computer Vision
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {aiProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    category="data"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Data Engineering & Predictive Analytics */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50 mb-12 border-b border-[var(--border)] pb-4"
                    >
                        Machine Learning & Scalable Systems
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {analyticsProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    category="data"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Engineering Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50 mb-12 border-b border-[var(--border)] pb-4"
                    >
                        Engineering & Physical Systems
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {engineeringProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    category="engineering"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
