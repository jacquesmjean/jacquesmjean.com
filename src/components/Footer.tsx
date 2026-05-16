import type { Messages } from "@/i18n";

export default function Footer({
  messages,
}: {
  messages: Messages["footer"];
}) {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper-warm/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="font-display text-sm tracking-tight">
          © {new Date().getFullYear()} Jacques M. Jean. {messages.rights}
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-wider">
          <a
            className="hover:text-accent-soft transition-colors"
            href="https://techfides.com"
            target="_blank"
            rel="noreferrer"
          >
            TechFides
          </a>
          <a
            className="hover:text-accent-soft transition-colors"
            href="https://levoila.org"
            target="_blank"
            rel="noreferrer"
          >
            Levoila
          </a>
          <a
            className="hover:text-accent-soft transition-colors"
            href="https://www.linkedin.com/in/jacques-m-jean"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-accent-soft transition-colors"
            href="mailto:engage@jacquesmjean.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
