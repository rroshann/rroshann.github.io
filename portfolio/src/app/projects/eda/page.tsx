import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "Economic Freedom & Global Well-Being | Roshan Siddartha Sivakumar",
    robots: { index: false },
};

export default function EDAProjectPage() {
    return <LegacyRedirect to="/projects/economic-freedom" />;
}
