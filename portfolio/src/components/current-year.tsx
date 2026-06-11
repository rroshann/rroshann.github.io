"use client";

/**
 * Renders the current year client-side so the static export doesn't freeze
 * the copyright year at build time. suppressHydrationWarning covers the
 * build-year vs. client-year mismatch.
 */
export default function CurrentYear() {
    return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
