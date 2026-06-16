import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobLocation = formData.get("jobLocation") as string;
    const resumeFile = formData.get("resume") as File | null;
    const coverLetterFile = formData.get("coverLetter") as File | null;

    const attachments: { filename: string; content: Buffer; contentType: string }[] = [];

    if (resumeFile && resumeFile.size > 0) {
      const buf = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({ filename: resumeFile.name, content: buf, contentType: resumeFile.type });
    }

    if (coverLetterFile && coverLetterFile.size > 0) {
      const buf = Buffer.from(await coverLetterFile.arrayBuffer());
      attachments.push({ filename: coverLetterFile.name, content: buf, contentType: coverLetterFile.type });
    }

    const html = `
      <h2>New Job Application — ${jobTitle}</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
        <tr><td><strong>Role</strong></td><td>${jobTitle}</td></tr>
        <tr><td><strong>Location</strong></td><td>${jobLocation}</td></tr>
        <tr><td><strong>Resume</strong></td><td>${resumeFile?.name ?? "Not provided"}</td></tr>
        <tr><td><strong>Cover Letter</strong></td><td>${coverLetterFile?.name ?? "Not provided"}</td></tr>
      </table>
      <h3 style="margin-top:16px">Why a good fit</h3>
      <p style="font-family:sans-serif;font-size:14px">${message || "—"}</p>
    `;

    await transporter.sendMail({
      from: `"Logicware Careers" <${process.env.SMTP_USER}>`,
      to: "careers@logicware.tech",
      replyTo: email,
      subject: `Application: ${jobTitle} — ${firstName} ${lastName}`,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send application" }, { status: 500 });
  }
}
