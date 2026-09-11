const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5;

interface GoogleRecaptchaResponse {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
}

export interface RecaptchaResult {
  ok: boolean;
  reason?: string;
}

/**
 * Verifies a reCAPTCHA v3 token server-side against Google's siteverify API.
 * Checks success, score (bot-likelihood, 0 = bot, 1 = human), and that the
 * action matches what this endpoint expects, so a token minted for one form
 * can't be replayed against another.
 */
export async function verifyRecaptcha(token: string, expectedAction: string): Promise<RecaptchaResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    console.error("RECAPTCHA_SECRET_KEY is not configured on the server.");
    return { ok: false, reason: "reCAPTCHA is not configured." };
  }

  if (!token) {
    return { ok: false, reason: "Missing verification token." };
  }

  try {
    const params = new URLSearchParams({ secret, response: token });
    const res = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    const data = (await res.json()) as GoogleRecaptchaResponse;

    if (!data.success) {
      return { ok: false, reason: "Verification failed." };
    }
    if (typeof data.score === "number" && data.score < MIN_SCORE) {
      return { ok: false, reason: "Verification score too low." };
    }
    if (data.action && data.action !== expectedAction) {
      return { ok: false, reason: "Verification action mismatch." };
    }

    return { ok: true };
  } catch (err) {
    console.error("reCAPTCHA verification request failed:", err);
    return { ok: false, reason: "Verification request failed." };
  }
}

export const RECAPTCHA_FAILURE_MESSAGE =
  "We couldn't verify this submission. If you're using an ad blocker or privacy extension, try disabling it for this site and submit again, or email us directly at contact@logicware.tech.";
