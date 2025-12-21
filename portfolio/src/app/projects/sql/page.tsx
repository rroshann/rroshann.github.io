import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "NC Voter Database System | Roshan Siddartha Sivakumar",
    description:
        "Full-scale SQL database system built from real North Carolina voter data with normalization, stored procedures, triggers, and PHP front-end.",
};

export default function SQLProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    🗳️ North Carolina Voter Database System
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    SQL • Relational Design • Transactions • Data Integrity
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        This was a solo project where I designed a fully functional SQL
                        database system from scratch using real voter registration data from
                        North Carolina. The goal was to create a scalable, normalized system
                        to manage voters, candidates, districts, and election
                        activity—ensuring accuracy, security, and performance throughout.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Schema Design */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            📐 Designing the Schema
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I started by drafting a detailed ER model that captured the
                            relationships between voters, ballots, political parties, and
                            geographic zones. I translated that into a fully normalized
                            relational schema using PostgreSQL and ensured referential
                            integrity with well-defined foreign keys.
                        </p>
                    </div>

                    {/* Building with SQL */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            ⚙️ Building with Real SQL
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I created all base tables, populated them with sample data, and
                            implemented advanced SQL features like triggers, constraints,
                            joins, and views. I also wrote stored procedures to handle voting
                            transactions, simulate real-world updates, and enforce business
                            logic like district restrictions.
                        </p>
                    </div>

                    {/* Transaction Safety */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🔐 Transaction Safety
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            I simulated multi-user scenarios to test transaction isolation and
                            rollback behavior. This included updating party affiliations,
                            logging election results, and ensuring atomicity during voter
                            registration.
                        </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            💡 What I Took Away
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                🧱 Learned to structure complex systems from the ground up using
                                SQL
                            </li>
                            <li>
                                📊 Wrote advanced queries that balanced accuracy and performance
                            </li>
                            <li>
                                🧪 Gained hands-on experience with data validation, constraints,
                                and rollback testing
                            </li>
                        </ul>
                    </div>

                    {/* Website Features */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🌐 Website Features
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            I developed a dynamic web interface using PHP and MySQL that
                            interacts with the backend database. This application replicates a
                            live voter management system with the following capabilities:
                        </p>
                        <ul className="space-y-2 text-[var(--foreground)]/70 text-sm">
                            <li>
                                🔍 <strong>Search Voter:</strong> Retrieve a voter&apos;s name
                                using their registration number.
                            </li>
                            <li>
                                📜 <strong>View Voting History:</strong> Display historical
                                party preferences by election.
                            </li>
                            <li>
                                ➕ <strong>Insert/Update Vote:</strong> Add new voting records
                                or update existing ones.
                            </li>
                            <li>
                                ❌ <strong>Delete Voter:</strong> Remove a voter&apos;s record
                                and their entire history.
                            </li>
                            <li>
                                📊 <strong>Analytics Dashboards:</strong> City-wise party
                                distribution, age group breakdown.
                            </li>
                            <li>
                                📝 <strong>Audit Logs:</strong> Track insertions and deletions
                                with automatic timestamps.
                            </li>
                        </ul>
                    </div>

                    {/* Tools */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🛠 Tools & Technologies
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            MySQL • PHP • ER Modeling • Transaction Control • Views & Triggers
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                </div>
            </div>
        </section>
    );
}
