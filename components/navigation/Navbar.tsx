"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { navigation, utilityLinks } from "@/data/navigation";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Wordmark } from "@/components/navigation/NavLinks";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 50,
      onToggle: (self) => setScrolled(self.isActive),
      onRefresh: (self) => setScrolled(self.isActive),
    });

    return () => trigger.kill();
  }, []);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>("[data-nav-reveal]");

    if (prefersReducedMotion()) {
      gsap.set(items, { autoAlpha: 1, y: 0 });
      return;
    }

    const tween = gsap.fromTo(
      items,
      { autoAlpha: 0, y: -12 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        delay: 0.3,
        stagger: 0.08,
        ease: "power3.out",
      },
    );

    return () => {
      tween.kill();
      gsap.set(items, { clearProps: "all" });
    };
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        data-nav
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid
            ? "border-b border-line bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-[var(--gutter)] transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            solid ? "h-[var(--nav-height-scrolled)]" : "h-[var(--nav-height)]"
          }`}
        >
          <Link href="/" data-nav-reveal aria-label="Northline — home">
            <Wordmark />
          </Link>

          <nav className="hidden lg:block" aria-label="Primary" data-nav-reveal>
            <MegaMenu items={navigation} onNavigate={closeMenu} solid={solid} />
          </nav>

          <div data-nav-reveal className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 lg:flex">
              {utilityLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-opacity duration-300 hover:opacity-60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="group relative flex h-10 w-10 items-center justify-center lg:hidden"
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
