import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nissan Cost Optimization | Roshan Siddartha Sivakumar",
    description:
        "Consulting project with Nissan North America identifying cost-saving opportunities in supply chain logistics and packaging using Tableau dashboards.",
};

export default function NissanProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-[var(--foreground)]/50 hover:text-[var(--accent)] transition-colors mb-8"
                >
                    ← Back to Projects
                </Link>

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    🚗 Operational Cost Optimization with Nissan
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    Logistics Analytics • Tableau Dashboards • Strategy Consulting
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        I led a team-based consulting project in collaboration with Nissan
                        North America, focused on identifying cost-saving opportunities in
                        their supply chain logistics and packaging workflows. The engagement
                        was part of Vanderbilt&apos;s DSI Capstone experience, involving
                        direct interaction with Nissan&apos;s data and leadership teams.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Problem Discovery */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🔍 Problem Discovery
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            Nissan wanted to evaluate inefficiencies in how parts were
                            packaged and transported. We worked closely with supply chain
                            managers and engineers to understand the process end-to-end,
                            identifying three key areas for potential optimization:
                            repackaging rates, cost-per-shipment, and geographic distribution
                            of parts.
                        </p>
                    </div>

                    {/* Dashboard-Driven Insights */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            📊 Dashboard-Driven Insights
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I designed and implemented a suite of Tableau dashboards that
                            visualized monthly logistics data and warehouse performance across
                            the U.S. These tools enabled Nissan teams to quickly identify
                            high-cost shipping lanes, underutilized facilities, and packaging
                            inconsistencies.
                        </p>
                    </div>

                    {/* Collaboration */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🤝 Collaboration & Delivery
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            Our team held regular check-ins with Nissan stakeholders to
                            validate assumptions and refine deliverables. The final
                            presentation was delivered to a panel of executives including
                            Nissan&apos;s CFO, who appreciated the clarity and actionability
                            of our findings.
                        </p>
                    </div>

                    {/* Contributions */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            💡 What I Contributed
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                📦 Led data wrangling and preprocessing of multi-source
                                logistics data
                            </li>
                            <li>
                                📈 Built dynamic visualizations to track cost drivers and
                                repackaging trends
                            </li>
                            <li>
                                🗣 Represented the team in presenting results to Nissan&apos;s
                                executive leadership
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🛠 Tools & Technologies
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Tableau • Excel • Python (Pandas) • Logistics data modeling •
                            Stakeholder engagement • Strategic reporting
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <span className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--muted)] text-[var(--foreground)]/50 rounded-none text-sm font-medium uppercase tracking-[0.1em] cursor-not-allowed">
                        🔒 Protected by NDA
                    </span>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
