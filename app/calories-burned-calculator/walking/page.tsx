import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CaloriesBurnedClient from "@/components/calculators/CaloriesBurnedClient";

export const metadata: Metadata = {
  title: "Calories Burned Walking Calculator Singapore",
  description:
    "Calculate how many calories you burn walking based on your weight, pace, and duration. Singapore park connector and neighbourhood walking calorie estimates. Free, instant results.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/walking" },
  openGraph: {
    title: "Calories Burned Walking Calculator Singapore",
    description: "Calculate how many calories you burn walking based on your weight, pace, and duration. Singapore park connector and neighbourhood walking calorie estimates. Free, instant results.",
    url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/walking",
    type: "website",
  },
  twitter: {
    title: "Calories Burned Walking Calculator Singapore",
    description: "Calculate how many calories you burn walking based on your weight, pace, and duration. Singapore park connector and neighbourhood walking calorie estimates. Free, instant results.",
  },
};

const FAQS = [
  {
    question: "How many calories does walking 10,000 steps burn?",
    answer:
      "Walking 10,000 steps burns approximately 300–500 kcal, depending on your body weight and walking pace. A 60 kg person at a moderate pace burns around 280–320 kcal, while a 80 kg person burns roughly 380–430 kcal. Step count is a useful proxy, but calorie burn depends more on duration and intensity than steps alone. At an average stride length, 10,000 steps takes roughly 75–90 minutes of walking.",
  },
  {
    question: "Is walking enough exercise to lose weight in Singapore?",
    answer:
      "Yes, walking can absolutely support weight loss when combined with a calorie-controlled diet. The HPB recommends at least 150 minutes of moderate-intensity activity per week for adults, which translates to about 30 minutes of brisk walking five days a week. At a moderate pace, a 65 kg person burns roughly 160–200 kcal per 30-minute walk. Over a week, that adds up to 800–1,000 kcal — contributing meaningfully to a calorie deficit. Singapore's park connectors, HDB void decks, and air-conditioned malls make walking accessible year-round.",
  },
];

const RELATED = [
  {
    name: "Calorie Deficit",
    tagline: "Turn walks into weight loss",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
    accent: "#00695C",
  },
  {
    name: "TDEE Calculator",
    tagline: "Total daily energy",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.72L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#7B1FA2",
  },
  {
    name: "BMI Calculator",
    tagline: "Track your progress",
    href: "/bmi-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 2a5 5 0 100 10A5 5 0 0012 7z",
    accent: "#005EB8",
  },
];

export default function WalkingCaloriesPage() {
  return (
    <>
      <CalculatorSchema
        name="Calories Burned Walking Calculator Singapore"
        description="Calculate calories burned walking based on weight, pace, and duration."
        url="https://www.bmicalculatorsingapore.com/calories-burned-calculator/walking"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          {
            name: "Calories Burned",
            url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator",
          },
          {
            name: "Walking",
            url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/walking",
          },
        ]}
      />

      <CalculatorSection
        badge="Walking · MET Method"
        title="Calories Burned Walking Calculator"
        description="Enter your weight and how long you walked to see your calorie burn. Pre-set to walking — adjust the pace slider for slow stroll, brisk walk, or power walking."
      >
        <CaloriesBurnedClient defaultActivity="walking" />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-10">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Walking Calories Reference Table
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            Estimated calories burned per 30 minutes of walking at different paces and body weights.
          </p>
          <div
            className="overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--color-outline-variant)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Pace</th>
                  <th className="text-center px-4 py-3 font-semibold">50 kg</th>
                  <th className="text-center px-4 py-3 font-semibold">65 kg</th>
                  <th className="text-center px-4 py-3 font-semibold">80 kg</th>
                  <th className="text-center px-4 py-3 font-semibold">95 kg</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { pace: "Slow (MET 2.5)", vals: [63, 81, 100, 119] },
                  { pace: "Brisk (MET 3.5)", vals: [88, 114, 140, 166] },
                  { pace: "Fast (MET 4.5)", vals: [113, 146, 180, 214] },
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
