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
        <Link href={href} className="group block">
            <article
                className={cn(
                    "h-full p-8 border-2 border-[var(--border)] rounded-none",
                    "transition-all duration-300",
                    "hover:bg-[var(--accent)] hover:border-[var(--accent)]",
                    "hover:text-[var(--background)]"
                )}
            >
                {/* Tags Container */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {/* Category Tag */}
                    <span
                        className={cn(
                            "inline-block px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]",
                            "border border-[var(--border)] rounded-none",
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
                                "group-hover:bg-[var(--background)] group-hover:text-[#C3002F] group-hover:border-[var(--background)]",
                                "transition-colors"
                            )}
                        >
                            NISSAN
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-[var(--background)]">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--foreground)]/70 group-hover:text-[var(--background)]/80">
                    {description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] group-hover:text-[var(--background)]">
                    View Project
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        →
                    </span>
                </div>
            </article>
        </Link>
    );
}
