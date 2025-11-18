"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/consulting", label: "Software Consulting" },
  { href: "/apps", label: "Apps" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          WhyLearn
        </Link>

        <nav className="hidden gap-4 text-sm text-slate-600 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1 font-medium transition ${
                  isActive ? "bg-slate-900 text-white" : "hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/consulting#contact"
          className="hidden rounded-full border border-slate-900 px-4 py-1.5 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 md:inline-flex"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}
