"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/components/ui/cn";

interface LegacyRedirectProps {
    /** Destination path the legacy URL should resolve to. */
    to: string;
}

/**
 * Client-side redirect for legacy routes. Static export cannot serve
 * server redirects, so the stub page replaces itself on load and shows
 * a fallback link in case JavaScript is disabled.
 */
export default function LegacyRedirect({ to }: LegacyRedirectProps) {
    const router = useRouter();

    useEffect(() => {
        router.replace(to);
    }, [router, to]);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 text-center">
            <p className="text-xl text-[var(--foreground)]/70 mb-8 max-w-md">
                This page has moved.
            </p>
            <Link
                href={to}
                className={cn(
                    "inline-flex items-center gap-3 px-8 py-4",
                    "border-2 border-[var(--border)] rounded-none",
                    "text-sm font-medium uppercase tracking-[0.2em]",
                    "transition-all duration-200",
                    "hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]"
                )}
            >
                Continue →
            </Link>
        </section>
    );
}
