import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Economic Freedom & Global Well-Being | Roshan Siddartha Sivakumar",
    description:
        "Exploratory data analysis exploring how economic and personal freedoms relate to life satisfaction using PCA and clustering.",
};

export default function EDAProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    🌍 Economic Freedom and Global Well-Being
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    Exploratory Data Analysis • PCA • Clustering • Data Visualization
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        This project started with a simple question:{" "}
                        <strong>how does freedom shape the way people live?</strong> I
                        explored global datasets from the Heritage Foundation, Human Freedom
                        Index, and World Happiness Report to uncover how economic and
                        personal freedoms relate to life satisfaction around the world.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Merging Data */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🧩 Merging the Puzzle Pieces
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I brought together diverse global indicators, standardized scoring
                            systems, and handled missing data carefully. After cleaning and
                            preprocessing, I had a unified dataset of over 150 countries,
                            including measures of rights, liberties, and well-being.
                        </p>
                    </div>

                    {/* Patterns */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            📈 Finding Meaningful Patterns
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I engineered new features to capture themes like political voice,
                            property rights, and institutional trust. Using heatmaps and
                            correlation matrices, I found clear patterns: countries with
                            higher levels of freedom consistently had higher well-being
                            scores.
                        </p>
                    </div>

                    {/* PCA */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🧠 Simplifying with PCA
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            With so many overlapping metrics, I used Principal Component
                            Analysis to cut through the noise. Three components
                            emerged—economic freedom, civil liberties, and governance
                            strength—explaining over 80% of the total variance.
                        </p>
                    </div>

                    {/* Clustering */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🌐 Who&apos;s Similar to Whom?
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I applied clustering algorithms to group countries based on their
                            freedom profiles. Visualizing these clusters on a world map
                            revealed fascinating global trends, showing how countries align in
                            values and policies—even when separated by geography.
                        </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            💡 Key Takeaways
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                📊 Economic freedom closely correlates with life satisfaction
                            </li>
                            <li>
                                ⚖️ Civil rights like judicial independence and free speech are
                                strong predictors of well-being
                            </li>
                            <li>
                                🌎 Different regions exhibit unique freedom
                                &quot;signatures&quot; tied to culture and policy
                            </li>
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🛠 Tools & Technologies
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Python • pandas • matplotlib • seaborn • scikit-learn • geopandas
                            • PCA • k-means clustering • Plotly
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                    <a
                        href="https://github.com/rroshann/EDA_eco_freedom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        View Code on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
