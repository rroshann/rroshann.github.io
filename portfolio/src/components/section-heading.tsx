"use client";

import { motion } from "framer-motion";
import { cn } from "@/components/ui/cn";
import { DUR, EASE } from "@/components/ui/motion";

interface SectionHeadingProps {
    /** Section index, e.g. "01" */
    index: string;
    /** Short label, e.g. "About" */
    label: string;
    /** Heading content; can include accent spans */
    title: React.ReactNode;
    className?: string;
}

/**
 * Standard section header: accent square + index label + rule line,
 * followed by the oversized display title.
 */
export default function SectionHeading({ index, label, title, className }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12 md:mb-16", className)}>
            <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: DUR.sm, ease: EASE }}
                className="flex items-center gap-4 mb-6"
            >
                <span className="w-2.5 h-2.5 bg-[var(--accent)]" aria-hidden="true" />
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50">
                    {index} — {label}
                </span>
                <span className="flex-1 h-px bg-[var(--border)]" aria-hidden="true" />
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: DUR.lg, delay: 0.05, ease: EASE }}
                className={cn(
                    "font-display font-bold tracking-tighter leading-[0.9]",
                    "text-[clamp(2rem,8vw,6rem)]",
                    "text-foreground"
                )}
            >
                {title}
            </motion.h2>
        </div>
    );
}
