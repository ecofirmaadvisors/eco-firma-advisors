"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: "workflow",
    title: "Workflow & Labor Efficiency",
    description:
      "Are daily cultivation tasks organized clearly and completed without major bottlenecks, wasted labor, or recurring confusion?",
  },
  {
    id: "plantHealth",
    title: "Plant Health & Consistency",
    description:
      "Are crop quality, plant performance, and harvest outcomes consistent from room to room and cycle to cycle?",
  },
  {
    id: "environment",
    title: "Environmental Control",
    description:
      "Are temperature, humidity, airflow, and room conditions stable and well managed throughout the facility?",
  },
  {
    id: "irrigation",
    title: "Irrigation & Fertigation",
    description:
      "Are watering practices, nutrient delivery, and irrigation timing consistent, efficient, and well controlled?",
  },
  {
    id: "postHarvest",
    title: "Harvest & Post-Harvest",
    description:
      "Are harvest timing, drying, trimming, curing, and handoff procedures repeatable and well executed?",
  },
  {
    id: "compliance",
    title: "Compliance & Operational Discipline",
    description:
      "Does the operation follow documented processes with good accountability, consistency, and compliance awareness?",
  },
  {
    id: "sops",
    title: "SOP Execution",
    description:
      "Are SOPs clearly defined, actually followed by the team, and reinforced in day-to-day execution?",
  },
] as const;

type QuestionId = (typeof questions)[number]["id"];
type Answers = Partial<Record<QuestionId, number>>;

function getResult(score: number, maxScore: number) {
  const percent = maxScore > 0 ? (score / maxScore) * 100 : 0;

  if (percent >= 85) {
    return {
      label: "High Performing",
      summary:
        "Your operation appears structurally strong, with good systems already in place.",
      recommendation:
        "Focus on tightening KPIs, refining consistency, and improving margins through targeted optimization.",
    };
  }

  if (percent >= 65) {
    return {
      label: "Solid but Leaky",
      summary:
        "You likely have a workable foundation, but hidden inefficiencies may be reducing output, consistency, or profitability.",
      recommendation:
        "A focused cultivation review could uncover workflow friction, environmental inconsistencies, or SOP gaps worth addressing.",
    };
  }

  if (percent >= 45) {
    return {
      label: "Needs Attention",
      summary:
        "Several important systems may be underperforming, creating drag across labor, crop quality, or operational control.",
      recommendation:
        "This is where stronger systems, cleaner process execution, and more disciplined facility management can make a meaningful difference.",
    };
  }

  return {
    label: "High Priority Audit",
    summary:
      "Your operation may have foundational issues affecting predictability, efficiency, and team execution.",
    recommendation:
      "A deeper cultivation audit is strongly recommended to identify the biggest breakdowns and prioritize the right fixes.",
  };
}

function ScoreButton({
  value,
  selected,
  onClick,
}: {
  value: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`Score ${value}`}
      className={`h-11 w-11 rounded-full border text-sm font-semibold transition ${
        selected
          ? "border-emerald-700 bg-emerald-700 text-white"
          : "border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50"
      }`}
    >
      {value}
    </button>
  );
}

export default function CultivationAuditPage() {
  const [answers, setAnswers] = useState<Answers>({});

  const answeredCount = Object.keys(answers).length;
  const maxScore = questions.length * 5;

  const totalScore = useMemo(() => {
    return Object.values(answers).reduce((sum, value) => sum + (value ?? 0), 0);
  }, [answers]);

  const averageScore =
    answeredCount > 0 ? (totalScore / answeredCount).toFixed(1) : "0.0";

  const completed = answeredCount === questions.length;
  const result = getResult(totalScore, maxScore);

  function setScore(questionId: QuestionId, value: number) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  }

  function resetAudit() {
    setAnswers({});
  }

  const strategyCallMailto = `mailto:jesse@ecofirmaadvisors.com?subject=${encodeURIComponent(
    "Simple Cultivation Audit Strategy Call"
  )}&body=${encodeURIComponent(
    "Hi Jesse,\n\nI completed the Simple Cultivation Audit and would like to discuss my operation.\n\nThanks,"
  )}`;

  const advisorMailto = `mailto:jesse@ecofirmaadvisors.com?subject=${encodeURIComponent(
    `Simple Cultivation Audit Follow Up - Score ${totalScore}/${maxScore}`
  )}&body=${encodeURIComponent(
    `Hi Jesse,\n\nI completed the Simple Cultivation Audit.\n\nMy score: ${totalScore}/${maxScore}\nCurrent tier: ${result.label}\nAverage score: ${averageScore}/5\n\nI would like to discuss next steps.\n\nThanks,`
  )}`;

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Simple Cultivation Audit
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Take our cultivation audit and see where your operation stands
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            This quick self-assessment is designed for growers and operators who
            want a fast read on operational strength across workflow,
            environmental control, SOP execution, and post-harvest discipline.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={strategyCallMailto}
              className="rounded-full bg-emerald-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Schedule a Strategy Call
            </a>

            <Link
              href="/services"
              className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
            >
              Back to Services
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold">Quick Self-Assessment</h2>
                  <p className="mt-2 text-sm text-zinc-600">
                    Rate each area from 1 to 5. Think of 1 as rough and reactive,
                    and 5 as highly disciplined and dialed-in.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetAudit}
                  className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
                >
                  Reset
                </button>
              </div>

              <div className="mb-6 rounded-2xl bg-zinc-50 p-4">
                <p className="text-sm text-zinc-700">
                  <span className="font-semibold">Scoring guide:</span> 1 = major
                  operational weakness, 3 = inconsistent or mixed, 5 = strong and
                  repeatable.
                </p>
              </div>

              <div className="space-y-6">
                {questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="rounded-2xl border border-zinc-200 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Area {index + 1}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">{question.title}</h3>

                    <p className="mt-3 text-zinc-600">{question.description}</p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <ScoreButton
                          key={value}
                          value={value}
                          selected={answers[question.id] === value}
                          onClick={() => setScore(question.id, value)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold">Your Results</h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm text-zinc-500">Progress</p>
                  <p className="mt-1 text-2xl font-bold">
                    {answeredCount}/{questions.length}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm text-zinc-500">Total Score</p>
                  <p className="mt-1 text-2xl font-bold">
                    {totalScore}/{maxScore}
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm text-zinc-500">Average Score</p>
                  <p className="mt-1 text-2xl font-bold">{averageScore}/5</p>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <p className="text-sm text-zinc-500">Current Tier</p>
                  <p className="mt-1 text-xl font-bold text-emerald-700">
                    {result.label}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-white p-5">
                <h3 className="text-lg font-semibold">What this means</h3>
                <p className="mt-3 text-zinc-600">{result.summary}</p>
                <p className="mt-4 text-zinc-700">
                  <span className="font-semibold">Recommendation:</span>{" "}
                  {result.recommendation}
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-emerald-700 p-5 text-white">
                <h3 className="text-lg font-semibold">
                  Want a deeper and more accurate audit?
                </h3>

                <p className="mt-3 text-sm leading-6 text-emerald-50">
                  Serious operators can move into a fuller facility intake with
                  more detailed scoring across lighting, HVAC, labor, post-harvest,
                  and operating economics.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/cultivation-audit/full"
                    className="inline-block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                  >
                    Start Full Audit
                  </Link>

                  <a
                    href={advisorMailto}
                    className="inline-block rounded-full border border-emerald-200 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-800"
                  >
                    Talk to an Advisor
                  </a>
                </div>
              </div>

              {!completed && (
                <p className="mt-4 text-sm text-zinc-500">
                  Complete all questions for the clearest read on your operation.
                </p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}