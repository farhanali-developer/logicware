import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  // Reuse one authenticated connection across the notification + auto-reply
  // sent per submission, instead of opening a fresh TLS + AUTH handshake for
  // each. Cuts AUTH round-trips in half per request and avoids tripping the
  // host's rate limiting on repeated logins (source of "435 Unable to
  // authenticate at present" errors seen under bursts of form submissions).
  pool: true,
  maxConnections: 1,
  maxMessages: 50,
});
