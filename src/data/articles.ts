import type { Locale } from "@/i18n/locales";
import { handshakeFr, ownYourAiFr, jensenFr, worldFr, inTimeFr, threeDealsFr } from "./articles-fr";
import { handshakeEs, ownYourAiEs, jensenEs, worldEs } from "./articles-es";
import { handshakePt, ownYourAiPt, jensenPt, worldPt } from "./articles-pt";
import { handshakeHt, ownYourAiHt, jensenHt, worldHt } from "./articles-ht";

export interface ArticleFigure {
  src: string;
  alt: string;
  caption?: string;
  /** Credit line. Prefix with ! to show it as is, without the "Photo:" label. */
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
    slug: "how-three-signed-deals-slipped-away-gabon-huawei",
    eyebrow: "Perspectives · Africa",
    tag: "Africa · Business",
    title: "How Three Signed Deals Slipped Away",
    metaTitle: "How Three Signed Deals Slipped Away: Gabon, Huawei, and the Bank We Did Not Bring | Jacques M. Jean",
    metaDescription:
      "In September 2024 Jacques M. Jean signed three agreements with Gabon at the U.S. Chamber of Commerce. By November 2026 all three belonged to Huawei. What happened in between, and what it says about how America does business in Africa.",
    dek: "In September 2024 I signed three agreements with the government of Gabon in a U.S. Chamber of Commerce room, with the president and the American ambassador watching. By this month all three belonged to Huawei. This is what happened in between, and what it says about how America does business in Africa.",
    summary:
      "Three signed agreements, a promise to show up, fourteen months of closed doors in Washington, and one phone call: my contact was in China. The follow-up I promised.",
    datePublished: "2026-11-29",
    dateDisplay: "November 2026",
    readTime: "10 min read",
    keywords: [
      "Gabon Huawei",
      "US business Africa",
      "American Business Council Gabon",
      "DFC financing Africa small business",
      "AGOA Gabon",
      "US Chamber of Commerce Gabon MOU",
      "China Africa competition",
      "Libreville",
    ],
    ogImage: "/images/perspectives/three-deals-og.jpg",
    continues: "handshake-is-the-deal-us-china-africa-gabon",
    translations: { fr: threeDealsFr },
    hero: {
      src: "/images/perspectives/three-deals/christmas-libreville.jpg",
      alt: "Jacques M. Jean in a Santa hat bending down to hand a wrapped gift to a small girl in a pink dress on a paved lane on the outskirts of Libreville, volunteers in Fondation Dorcas shirts behind him",
      caption: "Christmas 2024, on the outskirts of Libreville. I promised I would show up.",
      credit: "Fondation Dorcas",
      width: 2048,
      height: 1365,
    },
    sections: [
      {
        heading: "A promise in Washington",
        paragraphs: [
          "The first thing a member of the Gabonese delegation told me, after the ceremony, was not congratulations.",
          "It was a warning. American companies, he said, sign in Washington and stay in Washington. They never show up in Libreville. The Chinese show up. The Europeans show up. They open an office, they come to the follow-up meetings, they are at the table when the decision gets made. The Americans send an email.",
          "So I made a promise, standing there with the ink still wet. I would be in Gabon in December. I would sit with every institution named in those three agreements and every person who had to sign off on them. I would show up.",
          "I kept the promise. It did not save the deals. But it taught me exactly how they were lost, and that is worth more than I understood at the time.",
        ],
      },
      {
        heading: "Before Washington, there was Dallas",
        paragraphs: [
          "This was not my first time with Gabon. A year before the Chamber, a Gabonese delegation had come to us in Texas to evaluate whether a company our size could deliver the cybersecurity work they needed.",
          "They spent four days with us. Three full days of working sessions with our cybersecurity partners in the room. The mayor of Dallas welcomed them and walked them through the city's infrastructure. We had dinner at the Cowboys facility in Frisco. We took them to the stores, the way you take family. We wanted them to feel at home, and by the end they did. When they left, they invited us to Libreville. When we went, it was like visiting old friends.",
          "I should tell you something about Gabon, because it explains the rest of this story. The country reminds me of Haiti. The ocean, the food, the music, the way friendship works, the way a stranger becomes a brother over one meal. I have worked in 15 countries. Gabon is the only one that ever felt like going home.",
          "By the time I was back for the three agreements, the government had changed. The people who had visited Dallas were not the people in the room at the Chamber. But the new president signed, and so did we.",
        ],
      },
      {
        heading: "December in Libreville",
        paragraphs: [
          "I landed in Libreville in December 2024, as promised. I already had friends there, which made the work easier and the month better.",
          "It was Christmas. I volunteered with a local organization and spent a day handing out toys to children on the outskirts of the city. The next week a friend brought me to another group doing the same thing, with more music than I have heard at any Christmas since my own childhood. I was not a visiting executive that month. I was a man in a country that felt like his own, doing what you do in December.",
          "And I was working. Every meeting I asked for, I got. The ministers, the directors, the program leads, the people who would actually run the projects. The agreements covered three things: a digital transformation program for the government, a cybersecurity assessment of its systems, and an incubation program for young Gabonese technologists.",
          "On the first two we had done the hard part already. During an earlier visit, our team had sat with their lawyer, their finance lead, and their program lead and scoped both projects properly. Every required document was filled out. In January 2025 both were submitted to procurement. I was told to wait for the process to run.",
          "I left Libreville believing I would be back in the spring to start work.",
        ],
        figure: {
          src: "/images/perspectives/three-deals/the-sawmill.jpg",
          alt: "Inside a timber mill in Gabon: workers in ear protection guide a long hardwood beam along steel rollers under a corrugated roof",
          caption: "Timber is Gabon’s second industry after oil. From the forest to the port.",
          credit: "Jacques M. Jean",
          width: 1536,
          height: 2048,
        },
      },
      {
        heading: "The word that stopped everything",
        paragraphs: [
          "A few weeks later the message came. The projects had cleared the first gate. Now the government needed one more thing before it could proceed.",
          "A financial institution to finance them.",
          "I will be honest. We did not have one. We were a small American technology company that had just signed with a sovereign government. We had the people, the partners, and the plan. We did not have a bank.",
          "So we went looking. The U.S. ambassador, Vernelle Trim FitzPatrick, was everything you want an ambassador to be. She opened doors, made introductions, and put her own weight behind American companies trying to do business in her country of posting. Through her office and on our own we reached out to the agencies that exist for exactly this purpose. The Development Finance Corporation. The World Bank. The others.",
          "What came back was a tour of closed doors with polite signs on them.",
          "\"We only do infrastructure projects.\" Fine, who does technology? No referral. \"The government is not interested in investing in projects in Africa at this time, but we are reviewing our pipeline.\" A meeting, a follow-up, silence. Another meeting, another follow-up, silence. Not one of them said: here is how this gets done. Not one of them said no, either. They said later, which in business is the same word spelled slower.",
          "Meanwhile the clock was running on the Gabonese side, and the clock was running on mine. A small business does not have the pockets to keep a sovereign deal warm for a year. Libreville is one of the most expensive cities in Africa. Every month of waiting was paid for out of a company that had other work to do.",
        ],
      },
      {
        heading: "\"He is in China this week\"",
        paragraphs: [
          "Through the spring and summer of 2025 I kept the meetings going. I kept calling our Gabonese counterparts for updates. Something was always moving. Something was always pushed to next week, then next month.",
          "Then one day I called to set up a meeting with the department responsible for one of the projects, and was told my contact could not make it.",
          "He was in China for a meeting.",
          "I remember putting the phone down and knowing. Not the details, not yet. But knowing.",
        ],
        pullQuote: "They said later, which in business is the same word spelled slower.",
      },
      {
        heading: "Three endings",
        paragraphs: [
          "They came one at a time, the way these things do.",
          "First came the digital transformation. I heard that Huawei, already working with the education ministry, was expanding its scope and would be doing it. The project we had scoped with their lawyer and their finance lead, document by document, now belonged to a company that had never needed to ask anyone in Washington for a bank.",
          "Then the cybersecurity assessment, the one that had brought a delegation to Dallas for four days. Same company, same quiet.",
          "The incubation program was the last. I learned it had gone the same way this month, the same week China gave Gabon's president [an honor guard and a state banquet in Beijing](/perspectives/handshake-is-the-deal-us-china-africa-gabon/).",
          "Nobody in Gabon did anything wrong. They waited longer for us than they had to. They told me plainly, back in September 2024, what would happen if we did not show up with everything, and I showed up with everything except the one thing they needed. The Chinese showed up with that.",
        ],
      },
      {
        heading: "What I did with the rest of the time",
        paragraphs: [
          "Here is what I do not regret.",
          "While the deals were dying I got to know the country. I spent days in PK12, the working neighborhood on the edge of the city, talking to people about what did not work in their lives and what might. I crossed the street from where I was staying and sat with the fishermen. No cold storage, so the catch is sold the same day at whatever price is offered. Taxes that feel heavy for men who are on their own on the water. The danger out there, the health problems that come with the work, and under all of it a product that could be sold far beyond that beach if anyone built the chain to do it. I would take a taxi for the whole day and ride from one university campus to the next, walking the grounds, talking to students and professors about what they needed and what they were building anyway. I sat with the men who run the big timber operations, the ones shipping Gabonese wood to every continent, and heard how that business really works from the forest to the port. I made friends at the golf club in Libreville who are still friends today.",
          "Everywhere I went there was an opportunity standing in plain sight. Not a pitch deck opportunity. A real one, with a person attached to it.",
          "And the ambassador's team, seeing all this, asked me to help launch an American Business Council in Gabon. Aymeric Saha, chief executive of MIDA Advisors, and I co-chaired it and got it off the ground. It is still running. It is the only thing from those two years that exists today, and it exists because people showed up in person.",
        ],
        figure: {
          src: "/images/perspectives/three-deals/the-catch.jpg",
          alt: "The morning catch laid out on a blue tarp on the grass in Libreville: red snapper, jacks, and a large cobia, with buyers standing around",
          caption: "The catch is sold the same day, at whatever price is offered.",
          credit: "Jacques M. Jean",
          width: 1536,
          height: 2048,
        },
      },
      {
        heading: "The door we left open",
        paragraphs: [
          "Step back and the picture is not about me or three contracts.",
          "Gabon was thrown out of AGOA, America's main trade program for Africa, on the first day of 2024 after the coup. It was only let back in on the first day of this year. AGOA itself was allowed to lapse last fall before being renewed for a single year. The tariffs of 2025 landed on African countries that export almost nothing to us, and some of them answered in kind. Ambassador FitzPatrick left her post in January. The embassy in Libreville has been run by a chargé d'affaires ever since, and the nominee to replace her sat for his Senate hearing in September and is still waiting. Across the continent, the same empty chairs.",
          "Compare the money this administration has put into Africa against the one before it, or the one before that, and the trend is not subtle. Look at how the meetings with African leaders have gone. The distance, the language, the vocabulary, [the lunch for five heads of state at once](/perspectives/handshake-is-the-deal-us-china-africa-gabon/).",
          "None of that was aimed at a small company in Texas. All of it landed on one.",
          "Every piece of it told Libreville the same thing the delegation told me at the Chamber: the Americans will not show up. And every piece of it left the door a little wider for the one country that always does. China did not have to beat us in Gabon. It only had to be there when we were not.",
        ],
        figure: {
          src: "/images/perspectives/three-deals/at-the-embassy.jpg",
          alt: "Jacques M. Jean, Ambassador Vernelle Trim FitzPatrick, Aymeric Saha, and an embassy colleague in front of a United States Embassy Libreville backdrop",
          caption: "With Ambassador Vernelle Trim FitzPatrick and Aymeric Saha at the U.S. Embassy in Libreville. Her chair has been empty since January.",
          credit: "Jacques M. Jean",
          width: 1536,
          height: 2048,
        },
      },
      {
        heading: "What I would do differently",
        paragraphs: [
          "One thing, not a list.",
          "I would never sign a sovereign agreement again without the financing standing next to me at the table. Not a promise of financing. A bank, a fund, or a partner with a name, already committed. The Gabonese did not need our technology explained twice. They needed to know who would pay for it, and that question should have been answered before the ceremony, not discovered in a phone call four months later.",
          "And one thing for Washington, also not a list.",
          "Build the desk. One place where an American company with a signed agreement in an African country can go and get an answer in thirty days. Yes, no, or here is who. Not a tour. Not \"we only do infrastructure.\" Not \"reviewing our pipeline.\" Thirty days, an answer, a name. If that desk had existed in February 2025, I believe at least two of those three agreements would be running today, with American engineers in Libreville instead of Chinese ones.",
          "And keep the ambassadors in their chairs. Ambassador FitzPatrick did more for American business in Gabon than every agency we called combined. The chair has been empty since January. Beijing noticed. So did Libreville.",
        ],
      },
      {
        heading: "What is left",
        paragraphs: [
          "I still go back. The friends are still there. The Council is still there. The fisherman across the street still has the same problem with the buyers.",
          "Three signed deals slipped away. What did not slip away is what I learned sitting on that beach, in that taxi, in that classroom in PK12. The opportunities are real and they are everywhere. The country is not waiting for America. It is waiting for whoever shows up.",
          "Next time, I will bring the bank.",
        ],
        figure: {
          src: "/images/perspectives/three-deals/libreville-sunset.jpg",
          alt: "Sunset over the Atlantic from a window in Libreville, palms in the foreground, people walking the seafront boulevard",
          caption: "Libreville, from the window.",
          credit: "Jacques M. Jean",
          width: 1536,
          height: 2048,
        },
      },
    ],
    faq: [
      {
        q: "What were the three agreements Jacques M. Jean signed with Gabon?",
        a: "Three memoranda of understanding signed in September 2024 at the U.S. Chamber of Commerce in Washington with Gabon's government: a digital transformation program, a cybersecurity assessment of government systems, and an incubation program for young technologists.",
      },
      {
        q: "Why did the Gabon deals go to Huawei?",
        a: "After both scoped projects cleared Gabonese procurement in early 2025, the government required a financial institution to finance them. The American company could not secure financing through U.S. development agencies, which gave inconsistent or no answers over several months. Huawei arrived with financing and took the digital transformation, then the cybersecurity assessment, then the incubation program, the last in November 2026.",
      },
      {
        q: "What is the American Business Council Gabon?",
        a: "A business council launched in Gabon at the request of the U.S. embassy to connect American and Gabonese companies. Jacques M. Jean and Aymeric Saha, CEO of MIDA Advisors, are its founding co-chairs. It remains active.",
      },
      {
        q: "Is Gabon in AGOA?",
        a: "Gabon's eligibility for the African Growth and Opportunity Act was terminated effective January 1, 2024, following the 2023 coup, and restored effective January 1, 2026. AGOA itself lapsed in late 2025 and was renewed for one year.",
      },
      {
        q: "Does the United States have an ambassador in Gabon?",
        a: "Ambassador Vernelle Trim FitzPatrick's term ended January 16, 2026. As of late November 2026 the embassy is led by a charg\u00e9 d'affaires; a nominee had a Senate confirmation hearing in September 2026.",
      },
      {
        q: "Who is Jacques M. Jean?",
        a: "A Haitian-born American founder and technologist, CEO of TechFides and Founding Co-Chair of the American Business Council Gabon. He spent 25 years building technology systems in 15 countries and founded three public libraries in northern Haiti.",
      },
    ],
    sources: [
      {
        label: "Sandler, Travis & Rosenberg Trade Report: AGOA eligibility restored for Gabon effective January 1, 2026 (terminated January 1, 2024)",
        url: "https://www.strtrade.com/trade-news-resources/str-trade-report/may/agoa-eligibility-restored-for-gabon",
      },
      {
        label: "bne IntelliNews: Washington renews AGOA for a single year; Trump's tariffs still bite, February 2026",
        url: "https://www.intellinews.com/washington-renews-us-africa-trade-pact-agoa-for-single-year-trump-s-tariffs-still-bite-424327/",
      },
      {
        label: "List of ambassadors of the United States to Gabon: FitzPatrick term ended January 16, 2026; charg\u00e9 d'affaires since",
        url: "https://en.wikipedia.org/wiki/List_of_ambassadors_of_the_United_States_to_Gabon",
      },
      {
        label: "U.S. Senate Foreign Relations Committee: nominee testimony, September 16, 2026",
        url: "https://www.foreign.senate.gov/download/091626_heffern_testimonypdf",
      },
      {
        label: "Jacques M. Jean: The Handshake Is the Deal, November 2026",
        url: "https://jacquesmjean.com/perspectives/handshake-is-the-deal-us-china-africa-gabon/",
      },
    ],
  },
  {
    slug: "what-if-intelligence-is-the-new-currency-in-time",
    eyebrow: "Perspectives · AI & Society",
    tag: "AI · Society",
    title: "What If Intelligence Is the New Currency? I Rewatched “In Time” and Could Not Sleep.",
    metaTitle: "What If Intelligence Is the New Currency? “In Time” and the AI Economy | Jacques M. Jean",
    metaDescription:
      "In the film, time is money and the poor die at the end of the day. Rewatching it on Thanksgiving night, Jacques M. Jean saw the AI economy we are building: a meter on every mind, a few who own the clock, and a map of who runs out first.",
    dek: "In the film, time is money and the poor die at the end of the day. On Thanksgiving night I watched it again and saw the AI economy we are building: a meter on every mind, a few people who own the clock, and a map of who runs out first.",
    summary:
      "A doctor's AI bill, a 700 billion dollar build-out, and a continent with 0.6 percent of the world's compute. What \"In Time\" gets right about the economy we are building.",
    datePublished: "2026-11-27",
    dateDisplay: "November 2026",
    readTime: "9 min read",
    keywords: [
      "In Time movie AI",
      "intelligence as currency",
      "AI tokens cost small business",
      "AI inequality Africa data centers",
      "Own Your AI",
      "AI concentration risk",
      "Web3 crypto AI tokens",
      "sovereign AI",
    ],
    ogImage: "/images/perspectives/in-time-og.jpg",
    translations: { fr: inTimeFr },
    hero: {
      src: "/images/perspectives/in-time/doctor-and-the-bill.jpg",
      alt: "A physician alone at a kitchen table at one in the morning, lit by a phone showing a usage meter and a laptop, a stethoscope and cold coffee beside him",
      caption: "Three meters, and he owns none of them.",
      credit: "!Illustration",
      width: 2048,
      height: 1382,
    },
    sections: [
      {
        heading: "12:04 AM",
        paragraphs: [
          "It is Thanksgiving night and the house is finally quiet.",
          "I am on the couch with the news on. A Salvadoran army is fighting gangs in the streets of my own country. Haitians are marching in the streets to thank a foreign president for sending soldiers. A chief executive who resigned eleven days ago under federal investigation is back on his throne, and the President is on television taking credit for putting him there. There is a war in Iran on the crawl at the bottom of the screen. There is a vice president running Venezuela because we flew her boss to a courtroom in January.",
          "I turn it off. I need something that is not real.",
          "I put on \"In Time.\" I had seen it years ago and remembered it as a chase movie with Justin Timberlake. Two hours later I am sitting in the dark with the credits running, and I am not thinking about the movie at all.",
          "I am thinking about my friend's phone bill.",
        ],
      },
      {
        heading: "12:19 AM. The clock on the arm",
        paragraphs: [
          "If you have not seen it, here is the whole film in four sentences.",
          "In the future, nobody ages past 25. After that, a clock on your forearm starts counting down and you have one year. Time is the only currency. You earn it, you spend it, and when the clock hits zero you drop dead where you stand.",
          "The rich live in a zone called New Greenwich with centuries on their arms. The poor live in Dayton, waking up with a day or less, and the price of coffee goes up while they sleep. Between the zones are tolls. A month to cross. Then two. The tolls are not there to raise money. They are there to keep Dayton in Dayton.",
          "The hero's mother runs out of time two seconds before he reaches her. The bus fare went up that morning.",
          "It is not a subtle film. That is why it works. Strip away the costumes and it asks one question. What happens to a society when the thing everyone needs to live is metered by the minute, and a few people own the meter?",
          "I used to think that was science fiction. Now I install the meter for a living.",
        ],
      },
      {
        heading: "12:38 AM. A doctor and a bill",
        paragraphs: [
          "A close friend of mine in Minnesota is a physician. He left practice a few years ago to work on healthy living, and he built something good: a product I drink every morning after my workout, and an application to go with it. Real users, his own money.",
          "This month he called me. Not to catch up. He called the way people call when they have run out of ideas.",
          "The AI behind his app runs on tokens he buys from a large provider. The bill is unpredictable and some months runs past a thousand dollars. He pays a second company, overseas, to maintain the thing because he cannot. And one morning his application was gone from Android. Nobody asked him. Nobody called. It was simply not there anymore.",
          "\"I have no control over any of it,\" he said. \"I think I have to let it go.\"",
          "Three meters, and he owns none of them. One counts his tokens. One counts his support hours. One decides whether his product exists today.",
          "He is a doctor. He is in the top few percent of earners in the richest country on earth. And he is living day to day on borrowed intelligence, the way the people in Dayton live day to day on borrowed time.",
          "That is the line I could not get out of my head. In the film, the villain is a man in a suit. In life there is no man. There is pricing. There is a terms of service update. There is a policy change on a platform in another time zone. The clock runs down by itself.",
        ],
        pullQuote: "The meter does not hate him. It does not need to.",
      },
      {
        heading: "12:57 AM. I kept saying \"what if.\" Then I checked.",
        paragraphs: [
          "Here is where the what if stops.",
          "The price of intelligence is falling. The cost to run a query at the level of the first ChatGPT dropped from about twenty dollars per million tokens in late 2022 to seven cents by late 2024, according to Stanford's AI Index. Nearly three hundred times cheaper. On paper, the minute got cheaper for everyone.",
          "And yet my friend's bill went up. Yours did too. The minute got cheaper and the meter ran faster. That is the trick in the film, exactly. Prices in Dayton rise \"to keep up with the cost of living,\" a banker says, and nobody in Dayton gets to ask what that means.",
          "It is not only him. In April, Fast Company ran a piece called \"The end of all-you-can-eat AI.\" The flat-rate plans were ending. Providers were moving everyone to metered tokens and tightening the limits. One Chinese provider had raised its API prices 83 percent since January. Businesses that had built on a monthly plan woke up on a meter. Nobody in Dayton was consulted about that either.",
          "Now look at who owns the clock.",
          "The four largest cloud companies plan to spend roughly seven hundred billion dollars this year building AI infrastructure. Seven hundred billion. That is New Greenwich under construction, and the tolls are the subscription prices. The chips in those buildings come, overwhelmingly, from one company, whose CEO was out and back in within eleven days this month on the word of a president. One company, one man, one phone call. I wrote about that in [my last piece](/perspectives/most-valuable-man-in-america-had-no-security-detail/). Rereading it after the film, it reads like a scene from Dayton's point of view.",
          "Now look at the map.",
          "Africa has 1.4 billion people, the youngest workforce on earth, and the cobalt, manganese, and rare earths inside every one of those servers. It holds 0.6 percent of the world's data center capacity. Most African data is stored in Europe and North America. The continent that supplies the minerals rents back the intelligence built from them, by the token, in dollars.",
          "In the film, the zones have names. In life, the zones have the same borders they had in 1960.",
        ],
        figure: {
          src: "/images/perspectives/in-time/the-toll.jpg",
          alt: "Aerial view at dusk of a brightly lit wall of data centers behind a fence, with a long line of people at a toll gate and a dark neighborhood with a bus stop on the other side",
          caption: "In the film, the zones have names. In life, the zones have the same borders they had in 1960.",
          credit: "!Illustration",
          width: 2048,
          height: 1382,
        },
      },
      {
        heading: "1:14 AM. Three floors up",
        paragraphs: [
          "The pattern does not change as you go up. Only the size of the body.",
          "**A person.** My friend. One doctor, three meters, no ownership. When the meter runs out, his patients lose a tool and he loses a company. Nobody decided that. It just happened at the end of the month.",
          "**A company.** Every small business in Texas that has moved its front desk, its scheduling, and its records onto AI it rents. The owner thinks he bought a system. He bought a month. Next month the price changes, or the model changes, or the terms change, and he finds out his business runs on someone else's clock. I meet these owners every week. The smart ones have started asking one question: what do I actually own?",
          "**A country.** Gabon, where I [signed three agreements](/perspectives/handshake-is-the-deal-us-china-africa-gabon/) in a U.S. Chamber of Commerce room two years ago and watched all three go to Huawei. A nation with oil, manganese, and forest, and no servers of its own. Whoever owns the compute owns the decisions. Beijing understood that before Washington did. So did Libreville, which is why the door is open to whoever shows up with hardware instead of a subscription.",
          "Same mechanism. Same meter. The elevator just keeps going up.",
        ],
      },
      {
        heading: "1:29 AM. Web3 promised to break the clock. It built a casino.",
        paragraphs: [
          "The currency in \"In Time\" is a bearer token. It lives on your arm, you pass it hand to hand, and nobody can freeze it. That is the dream Web3 sold us ten years ago: a clock nobody could own.",
          "What we got was speculation and a coin price on the news next to the weather. Meanwhile the real currency of the next economy arrived quietly under the same name. Tokens. Not on a blockchain. Bought by the million from a model provider, counted while you use them. The decentralization crowd was looking at the wrong token.",
        ],
      },
      {
        heading: "1:41 AM. Who sets the rules?",
        paragraphs: [
          "My friend asked me that at dinner, and I did not have a good answer, so here is my honest one.",
          "Nobody you elected. The rules of this economy are being set by the pricing teams of a handful of companies, by export control offices in one capital, and by platform policies that can switch off a doctor's app in the night. The President of the United States now sits in Nvidia board meetings by proxy. That is who defines fair.",
          "A fair society, in my view, is one where the clock does not run on the things you need to live. We decided that about water, about roads, about the public library. We have not decided it about intelligence, and we are running out of time to decide, because the buildings are going up now.",
          "I know what the other side of that fence looks like. I grew up in Dayton. Not the one in the film. Ouanaminthe and Pilate, in northern Haiti, where I walked into a library for the first time at eighteen and understood that knowledge had been metered my whole life and I had not known it. I have since built three libraries there. A library is the one place I know where the clock does not run.",
        ],
        figure: {
          src: "/images/perspectives/in-time/the-library.jpg",
          alt: "A teenage boy reading at a wooden table in a small whitewashed library in northern Haiti, a laptop and a small server box with one green light beside him, other children reading in the background",
          caption: "The one place I know where the clock does not run.",
          credit: "!Illustration",
          width: 2048,
          height: 1382,
        },
      },
      {
        heading: "1:52 AM. The chase",
        paragraphs: [
          "Someone is always running the clock across the line.",
          "In Libreville it is China, showing up with servers and a handshake. In the open source world it is a model you can download for free and run on a machine you own, which terrifies the people who sell tokens. In Houston it is a lawyer launching a platform for social causes around the world, running his own AI on a machine he owns, paying no one by the minute. I know because we installed it.",
          "None of these is a revolution. They are people deciding to own their clock instead of renting it. That is all the hero of the film does, in the end. He stops paying the toll.",
        ],
      },
      {
        heading: "8:00 AM. The choice",
        paragraphs: [
          "It is almost two in the morning when I turn off the lamp. My friend's app is still gone. The bus fare went up this morning.",
          "At eight I call him back.",
          "He has decided. He is letting the old application go. He is going to start over. He says it like a man reading his own verdict, and I tell him it is the best sentence he has said all month. Because starting over is the hero's move in the film too. Will Salas does not win by paying faster. He wins by refusing the meter.",
          "So here is the plan. He starts over owning it. The model runs on a machine he controls. The data stays in his building. The support contract becomes a tool he can fire, not a landlord he cannot. The bill becomes a number he can predict, and then a number he can mostly forget. We start Monday.",
          "The film ends with a question it does not answer. Will you steal time, or keep paying?",
          "Ours is less dramatic and more urgent. Will you own your intelligence, or keep renting it? And if you rent, from whom, under whose rules, and what happens the morning the clock stops?",
          "If you run a business, ask what you own. If you run a country, ask where your data sleeps at night. If you run a family, ask what your children will be able to afford to know.",
          "My friend is starting over. The rest of us still have a choice.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the movie \"In Time\" about?",
        a: "A 2011 film by Andrew Niccol set in a future where time is the only currency. Everyone stops aging at 25 and receives one year on a clock built into their arm. The wealthy hold centuries; the poor live day to day. Rising prices and tolls between zones keep the poor where they are.",
      },
      {
        q: "How does \"In Time\" relate to AI?",
        a: "Intelligence is increasingly priced and metered like a utility, bought by the token from a handful of providers. Falling unit prices have not lowered many users' bills, and the infrastructure is concentrated in a few companies and countries. The film's question, what happens when a few people own the meter for something everyone needs, applies directly.",
      },
      {
        q: "How much of the world's data center capacity is in Africa?",
        a: "About 0.6 percent, according to the Data Centres in Africa 2026 report, for a continent of 1.4 billion people. Most African data is stored in Europe and North America.",
      },
      {
        q: "How much are the big cloud companies spending on AI infrastructure in 2026?",
        a: "Industry estimates put combined 2026 capital spending by Amazon, Microsoft, Alphabet, and Meta at roughly 650 to 725 billion dollars.",
      },
      {
        q: "What does \"own your AI\" mean?",
        a: "Running AI on hardware you control, with models you can keep, so your operations do not depend on a monthly meter, a single supplier's pricing, or a platform's policy decisions. It applies to a small business, a hospital, or a country.",
      },
      {
        q: "Who is Jacques M. Jean?",
        a: "Jacques M. Jean is a Haitian-born American founder and technologist who grew up in Ouanaminthe and Pilate, Haiti. He spent 25 years building technology systems in 15 countries, is CEO of TechFides, Founding Co-Chair of the American Business Council Gabon, and founder of three public libraries in northern Haiti.",
      },
    ],
    sources: [
      {
        label: "Stanford HAI, AI Index Report 2025: inference cost for GPT-3.5 level performance fell from about $20 to $0.07 per million tokens, November 2022 to October 2024",
        url: "https://hai.stanford.edu/ai-index/2025-ai-index-report",
      },
      {
        label: "Techeconomy, on the Data Centres in Africa 2026 report: Africa holds 0.6 percent of global data center capacity; most African data is stored abroad",
        url: "https://techeconomy.ng/africa-data-centre-capacity-0-6-percent-ai-1-2gw-2030/",
      },
      {
        label: "Datacenter Knowledge: Big Tech to spend $650B in 2026 as AI race intensifies",
        url: "https://www.datacenterknowledge.com/hyperscalers/big-tech-to-spend-650b-this-year-as-ai-race-intensifies",
      },
      {
        label: "Fast Company: The end of all-you-can-eat AI, April 9, 2026",
        url: "https://www.fastcompany.com/91524498/the-end-of-all-you-can-eat-ai",
      },
      {
        label: "Al Jazeera: Nvidia board reinstates Jensen Huang as CEO, November 23, 2026",
        url: "https://www.aljazeera.com/economy/2026/11/23/nvidia-board-reinstates-jensen-huang-as-ceo",
      },
      {
        label: "Al Jazeera: Haitians protest in support of El Salvador's anti-gang troop deployment, November 17, 2026",
        url: "https://aljazeera.com/news/2026/11/17/haitians-protest-in-support-of-el-salvadors-anti-gang-troop-deployment",
      },
      {
        label: "Council on Foreign Relations: guide to second-term U.S. military strikes and actions",
        url: "https://www.cfr.org/articles/guide-trumps-second-term-military-strikes-and-actions",
      },
    ],
  },
  {
    slug: "own-your-ai-americas-small-business-tech",
    eyebrow: "Perspectives · AI Policy",
    tag: "AI Policy · Small Business",
    title: "Own Your AI: The Case for Backing America's Small Business Tech",
    metaTitle: "Own Your AI: The Case for Backing America's Small Business Tech | Jacques M. Jean",
    metaDescription:
      "Cloud AI is leaking small business IP one prompt at a time. Private AI reverses it. Why Washington should invest in the small firms building the alternative.",
    dek: "The AI boom is turning American small businesses into tenants. They rent intelligence by the month while their data leaks out on every prompt. There is another way, and Washington should be funding the small firms building it.",
    summary:
      "Every prompt into a cloud AI tool carries a small business's IP out the door. A founder on private AI, the asset it builds, and what Washington owes the firms building the alternative.",
    datePublished: "2026-11-19",
    dateDisplay: "November 2026",
    readTime: "7 min read",
    keywords: [
      "private AI small business",
      "Own Your AI",
      "AI data leakage intellectual property",
      "on premise AI deployment",
      "small business exit value AI",
      "federal AI procurement small business set-asides",
      "SBIR applied AI funding",
      "compute access small firms",
      "China small business support overseas",
    ],
    ogImage: "/images/perspectives/mainstreet-og.jpg",
    hero: {
      src: "/images/perspectives/mainstreet/main-street-dusk.jpg",
      alt: "A quiet small town Main Street at dusk: a row of brick storefronts under a deep blue sky, an American flag on a pole, and one warmly lit office where an owner works at his desk beside a small server cabinet glowing blue",
      caption: "The intelligence stays in the building.",
      credit: "!Illustration",
      width: 2048,
      height: 1382,
    },
    sections: [
      {
        heading: "The AI boom has a landlord problem",
        paragraphs: [
          "The AI revolution is turning American small businesses into tenants. They rent intelligence by the month, at prices they don't control, from a handful of companies that own the rails. Stop paying, and everything you built on those tools disappears.",
          "I know what ownership looks like because I spent 25 years building technology systems for Honeywell, Invensys, and Schneider Electric across 15 countries. I came to the United States from Haiti, and in 2019 I founded [TechFides](https://techfides.com) in Frisco, Texas, on a simple conviction. The medical offices, law firms, auto dealers, and trades contractors that keep this country running deserve the same grade of technology the Fortune 500 takes for granted, and they deserve to own it.",
        ],
      },
      {
        heading: "The leak nobody sees",
        paragraphs: [
          "Every time an employee pastes a contract, a client list, a patient note, or a pricing sheet into a cloud AI tool, that information leaves the building. It flows to servers the business doesn't control, under terms most owners have never read, where it can be stored, reviewed, and in some cases used to train someone else's model.",
          "That is intellectual property walking out the door. The processes, formulas, and client knowledge that took an owner twenty years to build, leaking one prompt at a time, invisibly, every day.",
          "A small medical practice showed me its AI stack earlier this year. $1,200 a month for a chat tool. $2,400 a month for an AI scribe. Three more subscriptions behind those. Over $4,200 a month, rented, never owned, with patient data leaving the building on every query. Their compliance officer wasn't sleeping. He was right not to.",
        ],
        pullQuote: "Your IP took twenty years to build. It leaks one prompt at a time.",
      },
      {
        heading: "What owning your AI changes",
        paragraphs: [
          "Private AI reverses the arrangement. We deploy AI on hardware the client owns, configured for their operations. The model runs inside their walls. No cloud dependency, no recurring API bills, and the data never leaves the building.",
          "Three things change the day a business owns its intelligence.",
          "**Protection.** The law firm protects privilege. The medical office protects patients. The manufacturer protects its designs. Trade secrets stay secret because they never travel.",
          "**Cost.** Rented AI is a bill that climbs every quarter and never ends. Owned AI is bought once and works for years, like the building itself.",
          "**Equity.** This is the benefit nobody talks about. Rented AI is an expense that vanishes the day you stop paying. Owned AI is an asset: your systems, your trained workflows, your protected data, running on your hardware. The day an owner decides to sell, a business that owns its intelligence commands a different multiple than one renting it month to month. We are helping owners build equity, not subscriptions.",
          "These systems are running in Texas small businesses today. The demand we see is national.",
        ],
      },
      {
        heading: "Look at how our competitors do it",
        paragraphs: [
          "When a small Chinese company decides to compete overseas, it does not go alone. It walks into the target market on top of an infrastructure built to help it capitalize: state backed financing, export credit, trade promotion, technology access. That is a deliberate national strategy, executed through small firms, and it works. Their small businesses arrive in a new market with a system behind them.",
          "An American small business making the same move largely goes it alone. The skills are here. The technology is here. The drive is here. I have watched it in fifteen countries, and nothing anywhere outworks the American small business owner. What is missing is not talent. It is the infrastructure behind the talent.",
          "And the stakes are bigger than any one company. Private AI keeps American business data in American buildings, on American owned hardware. Every small firm we equip is a door closed to data leaving this country.",
        ],
        figure: {
          src: "/images/perspectives/mainstreet/port-at-night.jpg",
          alt: "A vast container port at night, cranes and ships working under floodlights, while in the foreground a lone figure in a small boat carries a few crates toward open water",
          caption: "When their small firms go to compete overseas, they do not go alone.",
          credit: "!Illustration",
          width: 2048,
          height: 1382,
        },
      },
      {
        heading: "Not a handout. A defined investment process.",
        paragraphs: [
          "American small business is not asking to be carried. We are asking for an investment process that matches what we already bring, with clear criteria, real access, and accountability on both sides. Three places to start.",
        ],
        list: [
          "**Federal AI procurement set-asides.** Federal AI contracts flow overwhelmingly to the largest vendors. Meaningful small business set-asides in AI procurement would do what procurement policy has always done best: give capable small firms a first customer and a track record.",
          "**Expanded SBIR funding for applied AI.** The research programs exist. Point them at the companies putting AI to work on Main Street. Deployment, not just invention.",
          "**Compute access for small AI firms.** The scarcest input in this industry is compute, and today small firms rent it from the same giants they compete against. A national compute access program for qualified small businesses levels the single most tilted part of the field.",
        ],
      },
      {
        heading: "Competitiveness runs through Main Street",
        paragraphs: [
          "Each of these is a defined process with a measurable return: more competitors in the market, more American IP protected, more Main Street businesses with technology they own.",
          "I walked into a library for the first time at eighteen. I know exactly what access to the right tools at the right moment does for a person, because it happened to me, and I have spent my career building so it can happen for others. Small business owners don't need to be convinced of the future. [They are already working in it](/perspectives/world-stopped-waiting-for-the-us-sovereign-ai/), every day, with whatever tools they can afford.",
          "China figured out that national competitiveness runs through its small businesses. **America invented that idea. It's time we funded it again.**",
        ],
      },
    ],
    faq: [
      {
        q: "What is private AI?",
        a: "Private AI is artificial intelligence deployed on hardware the business owns, inside its own walls, instead of rented from a cloud provider. The models run locally, there are no recurring API bills, and company data never leaves the building.",
      },
      {
        q: "How does cloud AI leak a company's intellectual property?",
        a: "Every prompt an employee types into a cloud AI tool travels to servers the business does not control. Contracts, client lists, patient notes, and pricing can be stored and reviewed under the provider's terms, and in some cases used to train models that serve other customers, including competitors.",
      },
      {
        q: "Does owning AI increase the value of a business?",
        a: "Yes. Rented AI subscriptions are an expense that ends when payment stops. Owned AI systems, trained workflows, and protected data are assets that transfer with the business, which matters the day the owner decides to sell.",
      },
      {
        q: "What policies would help small American tech firms compete in AI?",
        a: "Three defined steps: meaningful small business set-asides in federal AI procurement, expanded SBIR funding aimed at applied AI deployment, and a national compute access program so small firms are not renting their core input from the giants they compete against.",
      },
      {
        q: "How does China support its small businesses overseas?",
        a: "Chinese small firms entering foreign markets typically arrive with state backed financing, export credit, trade promotion, and technology access behind them, as part of a deliberate national strategy executed through small companies.",
      },
      {
        q: "Who is Jacques M. Jean?",
        a: "Jacques M. Jean is a Haitian-born American founder and technologist who spent 25 years building technology systems for Honeywell, Invensys, and Schneider Electric across 15 countries. He is founder and CEO of TechFides, a member of the U.S. Global Leadership Coalition's Texas Advisory Committee, and a member of the Forbes Technology Council.",
      },
    ],
    translations: { fr: ownYourAiFr, ht: ownYourAiHt, es: ownYourAiEs, pt: ownYourAiPt },
  },
  {
    slug: "most-valuable-man-in-america-had-no-security-detail",
    eyebrow: "Perspectives · Security",
    tag: "Security · Governance",
    title: "The Most Valuable Man in America Had No Security Detail",
    metaTitle: "Jensen Huang, Nvidia, and the Executive Nobody Protected | Jacques M. Jean",
    metaDescription:
      "Jensen Huang owns his choices. The harder question: how the man who decided who gets AI chips was left exposed for years, and what boards and Washington must do about the next one.",
    dek: "Jensen Huang is responsible for his choices. That is not the question. The question is how the one man who decides who gets AI chips was left exposed for years, and what boards and Washington do about the next one.",
    summary:
      "The man who decided who gets AI chips sat in hotel lobbies with no protocol for years. A former cybersecurity analyst on what boards and Washington must change.",
    datePublished: "2026-11-13",
    dateModified: "2026-11-27",
    dateDisplay: "November 2026",
    readTime: "9 min read",
    keywords: [
      "Jensen Huang resignation",
      "Nvidia Alice Huang Megaspeed",
      "executive security foreign intelligence",
      "board governance CEO access",
      "national asset protection",
      "AI concentration risk",
      "Own Your AI",
      "corporate espionage executives travel",
    ],
    ogImage: "/images/perspectives/lobby-og.jpg",
    hero: {
      src: "/images/perspectives/lobby/hotel-lobby-night.jpg",
      alt: "An empty hotel lobby late at night: two leather armchairs under one brass lamp, a rainy city skyline through the glass, and a lone figure standing with his back turned",
      caption: "Eleven o'clock. No protocol.",
      credit: "!Illustration",
      width: 2048,
      height: 1382,
    },
    sections: [
      {
        heading: "The lobby at eleven o'clock",
        paragraphs: [
          "I have seen it in São Paulo. I have seen it in Prague. I have seen it in a dozen other cities whose names do not matter.",
          "The CEO flies in for a town hall, a performance review, or a look at a company we might buy. The day is scripted to the minute. Badges, agendas, handlers. Then the day ends. By ten or eleven at night the executive team is sitting in the hotel lobby, or out at a dinner someone local arranged, with no protocol at all. No one checking who is in the room. No one asking how the stranger at the next table knew the CEO's name.",
          "And someone always knows the name. They show up, they sit down, they start a conversation. They are charming, well informed, and very interested. Most of the time it is nothing. A salesman. A fan. A local manager's cousin who wants a job. But I started my career as a cybersecurity analyst at Honeywell, and I learned early that you do not get to decide which conversation is the dangerous one. The other side decides that.",
          "I spent 25 years running technology across 15 countries. In all that time I never once saw an executive team briefed on this before a trip. Not once. We protected the laptops better than we protected the people carrying them.",
          "So when I read what happened to Jensen Huang, I was not shocked. I was angry. Because I have watched this door sit open for a quarter century, and this time the most valuable man in America walked through it.",
        ],
      },
      {
        heading: "What we know, and what we do not",
        paragraphs: [
          "Let me be careful here, because the story is still moving.",
          "On November 8, Jensen Huang admitted an extramarital affair after reports tied him to Alice Huang, who ran Megaspeed, a Singapore company that became a major Nvidia customer. U.S. investigators suspect Megaspeed of moving Nvidia chips into China around export controls. Some officials suspect Alice Huang of working for Chinese intelligence. That has not been proven. Megaspeed denies wrongdoing. Beijing calls the whole thing a smear.",
          "Nvidia's board opened an independent investigation. Then came reports of a second relationship, with an executive who reported to him. On November 12, Huang resigned as CEO of the company he founded.",
          "And one more fact. The New York Times reports the President was told in October 2025 that Huang was close to Alice Huang and that U.S. intelligence suspected her. Two months later, higher grade chips were cleared for export to China. The information sat for a year while the man ran a company worth close to six trillion dollars at its peak.",
          "I am not going to write about the Huangs' marriage. I do not know anything about it and neither does anyone writing about it. Jensen Huang made his choices, and he owns them. Two affairs, one with a direct report, is a firing offense at any serious company, spy or no spy.",
          "But if the only lesson here is that a powerful man behaved badly, we will have learned nothing. The lesson is about everyone around him who knew what he was worth and did nothing to protect it.",
        ],
      },
      {
        heading: "Some people are infrastructure",
        paragraphs: [
          "Here is the uncomfortable truth. A handful of individuals in this country are not just executives. They are infrastructure.",
          "Jensen Huang did not just run a chip company. For three years he personally decided which countries, companies, and governments got the hardware that trains AI. Whether you agree with his choices or not, that is the kind of influence a nation protects.",
          "We protect the President with the Secret Service. We protect aircraft carriers with destroyers. We protect the formula for a fighter jet's radar with clearances and vaults. We did not protect the one man whose decisions shaped the AI race more than any general's.",
          "Every intelligence service in the world knew his value before we admitted it to ourselves. That is why he became a target. Not because he was careless. Because he was worth it.",
        ],
        pullQuote: "We classify the chips. We did not classify the man who decides who gets them.",
      },
      {
        heading: "Was he set up?",
        paragraphs: [
          "People keep asking me this, so I will answer it plainly. I do not know, and neither does anyone else writing about it.",
          "What I know is the timeline. The President was briefed in October 2025. The story broke in November 2026, days after the midterms and a few weeks after Huang used his first ever post on X to argue against banning Chinese open source models. Somebody held this for a year and then it moved. Who, and why now, are questions the public deserves answered. Asking them is not a conspiracy theory. It is oversight.",
          "And there is a second possibility people forget. If a foreign service placed someone close to him, the relationship was the operation and the leak may be the second act. Removing the man who decides where the chips go is a prize for more than one government.",
          "Either way the question comes back to the same place. Our system knew, and it did not act.",
        ],
      },
      {
        heading: "Too close to the flag",
        paragraphs: [
          "There is an older lesson underneath this one. Business and government each answer to the public, but for different things. A company owes a return and a product. A government owes protection and a fair set of rules. The moment the two get too close, both stop doing their jobs.",
          "Look at the last eighteen months. The CEO of Nvidia flew to Beijing on Air Force One. He sat in the Oval Office. When the story broke, the President called him an honorable guy who had done an amazing job for the country. The Commerce Department never put his most suspicious customer on the restricted list, and the Treasury Secretary reportedly had to confront the Commerce Secretary to ask why.",
          "That is not a scandal about one man's private life. That is what proximity does. When a company gets close enough to power, warnings about it become inconvenient. Regulators hesitate. Export rules bend. A briefing in October gets filed in a drawer because acting on it would embarrass a friend in December.",
          "The company learns the wrong lesson too. A CEO who can get the President on the phone stops believing anyone can tell him no. That is how a disciplined founder, thirty years in, ends up with two undisclosed relationships and a board that looked away.",
          "I have seen this in other countries. Where the biggest company and the government share a table, you get oligarchs, monopolies, and rules that apply to everyone else. America is supposed to be the place where that does not happen. It stays that way only if business keeps its distance from power, and power from business. Access, donations, a seat on the plane: all of it has a price, and the bill always arrives.",
          "**Update, November 23.** Eleven days after he resigned, Nvidia's board reinstated Jensen Huang as CEO. The President said on television that he was represented in the board meeting and that his intervention played an important role. The stock rose 33 percent that morning. The SEC and Justice Department investigations remain open. I wrote the paragraphs above before any of that happened. I would not change a word.",
        ],
      },
      {
        heading: "What boards must do Monday morning",
        paragraphs: [
          "I have run companies and sat at enough board tables to know this: none of what follows is complicated, and none of it is expensive next to a trillion dollars of market value.",
        ],
        list: [
          "**Name your critical people.** Every board should know which three to five individuals, if compromised, could damage the company or the country. Write the list down. Review it every year.",
          "**Control access to the top.** Who gets into the CEO's calendar, his dinners, his travel? Today that is a chief of staff with a spreadsheet. It should be a process, with vetting for anyone who gains repeated private access. Megaspeed was a customer. Customers get access. That is exactly how it works.",
          "**Travel protocol for the executive team.** A pre-trip briefing on the country. A rule about who joins after hours. Someone whose only job is to notice who is in the lobby. I never had one in 25 years. The cost is one salary.",
          "**Due diligence on major counterparties, including the people.** A company that took control of a key customer in 2023 and routed billions through Singapore deserved more than a credit check. It deserved a question about who owned it and who ran it.",
          "**A rule the CEO cannot waive.** Relationships inside the chain of command get disclosed, or the executive goes. Most companies already have this on paper. Nvidia's board apparently did not enforce it against the founder. That is the board's failure, not just his.",
          "**Treat the founder like everyone else, then more so.** The more a company depends on one person, the stricter the board must be with that person. Boards get this backwards. They relax for the star. The star is the target.",
        ],
      },
      {
        heading: "What Washington must do",
        paragraphs: [
          "The government cannot run a private company's security. It should not. But it can do four things it did not do here.",
          "**Decide what counts as a national asset.** A short, published list of companies and roles whose compromise would hurt the country, like the critical infrastructure designations we already use for power plants and ports. Once you are on it, you know it, your board knows it, and you accept the obligations that come with it.",
          "**Give those companies a desk.** If a CEO on that list gets a strange approach in a hotel bar, who does he call? There is no number. Put one in place: one office, one point of contact, reachable in an hour. The FBI already briefs university researchers on foreign recruitment. It can brief a CEO. If intelligence suspected Alice Huang in 2025, Jensen Huang should have been across a table from an agent within the week. Maybe he was. If so, nothing changed, and that is worse.",
          "**Put the embassy to work.** When an ambassador travels inside a country, the embassy's security officer knows the route, the hotel, and who is likely to show up. When the CEO of a company on that list lands in the same country, nobody at the embassy knows he is there. That is backwards. A heads up before the trip, a thirty minute briefing on arrival, a name and a number for the week. I walked into embassies in 15 countries. The people there are good. They were never asked to do this.",
          "**Separate the warning from the politics.** The warning reached the top in October 2025. The export decision went the other way in December. The system that is supposed to protect strategic assets bent to a commercial calendar. Congress is now asking why. That is the right question.",
          "None of this touches anyone's privacy. A man can live his life. The country can still protect the position he holds.",
        ],
      },
      {
        heading: "The real lesson is the one I keep repeating",
        paragraphs: [
          "Step back from the scandal and look at the shape of it.",
          "The entire AI economy was running through one company and, to a remarkable degree, one man. His judgment decided who got compute. His relationships became a national security question. His resignation moved markets in a day.",
          "That is not a Jensen Huang problem. That is a concentration problem.",
          "I have spent two years [telling businesses and governments the same thing](/perspectives/world-stopped-waiting-for-the-us-sovereign-ai/). **Own your AI.** Do not rent your future from a single supplier. Not from a cloud. Not from one chipmaker. Not from one country. A dental practice in Texas and the Republic of Gabon have the same exposure, at different scales: if the thing that runs your operation lives in someone else's building, their crisis becomes yours.",
          "This week, the world's most important technology company found out that its single point of failure was a person. Every CEO reading this should ask the same question about their own company. Who is your Jensen? Who is protecting him? And what happens to you the morning he is gone?",
          "**The lobby is still open at eleven o'clock. Somebody is already sitting there.**",
        ],
      },
    ],
    faq: [
      {
        q: "Why did Jensen Huang resign from Nvidia?",
        a: "He resigned on November 12, 2026, after admitting an extramarital affair with Alice Huang, former head of Megaspeed, a Singapore based Nvidia customer under U.S. investigation for moving chips to China, and amid reports of a second relationship with an Nvidia executive who reported to him. On November 23, 2026, Nvidia's board reinstated him as CEO after the President publicly backed his return. SEC and Justice Department investigations remain open.",
      },
      {
        q: "Was Alice Huang a Chinese spy?",
        a: "U.S. officials suspect it, but as of mid November 2026 investigators have not established that she acted as an agent of the Chinese government. Megaspeed denies wrongdoing and China calls the allegations a smear.",
      },
      {
        q: "What did the U.S. government know about Huang's relationship?",
        a: "The New York Times reported that the President was informed in October 2025 that Huang was close to Alice Huang and that U.S. intelligence suspected her. Export approvals for higher grade chips to China followed two months later.",
      },
      {
        q: "What should boards learn from the Nvidia scandal?",
        a: "Identify the few people whose compromise would damage the company, control access to them, brief executives before foreign travel, vet major counterparties including their owners, and enforce disclosure rules on relationships inside the chain of command regardless of rank. The more a company depends on one person, the stricter the board should be with that person.",
      },
      {
        q: "What should the U.S. government do to protect strategic executives?",
        a: "Publish a standard for which companies and roles count as national assets, give those companies a single point of contact for threats, have embassies brief and support designated executives when they travel abroad, and keep intelligence warnings separate from commercial and political decisions.",
      },
      {
        q: "Who is Jacques M. Jean?",
        a: "Jacques M. Jean is a Haitian-born American founder and technologist who began his career as a cybersecurity analyst at Honeywell and spent 25 years building technology systems in 15 countries. He is CEO of TechFides and Founding Co-Chair of the American Business Council Gabon.",
      },
    ],
    sources: [
      {
        label: "The Hill: Five takeaways from Nvidia's Jensen Huang scandal, November 12, 2026",
        url: "https://thehill.com/homenews/analysis/6217604-nvidias-jensen-huang-resigned/",
      },
      {
        label: "Reuters: Former Nvidia CEO Huang had a relationship with a second employee, November 12, 2026",
        url: "https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/",
      },
      {
        label: "CNN: Jensen Huang resigns as Nvidia CEO; Colette Kress named interim CEO, November 12, 2026",
        url: "https://www.cnn.com/2026/11/11/business/live-news/nvidia-jensen-huang-investigation-fallout",
      },
      {
        label: "The New York Times: timeline of the Huang affairs, including the October 2025 briefing, November 12, 2026",
        url: "https://www.nytimes.com/2026/11/12/business/nvidia-jensen-huang-affairs-timeline.html",
      },
      {
        label: "The Washington Post: How Jensen Huang's downfall unfolded, November 12, 2026",
        url: "https://www.washingtonpost.com/technology/2026/11/12/timeline-alleged-spy-drama-engulfing-jensen-huang/",
      },
      {
        label: "Axios: Bessent confronted Lutnick over Megaspeed, November 11, 2026",
        url: "https://www.axios.com/2026/11/11/bessent-lutnick-megaspeed-nvidia-china-chips",
      },
      {
        label: "Al Jazeera: Nvidia board reinstates Jensen Huang as CEO, November 23, 2026",
        url: "https://www.aljazeera.com/economy/2026/11/23/nvidia-board-reinstates-jensen-huang-as-ceo",
      },
      {
        label: "Fortune: Huang argues against banning Chinese open source models, July 2026",
        url: "https://fortune.com/2026/07/22/jensen-huang-chinese-open-source-ai-models-kimi-deepseek-washington-ban-nvidia-chips-data-centers-security/",
      },
    ],
    translations: { fr: jensenFr, ht: jensenHt, es: jensenEs, pt: jensenPt },
  },
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
    translations: { fr: worldFr, ht: worldHt, es: worldEs, pt: worldPt },
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
