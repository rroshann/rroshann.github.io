import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "Sales Playbook Optimization | Roshan Siddartha Sivakumar",
    robots: { index: false },
};

export default function SalesProjectPage() {
    return <LegacyRedirect to="/projects/sales-playbook" />;
}
