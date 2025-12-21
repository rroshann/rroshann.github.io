"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/components/ui/cn";

/**
 * Floating scroll-to-top button that appears after scrolling down.
 * Kinetic Brutalist design with sharp corners and accent hover.
 */
export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className={cn(
                        "fixed bottom-8 right-8 z-50",
                        "w-12 h-12 flex items-center justify-center",
                        "border-2 border-[var(--border)] bg-[var(--background)]",
                        "text-[var(--foreground)] text-xl font-bold",
                        "hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)]",
                        "transition-all duration-300",
                        "rounded-none"
                    )}
                    aria-label="Scroll to top"
                >
                    ↑
                </motion.button>
            )}
        </AnimatePresence>
    );
}
