import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "NC Voter Database System | Roshan Siddartha Sivakumar",
    description:
        "Full-stack PHP/MySQL voter management system with audit logging, stored procedures, and demographic analytics for Mecklenburg County Elections.",
};

export default function NCVoterDBPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    North Carolina Voter Database System
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Full-Stack Voter Management with Audit Logging & Analytics
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    PHP · MySQL · PDO · Stored Procedures · Database Triggers
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DS-5610 Database Management | Vanderbilt University
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Built a comprehensive web-based voter information management system
                        for <strong className="text-[var(--foreground)]">Mecklenburg County Elections</strong> (Charlotte, NC).
                        The platform enables election officials to search voters, track
                        voting history, manage records, and analyze demographics with
                        comprehensive audit logging via database triggers.
                    </p>
                </div>

                {/* Key Features Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        System Capabilities
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">4</p>
                            <p className="text-sm text-[var(--foreground)]/70">Database views</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">3</p>
                            <p className="text-sm text-[var(--foreground)]/70">Stored procedures</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">2</p>
                            <p className="text-sm text-[var(--foreground)]/70">Audit tables</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">6</p>
                            <p className="text-sm text-[var(--foreground)]/70">Application modules</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Core Functionality */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Core Functionality
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Voter Search</p>
                                <p className="text-sm text-[var(--foreground)]/70">Look up voter by registration number</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Voting History</p>
                                <p className="text-sm text-[var(--foreground)]/70">Track participation across elections</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Record Management</p>
                                <p className="text-sm text-[var(--foreground)]/70">Insert, update, delete operations</p>
                            </div>
                            <div className="border border-[var(--border)] p-4">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Audit System</p>
                                <p className="text-sm text-[var(--foreground)]/70">Comprehensive logging via triggers</p>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Dashboard */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Analytics Dashboard (4 Views)
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Constituent Party Statistics:</strong>
                                {" "}Distribution across political parties
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Gender Demographics:</strong>
                                {" "}Breakdown of Democratic voters by gender
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Age Distribution:</strong>
                                {" "}Age groups across party affiliations
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Geographic Analysis:</strong>
                                {" "}City-wise voter distribution and preferences
                            </li>
                        </ul>
                    </div>

                    {/* Database Design */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Database Design
                        </h3>
                        <div className="space-y-4 text-[var(--foreground)]/70">
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">Stored Procedures</p>
                                <ul className="space-y-1 ml-4 text-sm">
                                    <li><code className="text-[var(--accent)]">get_voting_record</code> - Retrieves complete voting history</li>
                                    <li><code className="text-[var(--accent)]">insert_record</code> - Inserts or updates voting record</li>
                                    <li><code className="text-[var(--accent)]">delete_voter</code> - Cascading removal with audit</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--foreground)]/90 mb-2">Audit Tables</p>
                                <ul className="space-y-1 ml-4 text-sm">
                                    <li><code className="text-[var(--accent)]">audit_insert</code> - Logs all insertions/updates with timestamps</li>
                                    <li><code className="text-[var(--accent)]">audit_delete</code> - Logs deletions with full voter info</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Security */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Security Features
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">SQL Injection Prevention:</strong>
                                {" "}PDO prepared statements with parameter binding
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Input Sanitization:</strong>
                                {" "}PDO::PARAM_STR for proper string escaping
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Error Handling:</strong>
                                {" "}Graceful error messages without exposing system details
                            </li>
                        </ul>
                    </div>

                    {/* Architecture */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Three-Layer Architecture
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Presentation</p>
                                <p className="text-xs text-[var(--foreground)]/70">HTML, CSS, PHP Templates</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Application</p>
                                <p className="text-xs text-[var(--foreground)]/70">PHP Controllers, PDO</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="font-semibold text-[var(--foreground)] mb-1">Data</p>
                                <p className="text-xs text-[var(--foreground)]/70">MySQL, Views, Procedures</p>
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
                                "PHP 7/8",
                                "MySQL",
                                "PDO",
                                "Stored Procedures",
                                "Database Triggers",
                                "SQL Views",
                                "HTML5",
                                "CSS3",
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

                    {/* Data Source */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Data Source
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Mecklenburg County Board of Elections, Charlotte, North Carolina.
                            Publicly available election records.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="https://github.com/rroshann/SQL"
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
