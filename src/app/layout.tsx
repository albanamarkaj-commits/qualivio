import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Brand display font: Sora, loaded at Medium (500) for the wordmark
// and Bold (700) for headings. The CSS variable is kept generic so
// references across the codebase don't need a rename if we ever swap
// the underlying family again.
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qualiviopharma.com"),
  title: {
    default: "Qualivio | Pharmacovigilance Education & Consulting",
    template: "%s | Qualivio",
  },
  description:
    "Clear thinking for complex regulations. Pharmacovigilance education, consulting, and practical resources for life sciences professionals.",
  keywords: [
    "Qualivio",
    "Pharmacovigilance",
    "Life Sciences",
    "Life Sciences",
    "PV Education",
    "Consulting",
  ],
  openGraph: {
    title: "Qualivio",
    description:
      "Clear thinking for complex regulations. Pharmacovigilance education and consulting for life sciences professionals.",
    url: "https://www.qualiviopharma.com",
    siteName: "Qualivio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#0D0D0F] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
