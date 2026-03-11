export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Energy Optimization",
      subtitle: "Facility tuning and system redesign",
      challenge:
        "High utility spend, uneven room performance, and environmental inefficiencies were cutting into production margins.",
      approach:
        "Refined HVAC and environmental control strategy, tuned facility setpoints, and aligned operational practices to reduce waste without compromising crop performance.",
      outcome:
        "Reduced unnecessary energy consumption while improving room stability and maintaining production quality.",
      result: "18% utility reduction",
    },
    {
      title: "Yield Stability",
      subtitle: "Consistency across harvest cycles",
      challenge:
        "Production outcomes varied from room to room and cycle to cycle, making planning, forecasting, and labor allocation difficult.",
      approach:
        "Improved workflow sequencing, harvest cadence, and environmental consistency to create tighter control across the cultivation process.",
      outcome:
        "Created more predictable performance across runs and helped standardize production rhythms.",
      result: "22% consistency improvement",
    },
    {
      title: "Margin Protection",
      subtitle: "Operational efficiency and cost control",
      challenge:
        "Labor drag, process inefficiencies, and environmental instability were putting pressure on per-pound economics.",
      approach:
        "Streamlined cultivation workflows, reduced avoidable inefficiencies, and improved environmental performance to support healthier margins.",
      outcome:
        "Strengthened facility economics by reducing production drag and improving the operational baseline.",
      result: "25% margin improvement",
    },
  ];

  return (
    <main className="bg-[#f7f5ef] px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Case Studies
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Real operational improvements for cultivation businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">
            Eco Firma Advisors helps operators uncover margin leaks, improve
            facility performance, and build more stable cultivation systems.
            These examples reflect the types of outcomes achieved through better
            environmental strategy, tighter workflows, and disciplined
            operational execution.
          </p>
        </section>

        <section className="mt-14 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="flex h-full flex-col rounded-3xl border border-[#d9d2c3] bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
                {study.subtitle}
              </div>

              <h2 className="mt-5 text-2xl font-semibold">{study.title}</h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Challenge</p>
                  <p className="mt-1">{study.challenge}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Approach</p>
                  <p className="mt-1">{study.approach}</p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Outcome</p>
                  <p className="mt-1">{study.outcome}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#ece7dc] pt-6">
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Example Result
                </p>
                <p className="mt-2 text-2xl font-bold text-green-700">
                  {study.result}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-[#d9d2c3] bg-[#efe9db] p-8 sm:p-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-gray-500">
                Focus
              </p>
              <p className="mt-2 text-xl font-semibold">Facility Efficiency</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-gray-500">
                Focus
              </p>
              <p className="mt-2 text-xl font-semibold">Environmental Control</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-gray-500">
                Focus
              </p>
              <p className="mt-2 text-xl font-semibold">Production Consistency</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-gray-500">
                Focus
              </p>
              <p className="mt-2 text-xl font-semibold">Margin Improvement</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}