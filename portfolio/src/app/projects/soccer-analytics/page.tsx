import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "European Soccer Analytics Platform | Roshan Siddartha Sivakumar",
    description:
        "Full-stack soccer analytics platform with MongoDB, Flask, and ML for analyzing 25,000+ European matches with 50% prediction accuracy.",
};

export default function SoccerAnalyticsPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    European Soccer Analytics Platform
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Full-Stack Analytics with MongoDB, Flask, and Machine Learning
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    MongoDB · Flask · Scikit-learn · Gradient Boosting · Docker
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DS-5760 NoSQL for Modern Data Science | Vanderbilt University
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Built a comprehensive soccer analytics platform that transforms a
                        relational SQLite database into a <strong className="text-[var(--foreground)]">MongoDB document store</strong> for
                        analyzing <strong className="text-[var(--foreground)]">25,979 matches</strong> from 11 European leagues.
                        Includes an interactive Flask web interface with 7 analytical queries
                        and a Gradient Boosting model for match outcome prediction.
                    </p>
                </div>

                {/* Key Stats Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Platform Scale
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">25,979</p>
                            <p className="text-sm text-[var(--foreground)]/70">Matches analyzed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">11</p>
                            <p className="text-sm text-[var(--foreground)]/70">European leagues</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">11,060</p>
                            <p className="text-sm text-[var(--foreground)]/70">Players tracked</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">50%</p>
                            <p className="text-sm text-[var(--foreground)]/70">ML prediction accuracy</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Key Features */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Key Features
                        </h3>
                        <div className="space-y-4 text-[var(--foreground)]/70">
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">
                                    7 Interactive Analytical Queries
                                </p>
                                <ul className="space-y-1 ml-4 text-sm">
                                    <li>Team Performance by Season (league standings)</li>
                                    <li>Home vs Away Performance Analysis</li>
                                    <li>Head-to-Head Historical Records</li>
                                    <li>Player Appearance Frequency</li>
                                    <li>Team Form Analysis (recent momentum)</li>
                                    <li>High-Scoring vs Low-Scoring Teams</li>
                                    <li>Team Attributes Correlation with Success</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">
                                    Machine Learning Match Prediction
                                </p>
                                <ul className="space-y-1 ml-4 text-sm">
                                    <li>Gradient Boosting model (best of 3 tested algorithms)</li>
                                    <li>50% accuracy (typical for soccer prediction)</li>
                                    <li>84% recall for home wins</li>
                                    <li>15 features including team ratings and recent form</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* ML Key Finding */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            ML Key Finding: Recent Form Matters Most
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Analysis of feature importance revealed that <strong className="text-[var(--foreground)]">recent form (22%)</strong> is
                            the most important predictor, outweighing static FIFA ratings. This
                            validates the importance of temporal data in sports prediction.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--accent)] text-lg mb-1">22%</p>
                                <p className="text-sm text-[var(--foreground)]/70">Form difference (most important)</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] text-lg mb-1">7.9%</p>
                                <p className="text-sm text-[var(--foreground)]/70">Defensive rating difference</p>
                            </div>
                        </div>
                    </div>

                    {/* MongoDB Design */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            MongoDB Design Decisions
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Denormalized documents:</strong> Team and player info embedded in match documents for faster reads
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Temporal attributes:</strong> Player/team ratings stored as arrays within documents
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Strategic indexing:</strong> Indexes on date, league, season, team names for optimized queries
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Flexible schema:</strong> Naturally handles varying match events (goals, cards, substitutions)
                            </li>
                        </ul>
                    </div>

                    {/* Dataset */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Dataset: Kaggle European Soccer Database
                        </h3>
                        <p className="text-[var(--foreground)]/70 mb-4">
                            Comprehensive dataset spanning 2008-2016 across 11 European leagues:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                            {[
                                "England Premier League",
                                "Spain La Liga",
                                "Germany Bundesliga",
                                "Italy Serie A",
                                "France Ligue 1",
                                "Netherlands Eredivisie",
                            ].map((league) => (
                                <span
                                    key={league}
                                    className="px-3 py-2 border border-[var(--border)] text-[var(--foreground)]/70 text-center"
                                >
                                    {league}
                                </span>
                            ))}
                        </div>
                        <p className="text-xs text-[var(--foreground)]/50 mt-3">
                            Plus: Portugal, Poland, Scotland, Belgium, Switzerland
                        </p>
                    </div>

                    {/* Web Application */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Flask Web Application
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">17</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Routes</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">7</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Query Pages</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">7</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">API Endpoints</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">3K+</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase">Lines of Code</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "MongoDB",
                                "PyMongo",
                                "Flask",
                                "Python",
                                "Scikit-learn",
                                "Gradient Boosting",
                                "Pandas",
                                "Docker",
                                "Jinja2",
                                "REST APIs",
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

                    {/* Learning Outcomes */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Learning Outcomes
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>NoSQL database design with denormalization strategies</li>
                            <li>Complex MongoDB aggregation pipelines</li>
                            <li>Feature engineering from database queries</li>
                            <li>RESTful API design with Flask</li>
                            <li>Full-stack development with AJAX dynamic loading</li>
                        </ul>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="https://github.com/rroshann/soccer-analytics-mongodb"
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
