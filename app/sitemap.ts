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

// Generates /sitemap/core.xml, /sitemap/ages.xml,
//           /sitemap/ideal-weight.xml, /sitemap/programmatic.xml
// /sitemap.xml auto-generated as index pointing to all four.
export function generateSitemaps() {
  return [
    { id: "core" },
    { id: "ages" },
    { id: "ideal-weight" },
    { id: "programmatic" },
  ];
}

export default function sitemap({ id }: { id: string }): MetadataRoute.Sitemap {
  switch (id) {
    // ── core: homepage · pillar calculators · sub-pages · supporting · legal ──
    case "core":
      return [
        entry("/", 1.0, "weekly"),
        // Pillar calculators
        entry("/bmi-calculator", 0.9, "monthly"),
        entry("/calorie-calculator", 0.9, "monthly"),
        entry("/calorie-calculator/singapore", 0.9, "monthly"),
        entry("/calorie-deficit-calculator", 0.9, "monthly"),
        entry("/sleep-calculator", 0.9, "monthly"),
        entry("/blood-pressure-checker", 0.9, "monthly"),
        entry("/protein-calculator", 0.9, "monthly"),
        entry("/tdee-calculator", 0.9, "monthly"),
        entry("/bmr-calculator", 0.9, "monthly"),
        // BMI sub-pages
        entry("/bmi-calculator/asian", 0.75, "monthly"),
        entry("/bmi-calculator/men", 0.75, "monthly"),
        entry("/bmi-calculator/women", 0.75, "monthly"),
        entry("/bmi-calculator/children", 0.75, "monthly"),
        entry("/bmi-calculator/teens", 0.75, "monthly"),
        entry("/bmi-calculator/seniors", 0.75, "monthly"),
        entry("/bmi-calculator/pregnancy", 0.75, "monthly"),
        // Other sub-pages
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
        // Supporting calculators
        entry("/body-fat-calculator", 0.7, "monthly"),
        entry("/ideal-weight-calculator", 0.7, "monthly"),
        entry("/macro-calculator", 0.7, "monthly"),
        entry("/waist-hip-ratio-calculator", 0.7, "monthly"),
        entry("/water-intake-calculator", 0.7, "monthly"),
        entry("/cholesterol-calculator", 0.7, "monthly"),
        entry("/calories-burned-calculator", 0.7, "monthly"),
        // Health info
        entry("/bmi-chart", 0.6, "monthly"),
        entry("/health/diabetes-risk", 0.6, "monthly"),
        entry("/health/heart-disease", 0.6, "monthly"),
        entry("/health/overweight-singapore", 0.6, "monthly"),
        entry("/health/obese-singapore", 0.6, "monthly"),
        // Legal
        entry("/privacy", 0.3, "yearly"),
        entry("/medical-disclaimer", 0.3, "yearly"),
        entry("/affiliate-disclosure", 0.3, "yearly"),
      ];

    // ── ages: /bmi/age/18 → /bmi/age/80 (63 pages) ───────────────────────────
    case "ages":
      return Array.from({ length: 63 }, (_, i) =>
        entry(`/bmi/age/${i + 18}`, 0.5, "monthly")
      );

    // ── ideal-weight: /ideal-weight/145cm → /ideal-weight/195cm (51 pages) ───
    case "ideal-weight":
      return Array.from({ length: 51 }, (_, i) =>
        entry(`/ideal-weight/${i + 145}cm`, 0.5, "monthly")
      );

    // ── programmatic: protein by weight (11) + calories burned (24) ──────────
    case "programmatic":
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
