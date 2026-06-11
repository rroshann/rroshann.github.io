import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "Sales Playbook Optimization | Roshan Siddartha Sivakumar",
    alternates: { canonical: "/projects/sales-playbook" },
};

export default function SalesProjectPage() {
    return <LegacyRedirect to="/projects/sales-playbook" />;
}
