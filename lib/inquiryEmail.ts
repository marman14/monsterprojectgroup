export type InquiryPayload = {
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

export function buildInquirySubject(name: string, typeLabel: string): string {
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

export function buildInquiryText(payload: InquiryPayload): string {
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

export function buildInquiryHtml(payload: InquiryPayload): string {
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

export function buildInquiryPlainSummary(payload: InquiryPayload): string {
  return [
    "MONSTER PROJECT GROUP",
    "New Project Inquiry",
    "",
    "CONTACT",
    `  Name ............. ${payload.name}`,
    `  Email ............ ${payload.email}`,
    `  Phone ............ ${payload.phone}`,
    `  Location ......... ${payload.location}`,
    "",
    "PROJECT",
    `  Type ............. ${payload.typeLabel}`,
    `  Budget ........... ${payload.budget}`,
    `  Start Date ....... ${payload.startDate}`,
    `  Heard About Us ... ${payload.referral}`,
    "",
    "MESSAGE",
    payload.message,
    "",
    `Submitted: ${new Date().toUTCString()}`,
  ].join("\n");
}
