import type { Locale } from "@/i18n/locales";
import { handshakeFr } from "./articles-fr";
import { handshakeEs } from "./articles-es";
import { handshakePt } from "./articles-pt";
import { handshakeHt } from "./articles-ht";

export interface ArticleFigure {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  width: number;
  height: number;
}

export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  /** Numbered list rendered after the paragraphs. Supports inline markup. */
  list?: string[];
  /** Photo rendered after the paragraphs (and list). */
  figure?: ArticleFigure;
  /** Large pull quote rendered after the paragraphs. */
  pullQuote?: string;
}

export interface ArticleFaqItem {
  q: string;
  a: string;
}

export interface ArticleSource {
  label: string;
  url?: string;
}

export interface ComingNext {
  title: string;
  blurb: string;
  /** e.g. "Coming in November 2026" or "Next week". */
  when: string;
}

/** A translated edition. Sections line up with the English sections by position. */
export interface ArticleTranslation {
  eyebrow: string;
  tag: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  dek: string;
  summary: string;
  dateDisplay: string;
  readTime: string;
  keywords: string[];
  heroCaption?: string;
  comingNext?: ComingNext;
  sections: (Omit<ArticleSection, "figure"> & { figureCaption?: string })[];
  faq: ArticleFaqItem[];
}

export interface Article {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  dek: string;
  /** Short card text for the homepage and Perspectives index. */
  summary: string;
  /** Short topic tag for cards. */
  tag: string;
  datePublished: string;
  dateModified?: string;
  dateDisplay: string;
  readTime: string;
  keywords: string[];
  ogImage: string;
  /** Full-width lead photo under the article header. */
  hero?: ArticleFigure;
  /** Earlier piece this one continues. */
  continues?: string;
  /** A promised follow-up that is not published yet. Shown as a teaser with the signup. */
  comingNext?: ComingNext;
  sections: ArticleSection[];
  faq: ArticleFaqItem[];
  sources?: ArticleSource[];
  translations?: Partial<Record<Locale, ArticleTranslation>>;
}

// Newest first. Inline markup: **bold** and [link text](url).
export const articles: Article[] = [
  {
    slug: "handshake-is-the-deal-us-china-africa-gabon",
    eyebrow: "Perspectives · Africa",
    tag: "Africa · Trade",
    title: "The Handshake Is the Deal. Africa Is Watching Who Opens the Door.",
    metaTitle: "Why America Is Losing Africa: The Handshake Is the Deal | Jacques M. Jean",
    metaDescription:
      "China gave Gabon's president a state visit and six MOUs. Washington gave him a rushed lunch and an empty embassy. A founder who lost three Gabon deals on what the U.S. must change.",
    dek: "Beijing gave Gabon's president an honor guard, a state banquet, and six signed agreements. Washington gave him a crowded lunch and an empty embassy. I lost three deals in that gap. Here is what I saw, and what has to change.",
    summary:
      "China gave Gabon's president a state visit and six agreements. Washington left the ambassador's chair empty. I lost three signed deals in that gap.",
    datePublished: "2026-11-08",
    dateDisplay: "November 2026",
    readTime: "7 min read",
    keywords: [
      "US Africa policy",
      "China Africa relations",
      "Gabon China state visit 2026",
      "US ambassadors Africa vacancies",
      "Africa critical minerals",
      "Africa data sovereignty",
      "sovereign AI Africa",
      "Oligui Nguema Xi Jinping",
    ],
    ogImage: "/images/perspectives/handshake-og.jpg",
    hero: {
      src: "/images/perspectives/handshake/beijing-handshake.jpg",
      alt: "Gabon's President Brice Clotaire Oligui Nguema and China's President Xi Jinping shake hands in front of both national flags in Beijing",
      caption: "Beijing, November 2026.",
      credit: "Présidence de la République gabonaise",
      width: 1280,
      height: 853,
    },
    continues: "world-stopped-waiting-for-the-us-sovereign-ai",
    translations: { fr: handshakeFr, ht: handshakeHt, es: handshakeEs, pt: handshakePt },
    comingNext: {
      title: "How Three Signed Deals Slipped Away",
      blurb:
        "The inside story of the Gabon MOUs: what happened after the signing ceremony, where our own side went missing, how tariffs and politics did the rest, and what I would do differently as a founder.",
      when: "Coming in November",
    },
    sections: [
      {
        heading: "The deal starts at the door",
        paragraphs: [
          "On November 6, 2026, Beijing rolled out the red carpet for Gabon's president, Brice Clotaire Oligui Nguema. Literally. An honor guard in three uniforms. Children waving the flags of both nations. A state banquet. A signing table with a green folder for Gabon and a red folder for China.",
          "I watched the photos come in from the Presidency of Gabon. Then I read the outcome. A joint declaration lifting the relationship to a “community with a shared future.” Six memorandums of understanding signed in one visit. And a public commitment from China to help Gabon process its own resources at home, under its 2026 to 2030 national growth plan.",
          "That is not hospitality. That is a game plan.",
          "Last week I wrote that [the world stopped waiting for the United States](/perspectives/world-stopped-waiting-for-the-us-sovereign-ai/), and that in Africa, Chinese partners are present, priced, and committed while we run webinars and wait. This week I watched that sentence turn into a ceremony. And then into a contract I had worked on for years, handed to someone else.",
          "In Africa, the deal does not start at the signing table. It starts at the door. How you open it. How you shake the hand. Who you send to meet the plane. Every detail is a message, and every message is read.",
        ],
      },
      {
        heading: "Why is the United States losing ground in Africa?",
        paragraphs: [
          "Because Africa reads every signal, and the signals from Washington say Africa can wait. As of July 2026, 41 African countries had no Senate confirmed U.S. ambassador. New U.S. tariffs sit on top of African exports, while China opened zero tariff access to 53 African countries on May 1, 2026. And when African presidents visit Washington, the reception feels like an audition, not a partnership.",
          "China treats Africa as a long term investment. The United States too often treats it as a transaction to close before lunch ends. African leaders see the difference, and they sign accordingly.",
        ],
      },
      {
        heading: "Two receptions, one president",
        paragraphs: [
          "The same man sat at both tables. That is what makes the comparison fair.",
          "In July 2025, President Oligui Nguema came to the White House with four other West and Central African heads of state. One lunch, five presidents, one table. When Mauritania's president began describing his country's uranium and lithium, he was cut off and asked to just give his name and his country. Liberia's president was complimented on his English, in a country where English is the official language. A caller from Dakar told RFI the five leaders looked like job candidates.",
          "Gabon's president used his few minutes well. He said Gabon holds rare earths and about a quarter of the world's known manganese. He said he wanted that manganese processed at home, to create jobs for young Gabonese. And he said, politely, that if American companies did not come, other countries would.",
          "They did. Sixteen months later, the other country gave him a five day state visit, his first since taking office, a military honor guard, a banquet hosted by its head of state, and a signed commitment to help Gabon transform its resources at home. Exactly what he asked Washington for.",
        ],
        figure: {
          src: "/images/perspectives/handshake/beijing-honor-guard.jpg",
          alt: "President Oligui Nguema and President Xi Jinping review a military honor guard on a red carpet in Beijing",
          caption: "The welcome in Beijing.",
          credit: "Présidence de la République gabonaise",
          width: 1280,
          height: 853,
        },
      },
      {
        paragraphs: [
          "I am an American. I chose this country. I co-chair the American Business Council Gabon because I want American companies to win in Africa. That is why this stings. We were told what Gabon wanted. Out loud. At our own table.",
        ],
      },
      {
        heading: "An empty chair is also a message",
        paragraphs: [
          "Africa has 54 countries. As of July 2026, 41 of them had no Senate confirmed U.S. ambassador. Gabon is one of them, since January 2026. The gap widened last December, when Washington recalled more than a dozen career ambassadors from the continent at once. A former U.S. ambassador to Botswana called the vacancy rate without modern precedent.",
          "I respect the career diplomats who run those embassies as chargés d'affaires. Many are excellent. But a chargé manages the building. An ambassador opens the president's door. When a country sends a placeholder for a year or more, the host government hears one sentence: you are not a priority.",
          "There is policy, and there is politics.",
        ],
        pullQuote: "Our policy papers say Africa matters. Our politics leave the chair empty. Africans believe the chair.",
      },
      {
        paragraphs: [
          "To be fair, understaffing in Africa did not start with this administration. It has run through several. But it has never been this wide, and it has never been this visible next to a rival that sends its best people and keeps them there.",
        ],
      },
      {
        heading: "Three MOUs signed. Three MOUs lost.",
        paragraphs: [
          "This is not theory for me.",
          "In September 2024, I was invited to Washington with about 30 other American companies to meet Gabon's president at the U.S. Chamber of Commerce. Four of us made the trip: me, our CFO, our VP of International Business Development, and our Head of Marketing. We came to work, not to watch. My company was selected for a closed round table with the president and his senior staff. It was real. Real questions, real projects, real interest on both sides of the table.",
          "Then came the official signing ceremony. Gabon's minister of foreign affairs. The president. The U.S. ambassador to Gabon, Vernelle Trim FitzPatrick, one of the most engaged diplomats I have ever worked with. The leaders of the U.S. Chamber. We signed three memorandums of understanding.",
        ],
        figure: {
          src: "/images/perspectives/handshake/washington-signing.jpg",
          alt: "Signing ceremony in Washington under U.S.-Africa Business Center and Invest in Gabon banners, with Gabonese and American officials standing behind the table",
          caption: "The signing ceremony in Washington, September 2024.",
          width: 600,
          height: 400,
        },
      },
      {
        paragraphs: [
          "For a company our size, that was not just a deal. It was a turning point. It showed what we could become, and it was built to grow into new projects. Ambassador FitzPatrick proved the point of this whole article: when the right person sits in the chair, doors open. In January 2026, she was among the career ambassadors called home. Gabon has had no U.S. ambassador since.",
          "We lost all three.",
          "Not to a better proposal. We lost them to a lack of support from our own side, to tariff decisions made in Washington with no thought for a small partner, and to politics that changed the rules every few months. Gabon was suspended from the U.S. trade preference program AGOA in 2024 and only reinstated this year. Meanwhile new U.S. tariffs landed on top, and China opened its market duty free. What happened inside that process deserves its own story. I will tell it in my next piece.",
          "All three went to the same company: Huawei. This week I watched the last one go, openly.",
          "So what was it? Incompetence on our side? Not enough size? I have asked myself both. The honest answer is simpler. China showed up, stayed, financed, and followed through. We sent signals that said we might.",
          "If I sat in the president's chair, I would have made the same decision. A head of state owes his people results, not loyalty to a partner who will not return his calls.",
        ],
      },
      {
        heading: "The new economy runs on two things. Africa has both.",
        paragraphs: [
          "The next economy runs on data and natural resources. Africa holds an abundance of both.",
          "The resources are known. Manganese, cobalt, lithium, rare earths, oil, timber. Gabon alone holds about a quarter of the world's known manganese, a key input for batteries and steel.",
          "The data is the part most people miss. Much of Africa's data has not been collected yet. Health records still on paper. Farm yields nobody has measured. Land titles, languages, mobile payments, weather, soil. Whoever builds the systems that collect that data will shape the markets, the research, and the products that come out of it. For decades.",
          "That is why a technology MOU going to Huawei matters more than a road or a stadium. Infrastructure is not just concrete anymore. It is who holds the keys to the data. I spent 25 years building technology systems in 15 countries. I know that the company that installs the system usually runs it for a generation.",
          "This is the sovereignty question from my last piece, playing out in real time. **Africa will own its data or rent it back.** Right now, the best offer on the table is not coming from us.",
        ],
      },
      {
        heading: "What a serious America would do Monday morning",
        paragraphs: ["None of this needs a new doctrine. It needs follow through."],
        list: [
          "**Fill the chairs.** Nominate ambassadors to every African capital, starting with the resource and data economies. Give them a commercial mandate, not just a security brief.",
          "**Receive presidents like partners.** One leader, one visit, full protocol. Prepare the room. Know the names. Know what they asked for last time.",
          "**Make trade predictable.** A partner cannot plan a ten year mine or data center around tariffs that change every quarter. Lock in terms for a decade.",
          "**Finance at the speed of the MOU.** If China can move from signature to financing in months, the DFC and EXIM must too. An MOU with no money behind it in twelve months is a press release.",
          "**Process at home.** Gabon asked for local transformation of its manganese. Build that offer with them. Value added in Africa is the deal, not a concession.",
          "**Build data systems Africans own.** Offer infrastructure where the data stays in the country and the know how transfers to local engineers. Sovereignty is the one thing America can offer better than anyone, if we choose to.",
        ],
      },
      {
        heading: "The door will not stay open forever",
        paragraphs: [
          "I grew up in Haiti. I know what it feels like when a powerful country talks about you instead of with you. Africa knows that feeling too. It also knows it now has choices.",
          "The colonial mindset assumed Africa would always wait at the door. That world is over. Today Africa opens the door, and it decides who walks in first.",
          "Right now the door is still open. Gabon still says it is free and open to one and all. But every empty embassy, every rushed lunch, every lost MOU pushes it a little closer to shut. And when that door closes, it will take a generation to open it again.",
          "**The handshake is the deal. Let's start shaking hands like we mean it.**",
        ],
      },
    ],
    faq: [
      {
        q: "Why is the United States losing influence in Africa?",
        a: "Inconsistent engagement. In 2026, 41 of Africa's 54 countries had no Senate confirmed U.S. ambassador, U.S. tariffs rose on African exports, and visiting African leaders received rushed receptions. China offers state visits, financing, and zero tariff market access.",
      },
      {
        q: "How did China receive Gabon's president in November 2026?",
        a: "Xi Jinping hosted President Brice Clotaire Oligui Nguema for a five day state visit from November 3 to 7, 2026, with a military welcome and a state banquet. The two countries signed a joint declaration and six memorandums of understanding.",
      },
      {
        q: "Why does Africa matter to the new global economy?",
        a: "The next economy runs on data and natural resources. Africa holds critical minerals such as manganese, cobalt, and lithium, and vast amounts of data that has not yet been collected. Whoever builds the systems that collect it will shape future markets.",
      },
      {
        q: "What should the United States do to compete in Africa?",
        a: "Fill ambassador posts, receive African leaders as partners, make trade terms predictable, finance projects quickly, support local processing of resources, and build data infrastructure that Africans own.",
      },
      {
        q: "Who is Jacques M. Jean?",
        a: "Jacques M. Jean is a Haitian-born American founder and technologist with 25 years building technology systems in 15 countries for companies including Honeywell and Schneider Electric. He is CEO of TechFides and Founding Co-Chair of the American Business Council Gabon.",
      },
    ],
    sources: [
      {
        label: "Gabonreview: President Oligui Nguema's state visit to China, November 3 to 7, 2026",
        url: "https://www.gabonreview.com/diplomatie-oligui-nguema-accueilli-en-chine-une-visite-de-5-jours-aux-enjeux-economiques-majeurs/",
      },
      { label: "Présidence de la République gabonaise: joint declaration and six MOUs, November 6, 2026" },
      {
        label: "AllAfrica / RFI: reactions to the White House lunch with five African presidents, July 2025",
        url: "https://allafrica.com/stories/202507100434.html",
      },
      {
        label: "Semafor: the U.S. lacks confirmed ambassadors in 41 African countries, July 2026",
        url: "https://www.semafor.com/article/07/10/2026/us-lacks-scores-of-ambassadors-in-africa",
      },
      {
        label: "KPMG: Gabon reinstated as an AGOA beneficiary, May 2026",
        url: "https://kpmg.com/us/en/taxnewsflash/news/2026/05/trade-provisions-consolidated-appropriations-act-2026.html",
      },
      {
        label: "Modern Ghana: U.S. tariffs and China's zero tariff policy for 53 African countries",
        url: "https://www.modernghana.com/news/1475160/trumps-tariffs-have-gutted-agoas-dutyfree-promi.html",
      },
    ],
  },
  {
    slug: "world-stopped-waiting-for-the-us-sovereign-ai",
    eyebrow: "Perspectives · Sovereign AI",
    title: "The World Stopped Waiting for the United States. It Did Not Stop Watching.",
    metaTitle: "Sovereign AI and the World That Stopped Waiting for the U.S. | Jacques M. Jean",
    metaDescription:
      "Europe is building its exit, Canada is convening, China is giving its AI away, and Africa is choosing partners. A founder who built systems in 15 countries on what the U.S. must do after November 3.",
    tag: "Sovereign AI",
    summary:
      "Europe is building its exit, Canada is convening the alliances we used to, and China is giving its AI away. A field report from the rooms where the world is choosing its technology partners.",
    dek: "Europe is building its exit. Canada is convening the alliances we used to. China is giving its AI away. A field report from the rooms where the world is choosing its technology partners, and what the next Congress must prove.",
    datePublished: "2026-11-01",
    dateModified: "2026-11-08",
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
    ogImage: "/images/perspectives/sovereign-ai-og.jpg",
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
          "Education tells the same story. The world used to send us its brightest because our universities were the destination. Last fall, new international student enrollment dropped 17 percent, driven by our own visa policies. We are not being beaten. We are withdrawing. While China rebuilds a third of its university system around AI, we are turning away the people who wanted to build here.",
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
    sources: [
      {
        label: "Semafor: trust in tech companies dropped globally in 2026 (Edelman Trust Barometer)",
        url: "https://semafor.com/article/02/11/2026/trust-in-tech-companies-dropped-globally-in-2026-report",
      },
      {
        label: "European Parliament resolution of 22 January 2026 on technological sovereignty and digital infrastructure",
        url: "https://data.europarl.europa.eu/distribution/doc/TA-10-2026-0022_en.pdf",
      },
      {
        label: "Gartner: geopolitics will drive 61% of Western European CIOs to rely more on local cloud providers",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-11-12-gartner-survey-reveals-geopolitics-will-drive-61-percent-of-cios-and-information-technology-leaders-in-western-europe-to-increase-reliance-on-local-cloud-providers",
      },
      {
        label: "Government of Canada: Canada and Germany sign AI joint declaration and launch the Sovereign Technology Alliance",
        url: "https://www.canada.ca/en/innovation-science-economic-development/news/2026/02/canada-and-germany-sign-ai-joint-declaration-and-launch-sovereign-technology-alliance.html",
      },
      {
        label: "South China Morning Post: China's universities cut 12,000 obsolete degrees in the race to embrace AI",
        url: "https://scmp.com/economy/china-economy/article/3356913/chinas-universities-cut-12000-obsolete-degrees-amid-race-embrace-ai-era",
      },
      {
        label: "Al Jazeera: Brazil launches AI supercomputer push while balancing U.S. and Chinese tech",
        url: "https://www.aljazeera.com/economy/2026/8/21/brazil-launches-ai-supercomputer-push-while-balancing-us-and-chinese-tech",
      },
      {
        label: "Becker's Hospital Review: medical debt a factor in two-thirds of bankruptcies (American Journal of Public Health)",
        url: "https://www.beckershospitalreview.com/finance/medical-debt-a-factor-in-two-thirds-of-bankruptcies-in-survey.html",
      },
      {
        label: "Brown University Costs of War project: post-9/11 wars cost more than $8 trillion",
        url: "https://www.brown.edu/news/2021-09-01/costsofwar",
      },
      {
        label: "NBC News: new international student enrollment fell 17% (Open Doors fall snapshot)",
        url: "https://www.nbcnews.com/data-graphics/new-international-student-enrollment-fell-sharply-us-trump-immigration-rcna243295",
      },
      {
        label: "TechRepublic: tech layoffs in 2026 affect about 196,000 workers",
        url: "https://www.techrepublic.com/article/news-tech-layoffs-2026-companies-cutting-jobs/",
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
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Languages this article is published in (English always). */
export function articleLocales(a: Article): Locale[] {
  return ["en", ...(Object.keys(a.translations ?? {}) as Locale[])];
}

/** The article as it reads in `locale`; falls back to English. */
export function localizeArticle(a: Article, locale: Locale): Article {
  const t = locale === "en" ? undefined : a.translations?.[locale];
  if (!t) return a;
  return {
    ...a,
    eyebrow: t.eyebrow,
    tag: t.tag,
    title: t.title,
    metaTitle: t.metaTitle,
    metaDescription: t.metaDescription,
    dek: t.dek,
    summary: t.summary,
    dateDisplay: t.dateDisplay,
    readTime: t.readTime,
    keywords: t.keywords,
    hero: a.hero && { ...a.hero, caption: t.heroCaption ?? a.hero.caption },
    sections: a.sections.map((s, i) => {
      const ts = t.sections[i];
      if (!ts) return s;
      const { figureCaption, ...rest } = ts;
      return { ...rest, figure: s.figure && { ...s.figure, caption: figureCaption ?? s.figure.caption } };
    }),
    faq: t.faq,
    comingNext: t.comingNext ?? a.comingNext,
  };
}

/** Pieces that continue this one (the reverse of `continues`). */
export function getFollowUps(slug: string): Article[] {
  return articles.filter((a) => a.continues === slug);
}

/** Other articles to read next, newest first, excluding this one. */
export function getReadNext(slug: string, limit = 2): Article[] {
  return articles.filter((a) => a.slug !== slug).slice(0, limit);
}
