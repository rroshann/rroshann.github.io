import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Nissan Parts Packaging Optimization | Roshan Siddartha Sivakumar",
    description:
        "Led a consulting project with Nissan North America to identify cost-saving opportunities in supply chain logistics and packaging, presenting to the CFO.",
};

export default function NissanProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Nissan Parts Packaging Optimization
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    Tableau Dashboards · Data Engineering · Supply Chain Analytics
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    Team Lead | Data Science in Teamwork Practice × Nissan North America | Jan 2025 - Apr 2025
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Led a team-based consulting project in collaboration with Nissan
                        North America as part of a graduate course in Data Science in
                        Teamwork Practice. The project focused on identifying cost-saving
                        opportunities in their supply chain logistics and packaging
                        workflows, involving direct interaction with Nissan&apos;s data and
                        leadership teams.
                    </p>
                    <p>
                        The final presentation was delivered to a panel of executives
                        including Nissan&apos;s CFO, with insights projected to enable
                        approximately 20% cost savings through standardization.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* The Problem */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            The Problem
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Nissan wanted to evaluate inefficiencies in how parts were
                            packaged and transported across their North American supply chain.
                            Working closely with supply chain managers and engineers, we
                            identified three key areas for potential optimization:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                    Repackaging Rates
                                </p>
                                <p className="text-sm text-[var(--foreground)]/70">
                                    Quantifying how often parts require repackaging and why
                                </p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                    Cost-per-Shipment
                                </p>
                                <p className="text-sm text-[var(--foreground)]/70">
                                    Analyzing shipping costs across lanes and facilities
                                </p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)]/90 text-sm uppercase tracking-wide mb-2">
                                    Geographic Distribution
                                </p>
                                <p className="text-sm text-[var(--foreground)]/70">
                                    Understanding parts flow and warehouse utilization
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* My Approach */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            My Approach
                        </h3>
                        <div className="space-y-4 text-[var(--foreground)]/70 leading-relaxed">
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-1">
                                    Data Collection & Analysis
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li>
                                        Worked with multi-source logistics data from Nissan&apos;s
                                        supply chain systems
                                    </li>
                                    <li>
                                        Analyzed packaging specifications across product families
                                    </li>
                                    <li>
                                        Identified patterns in highly incomplete datasets requiring
                                        significant data engineering
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-1">
                                    Stakeholder Engagement
                                </p>
                                <ul className="space-y-2 ml-4">
                                    <li>
                                        Held regular check-ins with Nissan stakeholders to validate
                                        assumptions
                                    </li>
                                    <li>
                                        Collaborated with supply chain managers and engineers to
                                        understand end-to-end processes
                                    </li>
                                    <li>
                                        Iterated on deliverables based on executive feedback
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Key Deliverables */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Key Deliverables
                        </h3>
                        <div className="space-y-6 text-[var(--foreground)]/70 leading-relaxed">
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">
                                    1. Interactive Tableau Dashboards
                                </p>
                                <p className="mb-2">
                                    Designed and implemented a suite of dashboards that visualized:
                                </p>
                                <ul className="space-y-1 ml-4">
                                    <li>Monthly logistics data across the U.S. warehouse network</li>
                                    <li>High-cost shipping lanes requiring optimization</li>
                                    <li>Underutilized facilities and capacity opportunities</li>
                                    <li>Packaging inconsistencies across product families</li>
                                    <li>Repackaging trends over time</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">
                                    2. Data Engineering Pipeline
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                                    <div className="border border-[var(--border)] p-4">
                                        <p className="font-semibold text-[var(--foreground)]/90 text-sm mb-1">
                                            Data Cleaning
                                        </p>
                                        <p className="text-sm">
                                            Python (Pandas) for handling messy datasets
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] p-4">
                                        <p className="font-semibold text-[var(--foreground)]/90 text-sm mb-1">
                                            Part Grouping
                                        </p>
                                        <p className="text-sm">
                                            Custom algorithms for product classification
                                        </p>
                                    </div>
                                    <div className="border border-[var(--border)] p-4">
                                        <p className="font-semibold text-[var(--foreground)]/90 text-sm mb-1">
                                            Imputation
                                        </p>
                                        <p className="text-sm">
                                            Statistical methods for missing values
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">
                                    3. Strategic Recommendations
                                </p>
                                <p>
                                    Delivered actionable insights projected to enable ~20% cost
                                    savings through improved packaging standardization, optimized
                                    shipping lane selection, and better warehouse utilization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Impact */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Impact
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--accent)] text-lg mb-1">
                                    ~20%
                                </p>
                                <p className="text-sm text-[var(--foreground)]/70">
                                    Projected cost savings through standardization
                                </p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--accent)] text-lg mb-1">
                                    CFO Presentation
                                </p>
                                <p className="text-sm text-[var(--foreground)]/70">
                                    Delivered to Nissan NA executive panel
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* What I Contributed */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            What I Contributed
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                Led data wrangling and preprocessing of multi-source logistics data
                            </li>
                            <li>
                                Built dynamic Tableau dashboards to track cost drivers and
                                repackaging trends
                            </li>
                            <li>
                                Developed part grouping logic and imputation strategies for
                                incomplete data
                            </li>
                            <li>
                                Represented the team in presenting results to Nissan&apos;s
                                executive leadership
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
                                "Tableau",
                                "Python",
                                "Pandas",
                                "Excel",
                                "Logistics Modeling",
                                "Statistical Analysis",
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

                    {/* Recognition */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Recognition
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Received <strong className="text-[var(--foreground)]">Vanderbilt Certificate of Recognition</strong> for
                            the Nissan Packaging Optimization project (Apr 2025).
                        </p>
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
