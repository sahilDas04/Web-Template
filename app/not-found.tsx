import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(110%_80%_at_70%_20%,#2b2b2a_0%,#161615_45%,#0a0a0a_100%)]"
      />
      <div className="grain absolute inset-0 opacity-[0.15] mix-blend-overlay" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] pt-[var(--nav-height)] py-32">
        <p className="eyebrow text-white/60">Error 404</p>
        <h1 className="h1 mt-10 max-w-[14ch]">
          The page
          <br />
          disappeared.
        </h1>
        <p className="mt-12 max-w-[46ch] text-base leading-relaxed text-white/70 md:text-lg">
          The address you followed does not exist, or the page has moved. Both
          happen more than they should.
        </p>
        <Link
          href="/"
          className="group mt-12 inline-flex w-fit items-center gap-4 border-b border-white/30 pb-2 text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
        >
          Return home
          <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5" />
        </Link>
      </div>
    </main>
  );
}
