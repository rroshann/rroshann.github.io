"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/components/ui/cn";

const contactLinks = [
    {
        icon: "✉️",
        label: "Email",
        value: "roshan.siddartha.sivakumar@vanderbilt.edu",
        href: "mailto:roshan.siddartha.sivakumar@vanderbilt.edu",
    },
    {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/roshansiddartha",
        href: "https://linkedin.com/in/roshansiddartha",
    },
    {
        icon: "🐙",
        label: "GitHub",
        value: "github.com/rroshann",
        href: "https://github.com/rroshann",
    },
];

/**
 * Contact section for the homepage.
 * Kinetic Brutalist design with scroll-triggered animations.
 */
export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [40, 0]);

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24 flex items-center"
        >
            <motion.div
                style={{ opacity, y }}
                className="max-w-3xl mx-auto w-full"
            >
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)] mb-4"
                >
                    06 — Contact
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
                    GET IN <span className="text-[var(--accent)]">TOUCH</span>
                </motion.h2>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-[var(--foreground)]/70 mb-12 max-w-2xl"
                >
                    <p>
                        I engineer scalable data systems that drive real-world impact. If
                        you&apos;re solving hard problems and need a partner who delivers
                        precision at scale, let&apos;s talk.
                    </p>
                </motion.div>

                {/* Contact Links */}
                <div className="space-y-6">
                    {contactLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel={
                                link.href.startsWith("mailto")
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                            className="group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 border-2 border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-all duration-300"
                        >
                            <span className="text-3xl">{link.icon}</span>
                            <div className="flex-1">
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/50 group-hover:text-[var(--background)]/70 mb-1">
                                    {link.label}
                                </p>
                                <p className="text-lg font-medium break-all md:break-normal group-hover:text-[var(--background)]">
                                    {link.value}
                                </p>
                            </div>
                            <span className="hidden md:ml-auto md:block text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 group-hover:text-[var(--background)]">
                                →
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
