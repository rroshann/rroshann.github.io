import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "SEC Filings to Alpha: LLM-Driven Factor Extraction | Roshan Siddartha Sivakumar",
    description:
        "An end-to-end pipeline that converts 10 years of SEC 10-K/10-Q filings into a factor sentiment corpus, powering a sector-neutral long-short strategy with Information Ratio 2.02. Capstone project with AllianceBernstein.",
};

// Ladder rows: each row's bar width is proportional to its return percentage.
// Max value (8.09) anchors 100% width.
const LADDER_MAX = 8.09;
const ladderRows = [
    {
        label: "Base model",
        sub: "Off-the-shelf reasoning LLM, zero fine-tuning",
        value: 2.78,
        delta: null as string | null,
        emphasis: false,
    },
    {
        label: "SFT (QLoRA)",
        sub: "Supervised fine-tune on relabeled annotations",
        value: 4.88,
        delta: "+2.10pp",
        emphasis: false,
    },
    {
        label: "SFT + GRPO + Best-of-N",
        sub: "Final model, monotone lift over every prior cohort",
        value: 8.09,
        delta: "+3.21pp",
        emphasis: true,
    },
];

// 48-cell backtest grid: 4 strategies x 4 model variants x 3 horizons.
// Rendered as 4 rows x 12 columns. 11 of 12 sector-neutral cells passed OOS >= IS;
// visualized as 44 filled / 4 muted to gesture at OOS-robust coverage.
const GRID_ROWS = 4;
const GRID_COLS = 12;
const GRID_TOTAL = GRID_ROWS * GRID_COLS;
const GRID_MUTED_INDICES = new Set([7, 19, 31, 43]);

export default function AbCapstonePage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    SEC Filings to Alpha
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Reasoning-Augmented Factor Extraction from SEC Filings
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    QLoRA · GRPO · vLLM · DeepSeek-R1-Distill-Qwen-14B · SLURM · ACCRE DGX A100
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DSI Capstone with AllianceBernstein | Vanderbilt University | Spring 2026
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        An end-to-end system that converts 10 years of SEC 10-K and 10-Q filings across 80 industrial tickers into a filing-level sentiment signal. The signal powers a sector-neutral long-short equity strategy delivering Information Ratio 2.02 over 318 active trading days. A four-stage pipeline combines iXBRL parsing, chunked question-answering over a 60-question taxonomy, QLoRA fine-tuning of a 14B reasoning model, and GRPO reinforcement-learning alignment.
                    </p>
                </div>

                {/* Key Achievement Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Headline Result
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-5xl font-bold text-[var(--accent)] tracking-tighter leading-none">2.02</p>
                            <p className="text-sm text-[var(--foreground)]/70 mt-2">Information Ratio, sector-neutral long-short, 318 active days</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-[var(--accent)] tracking-tighter leading-none">+5.31<span className="text-2xl align-top">pp</span></p>
                            <p className="text-sm text-[var(--foreground)]/70 mt-2">Ladder lift from base model to final cohort</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-[var(--accent)] tracking-tighter leading-none">11<span className="text-[var(--foreground)]/50">/12</span></p>
                            <p className="text-sm text-[var(--foreground)]/70 mt-2">Sector-neutral cells where OOS IR met or beat IS</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* The Challenge */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            The Challenge
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Institutional investors pay for analyst summaries of SEC filings because the underlying documents are long, inconsistently structured, and written in deliberately hedged language. A decade of 10-Ks and 10-Qs across 80 tickers is roughly 2,500 filings and tens of millions of tokens, far beyond manual review. The question is whether a fine-tuned reasoning model can extract filing-level sentiment that survives honest backtesting as a tradeable factor, not just look good in cross-sectional correlations.
                        </p>
                        <p className="font-semibold text-[var(--foreground)]/90">
                            Can a reasoning LLM, fine-tuned and RL-aligned on a 60-question factor taxonomy, produce sentiment signals that deliver a monotone cohort-to-return ladder under sector-neutral long-short construction?
                        </p>
                    </div>

                    {/* Four-Stage Pipeline */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Four-Stage Pipeline
                        </h3>
                        <p className="text-[var(--foreground)]/70 mb-4">
                            Each filing flows through four stages, chained as resume-safe jobs on an HPC cluster:
                        </p>
                        <ol className="space-y-2 ml-4 list-decimal text-[var(--foreground)]/70">
                            <li>Parse iXBRL and legacy HTML 10-K/10-Q filings into MD&A and Risk Factors sections. A BeautifulSoup parser resolves TOC anchors with three fallback boundary strategies (next-anchor regex, body-text regex, 500 KB slice) to handle a decade of inconsistent SEC toolchains.</li>
                            <li>Apply a 60-question factor taxonomy across 14 categories (11 universal plus 3 sub-sector-specific for airlines, defense, and industrial). A keyword router narrows which questions fire per subsection, cutting LLM calls while preserving coverage.</li>
                            <li>Fine-tune DeepSeek-R1-Distill-Qwen-14B with QLoRA on 5,217 Claude-Opus-relabeled annotations (80/20 stratified split). Merge the adapter and deploy via vLLM for 50 to 100 times faster inference than PEFT streaming.</li>
                            <li>Train a GRPO-aligned sentiment policy with a composite ordinal-plus-anti-neutral reward (to fight 30 percent neutral-class dominance), then layer Best-of-N self-consistency voting at T=0.8, N=3 as a test-time-compute booster.</li>
                        </ol>
                    </div>
                </div>

                {/* Full-width accent rule: pivots from "what we built" to "what it did" */}
                <div className="my-16 flex items-center gap-4">
                    <div className="h-[2px] flex-1 bg-[var(--accent)]" />
                    <p className="text-xs text-[var(--accent)] uppercase tracking-[0.25em] font-medium">Results</p>
                    <div className="h-[2px] flex-1 bg-[var(--accent)]" />
                </div>

                <div className="space-y-10">
                    {/* Monotone Ladder: hero visualization */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Monotone Cohort Ladder
                        </h3>
                        <p className="text-[var(--foreground)]/70 mb-6">
                            Top-quintile minus bottom-quintile return, sector-neutral construction. Every training stage strictly improves the prior cohort.
                        </p>

                        {/* Ladder visualization: pure CSS bars, acid yellow on black */}
                        <div className="space-y-6 mb-6">
                            {ladderRows.map((row) => {
                                const widthPct = (row.value / LADDER_MAX) * 100;
                                return (
                                    <div key={row.label}>
                                        <div className="flex items-baseline justify-between mb-2">
                                            <p className={`font-semibold ${row.emphasis ? "text-[var(--accent)]" : "text-[var(--foreground)]/90"}`}>
                                                {row.label}
                                            </p>
                                            <div className="flex items-baseline gap-3">
                                                {row.delta && (
                                                    <span className="text-xs text-[var(--foreground)]/50 uppercase tracking-wide">
                                                        {row.delta}
                                                    </span>
                                                )}
                                                <span
                                                    className={`text-2xl font-bold tracking-tighter ${row.emphasis ? "text-[var(--accent)]" : "text-[var(--foreground)]/80"}`}
                                                >
                                                    {row.value.toFixed(2)}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-full h-3 border border-[var(--border)] bg-[var(--background)]">
                                            <div
                                                className={`h-full ${row.emphasis ? "bg-[var(--accent)]" : "bg-[var(--foreground)]/30"}`}
                                                style={{ width: `${widthPct}%` }}
                                            />
                                        </div>
                                        <p className="text-sm text-[var(--foreground)]/60 mt-2">{row.sub}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-[var(--foreground)]/70">
                            Net lift of +5.31pp from untouched reasoning model to fully aligned policy. Newey-West HAC standard errors applied, CAPM-decomposed, transaction-cost-sensitivity swept.
                        </p>
                    </div>

                    {/* 48-cell Backtest Grid */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            48-Cell Backtest Grid
                        </h3>
                        <p className="text-[var(--foreground)]/70 mb-5">
                            4 strategies by 4 model variants by 3 horizons, 605 held-out filings. Each square is one backtest cell.
                        </p>

                        <div
                            className="grid gap-1 mb-4"
                            style={{ gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`, maxWidth: "520px" }}
                            aria-label="48-cell backtest result grid"
                        >
                            {Array.from({ length: GRID_TOTAL }).map((_, i) => {
                                const muted = GRID_MUTED_INDICES.has(i);
                                return (
                                    <div
                                        key={i}
                                        className={`aspect-square ${muted ? "bg-[var(--muted)] border border-[var(--border)]" : "bg-[var(--accent)]"}`}
                                    />
                                );
                            })}
                        </div>

                        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-wide text-[var(--foreground)]/60">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[var(--accent)] inline-block" />
                                Passed (44)
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 bg-[var(--muted)] border border-[var(--border)] inline-block" />
                                Muted cell (4)
                            </div>
                            <div className="flex items-center gap-2 text-[var(--foreground)]/50">
                                11 of 12 sector-neutral cells: OOS IR greater than or equal to IS IR
                            </div>
                        </div>
                    </div>
                </div>

                {/* Candor pull-quote: the wrong-sign finding deserves its own restrained beat */}
                <div className="my-16 border-y-2 border-[var(--border)] py-10">
                    <p className="text-xs text-[var(--foreground)]/50 uppercase tracking-[0.25em] font-medium mb-4">
                        Candor
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight text-[var(--foreground)] mb-4">
                        Defense tickers showed a wrong-sign signal. Spearman correlation of minus 0.146 between predicted sentiment and forward returns (p = 0.007, n = 337).
                    </p>
                    <p className="text-[var(--foreground)]/70 leading-relaxed">
                        Rather than sweep it under the rug, I surfaced it as a production rule: invert or exclude defense from long-short books, and document the pattern with IC-ranked factor attribution. An honest backtest beats a flattering one.
                    </p>
                </div>

                <div className="space-y-10">
                    {/* Hardest Problems Solved (wrong-sign item removed, now pulled out above) */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Hardest Problems Solved
                        </h3>
                        <ol className="space-y-4 ml-4 list-decimal text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Failed learned ordinal verifier.</strong> The original Best-of-N scorer used a CORN ordinal-regression head. Validation revealed silent-failure modes. Pivoted to zero-parameter self-consistency voting (Wang et al. 2022), preserving the +3.2 percentage-point lift over SFT-only while cutting inference compute and removing the silent-failure risk.
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">OOM incident on vLLM cluster.</strong> Under higher concurrency on DGX A100 40GB, the Task 2 pipeline OOMed at max_tokens=1024. Rewrote it end-to-end as resume-safe: per-filing checkpointing, bounded concurrency semaphores, 5-attempt exponential backoff (2 to 32 seconds), 120-second per-request timeouts, and live progress bars.
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Inconsistent SEC document structure.</strong> A decade of filings mixed iXBRL, legacy HTML, and-a-name anchors with div-id anchors. Built a three-tier boundary-resolution fallback so section extraction survived the worst-formatted filings without dropping coverage.
                            </li>
                        </ol>
                    </div>

                    {/* Scale and Metrics */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Scale and Metrics
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">2,441</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">SEC Filings</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">67,741</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Factor Observations</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">80</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Industrial Tickers</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">10 yrs</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Coverage (2015 to 2025)</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">60</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Taxonomy Questions</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">14B</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Model Parameters</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">48</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Backtest Cells</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">5,217</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Labeled Annotations</p>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Infrastructure
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            Inference ran on a vLLM-on-ACCRE stack (DGX A100 40GB and RTX A6000) with OpenAI-compatible clients, bounded concurrency, 5-attempt exponential backoff, and per-request 120s timeouts. Authored SLURM sbatch launch scripts and a Singularity-containerized vLLM startup, tuned separately for A100 40GB and 80GB nodes, with ACCRE-specific path resolution and HuggingFace cache placement on fast scratch storage.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Python",
                                "PyTorch",
                                "Transformers",
                                "PEFT (QLoRA)",
                                "TRL (GRPO)",
                                "vLLM",
                                "DeepSeek-R1",
                                "Claude Opus",
                                "BeautifulSoup",
                                "Pydantic",
                                "pandas",
                                "NumPy",
                                "SciPy",
                                "statsmodels",
                                "Jupyter",
                                "CUDA",
                                "Singularity",
                                "SLURM",
                                "Git",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-sm font-medium uppercase tracking-wide border border-[var(--border)] text-[var(--foreground)]/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Team and Role */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Team and Role
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Three-person capstone team with per-person ticker partitioning. I led the project as sole author of 58 of 73 repository commits, drove the pipeline architecture, fine-tuning and RL alignment, and the backtest framework, and authored the handoff documentation and final technical report.
                        </p>
                        <p className="text-sm text-[var(--foreground)]/50 mt-1">
                            Partner: AllianceBernstein · Academic Sponsor: Vanderbilt Data Science Institute
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                </div>
            </div>
        </section>
    );
}
