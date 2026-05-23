export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export const navBrand = "Portfolio";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Achievements", href: "#achievements", sectionId: "achievements" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export const sectionIds = navLinks.map((link) => link.sectionId);
