import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";

export function PageHero({
  eyebrow,
  index,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  index?: string;
  title: string;
  intro: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[58svh] flex-col justify-end overflow-hidden bg-brand-deep pt-[var(--nav-height)] text-white">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={78}
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-brand-deep/80 mix-blend-multiply"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_80%_at_72%_20%,#0d4a80_0%,#013253_48%,#011a2e_100%)]"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(1,26,46,0.92)_0%,rgba(1,26,46,0.35)_70%,rgba(1,26,46,0.5)_100%)]"
      />
      <div
        className="grain absolute inset-0 opacity-[0.14] mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] pt-20 pb-14 md:pb-20">
        <SectionLabel index={index} className="[&_*]:!text-white/65">
          {eyebrow}
        </SectionLabel>

        <RevealOnScroll y={36}>
          <h1 className="h1 mt-7 max-w-[20ch]">{title}</h1>
        </RevealOnScroll>

        <RevealOnScroll y={24} delay={0.08}>
          <p className="lead mt-7 max-w-[62ch] text-white/75">{intro}</p>
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
      className={`mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-20 md:py-32 ${className}`}
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
    <section className="bg-brand-deep text-white">
      <div className="mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-20 md:py-28">
        <RevealOnScroll y={36}>
          <h2 className="h1 max-w-[22ch]">{title}</h2>
        </RevealOnScroll>
        <div className="mt-9 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <RevealOnScroll y={24} delay={0.08}>
            <p className="lead max-w-[52ch] text-white/75">{body}</p>
          </RevealOnScroll>
          <RevealOnScroll y={24} delay={0.12}>
            <Link
              href={href}
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-accent hover:text-brand-deep"
            >
              {label}
              <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
