import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { site } from "@/data/site";

export default function Home() {
  return (
    <main className="relative pb-8">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="border-t border-white/10 py-12">
        <p className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500 md:px-8">
          {site.footerText}
        </p>
      </footer>
    </main>
  );
}
