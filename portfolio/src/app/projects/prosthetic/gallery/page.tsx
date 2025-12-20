import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Prosthetic Arm Gallery | Roshan Siddartha Sivakumar",
    description:
        "Design showcase for the 3D-printed prosthetic arm project featuring CAD renders and prototypes.",
};

const galleryItems = [
    {
        title: "Initial CAD Render",
        description:
            "Initial CAD render showing the basic skeletal layout using Fusion 360.",
    },
    {
        title: "Generative Design Output",
        description:
            "Generative design output highlighting optimized structure and material efficiency.",
    },
    {
        title: "3D Printed Prototype",
        description:
            "3D printed prototype assembled using FDM with carbon-fiber-infused filament.",
    },
    {
        title: "Load Testing",
        description:
            "Physical testing setup with simulated force application to evaluate stress limits.",
    },
    {
        title: "Final Assembly",
        description:
            "Final working assembly prepared for usability demonstration and presentation.",
    },
];

export default function ProstheticGalleryPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/projects/prosthetic"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-[var(--foreground)]/50 hover:text-[var(--accent)] transition-colors mb-8"
                >
                    ← Back to Project
                </Link>

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-12">
                    🦾 Prosthetic Arm{" "}
                    <span className="text-[var(--accent)]">Design Gallery</span>
                </h1>

                {/* Gallery Grid */}
                <div className="space-y-8">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-[var(--border)] p-6 hover:border-[var(--accent)] transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-3xl font-bold text-[var(--accent)]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--foreground)]/70">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="/projects/prosthetic"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        ← Back to Project
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
