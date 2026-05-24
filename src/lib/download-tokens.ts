import crypto from "node:crypto";

export type TokenPayload = {
  /** Path to file within /private/, e.g. "/resources/Qualivio_Pharmacovigilance_Auditing.pdf" */
  file: string;
  /** Who the link was issued to. Stored for audit only, not validated against caller. */
  email: string;
  /** Unix milliseconds. Link is rejected when Date.now() >= expiresAt. */
  expiresAt: number;
  /** Free-form context (e.g. orderId once payments are wired). */
  ctx?: string;
};

function getSecret(): string {
  const s = process.env.DOWNLOAD_TOKEN_SECRET;
  if (!s || s.length < 32) {
    throw new Error("DOWNLOAD_TOKEN_SECRET missing or too short (need at least 32 chars)");
  }
  return s;
}

function b64url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function fromB64url(s: string): Buffer {
  // Re-pad
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  return Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/") + pad, "base64");
}

export function createDownloadToken(payload: TokenPayload): string {
  const body = b64url(Buffer.from(JSON.stringify(payload), "utf8"));
  const sig = b64url(
    crypto.createHmac("sha256", getSecret()).update(body).digest()
  );
  return `${body}.${sig}`;
}

export function verifyDownloadToken(token: string): TokenPayload | null {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [body, sig] = parts;

  const expected = b64url(
    crypto.createHmac("sha256", getSecret()).update(body).digest()
  );
  if (sig.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;

  let payload: TokenPayload;
  try {
    payload = JSON.parse(fromB64url(body).toString("utf8")) as TokenPayload;
  } catch {
    return null;
  }
  if (typeof payload.file !== "string") return null;
  if (typeof payload.email !== "string") return null;
  if (typeof payload.expiresAt !== "number") return null;
  if (payload.expiresAt < Date.now()) return null;
  return payload;
}
