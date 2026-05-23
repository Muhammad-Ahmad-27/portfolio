import { achievements } from "@/data/achievements";
import { groupAchievementsByYear } from "@/lib/achievements";
import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";

export function Achievements() {
  const grouped = groupAchievementsByYear(achievements);

  return (
    <SectionWrapper id="achievements" title="Achievements">
      <div className="space-y-14">
        {grouped.map(({ year, items }) => (
          <div key={year}>
            <h3 className="mb-8 text-3xl font-semibold tabular-nums text-gradient">
              {year}
            </h3>
            <ol className="space-y-6">
              {items.map((item) => (
                <GlassCard key={`${year}-${item.title}`} as="li" className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-300/80">
                    {item.category}
                  </p>
                  <h4 className="mt-2 text-lg font-medium text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.result}
                    {item.rank ? ` · ${item.rank}` : null}
                  </p>
                  {item.description ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  ) : null}
                </GlassCard>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
