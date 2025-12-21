import Link from "next/link";
import { cn } from "@/components/ui/cn";

/**
 * Custom 404 page following Kinetic Brutalist design.
 */
export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 text-center">
            {/* Large 404 */}
            <h1
                className={cn(
                    "font-display font-bold tracking-tighter leading-[0.85]",
                    "text-[clamp(6rem,20vw,16rem)]",
                    "text-[var(--accent)]"
                )}
            >
                404
            </h1>

            {/* Message */}
            <p className="text-xl text-[var(--foreground)]/70 mb-8 max-w-md">
                The page you are looking for does not exist or has been moved.
            </p>

            {/* CTA */}
            <Link
                href="/"
                className={cn(
                    "inline-flex items-center gap-3 px-8 py-4",
                    "border-2 border-[var(--border)] rounded-none",
                    "text-sm font-medium uppercase tracking-[0.2em]",
                    "transition-all duration-300",
                    "hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]"
                )}
            >
                ← Back to Home
            </Link>
        </section>
    );
}
