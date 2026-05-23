import { about } from "@/data/about";
import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";

export function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <GlassCard hover={false} className="p-8">
        <p className="text-base leading-relaxed text-slate-300 md:text-lg">
          {about.paragraph}
        </p>
      </GlassCard>
    </SectionWrapper>
  );
}
