import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
  email: string;
  company: string;
  position: string;
}) {
  return `
    <h2 style="font-family:system-ui,sans-serif">New download lead</h2>
    <table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">
      <tr><td style="padding:6px 12px;color:#666">Resource</td><td style="padding:6px 12px"><strong>${esc(p.resource)}</strong></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px"><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></td></tr>
      <tr><td style="padding:6px 12px;color:#666">Company</td><td style="padding:6px 12px">${esc(p.company) || "—"}</td></tr>
      <tr><td style="padding:6px 12px;color:#666">Position</td><td style="padding:6px 12px">${esc(p.position) || "—"}</td></tr>
    </table>
  `;
}

function visitorConfirmationHtml(p: { resource: string }) {
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#0D0D0F">
      <h1 style="font-size:24px;margin:0 0 8px;line-height:1.3">Thanks for downloading!</h1>
      <p style="font-size:15px;line-height:1.6;color:#555;margin:0 0 24px">
        Your copy of <strong>${esc(p.resource)}</strong> should have downloaded successfully.
        If anything went wrong, just reply to this email and we'll send it across directly.
      </p>

      <hr style="border:none;border-top:1px solid #eee;margin:32px 0">

      <h2 style="font-size:18px;margin:0 0 12px">Continue exploring</h2>
      <p style="font-size:15px;line-height:1.6;color:#555;margin:0 0 24px">
        We regularly publish insights on pharmacovigilance, regulatory affairs,
        and compliance for life sciences teams. A few you might find useful next:
      </p>
      <p style="margin:24px 0">
        <a href="${SITE_URL}/insights"
           style="background:#7C6AF7;color:#ffffff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:600;font-size:14px;display:inline-block">
          Read our latest articles →
        </a>
      </p>
      <p style="font-size:14px;line-height:1.6;color:#666;margin:24px 0 0">
        Or explore other areas of our work:
      </p>
      <ul style="font-size:14px;line-height:1.8;color:#555;padding-left:20px;margin:8px 0 24px">
        <li><a href="${SITE_URL}/regulatory-updates" style="color:#7C6AF7;text-decoration:none">Regulatory updates</a> — current EMA / MHRA developments</li>
        <li><a href="${SITE_URL}/consulting" style="color:#7C6AF7;text-decoration:none">PV consulting services</a> — audits, QPPV support, inspection readiness</li>
        <li><a href="${SITE_URL}/resources" style="color:#7C6AF7;text-decoration:none">More resources</a> — guides, templates, and mini courses</li>
      </ul>

      <hr style="border:none;border-top:1px solid #eee;margin:32px 0">

      <p style="font-size:14px;line-height:1.6;color:#555;margin:0 0 8px">
        Have a question about PV auditing, compliance, or your safety setup?
        Just reply to this email — we're happy to help.
      </p>
      <p style="font-size:14px;color:#999;margin:24px 0 0">
        — The Qualivio team<br>
        <a href="${SITE_URL}" style="color:#7C6AF7;text-decoration:none">qualiviopharma.com</a>
      </p>
    </div>
  `;
}

export async function POST(req: Request) {
  let body: { email?: string; company?: string; position?: string; resource?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim().slice(0, 200);
  const position = (body.position ?? "").trim().slice(0, 200);
  const resource = (body.resource ?? "").trim().slice(0, 200) || "Unknown resource";

  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL;
  const from = process.env.RESEND_FROM ?? "Qualivio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.warn(
      "[resource-download] RESEND_API_KEY or LEADS_EMAIL not set — lead logged only:",
      { email, company, position, resource }
    );
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);

  const [leadResult, confirmResult] = await Promise.allSettled([
    resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New resource download: ${resource}`,
      html: leadNotificationHtml({ resource, email, company, position }),
    }),
    resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: `Your ${resource} guide`,
      html: visitorConfirmationHtml({ resource }),
    }),
  ]);

  if (leadResult.status === "rejected") {
    console.error("[resource-download] Lead notification failed:", leadResult.reason);
    return NextResponse.json({ error: "Could not send notification." }, { status: 500 });
  }
  if (leadResult.value.error) {
    console.error("[resource-download] Resend lead error:", leadResult.value.error);
    return NextResponse.json({ error: "Could not send notification." }, { status: 500 });
  }

  if (confirmResult.status === "rejected") {
    console.error("[resource-download] Visitor confirmation failed:", confirmResult.reason);
  } else if (confirmResult.value.error) {
    console.error("[resource-download] Resend visitor error:", confirmResult.value.error);
  }

  return NextResponse.json({ ok: true });
}
