import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "FabOps Copilot: Agentic AI for Semiconductor Fabs | Roshan Siddartha Sivakumar",
    description:
        "An MCP-native 9-node LangGraph agent that diagnoses semiconductor fab service-part stockout risk across policy, demand, and supply signals. Deployed on AWS, evaluated at 83.3% pass rate.",
};

export default function FabOpsCopilotPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    FabOps Copilot
                </h1>
                <p className="text-xl text-[var(--foreground)]/80 font-medium mb-2">
                    Agentic AI Stockout-Risk Diagnostician for Semiconductor Fab Service Parts
                </p>
                <p className="text-lg text-[var(--accent)] font-medium mb-2">
                    LangGraph · Gemini 2.5 Flash · AWS Lambda · DynamoDB · MCP · RAG
                </p>
                <p className="text-sm text-[var(--foreground)]/50 uppercase tracking-wide mb-8">
                    DS-5730 Context-Augmented Gen AI Apps | Vanderbilt University | Spring 2026
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        Semiconductor fabs run hundreds of expensive, slow-moving service parts across many sites. When a part is about to stock out, a planner must decide in minutes whether the root cause is demand drift, supply drift, or a stale reorder policy, and each diagnosis implies a different action. FabOps Copilot is a deployed agentic AI system that reads six disconnected data sources (ERP inventory, demand history, supplier lead-time logs, SEC 10-K filings, FRED macro signals, and reorder-policy metadata) and returns a single diagnosed driver with a prescribed action and grounded citations.
                    </p>
                </div>

                {/* Key Achievement Banner */}
                <div className="border-2 border-[var(--accent)] p-6 mb-12">
                    <p className="text-sm text-[var(--accent)] uppercase tracking-wide font-medium mb-4">
                        Key Achievement
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">83.3%</p>
                            <p className="text-sm text-[var(--foreground)]/70">Gold-set pass rate (15/18 cases)</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">19s</p>
                            <p className="text-sm text-[var(--foreground)]/70">Cold start, down from 50s</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[var(--accent)]">41/41</p>
                            <p className="text-sm text-[var(--foreground)]/70">Tests passing</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* The Diagnostic Challenge */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            The Diagnostic Challenge
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed mb-4">
                            Service-part planners must triage stockout risk across fragmented evidence: ERP inventory, historical demand, supplier lead-time logs, SEC risk disclosures, FRED industrial production, and reorder-policy metadata. A wrong diagnosis means rushed air freight or fab downtime. FabOps Copilot collapses that triage into a single agent call.
                        </p>
                        <p className="font-semibold text-[var(--foreground)]/90">
                            Can a grounded, tool-using agent reliably diagnose the root cause of a stockout risk and prescribe the correct action, end-to-end, in under 25 seconds?
                        </p>
                    </div>

                    {/* How It Works */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            How It Works (9-Node LangGraph)
                        </h3>
                        <p className="text-[var(--foreground)]/70 mb-4">
                            A natural-language question like &quot;Why is part 10279876 at risk at the Taiwan fab, and what should I do?&quot; flows through a 9-node state machine:
                        </p>
                        <ol className="space-y-2 ml-4 list-decimal text-[var(--foreground)]/70">
                            <li>Pull live inventory and reorder policy from DynamoDB.</li>
                            <li>Check policy staleness against latest demand history.</li>
                            <li>Check demand drift against a Croston SBA forecast baked the prior night.</li>
                            <li>Check supply drift using supplier lead-time trend and a simulated disruption model.</li>
                            <li>Ground the answer in real Applied Materials SEC 10-K disclosures via cosine similarity over 3072-dim Gemini embeddings.</li>
                            <li>Call Gemini 2.5 Flash to diagnose the driver as one of policy_drift, supply_risk, demand_shift, or none.</li>
                            <li>Run a rule-based prescriber keyed on the diagnosis.</li>
                            <li>Run a verify pass (gated behind an env flag in production for latency).</li>
                            <li>Finalize and write every intermediate artifact to a DynamoDB audit table.</li>
                        </ol>
                    </div>

                    {/* Architecture */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Architecture
                        </h3>
                        <pre className="border border-[var(--border)] p-4 text-xs text-[var(--foreground)]/70 overflow-x-auto">
{`Frontend (Amplify, vanilla HTML/JS, dark theme)
   -> API Gateway HTTP API (30s cap, native CORS)
      -> Runtime Lambda (Python 3.9, arm64, 1024 MB, 42 MB zip)
         -> LangGraph 9-node agent
         -> 7 tools over DynamoDB + FRED + EDGAR
         -> Gemini 2.5 Flash (diagnose), Claude Haiku (eval judge)

Nightly Lambda (container, arm64, 3008 MB, 900s)
   -> Croston SBA forecast bake via statsforecast
   -> MLflow tracking with S3-backed DB
   -> EventBridge cron 02:00 UTC

9 DynamoDB tables: audit, forecasts, policies, inventory, suppliers,
                   incidents, macro_cache, edgar_index, sessions`}
                        </pre>
                    </div>

                    {/* Hardest Problems Solved */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Hardest Problems Solved
                        </h3>
                        <ol className="space-y-4 ml-4 list-decimal text-[var(--foreground)]/70">
                            <li>
                                <strong className="text-[var(--foreground)]/90">Gold set was fiction.</strong> The original 30-case gold set had 14 of 17 label-vs-state mismatches. Wrote <code>regenerate_gold_set.py</code> to derive labels from real DynamoDB state, plus <code>inject_gold_drift.py</code> to seed deterministic 6/6/6 drift signals. Lifted pass rate from noise to 83.3%.
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">50 MB Lambda ceiling with ML deps.</strong> Moved Gemini SDK to a Lambda layer, extracted p90-stockout math to a numpy-free module, and wrote a pure-Python cosine ranker over 3072-dim vectors. Final runtime zip: 42 MB.
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">43-second cold start from EDGAR DynamoDB scan.</strong> Pre-baked all 1,079 EDGAR embedding chunks into the Lambda zip as a module-level constant, cutting cold start to roughly 19s and warm diagnose to 3 to 5s.
                            </li>
                            <li>
                                <strong className="text-[var(--foreground)]/90">Eval harness hit API Gateway 30s timeout.</strong> Switched to direct boto3 Lambda invoke with a 180s read timeout, incremental cache writes, and per-case try/except so one failing case does not nuke the whole run.
                            </li>
                        </ol>
                    </div>

                    {/* Scale and Metrics */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Scale and Metrics
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">9</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Agent Nodes</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">1,079</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">EDGAR Chunks</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">18</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Gold Cases</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">41/41</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Tests Passing</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">82</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Commits</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">~$0.04</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Per Eval Run</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">~4,400</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">Lines of Python</p>
                            </div>
                            <div className="border border-[var(--border)] p-4 text-center">
                                <p className="text-2xl font-bold text-[var(--foreground)]">9</p>
                                <p className="text-xs text-[var(--foreground)]/70 uppercase tracking-wide">DynamoDB Tables</p>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                "LangGraph",
                                "LangChain",
                                "Gemini 2.5 Flash",
                                "Claude Haiku",
                                "DSPy",
                                "MCP",
                                "Python",
                                "Pydantic v2",
                                "statsforecast",
                                "MLflow",
                                "AWS Lambda",
                                "DynamoDB",
                                "API Gateway",
                                "Amplify",
                                "EventBridge",
                                "CloudWatch",
                                "boto3",
                                "pytest",
                                "moto",
                                "GitHub Actions",
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

                    {/* Solo Build */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            Solo Build
                        </h3>
                        <p className="text-[var(--foreground)]/70">
                            Solo architecture, implementation, evaluation, and deployment by Roshan Siddartha Sivakumar over an 11-day build window in April 2026. 82 commits, all authored by one person.
                        </p>
                        <p className="text-sm text-[var(--foreground)]/50 mt-1">
                            Instructor: Prof. Jesse Spencer-Smith
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                    <Link
                        href="https://main.d23s2e6xnypmh0.amplifyapp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        Live Demo
                    </Link>
                    <Link
                        href="https://github.com/rroshann/fabops-copilot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        View on GitHub
                    </Link>
                    <Link
                        href="https://github.com/rroshann/fabops-copilot/blob/main/REPORT.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        Read Report
                    </Link>
                </div>
            </div>
        </section>
    );
}
