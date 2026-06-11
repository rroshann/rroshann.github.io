"use client";

import { MotionConfig } from "framer-motion";

/**
 * Respects the user's prefers-reduced-motion setting for all Framer Motion
 * animations (transform/layout animations are disabled, opacity preserved).
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
