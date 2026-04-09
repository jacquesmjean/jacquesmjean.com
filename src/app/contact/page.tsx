import type { Metadata } from "next";
import LayoutShell from "@/components/LayoutShell";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Jacques M. Jean for strategic advisory discussions, board engagements, or policy consultations.",
};

export default function ContactPage() {
  return (
    <LayoutShell>
      <section className="pt-32 pb-24 px-6 min-h-screen flex items-start justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-glow-gold">
            Let&apos;s <span className="text-gold-400">Connect</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            For strategic advisory discussions, board engagements, policy
            consultations, or partnership inquiries.
          </p>

          <div className="mt-16 space-y-8">
            {/* Email */}
            <div className="p-8 bg-obsidian-800 border border-slate-700/30 rounded-lg">
              <h2 className="font-heading text-xl font-semibold text-white">
                Email
              </h2>
              <p className="mt-2 text-slate-400 text-sm">
                Preferred for initial outreach and advisory inquiries.
              </p>
              <div className="mt-4">
                <Button
                  href="mailto:engage@jacquesmjean.com?subject=Advisory%20Inquiry"
                  external
                >
                  engage@jacquesmjean.com
                </Button>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="p-8 bg-obsidian-800 border border-slate-700/30 rounded-lg">
              <h2 className="font-heading text-xl font-semibold text-white">
                LinkedIn
              </h2>
              <p className="mt-2 text-slate-400 text-sm">
                Connect for ongoing insights and professional updates.
              </p>
              <div className="mt-4">
                <Button
                  href="https://www.linkedin.com/in/jacquesmjean"
                  variant="secondary"
                  external
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-16">
            <p className="text-sm text-slate-500">
              Based in Frisco, Texas &middot; Operating Globally
            </p>
          </div>
        </div>
      </section>
    </LayoutShell>
  );
}
