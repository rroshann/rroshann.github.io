import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Roshan Siddartha Sivakumar",
    description:
        "Data Science graduate student at Vanderbilt with a background in Mechanical Engineering. Passionate about solving real-world problems through data.",
};

export default function AboutPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-3xl mx-auto">
                {/* Page Title */}
                <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-12">
                    About <span className="text-[var(--accent)]">Me</span>
                </h1>

                {/* Bio Content */}
                <div className="space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80">
                    <p>
                        I&apos;m a Data Science graduate student at Vanderbilt University
                        with a background in Mechanical Engineering. I&apos;m passionate
                        about solving real-world problems through data, especially when it
                        means creating tools that help people make better decisions.
                    </p>

                    <p>
                        I&apos;ve led projects that range from building predictive models
                        for B2B sales to analyzing global economic patterns and improving
                        supply chain packaging for a major automotive client. I enjoy
                        working through complexity, whether it&apos;s cleaning a massive
                        dataset, designing a machine learning pipeline, or creating
                        dashboards that make insights easy to act on.
                    </p>

                    <p>
                        Right now, I&apos;m most excited about scalable data systems,
                        applied machine learning, and the power of thoughtful data
                        storytelling. Outside of work, you&apos;ll probably find me
                        exploring new AI tools, diving into story-driven games, or listening
                        to music that sparks ideas.
                    </p>
                </div>
            </div>
        </section>
    );
}
