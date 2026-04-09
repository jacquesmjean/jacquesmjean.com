export interface AdvisoryService {
  title: string;
  description: string;
  focusAreas: string[];
}

export const advisoryServices: AdvisoryService[] = [
  {
    title: "AI Governance & Institutional Systems",
    description:
      "Designing frameworks that ensure AI adoption aligns with regulatory compliance, ethical standards, and institutional accountability. From boardroom strategy to policy architecture.",
    focusAreas: [
      "AI governance frameworks for regulated industries",
      "Institutional risk assessment and compliance alignment",
      "Board-level AI oversight structures",
      "Policy architecture for responsible AI deployment",
    ],
  },
  {
    title: "Infrastructure Strategy & Capital Structuring",
    description:
      "Architecting the technical and financial foundations that enable enterprise-scale AI transformation. Aligning infrastructure investments with strategic outcomes and capital efficiency.",
    focusAreas: [
      "Enterprise AI infrastructure roadmaps",
      "Capital allocation for digital transformation",
      "Sovereign technology infrastructure planning",
      "Cost optimization and ROI frameworks",
    ],
  },
  {
    title: "Cross-Border Capital Integration",
    description:
      "Navigating the intersection of technology, policy, and capital across borders. Facilitating investment flows and partnerships that accelerate economic modernization through AI.",
    focusAreas: [
      "Public-private partnership structuring",
      "Cross-border technology investment advisory",
      "Emerging market digital infrastructure",
      "International trade and technology policy",
    ],
  },
];
