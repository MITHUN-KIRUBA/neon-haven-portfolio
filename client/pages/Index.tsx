import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/Navigation";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Resume />
      <Contact />

      {/* Footer */}
      <footer className="relative py-8 px-4 sm:px-6 lg:px-8 border-t border-primary/20 bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/60 text-sm">
            © 2024 MITHUN KIRUBA S K. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <p className="text-foreground/40 text-xs mt-2">
            Crafted with passion for the future of AI & Data Science
          </p>
        </div>
      </footer>
    </main>
  );
}
