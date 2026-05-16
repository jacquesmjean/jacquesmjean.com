const links = [
  { href: "#work", label: "What I Do" },
  { href: "#techfides", label: "TechFides" },
  { href: "#levoila", label: "Levoila" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink hover:text-accent transition-colors"
        >
          Jacques M. Jean
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-accent transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
