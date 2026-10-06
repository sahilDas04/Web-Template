import Link from "next/link";
import { RevealOnScroll } from "@/components/animation/RevealOnScroll";
import { Arrow } from "@/components/ui/Arrow";

const details = [
  {
    label: "Lets discuss about the project",
    value: "hello@bhardwajconstructions.example",
    href: "mailto:hello@bhardwajconstructions.example",
  },
  {
    label: "If you have any querry",
    value: "+91 80000 00000",
    href: "tel:+918000000000",
  },
];

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-brand-deep text-white">
      <div className="mx-auto w-full max-w-[1600px] px-[var(--gutter)] py-20 md:py-28">
        <RevealOnScroll y={36}>
          <span className="eyebrow text-white/50">Contact</span>
          <h2 className="h1 mt-6 max-w-[20ch]">
            Building better infrastructure starts with a conversation.
          </h2>
        </RevealOnScroll>

        <dl className="mt-14 grid gap-10 sm:grid-cols-3">
          {details.map((detail, index) => (
            <RevealOnScroll key={detail.label} y={24} delay={index * 0.06}>
              <div className="border-t border-white/20 pt-6">
                <dt className="eyebrow text-white/50">{detail.label}</dt>
                <dd className="mt-4">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="font-mono text-sm tracking-[0.06em] underline underline-offset-4 transition-opacity duration-300 hover:opacity-60"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm tracking-[0.06em]">
                      {detail.value}
                    </span>
                  )}
                </dd>
              </div>
            </RevealOnScroll>
          ))}
        </dl>

        <RevealOnScroll y={24} delay={0.12}>
          <Link
            href="/contact"
            className="group mt-14 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-accent hover:text-brand-deep"
          >
            Contact us
            <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
          </Link>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
