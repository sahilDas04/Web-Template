import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { stories } from "@/data/stories";
import { formatDate } from "@/lib/utils/date";

type Params = { slug: string };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) return { title: "Story not found" };

  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      type: "article",
      title: story.title,
      description: story.excerpt,
      publishedTime: story.date,
    },
  };
}

export default async function StoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) notFound();

  const related = stories
    .filter((item) => item.slug !== story.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    datePublished: story.date,
    author: { "@type": "Organization", name: "Northline" },
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article>
        <section className="relative flex min-h-[54svh] flex-col justify-end overflow-hidden bg-brand-deep pt-[var(--nav-height)] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(110%_80%_at_70%_18%,#0d4a80_0%,#013253_48%,#011a2e_100%)]"
          />
          <div className="grain absolute inset-0 opacity-[0.14] mix-blend-overlay" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] pt-20 pb-14 md:pb-20">
            <SectionLabel className="[&_*]:!text-white/65">
              {story.category}
            </SectionLabel>

            <RevealOnScroll y={36}>
              <h1 className="h1 mt-7 max-w-[24ch]">{story.title}</h1>
            </RevealOnScroll>

            <RevealOnScroll y={24} delay={0.08}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
                <time dateTime={story.date} className="font-mono tracking-[0.14em]">
                  {formatDate(story.date)}
                </time>
                <span>{story.readTime} read</span>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <Section>
          <div className="mx-auto max-w-[70ch]">
            <RevealOnScroll y={32}>
              <p className="h3 leading-tight">{story.excerpt}</p>
            </RevealOnScroll>

            <div className="mt-12 space-y-7">
              {story.body.map((paragraph, index) => (
                <RevealOnScroll key={index} y={28} delay={0.04}>
                  <p className="text-base leading-relaxed text-ink-soft">
                    {paragraph}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>
      </article>

      <Section className="border-t border-line">
        <SectionLabel>Related stories</SectionLabel>
        <ul className="mt-14">
          {related.map((item) => (
            <li key={item.slug} className="border-t border-line">
              <Link
                href={`/insights/${item.slug}`}
                className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <time
                  dateTime={item.date}
                  className="font-mono text-xs tracking-[0.16em] text-ink-soft md:col-span-2"
                >
                  {formatDate(item.date)}
                </time>
                <span className="h3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-7">
                  {item.title}
                </span>
                <span className="flex items-center justify-end text-ink-soft md:col-span-3">
                  <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
