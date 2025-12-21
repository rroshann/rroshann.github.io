import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Sales Playbook Optimization with ML | Roshan Siddartha Sivakumar",
    description:
        "Machine learning-powered B2B sales playbook using XGBoost for deal outcome prediction, KMeans customer segmentation, and Streamlit dashboard.",
};

export default function SalesPlaybookPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Sales Playbook Optimization with Machine Learning
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Dynamic B2B Sales Strategy Powered by Predictive Analytics
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    XGBoost · KMeans Clustering · Streamlit · Docker
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DS-5640 Machine Learning | Vanderbilt University
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Traditional sales playbooks are static and reactive. This project
                        builds a <strong className="text-[var(--foreground)]">dynamic alternative</strong> using
                        predictive analytics and classification models, delivering an
                        intelligent, evolving guide to improve B2B deal closures. The final
                        deliverable is an interactive Streamlit dashboard backed by a trained
                        ML model in a Dockerized deployment.
                    </p>
                </div>

                {/* Key Stats Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Data Scale
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">19,851</p>
                            <p className="text-sm text-[var(--foreground)]/70">Company records</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">593</p>
                            <p className="text-sm text-[var(--foreground)]/70">Deal records</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">6</p>
                            <p className="text-sm text-[var(--foreground)]/70">Models compared</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* ML Models */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Machine Learning Approach
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Trained and compared 6 algorithms to find the best deal outcome
                            predictor:
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div className="border border-[var(--accent)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)]">XGBoost</p>
                                <p className="text-xs text-[var(--accent)]">Winner</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)]/80">Random Forest</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)]/80">AdaBoost</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)]/80">KNN</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)]/80">Decision Tree</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)]/80">Logistic Reg.</p>
                            </div>
                        </div>
                        <p className="text-sm text-[var(--foreground)]/50 mt-4">
                            XGBoost selected for best test performance and robust generalization
                        </p>
                    </div>

                    {/* Customer Segmentation */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Customer Segmentation (KMeans)
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Grouped companies by revenue, engagement, and age into actionable
                            segments:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="border border-[var(--accent)] p-4">
                                <p className="font-semibold text-[var(--accent)] mb-1">High-Value</p>
                                <p className="text-sm text-[var(--foreground)]/70">Top priority accounts</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Active Clients</p>
                                <p className="text-sm text-[var(--foreground)]/70">Engaged, growing potential</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Low-Value</p>
                                <p className="text-sm text-[var(--foreground)]/70">Deprioritize or nurture</p>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Features */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Streamlit Dashboard Features
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Deal Outcome Predictor:</strong>
                                {" "}Predicts win/loss for new deals based on entered parameters
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Dataset Filter Tool:</strong>
                                {" "}Drill down into data by any column and value
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Sales Summary:</strong>
                                {" "}Visualize win rates and lead scoring
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">High-Value Segments:</strong>
                                {" "}Identify top-converting industries and company sizes
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Cross-Segment Comparison:</strong>
                                {" "}Compare win rates across customer attributes
                            </li>
                        </ul>
                    </div>

                    {/* Feature Engineering */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Feature Engineering
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>Custom fields for revenue buckets, tech stack indicators, deal size categories</li>
                            <li>Categorical encoding, scaling, and imputation strategies</li>
                            <li>Leak-proof feature pipeline ensuring clean train/test split</li>
                            <li>Handled high-missing columns and outliers in company data</li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "Python",
                                "XGBoost",
                                "Scikit-learn",
                                "KMeans",
                                "Streamlit",
                                "Docker",
                                "Pandas",
                                "HubSpot Data",
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
                        <ul className="text-[var(--foreground)]/70 space-y-1">
                            <li><strong className="text-[var(--foreground)]">Roshan Siddartha Sivakumar</strong></li>
                            <li>Xiaochen Liu</li>
                            <li>Anna Lorenz</li>
                            <li>Najma Thomas-Akpanoko</li>
                        </ul>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="https://github.com/rroshann/ML_midterm_project"
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
