import type { Metadata } from "next";
import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";
import SectionHeading from "@/components/SectionHeading";
import { perspectives } from "@/data/perspectives";

export const metadata: Metadata = {
  title: "Perspectives",
  description:
    "Insights on AI governance, digital transformation, and global technology policy from Jacques M. Jean.",
};

export default function PerspectivesPage() {
  const featured = perspectives.find((p) => p.featured);
  const others = perspectives.filter((p) => !p.featured);

  return (
    <LayoutShell>
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-glow-gold">
            Perspectives
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Insights on AI governance, institutional transformation, and the
            systems that shape global technology adoption.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-4xl">
            <Link href={`/perspectives/${featured.slug}`} className="block group">
              <div className="p-8 md:p-12 bg-obsidian-800 border border-slate-700/30 rounded-lg border-l-4 border-l-gold-400 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs uppercase tracking-wider text-gold-600">
                    Featured
                  </span>
                  <span className="text-xs text-slate-600">|</span>
                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white group-hover:text-gold-400 transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {featured.excerpt}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Other perspectives */}
      {others.length > 0 && (
        <section className="section-divider py-24 px-6 bg-obsidian-900">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="More Perspectives" />
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/perspectives/${p.slug}`}
                  className="block group"
                >
                  <div className="h-full p-6 bg-obsidian-800 border border-slate-700/30 rounded-lg card-hover">
                    <span className="text-xs uppercase tracking-wider text-gold-600">
                      {p.category}
                    </span>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-white group-hover:text-gold-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {p.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-slate-500">
                      {new Date(p.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </LayoutShell>
  );
}
