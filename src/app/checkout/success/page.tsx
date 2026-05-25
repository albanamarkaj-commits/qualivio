import type { Metadata } from "next";
import Link from "next/link";
import { resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Thank you for your purchase",
  robots: { index: false, follow: false },
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ dl?: string; r?: string }>;
}) {
  const { dl, r } = await searchParams;
  const resource = r ? resources.find((x) => x.id === r) : null;
  const downloadUrl = dl ? `/api/download/${dl}` : null;
  const filename =
    resource?.file?.split("/").pop() ?? "qualivio-download.pdf";

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-[#4ECDC4]/8 blur-[100px]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#4ECDC4]">
          Payment received
        </p>
        <h1
          className="text-4xl font-bold leading-tight text-[#0D0D0F] sm:text-5xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Thank you for your purchase.
        </h1>
        <div className="mx-auto mt-6 flex items-center justify-center gap-2">
          <div className="h-px w-6 bg-[#F7B731]" />
          <div className="h-px w-10 bg-[#7C6AF7]" />
        </div>

        {resource && (
          <p className="mx-auto mt-6 max-w-lg text-base leading-8 text-[#6B6A8F]">
            Your copy of <strong className="text-[#0D0D0F]">{resource.title}</strong>{" "}
            is ready below. We&apos;ve also emailed a personal download link to your
            inbox so you can come back to it later. The link is valid for 7 days.
          </p>
        )}

        {downloadUrl ? (
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={downloadUrl}
              download={filename}
              className="inline-flex items-center gap-2 rounded-full bg-[#7C6AF7] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a58e6]"
            >
              Download your guide →
            </a>
            <Link
              href="/resources"
              className="text-xs font-semibold text-[#6B6A8F] hover:text-[#7C6AF7]"
            >
              Back to resources
            </Link>
          </div>
        ) : (
          <div className="mt-10">
            <p className="text-sm text-[#6B6A8F]">
              Your download link is on its way to your inbox. If it doesn&apos;t
              arrive within a few minutes, please reply to the receipt email
              and we&apos;ll resend it.
            </p>
            <Link
              href="/resources"
              className="mt-6 inline-block text-xs font-semibold text-[#6B6A8F] hover:text-[#7C6AF7]"
            >
              Back to resources
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
