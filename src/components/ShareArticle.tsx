"use client";

import { useState, useSyncExternalStore } from "react";

type Props = {
  /** Canonical URL (absolute) */
  url: string;
  /** Title, used as share text/subject */
  title: string;
  /** UI language for labels */
  locale?: string;
  /** Visual style: light (default) or for dark backgrounds */
  tone?: "light" | "dark";
};

const LABELS: Record<string, { share: string; copy: string; copied: string; email: string; more: string; intro: string }> = {
  en: { share: "Share", copy: "Copy link", copied: "Copied!", email: "Email", more: "More", intro: "I thought you'd want to read this:" },
  fr: { share: "Partager", copy: "Copier le lien", copied: "Copié !", email: "E-mail", more: "Plus", intro: "Je pense que ceci va t'intéresser :" },
  ht: { share: "Pataje", copy: "Kopye lyen an", copied: "Kopye!", email: "Imèl", more: "Plis", intro: "Mwen panse sa ap enterese w:" },
  es: { share: "Compartir", copy: "Copiar enlace", copied: "¡Copiado!", email: "Correo", more: "Más", intro: "Pensé que te interesaría leer esto:" },
  pt: { share: "Compartilhar", copy: "Copiar link", copied: "Copiado!", email: "E-mail", more: "Mais", intro: "Achei que você gostaria de ler isto:" },
};

const noopSubscribe = () => () => {};

/**
 * Share toolbar for a perspectives article.
 * - Copy link (clipboard API)
 * - LinkedIn (sharing-share-offsite intent)
 * - X / Twitter (tweet intent)
 * - Email (mailto)
 * - Native Share API (mobile; only shown when supported)
 *
 * No tracking, no bundle size tax from third-party SDKs.
 */
export default function ShareArticle({ url, title, locale = "en", tone = "light" }: Props) {
  const L = LABELS[locale] ?? LABELS.en;
  const [copied, setCopied] = useState(false);
  // Native share sheet (phones): read once on the client, never during server render.
  const hasNativeShare = useSyncExternalStore(
    noopSubscribe,
    () => typeof (navigator as unknown as { share?: unknown }).share === "function",
    () => false
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard permission denied — swallow */
    }
  };

  const nativeShare = async () => {
    try {
      await (
        navigator as unknown as {
          share: (data: { title: string; url: string }) => Promise<void>;
        }
      ).share({ title, url });
    } catch {
      /* user canceled share sheet — swallow */
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`;
  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const mailHref = `mailto:?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(`${L.intro}\n\n${url}`)}`;

  const btnClass =
    tone === "dark"
      ? "inline-flex items-center gap-2 rounded-md border border-paper/15 px-3 py-1.5 text-sm text-paper/85 hover:border-accent-soft hover:text-accent-soft transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
      : "inline-flex items-center gap-2 rounded-md border border-ink/10 bg-paper px-3 py-1.5 text-sm text-ink hover:border-accent/40 hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <span
        className={`mr-1 text-[11px] font-medium uppercase tracking-wider ${tone === "dark" ? "text-paper/45" : "text-ink-muted"}`}
      >
        {L.share}
      </span>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={btnClass}
      >
        <IconWhatsApp />
        <span>WhatsApp</span>
      </a>

      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? L.copied : L.copy}
        className={btnClass}
      >
        {copied ? <IconCheck /> : <IconLink />}
        <span aria-live="polite">{copied ? L.copied : L.copy}</span>
      </button>

      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={btnClass}
      >
        <IconLinkedIn />
        <span>LinkedIn</span>
      </a>

      <a
        href={facebookHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={btnClass}
      >
        <IconFacebook />
        <span>Facebook</span>
      </a>

      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className={btnClass}
      >
        <IconX />
        <span>X</span>
      </a>

      <a
        href={mailHref}
        aria-label={L.email}
        className={btnClass}
      >
        <IconMail />
        <span>{L.email}</span>
      </a>

      {hasNativeShare && (
        <button
          type="button"
          onClick={nativeShare}
          aria-label={L.more}
          className={btnClass}
        >
          <IconShare />
          <span>{L.more}&hellip;</span>
        </button>
      )}
    </div>
  );
}

/* ----------------- icons ----------------- */

const svgProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

function IconLink() {
  return (
    <svg
      {...svgProps}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      {...svgProps}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg {...svgProps} fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.338V9.608H5.667v8.73h2.672zM7.003 8.42c.835 0 1.511-.676 1.511-1.511 0-.835-.676-1.511-1.511-1.511-.835 0-1.511.676-1.511 1.511 0 .835.676 1.511 1.511 1.511zm11.335 9.918v-4.783c0-2.315-.502-4.095-3.207-4.095-1.3 0-2.172.714-2.528 1.389h-.036V9.608h-2.56v8.73h2.667v-4.32c0-1.14.216-2.245 1.629-2.245 1.392 0 1.41 1.303 1.41 2.318v4.247h2.625z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg {...svgProps} fill="currentColor">
      <path d="M18.244 2H21.5l-7.5 8.573L22.5 22h-6.845l-5.36-7.015L4.1 22H.843l8.03-9.173L.5 2h7.014l4.846 6.418L18.244 2zm-1.2 18h1.8L7.1 4H5.225l11.82 16z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      {...svgProps}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg
      {...svgProps}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg {...svgProps} fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.46 9.46 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.44 9.44 0 0 1-1.45-5.04c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.42 9.42 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.53A11.33 11.33 0 0 0 12.04.62C5.76.62.65 5.73.65 12.01c0 2.01.52 3.97 1.52 5.7L.55 23.62l6.04-1.58a11.37 11.37 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg {...svgProps} fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}
