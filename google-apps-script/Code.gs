/**
 * Monster Project Group — Contact Form Handler
 * ---------------------------------------------
 * Receives POSTed JSON from the website's contact form and emails
 * the submission to office@monsterprojectgroup.com using the same
 * Workspace account that owns this script.
 *
 * Deploy:
 *   1. https://script.google.com -> New project -> paste this file as Code.gs
 *   2. Deploy -> New deployment -> Type: Web app
 *      Execute as: "Me (office@monsterprojectgroup.com)"
 *      Who has access: "Anyone"
 *   3. Copy the "Web app URL" and put it in your website's .env as
 *      VITE_APPS_SCRIPT_URL=...
 */

const CONFIG = {
  TO: 'office@monsterprojectgroup.com',
  SENDER_NAME: 'Monster Project Group',
  SUBJECT_PREFIX: 'Monster Project Group — New Project Inquiry',
};

const PROJECT_TYPE_LABEL = {
  'new-construction': 'New Construction',
  renovation: 'Renovation',
  commercial: 'Commercial',
  'project-recovery': 'Project Recovery',
  other: 'Other',
};

const BUDGET_LABEL = {
  'under-250k': 'Under $250K',
  '250k-500k': '$250K – $500K',
  '500k-1m': '$500K – $1M',
  '1m-5m': '$1M – $5M',
  '5m-plus': '$5M+',
};

const START_DATE_LABEL = {
  'already-started': 'Already started',
  'within-3-months': 'Within 3 months',
  '3-6-months': '3 – 6 months',
  '6-12-months': '6 – 12 months',
  planning: 'Planning phase',
};

const REFERRAL_LABEL = {
  google: 'Google',
  referral: 'Referral',
  'social-media': 'Social Media',
  'drive-by': 'Drive-by',
  other: 'Other',
};

// Simple GET handler — useful to confirm the script is deployed.
function doGet() {
  return json({ ok: true, service: 'MPG contact form' });
}

/**
 * One-time diagnostic helper.
 * Select "testSendEmail" from the function dropdown at the top of the
 * Apps Script editor and press Run. The first time you'll be asked to
 * authorize Gmail-send permission. If the email arrives in the inbox,
 * the script + account + permissions are all healthy.
 */
function testSendEmail() {
  MailApp.sendEmail({
    to: CONFIG.TO,
    name: CONFIG.SENDER_NAME,
    subject: '[MPG diagnostic] Test email from Apps Script',
    body:
      'If you see this email in the office@monsterprojectgroup.com inbox, the Apps Script can send mail.\n' +
      'Time: ' + new Date().toUTCString(),
  });
  Logger.log('Sent diagnostic email to ' + CONFIG.TO);
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'Empty request' });
    }

    const payload = JSON.parse(e.postData.contents);

    // Honeypot — silently accept to not tip off bots
    if (payload.website && String(payload.website).trim().length > 0) {
      return json({ ok: true });
    }

    const name = safe(payload.name);
    const email = safe(payload.email);
    const location = safe(payload.location);
    const type = safe(payload.type);
    const message = safe(payload.message);

    if (!name || !email || !location || !type || !message) {
      return json({ ok: false, error: 'Missing required fields' });
    }
    if (!isEmail(email)) {
      return json({ ok: false, error: 'Invalid email address' });
    }
    if (message.length > 5000) {
      return json({ ok: false, error: 'Message is too long' });
    }

    const phone = safe(payload.phone) || '—';
    const typeLabel = PROJECT_TYPE_LABEL[type] || type;
    const budget = payload.budget ? (BUDGET_LABEL[payload.budget] || payload.budget) : '—';
    const startDate = payload.startDate ? (START_DATE_LABEL[payload.startDate] || payload.startDate) : '—';
    const referral = payload.referral ? (REFERRAL_LABEL[payload.referral] || payload.referral) : '—';

    const subject = CONFIG.SUBJECT_PREFIX + ' — ' + name + ' (' + typeLabel + ')';

    const textBody = [
      'New Project Inquiry — Monster Project Group',
      '=========================================',
      '',
      'Name:            ' + name,
      'Email:           ' + email,
      'Phone:           ' + phone,
      'Location:        ' + location,
      'Project Type:    ' + typeLabel,
      'Budget:          ' + budget,
      'Start Date:      ' + startDate,
      'Heard About Us:  ' + referral,
      '',
      'Project Details',
      '-----------------------------------------',
      message,
      '',
      '-----------------------------------------',
      'Submitted: ' + new Date().toUTCString(),
    ].join('\n');

    const htmlBody =
      '<div style="font-family:Georgia,Times New Roman,serif;color:#1a1a1a;max-width:640px;margin:0 auto;padding:24px;">' +
        '<div style="border-bottom:1px solid #d4a64a;padding-bottom:12px;margin-bottom:24px;">' +
          '<div style="font-size:11px;letter-spacing:.25em;text-transform:uppercase;color:#888;">Monster Project Group</div>' +
          '<h1 style="font-size:22px;margin:8px 0 0;color:#1a1a1a;">New Project Inquiry</h1>' +
        '</div>' +
        '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
          row('Name', escapeHtml(name)) +
          row('Email', '<a href="mailto:' + encodeURIComponent(email) + '" style="color:#a8772a;text-decoration:none;">' + escapeHtml(email) + '</a>') +
          row('Phone', escapeHtml(phone)) +
          row('Location', escapeHtml(location)) +
          row('Project Type', escapeHtml(typeLabel)) +
          row('Budget', escapeHtml(budget)) +
          row('Start Date', escapeHtml(startDate)) +
          row('Heard About Us', escapeHtml(referral)) +
        '</table>' +
        '<h2 style="font-size:14px;letter-spacing:.2em;text-transform:uppercase;color:#888;margin:32px 0 8px;">Project Details</h2>' +
        '<div style="background:#f7f5f0;border-left:3px solid #d4a64a;padding:16px 20px;white-space:pre-wrap;line-height:1.6;font-family:Georgia,Times New Roman,serif;font-size:15px;">' + escapeHtml(message) + '</div>' +
        '<p style="margin-top:32px;font-size:11px;color:#999;">Submitted ' + new Date().toUTCString() + '</p>' +
      '</div>';

    MailApp.sendEmail({
      to: CONFIG.TO,
      replyTo: email,
      name: CONFIG.SENDER_NAME,
      subject: subject,
      body: textBody,
      htmlBody: htmlBody,
    });

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

// ----- helpers -----

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function safe(v) {
  return (v == null ? '' : String(v)).trim();
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function row(label, value) {
  return (
    '<tr>' +
      '<td style="padding:8px 0;vertical-align:top;width:140px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#888;font-family:Helvetica,Arial,sans-serif;">' + label + '</td>' +
      '<td style="padding:8px 0;color:#1a1a1a;">' + value + '</td>' +
    '</tr>'
  );
}
