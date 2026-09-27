"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";
import type { NavItem } from "@/data/navigation";

const COLUMNS = 3;

export function MegaMenu({
  items,
  onOpenChange,
}: {
  items: NavItem[];
  onOpenChange: (open: boolean) => void;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  useEffect(() => () => cancelClose(), [cancelClose]);

  useEffect(() => {
    onOpenChange(open);
  }, [open, onOpenChange]);

  const show = (index: number) => {
    cancelClose();
    setActive(index);
    setOpen(true);
  };

  const close = useCallback(() => {
    cancelClose();
    setOpen(false);
    setActive(null);
  }, [cancelClose]);

  // Grace period so the pointer can travel from the trigger into the panel.
  const hide = () => {
    cancelClose();
    closeTimer.current = setTimeout(close, 120);
  };

  // Escape closes; focus leaving the subtree closes (keyboard users otherwise
  // have no way to dismiss the panel).
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const triggers = root.current?.querySelectorAll<HTMLAnchorElement>("[data-mega-trigger]");
      triggers?.[active ?? 0]?.focus();
      close();
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, active, close]);

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) close();
  };

  const current = active !== null ? items[active] : null;
  const children = current?.children ?? [];
  const columns = Array.from(
    { length: Math.min(COLUMNS, Math.max(children.length, 1)) },
    (_, i) => children.slice(i * 2, i * 2 + 2),
  );

  return (
    <div ref={root} className="relative" onMouseLeave={hide} onBlur={onBlur}>
      <ul className="flex items-center gap-7">
        {items.map((item, index) => (
          <li key={item.label}>
            <Link
              href={item.href}
              data-mega-trigger
              aria-expanded={open && active === index}
              onMouseEnter={() => show(index)}
              onFocus={() => show(index)}
              onClick={close}
              className="nav-link"
              data-active={open && active === index}
            >
              {item.label}
              {item.children && <span className="nav-caret" aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>

      {open && current && current.children && (
        <div
          className="mega-panel fixed inset-x-0 z-40 border-t border-white/10"
          style={{
            top: "var(--nav-active)",
            ["--mega-image" as string]: current.image
              ? `url(${current.image})`
              : "none",
          }}
        >
          <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-9">
            <div className="grid gap-8 md:grid-cols-12 md:gap-10">
              <p className="eyebrow text-white/50 md:col-span-2">
                {current.label}
              </p>

              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-3 md:col-span-7">
                {columns.map((column, i) => (
                  <ul key={i} className="space-y-1">
                    {column.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="mega-link"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>

              {current.featured && (
                <div className="border-white/15 md:col-span-3 md:border-l md:pl-8">
                  <p className="eyebrow text-white/50">
                    {current.featured.eyebrow}
                  </p>
                  <Link
                    href={current.featured.href}
                    onClick={close}
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent"
                  >
                    {current.featured.title}
                    <Arrow className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
