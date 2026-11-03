"use client";

import { useEffect, useState } from "react";

type Props = {
  /** Canonical article URL (absolute) */
  url: string;
  /** Article title, used as share text/subject */
  title: string;
};

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
export default function ShareArticle({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const [hasNativeShare, setHasNativeShare] = useState(false);

  useEffect(() => {
    setHasNativeShare(
      typeof navigator !== "undefined" &&
        typeof (navigator as unknown as { share?: unknown }).share === "function"
    );
  }, []);

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

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const mailHref = `mailto:?subject=${encodeURIComponent(
    title
  )}&body=${encodeURIComponent(`I thought you'd want to read this:\n\n${url}`)}`;

  const btnClass =
    "inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-sm text-ink hover:border-accent/40 hover:text-accent transition-colors";

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      <span className="mr-1 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
        Share
      </span>

      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? "Link copied to clipboard" : "Copy link"}
        className={btnClass}
      >
        {copied ? <IconCheck /> : <IconLink />}
        <span>{copied ? "Copied!" : "Copy link"}</span>
      </button>

      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={btnClass}
      >
        <IconLinkedIn />
        <span>LinkedIn</span>
      </a>

      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={btnClass}
      >
        <IconX />
        <span>X</span>
      </a>

      <a
        href={mailHref}
        aria-label="Share by email"
        className={btnClass}
      >
        <IconMail />
        <span>Email</span>
      </a>

      {hasNativeShare && (
        <button
          type="button"
          onClick={nativeShare}
          aria-label="Open native share sheet"
          className={btnClass}
        >
          <IconShare />
          <span>Share&hellip;</span>
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
