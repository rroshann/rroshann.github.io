"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/components/ui/cn";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#resume", label: "Resume" },
] as const;

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-[var(--border)]">
            {/* Using target website's exact structure with proper centering */}
            <nav className="relative flex h-20 items-center justify-between px-4 md:h-24 md:px-8">

                {/* Logo: font-bold text-xl uppercase tracking-tighter md:text-2xl */}
                <Link
                    href="/"
                    className="font-bold text-xl uppercase tracking-tighter md:text-2xl"
                >
                    Roshan Sivakumar
                </Link>

                {/* Desktop Links: Absolutely centered horizontally */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden gap-8 md:flex items-center">
                    {NAV_LINKS.map((link) =>
                        link.href.startsWith("#") ? (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-medium text-sm uppercase tracking-wide transition-colors hover:text-[#DFE104] text-foreground"
                            >
                                {link.label}
                            </a>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-medium text-sm uppercase tracking-wide transition-colors hover:text-[#DFE104] text-foreground"
                            >
                                {link.label}
                            </Link>
                        )
                    )}
                </div>

                {/* CTA Button & Mobile Toggle Wrapper */}
                <div className="flex items-center gap-4">
                    {/* CTA Button 
             Classes: relative inline-flex items-center justify-center overflow-hidden font-bold uppercase tracking-tighter transition-all disabled:pointer-events-none disabled:opacity-50 bg-[#DFE104] text-black hover:scale-105 active:scale-95 h-10 px-4 text-sm
          */}
                    <a
                        href="/#contact"
                        className={cn(
                            "relative inline-flex items-center justify-center overflow-hidden h-10 px-4 text-sm",
                            "font-bold uppercase tracking-tighter",
                            "transition-all hover:scale-105 active:scale-95",
                            "bg-[#DFE104] text-black",
                            "hidden md:inline-flex" // Hide on mobile to prioritize menu
                        )}
                    >
                        <span className="relative z-10 flex items-center gap-2">Contact</span>
                    </a>

                    {/* Mobile Menu Button - Kept compatible with design */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 w-6 bg-foreground"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block h-0.5 w-6 bg-foreground"
                        />
                        <motion.span
                            animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block h-0.5 w-6 bg-foreground"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Preserved Logic */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t border-[var(--border)] bg-black"
                    >
                        <div className="flex flex-col px-4 py-6 gap-6 items-center">
                            {NAV_LINKS.map((link) =>
                                link.href.startsWith("#") ? (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-medium text-sm uppercase tracking-wide transition-colors hover:text-[#DFE104] text-foreground"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-medium text-sm uppercase tracking-wide transition-colors hover:text-[#DFE104] text-foreground"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <a
                                href="/#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative inline-flex items-center justify-center overflow-hidden h-10 px-8 text-sm font-bold uppercase tracking-tighter transition-all bg-[#DFE104] text-black w-full"
                            >
                                <span className="relative z-10 flex items-center gap-2">Contact</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
