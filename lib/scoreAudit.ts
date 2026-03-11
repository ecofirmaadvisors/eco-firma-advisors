import type { AdvisoryType, AuditFormData, AuditScoreResult } from "../types/audit";

function hasPositiveNumber(value?: number) {
  return typeof value === "number" && !Number.isNaN(value) && value > 0;
}

export function scoreAudit(data: AuditFormData): AuditScoreResult {
  let s1 = 0;
  let s2 = 0;
  let s3 = 0;
  let s4 = 0;
  let s5 = 0;
  let s6 = 0;
  let s7 = 0;
  let s8 = 0;
  let s9 = 0;

  const hidEnabled = data.lighting.HID.enabled;
  const ledEnabled = data.lighting.LED.enabled;
  const lecEnabled = data.lighting.LEC.enabled;
  const fluorescentEnabled = data.lighting.Fluorescent.enabled;
  const otherEnabled = data.lighting.Other.enabled;

  const activeLightingTypes = [
    hidEnabled,
    ledEnabled,
    lecEnabled,
    fluorescentEnabled,
    otherEnabled,
  ].filter(Boolean).length;

  if (hasPositiveNumber(data.motherArea)) s1 += 1;
  if (hasPositiveNumber(data.cloneArea)) s1 += 1;
  if (hasPositiveNumber(data.vegArea)) s1 += 1;
  if (hasPositiveNumber(data.flowerArea)) s1 += 2;
  if (hasPositiveNumber(data.dryingArea)) s1 += 2;
  if (hasPositiveNumber(data.curingArea)) s1 += 2;
  if ((data.flowerRooms ?? 0) > 1) s1 += 1;

  if (!hasPositiveNumber(data.vegArea)) {
    s1 = s1 / 2;
  }

  s1 = Math.min(10, s1);

  if (hasPositiveNumber(data.averageMonthlyPowerBill)) s2 += 4;
  if (hasPositiveNumber(data.electricityRate)) s2 += 4;
  if (
    hasPositiveNumber(data.averageMonthlyPowerBill) &&
    hasPositiveNumber(data.electricityRate)
  ) {
    s2 += 3;
    s2 += 3;
  }

  if (hidEnabled) {
    s2 = s2 / 2;
  }

  s2 = Math.min(14, s2);

  if (hidEnabled) {
    s3 -= 2;
  }

  const configs = [
    data.lighting.HID,
    data.lighting.LED,
    data.lighting.LEC,
    data.lighting.Other,
  ];

  configs.forEach((cfg) => {
    if (cfg.enabled) {
      if (hasPositiveNumber(cfg.fixtureCount)) s3 += 1;
      if (hasPositiveNumber(cfg.wattage)) s3 += 1;
      if (hasPositiveNumber(cfg.voltage)) s3 += 1;
      if ((cfg.wattage ?? 0) > 600) s3 -= 2;
    }
  });

  if (data.lighting.Fluorescent.enabled) {
    if (
      hasPositiveNumber(data.lighting.Fluorescent.fourBulbCount) ||
      hasPositiveNumber(data.lighting.Fluorescent.eightBulbCount)
    ) {
      s3 += 1;
    }
    if (hasPositiveNumber(data.lighting.Fluorescent.wattage)) s3 += 1;
    if (hasPositiveNumber(data.lighting.Fluorescent.voltage)) s3 += 1;
    if ((data.lighting.Fluorescent.wattage ?? 0) > 600) s3 -= 2;
  }

  if (otherEnabled && data.lighting.Other.description?.trim()) {
    s3 += 1;
  }

  if (ledEnabled) s3 += 2;
  if (lecEnabled) s3 += 1;

  if (activeLightingTypes >= 1 && activeLightingTypes <= 2) {
    s3 += 2;
  }

  if (hidEnabled) {
    s3 = s3 / 2;
  }

  s3 = Math.max(0, Math.min(14, s3));

  if (data.environmentalControlPlatform.trim()) s4 += 1;

  if (data.automationLevel === "Partial") s4 += 2;
  if (data.automationLevel === "Fully Integrated") s4 += 3;

  if (data.vpdManagement === "Yes") s4 += 2;
  if (data.vpdManagement === "Inconsistently") s4 += 1;

  if (data.hvacType.trim()) s4 += 1;

  if (data.hvacCategory === "Small individual units") s4 += 2;
  if (data.hvacCategory === "Large standalone commercial units") s4 += 3;
  if (data.hvacCategory === "Boiler chiller") s4 += 5;

  if (data.hvacCategory !== "Boiler chiller") {
    s4 = s4 / 2;
  }

  s4 = Math.min(14, s4);

  if (data.nutrientStrategy === "Salt" || data.nutrientStrategy === "Organic") {
    s5 += 1;
  }

  if (hasPositiveNumber(data.nutrientCostPerCycle)) s5 += 1;

  if (data.lightingIntensityAutomated) s5 += 2;
  if (data.fertigationKpiTracking) s5 += 2;
  if (data.integratedEnvironmentalControls) s5 += 2;

  const allSelected =
    data.lightingIntensityAutomated &&
    data.fertigationKpiTracking &&
    data.integratedEnvironmentalControls;

  if (allSelected) {
    s5 = 8;
  }

  if (data.irrigationMethod === "Hand watering") {
    s5 = s5 / 2;
  }

  s5 = Math.min(12, s5);

  if (hasPositiveNumber(data.cultivationHeadcount)) s6 += 3;
  if (hasPositiveNumber(data.weeklyLaborHours)) s6 += 4;

  if (data.trimmingMethod === "Hybrid") s6 += 3;
  if (data.trimmingMethod === "Machine trim") s6 += 2;
  if (data.trimmingMethod === "Outsourced") s6 += 2;
  if (data.trimmingMethod === "Hand trim") s6 += 1;

  if (
    data.trimmingMethod === "Hand trim" ||
    data.trimmingMethod === "Outsourced"
  ) {
    s6 = s6 / 2;
  }

  if (
    hasPositiveNumber(data.cultivationHeadcount) &&
    hasPositiveNumber(data.flowerArea)
  ) {
    const employeesPer1000Sqft =
      (data.cultivationHeadcount ?? 0) / ((data.flowerArea ?? 1) / 1000);

    if (employeesPer1000Sqft > 1) {
      s6 = s6 / 2;
    }
  }

  s6 = Math.min(12, s6);

  if (data.dedicatedDryRooms) s7 += 3;
  if (data.environmentalControlDuringDry) s7 += 3;
  if (data.structuredCureSop) s7 += 2;

  if (!data.negativePressureDryingCuring) {
    s7 = s7 / 2;
  }

  s7 = Math.min(8, s7);

  if (data.writtenSops) s8 += 1;
  if (data.kpiTracking) s8 += 1;
  if (data.costPerPoundTracked) s8 += 1;

  if ((data.costPerPound ?? 0) > 300) {
    s8 = s8 / 2;
  }

  s8 = Math.min(3, s8);

  if (data.transactionReadiness === "No") s9 += 2;
  if (data.transactionReadiness === "Possibly in the next 12 months") s9 += 4;
  if (data.transactionReadiness === "Yes, currently in discussion with a buyer") {
    s9 += 6;
  }

  s9 = Math.min(6, s9);

  const rawScore = s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9;
  const score = Math.round((rawScore / 93) * 100);

  let estimatedCostTier = "Elevated Cost Per Pound Risk";
  if (score >= 90) {
    estimatedCostTier = "Likely Competitive Indoor Production Economics";
  } else if (score >= 70) {
    estimatedCostTier = "Moderate Cost Pressure Likely";
  }

  const recommendations = new Set<AdvisoryType>();

  if (score >= 85) {
    recommendations.add("Cultivation Diagnostics");
  } else if (score >= 70) {
    recommendations.add("Cultivation Diagnostics");
    recommendations.add("Facility Blueprint");
  } else if (score > 50) {
    recommendations.add("Cultivation Diagnostics");
    recommendations.add("Facility Blueprint");
  } else {
    recommendations.add("Cultivation Diagnostics");
    recommendations.add("Facility Blueprint");
    recommendations.add("Implementation Advisory");
  }

  if (data.transactionReadiness === "Yes, currently in discussion with a buyer") {
    recommendations.add("Exit Strategy Advisory");
  }

  if (!data.writtenSops && !data.kpiTracking && !data.costPerPoundTracked) {
    recommendations.add("Cultivation Diagnostics");
    recommendations.add("Facility Blueprint");
  }

  return {
    score,
    estimatedCostTier,
    recommendations: Array.from(recommendations),
  };
}