"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProviderProps {
    children: ReactNode;
}

/**
 * Lenis smooth scroll wrapper for premium scroll feel.
 * Provides buttery-smooth scrolling with lerp physics.
 */
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.2,
                smoothWheel: true,
            }}
        >
            {children as any}
        </ReactLenis>
    );
}
