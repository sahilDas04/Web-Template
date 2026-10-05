import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";

export function Wordmark() {
  return (
    <span className="flex items-center gap-2 text-current">
      <Image
        src="/images/brand/navbar-logo.png"
        alt=""
        width={194}
        height={240}
        priority
        className="h-5 w-5 shrink-0 object-contain brightness-0 invert"
      />
      <span className="whitespace-nowrap text-xs font-semibold tracking-[0.14em] uppercase lg:text-sm lg:tracking-[0.18em]">
        Bhardwaj Constructions
      </span>
    </span>
  );
}

export function NavLinks() {
  return (
    <>
      {navigation.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className="nav-link">
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
