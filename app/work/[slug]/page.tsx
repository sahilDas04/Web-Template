import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageCta, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const related = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <main id="main">
      <section className="relative flex min-h-[80svh] flex-col justify-end bg-ink pt-[var(--nav-height)] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(110%_80%_at_70%_18%,#2b2b2a_0%,#161615_45%,#0a0a0a_100%)]"
        />
        <div className="grain absolute inset-0 opacity-[0.15] mix-blend-overlay" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] pt-24 pb-20 md:pb-28">
          <SectionLabel className="[&_*]:!text-white/60">
            {project.index} — {project.category}
          </SectionLabel>

          <RevealOnScroll y={48}>
            <h1 className="h1 mt-10 max-w-[16ch]">{project.title}</h1>
          </RevealOnScroll>

          <RevealOnScroll y={32} delay={0.1}>
            <p className="mt-12 max-w-[56ch] text-base leading-relaxed text-white/70 md:text-lg">
              {project.summary}
            </p>
          </RevealOnScroll>

          <dl className="mt-16 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
            {[
              { label: "Location", value: project.location },
              { label: "Year", value: project.year },
              { label: "Category", value: project.category },
            ].map((item) => (
              <div key={item.label}>
                <dt className="eyebrow text-white/50">{item.label}</dt>
                <dd className="mt-3 text-lg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-5">
            <h2 className="h3">The challenge</h2>
          </RevealOnScroll>
          <RevealOnScroll y={32} delay={0.08} className="lg:col-span-7">
            <p className="max-w-[60ch] text-lg leading-relaxed text-ink-soft">
              {project.challenge}
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-24 grid gap-12 border-t border-line pt-16 lg:grid-cols-12">
          <RevealOnScroll y={40} className="lg:col-span-5">
            <h2 className="h3">The approach</h2>
          </RevealOnScroll>
          <RevealOnScroll y={32} delay={0.08} className="lg:col-span-7">
            <p className="max-w-[60ch] text-lg leading-relaxed text-ink-soft">
              {project.approach}
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionLabel index="01">Scope</SectionLabel>
        <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {project.scope.map((item, index) => (
            <li key={item} className="bg-background p-8">
              <RevealOnScroll y={28} delay={index * 0.05}>
                <span className="eyebrow text-ink-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-lg leading-snug">{item}</p>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-ink text-white">
        <div className="mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-24 md:py-32">
          <SectionLabel index="02" className="[&_*]:!text-white/60">
            Outcomes
          </SectionLabel>
          <dl className="mt-16 grid gap-12 sm:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <RevealOnScroll key={metric.label} y={36} delay={index * 0.06}>
                <div className="border-t border-white/20 pt-8">
                  <dt className="h1 tabular-nums">{metric.value}</dt>
                  <dd className="eyebrow mt-4 text-white/60">{metric.label}</dd>
                </div>
              </RevealOnScroll>
            ))}
          </dl>
        </div>
      </section>

      <Section className="border-b border-line">
        <SectionLabel index="03">Related work</SectionLabel>
        <ul className="mt-14">
          {related.map((item) => (
            <li key={item.slug} className="border-t border-line">
              <Link
                href={`/work/${item.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="eyebrow text-ink-soft md:col-span-1">
                  {item.index}
                </span>
                <span className="h3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-6">
                  {item.title}
                </span>
                <span className="flex items-center justify-between text-sm text-ink-soft md:col-span-5">
                  {item.location}
                  <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <PageCta
        title="Have a constraint like this one?"
        body="The hard part is usually the part that is still true after three years of operation. That is the part we are good at."
        href="/contact"
        label="Start a conversation"
      />
    </main>
  );
}
