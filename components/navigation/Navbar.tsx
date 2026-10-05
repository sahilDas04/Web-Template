"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { NavLinks, Wordmark } from "@/components/navigation/NavLinks";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 40,
      onToggle: (self) => setScrolled(self.isActive),
      onRefresh: (self) => setScrolled(self.isActive),
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-nav]");
    if (!header) return;

    if (prefersReducedMotion()) {
      gsap.set("[data-nav-reveal]", { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-nav-reveal]",
        { autoAlpha: 0, y: -10 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          stagger: 0.07,
          ease: "power3.out",
        },
      );
    }, header);

    return () => ctx.revert();
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Transparent over the hero; solid brand colour once scrolled or when a
  // menu is open, so the links always sit on a known background.
  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        data-nav
        data-solid={solid}
        className="nav-shell"
      >
        <div className="mx-auto flex h-[var(--nav-active)] max-w-[1600px] items-center justify-between gap-6 px-[var(--gutter)] transition-[height] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <Link href="/" data-nav-reveal aria-label="Bhardwaj Constructions — home">
            <Wordmark />
          </Link>

          <nav className="hidden lg:block" aria-label="Primary" data-nav-reveal>
            <ul className="flex items-center gap-7">
              <NavLinks />
            </ul>
          </nav>

          <div data-nav-reveal className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  menuOpen ? "rotate-45" : "translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-px w-6 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  menuOpen ? "-rotate-45" : "-translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
