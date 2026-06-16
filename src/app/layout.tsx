import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Display font for headings, titles, and eyebrows. Restored to Space
// Grotesk after the Sora trial â€” Sora is reserved exclusively for the
// "Qualivio" wordmark.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

// Wordmark-only font. Loaded at Medium (500) to match the MP4 intro
// and LinkedIn banner. Referenced via --font-wordmark and applied only
// to the "Qualivio" text in the Header and Footer.
const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-wordmark",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      className={`${spaceGrotesk.variable} ${sora.variable} ${dmSans.variable} h-full`}
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

