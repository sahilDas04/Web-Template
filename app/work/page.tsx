import type { Metadata } from "next";
import Link from "next/link";
import { PageCta, PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { projects, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected infrastructure, energy, manufacturing and technology projects delivered by Northline.",
};

export default function WorkPage() {
  const grouped = projectCategories.map((category) => ({
    category,
    items: projects.filter((project) => project.category === category),
  }));

  return (
    <main id="main">
      <PageHero
        eyebrow="Work"
        index="03"
        title="Structures that outlast their headlines."
        intro="Every project here was delivered against a live constraint — an operating asset, a fixed budget, a city that could not stop. Those constraints are the point."
      />

      <Section>
        <SectionLabel index="01">Selected projects</SectionLabel>

        <ul className="mt-16">
          {projects.map((project) => (
            <li key={project.slug} className="border-t border-line">
              <RevealOnScroll y={40}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid gap-6 py-10 md:grid-cols-12 md:gap-8"
                >
                  <span className="eyebrow text-ink-soft md:col-span-1">
                    {project.index}
                  </span>
                  <h2 className="h3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-5">
                    {project.title}
                  </h2>
                  <p className="max-w-[40ch] text-ink-soft md:col-span-4">
                    {project.summary}
                  </p>
                  <span className="flex items-center gap-4 text-sm text-ink-soft md:col-span-2 md:justify-end">
                    <span className="md:text-right">
                      {project.location}
                      <br />
                      {project.year}
                    </span>
                    <Arrow className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      {grouped.map(({ category, items }, index) => (
        <Section
          key={category}
          id={category.toLowerCase()}
          className="border-t border-line"
        >
          <SectionLabel index={String(index + 2).padStart(2, "0")}>
            {category}
          </SectionLabel>

          <ul className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            {items.map((project) => (
              <li key={project.slug} className="bg-background p-8 md:p-10">
                <RevealOnScroll y={32}>
                  <span className="eyebrow text-ink-soft">{project.year}</span>
                  <h3 className="h3 mt-5">{project.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {project.summary}
                  </p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
                  >
                    View project
                    <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                  </Link>
                </RevealOnScroll>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <PageCta
        title="Your constraint is probably the interesting part."
        body="Most of the projects we are proudest of began with a problem somebody else had already decided was impossible."
        href="/contact"
        label="Start a conversation"
      />
    </main>
  );
}
