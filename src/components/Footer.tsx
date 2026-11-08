import type { Messages } from "@/i18n";
import ShareArticle from "@/components/ShareArticle";
import SubscribeForm from "@/components/SubscribeForm";
import { localeHref, type Locale } from "@/i18n";

const SHARE_SITE: Record<Locale, string> = {
  en: "Know someone who should read this? Share the site.",
  fr: "Quelqu\u2019un devrait lire ceci ? Partagez le site.",
  ht: "Ou konnen yon moun ki ta dwe li sa? Pataje sit la.",
  es: "¿Conoces a alguien que debería leer esto? Comparte el sitio.",
  pt: "Conhece alguém que deveria ler isto? Compartilhe o site.",
};

export default function Footer({
  messages,
  locale = "en",
  nav,
  showSubscribe = true,
}: {
  messages: Messages["footer"];
  locale?: Locale;
  nav?: Messages["nav"];
  /** Off on pages that already show a signup in the body. */
  showSubscribe?: boolean;
}) {
  const base = localeHref(locale);
  const p = (path: string) => (base === "/" ? path : `${base}${path}`);

  return (
    <footer className="border-t border-paper/10 bg-ink text-paper-warm/60">
      <div className="mx-auto max-w-6xl px-6 pt-14">
        {showSubscribe && <SubscribeForm locale={locale} source={`footer:${base}`} variant="footer" />}
        <div className={`${showSubscribe ? "mt-10 " : ""}flex flex-col gap-4 border-b border-paper/10 pb-10`}>
          <div className="font-display text-lg text-paper">{SHARE_SITE[locale]}</div>
          <ShareArticle
            url={`https://jacquesmjean.com${base === "/" ? "/" : `${base}/`}`}
            title="Jacques M. Jean · Founder, technologist, global operator"
            locale={locale}
            tone="dark"
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <div className="font-display text-base text-paper">Jacques M. Jean</div>
          <div className="mt-3 text-xs leading-relaxed">
            Founder · Technologist · Global Operator
          </div>
          <div className="mt-6 text-xs">
            © {new Date().getFullYear()} Jacques M. Jean. {messages.rights}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-8 text-sm">
          {nav && (
            <div className="flex flex-col gap-3">
              <div className="text-[10px] font-medium uppercase tracking-wider text-paper-warm/35">
                {messages.siteLabel}
              </div>
              <a className="hover:text-accent-soft transition-colors" href={p("/story")}>{nav.story}</a>
              <a className="hover:text-accent-soft transition-colors" href={p("/ventures")}>{nav.ventures}</a>
              <a className="hover:text-accent-soft transition-colors" href={p("/perspectives")}>{nav.perspectives}</a>
              <a className="hover:text-accent-soft transition-colors" href={p("/speaking")}>{nav.speaking}</a>
              <a className="hover:text-accent-soft transition-colors" href={p("/contact")}>{nav.contact}</a>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-medium uppercase tracking-wider text-paper-warm/35">
              {messages.venturesLabel}
            </div>
            <a className="hover:text-accent-soft transition-colors" href="https://techfides.com" target="_blank" rel="noreferrer">TechFides</a>
            <a className="hover:text-accent-soft transition-colors" href="https://levoila.org" target="_blank" rel="noreferrer">Levoila</a>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-medium uppercase tracking-wider text-paper-warm/35">
              {messages.elsewhereLabel}
            </div>
            <a className="hover:text-accent-soft transition-colors" href="https://www.linkedin.com/in/jacques-m-jean" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-accent-soft transition-colors" href="mailto:engage@jacquesmjean.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
