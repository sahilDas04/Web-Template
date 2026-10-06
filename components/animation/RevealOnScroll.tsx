"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ease } from "@/lib/animations/config";

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

    // Scoped context so the tween and its ScrollTrigger are reverted on
    // unmount instead of outliving the route.
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
