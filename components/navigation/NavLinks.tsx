import Link from "next/link";
import { navigation, utilityLinks } from "@/data/navigation";

export function Wordmark() {
  return (
    <span className="flex items-center gap-2 text-current">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M3 20V4l9 9 9-9v16" strokeLinecap="square" />
      </svg>
      <span className="text-sm font-semibold tracking-[0.18em] uppercase">
        Northline
      </span>
    </span>
  );
}

export function NavLinks() {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="relative text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-opacity duration-300 hover:opacity-60"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}

export function UtilityLinks() {
  return (
    <>
      {utilityLinks.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="text-[0.8125rem] font-medium tracking-[0.14em] uppercase transition-opacity duration-300 hover:opacity-60"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
