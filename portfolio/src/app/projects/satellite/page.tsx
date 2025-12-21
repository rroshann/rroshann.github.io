import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
    title: "Two-Wheel Inverted Pendulum Control | Roshan Siddartha Sivakumar",
    description:
        "MATLAB-based control system for a two-wheeled inverted pendulum using Newton-Euler dynamics and feedback control.",
};

export default function SatelliteProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <BackButton variant="link" className="mb-8" />

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    Two-Wheel Inverted Pendulum Control System
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    Control Systems • MATLAB • Mechatronics • Dynamic Modeling
                </p>

                {/* Content */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        This project focused on modeling and controlling a two-wheeled
                        inverted pendulum — a system that mimics how devices like Segways
                        balance on two wheels. The challenge was to maintain vertical
                        stability while allowing forward and backward motion using real-world
                        physical constraints.
                    </p>

                    <p>
                        We started by studying the theoretical dynamics of the system using
                        Newton-Euler methods. The system was broken down into three major
                        subsystems: the wheel torque and motion dynamics, the pendulum (or
                        body) angle, and the disturbance factors including ground friction
                        and tilt acceleration.
                    </p>

                    <p>
                        The control strategy was divided into two distinct phases. First,
                        we modeled how to apply a controlled torque to bring the system from
                        rest to an upright position. Once upright, the second phase involved
                        feedback control to keep the system in balance using angular velocity
                        and tilt angle as inputs.
                    </p>

                    <p>
                        We developed the entire control simulation in MATLAB from scratch,
                        incorporating physics-based modeling of angular momentum, torque, and
                        damping. This involved solving coupled differential equations using
                        ODE solvers and tuning physical parameters until the system
                        demonstrated consistent stability.
                    </p>

                    <p>
                        This hands-on project was a great exploration of classical mechanics,
                        feedback control design, and practical coding. It taught us how
                        theoretical equations evolve into real-time system behavior — and how
                        small parameter changes can significantly affect system stability.
                    </p>
                </div>

                {/* Tech Stack */}
                <div className="border-l-2 border-[var(--accent)] pl-6 mb-16">
                    <h3 className="text-xl font-bold tracking-tight mb-3">
                        Tools & Technologies
                    </h3>
                    <p className="text-[var(--foreground)]/70">
                        MATLAB • Simulink • Classical Mechanics • System Dynamics • Control
                        Theory
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                    <Link href="/#projects" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300">← Back to Projects</Link>
                </div>
            </div>
        </section>
    );
}
