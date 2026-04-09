export interface BoardPosition {
  organization: string;
  role: string;
  description: string;
  active: boolean;
}

export const boardPositions: BoardPosition[] = [
  {
    organization: "OVYNA",
    role: "Board Chair",
    description:
      "Leading governance and strategic direction for OVYNA's mission to advance technology-driven economic development across Africa.",
    active: true,
  },
  {
    organization: "MUSA Asset Management",
    role: "Board Chair",
    description:
      "Overseeing investment strategy and governance for a diversified asset management firm focused on emerging market opportunities.",
    active: true,
  },
  {
    organization: "TechFides",
    role: "Founder & Board Chair",
    description:
      "Founded and leads TechFides, a sovereign AI infrastructure company delivering compliant AI solutions for regulated industries including Legal, Medical, Auto, and Trades.",
    active: true,
  },
  {
    organization: "American Business Council Gabon",
    role: "Co-Chair (Founding)",
    description:
      "Co-founded the council to facilitate bilateral trade, investment, and business development between the United States and Gabon.",
    active: true,
  },
];
