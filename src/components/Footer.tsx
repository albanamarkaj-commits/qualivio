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
              className="text-xl font-bold text-[#E8E6FF]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
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
              className="text-sm text-[#9896B6] transition-colors hover:text-[#E8E6FF]"
            >
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
