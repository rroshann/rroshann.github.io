import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "NC Voter Database System | Roshan Siddartha Sivakumar",
    alternates: { canonical: "/projects/nc-voter-db" },
};

export default function SQLProjectPage() {
    return <LegacyRedirect to="/projects/nc-voter-db" />;
}
