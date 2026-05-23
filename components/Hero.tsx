import Image from "next/image";
import { intro, introLinkKeys } from "@/data/intro";
import { GlassCard } from "@/components/GlassCard";

export function Hero() {
  const { name, role, tagline, image, links, cta } = intro;

  return (
    <header
      id="home"
      className="scroll-mt-28 mx-auto max-w-4xl px-6 pb-8 pt-28 md:px-8 md:pb-12 md:pt-36"
    >
      <GlassCard hover={false} className="animate-fade-in p-8 md:p-10">
        <p className="mb-3 text-sm font-medium tracking-wide text-violet-300">
          {role}
        </p>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {name}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
              {tagline}
            </p>

            <nav
              className="mb-10 mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm"
              aria-label="Social links"
            >
              {introLinkKeys.map((key) => (
                <a
                  key={key}
                  href={links[key].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-muted"
                >
                  {links[key].label}
                </a>
              ))}
            </nav>

            <a href={cta.href} className="btn-primary">
              {cta.label}
            </a>
          </div>

          <Image
            src={image.src}
            alt={image.alt}
            width={336}
            height={336}
            priority
            className="mx-auto h-72 w-72 shrink-0 rounded-full border-2 border-white/20 object-cover object-top shadow-xl shadow-violet-950/50 ring-2 ring-violet-400/30 lg:mx-0 md:h-[21rem] md:w-[21rem]"
          />
        </div>
      </GlassCard>
    </header>
  );
}
