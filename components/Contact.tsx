import { contact } from "@/data/contact";
import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Contact() {
  return (
    <SectionWrapper id="contact" title="Contact">
      <GlassCard hover={false} className="p-8 text-center md:p-10">
        <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
          {contact.description}
        </p>
        <a href={contact.email.href} className="btn-primary">
          {contact.email.label}
        </a>
      </GlassCard>
    </SectionWrapper>
  );
}
