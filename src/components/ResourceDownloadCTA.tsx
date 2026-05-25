"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  /** Stable resource id from data/resources.ts */
  resourceId: string;
  title: string;
  /** "Free" or display price like "$39". */
  price: string;
  /** Path within /private/resources/, used only to derive a sensible filename for free downloads. */
  file: string;
};

type Status = "idle" | "submitting" | "error";

export function ResourceDownloadCTA({ resourceId, title, price, file }: Props) {
  const isFree = price === "Free";

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyPosition, setCompanyPosition] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    setStatus("idle");
    setError(null);
  }

  function triggerDownload(url: string) {
    const a = document.createElement("a");
    a.href = url;
    a.download = file.split("/").pop() ?? "";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    if (isFree) {
      // Free flow: existing email-gated download.
      try {
        const res = await fetch("/api/resource-download", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            companyPosition,
            resource: title,
          }),
        });
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
          downloadUrl?: string;
        };
        if (!res.ok) {
          setStatus("error");
          setError(data.error ?? "Something went wrong. Please try again.");
          return;
        }
        if (data.downloadUrl) {
          triggerDownload(data.downloadUrl);
        }
        close();
        setFirstName("");
        setLastName("");
        setEmail("");
        setCompanyPosition("");
      } catch {
        setStatus("error");
        setError("Network error. Please try again.");
      }
      return;
    }

    // Paid flow: create Stripe Checkout Session and redirect.
    try {
      const res = await fetch("/api/checkout/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          companyPosition,
          resourceId,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        url?: string;
      };
      if (!res.ok || !data.url) {
        setStatus("error");
        setError(data.error ?? "Could not start checkout. Please try again.");
        return;
      }
      // Full-page navigate to Stripe Checkout
      window.location.href = data.url;
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  }

  const inputClasses =
    "mt-2 w-full rounded-lg border border-[#E5E4F0] bg-white px-4 py-3 text-sm text-[#0D0D0F] outline-none focus:border-[#7C6AF7] focus:ring-2 focus:ring-[#7C6AF7]/20";

  const ctaLabel = isFree ? "Download →" : `Buy ${price} →`;
  const eyebrowLabel = isFree ? "Free Download" : `Purchase — ${price}`;
  const submitLabel = isFree
    ? status === "submitting"
      ? "Sending..."
      : "Download PDF"
    : status === "submitting"
      ? "Redirecting..."
      : `Continue to payment — ${price}`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-block text-xs font-semibold text-[#4ECDC4] hover:text-[#7C6AF7] transition-colors"
      >
        {ctaLabel}
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="dl-title"
          onClick={close}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#0D0D0F]/75"
        >
          <div className="flex min-h-full justify-center p-4">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
            >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 text-[#6B6A8F] hover:text-[#0D0D0F] text-xl leading-none"
            >
              ×
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F7B731]">
              {eyebrowLabel}
            </p>
            <h3
              id="dl-title"
              className="mt-2 text-xl font-bold text-[#0D0D0F]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#6B6A8F]">
              {isFree
                ? "Enter your details to access this resource. We'll send you the file right away."
                : "Enter your details and we'll take you to a secure Stripe checkout to complete the purchase."}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="dl-first-name"
                  className="block text-xs font-semibold text-[#0D0D0F]"
                >
                  First Name <span className="text-[#7C6AF7]">*</span>
                </label>
                <input
                  id="dl-first-name"
                  type="text"
                  required
                  autoFocus
                  autoComplete="given-name"
                  enterKeyHint="next"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Jane"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="dl-last-name"
                  className="block text-xs font-semibold text-[#0D0D0F]"
                >
                  Last Name <span className="text-[#7C6AF7]">*</span>
                </label>
                <input
                  id="dl-last-name"
                  type="text"
                  required
                  autoComplete="family-name"
                  enterKeyHint="next"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="dl-email"
                  className="block text-xs font-semibold text-[#0D0D0F]"
                >
                  Email <span className="text-[#7C6AF7]">*</span>
                </label>
                <input
                  id="dl-email"
                  type="email"
                  required
                  autoComplete="email"
                  enterKeyHint="next"
                  inputMode="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="dl-company-position"
                  className="block text-xs font-semibold text-[#0D0D0F]"
                >
                  Company &amp; Position <span className="font-normal text-[#9896B6]">(optional)</span>
                </label>
                <input
                  id="dl-company-position"
                  type="text"
                  autoComplete="organization-title"
                  enterKeyHint="send"
                  value={companyPosition}
                  onChange={(e) => setCompanyPosition(e.target.value)}
                  placeholder="PV Manager at Acme Pharma"
                  className={inputClasses}
                />
              </div>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full rounded-full bg-[#7C6AF7] py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#6a58e6] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitLabel}
              </button>

              {!isFree && (
                <p className="text-[11px] leading-5 text-[#9896B6] text-center">
                  Secured by Stripe. Your card details never touch our servers.
                </p>
              )}
            </form>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
