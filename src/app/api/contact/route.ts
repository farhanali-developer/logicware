import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      practiceName,
      email,
      phone,
      role,
      practiceSize,
      ehr,
      challenge,
      source,
    } = body;

    const html = `
      <h2>New Billing Audit Request</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Practice</strong></td><td>${practiceName}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "—"}</td></tr>
        <tr><td><strong>Role</strong></td><td>${role}</td></tr>
        <tr><td><strong>Practice Size</strong></td><td>${practiceSize}</td></tr>
        <tr><td><strong>EHR/Billing Software</strong></td><td>${ehr || "—"}</td></tr>
        <tr><td><strong>How They Found Us</strong></td><td>${source}</td></tr>
      </table>
      <h3 style="margin-top:16px">Main Challenge</h3>
      <p style="font-family:sans-serif;font-size:14px">${challenge || "—"}</p>
    `;

    await transporter.sendMail({
      from: `"Logicware Website" <${process.env.SMTP_USER}>`,
      to: "contact@logicware.tech",
      replyTo: email,
      subject: `Billing Audit Request — ${firstName} ${lastName} · ${practiceName}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 500 });
  }
}
