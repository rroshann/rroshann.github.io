import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";
import Image from "next/image";

export const metadata: Metadata = {
    title: "3D-Printed Prosthetic Arm | Roshan Siddartha Sivakumar",
    description:
        "Affordable, lightweight prosthetic arm design using Fusion 360 generative design, carbon fiber, and FDM 3D printing.",
};

export default function ProstheticProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Optimizing a 3D-Printed Prosthetic Arm
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    Fusion 360 • Generative Design • Carbon Fiber • FDM
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        This project was part of a multidisciplinary capstone focused on
                        creating affordable, lightweight, and durable upper-limb prosthetics
                        using 3D printing. The inspiration came from a real need in the
                        medical field: conventional prosthetics are often prohibitively
                        expensive and too heavy for comfortable daily use, especially for
                        children and older adults.
                    </p>

                    <p>
                        We began by exploring common limitations in existing designs,
                        particularly in terms of material weight, customization complexity,
                        and long-term usability. After researching alternatives, carbon
                        fiber emerged as the most promising material, offering an excellent
                        strength-to-weight ratio and thermal resistance.
                    </p>

                    <p>
                        Using Autodesk Fusion 360 and its generative design features, we
                        modeled the prosthetic arm with structural constraints in mind. We
                        set parameters such as a maximum applied force of 1000N and a
                        minimum allowable mass of 1500g. The software simulated dozens of
                        design iterations, each balancing structural integrity with material
                        efficiency.
                    </p>

                    <p>
                        After analyzing the results, we selected the most optimized model
                        that delivered strength, comfort, and cost-effectiveness, all while
                        being manufacturable using Fused Deposition Modeling (FDM). The
                        iterative process allowed us to push the boundaries of form and
                        function.
                    </p>

                    <p>
                        What set this project apart was not just the technical solution, but
                        its focus on real-world usability. The final product was designed
                        with adaptability in mind, making it ideal for users who require
                        frequent updates due to growth, wear, or lifestyle changes.
                    </p>
                </div>

                {/* Image Gallery */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold tracking-tight mb-4">
                        Design Iterations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="border border-[var(--border)] overflow-hidden">
                            <Image
                                src="/projects/prosthetic/one.png"
                                alt="Generative design iteration 1"
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                            <p className="text-xs text-center text-[var(--foreground)]/50 py-2">Iteration 1</p>
                        </div>
                        <div className="border border-[var(--border)] overflow-hidden">
                            <Image
                                src="/projects/prosthetic/two.png"
                                alt="Generative design iteration 2"
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                            <p className="text-xs text-center text-[var(--foreground)]/50 py-2">Iteration 2</p>
                        </div>
                        <div className="border border-[var(--border)] overflow-hidden">
                            <Image
                                src="/projects/prosthetic/three.png"
                                alt="Generative design iteration 3"
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                            <p className="text-xs text-center text-[var(--foreground)]/50 py-2">Final Design</p>
                        </div>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="/projects/prosthetic/gallery"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        View Design Showcase
                    </Link>
                    <BackButton />
                </div>
            </div>
        </section>
    );
}
