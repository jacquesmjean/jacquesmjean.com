import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/advisory", label: "Advisory" },
  { href: "/governance", label: "Governance" },
  { href: "/perspectives", label: "Perspectives" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="section-divider bg-obsidian-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Name + positioning */}
          <div>
            <Link
              href="/"
              className="font-heading text-lg tracking-wide text-white hover:text-gold-400 transition-colors"
            >
              JACQUES M. JEAN
            </Link>
            <p className="mt-2 text-sm text-slate-500 max-w-xs">
              AI Governance Advisor & Global Technologist
            </p>
          </div>

          {/* Center: Nav */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Connect */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:engage@jacquesmjean.com"
              className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/jacquesmjean"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-gold-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 section-divider text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Jacques M. Jean. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
