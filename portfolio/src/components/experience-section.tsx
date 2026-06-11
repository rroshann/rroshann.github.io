"use client";

import { motion } from "framer-motion";
import { EASE } from "@/components/ui/motion";
import SectionHeading from "@/components/section-heading";

const EXPERIENCE = [
    {
        company: "SERVPRO",
        role: "Data Science Intern",
        period: "Aug 2025 – Present",
        location: "Lebanon, TN",
        description: [
            "Developed a Vision-Based Automation System using GPT-4 Vision to autonomously navigate legacy portals; engineered spatial reasoning logic to visually detect and bypass dynamic pop-ups, achieving 99% reliability.",
            "Engineered an end-to-end BI automation pipeline processing 13,500+ job records nightly, orchestrating Playwright web scraping and Microsoft Graph API distribution—eliminating 40+ hours of manual weekly reporting.",
            "Engineered a Python-based transformation layer (Pandas) to process raw logs into complex financial models; programmatically generated 11 pivot tables and multi-tier AR aging reports.",
            "Deployed a GitHub Actions CI/CD pipeline with daily CRON execution, Azure AD OAuth 2.0 authentication, and secure secrets management, achieving 100% hands-free operation.",
        ],
    },
    {
        company: "Vanderbilt University",
        role: "AI Intern (LDP)",
        period: "Jun 2025 – Aug 2025",
        location: "Nashville, TN",
        description: [
            "Built a secure web app to automate coach-student matching for the LDP, cutting manual work from days to under 10 minutes.",
            "Designed an anonymized data pipeline integrating resumes, surveys and bios to generate coach matches and rationale via OpenAI API.",
            "Delivered a five-column Excel output with ID-based top-2 coach matches and reasoning, enhancing transparency & scalability.",
            "Developed an embedded AI assistant with safety guardrails, refusal logic and prompt evaluation to support business students.",
        ],
    },
];

const EDUCATION = [
    {
        school: "Vanderbilt University",
        degree: "Master of Science in Data Science",
        period: "Aug 2024 – May 2026",
        gpa: "3.88/4.0",
        coursework:
            "Probability and Statistical Inference, Survey of Data Science Applications, Exploratory Data Analysis, Machine Learning, Deep Learning, Gen AI Models, NoSQL, Data Science Algorithms",
    },
    {
        school: "Vellore Institute of Technology",
        degree: "Bachelor of Technology in Mechanical Engineering",
        period: "July 2019 – June 2023",
        gpa: "8.47/10.0",
        coursework:
            "Problem Solving and Object-Oriented Programming, Statistics for Engineers, Linear Algebra, Programming Data Structures and Algorithms using Python",
    },
];

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24"
        >
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    index="03"
                    label="Background"
                    title={<>EXPERIENCE &amp; <span className="text-[var(--accent)]">EDUCATION</span></>}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-[var(--accent)]">
                            Work Experience
                        </h3>
                        <div className="space-y-12">
                            {EXPERIENCE.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.08 + index * 0.06, ease: EASE }}
                                    className="relative pl-8 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200"
                                >
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 bg-[var(--accent)] rounded-none" />
                                    <div className="mb-2">
                                        <h4 className="text-xl font-bold uppercase">{job.role}</h4>
                                        <p className="text-lg font-medium text-[var(--foreground)]/80">
                                            {job.company}
                                        </p>
                                    </div>
                                    <div className="flex justify-between text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-4">
                                        <span>{job.period}</span>
                                        <span>{job.location}</span>
                                    </div>
                                    <ul className="list-disc list-outside ml-4 space-y-2 text-[var(--foreground)]/70">
                                        {job.description.map((item, i) => (
                                            <li key={i} className="pl-1">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-[var(--accent)]">
                            Education
                        </h3>
                        <div className="space-y-12">
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.12 + index * 0.06, ease: EASE }}
                                    className="relative pl-8 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200"
                                >
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 bg-[var(--border)]" />
                                    <div className="mb-2">
                                        <h4 className="text-xl font-bold uppercase">
                                            {edu.school}
                                        </h4>
                                        <p className="text-lg font-medium text-[var(--foreground)]/80">
                                            {edu.degree}
                                        </p>
                                    </div>
                                    <div className="flex justify-between text-sm uppercase tracking-wider text-[var(--foreground)]/50 mb-4">
                                        <span>{edu.period}</span>
                                        <span>GPA: {edu.gpa}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-wide mb-2 text-[var(--foreground)]/60">
                                            Relevant Coursework:
                                        </p>
                                        <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                                            {edu.coursework}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
