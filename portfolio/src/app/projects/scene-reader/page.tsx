import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Scene Reader: Vision AI for Accessibility | Roshan Siddartha Sivakumar",
    description:
        "Systematic evaluation of 9 vision AI approaches for real-time accessibility, achieving sub-2-second latency with hybrid YOLO + LLM architecture.",
};

export default function SceneReaderPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Scene Reader
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Real-Time Visual Accessibility Through Vision-Language Models
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    GPT-4V · YOLOv8 · BLIP-2 · RAG · Chain-of-Thought
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DS-5690 Generative AI | Vanderbilt University | Fall 2025
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Systematically evaluated <strong className="text-[var(--foreground)]">9 different transformer-based vision AI approaches</strong> for
                        providing real-time visual assistance to the 250 million blind and
                        visually impaired individuals worldwide. Identified optimal
                        architectures achieving <strong className="text-[var(--foreground)]">sub-2-second latency</strong> for
                        practical accessibility applications.
                    </p>
                </div>

                {/* Key Achievement Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Key Achievement
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">0.54s</p>
                            <p className="text-sm text-[var(--foreground)]/70">Mean latency (fastest approach)</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">3x</p>
                            <p className="text-sm text-[var(--foreground)]/70">Speedup vs pure VLM approaches</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">$0.005</p>
                            <p className="text-sm text-[var(--foreground)]/70">Cost per query (scalable)</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* The Problem */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            The Accessibility Challenge
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Over 7 million blind and visually impaired individuals in the
                            United States face a fundamental barrier: they cannot access
                            visual information that sighted individuals take for granted.
                            Current accessibility tools are either too slow, too expensive,
                            or lack the contextual understanding necessary for real-time
                            assistance.
                        </p>
                        <p className="font-semibold text-[var(--foreground)]/90">
                            Research Question: Which vision AI architecture achieves the
                            optimal balance of latency, accuracy, and cost for real-time
                            accessibility applications?
                        </p>
                    </div>

                    {/* The 9 Approaches */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            9 Approaches Tested
                        </h3>
                        <div className="space-y-4 text-[var(--foreground)]/70">
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">Baseline Approaches</p>
                                <ul className="space-y-1 ml-4">
                                    <li>Approach 1: Pure VLM (GPT-4V, Claude, Gemini)</li>
                                    <li>Approach 2: Hybrid (YOLO detection + LLM generation)</li>
                                    <li>Approach 3: Specialized (YOLO + OCR + Depth estimation)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">Optimized Variants</p>
                                <ul className="space-y-1 ml-4">
                                    <li><strong>Approach 2.5:</strong> Hybrid + caching + GPT-3.5 (fastest: 0.54s)</li>
                                    <li><strong>Approach 3.5:</strong> Specialized + complexity routing (0.93s)</li>
                                    <li><strong>Approach 1.5:</strong> Progressive disclosure (BLIP-2 + GPT-4V)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">Alternative Architectures</p>
                                <ul className="space-y-1 ml-4">
                                    <li>Approach 4: Local BLIP-2 (zero API cost, offline)</li>
                                    <li>Approach 6: RAG with game knowledge base</li>
                                    <li>Approach 7: Chain-of-Thought for safety detection</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Results: Top 3 Approaches
                        </h3>
                        <p className="text-[var(--foreground)]/70 mb-4">
                            Three approaches achieved sub-2-second latency (our threshold for practical usability):
                        </p>
                        <div className="space-y-4">
                            <div className="border border-[var(--accent)] p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="font-semibold text-[var(--foreground)]">1st: Approach 2.5 (Hybrid Optimized)</p>
                                    <span className="text-[var(--accent)] font-bold">0.54s</span>
                                </div>
                                <p className="text-sm text-[var(--foreground)]/70">YOLO + GPT-3.5-turbo + LRU Cache</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="font-semibold text-[var(--foreground)]">2nd: Approach 3.5 (Specialized)</p>
                                    <span className="text-[var(--foreground)]/80 font-bold">0.93s</span>
                                </div>
                                <p className="text-sm text-[var(--foreground)]/70">Multi-model routing with OCR + depth estimation</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="font-semibold text-[var(--foreground)]">3rd: Approach 1.5 (Progressive)</p>
                                    <span className="text-[var(--foreground)]/80 font-bold">1.62s</span>
                                </div>
                                <p className="text-sm text-[var(--foreground)]/70">BLIP-2 quick preview + GPT-4V detailed (best quality)</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Insights */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Key Insights
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Architecture matters more than model size:</strong> GPT-3.5 + YOLO beats GPT-4V alone
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Caching is transformative:</strong> 15x speedup on cache hits (40-60% hit rate)
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Hybrid pipelines outperform pure VLMs:</strong> 3x speedup with maintained quality
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">All differences statistically significant:</strong> p &lt; 0.001 across comparisons
                            </li>
                        </ul>
                    </div>

                    {/* Scale of Testing */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Scale of Testing
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">9</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Approaches</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">564+</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">API Calls</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">42</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Test Images</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">4</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Scenarios</p>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--foreground)]/50 mt-4">
                            Scenarios: Gaming (12), Indoor Navigation (10), Outdoor Navigation (10), Text Reading (10)
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "GPT-4V",
                                "GPT-3.5-turbo",
                                "Claude",
                                "Gemini",
                                "YOLOv8",
                                "BLIP-2",
                                "EasyOCR",
                                "MiDaS",
                                "Python",
                                "PyTorch",
                                "RAG",
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

                    {/* Team */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Team
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            <strong className="text-[var(--foreground)]">Roshan Sivakumar</strong> & Dhesel Khando
                        </p>
                        <p className="text-sm text-[var(--foreground)]/50 mt-1">
                            Instructor: Prof. Jesse Spencer-Smith
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                    <Link
                        href="https://github.com/rroshann/scene_reader"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        View on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}
