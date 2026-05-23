export type AchievementCategory =
  | "Olympiad"
  | "Contest"
  | "Hackathon"
  | "Competition";

export interface Achievement {
  title: string;
  category: AchievementCategory;
  result: string;
  year: number;
  rank?: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Asia Pacific Olympiad in Informatics",
    category: "Olympiad",
    result: "National Rank 7",
    year: 2026,
    description:
      "Ranked 7th nationally in the APIO standings, narrowly outside the official top 6 selection.",
  },
  {
    title: "Pakistan Mathematical Modelling Competition",
    category: "Competition",
    result: "Top 10",
    year: 2026,
    description:
      "Achieved a top 10 position in a national-level mathematical modelling competition.",
  },
  {
    title: "ITU Coderush Programming Competition",
    category: "Contest",
    result: "Runner-up",
    year: 2026,
    description:
      "Secured runner-up position in a competitive university-level programming contest.",
  },
  {
    title: "North African Olympiad in Informatics",
    category: "Olympiad",
    result: "Bronze Medal",
    year: 2026,
    description:
      "Achieved bronze medal standing through consistent algorithmic performance.",
  },
  {
    title: "Pakistan Olympiad in Informatics",
    category: "Olympiad",
    result: "National Rank 9",
    year: 2026,
    description:
      "Placed within the national top 10 in the national selection round for competitive programming.",
  },

  // 2025 (correct order)
  {
    title: "PakCrypt Cryptography Challenge",
    category: "Competition",
    result: "Gold",
    year: 2025,
    rank: "2nd",
    description:
      "Secured 2nd place in a cryptography-focused competition demonstrating strong problem-solving ability.",
  },
  {
    title: "UE Tech Karaan Programming Competition",
    category: "Contest",
    result: "Rank 6",
    year: 2025,
    description:
      "Placed 6th in a competitive university-level programming contest.",
  },
  {
    title: "ITU Coderush Programming Competition",
    category: "Contest",
    result: "Rank 5",
    year: 2025,
    description:
      "Secured 5th position in a strong field of university teams.",
  },
  {
    title: "SOFTEC Programming Competition",
    category: "Contest",
    result: "Rank 4",
    year: 2025,
    description:
      "Achieved 4th position in a highly competitive national programming contest.",
  },
  {
    title: "UCP Taakra Programming Competition",
    category: "Contest",
    result: "Rank 4",
    year: 2025,
    description:
      "Finished 4th after a strong overall performance across all problem sets.",
  },
];