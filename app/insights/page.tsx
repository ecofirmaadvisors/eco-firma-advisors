import Link from "next/link";

export default function InsightsPage() {
  const featuredItem = {
    title:
      "How to Operate a More Sustainable and Profitable Cannabis Cultivation Operation",
    excerpt:
      "A Cannabis Business Times interview with Jesse Peters focused on utility strategy, water systems, reclamation, sustainability, and the operational decisions that improve indoor cultivation profitability.",
    category: "Featured Interview",
    type: "Article",
    source: "Cannabis Business Times",
    url: "https://www.cannabisbusinesstimes.com/interviews-opinion/news/15698925/how-to-operate-a-more-sustainableand-profitablecannabis-cultivation-operation-qa-with-jesse-peters",
    cta: "Read interview",
  };

  const articles = [
    {
      title: "Eco Firma Achieves a Cannabis Yield of 1.3 Grams per Watt",
      excerpt:
        "An Energy Trust case study on Eco Firma Farms’ LED and HVAC upgrades, including reduced lighting energy use and annual electricity savings tied directly to cultivation efficiency.",
      category: "Energy Efficiency",
      type: "Article",
      source: "Energy Trust of Oregon",
      url: "https://blog.energytrust.org/eco-firma-cuts-63000-annual-electricity-costs-achieving-cannabis-yield-1-3-grams-watt/",
      cta: "Read article",
    },
    {
      title: "How to Operate a More Sustainable and Profitable Cannabis Cultivation Operation",
      excerpt:
        "One of the strongest public interviews featuring Jesse Peters on lowering resource costs, improving sustainability, and building a more profitable indoor cultivation operation.",
      category: "Operational Strategy",
      type: "Article",
      source: "Cannabis Business Times",
      url: "https://www.cannabisbusinesstimes.com/interviews-opinion/news/15698925/how-to-operate-a-more-sustainableand-profitablecannabis-cultivation-operation-qa-with-jesse-peters",
      cta: "Read interview",
    },
    {
      title: "Sustainable Growing",
      excerpt:
        "A feature on Eco Firma Farms’ renewable energy approach, facility systems, and cultivation strategy, highlighting how sustainability and disciplined design can support better long-term economics.",
      category: "Facility Strategy",
      type: "Article",
      source: "Cannabis Business Times",
      url: "https://www.cannabisbusinesstimes.com/home/article/15702654/sustainable-growing",
      cta: "Read feature",
    },
    {
      title: "Eco Firma Farms Is an Eco-Friendly Leader in the Cannabis Industry",
      excerpt:
        "A Willamette Week profile covering Eco Firma’s environmental leadership, founder vision, and the reputation Jesse Peters built around sustainability and operational rigor.",
      category: "Industry Profile",
      type: "Article",
      source: "Willamette Week",
      url: "https://www.wweek.com/potlander/2019/05/23/eco-firma-farms-is-an-eco-friendly-leader-in-the-cannabis-industry/",
      cta: "Read profile",
    },
    {
      title: "Vets: Jesse Peters",
      excerpt:
        "A founder-focused feature on Jesse Peters, his background, and the strategic thinking behind Eco Firma Farms as one of the more progressive indoor cultivation operations in the country.",
      category: "Founder Profile",
      type: "Article",
      source: "Marijuana Venture",
      url: "https://www.marijuanaventure.com/10085-2/",
      cta: "Read profile",
    },
  ];

  const media = [
    {
      title: "Jesse Peters: Responsible Cannabis Business Practices",
      excerpt:
        "A podcast conversation on carbon-neutral cultivation, responsible business practices, energy strategy, and how operators can think more strategically about sustainable growth.",
      category: "Podcast",
      type: "Audio",
      source: "Ganjapreneur",
      url: "https://ganjapreneur.com/jesse-peters-responsible-cannabis-business-practices/",
      cta: "Listen now",
    },
    {
      title: "Conversations with Environmental Disruptors: Jesse Peters of Eco Firma Farms",
      excerpt:
        "A discussion of how technology, automation, LEDs, monitoring systems, and environmental thinking can translate into both financial and environmental sustainability.",
      category: "Podcast",
      type: "Audio",
      source: "Environmental Law Institute",
      url: "https://www.eli.org/conversations-environmental-disruptors",
      cta: "Listen now",
    },
    {
      title: "Oregon Producer’s Advice to Thrive",
      excerpt:
        "A business-focused podcast with Jesse Peters discussing what it takes to stand out, survive, and improve performance in a crowded cannabis market.",
      category: "Podcast",
      type: "Audio",
      source: "Periodic Effects",
      url: "https://www.periodiceffects.com/episodes/e020",
      cta: "Listen now",
    },
    {
      title: "Free Weed Episode 90: Jesse Peters of Eco Firma Farms",
      excerpt:
        "An interview covering sustainable indoor farming techniques, eco-friendly operations, and the economic realities of producing in an oversupplied market.",
      category: "Podcast",
      type: "Audio",
      source: "Acast / Free Weed",
      url: "https://shows.acast.com/freeweed/episodes/free-weed-episode-90",
      cta: "Listen now",
    },
    {
      title: "Cannabis Business Owner - Jesse Peters (Full Interview)",
      excerpt:
        "A long-form interview appearance tied to Jesse Peters’ business background, Eco Firma Farms, and the broader cultivation and investment story around the operation.",
      category: "Interview",
      type: "Audio / Video",
      source: "Spotify",
      url: "https://open.spotify.com/show/2ttqpkKG1JBCmTN95kIXww",
      cta: "Open interview",
    },
  ];

  const topics = [
    "Cost per pound reduction",
    "Indoor cultivation efficiency",
    "Energy strategy",
    "HVAC and lighting optimization",
    "Water reclamation",
    "Sustainable facility design",
    "Operational discipline",
    "Founder credibility",
  ];

  return (
    <main className="bg-[#f7f5ef] px-6 py-20 text-[#1f2937]">
      <div className="mx-auto max-w-6xl">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b45]">
              Media, Interviews & Industry Coverage
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
              Public-facing coverage featuring Jesse Peters and Eco Firma Farms.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4b5563]">
              This page highlights selected articles, interviews, and podcast
              appearances tied to indoor cultivation efficiency, sustainability,
              facility strategy, and the operating discipline required to reduce
              cost per pound without compromising product quality.
            </p>
          </div>

          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b45]">
              Coverage Themes
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[#d8d3c7] bg-[#f8f6f1] px-4 py-2 text-sm text-[#374151]"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b45]">
                  Featured Coverage
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  {featuredItem.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#4b5563]">
                  {featuredItem.excerpt}
                </p>
              </div>

              <div className="shrink-0">
                <div className="rounded-2xl bg-[#f7f5ef] px-5 py-4 text-sm text-[#4b5563]">
                  <p className="font-semibold text-[#1f2937]">
                    {featuredItem.category}
                  </p>
                  <p className="mt-1">{featuredItem.source}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={featuredItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-[#5b6b45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4d5c3a]"
              >
                {featuredItem.cta}
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b45]">
                Articles
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Press and industry features
              </h2>
            </div>
            <p className="hidden max-w-xl text-right text-sm leading-relaxed text-[#6b7280] md:block">
              A tighter set of stronger sources that build authority around
              cultivation performance, sustainability, and operating economics.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {articles.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-[#d9d2c3] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#eef2e6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#5b6b45]">
                    {item.category}
                  </span>
                  <span className="text-sm text-[#6b7280]">{item.source}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-snug text-[#111827] transition group-hover:text-[#5b6b45]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#4b5563]">
                  {item.excerpt}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#5b6b45]">
                  {item.cta}
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b45]">
                Interviews & Media
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Podcast and interview appearances
              </h2>
            </div>
            <p className="hidden max-w-xl text-right text-sm leading-relaxed text-[#6b7280] md:block">
              A media shelf for long-form conversations around cultivation,
              sustainability, and business strategy.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {media.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-[#d9d2c3] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-[#eef2e6] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#5b6b45]">
                    {item.category}
                  </span>
                  <span className="text-sm text-[#6b7280]">{item.source}</span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-snug text-[#111827] transition group-hover:text-[#5b6b45]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#4b5563]">
                  {item.excerpt}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-semibold text-[#5b6b45]">
                  {item.cta}
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-3xl border border-[#d9d2c3] bg-[#eef2e6] p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5b6b45]">
                  Advisory Perspective
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-[#1f2937]">
                  Strong operators do not guess their way to lower cost per pound.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#4b5563]">
                  Eco Firma Advisors works with operators on cultivation
                  efficiency, facility optimization, environmental controls,
                  operating discipline, and performance alignment. If your team
                  is evaluating a facility or trying to improve production
                  economics, we can help translate strategy into execution.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-[#5b6b45] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4d5c3a]"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#5b6b45] px-6 py-3 text-sm font-semibold text-[#5b6b45] transition hover:bg-white"
                >
                  Contact Eco Firma
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}