import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-brand-deep text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(110%_80%_at_70%_20%,#0d4a80_0%,#013253_48%,#011a2e_100%)]"
      />
      <div className="grain absolute inset-0 opacity-[0.14] mix-blend-overlay" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1600px] px-[var(--gutter)] pt-[var(--nav-height)] py-28">
        <p className="eyebrow text-white/65">Error 404</p>
        <h1 className="h1 mt-7 max-w-[16ch]">
          The page
          <br />
          disappeared.
        </h1>
        <p className="lead mt-9 max-w-[52ch] text-white/75">
          The address you followed does not exist, or the page has moved. Both
          happen more than they should.
        </p>
        <Link
          href="/"
          className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-accent"
        >
          Return home
          <Arrow className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
}
