"use client";
import Link from "next/link";
import { useState } from "react";
import { QMark } from "@/components/QMark";
import { navItems, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2E2E36] bg-[#0D0D0F]/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Qualivio home">
          <span className="flex items-center text-white group-hover:text-[#4ECDC4] transition-colors duration-200">
            <QMark size={58} />
          </span>
          <span
            className="text-4xl font-medium text-[#E8E6FF] tracking-tight"
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
              className="text-lg font-medium text-[#9896B6] transition-colors hover:text-[#E8E6FF]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qualivio on LinkedIn"
            className="flex items-center justify-center rounded-full border border-[#2E2E36] p-2.5 text-[#9896B6] transition-all hover:border-[#7C6AF7] hover:text-[#E8E6FF]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-[#7C6AF7] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5"
          >
            Consultation
          </Link>
        </div>

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
