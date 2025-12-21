"use client";

import { useRouter } from "next/navigation";

interface BackButtonProps {
    variant?: "primary" | "secondary" | "link";
    className?: string;
}

export default function BackButton({ variant = "secondary", className = "" }: BackButtonProps) {
    const router = useRouter();

    const baseStyles = variant === "link"
        ? "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors cursor-pointer"
        : "inline-flex items-center gap-2 px-6 py-3 rounded-none text-sm font-medium uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer";

    const variantStyles = variant === "primary"
        ? "bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--foreground)]"
        : variant === "link"
            ? "text-[var(--foreground)]/50 hover:text-[var(--accent)]"
            : "border-2 border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]";

    return (
        <button
            onClick={() => router.back()}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            ← Back to Projects
        </button>
    );
}

