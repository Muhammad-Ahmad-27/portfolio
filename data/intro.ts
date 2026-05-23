export interface IntroLink {
  label: string;
  href: string;
}

export interface IntroImage {
  src: string;
  alt: string;
}

export const introLinkKeys = [
  "github",
  "linkedin",
  "codeforces",
  "leetcode",
] as const;

export type IntroLinkKey = (typeof introLinkKeys)[number];

export type IntroLinks = Record<IntroLinkKey, IntroLink>;

export interface Intro {
  name: string;
  role: string;
  tagline: string;
  image: IntroImage;
  links: IntroLinks;
  cta: {
    label: string;
    href: string;
  };
}

export const intro: Intro = {
  name: "Muhammad Ahmad",
  role: "Computing Enthusiast",
  tagline: "I am passionate about Competitive Proramming, Web Development, and Cyber Security.",
  image: {
    src: "/profile.jpg",
    alt: "Muhammad Ahmad",
  },
  links: {
    github: {
      label: "GitHub",
      href: "https://github.com/Muhammad-Ahmad-27",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-ahmad-03a022353/",
    },
    codeforces: {
      label: "Codeforces",
      href: "https://codeforces.com/profile/Muhammad-Ahmad",
    },
    leetcode: {
      label: "LeetCode",
      href: "https://leetcode.com/u/Fkqp4scjer/",
    },
  },
  cta: {
    label: "View Projects",
    href: "#projects",
  },
};
