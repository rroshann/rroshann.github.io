"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/components/ui/cn";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    image?: string;
    category?: "data" | "engineering";
    isNissan?: boolean;
}

export default function ProjectCard({
    title,
    description,
    href,
    image,
    category = "data",
    isNissan = false,
}: ProjectCardProps) {
    return (
        <Link href={href} className="group block h-full">
            <article
                className={cn(
                    "h-full border-2 border-[var(--border)] rounded-none overflow-hidden",
                    "transition-all duration-200",
                    // Standard Hover Effect for ALL cards (Yellow + Black Text)
                    "hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--background)]"
                )}
            >
                {/* Project Image */}
                {image && (
                    <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                    </div>
                )}

                {/* Card Content */}
                <div className="p-8">
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
                </div>
            </article>
        </Link>
    );
}
