import Hero from "@/components/hero";
import StatsMarquee from "@/components/stats-marquee";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import ResumeSection from "@/components/resume-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <StatsMarquee />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
