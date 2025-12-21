import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Prosthetic Arm Gallery | Roshan Siddartha Sivakumar",
    description:
        "Design showcase for the 3D-printed prosthetic arm project featuring CAD renders and prototypes.",
};

const galleryItems = [
    {
        title: "Initial Arm Model",
        description:
            "This was our very first design of the prosthetic arm, built in Fusion 360. It represents the basic skeletal structure before optimization.",
        image: "/projects/prosthetic/one.png",
    },
    {
        title: "Generative Design Setup",
        description:
            "This image shows the region we targeted for optimization using generative design constraints such as load, geometry, and material limits.",
        image: "/projects/prosthetic/two.png",
    },
    {
        title: "Final Optimized Shape",
        description:
            "This is the final optimized version of the arm. Using generative design, the structure now has minimal mass with maximal strength, evident in its exoskeletal layout.",
        image: "/projects/prosthetic/three.png",
    },
];

export default function ProstheticGalleryPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-12">
                    Prosthetic Arm{" "}
                    <span className="text-[var(--accent)]">Design Gallery</span>
                </h1>

                {/* Gallery Grid */}
                <div className="space-y-8">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-[var(--border)] overflow-hidden hover:border-[var(--accent)] transition-colors duration-300"
                        >
                            <div className="aspect-video relative bg-[var(--muted)]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-6">
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
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">All Projects</Link>
                </div>
            </div>
        </section>
    );
}

