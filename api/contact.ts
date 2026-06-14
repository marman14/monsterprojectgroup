import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import {
  buildInquiryHtml,
  buildInquirySubject,
  buildInquiryText,
  type InquiryPayload,
} from "../lib/inquiryEmail";

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

async function sendViaResend(payload: InquiryPayload, to: string, apiKey: string) {
  const subject = buildInquirySubject(payload.name, payload.typeLabel);
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Monster Project Group <onboarding@resend.dev>",
      to: [to],
      reply_to: payload.email,
      subject,
      html: buildInquiryHtml(payload),
      text: buildInquiryText(payload),
    }),
  });

  if (!response.ok) {
    const error = await response.text().catch(() => "Resend request failed");
    throw new Error(error);
  }
}

async function sendViaSmtp(payload: InquiryPayload, to: string) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    throw new Error("SMTP is not configured");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  });

  const subject = buildInquirySubject(payload.name, payload.typeLabel);

  await transporter.sendMail({
    from: `"Monster Project Group" <${user}>`,
    to,
    replyTo: payload.email,
    subject,
    text: buildInquiryText(payload),
    html: buildInquiryHtml(payload),
  });
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
  if (!to) {
    return res.status(503).json({ ok: false, error: "not_configured" });
  }

  try {
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      await sendViaResend(payload, to, resendKey);
    } else {
      await sendViaSmtp(payload, to);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Could not send email";
    return res.status(500).json({ ok: false, error: message });
  }
}
