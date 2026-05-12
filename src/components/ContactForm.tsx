"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mlgzvdye", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#4ECDC4]/30 bg-[#F5F4FF] p-8 text-center">
        <div className="mb-4 text-3xl text-[#4ECDC4]">✓</div>
        <h3
          className="text-xl font-bold text-[#0D0D0F]"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Message received.
        </h3>
        <p className="mt-3 text-sm text-[#6B6A8F]">
          We will respond with clarity and care. Expect a reply within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-[#E5E4F0] bg-white p-6 shadow-[0_4px_24px_rgba(124,106,247,0.08)]"
    >
      <input
        name="name"
        className="rounded-xl border border-[#E5E4F0] bg-[#F5F4FF] px-4 py-3 text-sm text-[#0D0D0F] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors"
        placeholder="Name"
        required
      />
      <input
        name="email"
        className="rounded-xl border border-[#E5E4F0] bg-[#F5F4FF] px-4 py-3 text-sm text-[#0D0D0F] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors"
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="organisation"
        className="rounded-xl border border-[#E5E4F0] bg-[#F5F4FF] px-4 py-3 text-sm text-[#0D0D0F] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors"
        placeholder="Organisation"
      />
      <textarea
        name="message"
        className="min-h-36 rounded-xl border border-[#E5E4F0] bg-[#F5F4FF] px-4 py-3 text-sm text-[#0D0D0F] placeholder-[#9896B6] outline-none focus:border-[#7C6AF7] transition-colors resize-none"
        placeholder="How can Qualivio help?"
        required
      />

      {status === "error" && (
        <p className="text-center text-sm text-red-500">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:hello@qualiviopharma.com" className="underline">
            hello@qualiviopharma.com
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-[#7C6AF7] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#6a58e0] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(124,106,247,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {status === "loading" ? "Sending…" : "Request Consultation →"}
      </button>
    </form>
  );
}
