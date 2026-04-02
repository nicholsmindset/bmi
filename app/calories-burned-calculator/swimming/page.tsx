import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CaloriesBurnedClient from "@/components/calculators/CaloriesBurnedClient";

export const metadata: Metadata = {
  title: "Calories Burned Swimming Calculator Singapore",
  description:
    "Calculate calories burned swimming based on your weight, stroke intensity, and duration. Singapore public pool swimming calorie estimates. Free, instant results.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/swimming" },
  openGraph: {
    title: "Calories Burned Swimming Calculator Singapore",
    description: "Calculate calories burned swimming based on your weight, stroke intensity, and duration. Singapore public pool swimming calorie estimates. Free, instant results.",
    url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/swimming",
    type: "website",
  },
  twitter: {
    title: "Calories Burned Swimming Calculator Singapore",
    description: "Calculate calories burned swimming based on your weight, stroke intensity, and duration. Singapore public pool swimming calorie estimates. Free, instant results.",
  },
};

const FAQS = [
  {
    question: "What swimming stroke burns the most calories?",
    answer:
      "Butterfly is the most calorie-intensive stroke (MET 9.5–13), burning roughly 20–30% more than freestyle at the same duration. However, butterfly is technically demanding and difficult to sustain. For most recreational swimmers, freestyle (front crawl) at vigorous intensity (MET 8–9) offers the best calorie burn that can be maintained over a full session. Breaststroke burns slightly fewer calories than freestyle but is gentler on the shoulders. Backstroke is slightly less intense than freestyle. For maximum calorie burn per session, mix strokes and keep rest intervals short.",
  },
  {
    question: "How long should I swim to lose weight?",
    answer:
      "HPB recommends at least 150 minutes of moderate-intensity activity per week for weight management. Swimming at a moderate intensity for 30 minutes burns approximately 230–390 kcal for a 60–90 kg person. Three sessions of 30–45 minutes per week (totalling 90–135 minutes) provides significant calorie burn of 700–1,500 kcal/week, contributing meaningfully to a calorie deficit. Singapore's network of public pools (over 30 public swimming complexes) makes consistent pool access easy. Combine swimming with a calorie-controlled diet for best weight loss results.",
  },
];

const RELATED = [
  {
    name: "Calorie Deficit",
    tagline: "Turn laps into weight loss",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
    accent: "#00695C",
  },
  {
    name: "Protein Calculator",
    tagline: "Recover after swimming",
    href: "/protein-calculator",
    iconPath:
      "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#B71C1C",
  },
  {
    name: "TDEE Calculator",
    tagline: "Total daily energy",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.72L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#7B1FA2",
  },
];

export default function SwimmingCaloriesPage() {
  return (
    <>
      <CalculatorSchema
        name="Calories Burned Swimming Calculator Singapore"
        description="Calculate calories burned swimming based on weight, stroke intensity, and duration."
        url="https://www.bmicalculatorsingapore.com/calories-burned-calculator/swimming"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Calories Burned", url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator" },
          {
            name: "Swimming",
            url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/swimming",
          },
        ]}
      />

      <CalculatorSection
        badge="Swimming · MET Method"
        title="Calories Burned Swimming Calculator"
        description="Enter your weight and swim duration to calculate your calorie burn. Pre-set to swimming — adjust intensity between easy laps, steady freestyle, and vigorous pace."
      >
        <CaloriesBurnedClient defaultActivity="swimming" />
      </CalculatorSection>

      {/* Ad unit 1 */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-10">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Swimming Calories Reference Table
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            Estimated calories burned per 30 minutes of swimming at different intensities and body weights.
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
                  { pace: "Easy laps (MET 5.0)", vals: [125, 163, 200, 238] },
                  { pace: "Moderate (MET 7.0)", vals: [175, 228, 280, 333] },
                  { pace: "Vigorous (MET 9.0)", vals: [225, 293, 360, 428] },
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

        {/* Ad unit 2 */}
        <div>
          <AdUnit
            format="responsive"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
            className="mx-auto"
          />
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
