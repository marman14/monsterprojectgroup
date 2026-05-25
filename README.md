# Monster Project Group — Website

Marketing site for **Monster Project Group** (MPG) — luxury construction &
development management, South Florida.

Stack: Vite · React 18 · TypeScript · Tailwind CSS · shadcn/ui · Vercel.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in VITE_APPS_SCRIPT_URL
npm run dev                  # http://localhost:8080
```

---

## Contact form delivery (Google Apps Script)

The contact form (`src/components/Contact.tsx`) POSTs directly to a
**Google Apps Script web app** that runs as `office@monsterprojectgroup.com`
and sends the email through that account's Google Workspace.

No App Password, no SMTP credentials, no third-party service.

### One-time setup (3 minutes)

1. Open <https://script.google.com> while logged in as
   **office@monsterprojectgroup.com**.
2. Click **New project**. Replace the default `Code.gs` content with the file
   at [`google-apps-script/Code.gs`](google-apps-script/Code.gs) in this
   repository.
3. Click **Deploy → New deployment**.
4. Settings:
   - **Type:** Web app
   - **Execute as:** Me (office@monsterprojectgroup.com)
   - **Who has access:** Anyone
5. Authorize the script when Google prompts you (it needs `MailApp` scope to
   send email from your account).
6. Copy the generated **Web app URL** — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

### Wire it into the site

Local dev — put the URL in `.env.local`:

```
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Production (Vercel) — go to **Project → Settings → Environment Variables** and
add the same key/value for Production, Preview, and Development.

After changing env vars, redeploy (Vercel rebuilds with the new value).

### Updating the Apps Script later

If you edit `google-apps-script/Code.gs`, you must:
1. Paste the new code into the Apps Script editor.
2. Go to **Deploy → Manage deployments → ✏️ Edit → New version → Deploy**.
   *(The URL stays the same.)*

### Quotas

Google Workspace Apps Script accounts can send **1,500 emails/day** through
`MailApp`. The contact form will never come close to that.

---

## Project scripts

| Command            | What it does                            |
| ------------------ | --------------------------------------- |
| `npm run dev`      | Vite dev server (`http://localhost:8080`)|
| `npm run build`    | Production build into `dist/`           |
| `npm run preview`  | Serve the production build locally      |
| `npm run lint`     | ESLint                                  |
| `npm run test`     | Vitest                                  |

---

## Security notes

- The Apps Script URL is public, but the script itself validates required
  fields, rejects bad emails, drops honeypot submissions, and caps message
  length at 5 000 chars.
- The form's hidden `website` honeypot field traps bots.
- Email is sent **from** the Workspace account that owns the script (which
  is `office@monsterprojectgroup.com`). The `Reply-To` header is set to the
  submitter, so hitting "Reply" in Gmail goes back to the prospect.
