// Sends one article to every subscriber, in each reader's language, once.
// Usage: SLUG=<article-slug> [TEST_TO=you@example.com] node scripts/send-newsletter.mjs
// Env: RESEND_API_KEY, SUPABASE_SERVICE_ROLE_KEY
import { createHmac } from "node:crypto";

const SITE = "https://jacquesmjean.com";
const SUPABASE = "https://fuhpnwlootiuxvrwnfch.supabase.co";
const FROM = "Jacques M. Jean <engage@jacquesmjean.com>";
const REPLY_TO = "jacques.jean@techfides.com";

const { SLUG, TEST_TO, RESEND_API_KEY, SUPABASE_SERVICE_ROLE_KEY } = process.env;
if (!SLUG || !RESEND_API_KEY || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Need SLUG, RESEND_API_KEY and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const L = {
  en: { newPiece: "New from Jacques M. Jean", read: "Read the full article", readTime: "min read", unsub: "Unsubscribe", why: "You asked for new writing by email at jacquesmjean.com.", reply: "Reply to this email to reach me directly." },
  fr: { newPiece: "Nouveau de Jacques M. Jean", read: "Lire l’article complet", readTime: "min de lecture", unsub: "Se désabonner", why: "Vous avez demandé à recevoir les nouveaux articles par e-mail sur jacquesmjean.com.", reply: "Répondez à cet e-mail pour me joindre directement." },
  ht: { newPiece: "Nouvo atik Jacques M. Jean", read: "Li tout atik la", readTime: "min lekti", unsub: "Dezabòne", why: "Ou te mande resevwa nouvo atik pa imèl sou jacquesmjean.com.", reply: "Reponn imèl sa a pou kontakte m dirèkteman." },
  es: { newPiece: "Nuevo de Jacques M. Jean", read: "Leer el artículo completo", readTime: "min de lectura", unsub: "Darse de baja", why: "Pediste recibir nuevos artículos por correo en jacquesmjean.com.", reply: "Responde a este correo para escribirme directamente." },
  pt: { newPiece: "Novo de Jacques M. Jean", read: "Ler o artigo completo", readTime: "min de leitura", unsub: "Cancelar assinatura", why: "Você pediu para receber novos artigos por e-mail em jacquesmjean.com.", reply: "Responda a este e-mail para falar comigo diretamente." },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong style=\"color:#0F1E33\">$1</strong>")
    .replace(/\[(.+?)\]\((.+?)\)/g, (_, t, u) => `<a href="${u.startsWith("/") ? SITE + u : u}" style="color:#0F1E33">${t}</a>`);

const token = (email) => createHmac("sha256", SUPABASE_SERVICE_ROLE_KEY).update(email.toLowerCase()).digest("hex");
const unsubUrl = (email, locale) =>
  `${SUPABASE}/functions/v1/unsubscribe?e=${encodeURIComponent(email.toLowerCase())}&t=${token(email)}&l=${locale}`;

function render(ed, locale, email) {
  const t = L[locale] ?? L.en;
  const url = SITE + ed.path;
  const opening = ed.sections[0];
  const paras = opening.paragraphs.slice(0, 3).map((p) => `<p style="margin:0 0 18px;font-size:17px;line-height:1.65;color:#33415A">${inline(p)}</p>`).join("");
  const hero = ed.hero
    ? `<a href="${url}"><img src="${SITE}${ed.hero.src}" alt="${esc(ed.hero.alt)}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border-radius:8px;margin:0 0 24px"></a>`
    : "";
  const readMin = (ed.readTime.match(/\d+/) || ["7"])[0];
  return `<!doctype html><html><body style="margin:0;padding:0;background:#F4F6F9">
<div style="display:none;max-height:0;overflow:hidden">${esc(ed.summary)}</div>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#F4F6F9"><tr><td align="center" style="padding:32px 16px">
<table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:10px;overflow:hidden;font-family:Inter,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif">
<tr><td style="height:6px;background:#0F1E33;font-size:0">&nbsp;</td></tr>
<tr><td style="padding:32px 36px 0">
  <div style="font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#8A6A35;font-weight:600">${t.newPiece} · ${esc(ed.dateDisplay)}</div>
  <h1 style="margin:14px 0 14px;font-size:30px;line-height:1.15;letter-spacing:-.01em;color:#0F1E33;font-weight:700"><a href="${url}" style="color:#0F1E33;text-decoration:none">${esc(ed.title)}</a></h1>
  <p style="margin:0 0 22px;font-size:18px;line-height:1.55;color:#33415A">${esc(ed.dek)}</p>
  ${hero}
  ${opening.heading ? `<h2 style="margin:0 0 12px;font-size:21px;color:#0F1E33">${esc(opening.heading)}</h2>` : ""}
  ${paras}
  <table role="presentation" cellspacing="0" cellpadding="0" style="margin:8px 0 32px"><tr><td style="background:#0F1E33;border-radius:6px">
    <a href="${url}" style="display:inline-block;padding:14px 22px;color:#ffffff;font-weight:600;font-size:15px;text-decoration:none">${t.read} → ${readMin} ${t.readTime}</a>
  </td></tr></table>
</td></tr>
<tr><td style="padding:0 36px 32px">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #E3E8EF"><tr><td style="padding-top:20px">
    <table role="presentation" cellspacing="0" cellpadding="0"><tr>
      <td style="vertical-align:middle"><img src="${SITE}/images/headshot-linkedin.jpg" width="44" height="44" alt="" style="border-radius:6px;display:block"></td>
      <td style="vertical-align:middle;padding-left:12px;font-size:14px;line-height:1.4;color:#33415A"><strong style="color:#0F1E33">Jacques M. Jean</strong><br>Founder · Technologist · Global Operator</td>
    </tr></table>
    <p style="margin:18px 0 0;font-size:13px;line-height:1.6;color:#5E6B7E">${t.reply} ${t.why}<br>
    <a href="${unsubUrl(email, locale)}" style="color:#5E6B7E">${t.unsub}</a> · <a href="${SITE}/" style="color:#5E6B7E">jacquesmjean.com</a></p>
  </td></tr></table>
</td></tr>
</table></td></tr></table></body></html>`;
}

async function sb(path, init = {}) {
  const r = await fetch(`${SUPABASE}/rest/v1/${path}`, {
    ...init,
    headers: { apikey: SUPABASE_SERVICE_ROLE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json", ...(init.headers || {}) },
  });
  if (!r.ok) throw new Error(`${path}: ${r.status} ${await r.text()}`);
  return r.status === 204 ? null : r.json();
}

const article = await fetch(`${SITE}/newsletter/${SLUG}`).then((r) => (r.ok ? r.json() : null));
if (!article) { console.error(`No article feed at ${SITE}/newsletter/${SLUG} (is the site deployed?)`); process.exit(1); }

let recipients;
if (TEST_TO) {
  recipients = [{ email: TEST_TO, locale: "en" }];
} else {
  const subs = await sb(`subscribers?select=email,locale&unsubscribed_at=is.null`);
  const already = new Set((await sb(`sends?select=email&article_slug=eq.${encodeURIComponent(SLUG)}`)).map((s) => s.email.toLowerCase()));
  recipients = subs.filter((s) => !already.has(s.email.toLowerCase()));
}
console.log(`${recipients.length} recipient(s) for ${SLUG}${TEST_TO ? " (test)" : ""}`);

let sent = 0, failed = 0;
for (let i = 0; i < recipients.length; i += 100) {
  const chunk = recipients.slice(i, i + 100);
  const batch = chunk.map(({ email, locale }) => {
    const l = article.editions[locale] ? locale : "en";
    const ed = article.editions[l];
    return {
      from: FROM, to: [email], reply_to: REPLY_TO, subject: ed.title,
      html: render(ed, l, email),
      headers: { "List-Unsubscribe": `<${unsubUrl(email, l)}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" },
      tags: [{ name: "article", value: SLUG.slice(0, 50) }, { name: "locale", value: l }],
    };
  });
  const r = await fetch("https://api.resend.com/emails/batch", { method: "POST", headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(batch) });
  const body = await r.json();
  if (!r.ok) { failed += chunk.length; console.error("Resend error:", JSON.stringify(body)); continue; }
  sent += chunk.length;
  if (!TEST_TO) {
    const rows = chunk.map(({ email, locale }, k) => ({ article_slug: SLUG, email: email.toLowerCase(), locale: article.editions[locale] ? locale : "en", resend_id: body.data?.[k]?.id ?? null }));
    await sb("sends", { method: "POST", headers: { Prefer: "return=minimal,resolution=ignore-duplicates" }, body: JSON.stringify(rows) });
  }
}
console.log(`Sent ${sent}, failed ${failed}.`);
if (failed) process.exit(1);
