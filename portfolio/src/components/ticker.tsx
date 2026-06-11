const ITEMS = [
    "Machine Learning",
    "Generative AI",
    "Data Engineering",
    "Computer Vision",
    "LLM Applications",
    "MLOps",
    "Statistical Modeling",
    "Production Pipelines",
];

/**
 * Full-width scrolling ticker strip — the "kinetic" in Kinetic Brutalist.
 * Pure CSS animation (no JS); items are duplicated for a seamless loop.
 * Decorative only, hidden from assistive tech; freezes under reduced motion.
 */
export default function Ticker() {
    const row = [...ITEMS, ...ITEMS];

    return (
        <div
            aria-hidden="true"
            className="relative overflow-hidden border-y-2 border-[var(--border)] bg-black py-4 select-none"
        >
            <div className="animate-ticker flex w-max items-center whitespace-nowrap">
                {row.map((item, i) => (
                    <span
                        key={i}
                        className="flex items-center text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter"
                    >
                        <span
                            className={
                                i % 2 === 0
                                    ? "text-[var(--accent)]"
                                    : "text-[var(--foreground)]/70"
                            }
                        >
                            {item}
                        </span>
                        <span className="mx-6 text-xl text-[var(--border)]">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
