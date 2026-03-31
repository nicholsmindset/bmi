import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import BMRCalculatorClient from "@/components/calculators/BMRCalculatorClient";

export const metadata: Metadata = {
  title: "BMR Calculator for Men — Mifflin-St Jeor Singapore",
  description:
    "Calculate your Basal Metabolic Rate as a man using the Mifflin-St Jeor formula. Formula: BMR = 10×weight + 6.25×height − 5×age + 5.",
  alternates: { canonical: "https://bmicalculator.sg/bmr-calculator/men" },
  openGraph: {
    title: "BMR Calculator for Men — Mifflin-St Jeor Singapore",
    description: "Calculate your Basal Metabolic Rate as a man using the Mifflin-St Jeor formula. Formula: BMR = 10×weight + 6.25×height − 5×age + 5.",
    url: "https://bmicalculator.sg/bmr-calculator/men",
    type: "website",
  },
  twitter: {
    title: "BMR Calculator for Men — Mifflin-St Jeor Singapore",
    description: "Calculate your Basal Metabolic Rate as a man using the Mifflin-St Jeor formula. Formula: BMR = 10×weight + 6.25×height − 5×age + 5.",
  },
};

const FAQS = [
  {
    question: "What is the average BMR for Singaporean men?",
    answer:
      "The average Singaporean man is approximately 70 kg and 170 cm tall at age 35. Using the Mifflin-St Jeor formula, this gives a BMR of approximately 1,680 kcal/day. Multiplied by a sedentary activity level (1.2×), the TDEE is around 2,016 kcal/day. These figures vary significantly with body weight — a heavier or more muscular man will have a higher BMR.",
  },
  {
    question: "How does muscle mass affect BMR for men?",
    answer:
      "Muscle tissue burns approximately 3× more calories at rest than fat tissue. Men with greater lean muscle mass — built through resistance training — have measurably higher BMRs than men of the same weight and height who carry more body fat. This is one of the primary reasons strength training is recommended as a long-term weight management strategy: building muscle permanently raises your resting calorie burn.",
  },
];

export default function BMRMenPage() {
  return (
    <>
      <CalculatorSchema
        name="BMR Calculator for Men Singapore"
        description="Calculate Basal Metabolic Rate for men using the Mifflin-St Jeor formula: BMR = 10×weight + 6.25×height − 5×age + 5."
        url="https://bmicalculator.sg/bmr-calculator/men"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMR Calculator", url: "https://bmicalculator.sg/bmr-calculator" },
          { name: "Men", url: "https://bmicalculator.sg/bmr-calculator/men" },
        ]}
      />

      <CalculatorSection
        badge="Male · Mifflin-St Jeor · BMR + TDEE"
        title="BMR Calculator for Men"
        description="Pre-set for male. Calculates Basal Metabolic Rate using: BMR = (10 × weight) + (6.25 × height) − (5 × age) + 5. See your TDEE at every activity level."
      >
        <BMRCalculatorClient defaultSex="male" />
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
            The Male Mifflin-St Jeor Formula
          </h2>
          <div
            className="rounded-2xl p-5"
            style={{ background: "var(--color-surface-container)", borderLeft: "4px solid var(--color-primary)" }}
          >
            <p className="text-sm font-bold mb-2" style={{ color: "var(--color-primary)" }}>Male BMR Formula</p>
            <code className="text-sm font-mono block" style={{ color: "var(--color-on-surface)" }}>
              BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5
            </code>
          </div>
          <div className="space-y-3 text-base mt-4" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The <strong>+5 constant</strong> in the male formula accounts for the higher lean body mass and muscle
              percentage typical of men. Men generally have 10–15% higher BMRs than women of equivalent
              height, weight, and age due to greater average muscle mass.
            </p>
            <p>
              This formula has been validated in independent studies as the most accurate predictor of resting
              energy expenditure for Asian men. The older Harris-Benedict equation consistently overestimates BMR
              by 5–10% in Asian populations.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            BMR Reference Values for Singaporean Men (Age 35)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Weight</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>165 cm</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>170 cm</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>175 cm</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { weight: "60 kg", h165: "1,547", h170: "1,578", h175: "1,609" },
                  { weight: "70 kg", h165: "1,647", h170: "1,678", h175: "1,709" },
                  { weight: "80 kg", h165: "1,747", h170: "1,778", h175: "1,809" },
                  { weight: "90 kg", h165: "1,847", h170: "1,878", h175: "1,909" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.weight}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.h165} kcal</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.h170} kcal</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.h175} kcal</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--color-neutral)" }}>
            BMR decreases by approximately 50–80 kcal per decade of ageing due to gradual muscle loss.
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
