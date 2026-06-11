"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Module-level (per page load) so a direct visit always starts fresh.
// Unlike sessionStorage, this cannot go stale: it counts client-side
// navigations in the current JS context only, so a count > 1 guarantees
// a real in-app history entry exists behind us.
let navCount = 0;
let lastPath: string | null = null;
let suppressNext = false;

/** True once the visitor has client-navigated between pages in this page load. */
export function hasInAppHistory(): boolean {
    return navCount > 1;
}

/**
 * Skip counting the next pathname change. router.replace() swaps the
 * current history entry instead of pushing one, so counting it would
 * make hasInAppHistory() report an in-app entry that doesn't exist.
 */
export function suppressNextNavigation(): void {
    suppressNext = true;
}

/**
 * Counts in-app page navigations so BackButton can tell a visitor who
 * browsed here from the site (history.back() is safe and restores their
 * scroll position) from one who landed directly via URL. Renders nothing.
 */
export default function NavigationTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Idempotent under React StrictMode's double effect invocation.
        if (pathname !== lastPath) {
            lastPath = pathname;
            if (suppressNext) {
                suppressNext = false;
            } else {
                navCount += 1;
            }
        }
    }, [pathname]);

    return null;
}
