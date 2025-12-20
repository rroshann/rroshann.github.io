import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Roshan Siddartha Sivakumar",
    description:
        "Get in touch with Roshan Sivakumar for collaboration, internships, or full-time opportunities.",
};

const contactLinks = [
    {
        icon: "✉️",
        label: "Email",
        value: "roshan.siddartha.sivakumar@vanderbilt.edu",
        href: "mailto:roshan.siddartha.sivakumar@vanderbilt.edu",
    },
    {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/roshansiddartha",
        href: "https://linkedin.com/in/roshansiddartha",
    },
    {
        icon: "🐙",
        label: "GitHub",
        value: "github.com/rroshann",
        href: "https://github.com/rroshann",
    },
];

export default function ContactPage() {
    return (
        <section className="min-h-screen px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h1 className="text-[clamp(2rem,8vw,6rem)] font-bold tracking-tighter leading-[0.9] mb-6">
                    Get in <span className="text-[var(--accent)]">Touch</span>
                </h1>

                <p className="text-lg text-[var(--foreground)]/70 mb-12 max-w-2xl">
                    I&apos;m always open to connecting—whether it&apos;s for
                    collaboration, internships, full-time roles, or just a good
                    conversation about data. Feel free to reach out via the platforms
                    below.
                </p>

                {/* Contact Links */}
                <div className="space-y-6">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.href.startsWith("mailto") ? undefined : "_blank"}
                            rel={
                                link.href.startsWith("mailto")
                                    ? undefined
                                    : "noopener noreferrer"
                            }
                            className="group flex items-center gap-6 p-6 border-2 border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] transition-all duration-300"
                        >
                            <span className="text-3xl">{link.icon}</span>
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/50 group-hover:text-[var(--background)]/70 mb-1">
                                    {link.label}
                                </p>
                                <p className="text-lg font-medium group-hover:text-[var(--background)]">
                                    {link.value}
                                </p>
                            </div>
                            <span className="ml-auto text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 group-hover:text-[var(--background)]">
                                →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
