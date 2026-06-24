import Link from "next/link";
import { QMark } from "@/components/QMark";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#2E2E36] bg-[#0D0D0F] px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-white">
              <QMark size={28} />
            </span>
            <span
              className="text-xl font-medium text-[#E8E6FF]"
              style={{ fontFamily: "var(--font-wordmark)" }}
            >
              Qualivio
            </span>
          </div>
          <div className="mt-3 h-0.5 w-10 bg-[#F7B731]" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#9896B6]">
            {site.tagline} Pharmacovigilance education, consulting, and
            practical resources for life sciences professionals.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-block text-sm text-[#4ECDC4] hover:text-[#7C6AF7] transition-colors"
          >
            {site.email}
          </a>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9896B6]">Navigate</p>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[#9896B6] transition-colors hover:text-[#E8E6FF]"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="text-sm text-[#9896B6] transition-colors hover:text-[#E8E6FF]">
              Contact
            </Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9896B6]">Connect</p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-fit rounded-full border border-[#2E2E36] px-4 py-2 text-sm font-medium text-[#9896B6] transition-all hover:border-[#7C6AF7] hover:text-[#E8E6FF]"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-[#9896B6] transition-colors hover:text-[#E8E6FF]"
            >
              {site.email}
            </a>
          </div>
          <p className="mt-6 flex flex-wrap gap-x-[0.85em] text-xs leading-6 text-[#9896B6]">
            <span className="whitespace-nowrap">
              Pharmacovigilance<span className="mx-[0.5em]">·</span>Quality Assurance
            </span>
            <span className="whitespace-nowrap">
              <span className="mr-[0.85em] opacity-75">|</span>Life Sciences
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-[#2E2E36] pt-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-[#9896B6]">
          © {new Date().getFullYear()} Qualivio. All rights reserved.
        </p>
        <p className="text-xs text-[#9896B6]">
          <a href={site.url} className="hover:text-[#F7B731] transition-colors">
            www.qualiviopharma.com
          </a>
        </p>
      </div>
    </footer>
  );
}
