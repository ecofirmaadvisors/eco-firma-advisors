import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Eco Firma Advisors",
  description:
    "Cultivation diagnostics, facility design advisory, and operational optimization for cannabis operators.",
};

export default function ServicesPage() {
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Services</h1>

        <p className="mt-6 text-gray-600">
          Boutique advisory engagements built to reduce cost per pound,
          improve consistency, and scale production systems.
        </p>

        <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-[#6b7c65]">
          Trusted by operators building the next generation of efficient
          cultivation facilities.
        </p>

        <div className="mt-12 space-y-10">
          <section className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold">Cultivation Diagnostic</h2>

            <p className="mt-3 text-gray-600">
              Audit of facility systems, environmental performance, labor
              workflows, SOP structure, and production metrics.
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Full cultivation workflow evaluation</li>
              <li>HVAC, lighting, and environmental control review</li>
              <li>Labor efficiency and workflow bottleneck analysis</li>
              <li>Production metrics benchmarking</li>
              <li>Clear operational improvement report</li>
            </ul>

            <p className="mt-6 font-semibold">Typical investment: $8K–$20K</p>
          </section>

          <section className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold">
              Efficiency Blueprint{" "}
              <span className="font-normal text-gray-500">
                (Facility redesign, or new construction.)
              </span>
            </h2>

            <p className="mt-3 text-gray-600">
              Strategic roadmap for facility optimization, SOP redesign, KPI
              dashboards, and production cadence.
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Facility layout optimization and production flow design</li>
              <li>Environmental strategy and equipment specification</li>
              <li>Production scheduling and harvest cadence modeling</li>
              <li>SOP architecture and management structure</li>
              <li>KPI dashboard design for leadership teams</li>
            </ul>

            <p className="mt-6 font-semibold">Typical investment: $20K–$50K</p>
          </section>

          <section className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold">Implementation Advisory</h2>

            <p className="mt-3 text-gray-600">
              Hands-on advisory guiding execution with leadership teams, vendors,
              and cultivation management.
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-6 text-gray-600">
              <li>Project oversight during facility build or redesign</li>
              <li>Vendor coordination and equipment deployment</li>
              <li>Leadership team operational coaching</li>
              <li>Production ramp-up and system calibration</li>
              <li>Ongoing performance monitoring and refinement</li>
            </ul>

            <p className="mt-6 font-semibold">
              Typical engagement: $50K–$100K+
            </p>
          </section>
        </div>

        <section className="mt-16 rounded-2xl border bg-[#f6f3ea] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6b7c65]">
            Next Step
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            Discuss Your Facility
          </h2>

          <p className="mt-4 max-w-2xl text-gray-600">
            Whether you are troubleshooting performance, planning a redesign, or
            building from the ground up, Eco Firma Advisors can help define the
            right path forward.
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
    </main>
  );
}