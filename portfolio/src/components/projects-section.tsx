"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/ui/cn";
import ProjectCard from "@/components/project-card";

const dataProjects = [
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
        title: "Operational Cost Optimization with Nissan",
        description:
            "Collaborated with Nissan North America to identify cost-saving opportunities in logistics and packaging.",
        href: "/projects/nissan",
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
                    <span className="text-[var(--accent)]">PROJECTS</span>
                </motion.h2>

                {/* Data Science Section */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50 mb-12 border-b border-[var(--border)] pb-4"
                    >
                        📊 Data Science & Analytics
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {dataProjects.map((project, index) => (
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
                        ⚙️ Engineering & Physical Systems
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
