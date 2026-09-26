import type { Metadata } from "next";
import Link from "next/link";
import { PageCta, PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Arrow";
import { stories } from "@/data/stories";
import { formatDateShort } from "@/lib/utils/date";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "News, stories and reports from Northline on engineering, industrial technology and infrastructure.",
};

export default function InsightsPage() {
  const [featured, ...rest] = stories;

  return (
    <main id="main">
      <PageHero
        eyebrow="Insights"
        index="06"
        title="News & stories."
        intro="What we have learned on live assets, written by the engineers who were there. Occasionally we publish findings that do not reflect well on us."
      />

      <Section>
        <SectionLabel index="01">Latest</SectionLabel>

        <Link
          href={`/insights/${featured.slug}`}
          className="group mt-16 grid gap-8 border-t border-line pt-10 lg:grid-cols-12"
        >
          <RevealOnScroll y={40} className="lg:col-span-7">
            <span className="eyebrow text-ink-soft">{featured.category}</span>
            <h2 className="h2 mt-6 max-w-[18ch] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
              {featured.title}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll y={32} delay={0.08} className="lg:col-span-5">
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink-soft">
              {featured.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-6 text-sm text-ink-soft">
              <time dateTime={featured.date} className="font-mono tracking-[0.14em]">
                {formatDateShort(featured.date)}
              </time>
              <span>{featured.readTime}</span>
              <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
            </div>
          </RevealOnScroll>
        </Link>

        <ul className="mt-20">
          {rest.map((story) => (
            <li key={story.slug} className="border-t border-line">
              <RevealOnScroll y={28}>
                <Link
                  href={`/insights/${story.slug}`}
                  className="group grid gap-4 py-8 transition-colors duration-300 hover:bg-accent/20 md:grid-cols-12 md:gap-8"
                >
                  <time
                    dateTime={story.date}
                    className="font-mono text-xs tracking-[0.16em] text-ink-soft md:col-span-2"
                  >
                    {formatDateShort(story.date)}
                  </time>
                  <h3 className="h3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 md:col-span-6">
                    {story.title}
                  </h3>
                  <span className="eyebrow flex items-center justify-between text-ink-soft md:col-span-4 md:justify-end">
                    {story.category}
                    <Arrow className="ml-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      <PageCta
        title="Have something we should be arguing about?"
        body="We publish what we learn, including the parts that did not work. If you disagree with it, we would genuinely like to know."
        href="/contact"
        label="Get in touch"
      />
    </main>
  );
}
