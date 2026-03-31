export interface BMICategory {
  label: string;
  min: number;
  max: number;
  cls: string;
  color: string;
  gaugePos: number;
  affiliateKey: string;
}

export const ASIAN_CATEGORIES: BMICategory[] = [
  { label: "Underweight", min: 0,    max: 18.49, cls: "underweight", color: "#60A5FA", gaugePos: 7,  affiliateKey: "bmi_underweight" },
  { label: "Healthy",     min: 18.5, max: 22.99, cls: "healthy",     color: "#34D399", gaugePos: 28, affiliateKey: "bmi_healthy"     },
  { label: "Overweight",  min: 23.0, max: 27.49, cls: "overweight",  color: "#FB923C", gaugePos: 52, affiliateKey: "bmi_overweight"  },
  { label: "Obese I",     min: 27.5, max: 32.49, cls: "obese1",      color: "#F87171", gaugePos: 72, affiliateKey: "bmi_obese1"      },
  { label: "Obese II",    min: 32.5, max: 999,   cls: "obese2",      color: "#E879A0", gaugePos: 90, affiliateKey: "bmi_obese2"      },
];

export const WHO_CATEGORIES: Omit<BMICategory, "affiliateKey">[] = [
  { label: "Underweight", min: 0,    max: 18.49, cls: "underweight", color: "#60A5FA", gaugePos: 7  },
  { label: "Healthy",     min: 18.5, max: 24.99, cls: "healthy",     color: "#34D399", gaugePos: 32 },
  { label: "Overweight",  min: 25.0, max: 29.99, cls: "overweight",  color: "#FB923C", gaugePos: 58 },
  { label: "Obese",       min: 30.0, max: 999,   cls: "obese1",      color: "#F87171", gaugePos: 80 },
];

export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

export function classifyBMI(
  bmi: number,
  standard: "asian" | "who"
): BMICategory {
  const categories =
    standard === "asian"
      ? ASIAN_CATEGORIES
      : (WHO_CATEGORIES as BMICategory[]);
  return (
    categories.find((c) => bmi >= c.min && bmi <= c.max) ?? categories[categories.length - 1]
  );
}

export function lbsToKg(lbs: number): number {
  return lbs * 0.453592;
}

export function ftInToCm(ft: number, inches: number): number {
  return (ft * 12 + inches) * 2.54;
}

// BMR — Mifflin-St Jeor
export function calculateBMR(
  weightKg: number,
  heightCm: number,
  ageYears: number,
  sex: "male" | "female"
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * ageYears;
  return sex === "male" ? base + 5 : base - 161;
}

export const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary:   1.2,
  light:       1.375,
  moderate:    1.55,
  active:      1.725,
  very_active: 1.9,
};
