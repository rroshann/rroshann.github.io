"use client";

import { motion } from "framer-motion";
import { DUR, EASE, STAGGER } from "@/components/ui/motion";
import SectionHeading from "@/components/section-heading";

const contactLinks = [
    {
        label: "Email",
        value: "roshan.siddartha.24@gmail.com",
        href: "mailto:roshan.siddartha.24@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/roshansiddartha",
        href: "https://linkedin.com/in/roshansiddartha",
    },
    {
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
                <SectionHeading
                    index="06"
                    label="Contact"
                    title={<>GET IN <span className="text-[var(--accent)]">TOUCH</span></>}
                    className="mb-6 md:mb-8"
                />

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: DUR.md, delay: 0.1, ease: EASE }}
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
                            transition={{ duration: DUR.md, delay: 0.1 + index * STAGGER, ease: EASE }}
                            className="group flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-6 border-2 border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-all duration-200"
                        >
                            <span className="text-sm font-bold tracking-[0.2em] text-[var(--foreground)]/40 group-hover:text-[var(--background)]/60 transition-colors duration-200">
                                0{index + 1}
                            </span>
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
