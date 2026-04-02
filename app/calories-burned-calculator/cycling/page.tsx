import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CaloriesBurnedClient from "@/components/calculators/CaloriesBurnedClient";

export const metadata: Metadata = {
  title: "Calories Burned Cycling Calculator Singapore",
  description:
    "Calculate calories burned cycling based on your weight, intensity, and duration. Park connector, commute cycling, and spinning class calorie estimates for Singapore cyclists.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/cycling" },
  openGraph: {
    title: "Calories Burned Cycling Calculator Singapore",
    description: "Calculate calories burned cycling based on your weight, intensity, and duration. Park connector, commute cycling, and spinning class calorie estimates for Singapore cyclists.",
    url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/cycling",
    type: "website",
  },
  twitter: {
    title: "Calories Burned Cycling Calculator Singapore",
    description: "Calculate calories burned cycling based on your weight, intensity, and duration. Park connector, commute cycling, and spinning class calorie estimates for Singapore cyclists.",
  },
};

const FAQS = [
  {
    question: "How many calories does cycling to work burn in Singapore?",
    answer:
      "A typical 20-minute commute cycling at moderate pace (MET 6.0) burns approximately 100–160 kcal for a 60–90 kg person. A 30-minute cycle burns around 150–240 kcal. Many Singaporeans cycle along park connectors to MRT stations — this moderate-intensity activity contributes meaningfully to daily calorie expenditure. Cycling in Singapore's heat also adds a modest thermoregulation overhead, slightly increasing total energy expenditure.",
  },
  {
    question: "Is cycling better than running for fat loss?",
    answer:
      "Running burns more calories per minute than cycling at comparable intensities, but cycling allows longer sustained effort with less joint stress. This means many people can cycle for longer durations, potentially burning similar or greater total calories per session. For fat loss, total calorie deficit matters more than the exercise type. Cycling is also easier on knees and ankles — making it a better long-term option for heavier individuals or those with joint issues. Both activities effectively support weight loss when combined with a controlled diet.",
  },
];

const RELATED = [
  {
    name: "Calories Burned Running",
    tagline: "Compare with running",
    href: "/calories-burned-calculator/running",
    iconPath:
      "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z",
    accent: "#005EB8",
  },
  {
    name: "Calorie Deficit",
    tagline: "Rides meet deficit",
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
];

export default function CyclingCaloriesPage() {
  return (
    <>
      <CalculatorSchema
        name="Calories Burned Cycling Calculator Singapore"
        description="Calculate calories burned cycling based on weight, intensity, and duration."
        url="https://www.bmicalculatorsingapore.com/calories-burned-calculator/cycling"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Calories Burned", url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator" },
          {
            name: "Cycling",
            url: "https://www.bmicalculatorsingapore.com/calories-burned-calculator/cycling",
          },
        ]}
      />

      <CalculatorSection
        badge="Cycling · MET Method"
        title="Calories Burned Cycling Calculator"
        description="Enter your weight and cycling duration to calculate your calorie burn. Pre-set to cycling — adjust between leisure ride, moderate commute, and vigorous cycling."
      >
        <CaloriesBurnedClient defaultActivity="cycling" />
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
            Cycling Calories Reference Table
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            Estimated calories burned per 30 minutes of cycling at different intensities and body weights.
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
                  { pace: "Leisure (MET 4.0)", vals: [100, 130, 160, 190] },
                  { pace: "Moderate (MET 6.0)", vals: [150, 195, 240, 285] },
                  { pace: "Vigorous (MET 10.0)", vals: [250, 325, 400, 475] },
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
