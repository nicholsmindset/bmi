import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import TDEECalculatorClient from "@/components/calculators/TDEECalculatorClient";

export const metadata: Metadata = {
  title: "TDEE Calculator for Active Lifestyle — Singapore",
  description:
    "Calculate your TDEE if you exercise 6–7 days per week. Uses 1.725× active multiplier. Mifflin-St Jeor formula.",
  alternates: { canonical: "https://bmicalculator.sg/tdee-calculator/active" },
  openGraph: {
    title: "TDEE Calculator for Active Lifestyle — Singapore",
    description: "Calculate your TDEE if you exercise 6–7 days per week. Uses 1.725× active multiplier. Mifflin-St Jeor formula.",
    url: "https://bmicalculator.sg/tdee-calculator/active",
    type: "website",
  },
  twitter: {
    title: "TDEE Calculator for Active Lifestyle — Singapore",
    description: "Calculate your TDEE if you exercise 6–7 days per week. Uses 1.725× active multiplier. Mifflin-St Jeor formula.",
  },
};

const FAQS = [
  {
    question: "How active do I need to be for the active multiplier?",
    answer:
      "The active multiplier (1.725×) is appropriate if you perform hard exercise or sport 6–7 days per week. This includes people who run or lift weights most days, competitive athletes, or those with physically demanding hobbies like Muay Thai or cycling. If you exercise 3–5 days per week at moderate intensity, use the moderately active multiplier (1.55×) instead. Overestimating activity level is one of the most common reasons people fail to lose weight — when in doubt, choose a lower multiplier.",
  },
  {
    question: "Should I eat more on training days?",
    answer:
      "Calorie cycling — eating more on training days and less on rest days — can optimise performance and recovery for active individuals. On training days, increase carbohydrates by 50–100g to fuel and replenish glycogen. On rest days, slightly reduce calories by 100–200 kcal. However, for most Singaporeans, the simplest approach is using an average daily TDEE and eating consistently. Only advanced athletes typically benefit meaningfully from day-to-day calorie cycling.",
  },
];

export default function TDEEActivePage() {
  return (
    <>
      <CalculatorSchema
        name="TDEE Calculator for Active Lifestyle Singapore"
        description="Calculate Total Daily Energy Expenditure for an active lifestyle using the Mifflin-St Jeor formula and 1.725× activity multiplier."
        url="https://bmicalculator.sg/tdee-calculator/active"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "TDEE Calculator", url: "https://bmicalculator.sg/tdee-calculator" },
          { name: "Active", url: "https://bmicalculator.sg/tdee-calculator/active" },
        ]}
      />

      <CalculatorSection
        badge="Active · 1.725× Multiplier · Mifflin-St Jeor"
        title="TDEE Calculator — Active Lifestyle"
        description="Pre-set for an active lifestyle (hard exercise 6–7 days per week). The 1.725× multiplier is applied to your BMR. Adjust if your training frequency is lower."
      >
        <TDEECalculatorClient defaultActivity="active" />
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
            Nutrition Priorities for Active Individuals
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Active individuals burning 2,500–3,200+ kcal/day have meaningfully higher nutrient needs than sedentary
              adults. Underfuelling — eating too far below TDEE — impairs performance, recovery, and long-term
              body composition even when fat loss is the goal.
            </p>
            <p>
              For active Singaporeans, <strong>protein intake of 1.6–2.0g per kg</strong> of body weight is
              essential for muscle repair and growth. Carbohydrates remain the primary fuel for high-intensity
              training — do not over-restrict them if you train most days.
            </p>
            <p>
              Hydration is also critical. Singapore&apos;s tropical climate increases sweat losses significantly.
              Active individuals should aim for at least <strong>2.5–3.5 litres of water per day</strong>,
              adjusting upward for outdoor training sessions.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Calorie Targets by Goal
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { goal: "Fat Loss", adjust: "TDEE − 300–500 kcal", result: "Preserve performance", color: "var(--color-warning)" },
              { goal: "Maintenance", adjust: "TDEE", result: "Optimal performance", color: "var(--color-primary)" },
              { goal: "Muscle Gain", adjust: "TDEE + 300–500 kcal", result: "Lean bulk", color: "var(--color-secondary)" },
            ].map((g) => (
              <div
                key={g.goal}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderTop: `3px solid ${g.color}` }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: g.color }}>{g.goal}</p>
                <p className="text-base font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>{g.adjust}</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{g.result}</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--color-neutral)" }}>
            Active individuals should avoid deficits larger than 500 kcal/day to preserve lean muscle and training performance.
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
