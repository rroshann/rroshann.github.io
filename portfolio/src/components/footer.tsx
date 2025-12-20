import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t-2 border-[var(--border)] bg-black py-8 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[var(--foreground)]/50">
                    Designed &amp; Developed by{" "}
                    <Link
                        href="https://github.com/rroshann/rroshann.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline transition-colors duration-300"
                    >
                        Roshan Siddartha Sivakumar
                    </Link>
                </p>
                <p className="text-xs text-[var(--foreground)]/30">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
