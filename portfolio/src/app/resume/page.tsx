import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume | Roshan Siddartha Sivakumar",
    description:
        "View or download the resume of Roshan Sivakumar - Data Scientist and Engineer.",
};

export default function ResumePage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-6">
                    My <span className="text-[var(--accent)]">Resume</span>
                </h1>

                <p className="text-lg text-[var(--foreground)]/70 mb-8 max-w-2xl">
                    You can view or download my full resume below for more details on my
                    education, skills, and experience.
                </p>

                {/* Download Button */}
                <a
                    href="/files/roshan-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300 mb-12"
                >
                    Download Resume (PDF)
                </a>

                {/* PDF Embed */}
                <div className="border-2 border-[var(--border)] bg-[var(--muted)]">
                    <iframe
                        src="/files/roshan-resume.pdf"
                        className="w-full h-[80vh]"
                        title="Resume PDF"
                    />
                </div>
            </div>
        </section>
    );
}
