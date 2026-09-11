import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { contactNotificationEmail, contactAutoReplyEmail, type ContactSubmission } from "@/lib/emailTemplates";
import { CONTACT_ROLES, PRACTICE_SIZES, CONTACT_SOURCES } from "@/lib/formOptions";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateRequiredText,
  validateOptionalText,
  validateChoice,
} from "@/lib/validation";
import { verifyRecaptcha, RECAPTCHA_FAILURE_MESSAGE } from "@/lib/recaptcha";
import { checkRateLimit, getClientIp, RATE_LIMIT_MESSAGE } from "@/lib/rateLimit";

function validateContactSubmission(body: Record<string, unknown>): Record<string, string> {
  const errors: Record<string, string> = {};
  const setErr = (field: string, err: string | null) => {
    if (err) errors[field] = err;
  };
  const str = (v: unknown) => (typeof v === "string" ? v : "");

  setErr("firstName", validateName(str(body.firstName), "First name"));
  setErr("lastName", validateName(str(body.lastName), "Last name"));
  setErr("practiceName", validateRequiredText(str(body.practiceName), "Practice name", { max: 150 }));
  setErr("email", validateEmail(str(body.email)));
  setErr("phone", validatePhone(str(body.phone), false));
  setErr("role", validateChoice(str(body.role), CONTACT_ROLES, "role"));
  setErr("practiceSize", validateChoice(str(body.practiceSize), PRACTICE_SIZES, "practice size"));
  setErr("ehr", validateOptionalText(str(body.ehr), "Practice management software", 150));
  setErr("challenge", validateOptionalText(str(body.challenge), "Main challenge", 2000));
  setErr("source", validateChoice(str(body.source), CONTACT_SOURCES, "source"));
  if (!body.consent) errors.consent = "Please confirm to continue.";

  return errors;
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateLimit = checkRateLimit(`contact:${ip}`);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: RATE_LIMIT_MESSAGE },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 600) } }
      );
    }

    const body = await req.json();
    const errors = validateContactSubmission(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const recaptcha = await verifyRecaptcha(
      typeof body.recaptchaToken === "string" ? body.recaptchaToken : "",
      "contact"
    );
    if (!recaptcha.ok) {
      console.error("Contact reCAPTCHA rejection:", recaptcha.reason);
      return NextResponse.json({ ok: false, error: RECAPTCHA_FAILURE_MESSAGE }, { status: 403 });
    }

    const submission: ContactSubmission = {
      firstName: String(body.firstName).trim(),
      lastName: String(body.lastName).trim(),
      practiceName: String(body.practiceName).trim(),
      email: String(body.email).trim(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      role: String(body.role),
      practiceSize: String(body.practiceSize),
      ehr: body.ehr ? String(body.ehr).trim() : undefined,
      challenge: body.challenge ? String(body.challenge).trim() : undefined,
      source: String(body.source),
    };

    const notification = contactNotificationEmail(submission);

    await transporter.sendMail({
      from: `"Logicware Website" <${process.env.SMTP_USER}>`,
      to: "contact@logicware.tech",
      replyTo: submission.email,
      subject: notification.subject,
      html: notification.html,
    });

    try {
      const autoReply = contactAutoReplyEmail(submission);
      await transporter.sendMail({
        from: `"Logicware" <${process.env.SMTP_USER}>`,
        to: submission.email,
        replyTo: "contact@logicware.tech",
        subject: autoReply.subject,
        html: autoReply.html,
      });
    } catch (autoReplyErr) {
      // Don't fail the request over a confirmation email; the lead notification already went through.
      console.error("Contact auto-reply error:", autoReplyErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
