"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ease } from "@/lib/animations/config";
import type { NavItem } from "@/data/navigation";
import { Arrow } from "@/components/ui/Arrow";

export function MegaMenu({
  items,
  onNavigate,
  solid = false,
}: {
  items: NavItem[];
  onNavigate: () => void;
  solid?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  useEffect(() => cancelClose, []);

  const show = (index: number) => {
    cancelClose();
    setActive(index);
    setOpen(true);
  };

  const hide = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setActive(null);
    }, 140);
  };

  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: ease.outExpo },
    );
  }, [active, open]);

  const current = active !== null ? items[active] : null;

  return (
    <div className="relative" onMouseLeave={hide}>
      <ul className="flex items-center gap-8">
        {items.map((item, index) => (
          <li key={item.label}>
            <Link
              href={item.href}
              aria-expanded={open && active === index}
              aria-haspopup="true"
              onMouseEnter={() => show(index)}
              onFocus={() => show(index)}
              className="relative text-[0.8125rem] font-medium tracking-[0.14em] uppercase"
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open && active === index ? "w-full" : "w-0"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      {open && current?.children && (
        <div
          ref={panelRef}
          className="fixed inset-x-0 z-40 border-y border-line bg-background/95 backdrop-blur-xl transition-[top] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            top: solid
              ? "var(--nav-height-scrolled)"
              : "var(--nav-height)",
          }}
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-8 px-[var(--gutter)] py-16">
            <div className="col-span-7">
              <p className="eyebrow text-ink-soft">{current.label}</p>
              <ul className="mt-8">
                {current.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className="group flex items-baseline justify-between gap-6 border-b border-line py-5 transition-colors duration-300 hover:bg-accent/30"
                    >
                      <span className="h3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                        {child.label}
                      </span>
                      <span className="max-w-[24ch] text-sm text-ink-soft">
                        {child.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {current.featured && (
              <div className="col-span-5 flex flex-col justify-between border-l border-line pl-8">
                <div>
                  <p className="eyebrow text-ink-soft">
                    {current.featured.eyebrow}
                  </p>
                  <p className="h3 mt-6 max-w-[16ch]">
                    {current.featured.title}
                  </p>
                </div>
                <Link
                  href={current.featured.href}
                  onClick={onNavigate}
                  className="group mt-12 inline-flex w-fit items-center gap-3 text-sm font-medium"
                >
                  {current.featured.cta}
                  <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
