import { HomePage } from "@/components/pages/HomePage";
import { NavbarDemo } from "@/components/pages/Navbar";
import { Education } from "@/components/pages/Education";
import { Experience } from "@/components/pages/Experience";
import { HeroSection } from "@/components/pages/HeroSection";
import { Skills } from "@/components/pages/Skills";
import {
  Certifications,
  Cirtifications,
} from "@/components/pages/Certifications";
import FooterSection from "@/components/pages/FooterSection";
import { ContactForm } from "@/components/pages/ContactForm";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <HomePage />
      <Education />
      <Experience />
      <HeroSection />
      <Skills />
      <Certifications />
      <ContactForm />
      <FooterSection />
      <Analytics />
    </>
  );
}
