import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getStripe } from "@/lib/stripe";
import { resources } from "@/data/resources";
import { createDownloadToken } from "@/lib/download-tokens";

export const runtime = "nodejs";

const DOWNLOAD_TTL_DAYS = 7;
const SITE_URL = process.env.SITE_URL ?? "https://www.qualiviopharma.com";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function leadNotificationHtml(p: {
  resource: string;
  firstName: string;
  lastName: string;
  email: string;
  companyPosition: string;
  amount: string;
  sessionId: string;
}) {
  const fullName = `${p.firstName} ${p.lastName}`.trim();
  return `
    <h2 style="font-family:system-ui,sans-serif">New paid order</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#666">Resource</td><td style="padding:6px 12px"><strong>${esc(p.resource)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Amount</td><td style="padding:6px 12px"><strong>${esc(p.amount)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Name</td><td style="padding:6px 12px"><strong>${esc(fullName)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px"><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Company &amp; Position</td><td style="padding:6px 12px">${esc(p.companyPosition) || "—"}</td></tr>
      <tr><td style="padding:6px 12px;color:#666">Stripe Session</td><td style="padding:6px 12px;color:#999;font-family:monospace;font-size:12px">${esc(p.sessionId)}</td></tr>
    </table>
  `;
}

function visitorReceiptHtml(p: {
  resource: string;
  firstName: string;
  downloadUrl: string;
  amount: string;
}) {
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#0D0D0F">
      <h1 style="font-size:24px;margin:0 0 8px;line-height:1.3">Thank you for your purchase!</h1>
      <p style="font-size:15px;line-height:1.6;color:#555;margin:0 0 16px">
        Hi ${esc(p.firstName)},
      </p>
      <p style="font-size:15px;line-height:1.6;color:#555;margin:0 0 24px">
        Your copy of <strong>${esc(p.resource)}</strong> is ready. Use the
        button below to download. This link is valid for 7 days and is
        unique to your purchase.
      </p>
      <p style="margin:24px 0">
        <a href="${p.downloadUrl}"
           style="background:#7C6AF7;color:#ffffff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:600;font-size:14px;display:inline-block">
          Download your guide →
        </a>
      </p>
      <p style="font-size:13px;line-height:1.6;color:#999;margin:0 0 24px">
        Amount charged: ${esc(p.amount)}. A receipt has been sent separately by Stripe.
      </p>

      <hr style="border:none;border-top:1px solid #eee;margin:32px 0">

      <h2 style="font-size:18px;margin:0 0 12px">While you&apos;re here</h2>
      <p style="font-size:15px;line-height:1.6;color:#555;margin:0 0 16px">
        You may also enjoy:
      </p>
      <ul style="font-size:14px;line-height:1.8;color:#555;padding-left:20px;margin:8px 0 24px">
        <li><a href="${SITE_URL}/insights" style="color:#7C6AF7;text-decoration:none">Our latest insights</a> on pharmacovigilance and regulatory affairs</li>
        <li><a href="${SITE_URL}/consulting" style="color:#7C6AF7;text-decoration:none">PV consulting services</a> for audits, QPPV support, and inspection readiness</li>
      </ul>

      <hr style="border:none;border-top:1px solid #eee;margin:32px 0">

      <p style="font-size:14px;line-height:1.6;color:#555;margin:0 0 8px">
        Any questions about the material, or your PV setup more broadly?
        Just reply to this email.
      </p>
      <p style="font-size:14px;color:#999;margin:24px 0 0">
        The Qualivio team<br>
        <a href="${SITE_URL}" style="color:#7C6AF7;text-decoration:none">qualiviopharma.com</a>
      </p>
    </div>
  `;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const sessionId = url.searchParams.get("session_id");
  if (!sessionId) {
    return NextResponse.redirect(`${url.origin}/resources?checkout=missing`);
  }

  let session;
  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch (err) {
    console.error("[checkout/success] Stripe retrieve failed:", err);
    return NextResponse.redirect(`${url.origin}/resources?checkout=error`);
  }

  if (session.payment_status !== "paid") {
    return NextResponse.redirect(`${url.origin}/resources?checkout=unpaid`);
  }

  const metadata = session.metadata ?? {};
  const resourceId = metadata.resourceId ?? "";
  const firstName = metadata.firstName ?? "";
  const lastName = metadata.lastName ?? "";
  const companyPosition = metadata.companyPosition ?? "";
  const email =
    session.customer_details?.email ?? session.customer_email ?? "";

  const resource = resources.find((r) => r.id === resourceId);
  if (!resource || !resource.file) {
    console.error("[checkout/success] resource missing for session", sessionId);
    return NextResponse.redirect(`${url.origin}/resources?checkout=error`);
  }

  // Issue a 7-day download token tied to this Stripe session
  const expiresAt = Date.now() + DOWNLOAD_TTL_DAYS * 24 * 60 * 60 * 1000;
  const token = createDownloadToken({
    file: resource.file,
    email,
    expiresAt,
    ctx: sessionId,
  });
  const downloadPath = `/api/download/${token}`;
  const downloadAbsoluteUrl = `${url.origin}${downloadPath}`;

  // Fire-and-forget the emails. Failures here should not block the buyer.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL;
  const from = process.env.RESEND_FROM ?? "Qualivio <onboarding@resend.dev>";
  const currency = (session.currency ?? resource.currency ?? "eur").toUpperCase();
  const amountFmt = ((session.amount_total ?? resource.priceCents ?? 0) / 100).toFixed(2);
  const amountDisplay = `${amountFmt} ${currency}`;

  if (apiKey && to && email) {
    const resend = new Resend(apiKey);
    await Promise.allSettled([
      resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `Paid order: ${resource.title}`,
        html: leadNotificationHtml({
          resource: resource.title,
          firstName,
          lastName,
          email,
          companyPosition,
          amount: amountDisplay,
          sessionId,
        }),
      }),
      resend.emails.send({
        from,
        to: email,
        replyTo: to,
        subject: `Your ${resource.title} download`,
        html: visitorReceiptHtml({
          resource: resource.title,
          firstName: firstName || "there",
          downloadUrl: downloadAbsoluteUrl,
          amount: amountDisplay,
        }),
      }),
    ]).then((results) => {
      results.forEach((r, i) => {
        if (r.status === "rejected") {
          console.error(
            `[checkout/success] email ${i === 0 ? "lead" : "visitor"} failed:`,
            r.reason
          );
        }
      });
    });
  } else if (!apiKey || !to) {
    console.warn(
      "[checkout/success] Resend not configured, skipping email side-effects:",
      { resourceId, email, sessionId }
    );
  }

  return NextResponse.redirect(
    `${url.origin}/checkout/success?dl=${encodeURIComponent(token)}&r=${encodeURIComponent(resource.id)}`
  );
}
