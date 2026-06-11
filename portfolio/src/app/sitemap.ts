import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://rroshann.github.io";

// Legacy redirect stubs (canonicalized to their destinations) are excluded.
const REDIRECT_STUBS = new Set(["eda", "sql", "sales", "satellite"]);

// Derived from the filesystem at build time so new project pages are
// picked up automatically. The /projects index itself is a redirect stub.
function projectRoutes(): string[] {
    const projectsDir = path.join(process.cwd(), "src", "app", "projects");
    return fs
        .readdirSync(projectsDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && !REDIRECT_STUBS.has(entry.name))
        .flatMap((entry) => {
            const routes = [`/projects/${entry.name}`];
            if (fs.existsSync(path.join(projectsDir, entry.name, "gallery", "page.tsx"))) {
                routes.push(`/projects/${entry.name}/gallery`);
            }
            return routes;
        })
        .sort();
}

export default function sitemap(): MetadataRoute.Sitemap {
    return ["/", ...projectRoutes()].map((route) => ({
        url: `${BASE_URL}${route}`,
        changeFrequency: "monthly",
        priority: route === "/" ? 1 : 0.7,
    }));
}
