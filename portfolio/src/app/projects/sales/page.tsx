import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Sales Playbook Optimization | Roshan Siddartha Sivakumar",
    description:
        "ML-driven B2B sales playbook using XGBoost, Streamlit dashboard, and Docker deployment for deal prediction and customer segmentation.",
};

export default function SalesProjectPage() {
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
                    Sales Playbook Optimization
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    Machine Learning • XGBoost • Streamlit • Docker • Business Analytics
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        This project tackled the challenge of improving B2B sales strategy
                        using predictive analytics. I led the end-to-end development of a
                        machine learning-driven playbook that forecasts deal outcomes and
                        segments high-value customers, transforming static sales processes
                        into dynamic, data-informed strategies.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Data Prep */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            📊 Data Preparation & Exploration
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            We worked with three anonymized HubSpot datasets (Companies,
                            Deals, Tickets), cleaning over 100 features and handling high
                            missingness. EDA revealed that the dataset was US-centric and
                            dominated by small-to-midsize companies. We engineered
                            duration-based features and corrected severe class imbalance.
                        </p>
                    </div>

                    {/* Feature Engineering */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🛠 Feature Engineering & Modeling
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            After merging company and deal data via mapping dictionaries, I
                            engineered business-relevant features such as region zone, deal
                            size category, and revenue brackets. I used Random Forest to
                            identify top predictors, selecting 10 robust features.
                        </p>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I trained and evaluated six models (Random Forest, XGBoost,
                            AdaBoost, KNN, Logistic Regression, and Decision Trees). Ensemble
                            models like XGBoost and AdaBoost delivered high AUC-ROC scores
                            with high accuracy.
                        </p>
                    </div>

                    {/* Insights */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            📈 Insights & Strategy
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            We found that smaller companies and industries like Manufacturing
                            and Retail had the highest win rates. Customer types labeled
                            &quot;In Trial&quot; or &quot;Partner&quot; had over 80%
                            conversion, while &quot;Prospect&quot; and &quot;Vendor&quot; had
                            the lowest. These insights shaped our lead-scoring and
                            segmentation logic.
                        </p>
                    </div>

                    {/* Deployment */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🧠 Deployment & Dashboard
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I deployed the model using Streamlit and Docker. The dashboard
                            includes five modules: deal prediction, filtered analytics,
                            win-rate insights, segment discovery, and segment comparisons.
                            This tool empowers sales teams to make fast, data-backed
                            decisions.
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🚀 Tech Stack
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Python • pandas • scikit-learn • XGBoost • Streamlit • Docker •
                            Git • matplotlib • seaborn
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <a
                        href="https://github.com/rroshann/ML_midterm_project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        View Code on GitHub
                    </a>
                    <a
                        href="https://mlmidtermproject-2glwbp4ds8jzhs5hspgw74.streamlit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        Try the Dashboard
                    </a>
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
