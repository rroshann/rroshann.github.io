"use client";

import { motion } from "framer-motion";
import { DUR, EASE, STAGGER } from "@/components/ui/motion";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";

const industryProjects = [
    {
        title: "SEC Filings to Alpha: LLM-Driven Factor Extraction",
        description:
            "Led a 3-person capstone with AllianceBernstein, converting 2,441 SEC filings into a sentiment corpus that powers a sector-neutral long-short strategy with Information Ratio 2.02 over 318 trading days.",
        href: "/projects/ab-capstone",
        image: "/projects/ab-capstone.jpg",
        courseTag: "DSI Capstone · AllianceBernstein",
    },
    {
        title: "Nissan Dealer Training Analytics & AI Chatbot",
        description:
            "Analyzed 140k+ logs to uncover training gaps and built a RAG-based AI chatbot for 4,000+ dealers to access real-time EV info.",
        href: "/projects/nissan-chatbot",
        image: "/projects/nissan-chatbot.jpg",
        isNissan: true,
    },
    {
        title: "Packaging Optimization for Automotive Supply Chain",
        description:
            "Led an optimization initiative for Nissan using Python & Tableau to identify packaging inefficiencies, projecting ~20% cost savings.",
        href: "/projects/nissan",
        image: "/projects/nissan-packaging.jpg",
        isNissan: true,
    },
];

const aiProjects = [
    {
        title: "FabOps Copilot: Agentic AI for Semiconductor Fabs",
        description:
            "Built a 9-node LangGraph agent that diagnoses fab service-part stockout risk across policy, demand, and supply signals, achieving 83.3% pass rate on a real-state gold set.",
        href: "/projects/fabops-copilot",
        image: "/projects/fabops-copilot.jpg",
        courseTag: "Context-Augmented Gen AI",
    },
    {
        title: "Scene Reader: Real-Time Visual Accessibility",
        description:
            "Built a hybrid YOLO + LLM pipeline for visually impaired users, achieving 0.54s latency and 3x speedup over pure VLMs.",
        href: "/projects/scene-reader",
        image: "/projects/scene-reader.jpg",
        courseTag: "Generative AI (Transformers)",
    },
    {
        title: "AI-Generated Image Detection",
        description:
            "Achieved 98% detection accuracy for AI images using EfficientNet-B0 and VGG16 transfer learning with Grad-CAM interpretability.",
        href: "/projects/ai-detection",
        image: "/projects/ai-detection.jpg",
        courseTag: "Deep Learning",
    },
];

const analyticsProjects = [
    {
        title: "European Soccer Analytics Platform",
        description:
            "Architected a MongoDB & Flask platform analyzing 25k+ matches, using Gradient Boosting to predict outcomes with custom feature engineering.",
        href: "/projects/soccer-analytics",
        image: "/projects/soccer-analytics.jpg",
        courseTag: "NoSQL",
    },
    {
        title: "Sales Playbook Optimization with Machine Learning",
        description:
            "Implemented an ML-driven sales strategy using XGBoost and clustering on HubSpot data to improved prioritization and deal prediction.",
        href: "/projects/sales-playbook",
        image: "/projects/sales-playbook.jpg",
        courseTag: "Machine Learning",
    },
    {
        title: "Economic Freedom and Global Well-Being",
        description:
            "Explored the relationship between economic freedom and societal metrics (Happiness, GDP, Healthcare) using cluster analysis and regression.",
        href: "/projects/economic-freedom",
        image: "/projects/economic-freedom.jpg",
        courseTag: "Exploratory Data Analysis",
    },
    {
        title: "North Carolina Voter Database System",
        description:
            "Architected a secure PHP/MySQL voter management system with audit logging and demographic analytics for Mecklenburg County.",
        href: "/projects/nc-voter-db",
        image: "/projects/nc-voter.jpg",
        courseTag: "SQL",
    },
];

const engineeringProjects = [
    {
        title: "3D-Printed Prosthetic Arm",
        description:
            "Designed a low-cost, carbon fiber prosthetic using Autodesk Fusion 360 generative design, optimizing for a 1000N load under strict mass constraints.",
        href: "/projects/prosthetic",
        image: "/projects/prosthetic-arm.jpg",
    },
    {
        title: "Obstacle Avoidance with a ROS-Simulated Mobile Robot",
        description:
            "Implemented SLAM, GMapping, and the Bug 2 algorithm to enable an autonomous robot to navigate mapped environments in Gazebo.",
        href: "/projects/ros",
        image: "/projects/ros-robot.jpg",
    },
    {
        title: "Two-Wheel Inverted Pendulum Control System",
        description:
            "Modeled and controlled a balancing robot using Newton-Euler dynamics, feedback control, and MATLAB simulations.",
        href: "/projects/inverted-pendulum",
        image: "/projects/inverted-pendulum.jpg",
    },
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24"
        >
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    index="04"
                    label="Projects"
                    title={<>SELECTED <span className="text-[var(--accent)]">WORKS</span></>}
                />

                {/* Nissan / Industry Section */}
                <div className="mb-32">
                    <div className="flex items-end justify-between border-b-2 border-[var(--accent)] mb-10 pb-3">
                        <motion.h3
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: DUR.sm, delay: 0.05, ease: EASE }}
                            className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-[var(--accent)]"
                        >
                            <span className="mr-3 text-[var(--foreground)]/40">04.1</span>
                            Industry Collaborations
                        </motion.h3>
                        <span className="hidden md:block text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)] mb-1">
                            Featured Work
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {industryProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: DUR.md, delay: STAGGER * index, ease: EASE }}
                                className="group relative"
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    image={project.image}
                                    category="data"
                                    isNissan={project.isNissan}
                                    courseTag={project.courseTag}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Generative AI & Computer Vision */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: DUR.sm, delay: 0.05, ease: EASE }}
                        className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-10 border-b-2 border-[var(--border)] pb-3"
                    >
                        <span className="mr-3 text-[var(--foreground)]/40">04.2</span>
                        Generative AI &amp; Agentic Systems
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {aiProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: DUR.md, delay: STAGGER * index, ease: EASE }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    image={project.image}
                                    category="data"
                                    courseTag={project.courseTag}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Data Engineering & Predictive Analytics */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: DUR.sm, delay: 0.05, ease: EASE }}
                        className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-10 border-b-2 border-[var(--border)] pb-3"
                    >
                        <span className="mr-3 text-[var(--foreground)]/40">04.3</span>
                        Machine Learning &amp; Scalable Systems
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {analyticsProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: DUR.md, delay: STAGGER * index, ease: EASE }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    image={project.image}
                                    category="data"
                                    courseTag={project.courseTag}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Engineering Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: DUR.sm, delay: 0.05, ease: EASE }}
                        className="text-xl md:text-2xl font-bold uppercase tracking-tighter mb-10 border-b-2 border-[var(--border)] pb-3"
                    >
                        <span className="mr-3 text-[var(--foreground)]/40">04.4</span>
                        Engineering &amp; Physical Systems
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {engineeringProjects.map((project, index) => (
                            <motion.div
                                key={project.href}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: DUR.md, delay: STAGGER * index, ease: EASE }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    href={project.href}
                                    image={project.image}
                                    category="engineering"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
