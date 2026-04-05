import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CaloriesBurnedClient from "@/components/calculators/CaloriesBurnedClient";

export const metadata: Metadata = {
  title: "Calories Burned Running Calculator Singapore",
  description:
    "Calculate calories burned running based on your weight, pace, and duration. MET-based formula used by exercise scientists. East Coast Park, MacRitchie, and stadium running estimates.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/running" },
  openGraph: {
    title: "Calories Burned Running Calculator Singapore",
    description: "Calculate calories burned running based on your weight, pace, and duration. MET-based formula used by exercise scientists. East Coast Park, MacRitchie, and stadium running estimates.",
    url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/running",
    type: "website",
  },
  twitter: {
    title: "Calories Burned Running Calculator Singapore",
    description: "Calculate calories burned running based on your weight, pace, and duration. MET-based formula used by exercise scientists. East Coast Park, MacRitchie, and stadium running estimates.",
  },
};

const FAQS = [
  {
    question: "How many calories does a 5 km run burn?",
    answer:
      "A 5 km run burns approximately 280–420 kcal depending on your body weight and pace. A 60 kg person running at a moderate pace (around 6 min/km, MET 8.0) burns roughly 280–300 kcal. A 80 kg person at the same pace burns around 370–400 kcal. Running faster increases the MET value slightly but reduces duration — calorie burn per kilometre stays relatively consistent regardless of pace for most runners.",
  },
  {
    question: "How fast should I run to burn fat?",
    answer:
      "The 'fat burning zone' is a moderate intensity — around 60–70% of your maximum heart rate, which for most people corresponds to a comfortable conversational pace (about MET 6–8, or a pace where you can speak in short sentences). At this intensity, a higher proportion of calories comes from fat. However, higher-intensity running burns more total calories, which is more important for overall fat loss. For Singaporeans, running at dawn or dusk avoids peak heat and allows a more sustained effort.",
  },
];

const RELATED = [
  {
    name: "Calorie Deficit",
    tagline: "Convert runs into weight loss",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
    accent: "#00695C",
  },
  {
    name: "TDEE Calculator",
    tagline: "Daily calorie needs",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.72L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#7B1FA2",
  },
  {
    name: "Protein Calculator",
    tagline: "Recover with protein",
    href: "/protein-calculator",
    iconPath:
      "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#B71C1C",
  },
];

export default function RunningCaloriesPage() {
  return (
    <>
      <CalculatorSchema
        name="Calories Burned Running Calculator Singapore"
        description="Calculate calories burned running based on weight, pace, and duration."
        url="https://www.bmicalculatorsingapore.com/calories-burned-calculator/running"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Calories Burned", url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator" },
          {
            name: "Running",
            url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/running",
          },
        ]}
      />

      <CalculatorSection
        badge="Running · MET Method"
        title="Calories Burned Running Calculator"
        description="Enter your weight and running duration to see your calorie burn. Pre-set to running — adjust intensity between a light jog, steady run, and vigorous pace."
      >
        <CaloriesBurnedClient defaultActivity="running" />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-10">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Running Calories Reference Table
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            Estimated calories burned per 30 minutes of running at different intensities and body weights.
          </p>
          <div
            className="overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--color-outline-variant)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Intensity</th>
                  <th className="text-center px-4 py-3 font-semibold">50 kg</th>
                  <th className="text-center px-4 py-3 font-semibold">65 kg</th>
                  <th className="text-center px-4 py-3 font-semibold">80 kg</th>
                  <th className="text-center px-4 py-3 font-semibold">95 kg</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pace: "Light jog (MET 6.0)", vals: [150, 195, 240, 285] },
                  { pace: "Moderate (MET 8.0)", vals: [200, 260, 320, 380] },
                  { pace: "Vigorous (MET 11.0)", vals: [275, 358, 440, 523] },
                ].map((row, i) => (
                  <tr
                    key={row.pace}
                    style={{
                      background:
                        i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)",
                    }}
                  >
                    <td className="px-4 py-3 font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {row.pace}
                    </td>
                    {row.vals.map((v, j) => (
                      <td
                        key={j}
                        className="px-4 py-3 text-center"
                        style={{ color: "var(--color-on-surface-variant)" }}
                      >
                        {v} kcal
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl p-5"
                style={{
                  background: "var(--color-surface-low)",
                  border: "1px solid var(--color-outline-variant)",
                }}
              >
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RelatedCalculators items={RELATED} title="Related calculators" />
      </section>
    </>
  );
}
