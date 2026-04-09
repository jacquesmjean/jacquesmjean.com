import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";
import { perspectives } from "@/data/perspectives";

export function generateStaticParams() {
  return perspectives.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const perspective = perspectives.find((p) => p.slug === slug);
  if (!perspective) return {};
  return {
    title: perspective.title,
    description: perspective.excerpt,
  };
}

export default async function PerspectivePage({ params }: Props) {
  const { slug } = await params;
  const perspective = perspectives.find((p) => p.slug === slug);

  if (!perspective) {
    notFound();
  }

  const formattedDate = new Date(perspective.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <LayoutShell>
      <article className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/perspectives"
            className="text-sm text-slate-500 hover:text-gold-400 transition-colors"
          >
            &larr; All Perspectives
          </Link>

          {/* Header */}
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-gold-600">
                {perspective.category}
              </span>
              <span className="text-xs text-slate-600">|</span>
              <span className="text-xs text-slate-500">{formattedDate}</span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white">
              {perspective.title}
            </h1>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              {perspective.excerpt}
            </p>
          </div>

          {/* Divider */}
          <div className="my-12 section-divider" />

          {/* Content */}
          <div className="prose-custom">
            {perspective.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="mt-12 mb-4 font-heading text-2xl font-semibold text-white"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3
                    key={i}
                    className="mt-8 mb-3 font-heading text-lg font-semibold text-gold-400"
                  >
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="my-4 space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        <span className="text-slate-300">
                          {item.replace("- ", "")}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              // Handle bold text within paragraphs
              const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} className="my-4 text-slate-300 leading-relaxed">
                  {parts.map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={j} className="text-white font-semibold">
                          {part.replace(/\*\*/g, "")}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* Author / CTA */}
          <div className="mt-16 section-divider pt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-slate-500">Written by</p>
                <p className="text-white font-heading font-semibold">
                  Jacques M. Jean
                </p>
              </div>
              <Button href="/contact" variant="secondary">
                Discuss This Topic
              </Button>
            </div>
          </div>
        </div>
      </article>
    </LayoutShell>
  );
}
