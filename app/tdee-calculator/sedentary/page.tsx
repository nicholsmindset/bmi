import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import TDEECalculatorClient from "@/components/calculators/TDEECalculatorClient";

export const metadata: Metadata = {
  title: "TDEE Calculator for Sedentary Lifestyle — Singapore",
  description:
    "Calculate your TDEE if you have a sedentary lifestyle — office job, little to no exercise. Mifflin-St Jeor formula with 1.2× sedentary multiplier.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/tdee-calculator/sedentary" },
  openGraph: {
    title: "TDEE Calculator for Sedentary Lifestyle — Singapore",
    description: "Calculate your TDEE if you have a sedentary lifestyle — office job, little to no exercise. Mifflin-St Jeor formula with 1.2× sedentary multiplier.",
    url: "https://www.bmicalculatorsingapore.com/tdee-calculator/sedentary",
    type: "website",
  },
  twitter: {
    title: "TDEE Calculator for Sedentary Lifestyle — Singapore",
    description: "Calculate your TDEE if you have a sedentary lifestyle — office job, little to no exercise. Mifflin-St Jeor formula with 1.2× sedentary multiplier.",
  },
};

const FAQS = [
  {
    question: "What counts as sedentary activity level?",
    answer:
      "Sedentary means little or no planned exercise and a predominantly desk-based lifestyle. This includes office workers who sit for most of the day, those who commute by car or public transport without significant walking, and people who do not engage in regular exercise. In Singapore, the majority of working adults fall into the sedentary or lightly active category due to the prevalence of office-based jobs. If you take fewer than 5,000 steps per day and do not exercise regularly, choose sedentary.",
  },
  {
    question: "How can a sedentary person start losing weight?",
    answer:
      "Start by calculating your TDEE using the 1.2× sedentary multiplier, then subtract 300–500 calories to create a sustainable deficit. For a sedentary 70 kg Singaporean man, TDEE is approximately 1,900–2,000 kcal/day — a 500 kcal deficit means eating around 1,400–1,500 kcal. Increasing daily steps to 8,000–10,000 gradually raises your activity multiplier, allowing you to eat more while still losing weight. Singapore HPB recommends at least 150 minutes of moderate-intensity physical activity per week as a starting goal.",
  },
];

export default function TDEESedentaryPage() {
  return (
    <>
      <CalculatorSchema
        name="TDEE Calculator for Sedentary Lifestyle Singapore"
        description="Calculate your Total Daily Energy Expenditure with a sedentary lifestyle using the Mifflin-St Jeor formula and 1.2× activity multiplier."
        url="https://www.bmicalculatorsingapore.com/tdee-calculator/sedentary"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "TDEE Calculator", url: "https://www.bmicalculatorsingapore.com/tdee-calculator" },
          { name: "Sedentary", url: "https://www.bmicalculatorsingapore.com/tdee-calculator/sedentary" },
        ]}
      />

      <CalculatorSection
        badge="Sedentary · 1.2× Multiplier · Mifflin-St Jeor"
        title="TDEE Calculator — Sedentary Lifestyle"
        description="Pre-set for a sedentary activity level (desk job, little to no exercise). The 1.2× multiplier is applied to your BMR to calculate total daily calorie burn."
      >
        <TDEECalculatorClient defaultActivity="sedentary" />
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
            What Is a Sedentary TDEE?
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              A sedentary TDEE uses a <strong>1.2× multiplier</strong> applied to your Basal Metabolic Rate. This
              accounts for the minimal energy expended through everyday non-exercise activity — walking to the
              MRT, making a coffee, light household tasks — but no structured exercise.
            </p>
            <p>
              For a typical Singaporean office worker aged 35, this produces a TDEE of roughly <strong>1,800–2,100 kcal/day</strong> depending
              on weight and height. This is meaningfully lower than the HPB&apos;s generic 2,200 kcal recommendation for
              men, which assumes moderate activity.
            </p>
            <p>
              Using the correct sedentary multiplier prevents you from inadvertently eating in a surplus.
              Many people who struggle to lose weight despite &ldquo;eating healthily&rdquo; are simply overestimating
              their activity level.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Calorie Targets for Sedentary Adults
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { goal: "Lose Weight", adjust: "TDEE − 500 kcal", result: "≈ 0.5 kg/week", color: "var(--color-warning)" },
              { goal: "Maintain Weight", adjust: "TDEE", result: "No change", color: "var(--color-primary)" },
              { goal: "Gain Muscle", adjust: "TDEE + 250 kcal", result: "Lean bulk", color: "var(--color-secondary)" },
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
            Singapore HPB safety minimums: women should not go below 1,200 kcal/day; men not below 1,500 kcal/day.
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
