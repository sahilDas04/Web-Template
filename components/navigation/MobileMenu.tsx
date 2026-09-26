"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ease } from "@/lib/animations/config";
import { navigation, utilityLinks } from "@/data/navigation";
import { getLenis } from "@/components/providers/SmoothScrollProvider";
import { Wordmark } from "@/components/navigation/NavLinks";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = "mobile-menu";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const lenis = getLenis();
    lenis?.stop();
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  useLayoutEffect(() => {
    const el = panelRef.current;

    if (!open) {
      if (el) gsap.set(el, { autoAlpha: 0, y: -20 });
      return;
    }

    if (prefersReducedMotion()) {
      if (el) gsap.set(el, { autoAlpha: 1, y: 0 });
      return;
    }

    if (!el) return;

    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: ease.outExpo,
    });
  }, [open]);

  if (!open) return null;

  return (
    <div
      id={panelId}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-background lg:hidden"
    >
      <div className="flex h-[var(--nav-height)] shrink-0 items-center justify-between px-[var(--gutter)]">
        <Link href="/" onClick={onClose} aria-label="Northline — home">
          <Wordmark />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="-mr-2 p-2"
          aria-label="Close menu"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M4 4l16 16M20 4L4 20" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 px-[var(--gutter)] pt-8 pb-16" aria-label="Mobile">
        <ul className="space-y-2">
          {navigation.map((item, index) => (
            <li key={item.label} className="border-b border-line">
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-baseline gap-5 py-5"
              >
                <span className="eyebrow text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {utilityLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="text-[0.8125rem] font-medium tracking-[0.14em] uppercase"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
