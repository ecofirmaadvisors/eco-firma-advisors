"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { scoreAudit } from "@/lib/scoreAudit";
import type { AuditFormData, AuditScoreResult } from "@/types/audit";

const initialData: AuditFormData = {
  motherArea: undefined,
  cloneArea: undefined,
  vegArea: undefined,
  flowerArea: undefined,
  dryingArea: undefined,
  curingArea: undefined,
  flowerRooms: undefined,

  averageMonthlyPowerBill: undefined,
  electricityRate: undefined,

  lighting: {
    HID: {
      enabled: false,
      fixtureCount: undefined,
      wattage: undefined,
      voltage: undefined,
    },
    LED: {
      enabled: false,
      fixtureCount: undefined,
      wattage: undefined,
      voltage: undefined,
    },
    LEC: {
      enabled: false,
      fixtureCount: undefined,
      wattage: undefined,
      voltage: undefined,
    },
    Fluorescent: {
      enabled: false,
      fourBulbCount: undefined,
      eightBulbCount: undefined,
      wattage: undefined,
      voltage: undefined,
    },
    Other: {
      enabled: false,
      fixtureCount: undefined,
      wattage: undefined,
      voltage: undefined,
      description: "",
    },
  },

  environmentalControlPlatform: "",
  automationLevel: "",
  vpdManagement: "",
  hvacType: "",
  hvacCategory: "",

  nutrientStrategy: "",
  nutrientCostPerCycle: undefined,
  lightingIntensityAutomated: false,
  fertigationKpiTracking: false,
  integratedEnvironmentalControls: false,
  irrigationMethod: "",

  cultivationHeadcount: undefined,
  weeklyLaborHours: undefined,
  trimmingMethod: "",

  dedicatedDryRooms: false,
  environmentalControlDuringDry: false,
  structuredCureSop: false,
  negativePressureDryingCuring: false,

  writtenSops: false,
  kpiTracking: false,
  costPerPoundTracked: false,
  costPerPound: undefined,

  transactionReadiness: "",
};

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
          {description}
        </p>
      ) : null}
      <div className="mt-6 grid gap-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-800">
        {label}
      </span>
      {children}
      {hint ? <p className="mt-1 text-xs text-zinc-500">{hint}</p> : null}
    </label>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex items-start gap-3 rounded-2xl border border-zinc-200 p-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-zinc-300"
      />
      <span className="text-sm text-zinc-700">{label}</span>
    </label>
  );
}

function inputClassName() {
  return "w-full rounded-2xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-emerald-700";
}

function selectClassName() {
  return "w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-700";
}

function ScoreMeter({ score }: { score: number }) {
  const safeScore = Math.max(0, Math.min(score, 100));

  return (
    <div className="rounded-2xl bg-zinc-50 p-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">Operational Score</p>
          <p className="mt-1 text-4xl font-bold text-emerald-700">
            {safeScore}/100
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-zinc-500">Facility Position</p>
          <p className="mt-1 text-sm font-semibold text-zinc-800">
            {safeScore >= 85
              ? "Strong"
              : safeScore >= 70
              ? "Stable with upside"
              : safeScore > 50
              ? "Needs optimization"
              : "High intervention need"}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="relative h-4 overflow-visible rounded-full bg-zinc-200">
          <div className="absolute inset-y-0 left-0 w-1/4 rounded-l-full bg-zinc-300" />
          <div className="absolute inset-y-0 left-1/4 w-1/4 bg-zinc-400/70" />
          <div className="absolute inset-y-0 left-2/4 w-1/4 bg-emerald-300/70" />
          <div className="absolute inset-y-0 left-3/4 w-1/4 rounded-r-full bg-emerald-600/80" />

          <div
            className="absolute top-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-emerald-700 shadow"
            style={{ left: `${safeScore}%` }}
          />
        </div>

        <div className="mt-3 flex justify-between text-xs text-zinc-500">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>

        <div className="mt-2 flex justify-between text-[11px] uppercase tracking-wide text-zinc-500">
          <span>Critical</span>
          <span>Moderate</span>
          <span>Optimized</span>
        </div>
      </div>
    </div>
  );
}

function getScoreBand(score: number) {
  if (score >= 85) {
    return {
      label: "High Performing Operation",
      summary:
        "Your facility appears relatively well-structured, with stronger economics and operating discipline than most.",
    };
  }

  if (score >= 70) {
    return {
      label: "Moderate Cost Pressure Likely",
      summary:
        "The operation has real strengths, but there are likely meaningful inefficiencies or design drag affecting performance.",
    };
  }

  if (score > 50) {
    return {
      label: "Operational Improvement Opportunity",
      summary:
        "The facility likely has several structural or execution gaps reducing efficiency, predictability, or margin.",
    };
  }

  return {
    label: "High Priority Intervention Zone",
    summary:
      "This score suggests the operation may be carrying major inefficiencies that deserve immediate strategic attention.",
  };
}

function getFacilityReport(data: AuditFormData, result: AuditScoreResult) {
  const score = result.score;

  const energyEfficiency =
    data.lighting.LED.enabled && !data.lighting.HID.enabled
      ? "Favorable"
      : data.lighting.HID.enabled
      ? "Legacy lighting drag detected"
      : "Mixed / unclear";

  const laborEfficiency =
    typeof data.cultivationHeadcount === "number" &&
    typeof data.flowerArea === "number" &&
    data.flowerArea > 0
      ? data.cultivationHeadcount / (data.flowerArea / 1000) > 1
        ? "Labor-heavy structure"
        : "Reasonable labor density"
      : "Insufficient data";

  const environmentalControl =
    data.hvacCategory === "Boiler chiller"
      ? "Advanced environmental infrastructure"
      : data.hvacCategory === "Large standalone commercial units"
      ? "Commercial-grade control with limitations"
      : data.hvacCategory === "Small individual units"
      ? "Fragmented control architecture"
      : "Not enough data";

  const postHarvestDiscipline =
    data.dedicatedDryRooms &&
    data.environmentalControlDuringDry &&
    data.structuredCureSop
      ? "Strong post-harvest discipline"
      : data.dedicatedDryRooms || data.environmentalControlDuringDry
      ? "Partial post-harvest structure"
      : "Post-harvest systems likely underdeveloped";

  const operatingDiscipline =
    data.writtenSops && data.kpiTracking && data.costPerPoundTracked
      ? "Strong management discipline"
      : data.writtenSops || data.kpiTracking || data.costPerPoundTracked
      ? "Developing management discipline"
      : "Low systems visibility";

  const strategicReadiness =
    data.transactionReadiness === "Yes, currently in discussion with a buyer"
      ? "Immediate strategic readiness pressure"
      : data.transactionReadiness === "Possibly in the next 12 months"
      ? "Near-term strategic preparation advised"
      : "Internal optimization should come first";

  const scoreBand = getScoreBand(score);

  return {
    scoreBand,
    energyEfficiency,
    laborEfficiency,
    environmentalControl,
    postHarvestDiscipline,
    operatingDiscipline,
    strategicReadiness,
  };
}

function getFormProgress(data: AuditFormData) {
  let completed = 0;
  const total = 8;

  const hasFacilityLayout = [
    data.motherArea,
    data.cloneArea,
    data.vegArea,
    data.flowerArea,
    data.dryingArea,
    data.curingArea,
    data.flowerRooms,
  ].some((value) => typeof value === "number");

  const hasPowerEconomics =
    typeof data.averageMonthlyPowerBill === "number" ||
    typeof data.electricityRate === "number";

  const hasLighting =
    data.lighting.HID.enabled ||
    data.lighting.LED.enabled ||
    data.lighting.LEC.enabled ||
    data.lighting.Fluorescent.enabled ||
    data.lighting.Other.enabled;

  const hasEnvironmentalControls =
    data.environmentalControlPlatform.trim() !== "" ||
    data.automationLevel !== "" ||
    data.vpdManagement !== "" ||
    data.hvacType.trim() !== "" ||
    data.hvacCategory !== "";

  const hasIrrigationNutrition =
    data.nutrientStrategy !== "" ||
    typeof data.nutrientCostPerCycle === "number" ||
    data.irrigationMethod !== "" ||
    data.lightingIntensityAutomated ||
    data.fertigationKpiTracking ||
    data.integratedEnvironmentalControls;

  const hasLaborThroughput =
    typeof data.cultivationHeadcount === "number" ||
    typeof data.weeklyLaborHours === "number" ||
    data.trimmingMethod !== "";

  const hasPostHarvest =
    data.dedicatedDryRooms ||
    data.environmentalControlDuringDry ||
    data.structuredCureSop ||
    data.negativePressureDryingCuring;

  const hasManagementDiscipline =
    data.writtenSops ||
    data.kpiTracking ||
    data.costPerPoundTracked ||
    typeof data.costPerPound === "number" ||
    data.transactionReadiness !== "";

  if (hasFacilityLayout) completed++;
  if (hasPowerEconomics) completed++;
  if (hasLighting) completed++;
  if (hasEnvironmentalControls) completed++;
  if (hasIrrigationNutrition) completed++;
  if (hasLaborThroughput) completed++;
  if (hasPostHarvest) completed++;
  if (hasManagementDiscipline) completed++;

  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}

function getEnergySavingsPotential(data: AuditFormData, result: AuditScoreResult) {
  const monthlyPowerBill =
    typeof data.averageMonthlyPowerBill === "number"
      ? data.averageMonthlyPowerBill
      : 0;

  const electricityRate =
    typeof data.electricityRate === "number" && data.electricityRate > 0
      ? data.electricityRate
      : 0;

  const flowerArea =
    typeof data.flowerArea === "number" && data.flowerArea > 0
      ? data.flowerArea
      : 0;

  const annualEnergySpend = monthlyPowerBill > 0 ? monthlyPowerBill * 12 : 0;

  let savingsFactorLow = 0.04;
  let savingsFactorHigh = 0.1;

  if (result.score >= 85) {
    savingsFactorLow = 0.03;
    savingsFactorHigh = 0.08;
  } else if (result.score >= 70) {
    savingsFactorLow = 0.07;
    savingsFactorHigh = 0.14;
  } else if (result.score > 50) {
    savingsFactorLow = 0.12;
    savingsFactorHigh = 0.22;
  } else {
    savingsFactorLow = 0.18;
    savingsFactorHigh = 0.3;
  }

  if (data.lighting.HID.enabled) {
    savingsFactorLow += 0.03;
    savingsFactorHigh += 0.05;
  }

  if (data.lighting.LED.enabled && !data.lighting.HID.enabled) {
    savingsFactorLow -= 0.01;
    savingsFactorHigh -= 0.02;
  }

  if (data.hvacCategory === "Small individual units") {
    savingsFactorLow += 0.02;
    savingsFactorHigh += 0.04;
  }

  if (data.hvacCategory === "Boiler chiller") {
    savingsFactorLow -= 0.01;
    savingsFactorHigh -= 0.02;
  }

  if (data.automationLevel === "None") {
    savingsFactorLow += 0.02;
    savingsFactorHigh += 0.04;
  }

  if (data.automationLevel === "Fully Integrated") {
    savingsFactorLow -= 0.01;
    savingsFactorHigh -= 0.02;
  }

  if (data.vpdManagement === "No") {
    savingsFactorLow += 0.015;
    savingsFactorHigh += 0.03;
  }

  if (data.vpdManagement === "Yes") {
    savingsFactorLow -= 0.005;
    savingsFactorHigh -= 0.01;
  }

  if (data.integratedEnvironmentalControls) {
    savingsFactorLow -= 0.005;
    savingsFactorHigh -= 0.01;
  }

  if (data.irrigationMethod === "Hand watering") {
    savingsFactorHigh += 0.01;
  }

  savingsFactorLow = Math.max(0.02, Math.min(savingsFactorLow, 0.3));
  savingsFactorHigh = Math.max(
    savingsFactorLow + 0.02,
    Math.min(savingsFactorHigh, 0.4)
  );

  let low = 0;
  let high = 0;
  let basis = "";
  let estimatedKwhLow: number | null = null;
  let estimatedKwhHigh: number | null = null;

  if (annualEnergySpend > 0) {
    low = annualEnergySpend * savingsFactorLow;
    high = annualEnergySpend * savingsFactorHigh;
    basis = "Modeled from reported annual electricity spend";

    if (electricityRate > 0) {
      estimatedKwhLow = low / electricityRate;
      estimatedKwhHigh = high / electricityRate;
    }
  } else if (flowerArea > 0) {
    let dollarPerSqFtLow = 1.25;
    let dollarPerSqFtHigh = 3.5;

    if (data.lighting.HID.enabled) {
      dollarPerSqFtLow += 0.5;
      dollarPerSqFtHigh += 1.0;
    }

    if (data.hvacCategory === "Small individual units") {
      dollarPerSqFtLow += 0.4;
      dollarPerSqFtHigh += 0.8;
    }

    if (data.automationLevel === "Fully Integrated") {
      dollarPerSqFtLow -= 0.2;
      dollarPerSqFtHigh -= 0.3;
    }

    low = flowerArea * dollarPerSqFtLow;
    high = flowerArea * dollarPerSqFtHigh;
    basis = "Estimated from flowering canopy and system profile";
  } else {
    return null;
  }

  return {
    low: Math.round(low),
    high: Math.round(high),
    percentLow: Math.round(savingsFactorLow * 100),
    percentHigh: Math.round(savingsFactorHigh * 100),
    estimatedKwhLow:
      estimatedKwhLow !== null ? Math.round(estimatedKwhLow) : null,
    estimatedKwhHigh:
      estimatedKwhHigh !== null ? Math.round(estimatedKwhHigh) : null,
    basis,
  };
}

function buildMailtoLink(data: AuditFormData, result: AuditScoreResult) {
  const subject = encodeURIComponent("Full Cultivation Audit Submission");

  const body = encodeURIComponent(`
Eco Firma Advisors,

I completed the Full Cultivation Audit and would like to discuss the results.

Audit Score: ${result.score}/100
Estimated Cost Tier: ${result.estimatedCostTier}
Recommended Advisory Paths: ${result.recommendations.join(", ")}

Key Inputs:
Flower Area: ${data.flowerArea ?? "N/A"} sq ft
Veg Area: ${data.vegArea ?? "N/A"} sq ft
Drying Area: ${data.dryingArea ?? "N/A"} sq ft
Flower Rooms: ${data.flowerRooms ?? "N/A"}

Lighting:
HID Enabled: ${data.lighting.HID.enabled ? "Yes" : "No"}
LED Enabled: ${data.lighting.LED.enabled ? "Yes" : "No"}
LEC Enabled: ${data.lighting.LEC.enabled ? "Yes" : "No"}
Fluorescent Enabled: ${data.lighting.Fluorescent.enabled ? "Yes" : "No"}
Other Lighting Enabled: ${data.lighting.Other.enabled ? "Yes" : "No"}

Environmental:
Control Platform: ${data.environmentalControlPlatform || "N/A"}
Automation Level: ${data.automationLevel || "N/A"}
VPD Management: ${data.vpdManagement || "N/A"}
HVAC Type: ${data.hvacType || "N/A"}
HVAC Category: ${data.hvacCategory || "N/A"}

Operations:
Cultivation Headcount: ${data.cultivationHeadcount ?? "N/A"}
Weekly Labor Hours: ${data.weeklyLaborHours ?? "N/A"}
Trimming Method: ${data.trimmingMethod || "N/A"}
Written SOPs: ${data.writtenSops ? "Yes" : "No"}
KPI Tracking: ${data.kpiTracking ? "Yes" : "No"}
Cost Per Pound Tracked: ${data.costPerPoundTracked ? "Yes" : "No"}
Transaction Readiness: ${data.transactionReadiness || "N/A"}

Please contact me to review the results and next steps.
  `.trim());

  return `mailto:your@email.com?subject=${subject}&body=${body}`;
}

export default function FullAuditPage() {
  const [formData, setFormData] = useState<AuditFormData>(initialData);
  const [result, setResult] = useState<AuditScoreResult | null>(null);

  function updateNumber<K extends keyof AuditFormData>(key: K, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value === "" ? undefined : Number(value),
    }));
  }

  function updateString<K extends keyof AuditFormData>(key: K, value: string) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function updateBoolean<K extends keyof AuditFormData>(key: K, value: boolean) {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function updateLightingBoolean(
    type: keyof AuditFormData["lighting"],
    key: "enabled",
    value: boolean
  ) {
    setFormData((prev) => ({
      ...prev,
      lighting: {
        ...prev.lighting,
        [type]: {
          ...prev.lighting[type],
          [key]: value,
        },
      },
    }));
  }

  function updateLightingNumber(
    type: keyof AuditFormData["lighting"],
    key: string,
    value: string
  ) {
    setFormData((prev) => ({
      ...prev,
      lighting: {
        ...prev.lighting,
        [type]: {
          ...prev.lighting[type],
          [key]: value === "" ? undefined : Number(value),
        },
      },
    }));
  }

  function updateLightingString(
    type: keyof AuditFormData["lighting"],
    key: string,
    value: string
  ) {
    setFormData((prev) => ({
      ...prev,
      lighting: {
        ...prev.lighting,
        [type]: {
          ...prev.lighting[type],
          [key]: value,
        },
      },
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const scored = scoreAudit(formData);
    setResult(scored);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleReset() {
    setFormData(initialData);
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const report = useMemo(() => {
    if (!result) return null;
    return getFacilityReport(formData, result);
  }, [formData, result]);

  const progress = useMemo(() => getFormProgress(formData), [formData]);

  const energySavingsPotential = useMemo(() => {
    if (!result) return null;
    return getEnergySavingsPotential(formData, result);
  }, [formData, result]);

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="border-b border-zinc-200 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Full Cultivation Audit
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Detailed facility intake for serious cultivation operators
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            This deeper audit uses facility inputs across layout, lighting,
            HVAC, labor, post-harvest systems, and operating discipline to
            generate a more serious score and advisory recommendation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cultivation-audit"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-zinc-400"
            >
              Back to Simple Audit
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.25fr_0.75fr]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Section
            title="Facility Layout"
            description="Tell us how the facility is allocated across major production stages."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Mother area (sq ft)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.motherArea ?? ""}
                  onChange={(e) => updateNumber("motherArea", e.target.value)}
                />
              </Field>

              <Field label="Clone area (sq ft)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.cloneArea ?? ""}
                  onChange={(e) => updateNumber("cloneArea", e.target.value)}
                />
              </Field>

              <Field label="Veg area (sq ft)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.vegArea ?? ""}
                  onChange={(e) => updateNumber("vegArea", e.target.value)}
                />
              </Field>

              <Field label="Flower area (sq ft)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.flowerArea ?? ""}
                  onChange={(e) => updateNumber("flowerArea", e.target.value)}
                />
              </Field>

              <Field label="Drying area (sq ft)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.dryingArea ?? ""}
                  onChange={(e) => updateNumber("dryingArea", e.target.value)}
                />
              </Field>

              <Field label="Curing area (sq ft)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.curingArea ?? ""}
                  onChange={(e) => updateNumber("curingArea", e.target.value)}
                />
              </Field>

              <Field label="Number of flower rooms">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.flowerRooms ?? ""}
                  onChange={(e) => updateNumber("flowerRooms", e.target.value)}
                />
              </Field>
            </div>
          </Section>

          <Section
            title="Power & Economics"
            description="These inputs help estimate operational efficiency and cost pressure."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Average monthly power bill ($)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.averageMonthlyPowerBill ?? ""}
                  onChange={(e) =>
                    updateNumber("averageMonthlyPowerBill", e.target.value)
                  }
                />
              </Field>

              <Field label="Electricity rate ($/kWh)">
                <input
                  type="number"
                  step="0.0001"
                  className={inputClassName()}
                  value={formData.electricityRate ?? ""}
                  onChange={(e) =>
                    updateNumber("electricityRate", e.target.value)
                  }
                />
              </Field>
            </div>
          </Section>

          <Section
            title="Lighting Systems"
            description="Select each lighting type in use and add whatever details you know."
          >
            <div className="space-y-6">
              {(["HID", "LED", "LEC", "Fluorescent", "Other"] as const).map(
                (type) => (
                  <div
                    key={type}
                    className="rounded-2xl border border-zinc-200 p-5"
                  >
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold">{type}</h3>

                      <label className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                        <input
                          type="checkbox"
                          checked={formData.lighting[type].enabled}
                          onChange={(e) =>
                            updateLightingBoolean(type, "enabled", e.target.checked)
                          }
                        />
                        Enabled
                      </label>
                    </div>

                    {type === "Fluorescent" ? (
                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="4-bulb fixture count">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={formData.lighting.Fluorescent.fourBulbCount ?? ""}
                            onChange={(e) =>
                              updateLightingNumber(
                                "Fluorescent",
                                "fourBulbCount",
                                e.target.value
                              )
                            }
                          />
                        </Field>

                        <Field label="8-bulb fixture count">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={
                              formData.lighting.Fluorescent.eightBulbCount ?? ""
                            }
                            onChange={(e) =>
                              updateLightingNumber(
                                "Fluorescent",
                                "eightBulbCount",
                                e.target.value
                              )
                            }
                          />
                        </Field>

                        <Field label="Wattage">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={formData.lighting.Fluorescent.wattage ?? ""}
                            onChange={(e) =>
                              updateLightingNumber(
                                "Fluorescent",
                                "wattage",
                                e.target.value
                              )
                            }
                          />
                        </Field>

                        <Field label="Voltage">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={formData.lighting.Fluorescent.voltage ?? ""}
                            onChange={(e) =>
                              updateLightingNumber(
                                "Fluorescent",
                                "voltage",
                                e.target.value
                              )
                            }
                          />
                        </Field>
                      </div>
                    ) : (
                      <div className="grid gap-5 md:grid-cols-2">
                        <Field label="Fixture count">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={
                              (formData.lighting[type] as any).fixtureCount ?? ""
                            }
                            onChange={(e) =>
                              updateLightingNumber(type, "fixtureCount", e.target.value)
                            }
                          />
                        </Field>

                        <Field label="Wattage">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={(formData.lighting[type] as any).wattage ?? ""}
                            onChange={(e) =>
                              updateLightingNumber(type, "wattage", e.target.value)
                            }
                          />
                        </Field>

                        <Field label="Voltage">
                          <input
                            type="number"
                            className={inputClassName()}
                            value={(formData.lighting[type] as any).voltage ?? ""}
                            onChange={(e) =>
                              updateLightingNumber(type, "voltage", e.target.value)
                            }
                          />
                        </Field>

                        {type === "Other" ? (
                          <Field label="Description">
                            <input
                              type="text"
                              className={inputClassName()}
                              value={formData.lighting.Other.description ?? ""}
                              onChange={(e) =>
                                updateLightingString(
                                  "Other",
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </Field>
                        ) : null}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </Section>

          <Section
            title="Environmental Controls"
            description="These fields help evaluate climate sophistication and integration."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Environmental control platform">
                <input
                  type="text"
                  className={inputClassName()}
                  value={formData.environmentalControlPlatform}
                  onChange={(e) =>
                    updateString("environmentalControlPlatform", e.target.value)
                  }
                  placeholder="Example: TrolMaster, Rythm, manual, custom"
                />
              </Field>

              <Field label="Automation level">
                <select
                  className={selectClassName()}
                  value={formData.automationLevel}
                  onChange={(e) => updateString("automationLevel", e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="None">None</option>
                  <option value="Partial">Partial</option>
                  <option value="Fully Integrated">Fully Integrated</option>
                </select>
              </Field>

              <Field label="VPD management">
                <select
                  className={selectClassName()}
                  value={formData.vpdManagement}
                  onChange={(e) => updateString("vpdManagement", e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="No">No</option>
                  <option value="Inconsistently">Inconsistently</option>
                  <option value="Yes">Yes</option>
                </select>
              </Field>

              <Field label="HVAC type">
                <input
                  type="text"
                  className={inputClassName()}
                  value={formData.hvacType}
                  onChange={(e) => updateString("hvacType", e.target.value)}
                  placeholder="Example: mini-splits, RTUs, chiller, mixed"
                />
              </Field>

              <Field label="HVAC category">
                <select
                  className={selectClassName()}
                  value={formData.hvacCategory}
                  onChange={(e) => updateString("hvacCategory", e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="Small individual units">
                    Small individual units
                  </option>
                  <option value="Large standalone commercial units">
                    Large standalone commercial units
                  </option>
                  <option value="Boiler chiller">Boiler chiller</option>
                </select>
              </Field>
            </div>
          </Section>

          <Section
            title="Irrigation & Nutrition"
            description="This section maps nutrient strategy, tracking, and system coordination."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Nutrient strategy">
                <select
                  className={selectClassName()}
                  value={formData.nutrientStrategy}
                  onChange={(e) => updateString("nutrientStrategy", e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="Salt">Salt</option>
                  <option value="Organic">Organic</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </Field>

              <Field label="Nutrient cost per cycle ($)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.nutrientCostPerCycle ?? ""}
                  onChange={(e) =>
                    updateNumber("nutrientCostPerCycle", e.target.value)
                  }
                />
              </Field>

              <Field label="Irrigation method">
                <select
                  className={selectClassName()}
                  value={formData.irrigationMethod}
                  onChange={(e) => updateString("irrigationMethod", e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="Hand watering">Hand watering</option>
                  <option value="Drip irrigation">Drip irrigation</option>
                  <option value="Automated fertigation">Automated fertigation</option>
                  <option value="Other">Other</option>
                </select>
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Checkbox
                checked={formData.lightingIntensityAutomated}
                onChange={(checked) =>
                  updateBoolean("lightingIntensityAutomated", checked)
                }
                label="Lighting intensity is automated"
              />

              <Checkbox
                checked={formData.fertigationKpiTracking}
                onChange={(checked) =>
                  updateBoolean("fertigationKpiTracking", checked)
                }
                label="Fertigation KPIs are tracked"
              />

              <Checkbox
                checked={formData.integratedEnvironmentalControls}
                onChange={(checked) =>
                  updateBoolean("integratedEnvironmentalControls", checked)
                }
                label="Environmental controls are integrated"
              />
            </div>
          </Section>

          <Section
            title="Labor & Throughput"
            description="This helps estimate labor structure and processing efficiency."
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Cultivation headcount">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.cultivationHeadcount ?? ""}
                  onChange={(e) =>
                    updateNumber("cultivationHeadcount", e.target.value)
                  }
                />
              </Field>

              <Field label="Weekly labor hours">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.weeklyLaborHours ?? ""}
                  onChange={(e) =>
                    updateNumber("weeklyLaborHours", e.target.value)
                  }
                />
              </Field>

              <Field label="Trimming method">
                <select
                  className={selectClassName()}
                  value={formData.trimmingMethod}
                  onChange={(e) => updateString("trimmingMethod", e.target.value)}
                >
                  <option value="">Select one</option>
                  <option value="Hand trim">Hand trim</option>
                  <option value="Machine trim">Machine trim</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Outsourced">Outsourced</option>
                </select>
              </Field>
            </div>
          </Section>

          <Section
            title="Drying, Curing & SOP Discipline"
            description="These details affect post-harvest quality control and operational maturity."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Checkbox
                checked={formData.dedicatedDryRooms}
                onChange={(checked) => updateBoolean("dedicatedDryRooms", checked)}
                label="Dedicated dry rooms are in use"
              />

              <Checkbox
                checked={formData.environmentalControlDuringDry}
                onChange={(checked) =>
                  updateBoolean("environmentalControlDuringDry", checked)
                }
                label="Environmental control is maintained during dry"
              />

              <Checkbox
                checked={formData.structuredCureSop}
                onChange={(checked) => updateBoolean("structuredCureSop", checked)}
                label="Structured cure SOP is in place"
              />

              <Checkbox
                checked={formData.negativePressureDryingCuring}
                onChange={(checked) =>
                  updateBoolean("negativePressureDryingCuring", checked)
                }
                label="Negative pressure is used for drying and curing"
              />

              <Checkbox
                checked={formData.writtenSops}
                onChange={(checked) => updateBoolean("writtenSops", checked)}
                label="Written SOPs exist"
              />

              <Checkbox
                checked={formData.kpiTracking}
                onChange={(checked) => updateBoolean("kpiTracking", checked)}
                label="KPIs are actively tracked"
              />

              <Checkbox
                checked={formData.costPerPoundTracked}
                onChange={(checked) => updateBoolean("costPerPoundTracked", checked)}
                label="Cost per pound is tracked"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Cost per pound ($)">
                <input
                  type="number"
                  className={inputClassName()}
                  value={formData.costPerPound ?? ""}
                  onChange={(e) => updateNumber("costPerPound", e.target.value)}
                />
              </Field>

              <Field label="Transaction readiness">
                <select
                  className={selectClassName()}
                  value={formData.transactionReadiness}
                  onChange={(e) =>
                    updateString("transactionReadiness", e.target.value)
                  }
                >
                  <option value="">Select one</option>
                  <option value="No">No</option>
                  <option value="Possibly in the next 12 months">
                    Possibly in the next 12 months
                  </option>
                  <option value="Yes, currently in discussion with a buyer">
                    Yes, currently in discussion with a buyer
                  </option>
                </select>
              </Field>
            </div>
          </Section>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Calculate Full Audit Score
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-white"
            >
              Reset Form
            </button>
          </div>
        </form>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Facility Score Report</h2>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">Audit Progress</p>
                  <p className="mt-1 text-lg font-semibold text-zinc-900">
                    {progress.completed} of {progress.total} sections completed
                  </p>
                </div>
                <p className="text-sm font-medium text-emerald-700">
                  {progress.percent}%
                </p>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-200">
                <div
                  className="h-full rounded-full bg-emerald-700 transition-all duration-500"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>

            {!result || !report ? (
              <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
                <p className="text-sm leading-6 text-zinc-600">
                  Complete the intake and calculate your score. This panel will
                  generate a live facility report with performance signals,
                  estimated cost pressure, energy savings potential, and
                  recommended advisory paths.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-6 space-y-4">
                  <ScoreMeter score={result.score} />

                  {energySavingsPotential ? (
                    <div className="rounded-2xl bg-zinc-50 p-5">
                      <p className="text-sm text-zinc-500">
                        Energy Savings Potential
                      </p>

                      <p className="mt-1 text-xl font-semibold text-emerald-700">
                        ${energySavingsPotential.low.toLocaleString()} to $
                        {energySavingsPotential.high.toLocaleString()} / year
                      </p>

                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-zinc-200">
                        <div
                          className="h-full rounded-full bg-emerald-700"
                          style={{
                            width: `${Math.min(
                              100,
                              energySavingsPotential.percentHigh * 2.5
                            )}%`,
                          }}
                        />
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                          {energySavingsPotential.percentLow}% to{" "}
                          {energySavingsPotential.percentHigh}% savings range
                        </span>

                        {energySavingsPotential.estimatedKwhLow !== null &&
                        energySavingsPotential.estimatedKwhHigh !== null ? (
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                            {energySavingsPotential.estimatedKwhLow.toLocaleString()}{" "}
                            to{" "}
                            {energySavingsPotential.estimatedKwhHigh.toLocaleString()}{" "}
                            kWh/year
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-3 text-sm leading-6 text-zinc-600">
                        {energySavingsPotential.basis}.
                      </p>

                      <p className="mt-2 text-xs leading-5 text-zinc-500">
                        This is a directional advisory estimate based on facility
                        characteristics, not a stamped engineering calculation.
                      </p>
                    </div>
                  ) : null}

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <p className="text-sm text-zinc-500">Score Band</p>
                    <p className="mt-1 text-xl font-semibold text-emerald-700">
                      {report.scoreBand.label}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {report.scoreBand.summary}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <p className="text-sm text-zinc-500">Estimated Cost Tier</p>
                    <p className="mt-1 text-lg font-semibold">
                      {result.estimatedCostTier}
                    </p>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-zinc-50 p-4">
                      <p className="text-sm text-zinc-500">Energy Efficiency</p>
                      <p className="mt-1 font-semibold">{report.energyEfficiency}</p>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-4">
                      <p className="text-sm text-zinc-500">Labor Efficiency</p>
                      <p className="mt-1 font-semibold">{report.laborEfficiency}</p>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-4">
                      <p className="text-sm text-zinc-500">
                        Environmental Control
                      </p>
                      <p className="mt-1 font-semibold">
                        {report.environmentalControl}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-4">
                      <p className="text-sm text-zinc-500">
                        Post-Harvest Discipline
                      </p>
                      <p className="mt-1 font-semibold">
                        {report.postHarvestDiscipline}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-4">
                      <p className="text-sm text-zinc-500">
                        Operating Discipline
                      </p>
                      <p className="mt-1 font-semibold">
                        {report.operatingDiscipline}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-zinc-50 p-4">
                      <p className="text-sm text-zinc-500">
                        Strategic Readiness
                      </p>
                      <p className="mt-1 font-semibold">
                        {report.strategicReadiness}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <p className="text-sm text-zinc-500">
                      Recommended Advisory Paths
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.recommendations.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-emerald-700 p-5 text-white">
                  <h3 className="text-lg font-semibold">
                    Turn this report into an action plan
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-emerald-50">
                    You can bring this score report into a discovery call or send
                    it directly for review.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={buildMailtoLink(formData, result)}
                      className="inline-block rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50"
                    >
                      Email Results
                    </a>

                    <Link
                      href="/contact"
                      className="inline-block rounded-full border border-emerald-200 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                    >
                      Schedule a Consultation
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}