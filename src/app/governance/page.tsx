import type { Metadata } from "next";
import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";
import { boardPositions } from "@/data/board-positions";

export const metadata: Metadata = {
  title: "Governance & Leadership",
  description:
    "Board governance and leadership roles across technology, investment, and international development organizations.",
};

export default function GovernancePage() {
  return (
    <LayoutShell>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-glow-gold">
            Governance & <span className="text-gold-400">Leadership</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Active board and leadership positions across technology,
            investment, and international development — guided by the
            conviction that effective governance is the foundation of
            sustainable transformation.
          </p>
        </div>
      </section>

      {/* Board Positions */}
      <section className="section-divider py-24 px-6 bg-obsidian-900">
        <div className="mx-auto max-w-5xl space-y-8">
          {boardPositions.map((pos) => (
            <div
              key={pos.organization}
              className="p-8 md:p-10 bg-obsidian-800 border border-slate-700/30 rounded-lg card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white">
                    {pos.organization}
                  </h2>
                  <p className="mt-1 text-gold-400 font-medium">{pos.role}</p>
                </div>
                {pos.active && (
                  <span className="flex items-center gap-2 text-sm text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Currently Active
                  </span>
                )}
              </div>
              <p className="mt-4 text-slate-400 leading-relaxed max-w-3xl">
                {pos.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Governance Philosophy */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-white">
            Governance <span className="text-gold-400">Philosophy</span>
          </h2>
          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            Effective governance is not about control — it is about creating the
            conditions in which organizations can take informed risks, move
            decisively, and build trust with stakeholders. In an era of rapid AI
            adoption, boards must evolve from passive oversight to active
            strategic partnership.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Jacques brings this philosophy to every board he serves, advocating
            for governance structures that are rigorous enough to ensure
            accountability and flexible enough to enable innovation.
          </p>
          <div className="mt-12">
            <Button href="/contact">Discuss Board Engagement</Button>
          </div>
        </div>
      </section>
    </LayoutShell>
  );
}
