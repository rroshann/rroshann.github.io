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

function Strip() {
    return (
        <div className="flex items-center whitespace-nowrap">
            {ITEMS.map((item, i) => (
                <span
                    key={item}
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
    );
}

/**
 * Full-width scrolling ticker strip — the "kinetic" in Kinetic Brutalist.
 * Pure CSS animation (no JS); the strip is rendered twice so the
 * translateX(-50%) loop point always lands exactly one strip-width in,
 * keeping the seam invisible. Decorative only, hidden from assistive
 * tech; freezes under reduced motion.
 */
export default function Ticker() {
    return (
        <div
            aria-hidden="true"
            className="relative overflow-hidden border-y-2 border-[var(--border)] bg-black py-4 select-none"
        >
            <div className="animate-ticker flex w-max items-center">
                <Strip />
                <Strip />
            </div>
        </div>
    );
}
