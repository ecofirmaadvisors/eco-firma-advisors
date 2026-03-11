export type FacilityType = "Indoor" | "Greenhouse" | "Hybrid";

export type AdvisoryType =
  | "Cultivation Diagnostics"
  | "Facility Blueprint"
  | "Implementation Advisory"
  | "Exit Strategy Advisory";

export type AutomationLevel = "Manual" | "Partial" | "Fully Integrated";

export type VpdManagement = "Yes" | "No" | "Inconsistently";

export type HvacCategory =
  | "Small individual units"
  | "Large standalone commercial units"
  | "Boiler chiller";

export type NutrientStrategy = "Salt" | "Organic" | "Hybrid";

export type IrrigationMethod =
  | "Hand watering"
  | "Automated drip"
  | "Flood and drain"
  | "Other";

export type TrimmingMethod =
  | "Hand trim"
  | "Hybrid"
  | "Machine trim"
  | "Outsourced";

export type TransactionReadiness =
  | "No"
  | "Possibly in the next 12 months"
  | "Yes, currently in discussion with a buyer";

export interface LightingConfig {
  enabled: boolean;
  fixtureCount?: number;
  wattage?: number;
  voltage?: number;
  description?: string;
}

export interface FluorescentLightingConfig {
  enabled: boolean;
  fourBulbCount?: number;
  eightBulbCount?: number;
  wattage?: number;
  voltage?: number;
}

export interface AuditFormData {
  facilityType?: FacilityType;

  motherArea?: number;
  cloneArea?: number;
  vegArea?: number;
  flowerArea?: number;
  dryingArea?: number;
  curingArea?: number;
  flowerRooms?: number;

  averageMonthlyPowerBill?: number;
  electricityRate?: number;

  lighting: {
    HID: LightingConfig;
    LED: LightingConfig;
    LEC: LightingConfig;
    Fluorescent: FluorescentLightingConfig;
    Other: LightingConfig;
  };

  environmentalControlPlatform: string;
  automationLevel?: AutomationLevel;
  vpdManagement?: VpdManagement;
  hvacType: string;
  hvacCategory?: HvacCategory;

  nutrientStrategy?: NutrientStrategy;
  nutrientCostPerCycle?: number;
  lightingIntensityAutomated: boolean;
  fertigationKpiTracking: boolean;
  integratedEnvironmentalControls: boolean;
  irrigationMethod?: IrrigationMethod;

  cultivationHeadcount?: number;
  weeklyLaborHours?: number;
  trimmingMethod?: TrimmingMethod;

  dedicatedDryRooms: boolean;
  environmentalControlDuringDry: boolean;
  structuredCureSop: boolean;
  negativePressureDryingCuring: boolean;

  writtenSops: boolean;
  kpiTracking: boolean;
  costPerPoundTracked: boolean;
  costPerPound?: number;

  transactionReadiness?: TransactionReadiness;
}

export interface AuditScoreResult {
  score: number;
  estimatedCostTier: string;
  recommendations: AdvisoryType[];
}