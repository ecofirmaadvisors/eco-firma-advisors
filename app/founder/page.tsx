import Image from "next/image";
import Link from "next/link";

export default function FounderPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-[320px_minmax(0,1fr)] md:items-start">
          <div className="md:sticky md:top-24">
            <div className="overflow-hidden rounded-3xl border bg-[#f8f5ee]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/logos/efa-founder-pic.png"
                  alt="Jesse Peters, Founder of Eco Firma Advisors"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-6 rounded-3xl border bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b7c65]">
                Founder Profile
              </p>

              <div className="mt-4 space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">
                    26+ Years Cultivation Experience
                  </p>
                  <p className="mt-1">
                    Built through hands-on cultivation, facility operations, and
                    production leadership.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Founder, Eco Firma Farms
                  </p>
                  <p className="mt-1">
                    Helped build one of Oregon&apos;s recognized premium indoor
                    cultivation brands.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Top-Shelf Indoor Under $189/lb
                  </p>
                  <p className="mt-1">
                    Packaged and ready for sale at the time of the Eco Firma
                    Farms transaction.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Advisory Focus
                  </p>
                  <p className="mt-1">
                    Facility strategy, operational efficiency, environmental
                    systems, and scalable cultivation design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b7c65]">
              Leadership
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              Jesse Peters
            </h1>

            <p className="mt-4 font-medium text-green-700">
              Founder, Eco Firma Advisors
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-700">
              Jesse Peters is the founder of Eco Firma Advisors, a boutique
              cannabis cultivation advisory focused on operational efficiency,
              facility strategy, and scalable production systems for indoor
              operators, MSOs, and leadership teams seeking stronger unit
              economics without sacrificing flower quality.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border bg-[#f8f5ee] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b7c65]">
                  Core Strength
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Aligning facility design, environmental systems, labor
                  workflows, and production cadence into a cultivation model
                  that performs in the real world.
                </p>
              </div>

              <div className="rounded-2xl border bg-[#f8f5ee] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6b7c65]">
                  Operator Mindset
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Built from the perspective of someone who has carried the
                  pressure of payroll, margins, harvest schedules, facility
                  constraints, and market compression.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-6 leading-relaxed text-gray-700">
              <p>
                With more than 26 years of cultivation experience and deep roots
                in Oregon's cannabis industry, Jesse has spent his career
                building, operating, and refining indoor cultivation systems.
                His work has centered on the relationship between environmental
                control, facility design, crop steering, labor efficiency, and
                financial performance.
              </p>

              <p>
                Prior to launching Eco Firma Advisors, Jesse co-founded Eco
                Firma Farms, an indoor cultivation company known for pairing
                premium product quality with disciplined operations and
                sustainability-focused thinking. Public industry coverage
                highlighted Eco Firma Farms for its carbon-neutral positioning,
                energy efficiency initiatives, and role as a recognized operator
                in Oregon's regulated market.
              </p>

              <p>
                At the time of the sale of Eco Firma Farms, the company was
                producing top-shelf indoor cannabis for under $189 per pound,
                packaged and ready for sale. That result reflected a core
                principle Jesse still brings to advisory work today: quality and
                efficiency do not have to compete when the facility, workflow,
                and management systems are designed correctly.
              </p>

              <p>
                Through Eco Firma Advisors, Jesse now helps operators diagnose
                production bottlenecks, improve cost per pound, redesign
                underperforming facilities, and build cultivation environments
                that are easier to manage, scale, and standardize. His work is
                especially relevant for operators navigating margin pressure,
                inconsistent output, staffing inefficiencies, or the complexity
                of a redesign or new construction project.
              </p>

              <p>
                His advisory approach is grounded in practical execution rather
                than theory alone. That means translating cultivation knowledge
                into operational systems: room flow, harvest cadence,
                environmental strategy, equipment selection, SOP structure, KPI
                visibility, and leadership alignment.
              </p>

              <p>
                The result is a consulting model built for owners and operators
                who want a clearer path to premium production, tighter systems,
                and a cultivation business that is structurally stronger.
              </p>
            </div>

            <section className="mt-12 rounded-3xl border bg-[#f6f3ea] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b7c65]">
                Work With Eco Firma Advisors
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                Built by an Operator. Designed for Performance.
              </h2>

              <p className="mt-4 max-w-2xl text-gray-700">
                Eco Firma Advisors works with cultivation operators who need
                sharper systems, better facility performance, and a practical
                strategy for scaling quality profitably.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-[#6b7c65] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}