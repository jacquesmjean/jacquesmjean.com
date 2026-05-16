import Image from "next/image";
import Link from "next/link";
import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { advisoryServices } from "@/data/advisory-services";
import { boardPositions } from "@/data/board-positions";
import { perspectives } from "@/data/perspectives";

const impactMetrics = [
  { value: "$2B+", label: "Revenue Digital Enablement" },
  { value: "$125M+", label: "Enterprise Savings Delivered" },
  { value: "5", label: "Continents of Operation" },
  { value: "25+", label: "Years Fortune 500 Leadership" },
];

const featuredPerspective = perspectives.find((p) => p.featured);

export default function HomePage() {
  return (
    <LayoutShell>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="mx-auto max-w-4xl text-center pt-20">
          <div className="mb-8 flex justify-center">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden glow-gold">
              <Image
                src="/images/headshot.png"
                alt="Jacques M. Jean"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white text-glow-gold">
            Jacques M. Jean
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gold-400 font-heading">
            AI Governance Advisor & Global Technologist
          </p>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Shaping the institutional frameworks that govern how AI transforms
            enterprise, capital, and policy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/advisory">Explore Advisory Services</Button>
            <Button href="/contact" variant="secondary">
              Request a Discussion
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="section-divider bg-obsidian-900 py-6">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-slate-400 tracking-wide">
          <span>Forbes Technology Council</span>
          <span className="hidden sm:inline text-gold-600/40">|</span>
          <span>Goldman Sachs 10KSB</span>
          <span className="hidden sm:inline text-gold-600/40">|</span>
          <span>25+ Years Fortune 500</span>
          <span className="hidden sm:inline text-gold-600/40">|</span>
          <span>5 Continents</span>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Enterprise Impact"
            subtitle="Measurable outcomes across global enterprise transformation engagements."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 bg-obsidian-800 border border-slate-700/30 rounded-lg text-center card-hover"
              >
                <div className="font-heading text-3xl md:text-4xl font-bold text-gold-400">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas */}
      <section className="section-divider py-24 px-6 bg-obsidian-900">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Strategic Focus"
            accentWord="Focus"
            subtitle="Three pillars of advisory engagement, designed for institutional leaders navigating the AI transition."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {advisoryServices.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-obsidian-800 border border-slate-700/30 rounded-lg border-l-2 border-l-gold-600 card-hover"
              >
                <h3 className="font-heading text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/advisory"
                  className="mt-4 inline-block text-sm text-gold-400 hover:text-gold-300 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Perspective */}
      {featuredPerspective && (
        <section className="py-24 px-6">
          <div className="mx-auto max-w-4xl">
            <SectionHeading title="Featured Perspective" />
            <div className="mt-12 p-8 md:p-12 bg-obsidian-800 border border-slate-700/30 rounded-lg border-l-4 border-l-gold-400">
              <span className="text-xs uppercase tracking-wider text-gold-600">
                {featuredPerspective.category}
              </span>
              <h3 className="mt-3 font-heading text-2xl md:text-3xl font-semibold text-white">
                {featuredPerspective.title}
              </h3>
              <p className="mt-4 text-slate-400 leading-relaxed">
                {featuredPerspective.excerpt}
              </p>
              <Button
                href={`/perspectives/${featuredPerspective.slug}`}
                variant="secondary"
                className="mt-6"
              >
                Read the Paper
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Governance Snapshot */}
      <section className="section-divider py-24 px-6 bg-obsidian-900">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Governance & Leadership"
            subtitle="Active board and leadership roles across technology, investment, and international development."
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {boardPositions.map((pos) => (
              <div
                key={pos.organization}
                className="p-6 bg-obsidian-800 border border-slate-700/30 rounded-lg card-hover"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {pos.organization}
                    </h3>
                    <p className="mt-1 text-sm text-gold-400">{pos.role}</p>
                  </div>
                  {pos.active && (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  {pos.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/governance" variant="secondary">
              View All Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
            Engage with <span className="text-gold-400">Jacques</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            For strategic advisory discussions, board engagements, or policy
            consultations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="mailto:engage@jacquesmjean.com" external>
              Send an Email
            </Button>
            <Button
              href="https://www.linkedin.com/in/jacques-m-jean"
              variant="secondary"
              external
            >
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </LayoutShell>
  );
}
