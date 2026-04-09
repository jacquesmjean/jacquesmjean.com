import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide rounded transition-all duration-200";
  const variants = {
    primary:
      "bg-gold-400 text-obsidian-950 hover:bg-gold-300 active:bg-gold-500",
    secondary:
      "border border-gold-600 text-gold-300 hover:bg-gold-400/10 hover:border-gold-400",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
