import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "ROS Robot Navigation | Roshan Siddartha Sivakumar",
    description:
        "Autonomous two-wheeled robot with obstacle avoidance using ROS, SLAM, GMapping, and Bug2 algorithm in Gazebo simulation.",
};

export default function ROSProjectPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-[var(--foreground)]/50 hover:text-[var(--accent)] transition-colors mb-8"
                >
                    ← Back to Projects
                </Link>

                {/* Header */}
                <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold tracking-tighter leading-[0.9] mb-4">
                    🤖 ROS-Based Obstacle Avoidance with a Two-Wheeled Robot
                </h1>
                <p className="text-lg text-[var(--accent)] font-medium mb-8">
                    Robotics • ROS • SLAM • GMapping • Navigation Algorithms
                </p>

                {/* Intro */}
                <div className="prose-section space-y-6 text-lg leading-relaxed text-[var(--foreground)]/80 mb-12">
                    <p>
                        This project explored the design and development of an autonomous
                        two-wheeled robot capable of avoiding obstacles in a simulated
                        environment using the Robot Operating System (ROS). The primary
                        objective was to build a complete pipeline—from robot design to
                        motion planning and real-time decision-making using sensor input.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {/* Building the Robot */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🛠️ Building the Robot
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            The journey began by modeling a basic robot using URDF and XACRO
                            files within ROS. The chassis, wheels, and joints were defined,
                            and the design was visualized using Rviz. Once complete, the robot
                            was deployed in the Gazebo simulation environment with
                            differential drive plugins.
                        </p>
                    </div>

                    {/* Sensor Integration */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🔍 Sensor Integration
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            We added a laser scanner to provide environmental feedback. Using
                            ROS plugins and real-time data topics, the robot began detecting
                            obstacles through its front-facing sensors. We divided the 180°
                            scan range into five distinct zones for fine-grained obstacle
                            detection.
                        </p>
                    </div>

                    {/* Bug 2 Algorithm */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🧠 Motion Planning with the Bug 2 Algorithm
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            A major highlight was implementing the Bug 2 algorithm for
                            obstacle avoidance. Unlike simpler navigation techniques, Bug 2
                            maintains a direct path to the goal and only deviates when
                            obstacles are encountered. The robot would
                            &quot;hug&quot; the obstacle boundary until it could safely rejoin
                            the original path.
                        </p>
                    </div>

                    {/* SLAM */}
                    <div className="border-l-2 border-[var(--border)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            🗺️ Mapping the Environment with SLAM
                        </h3>
                        <p className="text-[var(--foreground)]/70 leading-relaxed">
                            To enable map creation, we incorporated GMapping, a ROS package
                            for Simultaneous Localization and Mapping (SLAM). Using real-time
                            data from the laser scanner and odometry sensors, the robot built
                            a 2D map of its surroundings while navigating.
                        </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                        <h3 className="text-xl font-bold tracking-tight mb-3">
                            ✅ Key Takeaways
                        </h3>
                        <ul className="space-y-2 text-[var(--foreground)]/70">
                            <li>
                                🧩 Developed a custom robot from the ground up using URDF and
                                XACRO
                            </li>
                            <li>
                                📡 Integrated sensors and extracted real-time data for obstacle
                                tracking
                            </li>
                            <li>📉 Implemented Bug 2 navigation for intelligent pathfinding</li>
                            <li>🌐 Built accurate environment maps with GMapping and SLAM</li>
                            <li>
                                💡 Strengthened understanding of state machines and motion
                                planning
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTAs */}
                <div className="mt-16 flex flex-wrap gap-4">
                    <Link
                        href="/projects/ros/gallery"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--foreground)] transition-all duration-300"
                    >
                        View Gallery
                    </Link>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--border)] rounded-none text-sm font-medium uppercase tracking-[0.1em] hover:bg-[var(--accent)] hover:text-[var(--background)] hover:border-[var(--accent)] transition-all duration-300"
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
