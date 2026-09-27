"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navigation, utilityLinks } from "@/data/navigation";
import { getLenis } from "@/components/providers/SmoothScrollProvider";
import { Wordmark } from "@/components/navigation/NavLinks";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = "mobile-menu";

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      // The panel is a modal dialog, so focus must not escape it.
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);

      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === panel)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      lenis?.start();
      document.body.style.overflow = previousOverflow;
    };
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
      className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-brand-deep text-white focus:outline-none lg:hidden"
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

      <nav className="flex-1 px-[var(--gutter)] pt-6 pb-16" aria-label="Mobile">
        <ul>
          {navigation.map((item, index) => (
            <li key={item.label} className="border-t border-white/15">
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-baseline gap-4 py-4"
              >
                <span className="eyebrow text-white/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h2">{item.label}</span>
              </Link>

              {item.children && (
                <ul className="pb-4 pl-9 sm:pl-12">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onClose}
                        className="block py-1.5 text-sm text-white/70 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-8">
          {utilityLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="eyebrow text-white/70 hover:text-accent"
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
