import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Economic Freedom & Global Well-Being | Roshan Siddartha Sivakumar",
    description:
        "EDA project analyzing how economic freedom correlates with happiness, healthcare, and food affordability across 160+ countries using PCA and K-means clustering.",
};

export default function EconomicFreedomPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Economic Freedom & Global Well-Being
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    How Does Freedom Shape the Way People Live?
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    PCA · K-Means Clustering · Correlation Analysis · GeoPandas
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    Team Lead | DS-5100 Exploratory Data Analysis | Vanderbilt University
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Explored global datasets from the Heritage Foundation, Human Freedom
                        Index, and World Happiness Report to uncover how economic and
                        personal freedoms relate to <strong className="text-[var(--foreground)]">life satisfaction, GDP, healthcare
                            spending, and food affordability</strong> across 160+ countries. Revealed that
                        while economic freedom correlates with positive outcomes, the
                        relationships are nuanced and often influenced by country-specific factors.
                    </p>
                </div>

                {/* Key Stats Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Analysis Scale
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">160+</p>
                            <p className="text-sm text-[var(--foreground)]/70">Countries analyzed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">5</p>
                            <p className="text-sm text-[var(--foreground)]/70">Freedom dimensions</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">4</p>
                            <p className="text-sm text-[var(--foreground)]/70">Global clusters</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">&gt;80%</p>
                            <p className="text-sm text-[var(--foreground)]/70">Variance explained (PCA)</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Research Questions */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Research Questions
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>How do economic freedom dimensions correlate with each other?</li>
                            <li>How do countries cluster by freedom profiles?</li>
                            <li>Does economic freedom translate to well-being?</li>
                            <li>What are the global trends over time (2015-2022)?</li>
                        </ul>
                    </div>

                    {/* Country Clusters */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            4 Global Country Clusters (K-Means)
                        </h3>
                        <div className="space-y-3">
                            <div className="border border-[var(--accent)] p-4">
                                <p className="font-semibold text-[var(--accent)] mb-1">High-Performing Economies</p>
                                <p className="text-sm text-[var(--foreground)]/70">Singapore, Switzerland, New Zealand - Consistent high scores</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Emerging Market Economies</p>
                                <p className="text-sm text-[var(--foreground)]/70">India, Mexico, Chile, Romania - Between high-performing and state-controlled</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">State-Controlled Developing</p>
                                <p className="text-sm text-[var(--foreground)]/70">China, Russia - Moderate performance, weak legal systems</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Low-Freedom & Fragile</p>
                                <p className="text-sm text-[var(--foreground)]/70">Venezuela, Iran, Zimbabwe - Challenges across all dimensions</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Findings */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Key Findings
                        </h3>
                        <ul className="space-y-3 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Trade freedom (0.879) and regulation (0.876)</strong> show strongest correlation with overall economic freedom
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Government size (0.252)</strong> has surprisingly weak relationship with economic freedom
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Economic freedom correlates with happiness</strong>, but relationship strengthens above EFI score of 6.0
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Healthcare spending is decoupled</strong> from economic freedom (US: 18% GDP, Singapore: 6% GDP)
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Food affordability shows strongest relationship</strong> with economic freedom
                            </li>
                        </ul>
                    </div>

                    {/* Surprising Finding */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Surprising Finding: Universal Decline (2015-2022)
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Economic freedom declined across nearly all countries, including top
                            performers like Hong Kong, New Zealand, and the United States.
                            Strong institutions create resilience, while weak institutions lead
                            to rapid deterioration.
                        </p>
                    </div>

                    {/* Data Sources */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Data Sources
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                            {[
                                "Fraser Institute Economic Freedom Index",
                                "World Happiness Report",
                                "World Bank GDP Data",
                                "Our World in Data (Healthcare)",
                                "Our World in Data (Food Affordability)",
                            ].map((source) => (
                                <span
                                    key={source}
                                    className="px-3 py-2 border border-[var(--border)] text-[var(--foreground)]/70"
                                >
                                    {source}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Python",
                                "Pandas",
                                "Scikit-learn",
                                "PCA",
                                "K-Means",
                                "Matplotlib",
                                "Seaborn",
                                "GeoPandas",
                                "Plotly",
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

                    {/* Policy Insight */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Policy Insight
                        </h3>
                        <blockquote className="text-[var(--foreground)]/70 italic border-l-0 pl-0">
                            &ldquo;Maintaining economic freedom alone may not be sufficient for optimal
                            societal outcomes. Countries must balance market freedoms with
                            targeted policies that address specific societal needs.&rdquo;
                        </blockquote>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="https://github.com/rroshann/EDA_eco_freedom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        View on GitHub
                    </Link>
                    <BackButton />
                </div>
            </div>
        </section>
    );
}
