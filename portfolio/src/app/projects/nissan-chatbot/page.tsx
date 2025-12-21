import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Nissan Dealer Training Analytics & AI Chatbot | Roshan Siddartha Sivakumar",
    description:
        "Led a capstone project with Nissan North America to diagnose dealer training gaps and prototype a RAG-based AI chatbot, presented to executive leadership.",
};

export default function NissanChatbotPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Nissan Dealer Training Analytics & AI Chatbot
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    RAG Architecture · Amazon QuickSight · Data Analysis · Survey Design
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    Team Lead | Vanderbilt Capstone with Nissan North America | Aug 2025 - Dec 2025
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Led a 3-person team on a capstone project in collaboration with Nissan
                        North America. Our goal was to diagnose how dealers engage with
                        training resources, identify barriers to effective learning, and
                        prototype an AI-powered solution to address their needs.
                    </p>
                    <p>
                        The project culminated in a presentation to Nissan NA executives,
                        with insights informing ongoing development with an external partner.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* The Challenge */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            The Challenge
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            Nissan operates a training platform serving thousands of dealers
                            across North America. Despite significant engagement, there was
                            no systematic analysis of how dealers actually use the platform
                            or where they face friction. The question: how can training
                            become a resource dealers actively want to use, rather than
                            just a compliance requirement?
                        </p>
                    </div>

                    {/* My Approach */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            My Approach
                        </h3>
                        <div className="space-y-4 text-[var(--foreground)]/70 leading-relaxed">
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-1">
                                    Phase 1: Diagnosis
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li>
                                        <strong>Qualitative Research:</strong> Conducted on-site
                                        dealership visits in Nashville and interviewed sales staff
                                        and product specialists
                                    </li>
                                    <li>
                                        <strong>Quantitative Analysis:</strong> Analyzed platform
                                        engagement logs at scale to identify usage patterns across
                                        different job roles
                                    </li>
                                    <li>
                                        <strong>Survey Design:</strong> Deployed a survey directly
                                        on the training platform to gauge dealer preferences and
                                        interest in AI-powered tools
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-1">
                                    Phase 2: Solution Prototyping
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li>
                                        Based on research insights, built a proof-of-concept
                                        RAG-based AI chatbot focused on the 2026 Nissan Leaf
                                    </li>
                                    <li>
                                        Integrated product documentation, web-scraped specifications,
                                        and competitor data into a unified knowledge base
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technical Solution */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technical Solution
                        </h3>
                        <div className="space-y-4 text-[var(--foreground)]/70 leading-relaxed">
                            <p>
                                The chatbot was built using a RAG (Retrieval-Augmented Generation)
                                architecture, which grounds LLM responses in a curated knowledge
                                base rather than relying on the model&apos;s training data alone.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                <div className="border border-[var(--border)] p-4">
                                    <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                        Architecture
                                    </p>
                                    <p className="text-sm">
                                        RAG pipeline with Amazon QuickSight agent capabilities
                                    </p>
                                </div>
                                <div className="border border-[var(--border)] p-4">
                                    <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                        Knowledge Base
                                    </p>
                                    <p className="text-sm">
                                        Official docs, web-scraped specs, competitor data
                                    </p>
                                </div>
                                <div className="border border-[var(--border)] p-4">
                                    <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                        Capabilities
                                    </p>
                                    <p className="text-sm">
                                        Product Q&A, competitor comparisons, mobile-friendly
                                    </p>
                                </div>
                                <div className="border border-[var(--border)] p-4">
                                    <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                        Data Sources
                                    </p>
                                    <p className="text-sm">
                                        Nissan documentation, manufacturer sites, forums
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Impact
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                Presented findings and prototype to Nissan NA executive leadership
                            </li>
                            <li>
                                Research insights are informing ongoing chatbot development with
                                an external partner for potential dealer rollout
                            </li>
                            <li>
                                Demonstrated clear dealer interest in AI-powered product knowledge tools
                            </li>
                        </ul>
                    </div>

                    {/* What I Contributed */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            What I Contributed
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                Led the 3-person team through research, analysis, and prototyping phases
                            </li>
                            <li>
                                Built the RAG-based chatbot prototype using Amazon QuickSight
                            </li>
                            <li>
                                Designed and deployed the dealer interest survey on the training platform
                            </li>
                            <li>
                                Presented findings and demonstrated the prototype to Nissan NA executives
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "RAG Architecture",
                                "Amazon QuickSight",
                                "Python",
                                "Web Scraping",
                                "Data Analysis",
                                "Survey Design",
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
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--muted)] text-[var(--foreground)]/50 rounded-none text-sm font-medium uppercase tracking-[0.1em] cursor-not-allowed">
                        Protected by NDA
                    </span>
                </div>
            </div>
        </section>
    );
}
