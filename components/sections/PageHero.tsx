import Link from "next/link";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";

export function PageHero({
  eyebrow,
  index,
  title,
  intro,
}: {
  eyebrow: string;
  index?: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative flex min-h-[78svh] flex-col justify-end bg-ink pt-[var(--nav-height)] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(110%_80%_at_72%_20%,#2b2b2a_0%,#161615_45%,#0a0a0a_100%)]"
      />
      <div className="grain absolute inset-0 opacity-[0.15] mix-blend-overlay" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] pt-24 pb-20 md:pb-28">
        <SectionLabel index={index} className="[&_*]:!text-white/60">
          {eyebrow}
        </SectionLabel>

        <RevealOnScroll y={48}>
          <h1 className="h1 mt-10 max-w-[16ch]">{title}</h1>
        </RevealOnScroll>

        <RevealOnScroll y={32} delay={0.1}>
          <p className="mt-12 max-w-[56ch] text-base leading-relaxed text-white/70 md:text-lg">
            {intro}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-24 md:py-40 ${className}`}
    >
      {children}
    </section>
  );
}

export function PageCta({
  title,
  body,
  href,
  label,
}: {
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-24 md:py-40">
        <RevealOnScroll y={48}>
          <h2 className="h1 max-w-[18ch]">{title}</h2>
        </RevealOnScroll>
        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <RevealOnScroll y={32} delay={0.08}>
            <p className="max-w-[46ch] text-base leading-relaxed text-white/70">
              {body}
            </p>
          </RevealOnScroll>
          <RevealOnScroll y={32} delay={0.14}>
            <Link
              href={href}
              className="group inline-flex w-fit items-center gap-4 border-b border-white/30 pb-2 text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {label}
              <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
