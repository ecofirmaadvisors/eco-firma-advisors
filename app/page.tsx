"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Mail,
  CheckCircle2,
  MapPinned,
  Leaf,
  Factory,
  Zap,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

type TabKey = "national" | "new-york" | "new-jersey" | "minnesota";

const tabContent: Record<
  TabKey,
  {
    label: string;
    title: string;
    body: string;
    bullets: string[];
  }
> = {
  national: {
    label: "National",
    title:
      "Cannabis cultivation advisory and facility strategy for operators nationwide",
    body:
      "Eco Firma Advisors helps cultivation operators improve facility performance, environmental coordination, energy efficiency, and operational workflows across cannabis production sites nationwide. From environmental system tuning to broader operational strategy, Eco Firma is built to support healthier facilities and sharper decision-making.",
    bullets: [
      "Cultivation efficiency and environmental performance reviews",
      "Energy strategy, lighting, HVAC, and dehumidification evaluation",
      "Operational planning for single-site operators and multi-state platforms",
    ],
  },
  "new-york": {
    label: "New York",
    title: "New York cannabis cultivation consulting and facility strategy",
    body:
      "New York operators need cultivation environments that are disciplined, scalable, and efficient from the beginning. Eco Firma Advisors works with New York cultivators to improve facility coordination, environmental performance, labor flow, and infrastructure strategy so operations can stabilize and grow with less friction.",
    bullets: [
      "Cultivation facility performance review for New York operators",
      "Environmental systems and room coordination analysis",
      "Operational scaling strategy for newly launched or expanding facilities",
    ],
  },
  "new-jersey": {
    label: "New Jersey",
    title: "New Jersey cultivation facility advisory for cannabis operators",
    body:
      "New Jersey cultivation facilities face pressure to produce consistent quality while controlling cost and operational drift. Eco Firma Advisors helps New Jersey operators identify practical opportunities across workflows, environmental controls, energy use, and facility strategy to build stronger, steadier operations.",
    bullets: [
      "Facility workflow and room performance optimization",
      "Energy, HVAC, and dehumidification evaluation",
      "Production stability planning for New Jersey cannabis operators",
    ],
  },
  minnesota: {
    label: "Minnesota",
    title: "Minnesota cannabis cultivation consulting and facility planning",
    body:
      "Minnesota cultivation businesses entering or expanding in the market benefit from clearer facility planning and stronger systems coordination. Eco Firma Advisors supports Minnesota operators with strategic guidance on environmental performance, cultivation workflows, and operational infrastructure so facilities can scale with confidence.",
    bullets: [
      "Facility planning and infrastructure advisory",
      "Environmental performance and process review",
      "Operational growth strategy for Minnesota cultivation teams",
    ],
  },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-4 py-16 sm:px-6 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
        active
          ? "bg-[#31543A] text-white shadow-sm"
          : "bg-white text-[#31543A] hover:bg-[#EEF5E8]"
      }`}
    >
      {children}
    </button>
  );
}

function ServiceCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#D7E3D2] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF5E8] text-[#31543A]">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-semibold text-[#1F3527]">{title}</h3>
      <p className="text-sm leading-7 text-[#4F6553]">{children}</p>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("national");
  const active = tabContent[activeTab];

  return (
    <main className="bg-[#F4EFE3] text-[#1F3527]">
      <Section className="bg-[linear-gradient(180deg,#EEF5E8_0%,#F4EFE3_55%,#F7F2E8_100%)] pt-12 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-[#D7E3D2] bg-white px-4 py-2 text-sm font-medium text-[#4F6553] shadow-sm">
              Cultivation efficiency • facility strategy • operational clarity
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">
              Practical advisory for healthier cultivation facilities and smarter
              operating decisions.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#4F6553]">
              Eco Firma Advisors helps cannabis operators improve cultivation
              performance, environmental coordination, energy strategy, and
              facility workflows with guidance grounded in real operational
              conditions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cultivation-audit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#31543A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#27442F]"
              >
                Take Our Short Quiz
                <ClipboardList className="h-4 w-4" />
              </Link>

              <a
                href="mailto:info@ecofirmaadvisors.com?subject=Eco%20Firma%20Advisors%20Inquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9D7C5] bg-white px-6 py-3 text-sm font-medium text-[#1F3527] transition hover:bg-[#EEF5E8]"
              >
                Contact Us
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/cultivation-audit/full"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#31543A] underline underline-offset-4"
              >
                Go to the full cultivation index
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href="mailto:jesse@ecofirmaadvisors.com?subject=Consulting%20Inquiry%20for%20Eco%20Firma%20Advisors"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#31543A] underline underline-offset-4"
              >
                Email Jesse directly
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#D7E3D2] bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#1F3527]">MSOs</p>
                <p className="mt-1 text-sm text-[#5A6F5E]">
                  Strategic facility support
                </p>
              </div>
              <div className="rounded-2xl border border-[#D7E3D2] bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#1F3527]">
                  Operators
                </p>
                <p className="mt-1 text-sm text-[#5A6F5E]">
                  Workflow and systems review
                </p>
              </div>
              <div className="rounded-2xl border border-[#D7E3D2] bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-[#1F3527]">
                  Facilities
                </p>
                <p className="mt-1 text-sm text-[#5A6F5E]">
                  Energy and controls optimization
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-[2.5rem] bg-white/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D7E3D2] bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(238,245,232,0.95)_45%,rgba(244,239,227,0.98)_100%)] p-8 shadow-[0_20px_60px_rgba(49,84,58,0.10)] md:p-10 lg:p-12">
              <div className="pointer-events-none absolute inset-x-10 top-6 h-24 rounded-full bg-white/60 blur-2xl" />
              <div className="pointer-events-none absolute inset-x-12 bottom-8 h-16 rounded-full bg-[#DDEAD8]/60 blur-2xl" />

              <div className="relative flex min-h-[360px] items-center justify-center md:min-h-[460px]">
                <div className="rounded-full border border-white/80 bg-white/70 p-5 shadow-[0_18px_40px_rgba(49,84,58,0.10)] backdrop-blur-sm md:p-6">
                  <Image
                    src="/logos/efa-seal.png"
                    alt="Eco Firma Advisors seal"
                    width={900}
                    height={900}
                    className="h-auto w-full max-w-[420px] object-contain md:max-w-[500px]"
                    priority
                  />
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#5C7A60]">
                  Eco Firma Advisors
                </p>
                <p className="mt-2 text-sm leading-7 text-[#5A6F5E]">
                  Advisory rooted in operational discipline, healthier plant
                  environments, and smarter facility decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-8">
        <div className="rounded-3xl border border-[#D8E4D3] bg-[#EAF3E4] px-6 py-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#31543A]" />
              <p className="text-sm leading-7 text-[#3F5745]">
                Facility assessments focused on workflows, environmental
                controls, energy use, and room performance.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#31543A]" />
              <p className="text-sm leading-7 text-[#3F5745]">
                Recommendations shaped for implementation, not shelf décor.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#31543A]" />
              <p className="text-sm leading-7 text-[#3F5745]">
                Support for cultivation teams, ownership groups, and multi-state
                operators nationwide.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#F7F3E9]">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7A60]">
            Core Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F3527] md:text-4xl">
            Where Eco Firma brings value
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#49604D]">
            Advisory support designed for cultivation environments, facility
            systems, and operators tightening the whole machine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon={<Leaf className="h-5 w-5" />}
            title="Cultivation Efficiency"
          >
            Evaluate room performance, environmental consistency, and workflow
            opportunities that can improve plant health, turnover, and facility
            productivity.
          </ServiceCard>

          <ServiceCard
            icon={<Zap className="h-5 w-5" />}
            title="Energy Strategy"
          >
            Analyze lighting, HVAC, and dehumidification systems to identify
            practical efficiency gains and better infrastructure coordination.
          </ServiceCard>

          <ServiceCard
            icon={<Factory className="h-5 w-5" />}
            title="Facility Strategy"
          >
            Support facility planning, layout decisions, retrofits, and
            operational design as cultivation businesses scale or stabilize.
          </ServiceCard>
        </div>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#E8F0E3_0%,#F4EFE3_100%)]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7A60]">
              Service Areas
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F3527] md:text-4xl">
              National reach with state-specific visibility
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#49604D]">
              Eco Firma Advisors works nationally while maintaining focused SEO
              and advisory presence in priority cultivation markets.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <TabButton
                active={activeTab === "national"}
                onClick={() => setActiveTab("national")}
              >
                National
              </TabButton>
              <TabButton
                active={activeTab === "new-york"}
                onClick={() => setActiveTab("new-york")}
              >
                New York
              </TabButton>
              <TabButton
                active={activeTab === "new-jersey"}
                onClick={() => setActiveTab("new-jersey")}
              >
                New Jersey
              </TabButton>
              <TabButton
                active={activeTab === "minnesota"}
                onClick={() => setActiveTab("minnesota")}
              >
                Minnesota
              </TabButton>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#D6E1D1] bg-white p-8 shadow-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EEF5E8] px-3 py-2 text-sm font-medium text-[#31543A]">
              <MapPinned className="h-4 w-4" />
              {active.label}
            </div>

            <h3 className="text-2xl font-semibold tracking-tight text-[#1F3527]">
              {active.title}
            </h3>

            <p className="mt-4 text-base leading-8 text-[#4F6553]">
              {active.body}
            </p>

            <div className="mt-6 space-y-3">
              {active.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#4B7A52]" />
                  <p className="text-sm leading-7 text-[#4F6553]">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#EAE3D3]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5C7A60]">
              Why Eco Firma
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1F3527] md:text-4xl">
              A clearer read on what your cultivation facility actually needs
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#49604D]">
              Lighting, HVAC, dehumidification, workflows, labor patterns, room
              turnover, and utility loads all pull on each other. Eco Firma
              helps untangle those systems and turn them into a sharper
              operating plan.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-[#D7E3D2] bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2 text-[#1F3527]">
                <BarChart3 className="h-5 w-5 text-[#4C7A52]" />
                <span className="font-semibold">Operational visibility</span>
              </div>
              <p className="text-sm leading-7 text-[#5A6F5E]">
                Understand where energy loss, process friction, and
                environmental inconsistency are costing you.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D7E3D2] bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2 text-[#1F3527]">
                <ShieldCheck className="h-5 w-5 text-[#4C7A52]" />
                <span className="font-semibold">Grounded recommendations</span>
              </div>
              <p className="text-sm leading-7 text-[#5A6F5E]">
                Advice built around implementation reality, budget awareness,
                and cultivation priorities.
              </p>
            </div>

            <div className="rounded-3xl border border-[#D7E3D2] bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center gap-2 text-[#1F3527]">
                <Leaf className="h-5 w-5 text-[#4C7A52]" />
                <span className="font-semibold">Healthy growth focus</span>
              </div>
              <p className="text-sm leading-7 text-[#5A6F5E]">
                Strategy centered on plant health, process clarity, and stronger
                long-term facility resilience.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] border border-[#D7E3D2] bg-[linear-gradient(135deg,#31543A_0%,#4B7A52_100%)] p-8 text-white shadow-xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Next Step
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Start with the cultivation audit
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/85">
                Give serious prospects an easy first step while keeping the full
                audit path available for deeper, higher-intent engagement.
              </p>
            </div>

            <Link
              href="/cultivation-audit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-[#1F3527] transition hover:bg-[#F2F6EF]"
            >
              Take the Short Quiz
              <ClipboardList className="h-4 w-4" />
            </Link>

            <a
              href="mailto:info@ecofirmaadvisors.com?subject=Eco%20Firma%20Advisors%20Inquiry"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Contact Us
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6">
            <Link
              href="/cultivation-audit/full"
              className="inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4"
            >
              Or go straight to the full in-depth audit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}