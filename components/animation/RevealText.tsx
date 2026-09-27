"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ease } from "@/lib/animations/config";

type Mode = "line" | "word" | "char";

export function RevealText({
  text,
  mode = "line",
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 1,
  scrub = false,
  start = "top 85%",
  classNameInner = "",
}: {
  text: string;
  mode?: Mode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  classNameInner?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  scrub?: boolean;
  start?: string;
}) {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    // Scoped context so the tweens and their ScrollTriggers are reverted on
    // unmount instead of outliving the route.
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>("[data-reveal-item]", el);
      if (targets.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(targets, { yPercent: 0, opacity: 1, clearProps: "transform" });
        return;
      }

      if (scrub) {
        gsap.fromTo(targets, { yPercent: 110 }, {
          yPercent: 0,
          ease: ease.outExpo,
          stagger,
          scrollTrigger: { trigger: el, start, scrub: true },
        });
        return;
      }

      gsap.fromTo(targets, { yPercent: 110 }, {
        yPercent: 0,
        duration,
        delay,
        stagger,
        ease: ease.outExpo,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, duration, scrub, stagger, start]);

  const item = (children: React.ReactNode, key: React.Key) => (
    <span className="reveal-mask" key={key}>
      <span data-reveal-item className={classNameInner}>
        {children}
      </span>
    </span>
  );

  const content =
    mode === "line" ? (
      text.split("\n").map((line, i) => (
        <span className="reveal-line" key={i}>
          <span data-reveal-item className={classNameInner}>
            {line}
          </span>
        </span>
      ))
    ) : mode === "word" ? (
      text.split(" ").map((word, i) =>
        item(i === 0 ? word : `\u00A0${word}`, i),
      )
    ) : (
      Array.from(text).map((char, i) => item(char === " " ? "\u00A0" : char, i))
    );

  return (
    <Tag ref={root as never} className={className}>
      {content}
    </Tag>
  );
}

export function RevealOnScroll({
  children,
  className = "",
  y = 40,
  delay = 0,
  start = "top 88%",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(el, { clearProps: "opacity,visibility,transform" });
        return;
      }

      gsap.fromTo(el, { autoAlpha: 0, y }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: ease.outExpo,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, start, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
