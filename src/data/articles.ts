export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface ArticleFaqItem {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  dek: string;
  datePublished: string;
  dateDisplay: string;
  readTime: string;
  keywords: string[];
  ogImage: string;
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
}

// Inline markup: **bold** is rendered as emphasized ink text.
export const articles: Article[] = [
  {
    slug: "world-stopped-waiting-for-the-us-sovereign-ai",
    eyebrow: "Perspectives · Sovereign AI",
    title: "The World Stopped Waiting for the United States. It Did Not Stop Watching.",
    metaTitle: "Sovereign AI and the World That Stopped Waiting for the U.S. | Jacques M. Jean",
    metaDescription:
      "Europe is building its exit, Canada is convening, China is giving its AI away, and Africa is choosing partners. A founder who built systems in 15 countries on what the U.S. must do after November 3.",
    dek: "Europe is building its exit. Canada is convening the alliances we used to. China is giving its AI away. A field report from the rooms where the world is choosing its technology partners, and what the next Congress must prove.",
    datePublished: "2026-11-01",
    dateDisplay: "November 2026",
    readTime: "8 min read",
    keywords: [
      "sovereign AI",
      "digital sovereignty",
      "US technology leadership",
      "global trust in American tech",
      "AI geopolitics",
      "2026 midterms AI policy",
    ],
    ogImage: "/images/perspectives/sovereign-ai-og.png",
    sections: [
      {
        paragraphs: [
          "Here is an uncomfortable number. Going into 2026, the Edelman Trust Barometer found trust in technology companies falling worldwide, and trust in U.S. tech now runs roughly 30 points behind trust in China's. Not behind Europe's. Behind China's.",
          "I have spent 25 years building technology systems in 15 countries, for companies like Honeywell and Schneider Electric, and I have never seen the map move this fast. The question in every boardroom I sit in, from Dallas to Libreville, is no longer “which U.S. platform do we buy?” It is “how much of our future are we willing to rent from a country we no longer fully trust?”",
          "That question has a name now: sovereign AI. **Sovereign AI means a nation or a business owns the intelligence it runs on: the models, the hardware they live on, the data they learn from, and the power to keep them running no matter what a vendor or a foreign government decides.** Watch what the world is doing about it, region by region, and the pattern is impossible to miss.",
        ],
      },
      {
        heading: "Europe is building its exit",
        paragraphs: [
          "In January, the European Parliament voted 471 to 68 to begin unwinding its dependence on foreign technology. The numbers behind that vote explain it. Three U.S. companies hold about 70 percent of Europe's cloud market. The EU depends on non-EU providers for more than 80 percent of its digital products and services. One member of parliament put it bluntly: without action, Europe risks becoming a digital colony.",
          "And the politics underneath are combustible. This fall, cost-of-living protests swept European capitals, led by young people squeezed between flat wages and rising prices. In Italy, thousands marched against the cost of living and arms spending in the same breath. A strained, angry Europe is exactly the Europe that stops buying American by default.",
          "The parliament's vote is non-binding. The direction is not. Gartner found that 61 percent of Western European CIOs already plan to shift workloads toward local providers. Europe will take a decade to get there. It has decided to start.",
        ],
      },
      {
        heading: "Canada walked into the room the U.S. left",
        paragraphs: [
          "Here is the development Americans are not watching. Canada, our next-door neighbor, is quietly doing the convening the United States used to do. In February, Canada and Germany launched the Sovereign Technology Alliance at the Munich Security Conference. In June, Prime Minister Carney's government shipped a national AI strategy with sovereign compute at its center and twelve international AI partnerships already signed, from the EU to India to the Gulf. Canada's AI minister summed up the posture in five words: “Canada and Germany are choosing to build.”",
          "When middle powers need a trusted partner on AI, they are finding one. It is just not us.",
        ],
      },
      {
        heading: "China is not selling. It is giving.",
        paragraphs: [
          "China understood something Washington has not: in most of the world, the barrier to AI is price and permission. So China removed both. Its best open models now sit within a generation of U.S. frontier systems, and the weights are free to download, free to run on your own hardware, free from an export officer's mood. Beijing wrapped that with patient diplomacy: a Global AI Governance plan offering capacity-building to developing countries, and a new world AI cooperation body headquartered in Shanghai. Chinese labs are pitching “sovereign AI agents” to governments across the Belt and Road.",
          "And China is rebuilding its own house to match. Between 2021 and 2025, Beijing cut 12,200 university degree programs, more than 30 percent of everything its universities offered, and replaced them with AI, robotics, semiconductor engineering, and data science. Agree or disagree with the method, that is a nation redesigning its education system around the future instead of defending the past.",
          "Call the diplomacy odd. It is working, because it answers the question the customer is actually asking: will this still be mine tomorrow?",
        ],
      },
      {
        heading: "The watchers: Latin America and Africa",
        paragraphs: [
          "Latin America is watching closely, and efficiently. Brazil just split $444 million in AI infrastructure between the two camps: a supercomputing center in Rio with Huawei and iFlytek, and a second machine expected to run on Nvidia. Brasília said the strategy out loud: depend on no single company, technology, or country. That is not confusion. That is discipline.",
          "And Africa, the fastest-growing digital market on earth, is the one the U.S. has most thoroughly neglected. I co-chair the American Business Council in Gabon, I serve clients across the continent, and I can tell you what the room looks like: Chinese infrastructure is present, priced, and committed, while U.S. engagement is a webinar and a wait-and-see. The continent that will hold a quarter of humanity by 2050 is choosing its technology partners right now. We are mostly not in the bidding.",
        ],
      },
      {
        heading: "The message we send from home",
        paragraphs: [
          "Why does the world doubt us? Because before the world judges a country's exports, it judges how that country treats its own people. And on that score, we are telling a story no diplomat can spin.",
          "Start with healthcare. Roughly two out of three personal bankruptcies in the United States involve medical bills. Think about what that means. You can work your whole life in the wealthiest country in history, serve it honestly, and the month you lose your job, one hospital stay can erase everything you built. No other advanced nation does this to its people. The world knows it, because their citizens who studied here went home and told them.",
          "Meanwhile we spend a defense budget approaching a trillion dollars a year, on top of the roughly eight trillion dollars that Brown University's Costs of War project counts for the post-9/11 wars. I am not naive about security. I am saying what every operator knows: resources follow priorities, and our priorities are visible from every capital on earth.",
          "Education tells the same story. The world used to send us its brightest because our universities were the destination. This year, new international student enrollment dropped roughly 20 percent, and fall enrollment was projected to fall another 10 percent, driven by our own visa policies. We are not being beaten. We are withdrawing. While China rebuilds a third of its university system around AI, we are turning away the people who wanted to build here.",
          "Even our own technology boom is sending a double message. AI is being embraced across every industry, from medicine to manufacturing to law. Yet U.S. tech companies cut nearly 200,000 workers in 2026 while spending record sums on AI infrastructure. The gains are real. The question the world asks is the same one our own workers ask: gains for whom?",
          "Then look at what serious small countries do. Singapore opens a savings account for every newborn and co-funds it, dollar for dollar, so every child starts life with assets, while its healthcare system keeps its people out of bankruptcy. A city-state of six million understands something a superpower has forgotten: taking care of your existing generation while investing in the next one is not welfare. It is strategy. It is the most convincing export a nation has.",
          "Something has to change. Not because it is charitable, but because credibility begins at home. A country where a hospital bill can bankrupt a working family cannot lecture the world about trust.",
        ],
      },
      {
        heading: "What is left for the U.S.",
        paragraphs: [
          "Still a great deal. The deepest capital markets, the best research labs, the strongest brands, and something no rival can copy: the world still wants to believe in us. The 30-point trust gap is not a verdict on U.S. technology. It is a verdict on American follow-through.",
          "But let me be honest about the clock, because anyone who tells you the U.S. can simply snap the old order back is selling you something. It may already be too late to reassert the leadership we had. The next set of American leaders will inherit a vastly changed world: a Europe that has voted to build its own stack, a Canada that convenes the alliances we used to, a China whose models run free on five continents, and a Global South that learned to buy from both sides and bow to neither. That world will not hand back the deference it spent a decade withdrawing. The old seat at the head of the table is gone. What is still winnable is the most trusted seat at a bigger table, and even that has a closing window.",
          "On November 3, Americans elect a new House and a new Senate. I am not telling anyone how to vote, and this is not about one party. It is about what the 120th Congress does in its first hundred days. The new House and the new Senate must embrace the AI challenge the way an earlier Congress embraced the space race: a real national AI strategy, export programs that actually ship, open American models the world can hold, and a visible U.S. presence in Lagos, Nairobi, São Paulo, and Libreville, not just in Brussels when there is a dispute. And it must put the home front inside that strategy, because they are the same project: move real resources from wars we did not need toward the two assets that built American prestige in the first place, healthy citizens and an education system the world lines up to join.",
          "The world is watching that election for one signal only: can the United States still act?",
          "I am an immigrant. I chose this country on the bet that it can. I built my company here on the same conviction I offer my clients: own your technology, keep your data, control your future. That is what sovereignty means for a business, and it is what leadership means for a nation.",
          "The world stopped waiting for the United States. It has not stopped watching, yet. The next two years decide whether it ever looks back.",
        ],
      },
    ],
    faq: [
      {
        q: "What is sovereign AI?",
        a: "Sovereign AI means a nation or a business owns and controls the artificial intelligence it depends on: the models, the hardware they run on, the data they use, and the ability to keep operating regardless of any vendor, price change, or foreign government decision.",
      },
      {
        q: "Why is global trust in U.S. technology companies declining?",
        a: "The Edelman Trust Barometer found trust in tech falling worldwide going into 2026, with trust in U.S. tech roughly 30 points below China's. Drivers include policy unpredictability, export restrictions, the dominance of a few U.S. providers over critical infrastructure, and domestic signals such as mass tech layoffs, medical bankruptcies, and declining openness to international students.",
      },
      {
        q: "What is Europe doing about its dependence on U.S. technology?",
        a: "In January 2026 the European Parliament voted 471 to 68 for a technological sovereignty agenda, including the proposed EuroStack public digital infrastructure and open-source-first procurement, aiming to reduce reliance on the three U.S. companies that hold about 70 percent of Europe's cloud market.",
      },
      {
        q: "What should the new U.S. Congress do about AI after the 2026 midterms?",
        a: "Treat AI the way an earlier Congress treated the space race: pass a real national AI strategy, fund export and partnership programs that actually ship, back open American models the world can adopt, show up commercially in Africa and Latin America, and rebuild the healthcare and education foundations that make American leadership credible.",
      },
      {
        q: "Who is Jacques M. Jean?",
        a: "Jacques M. Jean is a Haitian-born American technologist and founder. He spent 25 years building technology systems in 15 countries for companies including Honeywell and Schneider Electric, is the founder and CEO of TechFides, co-chairs the American Business Council Gabon, and founded Levoila, the Global Heritage Trust.",
      },
    ],
  },
  {
    slug: "system-to-system-competition-africa",
    eyebrow: "Perspectives \u00B7 Africa",
    title: "America Does Not Lose in Africa on Price. It Loses on Architecture.",
    metaTitle: "System-to-System Competition: Why U.S. Companies Lose in Africa | Jacques M. Jean",
    metaDescription:
      "After two years working with ministries and enterprises in Central Africa, a founder's field report: U.S. firms lose deals before the bid opens, because they compete alone against integrated systems.",
    dek: "I wrote this argument as a paper in February, after two years on the ground in Central Africa. November proved it. American firms are not losing on capability or price. They are losing because they arrive alone against integrated systems.",
    datePublished: "2026-11-02",
    dateDisplay: "November 2026",
    readTime: "7 min read",
    keywords: [
      "US companies in Africa",
      "system-to-system competition",
      "US Africa trade strategy",
      "Gabon business",
      "AGOA",
      "sovereign financing Africa",
    ],
    ogImage: "/images/perspectives/system-to-system-og.png",
    sections: [
      {
        paragraphs: [
          "In Libreville I watched American companies lose deals they never got to bid on. The winning side arrived as a package: a sovereign bank with financing ready to sign, builders, training programs, and technical standards for telecom, power, and rail, all in one envelope. The American firm arrived with a good product and a price list.",
          "I spent the better part of two years in Central Africa working with ministries, private enterprises, and sovereign stakeholders. In February I wrote a paper about what I saw. I put it away, and this fall the world caught up with it. So here is the argument, refreshed, with what has happened since.",
          "**The competition in emerging African economies is not firm against firm. It is system against system.** Chinese engagement arrives with sovereign financing, bundled infrastructure, commodity-backed agreements, standards integration, negotiated labor terms, and industrial zones aligned with their own small businesses. American firms arrive alone. That is not a failure of American entrepreneurship. It is a failure of architecture.",
        ],
      },
      {
        heading: "Nine ways to lose before the bid opens",
        paragraphs: [
          "Start with money. Competing bids come paired with ready-to-deploy sovereign credit. American small and mid-sized firms rely on commercial lending at far higher cost, so projects are lost before anyone evaluates technical merit. Governments increasingly want turnkey packages, financing plus build plus training plus long-term servicing, and without an integrated American aid, trade, and technical offer, our firms cannot compete for large public infrastructure at all.",
          "Then the rules. Uncertainty around trade frameworks like AGOA makes U.S. trade flows unpredictable while other partners sign zero-tariff bilateral deals. American companies carry VAT reimbursement delays and government payment arrears with no sovereign offset mechanism, while state-backed competitors negotiate payment security inside broader debt structures. In CEMAC markets, central bank authorization requirements trap liquidity in-country. With no bilateral tax treaty, withholding can reach 25 percent, pricing American technical providers out before the conversation starts.",
          "Then the quiet traps. In transitional governance environments, debt audits can freeze legitimate contracts, and firms operating under strict FCPA compliance have no room to maneuver. In 5G, power, rail, and industrial automation, the standards embedded today decide thirty years of interoperability, and without feasibility funding, American standards risk exclusion. Local content laws require domestic equity and local management, but without American-backed vocational training on the ground, our firms face a compliance paradox: the law demands local skills that no one is helping to build.",
          "Nine gaps. Not one of them is about product quality. Every one of them is about the system behind the product.",
        ],
      },
      {
        heading: "Where America still wins",
        paragraphs: [
          "None of this means the game is lost. American firms hold real structural advantages in the sectors that matter next: value-added mineral processing as raw export bans arrive, because American ESG standards open premium Western markets; trusted digital infrastructure, government cloud, cybersecurity, and AI governance, where American software credibility is still the gold standard; precision agribusiness in nations importing 60 to 80 percent of their food; sustainable forestry processing; renewable industrial power; healthcare systems, where American quality assurance still carries weight; and vocational education, because American certification keeps its prestige long after a project ends.",
          "Notice what those have in common. They are trust businesses. They are exactly the terrain where the world's doubts about everyone else become America's advantage, if we show up.",
        ],
      },
      {
        heading: "What I did about it",
        paragraphs: [
          "I did not write the February paper from a library. I built three national technology programs with the Government of Gabon, in cybersecurity, digital transformation, and a national technology incubator, and carried all three to signed memoranda in Washington during the President of Gabon's delegation visit. I was one of five American companies, out of thirty-five invited, in the closed-door roundtable with the President and his staff. When the U.S. Ambassador asked for the dormant American Business Council Gabon to be revived, I helped relaunch it, and I co-chair it today. The programs were later suspended by trade disruptions beyond the commercial parties' control. The relationships were not.",
          "I tell you this for one reason: the system-to-system problem is not a theory to me. I have sat on the American side of the table and felt what it is to represent the strongest economy on earth with no system behind you.",
        ],
      },
      {
        heading: "February's paper, November's proof",
        paragraphs: [
          "Since I wrote those pages, the argument has gone global. The trust gap between American and Chinese technology is now measured in double digits. Brazil split its AI infrastructure between both camps on purpose. China is giving its models away across the Global South while rebuilding a third of its university system around AI. I covered that larger picture in my last piece, and the conclusion is the same at every scale: the old deference is gone, and what replaces it will be earned by systems, not slogans.",
          "What would an American system look like? Coordinated financing instruments that travel with the bid. Aid, trade, and technical packages built as one offer. Feasibility funding so American standards are in the room when the next thirty years get decided. Vocational partnerships that make local content laws an advantage instead of a trap. Sovereign-level engagement that does not evaporate with a news cycle. None of this is beyond a country that built the Marshall Plan. All of it is beyond a country that will not coordinate.",
          "The question is not whether American companies can compete in Africa. They can. I have watched them do it with nothing behind them. The question is whether anyone will build the system that lets them compete against other systems. I have seen what the other side's system looks like. It is excellent. And it is not waiting.",
        ],
      },
    ],
    faq: [
      {
        q: "What is system-to-system competition?",
        a: "Competition where integrated national packages, sovereign financing, infrastructure, standards, labor terms, and diplomacy bundled together, compete against individual firms. In emerging African markets, Chinese engagement typically arrives as such a package while American companies arrive alone.",
      },
      {
        q: "Why do U.S. companies lose deals in African markets?",
        a: "Mostly before the bid opens: no sovereign financing to pair with offers, no turnkey aid-trade-technical packages, trade uncertainty around frameworks like AGOA, VAT and payment arrears with no offset, trapped liquidity under CEMAC currency rules, withholding up to 25 percent with no tax treaty, and standards decisions that exclude American technology for decades.",
      },
      {
        q: "Where can American firms still win in Africa?",
        a: "Trust-driven sectors: value-added mineral processing, government cloud and cybersecurity, AI governance, precision agribusiness, sustainable forestry processing, renewable industrial power, healthcare systems, and vocational education, where American standards and certification still command a premium.",
      },
      {
        q: "What is the author's experience in Africa?",
        a: "Jacques M. Jean spent about two years in Central Africa, built three national technology programs with the Government of Gabon that reached signed memoranda in Washington, joined the closed-door roundtable with Gabon's President as one of five U.S. companies selected from thirty-five, and co-chairs the American Business Council Gabon, which he helped revive at the U.S. Ambassador's request.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
