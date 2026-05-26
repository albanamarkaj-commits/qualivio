"use client";
import Link from "next/link";
import { useState } from "react";
import { QMark } from "@/components/QMark";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2E2E36] bg-[#0D0D0F]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Qualivio home">
          <span className="text-white group-hover:text-[#4ECDC4] transition-colors duration-200">
            <QMark size={32} />
          </span>
          <span
            className="text-xl font-medium text-[#E8E6FF] tracking-tight"
            style={{ fontFamily: "var(--font-wordmark)" }}
          >
            Qualivio
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#9896B6] transition-colors hover:text-[#E8E6FF]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-[#7C6AF7] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5 md:inline-flex"
        >
          Consultation
        </Link>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#E8E6FF] transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#E8E6FF] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#E8E6FF] transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-[#2E2E36] bg-[#1A1A1E] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#9896B6] hover:text-[#E8E6FF]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 w-fit rounded-full bg-[#7C6AF7] px-5 py-2.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
