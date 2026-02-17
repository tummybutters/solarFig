export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  checklist?: string[];
  tip?: string;
}

export interface SolarArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  updatedAt: string;
  sections: ArticleSection[];
}

export const solarArticles: SolarArticle[] = [
  {
    slug: "is-solar-worth-it-california-2026",
    title: "Is Solar Still Worth It in California in 2026?",
    category: "Costs & Savings",
    readTime: "8 min read",
    excerpt:
      "A practical look at utility rates, home usage patterns, and when solar still delivers strong value under NEM 3.0.",
    image: "/assets/install-gallery/install-01.png",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "Short answer: yes, but design matters more than ever",
        paragraphs: [
          "Solar is still worth it for many California homeowners, but the old strategy of oversizing a system and exporting excess power is no longer the best playbook.",
          "Under NEM 3.0, exported electricity is generally credited at lower rates than what you pay to buy electricity from the grid. That means your return depends more on self-consumption, load shifting, and pairing solar with battery storage when it fits your home.",
          "Homeowners with high daytime usage, electric vehicles, pool equipment, or flexible evening loads often continue to see strong long-term value.",
        ],
      },
      {
        heading: "What drives value now",
        paragraphs: [
          "Your utility rate plan, your hourly usage profile, and your system design now matter more than panel count alone.",
          "If your system is designed around when your home uses energy, not just how much it uses annually, savings can still be compelling over the life of the system.",
        ],
        checklist: [
          "Match system size to your real 12-month usage, not rough estimates.",
          "Review time-of-use periods and seasonal peaks before finalizing design.",
          "Ask for a battery scenario and a no-battery scenario in the same proposal.",
          "Stress-test projections using conservative utility rate escalation assumptions.",
        ],
      },
      {
        heading: "When solar may not pencil immediately",
        paragraphs: [
          "Very low-usage homes, heavily shaded roofs, or homes with major roof repairs pending can have weaker near-term economics.",
          "In those cases, it can still make sense to plan for solar, but timing and scope need to be right. Sometimes a phased approach is better than rushing into a full install.",
        ],
        tip: "If roof replacement is likely within 3-7 years, compare install-now vs wait-with-re-roof side by side before committing.",
      },
      {
        heading: "Bottom line for 2026 buyers",
        paragraphs: [
          "California solar remains a high-value home upgrade when the proposal is engineered around your utility tariff and daily usage pattern.",
          "The right question is no longer 'Is solar worth it?' but 'Is this specific design worth it for my home?'",
        ],
      },
    ],
  },
  {
    slug: "california-solar-cost-after-incentives",
    title: "How Much Do Solar Panels Cost in California After Incentives?",
    category: "Pricing",
    readTime: "10 min read",
    excerpt:
      "What real quotes include, how tax credits change the math, and what to check before comparing financing options.",
    image: "/assets/pricing-costs/hero-solar-roof-sunset.png",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "What a total solar price actually includes",
        paragraphs: [
          "A complete quote should include panels, inverters or microinverters, racking, electrical work, permitting, engineering, inspections, and interconnection support.",
          "Many buyers compare only system size and total dollar amount, but contract scope can vary significantly. Price differences often reflect equipment quality, workmanship standards, or what is excluded.",
        ],
      },
      {
        heading: "How incentives reduce net cost",
        paragraphs: [
          "The federal residential clean energy credit can materially reduce your effective out-of-pocket cost if you have sufficient tax liability. Local and utility programs can also apply depending on location and current program availability.",
          "Because incentive rules evolve, treat any estimate as conditional and ask your installer to clearly separate guaranteed savings from assumed incentives.",
        ],
        checklist: [
          "Request gross system price, incentive-adjusted estimate, and financing-adjusted estimate.",
          "Confirm whether assumptions depend on tax appetite and filing timing.",
          "Verify if add-ons like monitoring, panel-level shutdown, and warranties are included.",
        ],
      },
      {
        heading: "Cash vs loan vs third-party ownership",
        paragraphs: [
          "Cash typically delivers the strongest long-term returns but requires upfront capital.",
          "Loans lower upfront cost but include interest and lender fees that can materially affect lifetime economics.",
          "Leases and PPAs can simplify adoption for some homeowners, but contract terms, escalators, and transfer conditions must be reviewed carefully.",
        ],
      },
      {
        heading: "How to compare quotes like a pro",
        paragraphs: [
          "Ask every installer to model the same assumptions: same utility rate plan, same escalation rate range, same degradation assumptions, and the same expected household usage.",
          "When assumptions are standardized, it becomes much easier to compare true system value rather than marketing language.",
        ],
        tip: "If one proposal only wins under aggressive utility inflation assumptions, request a downside case before signing.",
      },
    ],
  },
  {
    slug: "electric-bill-after-solar-california",
    title: "What Happens to My Electric Bill in California After Going Solar?",
    category: "Billing",
    readTime: "7 min read",
    excerpt:
      "See how bill components change with solar, where delivery charges still apply, and how to model your monthly outcomes.",
    image: "/assets/install-gallery/install-04.jpg",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "Your bill changes shape, it does not disappear",
        paragraphs: [
          "Most California homeowners still receive a utility bill after solar. The amount often decreases, but some charges remain.",
          "You may still pay for grid usage during periods when your system is not producing enough power, plus baseline fixed or non-bypassable charges depending on utility rules.",
        ],
      },
      {
        heading: "How solar production affects monthly charges",
        paragraphs: [
          "During sunny hours, your home uses solar first. If production exceeds demand, excess may be exported. At night, early morning, or during heavy load windows, your home can draw from the grid.",
          "The monthly result depends heavily on when your home uses electricity and whether you can shift discretionary loads into solar production hours.",
        ],
      },
      {
        heading: "Why some months are still higher than expected",
        paragraphs: [
          "Summer cooling loads, winter daylight reduction, and rate period timing can create seasonal bill swings.",
          "Homeowners who electrify vehicles, add HVAC equipment, or increase occupancy after install may also see higher bills than the original model predicted.",
        ],
        checklist: [
          "Track pre-solar and post-solar usage in kWh, not only dollar totals.",
          "Review your utility rate plan each year.",
          "Schedule EV charging and pool equipment for lower-cost windows when possible.",
        ],
      },
      {
        heading: "What a good forecast looks like",
        paragraphs: [
          "A quality proposal should show monthly projected production, estimated self-consumption, and expected annual net bill impact, not just a single annual savings number.",
          "The most trustworthy models include best-case and conservative-case scenarios so you can plan with realistic expectations.",
        ],
      },
    ],
  },
  {
    slug: "do-i-need-a-battery-with-solar-california",
    title: "Do I Need a Battery With Solar in California (or Can I Skip It)?",
    category: "Battery Backup",
    readTime: "9 min read",
    excerpt:
      "A clear framework for deciding when battery storage is optional, recommended, or essential for your home.",
    image: "/assets/whole-home-solar/battery-backup.webp",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "Battery decisions are financial and lifestyle decisions",
        paragraphs: [
          "A battery can improve economics by storing daytime solar for evening use, and it can provide backup power during outages depending on system design.",
          "Whether you need one depends on your goals: maximizing bill savings, outage resilience, energy independence, or all three.",
        ],
      },
      {
        heading: "When battery is often worth strong consideration",
        paragraphs: [
          "Under California's current export structure, storing more of your own solar production can improve overall value for many homes.",
          "Homes with frequent outages, critical loads, medical equipment, remote work requirements, or high evening usage often benefit the most.",
        ],
      },
      {
        heading: "When skipping battery can still make sense",
        paragraphs: [
          "If outage backup is not important, evening usage is low, and budget is tight, a solar-only system can still reduce utility spend.",
          "Some homeowners choose to install solar now with battery-ready electrical design and add storage later when economics or needs change.",
        ],
        checklist: [
          "Ask for side-by-side annual savings with and without storage.",
          "Ask for outage backup scope: whole home vs critical loads only.",
          "Confirm round-trip efficiency assumptions and battery warranty terms.",
          "Clarify expansion options if you add more storage in the future.",
        ],
      },
      {
        heading: "A practical decision framework",
        paragraphs: [
          "If resilience is mission-critical, prioritize battery now. If budget is primary, prioritize solar sizing and battery readiness. If bill optimization is the goal, compare both pathways using your actual hourly consumption profile.",
          "The best decision is the one aligned with your household risk tolerance and usage behavior, not generic internet averages.",
        ],
      },
    ],
  },
  {
    slug: "california-solar-installation-timeline",
    title: "How Long Does Solar Installation Take in California From Quote to PTO?",
    category: "Installation",
    readTime: "6 min read",
    excerpt:
      "Understand each phase of the timeline from site visit to final utility approval so you can plan with confidence.",
    image: "/assets/install-gallery/install-03.jpg",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "Typical timeline overview",
        paragraphs: [
          "Most residential projects move through five stages: consultation and proposal, site assessment and engineering, permitting, installation, and utility permission to operate (PTO).",
          "In many cases, the longest phase is paperwork and utility processing, not physical install day.",
        ],
      },
      {
        heading: "What can slow a project down",
        paragraphs: [
          "Permit queue times vary by jurisdiction. Utility review timelines can vary by territory and project complexity. Main panel upgrades and roof condition issues can also add time.",
          "If your home needs electrical remediation or reroof work, expect additional coordination before final interconnection.",
        ],
      },
      {
        heading: "What a realistic project plan should include",
        paragraphs: [
          "A strong installer gives you a milestone timeline with likely ranges, not fixed promises that ignore permitting and utility variables.",
          "Your timeline should also identify what depends on you, such as document signatures, access windows, HOA approvals, and financing completion.",
        ],
        checklist: [
          "Request milestone updates at each phase handoff.",
          "Confirm who owns permit submission and utility communication.",
          "Ask how change orders are handled if field conditions differ from plan.",
        ],
      },
      {
        heading: "How to keep momentum",
        paragraphs: [
          "Fast homeowner response time on paperwork and scheduling can prevent avoidable delays.",
          "Choosing an installer with clear operations handoff between sales, design, permitting, and install teams usually leads to smoother delivery.",
        ],
      },
    ],
  },
  {
    slug: "nem-3-how-it-affects-california-solar-savings",
    title: "What Is NEM 3.0 and How Does It Affect California Solar Savings?",
    category: "NEM 3.0",
    readTime: "11 min read",
    excerpt:
      "A straightforward explanation of export rates, self-consumption, and how system design impacts long-term savings.",
    image: "/assets/install-gallery/install-07.jpg",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "NEM 3.0 in plain language",
        paragraphs: [
          "NEM 3.0 changed how California investor-owned utility customers are credited for solar electricity exported to the grid.",
          "Compared with older structures, exported energy compensation is generally lower in many time windows, which increases the importance of using solar energy on-site or storing it for later use.",
        ],
      },
      {
        heading: "What this means for system design",
        paragraphs: [
          "Design strategy has shifted from maximizing exports to maximizing self-consumption.",
          "That can include right-sized systems, smart load scheduling, and battery pairing to shift energy into higher-value evening periods.",
        ],
        checklist: [
          "Model hourly production and usage, not just annual totals.",
          "Evaluate battery economics with conservative assumptions.",
          "Check whether your selected rate plan aligns with your load profile.",
        ],
      },
      {
        heading: "Common buyer mistakes under NEM 3.0",
        paragraphs: [
          "One common mistake is comparing new quotes to old NEM 2.0 stories from neighbors without adjusting expectations.",
          "Another is accepting savings claims that do not disclose escalation assumptions, consumption behavior changes, or non-bypassable costs.",
        ],
      },
      {
        heading: "Still viable, but data discipline is required",
        paragraphs: [
          "NEM 3.0 did not end solar value in California. It raised the bar for proposal quality and operational strategy.",
          "Homeowners who evaluate proposals with hourly thinking, realistic assumptions, and clear battery scenarios are still finding strong long-term outcomes.",
        ],
        tip: "Ask your installer to show one chart: daytime production, evening load, and battery dispatch assumptions on the same timeline.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-solar-installer-california",
    title: "How Do I Choose the Best Solar Installer in California Without Getting Burned?",
    category: "Buying Guide",
    readTime: "8 min read",
    excerpt:
      "The exact checklist to evaluate proposals, warranties, workmanship standards, and financing before you sign.",
    image: "/assets/install-gallery/install-10.jpg",
    updatedAt: "February 2026",
    sections: [
      {
        heading: "Start with installer quality, not headline price",
        paragraphs: [
          "The lowest quote is not always the lowest cost over system life. Poor design, weak workmanship, or unclear warranty support can erase upfront savings quickly.",
          "You are choosing both a system and a long-term service relationship. Installation quality and post-install support matter.",
        ],
      },
      {
        heading: "What to verify before signing",
        paragraphs: [
          "Ask for licensing details, proof of insurance, workmanship warranty terms, equipment warranty handling process, and who performs actual field installation.",
          "Review contract language for change orders, cancellation windows, monitoring support, and timeline commitments.",
        ],
        checklist: [
          "Compare at least three proposals using identical assumptions.",
          "Check online review patterns for service responsiveness, not only star rating.",
          "Request a written scope that includes electrical upgrades and permit handling.",
          "Confirm lender fees, interest terms, and prepayment conditions if financed.",
        ],
      },
      {
        heading: "Questions that reveal proposal quality",
        paragraphs: [
          "Ask how the system is sized for your hourly usage, not just annual kWh offset.",
          "Ask how shading, roof orientation, and panel degradation are modeled.",
          "Ask what happens operationally if estimated production is missed in year one.",
        ],
      },
      {
        heading: "Decision framework you can trust",
        paragraphs: [
          "Prioritize transparent assumptions, complete scope, credible timeline communication, and documented support after install.",
          "If a proposal is difficult to understand before you sign, support is unlikely to improve after signing.",
        ],
        tip: "Choose the team that explains tradeoffs clearly and documents them in writing.",
      },
    ],
  },
];

export const solarArticlesBySlug: Record<string, SolarArticle> = solarArticles.reduce(
  (acc, article) => {
    acc[article.slug] = article;
    return acc;
  },
  {} as Record<string, SolarArticle>
);
