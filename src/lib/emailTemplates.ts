import { SERVICES } from "@/lib/services";
import { TESTIMONIALS } from "@/lib/testimonials";

const SITE_URL = "https://logicware.tech";
const FONT_STACK =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

const COLORS = {
  ink: "#0B0B0F",
  bg: "#0B0B0F",
  text: "#3A3F4B",
  muted: "#6B7280",
  border: "#E5E9F0",
  card: "#FFFFFF",
  page: "#F0F2F5",
  blue: "#007AFF",
  blueDim: "#0062CC",
  blueTint: "#F0F6FF",
  green: "#22C55E",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function button(label: string, href: string): string {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px auto 4px;">
      <tr>
        <td style="border-radius:999px;background:${COLORS.blue};">
          <a href="${href}" style="display:inline-block;padding:14px 30px;font-family:${FONT_STACK};font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:999px;">
            ${label}
          </a>
        </td>
      </tr>
    </table>`;
}

function badge(label: string): string {
  return `
    <span style="display:inline-block;padding:6px 14px;border-radius:999px;background:${COLORS.blueTint};color:${COLORS.blue};font-family:${FONT_STACK};font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;">
      ${escapeHtml(label)}
    </span>`;
}

function dataTable(rows: [string, string][]): string {
  const rowsHtml = rows
    .map(
      ([label, value], i) => `
      <tr>
        <td style="padding:12px 0;border-top:${i === 0 ? "none" : `1px solid ${COLORS.border}`};color:${COLORS.muted};font-family:${FONT_STACK};font-size:13px;width:150px;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:12px 0;border-top:${i === 0 ? "none" : `1px solid ${COLORS.border}`};color:${COLORS.ink};font-family:${FONT_STACK};font-size:14px;font-weight:600;vertical-align:top;">${value || "&mdash;"}</td>
      </tr>`
    )
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">${rowsHtml}</table>`;
}

function messageBlock(label: string, value: string): string {
  if (!value) return "";
  return `
    <div style="margin-top:20px;padding:18px 20px;background:${COLORS.page};border-radius:12px;">
      <p style="margin:0 0 6px;font-family:${FONT_STACK};font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:${COLORS.muted};">${escapeHtml(label)}</p>
      <p style="margin:0;font-family:${FONT_STACK};font-size:14px;line-height:1.7;color:${COLORS.text};white-space:pre-wrap;">${escapeHtml(value)}</p>
    </div>`;
}

function upsellBlock(): string {
  const rows = SERVICES.map(
    (s) => `
      <tr>
        <td style="padding:14px 0;border-top:1px solid ${COLORS.border};">
          <a href="${SITE_URL}/services/${s.slug}" style="text-decoration:none;">
            <p style="margin:0 0 3px;font-family:${FONT_STACK};font-size:14px;font-weight:700;color:${COLORS.ink};">${escapeHtml(s.title)} <span style="color:${COLORS.blue};">&rarr;</span></p>
            <p style="margin:0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.muted};">${escapeHtml(s.tagline)}</p>
          </a>
        </td>
      </tr>`
  ).join("");

  const testimonial = TESTIMONIALS[0];

  return `
    <div style="margin-top:32px;padding-top:28px;border-top:1px solid ${COLORS.border};">
      <p style="margin:0 0 4px;font-family:${FONT_STACK};font-size:16px;font-weight:700;color:${COLORS.ink};">While you wait: more ways we help dental practices</p>
      <p style="margin:0 0 12px;font-family:${FONT_STACK};font-size:13px;color:${COLORS.muted};">Most practices that come to us for one service end up bundling two or three. Credentialing and denial management are the most common add-ons to a billing engagement.</p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">${rows}</table>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;margin-top:24px;border-collapse:collapse;background:${COLORS.blueTint};border-radius:12px;">
        <tr>
          <td style="padding:20px 22px;border-radius:12px;">
            <p style="margin:0 0 10px;font-family:${FONT_STACK};font-size:14px;font-style:italic;line-height:1.7;color:${COLORS.ink};">&ldquo;${escapeHtml(testimonial.quote)}&rdquo;</p>
            <p style="margin:0;font-family:${FONT_STACK};font-size:12px;color:${COLORS.muted};">&mdash; ${escapeHtml(testimonial.name)}</p>
          </td>
        </tr>
      </table>
    </div>`;
}

function shell(opts: { preheader: string; bodyHtml: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Logicware</title>
</head>
<body style="margin:0;padding:0;background:${COLORS.page};">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${COLORS.page};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="background:${COLORS.bg};border-radius:16px 16px 0 0;padding:32px 40px 26px;text-align:center;">
              <img src="${SITE_URL}/logo/logowhite.png" width="150" height="29" alt="Logicware" style="display:block;margin:0 auto 10px;border:0;outline:none;max-width:150px;height:auto;" />
              <p style="margin:0;font-family:${FONT_STACK};font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#9CA3AF;">Building Tomorrow, Today.</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="background:${COLORS.card};padding:40px;border-left:1px solid ${COLORS.border};border-right:1px solid ${COLORS.border};">
              ${opts.bodyHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:${COLORS.bg};border-radius:0 0 16px 16px;padding:26px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-family:${FONT_STACK};font-size:12px;color:#9CA3AF;">Logicware LLC &middot; 1007 N Orange St. 4th Floor, 4682, Wilmington, DE 19801</p>
              <p style="margin:0;font-family:${FONT_STACK};font-size:11px;color:#6B7280;">HIPAA Compliant &middot; Delaware LLC &middot; <a href="${SITE_URL}" style="color:#6B7280;">logicware.tech</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export interface ContactSubmission {
  firstName: string;
  lastName: string;
  practiceName: string;
  email: string;
  phone?: string;
  role: string;
  practiceSize: string;
  ehr?: string;
  challenge?: string;
  source: string;
}

export function contactNotificationEmail(data: ContactSubmission) {
  const body = `
    ${badge("New Billing Audit Request")}
    <h1 style="margin:16px 0 4px;font-family:${FONT_STACK};font-size:22px;color:${COLORS.ink};">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</h1>
    <p style="margin:0 0 20px;font-family:${FONT_STACK};font-size:14px;color:${COLORS.muted};">${escapeHtml(data.practiceName)}</p>
    ${dataTable([
      ["Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:${COLORS.blue};text-decoration:none;">${escapeHtml(data.email)}</a>`],
      ["Phone", data.phone ? escapeHtml(data.phone) : ""],
      ["Role", escapeHtml(data.role)],
      ["Practice Size", escapeHtml(data.practiceSize)],
      ["EHR / Billing Software", data.ehr ? escapeHtml(data.ehr) : ""],
      ["Source", escapeHtml(data.source)],
    ])}
    ${messageBlock("Main Challenge", data.challenge ?? "")}
    ${button("Reply to " + data.firstName, `mailto:${data.email}`)}
  `;
  return {
    subject: `Billing Audit Request — ${data.firstName} ${data.lastName} · ${data.practiceName}`,
    html: shell({ preheader: `New billing audit request from ${data.firstName} ${data.lastName} (${data.practiceName})`, bodyHtml: body }),
  };
}

export function contactAutoReplyEmail(data: ContactSubmission) {
  const body = `
    ${badge("Request Received")}
    <h1 style="margin:16px 0 12px;font-family:${FONT_STACK};font-size:22px;color:${COLORS.ink};">Thanks, ${escapeHtml(data.firstName)}. We've got your request.</h1>
    <p style="margin:0 0 20px;font-family:${FONT_STACK};font-size:14px;line-height:1.7;color:${COLORS.text};">
      We're reviewing your billing audit request for <strong>${escapeHtml(data.practiceName)}</strong> now.
      A member of our team will follow up within <strong>24 business hours</strong> with a clear look at
      where your current billing setup stands and what improving it would look like.
    </p>

    <div style="margin:24px 0;padding:20px 22px;background:${COLORS.page};border-radius:12px;">
      <p style="margin:0 0 12px;font-family:${FONT_STACK};font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:${COLORS.muted};">What happens next</p>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:6px 0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.text};vertical-align:top;width:28px;">1.</td>
          <td style="padding:6px 0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.text};">We review your practice details and current billing setup</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.text};vertical-align:top;">2.</td>
          <td style="padding:6px 0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.text};">We audit your claims, denial patterns, and AR aging</td>
        </tr>
        <tr>
          <td style="padding:6px 0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.text};vertical-align:top;">3.</td>
          <td style="padding:6px 0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.text};">You get a free, no-obligation report with actionable findings</td>
        </tr>
      </table>
    </div>

    <p style="margin:0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.muted};">
      Questions in the meantime? Just reply to this email, it goes straight to our team.
    </p>

    ${upsellBlock()}
  `;
  return {
    subject: "We've received your free billing audit request — Logicware",
    html: shell({ preheader: "Your free billing audit request is in. Here's what happens next.", bodyHtml: body }),
  };
}

export interface ApplySubmission {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message?: string;
  jobTitle: string;
  jobLocation: string;
  resumeFileName?: string;
  coverLetterFileName?: string;
}

export function applyNotificationEmail(data: ApplySubmission) {
  const body = `
    ${badge("New Job Application")}
    <h1 style="margin:16px 0 4px;font-family:${FONT_STACK};font-size:22px;color:${COLORS.ink};">${escapeHtml(data.firstName)} ${escapeHtml(data.lastName)}</h1>
    <p style="margin:0 0 20px;font-family:${FONT_STACK};font-size:14px;color:${COLORS.muted};">${escapeHtml(data.jobTitle)} &middot; ${escapeHtml(data.jobLocation)}</p>
    ${dataTable([
      ["Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:${COLORS.blue};text-decoration:none;">${escapeHtml(data.email)}</a>`],
      ["Phone", data.phone ? escapeHtml(data.phone) : ""],
      ["Resume", data.resumeFileName ?? "Not provided"],
      ["Cover Letter", data.coverLetterFileName ?? "Not provided"],
    ])}
    ${messageBlock("Why they're a good fit", data.message ?? "")}
    ${button("Reply to " + data.firstName, `mailto:${data.email}`)}
  `;
  return {
    subject: `Application: ${data.jobTitle} — ${data.firstName} ${data.lastName}`,
    html: shell({ preheader: `New application for ${data.jobTitle} from ${data.firstName} ${data.lastName}`, bodyHtml: body }),
  };
}

export function applyAutoReplyEmail(data: ApplySubmission) {
  const body = `
    ${badge("Application Received")}
    <h1 style="margin:16px 0 12px;font-family:${FONT_STACK};font-size:22px;color:${COLORS.ink};">Thanks for applying, ${escapeHtml(data.firstName)}.</h1>
    <p style="margin:0 0 16px;font-family:${FONT_STACK};font-size:14px;line-height:1.7;color:${COLORS.text};">
      We've received your application for <strong>${escapeHtml(data.jobTitle)}</strong> (${escapeHtml(data.jobLocation)}).
      A real person on our team reads every application that comes in, not an automated filter, so give us a bit of time to get through it properly.
    </p>
    <p style="margin:0 0 20px;font-family:${FONT_STACK};font-size:14px;line-height:1.7;color:${COLORS.text};">
      We're currently reviewing a high number of applications for this role, so the process may take a little longer than usual. Either way, you will hear back from us once a decision has been made, whether it's a yes or a no. We won't leave you wondering.
    </p>
    <p style="margin:0;font-family:${FONT_STACK};font-size:13px;color:${COLORS.muted};">
      Questions about the role in the meantime? Just reply to this email.
    </p>
    ${button("View Other Open Roles", `${SITE_URL}/careers`)}
  `;
  return {
    subject: `We've received your application — ${data.jobTitle} at Logicware`,
    html: shell({ preheader: `Your application for ${data.jobTitle} has been received.`, bodyHtml: body }),
  };
}
