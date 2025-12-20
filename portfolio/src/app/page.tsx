import Hero from "@/components/hero";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ResumeSection from "@/components/resume-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
    </main>
  );
}
