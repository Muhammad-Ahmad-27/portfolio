import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-white/10 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <h2 className="mb-12 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
