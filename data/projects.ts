export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "olymppk",
    title: "OlympPK",
    description:
      "A unified community initiative bringing together students across all five major science olympiads in Pakistan through mentorship, collaboration, resources, and community-driven growth.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Community Platform",
      "Web Development",
    ],
  },
  {
    id: "epis",
    title: "EPIS",
    description:
      "A student-focused platform designed to improve past paper review and study habits through mistake analysis, performance tracking, and smarter revision workflows.",
    techStack: [
      "React",
      "Node.js",
      "Data Analysis",
      "Education Technology",
    ],
  },
  {
    id: "codequest",
    title: "CodeQuest",
    description:
      "A programming contest series organized alongside fellow SundarSTEM students to promote competitive programming, logical thinking, and problem-solving culture among students.",
    techStack: [
      "Competitive Programming",
      "Contest Infrastructure",
      "Problem Setting",
      "Web Development",
    ],
  },
  {
    id: "repovive",
    title: "Repovive",
    description:
      "Contributed as an early tester and feature suggester, helping refine ideas, usability, and developer-focused features during the platform’s early development stages.",
    techStack: [
      "Developer Tools",
      "Product Testing",
      "Feature Research",
      "User Experience",
    ],
  },
];
