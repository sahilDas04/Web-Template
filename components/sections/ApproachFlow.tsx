"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ease, stagger } from "@/lib/animations/config";

type Principle = {
  index: string;
  title: string;
  description: string;
};

const NODE =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-sm font-semibold tracking-[0.08em] md:h-14 md:w-14";

const RAIL =
  "w-px flex-1 border-l border-dashed border-line lg:h-px lg:origin-left lg:border-t lg:border-l-0";

/* `non-scaling-stroke` pins the weight to the viewport, so the arrow carries the
   same 3px line at a 24px mobile box and a 40px desktop one instead of looking
   hairline on small screens and blunt on large. */
function FlowArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      data-arrow
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`flow-arrow ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M3 12h17M14 6l6 6-6 6" />
    </svg>
  );
}

export function ApproachFlow({ principles }: { principles: Principle[] }) {
  const root = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    /* GSAP owns the arrow's rotation rather than a CSS `rotate` utility: those
       write to different properties, and a rotation GSAP reads out of the
       computed style gets baked into its inline `transform`, where it survives a
       resize back into the horizontal layout. Direction follows the same axis
       decision as the rail — down the rail on small screens, across the columns
       on large ones. */
    const build = (axis: "x" | "y", start: string) => {
      const rotation = axis === "x" ? 0 : 90;

      const ctx = gsap.context(() => {
        gsap.set("[data-arrow]", { rotation, x: 0, y: 0 });

        if (prefersReducedMotion()) return;

        gsap
          .timeline({ scrollTrigger: { trigger: el, start, once: true } })
          .fromTo(
            "[data-node]",
            { autoAlpha: 0, scale: 0.7 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: 0.7,
              ease: ease.outExpo,
              stagger: stagger.base,
            },
          )
          .fromTo(
            "[data-rail]",
            axis === "x" ? { scaleX: 0 } : { scaleY: 0 },
            {
              ...(axis === "x" ? { scaleX: 1 } : { scaleY: 1 }),
              duration: 0.6,
              ease: ease.outExpo,
              stagger: stagger.tight,
            },
            0.5,
          )
          .fromTo(
            "[data-arrow]",
            {
              autoAlpha: 0,
              scale: 0.5,
              rotation,
              ...(axis === "x" ? { x: -22 } : { y: -22 }),
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation,
              duration: 0.7,
              ease: ease.outBack,
              stagger: stagger.tight,
            },
            0.72,
          )
          .fromTo(
            "[data-body]",
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: ease.outExpo,
              stagger: stagger.tight,
            },
            0.35,
          );
      }, el);

      return () => ctx.revert();
    };

    mm.add("(min-width: 1024px)", () => build("x", "top 80%"));
    mm.add("(max-width: 1023px)", () => build("y", "top 85%"));

    return () => mm.revert();
  }, []);

  return (
    <ol
      ref={root}
      className="mt-24 flex flex-col lg:grid lg:grid-cols-4 lg:gap-x-6 lg:gap-y-10"
    >
      {principles.map((principle, index) => {
        const last = index === principles.length - 1;

        return (
          /* Node, body and connector are all direct children so `order` can
             put the connector under the block on small screens and back
             between node and body once the steps sit side by side. */
          <li
            key={principle.index}
            className="flex flex-col items-center gap-5 text-center lg:gap-0"
          >
            <span
              data-node
              className={`${NODE} lg:self-center ${
                last
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-background text-ink"
              }`}
            >
              {principle.index}
            </span>

            <div
              data-body
              className="order-2 w-full max-w-[42ch] lg:order-3 lg:mt-7 lg:max-w-[26ch] lg:self-center"
            >
              <h3 className="h3">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {principle.description}
              </p>
            </div>

            {!last && (
              <span
                aria-hidden="true"
                className="order-3 flex h-20 w-full flex-col items-center lg:order-2 lg:ml-auto lg:h-auto lg:w-1/2 lg:flex-row"
              >
                <span data-rail className={RAIL} />
                <FlowArrow className="my-1 h-6 w-6 shrink-0 text-brand lg:my-0 lg:h-10 lg:w-10" />
                <span
                  data-rail
                  className={`hidden lg:block ${RAIL}`}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}