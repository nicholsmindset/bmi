import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import MacroCalculatorClient from "@/components/calculators/MacroCalculatorClient";

export const metadata: Metadata = {
  title: "Maintenance Macro Calculator — Balanced Daily Macros",
  description:
    "Calculate your maintenance macros for body recomposition or sustainable nutrition. 30% protein / 40% carbs / 30% fat balanced split.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/macro-calculator/maintenance" },
  openGraph: {
    title: "Maintenance Macro Calculator — Balanced Daily Macros",
    description: "Calculate your maintenance macros for body recomposition or sustainable nutrition. 30% protein / 40% carbs / 30% fat balanced split.",
    url: "https://www.bmicalculatorsingapore.com/macro-calculator/maintenance",
    type: "website",
  },
  twitter: {
    title: "Maintenance Macro Calculator — Balanced Daily Macros",
    description: "Calculate your maintenance macros for body recomposition or sustainable nutrition. 30% protein / 40% carbs / 30% fat balanced split.",
  },
};

const FAQS = [
  {
    question: "What are maintenance macros?",
    answer:
      "Maintenance macros are your macronutrient targets when eating at your TDEE — neither gaining nor losing weight. They provide a balanced intake of protein (30%), carbohydrates (40%), and fat (30%) to sustain energy, support muscle tissue, and maintain hormonal health. Maintenance eating is also the foundation of body recomposition — slowly losing fat and gaining muscle simultaneously — which requires patience but works well for most active Singaporeans.",
  },
  {
    question: "How do I know if my maintenance calories are correct?",
    answer:
      "Track your weight daily for 2–3 weeks. If weight stays within ±0.5 kg of your starting weight, your intake is close to true maintenance. If you are consistently gaining, reduce by 100–150 kcal/day. If consistently losing, add 100–150 kcal/day. Body weight fluctuates daily due to water, sodium, and digestion — use a weekly average rather than a single daily weigh-in for accuracy.",
  },
];

export default function MacroMaintenancePage() {
  return (
    <>
      <CalculatorSchema
        name="Maintenance Macro Calculator"
        description="Calculate balanced daily macros at maintenance calories — 30% protein / 40% carbs / 30% fat for body recomposition and sustainable nutrition."
        url="https://www.bmicalculatorsingapore.com/macro-calculator/maintenance"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Macro Calculator", url: "https://www.bmicalculatorsingapore.com/macro-calculator" },
          { name: "Maintenance", url: "https://www.bmicalculatorsingapore.com/macro-calculator/maintenance" },
        ]}
      />

      <CalculatorSection
        badge="Maintenance · 30% Protein · 40% Carbs · 30% Fat"
        title="Maintenance Macro Calculator"
        description="Pre-set for maintenance. Calculates your balanced daily protein, carb, and fat targets at your TDEE. Ideal for body recomposition or sustainable long-term nutrition."
      >
        <MacroCalculatorClient defaultGoal="maintenance" />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Body Recomposition — Lose Fat and Gain Muscle Simultaneously
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Eating at maintenance calories while resistance training and consuming adequate protein (1.4–2.0g/kg)
              enables <strong>body recomposition</strong> — a process where fat is replaced with lean muscle without
              a significant change in scale weight. This is slower than dedicated cut or bulk phases, but is
              very sustainable and practical for Singaporean lifestyles.
            </p>
            <p>
              Recomposition works best for beginners or those returning after a break from training, people
              with higher body fat percentages, and anyone who wants long-term sustainable results without
              dramatic eating pattern changes.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Maintenance vs. Cut vs. Bulk
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { phase: "Cutting", calories: "TDEE − 300–500", goal: "Fat loss", color: "var(--color-warning)" },
              { phase: "Maintenance", calories: "TDEE", goal: "Recomposition", color: "var(--color-primary)" },
              { phase: "Bulking", calories: "TDEE + 200–400", goal: "Muscle gain", color: "var(--color-secondary)" },
            ].map((g) => (
              <div
                key={g.phase}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderTop: `3px solid ${g.color}` }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: g.color }}>{g.phase}</p>
                <p className="text-base font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>{g.calories} kcal</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{g.goal}</p>
              </div>
            ))}
          </div>
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
