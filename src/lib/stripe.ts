import Stripe from "stripe";

let cached: Stripe | null = null;

/**
 * Returns a singleton Stripe client. Throws a clear error if the secret
 * key is missing so misconfigured deploys fail loudly instead of returning
 * cryptic "Invalid API Key provided" responses to buyers.
 */
export function getStripe(): Stripe {
  if (cached) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to .env.local (and to the Vercel project env)."
    );
  }
  cached = new Stripe(key);
  return cached;
}

export function getPublishableKey(): string | null {
  return process.env.STRIPE_PUBLISHABLE_KEY ?? null;
}
