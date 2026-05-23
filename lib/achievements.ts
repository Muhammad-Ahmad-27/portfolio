import type { Achievement } from "@/data/achievements";

export interface AchievementsByYear {
  year: number;
  items: Achievement[];
}

export function groupAchievementsByYear(
  items: Achievement[]
): AchievementsByYear[] {
  const byYear = new Map<number, Achievement[]>();

  for (const item of items) {
    const existing = byYear.get(item.year) ?? [];
    existing.push(item);
    byYear.set(item.year, existing);
  }

  return Array.from(byYear.entries())
    .map(([year, yearItems]) => ({
      year,
      items: yearItems,
    }))
    .sort((a, b) => b.year - a.year);
}
