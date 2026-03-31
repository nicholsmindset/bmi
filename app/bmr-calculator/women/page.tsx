import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import BMRCalculatorClient from "@/components/calculators/BMRCalculatorClient";

export const metadata: Metadata = {
  title: "BMR Calculator for Women — Mifflin-St Jeor Singapore",
  description:
    "Calculate your Basal Metabolic Rate as a woman using the Mifflin-St Jeor formula. Formula: BMR = 10×weight + 6.25×height − 5×age − 161.",
  alternates: { canonical: "https://bmicalculator.sg/bmr-calculator/women" },
  openGraph: {
    title: "BMR Calculator for Women — Mifflin-St Jeor Singapore",
    description: "Calculate your Basal Metabolic Rate as a woman using the Mifflin-St Jeor formula. Formula: BMR = 10×weight + 6.25×height − 5×age − 161.",
    url: "https://bmicalculator.sg/bmr-calculator/women",
    type: "website",
  },
  twitter: {
    title: "BMR Calculator for Women — Mifflin-St Jeor Singapore",
    description: "Calculate your Basal Metabolic Rate as a woman using the Mifflin-St Jeor formula. Formula: BMR = 10×weight + 6.25×height − 5×age − 161.",
  },
};

const FAQS = [
  {
    question: "What is a normal BMR for women?",
    answer:
      "For Singaporean women, a typical BMR ranges from 1,200 to 1,600 kcal/day depending on weight, height, and age. A 55 kg woman at 160 cm aged 30 has a BMR of approximately 1,318 kcal/day. At a sedentary activity level, her TDEE would be around 1,582 kcal/day — lower than many generic dietary guidelines, which is why personalised calculation matters.",
  },
  {
    question: "How does BMR change during pregnancy?",
    answer:
      "BMR increases during pregnancy as the body supports foetal development, placental function, and increased blood volume. In the first trimester, the increase is modest (~100 kcal/day). By the third trimester, BMR can increase by 200–300 kcal/day. Singapore HPB recommends pregnant women consume an additional 300 kcal/day in the second and third trimesters. This calculator is not designed for use during pregnancy — consult your obstetrician or dietitian for pregnancy-specific guidance.",
  },
];

export default function BMRWomenPage() {
  return (
    <>
      <CalculatorSchema
        name="BMR Calculator for Women Singapore"
        description="Calculate Basal Metabolic Rate for women using the Mifflin-St Jeor formula: BMR = 10×weight + 6.25×height − 5×age − 161."
        url="https://bmicalculator.sg/bmr-calculator/women"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMR Calculator", url: "https://bmicalculator.sg/bmr-calculator" },
          { name: "Women", url: "https://bmicalculator.sg/bmr-calculator/women" },
        ]}
      />

      <CalculatorSection
        badge="Female · Mifflin-St Jeor · BMR + TDEE"
        title="BMR Calculator for Women"
        description="Pre-set for female. Calculates Basal Metabolic Rate using: BMR = (10 × weight) + (6.25 × height) − (5 × age) − 161. See your TDEE at every activity level."
      >
        <BMRCalculatorClient defaultSex="female" />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            The Female Mifflin-St Jeor Formula
          </h2>
          <div
            className="rounded-2xl p-5"
            style={{ background: "var(--color-surface-container)", borderLeft: "4px solid var(--color-secondary)" }}
          >
            <p className="text-sm font-bold mb-2" style={{ color: "var(--color-secondary)" }}>Female BMR Formula</p>
            <code className="text-sm font-mono block" style={{ color: "var(--color-on-surface)" }}>
              BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161
            </code>
          </div>
          <div className="space-y-3 text-base mt-4" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The <strong>−161 constant</strong> for women reflects the lower average lean muscle mass compared to
              men. Women typically have 20–25% body fat vs. 15–20% for men of similar build, meaning proportionally
              less metabolically active muscle tissue and a lower resting calorie burn.
            </p>
            <p>
              For women, this also means calorie restriction during weight loss requires more care. Cutting calories
              too aggressively can increase the risk of nutrient deficiencies — particularly iron, calcium, and B
              vitamins. Singapore HPB recommends women consume a minimum of 1,200 kcal/day even in a deficit.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            BMR Reference Values for Singaporean Women (Age 30)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Weight</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>155 cm</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>160 cm</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>165 cm</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { weight: "45 kg", h155: "1,126", h160: "1,157", h165: "1,188" },
                  { weight: "55 kg", h155: "1,226", h160: "1,257", h165: "1,288" },
                  { weight: "65 kg", h155: "1,326", h160: "1,357", h165: "1,388" },
                  { weight: "75 kg", h155: "1,426", h160: "1,457", h165: "1,488" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.weight}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.h155} kcal</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.h160} kcal</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.h165} kcal</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--color-neutral)" }}>
            BMR decreases with age. Multiply by your activity level (1.2–1.9×) to find your TDEE.
          </p>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{question}</h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
