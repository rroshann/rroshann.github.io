"use client";

import Link from "next/link";
import { cn } from "@/components/ui/cn";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    category?: "data" | "engineering";
    isNissan?: boolean;
}

export default function ProjectCard({
    title,
    description,
    href,
    category = "data",
    isNissan = false,
}: ProjectCardProps) {
    return (
        <Link href={href} className="group block h-full">
            <article
                className={cn(
                    "h-full p-8 border-2 border-[var(--border)] rounded-none",
                    "transition-all duration-200",
                    // Standard Hover Effect for ALL cards (Yellow + Black Text)
                    "hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--background)]"
                )}
            >
                {/* Tags Container */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* Category Tag */}
                    <span
                        className={cn(
                            "inline-block px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
                            "border border-[var(--border)] rounded-none",
                            // Standard hover flip: Border/Text becomes Black
                            "group-hover:border-[var(--background)] group-hover:text-[var(--background)]"
                        )}
                    >
                        {category === "data" ? "Data Science" : "Engineering"}
                    </span>

                    {/* Nissan Badge */}
                    {isNissan && (
                        <span
                            className={cn(
                                "inline-block px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]",
                                "bg-[#C3002F] text-white border border-[#C3002F]",
                                // On hover (Yellow bg), ensure high contrast. 
                                // Standard tags go Black/Black. Let's make this go Black Text / Red Border? 
                                // Or stick to Red/White but ensure it looks good.
                                // Let's auto-invert or simplified:
                                "group-hover:bg-[#C3002F] group-hover:text-white group-hover:border-[#C3002F]",
                                "transition-colors duration-200"
                            )}
                        >
                            NISSAN
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[var(--background)] transition-colors duration-200">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--foreground)]/70 group-hover:text-[var(--background)]/80 transition-colors duration-200">
                    {description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] group-hover:text-[var(--background)] transition-colors duration-200">
                    View Project
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                    </span>
                </div>
            </article>
        </Link>
    );
}
