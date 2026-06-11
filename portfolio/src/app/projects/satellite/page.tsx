import type { Metadata } from "next";
import LegacyRedirect from "@/components/legacy-redirect";

export const metadata: Metadata = {
    title: "Two-Wheel Inverted Pendulum Control | Roshan Siddartha Sivakumar",
    alternates: { canonical: "/projects/inverted-pendulum" },
};

export default function SatelliteRedirectPage() {
    return <LegacyRedirect to="/projects/inverted-pendulum" />;
}
