import type { Metadata } from "next";
import { PageCta, PageHero, Section } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/animation/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Sustainability, community and innovation — the measurable outcomes of Northline's work.",
};

const pillars = [
  {
    id: "sustainability",
    label: "Sustainability",
    title: "Decarbonising what we build",
    body: "Most embodied carbon in infrastructure is locked in at design stage, which means the only meaningful lever is designing for less material and longer life rather than offsetting what has already been poured.",
    points: [
      "Material-efficient design as a default specification",
      "Asset life extension prioritised over replacement",
      "Whole-life carbon tracked from feasibility, not retrofit",
    ],
  },
  {
    id: "community",
    label: "Community",
    title: "Work that reaches beyond the site",
    body: "A major programme occupies a neighbourhood for years. How that time is spent locally is an engineering decision as much as a social one, and we treat it as one.",
    points: [
      "Local procurement targets written into delivery contracts",
      "Skilled-trades apprenticeships on every major project",
      "Disruption managed around how the city actually moves",
    ],
  },
  {
    id: "innovation",
    label: "Innovation",
    title: "Research that reaches an operating asset",
    body: "Innovation programmes are easy to fund and hard to finish. We only commit to work with a defined path to a real deployment inside eighteen months.",
    points: [
      "Applied research with a named deployment partner",
      "Validation on live assets, not in laboratory conditions",
      "Findings published, including the inconvenient ones",
    ],
  },
];

export default function ImpactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Impact"
        index="04"
        title="Engineering a better future."
        intro="We would rather report a number we can defend than a commitment we cannot. What follows is what we have actually measured, and where we are behind."
        image="/images/pages/impact.jpg"
      />

      {pillars.map((pillar, index) => (
        <Section
          key={pillar.id}
          id={pillar.id}
          className={index > 0 ? "border-t border-line" : ""}
        >
          <SectionLabel index={String(index + 1).padStart(2, "0")}>
            {pillar.label}
          </SectionLabel>

          <div className="mt-16 grid gap-12 lg:grid-cols-12">
            <RevealOnScroll y={40} className="lg:col-span-6">
              <h2 className="h2 max-w-[16ch]">{pillar.title}</h2>
            </RevealOnScroll>

            <RevealOnScroll y={32} delay={0.08} className="lg:col-span-6">
              <p className="max-w-[52ch] text-lg leading-relaxed text-ink-soft">
                {pillar.body}
              </p>
              <ul className="mt-10 space-y-4">
                {pillar.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-4 border-t border-line pt-4 text-sm leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </Section>
      ))}

      <PageCta
        title="Ask us the hard question."
        body="If you want to know where we are behind, ask. We would rather have that conversation early than have it surface during an audit."
        href="/contact"
        label="Talk to us"
      />
    </main>
  );
}
