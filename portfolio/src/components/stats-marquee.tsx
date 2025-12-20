"use client";

import Marquee from "react-fast-marquee";
import { cn } from "@/components/ui/cn";

interface StatItem {
    value: string;
    label: string;
}

const stats: StatItem[] = [
    { value: "3+", label: "YEARS EXPERIENCE" },
    { value: "15+", label: "PROJECTS COMPLETED" },
    { value: "5+", label: "ML MODELS DEPLOYED" },
    { value: "100%", label: "PASSIONATE ABOUT DATA" },
];

/**
 * Kinetic marquee strip component.
 * Displays scrolling stats in a bold yellow strip.
 */
export default function StatsMarquee() {
    return (
        <div className="relative w-full overflow-hidden bg-[var(--accent)] py-4 sm:py-5">
            <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={false}
                className="overflow-hidden"
            >
                {/* Repeat the stats array for seamless loop */}
                {[...stats, ...stats].map((stat, index) => (
                    <div
                        key={index}
                        className={cn(
                            "flex items-center gap-3 sm:gap-4 mx-8 sm:mx-12",
                            "select-none"
                        )}
                    >
                        <span
                            className={cn(
                                "font-display font-black tracking-tighter",
                                "text-3xl sm:text-4xl md:text-5xl",
                                "text-black"
                            )}
                        >
                            {stat.value}
                        </span>
                        <span
                            className={cn(
                                "font-sans font-medium uppercase tracking-wider",
                                "text-xs sm:text-sm",
                                "text-black/70"
                            )}
                        >
                            {stat.label}
                        </span>
                        <span className="text-black/50 mx-4 sm:mx-6">✦</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
