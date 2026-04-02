import { MetadataRoute } from "next";

const BASE = "https://www.bmicalculatorsingapore.com";
const LAST_MODIFIED = new Date("2026-03-31");

function entry(
  url: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"]
) {
  return { url: BASE + url, lastModified: LAST_MODIFIED, changeFrequency, priority };
}

// Segment IDs:
// 0 → core pages (homepage, pillars, sub-pages, supporting, health info, legal)
// 1 → programmatic: BMI by age (63 pages)
// 2 → programmatic: ideal weight by height (51 pages)
// 3 → programmatic: protein by weight + calories burned (35 pages)

export function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  switch (id) {
    // ─── Segment 0: Core pages ────────────────────────────────────────────────
    case 0:
      return [
        // Tier 1: Homepage
        entry("/", 1.0, "weekly"),
        // Tier 2: Pillar calculators
        entry("/bmi-calculator", 0.9, "monthly"),
        entry("/calorie-calculator", 0.9, "monthly"),
        entry("/calorie-calculator/singapore", 0.9, "monthly"),
        entry("/calorie-deficit-calculator", 0.9, "monthly"),
        entry("/sleep-calculator", 0.9, "monthly"),
        entry("/blood-pressure-checker", 0.9, "monthly"),
        entry("/protein-calculator", 0.9, "monthly"),
        entry("/tdee-calculator", 0.9, "monthly"),
        entry("/bmr-calculator", 0.9, "monthly"),
        // Tier 3: BMI sub-pages
        entry("/bmi-calculator/asian", 0.75, "monthly"),
        entry("/bmi-calculator/men", 0.75, "monthly"),
        entry("/bmi-calculator/women", 0.75, "monthly"),
        entry("/bmi-calculator/children", 0.75, "monthly"),
        entry("/bmi-calculator/teens", 0.75, "monthly"),
        entry("/bmi-calculator/seniors", 0.75, "monthly"),
        entry("/bmi-calculator/pregnancy", 0.75, "monthly"),
        // Tier 3: Other calculator sub-pages
        entry("/calorie-deficit-calculator/lose-1kg", 0.75, "monthly"),
        entry("/tdee-calculator/sedentary", 0.75, "monthly"),
        entry("/tdee-calculator/active", 0.75, "monthly"),
        entry("/bmr-calculator/men", 0.75, "monthly"),
        entry("/bmr-calculator/women", 0.75, "monthly"),
        entry("/protein-calculator/muscle-gain", 0.75, "monthly"),
        entry("/protein-calculator/weight-loss", 0.75, "monthly"),
        entry("/sleep-calculator/wake-up", 0.75, "monthly"),
        entry("/body-fat-calculator/men", 0.75, "monthly"),
        entry("/body-fat-calculator/women", 0.75, "monthly"),
        entry("/ideal-weight-calculator/men", 0.75, "monthly"),
        entry("/ideal-weight-calculator/women", 0.75, "monthly"),
        entry("/macro-calculator/cutting", 0.75, "monthly"),
        entry("/macro-calculator/bulking", 0.75, "monthly"),
        entry("/macro-calculator/maintenance", 0.75, "monthly"),
        entry("/calories-burned-calculator/walking", 0.75, "monthly"),
        entry("/calories-burned-calculator/running", 0.75, "monthly"),
        entry("/calories-burned-calculator/cycling", 0.75, "monthly"),
        entry("/calories-burned-calculator/swimming", 0.75, "monthly"),
        // Tier 4: Supporting calculators
        entry("/body-fat-calculator", 0.7, "monthly"),
        entry("/ideal-weight-calculator", 0.7, "monthly"),
        entry("/macro-calculator", 0.7, "monthly"),
        entry("/waist-hip-ratio-calculator", 0.7, "monthly"),
        entry("/water-intake-calculator", 0.7, "monthly"),
        entry("/cholesterol-calculator", 0.7, "monthly"),
        entry("/calories-burned-calculator", 0.7, "monthly"),
        // Tier 5: Health info pages
        entry("/bmi-chart", 0.6, "monthly"),
        entry("/health/diabetes-risk", 0.6, "monthly"),
        entry("/health/heart-disease", 0.6, "monthly"),
        entry("/health/overweight-singapore", 0.6, "monthly"),
        entry("/health/obese-singapore", 0.6, "monthly"),
        // Tier 6: Legal pages
        entry("/privacy", 0.3, "yearly"),
        entry("/medical-disclaimer", 0.3, "yearly"),
        entry("/affiliate-disclosure", 0.3, "yearly"),
      ];

    // ─── Segment 1: BMI by age — 63 pages (ages 18–80) ───────────────────────
    case 1:
      return Array.from({ length: 63 }, (_, i) =>
        entry(`/bmi/age/${i + 18}`, 0.5, "monthly")
      );

    // ─── Segment 2: Ideal weight by height — 51 pages (145cm–195cm) ──────────
    case 2:
      return Array.from({ length: 51 }, (_, i) =>
        entry(`/ideal-weight/${i + 145}cm`, 0.5, "monthly")
      );

    // ─── Segment 3: Protein by weight (11) + Calories burned (24) ────────────
    case 3:
      return [
        ...[50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map((w) =>
          entry(`/protein-intake/${w}kg`, 0.5, "monthly")
        ),
        ...(["walking", "running", "cycling", "swimming"] as const).flatMap((a) =>
          [50, 60, 70, 80, 90, 100].map((w) =>
            entry(`/calories-burned/${a}/${w}kg`, 0.5, "monthly")
          )
        ),
      ];

    default:
      return [];
  }
}
