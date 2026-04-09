import type { Metadata } from "next";
import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";
import { advisoryServices } from "@/data/advisory-services";

export const metadata: Metadata = {
  title: "Advisory Services",
  description:
    "Strategic advisory in AI governance, infrastructure strategy, and cross-border capital integration for governments and enterprise leaders.",
};

const engagementModels = [
  {
    title: "Retained Advisory",
    description:
      "Ongoing strategic counsel for boards and executive teams navigating complex AI transformation initiatives.",
  },
  {
    title: "Project-Based Engagement",
    description:
      "Focused advisory for specific initiatives — governance framework design, infrastructure assessments, or investment structuring.",
  },
  {
    title: "Board-Level Advisory",
    description:
      "Direct engagement with boards of directors on AI oversight, risk governance, and strategic technology direction.",
  },
];

export default function AdvisoryPage() {
  return (
    <LayoutShell>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-glow-gold">
            Strategic <span className="text-gold-400">Advisory</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Advisory services designed for institutional leaders who understand
            that AI transformation demands more than technology — it demands new
            frameworks for governance, capital, and cooperation.
          </p>
        </div>
      </section>

      {/* Service Lines */}
      <section className="section-divider py-24 px-6 bg-obsidian-900">
        <div className="mx-auto max-w-5xl space-y-16">
          {advisoryServices.map((service, i) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 items-start`}
            >
              <div className="flex-1">
                <div className="w-12 h-0.5 bg-gold-400 mb-6" />
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm uppercase tracking-wider text-gold-600 mb-4">
                  Focus Areas
                </h3>
                <ul className="space-y-3">
                  {service.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                      <span className="text-slate-300">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl font-semibold text-white text-center">
            Engagement <span className="text-gold-400">Models</span>
          </h2>
          <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
            Flexible structures designed to meet the needs of governments,
            enterprises, and boards at every stage of AI transformation.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="p-8 bg-obsidian-800 border border-slate-700/30 rounded-lg card-hover"
              >
                <h3 className="font-heading text-lg font-semibold text-white">
                  {model.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-divider py-24 px-6 bg-obsidian-900">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-white">
            Begin a <span className="text-gold-400">Strategic Discussion</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Whether you are designing an AI governance framework, evaluating
            infrastructure investments, or exploring cross-border opportunities.
          </p>
          <div className="mt-8">
            <Button href="/contact">Schedule a Consultation</Button>
          </div>
        </div>
      </section>
    </LayoutShell>
  );
}
