import type { Metadata } from "next";
import Image from "next/image";
import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jacques M. Jean — AI governance advisor and global technologist with 25+ years of Fortune 500 leadership across five continents.",
};

const timeline = [
  {
    period: "2000 – Present",
    role: "Founder & Board Chair",
    org: "TechFides",
    detail:
      "Founded a sovereign AI infrastructure company delivering compliant AI solutions for regulated industries. Built operations across the Americas, Europe, and Africa.",
  },
  {
    period: "Fortune 500 Career",
    role: "Senior Technology Leadership",
    org: "Honeywell, Invensys, Schneider Electric",
    detail:
      "Led enterprise digital transformation initiatives generating $2B+ in revenue enablement and $125M+ in operational savings. Directed global technology teams across multiple continents.",
  },
  {
    period: "Board & Advisory",
    role: "Board Chair & Advisor",
    org: "OVYNA, MUSA Asset Management, ABC Gabon",
    detail:
      "Serves as Board Chair for multiple organizations spanning technology, asset management, and international trade. Co-founded the American Business Council Gabon.",
  },
  {
    period: "Recognition",
    role: "Member & Fellow",
    org: "Forbes Technology Council, Goldman Sachs 10KSB",
    detail:
      "Selected for the Forbes Technology Council. Completed the Goldman Sachs 10,000 Small Businesses program, applying enterprise-scale strategy to high-growth ventures.",
  },
];

export default function AboutPage() {
  return (
    <LayoutShell>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden glow-gold shrink-0">
              <Image
                src="/images/headshot.png"
                alt="Jacques M. Jean"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-glow-gold">
                About Jacques
              </h1>
              <p className="mt-2 text-lg text-gold-400 font-heading">
                AI Governance Advisor & Global Technologist
              </p>
              <p className="mt-6 text-slate-300 leading-relaxed">
                Jacques M. Jean is an AI transformation advisor and global
                technologist who counsels governments and enterprise leaders on
                the institutional frameworks required to govern AI adoption at
                scale. With over 25 years of Fortune 500 leadership spanning
                five continents, he brings a rare combination of operational
                depth and strategic vision to every engagement.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                His work sits at the intersection of technology, policy, and
                capital — helping organizations navigate the transition from
                traditional operations to AI-augmented enterprise. Jacques is
                known for his systems-level approach: building governance
                frameworks, infrastructure strategies, and cross-border capital
                structures that create lasting competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-divider py-24 px-6 bg-obsidian-900">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-semibold text-white text-center mb-16">
            Career & <span className="text-gold-400">Leadership</span>
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="relative pl-8 pb-12 last:pb-0 border-l border-gold-600/30"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1/2 rounded-full bg-gold-400" />
                <span className="text-xs uppercase tracking-wider text-gold-600">
                  {item.period}
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm text-gold-400">{item.org}</p>
                <p className="mt-2 text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-white">
            Guiding <span className="text-gold-400">Philosophy</span>
          </h2>
          <blockquote className="mt-8 text-xl text-slate-300 italic font-heading leading-relaxed">
            &ldquo;Technology without governance is chaos, and governance without
            technology is stagnation. The future belongs to those who master
            both.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-gold-400">— Jacques M. Jean</p>
          <div className="mt-12">
            <Button href="/contact">Start a Conversation</Button>
          </div>
        </div>
      </section>
    </LayoutShell>
  );
}
