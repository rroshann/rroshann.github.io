import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "ROS Robot Gallery | Roshan Siddartha Sivakumar",
    description:
        "Gallery showcasing ROS robot navigation stages from simulation to autonomous navigation.",
};

const galleryItems = [
    {
        title: "Initial Simulation",
        description:
            "Initial simulation of the Turtlebot using ROS Noetic and Gazebo. The robot is placed in a dynamic environment with mapped walls and obstacles.",
    },
    {
        title: "Real-time Mapping",
        description:
            "Real-time mapping and obstacle detection via LIDAR and SLAM. Our system identifies navigation barriers and dynamically adapts to changes.",
    },
    {
        title: "Path Planning",
        description:
            "Successful path planning and navigation using the ROS Navigation Stack. The robot efficiently reaches the goal without collisions.",
    },
    {
        title: "Goal Achieved",
        description:
            "Final position achieved with optimal path traversal, showcasing the robot's ability to navigate complex environments autonomously.",
    },
];

export default function ROSGalleryPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-12">
                    🤖 ROS Robot{" "}
                    <span className="text-[var(--accent)]">Navigation Gallery</span>
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
                    <BackButton />
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">All Projects</Link>
                </div>
            </div>
        </section>
    );
}
