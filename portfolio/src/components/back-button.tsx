"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { hasInAppHistory } from "@/components/navigation-tracker";

interface BackButtonProps {
    variant?: "primary" | "secondary" | "link";
    className?: string;
    /** Fallback destination for direct visitors with no in-app history. */
    href?: string;
    label?: string;
}

export default function BackButton({
    variant = "secondary",
    className = "",
    href = "/#projects",
    label = "← Back to Projects",
}: BackButtonProps) {
    const router = useRouter();

    // Rendered as a real <a href> so crawlers, cmd/ctrl-click, and no-JS
    // visitors get a working link. Plain left-clicks are intercepted:
    // history.back() restores the visitor's previous scroll position;
    // direct visitors (no in-app history) go to the fallback href instead.
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (hasInAppHistory()) {
            router.back();
        } else {
            router.push(href);
        }
    };

    const baseStyles = variant === "link"
        ? "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors cursor-pointer"
        : "inline-flex items-center gap-2 px-6 py-3 rounded-none text-sm font-medium uppercase tracking-[0.1em] transition-all duration-200 cursor-pointer";

    const variantStyles = variant === "primary"
        ? "bg-[var(--accent)] text-[var(--background)] hover:bg-[var(--foreground)]"
        : variant === "link"
            ? "text-[var(--foreground)]/50 hover:text-[var(--accent)]"
            : "border-2 border-[var(--border)] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]";

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`${baseStyles} ${variantStyles} ${className}`}
        >
            {label}
        </Link>
    );
}

