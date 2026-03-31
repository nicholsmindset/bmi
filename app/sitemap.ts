import { MetadataRoute } from "next";

const BASE = "https://bmicalculator.sg";
const LAST_MODIFIED = new Date("2026-03-31");

// Tier helpers
function entry(url: string, priority: number, changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]) {
  return { url: BASE + url, lastModified: LAST_MODIFIED, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ─── Tier 1: Homepage ─────────────────────────────────────────────────────
  const homepage = [
    entry("/", 1.0, "weekly"),
  ];

  // ─── Tier 2: Core calculator pillars (highest traffic potential) ──────────
  const pillars = [
    "/bmi-calculator",
    "/calorie-calculator",
    "/calorie-calculator/singapore",
    "/calorie-deficit-calculator",
    "/sleep-calculator",
    "/blood-pressure-checker",
    "/protein-calculator",
    "/tdee-calculator",
    "/bmr-calculator",
  ].map((url) => entry(url, 0.9, "monthly"));

  // ─── Tier 3: Calculator sub-pages & supporting tools ─────────────────────
  const subPages = [
    // BMI sub-pages
    "/bmi-calculator/asian",
    "/bmi-calculator/men",
    "/bmi-calculator/women",
    "/bmi-calculator/children",
    "/bmi-calculator/teens",
    "/bmi-calculator/seniors",
    "/bmi-calculator/pregnancy",
    // Calorie deficit sub-page
    "/calorie-deficit-calculator/lose-1kg",
    // TDEE sub-pages
    "/tdee-calculator/sedentary",
    "/tdee-calculator/active",
    // BMR sub-pages
    "/bmr-calculator/men",
    "/bmr-calculator/women",
    // Protein sub-pages
    "/protein-calculator/muscle-gain",
    "/protein-calculator/weight-loss",
    // Sleep sub-page
    "/sleep-calculator/wake-up",
    // Body fat sub-pages
    "/body-fat-calculator/men",
    "/body-fat-calculator/women",
    // Ideal weight sub-pages
    "/ideal-weight-calculator/men",
    "/ideal-weight-calculator/women",
    // Macro sub-pages
    "/macro-calculator/cutting",
    "/macro-calculator/bulking",
    "/macro-calculator/maintenance",
    // Calories burned sub-pages
    "/calories-burned-calculator/walking",
    "/calories-burned-calculator/running",
    "/calories-burned-calculator/cycling",
    "/calories-burned-calculator/swimming",
  ].map((url) => entry(url, 0.75, "monthly"));

  // ─── Tier 4: Supporting calculators ───────────────────────────────────────
  const supporting = [
    "/body-fat-calculator",
    "/ideal-weight-calculator",
    "/macro-calculator",
    "/waist-hip-ratio-calculator",
    "/water-intake-calculator",
    "/cholesterol-calculator",
    "/calories-burned-calculator",
  ].map((url) => entry(url, 0.7, "monthly"));

  // ─── Tier 5: Health info pages ─────────────────────────────────────────────
  const healthInfo = [
    "/bmi-chart",
    "/health/diabetes-risk",
    "/health/heart-disease",
    "/health/overweight-singapore",
    "/health/obese-singapore",
  ].map((url) => entry(url, 0.6, "monthly"));

  // ─── Tier 6: Legal pages ───────────────────────────────────────────────────
  const legal = [
    "/privacy",
    "/medical-disclaimer",
    "/affiliate-disclosure",
  ].map((url) => entry(url, 0.3, "yearly"));

  // ─── Programmatic: BMI by age (63 pages) ──────────────────────────────────
  const ages = Array.from({ length: 63 }, (_, i) =>
    entry(`/bmi/age/${i + 18}`, 0.5, "monthly")
  );

  // ─── Programmatic: Ideal weight by height (51 pages) ─────────────────────
  const heights = Array.from({ length: 51 }, (_, i) =>
    entry(`/ideal-weight/${i + 145}cm`, 0.5, "monthly")
  );

  // ─── Programmatic: Protein intake by weight (11 pages) ───────────────────
  const proteins = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map((w) =>
    entry(`/protein-intake/${w}kg`, 0.5, "monthly")
  );

  // ─── Programmatic: Calories burned by activity + weight (24 pages) ───────
  const burns = (["walking", "running", "cycling", "swimming"] as const).flatMap((a) =>
    [50, 60, 70, 80, 90, 100].map((w) =>
      entry(`/calories-burned/${a}/${w}kg`, 0.5, "monthly")
    )
  );

  return [
    ...homepage,
    ...pillars,
    ...subPages,
    ...supporting,
    ...healthInfo,
    ...legal,
    ...ages,
    ...heights,
    ...proteins,
    ...burns,
  ];
}
