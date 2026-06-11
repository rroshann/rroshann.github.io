"use client";

import { motion } from "framer-motion";
import { cn } from "@/components/ui/cn";
import { EASE } from "@/components/ui/motion";
import SectionHeading from "@/components/section-heading";

/**
 * Resume section for the homepage.
 * Kinetic Brutalist design with scroll-triggered animations.
 */
export default function ResumeSection() {
    return (
        <section
            id="resume"
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24"
        >
            <div className="max-w-4xl mx-auto">
                <SectionHeading
                    index="05"
                    label="Resume"
                    title={<>MY <span className="text-[var(--accent)]">RESUME</span></>}
                    className="mb-6 md:mb-8"
                />

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
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
                    transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
                    className="mb-12"
                >
                    <a
                        href="/files/Roshan_Sivakumar_Resume.pdf"
                        download="Roshan_Sivakumar_Resume.pdf"
                        className={cn(
                            "inline-flex items-center gap-3 px-8 py-4",
                            "bg-[var(--accent)] text-[var(--background)] rounded-none",
                            "text-sm font-medium uppercase tracking-[0.1em]",
                            "hover:bg-[var(--foreground)] transition-all duration-200"
                        )}
                    >
                        Download Resume (PDF)
                        <span className="text-lg">↓</span>
                    </a>
                </motion.div>

                {/* PDF Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
                    className="border-2 border-[var(--border)] bg-[var(--muted)]"
                >
                    <iframe
                        src="/files/Roshan_Sivakumar_Resume.pdf"
                        className="w-full aspect-[8.5/11]"
                        title="Resume PDF"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}
