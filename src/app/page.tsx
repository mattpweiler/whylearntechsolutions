import { ContactSection } from "@/components/ContactSection";
import { EntryOptionsSection } from "@/components/EntryOptionsSection";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <HeroSection />
      <EntryOptionsSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
