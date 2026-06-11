"use client";

import { motion } from "framer-motion";
import { cn } from "@/components/ui/cn";
import { EASE } from "@/components/ui/motion";

const contactLinks = [
    {
        icon: "✉️",
        label: "Email",
        value: "roshan.siddartha.24@gmail.com",
        href: "mailto:roshan.siddartha.24@gmail.com",
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
    return (
        <section
            id="contact"
            className="min-h-screen bg-black px-6 sm:px-12 lg:px-24 py-24 flex items-center"
        >
            <div className="max-w-3xl mx-auto w-full">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--border)] mb-4"
                >
                    06 — Contact
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
                        "text-foreground mb-6"
                    )}
                >
                    GET IN <span className="text-[var(--accent)]">TOUCH</span>
                </motion.h2>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
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
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel={
                                link.href.startsWith("mailto")
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.06, ease: EASE }}
                            className="group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 border-2 border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-all duration-200"
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
                            <span className="hidden md:ml-auto md:block text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200 group-hover:text-[var(--background)]">
                                →
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
