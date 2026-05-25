import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { resources } from "@/data/resources";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: {
    firstName?: string;
    lastName?: string;
    email?: string;
    companyPosition?: string;
    resourceId?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const firstName = (body.firstName ?? "").trim().slice(0, 100);
  const lastName = (body.lastName ?? "").trim().slice(0, 100);
  const email = (body.email ?? "").trim();
  const companyPosition = (body.companyPosition ?? "").trim().slice(0, 300);
  const resourceId = (body.resourceId ?? "").trim();

  if (!firstName) {
    return NextResponse.json({ error: "Please enter your first name." }, { status: 400 });
  }
  if (!lastName) {
    return NextResponse.json({ error: "Please enter your last name." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const resource = resources.find((r) => r.id === resourceId);
  if (!resource) {
    return NextResponse.json({ error: "Unknown resource." }, { status: 404 });
  }
  if (!resource.file) {
    return NextResponse.json(
      { error: "This resource is not yet available for purchase." },
      { status: 409 }
    );
  }
  if (!resource.priceCents || !resource.currency) {
    return NextResponse.json(
      { error: "This resource is not configured for paid checkout." },
      { status: 409 }
    );
  }

  const origin = req.headers.get("origin") ?? new URL(req.url).origin;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: resource.currency,
            unit_amount: resource.priceCents,
            product_data: {
              name: resource.title,
              description: resource.description,
            },
          },
        },
      ],
      metadata: {
        resourceId: resource.id,
        firstName,
        lastName,
        companyPosition,
      },
      success_url: `${origin}/api/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/resources?checkout=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Could not create checkout session." },
        { status: 500 }
      );
    }
    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    console.error("[checkout/create] Stripe error:", err);
    const message =
      err instanceof Error && err.message.includes("STRIPE_SECRET_KEY")
        ? "Payment is not configured yet. Please contact us at hello@qualiviopharma.com."
        : "Could not start checkout. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
