import type { VercelRequest, VercelResponse } from "@vercel/node";

type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  location: string;
  typeLabel: string;
  budget: string;
  startDate: string;
  referral: string;
  message: string;
};

const BUSINESS_NAME = "Monster Project Group";

function buildInquirySubject(name: string, typeLabel: string): string {
  return `${BUSINESS_NAME} — New Project Inquiry — ${name} (${typeLabel})`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function row(label: string, value: string): string {
  return (
    `<tr>` +
    `<td style="padding:10px 0;vertical-align:top;width:148px;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#8a9488;font-family:Helvetica,Arial,sans-serif;">${label}</td>` +
    `<td style="padding:10px 0;color:#1a241f;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.5;">${value}</td>` +
    `</tr>`
  );
}

function buildInquiryText(payload: InquiryPayload): string {
  return [
    `${BUSINESS_NAME}`,
    "New Project Inquiry",
    "========================================",
    "",
    `Name:           ${payload.name}`,
    `Email:          ${payload.email}`,
    `Phone:          ${payload.phone}`,
    `Location:       ${payload.location}`,
    `Project Type:   ${payload.typeLabel}`,
    `Budget:         ${payload.budget}`,
    `Start Date:     ${payload.startDate}`,
    `Heard About Us: ${payload.referral}`,
    "",
    "Project Details",
    "----------------------------------------",
    payload.message,
    "",
    `Submitted: ${new Date().toUTCString()}`,
  ].join("\n");
}

function buildInquiryHtml(payload: InquiryPayload): string {
  const submittedAt = new Date().toUTCString();

  return (
    `<!DOCTYPE html>` +
    `<html lang="en">` +
    `<body style="margin:0;padding:24px;background:#eef1ec;font-family:Georgia,'Times New Roman',serif;">` +
    `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;">` +
    `<tr><td>` +
    `<div style="background:#13241d;border-radius:6px 6px 0 0;padding:28px 32px 24px;">` +
    `<div style="font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#c9a24d;margin-bottom:10px;">${BUSINESS_NAME}</div>` +
    `<h1 style="margin:0;font-size:28px;line-height:1.15;font-weight:400;color:#f7f5f0;">New Project Inquiry</h1>` +
    `<div style="height:1px;background:linear-gradient(90deg,#c9a24d,#e8d4a8,#c9a24d);margin-top:18px;"></div>` +
    `</div>` +
    `<div style="background:#ffffff;padding:28px 32px 12px;border-left:1px solid #e4e8e1;border-right:1px solid #e4e8e1;">` +
    `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">` +
    row("Name", escapeHtml(payload.name)) +
    row(
      "Email",
      `<a href="mailto:${encodeURIComponent(payload.email)}" style="color:#9a7330;text-decoration:none;">${escapeHtml(payload.email)}</a>`
    ) +
    row("Phone", escapeHtml(payload.phone)) +
    row("Location", escapeHtml(payload.location)) +
    row("Project Type", escapeHtml(payload.typeLabel)) +
    row("Budget", escapeHtml(payload.budget)) +
    row("Start Date", escapeHtml(payload.startDate)) +
    row("Heard About Us", escapeHtml(payload.referral)) +
    `</table>` +
    `<div style="margin:28px 0 10px;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#8a9488;font-family:Helvetica,Arial,sans-serif;">Project Details</div>` +
    `<div style="background:#f7f5f0;border-left:3px solid #c9a24d;padding:18px 20px;white-space:pre-wrap;line-height:1.7;color:#1a241f;font-size:16px;">${escapeHtml(payload.message)}</div>` +
    `</div>` +
    `<div style="background:#fafbf9;border:1px solid #e4e8e1;border-top:none;border-radius:0 0 6px 6px;padding:16px 32px 22px;">` +
    `<p style="margin:0;font-size:12px;color:#8a9488;font-family:Helvetica,Arial,sans-serif;">Submitted ${submittedAt}</p>` +
    `<p style="margin:8px 0 0;font-size:12px;color:#8a9488;font-family:Helvetica,Arial,sans-serif;">Reply to this email to reach ${escapeHtml(payload.name)} directly.</p>` +
    `</div>` +
    `</td></tr></table>` +
    `</body></html>`
  );
}

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function safe(value: unknown): string {
  return (value == null ? "" : String(value)).trim();
}

function parsePayload(body: unknown): InquiryPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;
  const name = safe(data.name);
  const email = safe(data.email);
  const location = safe(data.location);
  const typeLabel = safe(data.typeLabel);
  const message = safe(data.message);

  if (!name || !email || !location || !typeLabel || !message) return null;
  if (!isEmail(email)) return null;
  if (message.length > 5000) return null;

  return {
    name,
    email,
    phone: safe(data.phone) || "—",
    location,
    typeLabel,
    budget: safe(data.budget) || "—",
    startDate: safe(data.startDate) || "—",
    referral: safe(data.referral) || "—",
    message,
  };
}

function formatResendError(body: unknown): string {
  if (!body || typeof body !== "object") return "Could not send email.";
  const data = body as Record<string, unknown>;
  if (typeof data.message === "string") return data.message;
  if (typeof data.error === "string") return data.error;
  return "Could not send email.";
}

async function sendViaResend(payload: InquiryPayload, to: string, apiKey: string) {
  const subject = buildInquirySubject(payload.name, payload.typeLabel);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM ||
        "Monster Project Group <onboarding@resend.dev>",
      to: [to],
      reply_to: payload.email,
      subject,
      html: buildInquiryHtml(payload),
      text: buildInquiryText(payload),
    }),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(formatResendError(errorBody));
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const payload = parsePayload(req.body);
  if (!payload) {
    return res.status(400).json({ ok: false, error: "Invalid submission" });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;

  if (!to || !resendKey) {
    return res.status(503).json({ ok: false, error: "Email service is not configured." });
  }

  try {
    await sendViaResend(payload, to, resendKey);
    return res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Could not send email.";
    return res.status(500).json({ ok: false, error: message });
  }
}
