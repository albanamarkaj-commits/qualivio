import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
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
    default: "Qualivio | Pharmacovigilance & Life Sciences Education",
    template: "%s | Qualivio",
  },
  description:
    "Trusted insights, education and consulting for pharmacovigilance, drug safety, and life sciences professionals.",
  keywords: [
    "Qualivio",
    "Pharmacovigilance",
    "Drug Safety",
    "Life Sciences",
    "Regulatory Affairs",
    "PV Education",
    "Clinical Quality",
    "Consulting",
  ],
  openGraph: {
    title: "Qualivio",
    description:
      "Trusted insights, education and consulting for pharmacovigilance, drug safety, and life sciences professionals.",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-[#0D0D0F] text-[#E8E6FF] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
