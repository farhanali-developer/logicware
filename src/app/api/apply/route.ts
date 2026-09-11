import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";
import { applyNotificationEmail, applyAutoReplyEmail, type ApplySubmission } from "@/lib/emailTemplates";
import { validateName, validateEmail, validatePhone, validateRequiredText } from "@/lib/validation";
import { verifyRecaptcha, RECAPTCHA_FAILURE_MESSAGE } from "@/lib/recaptcha";
import { checkRateLimit, getClientIp, RATE_LIMIT_MESSAGE } from "@/lib/rateLimit";

const MAX_PDF_BYTES = 8 * 1024 * 1024; // 8MB

interface PdfCheck {
  error: string | null;
  buffer?: Buffer;
}

/** Server-side PDF validation: size, extension, and a magic-byte check on the actual file contents. */
async function checkPdfFile(file: File | null, required: boolean, label: string): Promise<PdfCheck> {
  if (!file || file.size === 0) {
    return { error: required ? `${label} is required.` : null };
  }
  if (file.size > MAX_PDF_BYTES) {
    return { error: `${label} must be smaller than 8MB.` };
  }
  if (!/\.pdf$/i.test(file.name)) {
    return { error: `${label} must be a PDF file.` };
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const isPdfMagic = buffer.subarray(0, 5).toString("latin1") === "%PDF-";
  if (!isPdfMagic) {
    return { error: `${label} does not appear to be a valid PDF file.` };
  }
  return { error: null, buffer };
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const rateLimit = checkRateLimit(`apply:${ip}`);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: RATE_LIMIT_MESSAGE },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds ?? 600) } }
      );
    }

    const formData = await req.formData();

    const firstName = (formData.get("firstName") as string) ?? "";
    const lastName = (formData.get("lastName") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const phone = (formData.get("phone") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";
    const jobTitle = (formData.get("jobTitle") as string) ?? "";
    const jobLocation = (formData.get("jobLocation") as string) ?? "";
    const resumeFile = formData.get("resume") as File | null;
    const coverLetterFile = formData.get("coverLetter") as File | null;

    if (!jobTitle.trim() || !jobLocation.trim()) {
      return NextResponse.json({ ok: false, error: "Invalid job reference" }, { status: 400 });
    }

    const errors: Record<string, string> = {};
    const setErr = (field: string, err: string | null) => {
      if (err) errors[field] = err;
    };

    setErr("firstName", validateName(firstName, "First name"));
    setErr("lastName", validateName(lastName, "Last name"));
    setErr("email", validateEmail(email));
    setErr("phone", validatePhone(phone, true));
    setErr("message", validateRequiredText(message, "This field", { min: 10, max: 3000 }));

    const resumeCheck = await checkPdfFile(resumeFile, true, "Resume");
    setErr("resume", resumeCheck.error);

    const coverLetterCheck = await checkPdfFile(coverLetterFile, false, "Cover letter");
    setErr("coverLetter", coverLetterCheck.error);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const recaptchaToken = (formData.get("recaptchaToken") as string) ?? "";
    const recaptcha = await verifyRecaptcha(recaptchaToken, "apply");
    if (!recaptcha.ok) {
      console.error("Apply reCAPTCHA rejection:", recaptcha.reason);
      return NextResponse.json({ ok: false, error: RECAPTCHA_FAILURE_MESSAGE }, { status: 403 });
    }

    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
    if (resumeFile && resumeCheck.buffer) {
      attachments.push({ filename: resumeFile.name, content: resumeCheck.buffer, contentType: "application/pdf" });
    }
    if (coverLetterFile && coverLetterCheck.buffer) {
      attachments.push({ filename: coverLetterFile.name, content: coverLetterCheck.buffer, contentType: "application/pdf" });
    }

    const submission: ApplySubmission = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      jobTitle,
      jobLocation,
      resumeFileName: resumeFile?.name,
      coverLetterFileName: coverLetterFile?.name,
    };

    const notification = applyNotificationEmail(submission);

    await transporter.sendMail({
      from: `"Logicware Careers" <${process.env.SMTP_USER}>`,
      to: "careers@logicware.tech",
      replyTo: submission.email,
      subject: notification.subject,
      html: notification.html,
      attachments,
    });

    try {
      const autoReply = applyAutoReplyEmail(submission);
      await transporter.sendMail({
        from: `"Logicware Careers" <${process.env.SMTP_USER}>`,
        to: submission.email,
        replyTo: "careers@logicware.tech",
        subject: autoReply.subject,
        html: autoReply.html,
      });
    } catch (autoReplyErr) {
      // Don't fail the request over a confirmation email; the application notification already went through.
      console.error("Apply auto-reply error:", autoReplyErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send application" }, { status: 500 });
  }
}
