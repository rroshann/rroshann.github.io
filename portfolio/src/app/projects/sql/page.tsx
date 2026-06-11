import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "NC Voter Database System | Roshan Siddartha Sivakumar",
    robots: { index: false },
};

export default function SQLProjectPage() {
    return <LegacyRedirect to="/projects/nc-voter-db" />;
}
