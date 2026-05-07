"use client";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#4ECDC4]/30 bg-[#1A1A1E] p-8 text-center">
        <div className="mb-4 text-2xl text-[#4ECDC4]">✓</div>
        <h3
          className="text-xl font-bold text-[#E8E6FF]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Message received.
        </h3>
        <p className="mt-3 text-sm text-[#9896B6]">
          We will respond with clarity and care. Expect a reply within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-[#2E2E36] bg-[#1A1A1E] p-6"
    >
      <input
        className="rounded-xl border border-[#2E2E36] bg-[#0D0D0F] px-4 py-3 text-sm text-[#E8E6FF] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors"
        placeholder="Name"
        required
      />
      <input
        className="rounded-xl border border-[#2E2E36] bg-[#0D0D0F] px-4 py-3 text-sm text-[#E8E6FF] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors"
        placeholder="Email"
        type="email"
        required
      />
      <input
        className="rounded-xl border border-[#2E2E36] bg-[#0D0D0F] px-4 py-3 text-sm text-[#E8E6FF] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors"
        placeholder="Organisation"
      />
      <textarea
        className="min-h-36 rounded-xl border border-[#2E2E36] bg-[#0D0D0F] px-4 py-3 text-sm text-[#E8E6FF] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors resize-none"
        placeholder="How can Qualivio help?"
        required
      />
      <button
        type="submit"
        className="rounded-full bg-[#7C6AF7] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5 shadow-[0_0_24px_rgba(124,106,247,0.25)]"
      >
        Request Consultation →
      </button>
    </form>
  );
}
