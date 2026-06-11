"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const KEY = "nav-count";

/** True once the visitor has navigated between pages within this tab. */
export function hasInAppHistory(): boolean {
    try {
        return Number(sessionStorage.getItem(KEY) || "0") > 1;
    } catch {
        return false;
    }
}

/**
 * Counts in-app page navigations in sessionStorage so BackButton can tell
 * a visitor who browsed here from the site (history.back() is safe and
 * restores their scroll position) from one who landed directly via URL.
 * Renders nothing.
 */
export default function NavigationTracker() {
    const pathname = usePathname();

    useEffect(() => {
        try {
            const count = Number(sessionStorage.getItem(KEY) || "0") + 1;
            sessionStorage.setItem(KEY, String(count));
        } catch {
            // sessionStorage unavailable (private mode) — BackButton falls back
        }
    }, [pathname]);

    return null;
}
