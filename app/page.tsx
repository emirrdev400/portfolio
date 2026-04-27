import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
