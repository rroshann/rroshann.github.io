import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";

export const metadata: Metadata = {
    title: "Projects | Roshan Siddartha Sivakumar",
    description:
        "Data Science, Machine Learning, and Engineering projects by Roshan Sivakumar.",
};

const dataProjects = [
    {
        title: "Sales Playbook Optimization with Machine Learning",
        description:
            "Improved sales targeting by building predictive models and interactive dashboards for deal outcomes.",
        href: "/projects/sales",
    },
    {
        title: "Economic Freedom and Global Well-Being",
        description:
            "Analyzed the connection between economic freedom and societal outcomes using PCA and clustering.",
        href: "/projects/eda",
    },
    {
        title: "Operational Cost Optimization with Nissan",
        description:
            "Collaborated with Nissan North America to identify cost-saving opportunities in logistics and packaging.",
        href: "/projects/nissan",
    },
    {
        title: "North Carolina Voter Database System",
        description:
            "Built a full-scale relational database from raw voter data with normalization, stored procedures, triggers, and front-end integration.",
        href: "/projects/sql",
    },
];

const engineeringProjects = [
    {
        title: "Optimizing a Lightweight 3D-Printed Prosthetic Arm",
        description:
            "Led the development of a low-cost, durable prosthetic arm using carbon fiber and generative design.",
        href: "/projects/prosthetic",
    },
    {
        title: "Obstacle Avoidance with a ROS-Simulated Mobile Robot",
        description:
            "Designed and simulated a two-wheeled robot using ROS and Gazebo with Bug2 algorithm, SLAM, and LIDAR-based mapping.",
        href: "/projects/ros",
    },
    {
        title: "Stabilizing a Tumbling Satellite Using Control Wheel Dynamics",
        description:
            "Designed and simulated a MATLAB-based control system using momentum wheels and Lyapunov stability theory.",
        href: "/projects/satellite",
    },
];

export default function ProjectsPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 pt-32 pb-24">
            <div className="max-w-6xl mx-auto">
                {/* Page Title */}
                <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-16">
                    <span className="text-[var(--accent)]">Projects</span>
                </h1>

                {/* Data Science Section */}
                <div className="mb-16">
                    <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50 mb-8">
                        📊 Data Science & Analytics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {dataProjects.map((project) => (
                            <ProjectCard
                                key={project.href}
                                title={project.title}
                                description={project.description}
                                href={project.href}
                                category="data"
                            />
                        ))}
                    </div>
                </div>

                {/* Engineering Section */}
                <div>
                    <h2 className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--foreground)]/50 mb-8">
                        ⚙️ Engineering & Physical Systems
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {engineeringProjects.map((project) => (
                            <ProjectCard
                                key={project.href}
                                title={project.title}
                                description={project.description}
                                href={project.href}
                                category="engineering"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
