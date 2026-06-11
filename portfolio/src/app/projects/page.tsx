import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "Projects | Roshan Siddartha Sivakumar",
    alternates: { canonical: "/" },
};

export default function ProjectsPage() {
    return <LegacyRedirect to="/#projects" />;
}
