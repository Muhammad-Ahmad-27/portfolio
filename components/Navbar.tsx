"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { navBrand, navLinks, sectionIds } from "@/data/nav";
import { cn } from "@/lib/cn";

function resolveActiveSection(navLine: number): string {
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const id = sectionIds[i];
    const element = document.getElementById(id);
    if (!element) continue;

    const top = element.offsetTop;
    const bottom = top + element.offsetHeight;

    if (top <= navLine && bottom > navLine) {
      return id;
    }
  }

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const id = sectionIds[i];
    const element = document.getElementById(id);
    if (element && element.offsetTop <= navLine) {
      return id;
    }
  }

  return sectionIds[0];
}

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  const updateActiveSection = useCallback(() => {
    const navHeight = headerRef.current?.offsetHeight ?? 72;
    const navLine = window.scrollY + navHeight + 16;
    setActiveSection(resolveActiveSection(navLine));
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1120]/60 shadow-lg shadow-black/20 backdrop-blur-xl"
    >
      <nav
        className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4 md:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          onClick={handleNavClick}
          className="text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:text-violet-200"
        >
          {navBrand}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.sectionId}>
              <a
                href={link.href}
                className={cn("nav-link", activeSection === link.sectionId && "nav-link-active")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-white/20 hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <span
            className={cn(
              "absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
              mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            )}
          />
          <span
            className={cn(
              "absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
              mobileOpen ? "scale-x-0 opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "absolute block h-0.5 w-5 bg-current transition-all duration-300 ease-out",
              mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            )}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[#0b1120]/80 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.sectionId}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "nav-link block w-full text-center",
                  activeSection === link.sectionId && "nav-link-active"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
