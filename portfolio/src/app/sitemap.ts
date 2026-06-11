import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://rroshann.github.io";

// Legacy redirect stubs (eda, sql, sales, /projects index) are noindex and
// intentionally excluded.
const ROUTES = [
    "/",
    "/projects/ab-capstone",
    "/projects/nissan-chatbot",
    "/projects/nissan",
    "/projects/fabops-copilot",
    "/projects/scene-reader",
    "/projects/ai-detection",
    "/projects/soccer-analytics",
    "/projects/sales-playbook",
    "/projects/economic-freedom",
    "/projects/nc-voter-db",
    "/projects/prosthetic",
    "/projects/prosthetic/gallery",
    "/projects/ros",
    "/projects/ros/gallery",
    "/projects/inverted-pendulum",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map((route) => ({
        url: `${BASE_URL}${route}`,
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.7,
    }));
}
