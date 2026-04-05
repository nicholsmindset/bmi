import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import MacroCalculatorClient from "@/components/calculators/MacroCalculatorClient";

export const metadata: Metadata = {
  title: "Cutting Macro Calculator — Protein, Carbs & Fat for Fat Loss",
  description:
    "Calculate your macros for a cutting phase. 40% protein / 30% carbs / 30% fat split to preserve muscle while losing fat.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/macro-calculator/cutting" },
  openGraph: {
    title: "Cutting Macro Calculator — Protein, Carbs & Fat for Fat Loss",
    description: "Calculate your macros for a cutting phase. 40% protein / 30% carbs / 30% fat split to preserve muscle while losing fat.",
    url: "https://www.bmicalculatorsingapore.com/macro-calculator/cutting",
    type: "website",
  },
  twitter: {
    title: "Cutting Macro Calculator — Protein, Carbs & Fat for Fat Loss",
    description: "Calculate your macros for a cutting phase. 40% protein / 30% carbs / 30% fat split to preserve muscle while losing fat.",
  },
};

const FAQS = [
  {
    question: "What macros should I eat when cutting?",
    answer:
      "For cutting, a 40% protein / 30% carbs / 30% fat split is evidence-backed. High protein (40%) preserves lean muscle during a calorie deficit, increases satiety, and has the highest thermic effect — meaning you burn more calories digesting it. Moderate carbs maintain training performance, while fat supports hormonal health. For a 65 kg Singaporean eating 1,600 kcal while cutting: aim for 160g protein, 120g carbs, and 53g fat.",
  },
  {
    question: "How much protein do I need to preserve muscle on a cut?",
    answer:
      "ISSN guidelines recommend 1.6–2.4g of protein per kg of body weight during a cutting phase to maximise muscle retention. A 70 kg person should aim for 112–168g of protein daily. This is higher than maintenance recommendations precisely because the calorie deficit creates conditions for muscle breakdown — protein intake compensates. Spread intake across 3–4 meals for best muscle protein synthesis throughout the day.",
  },
];

export default function MacroCuttingPage() {
  return (
    <>
      <CalculatorSchema
        name="Cutting Macro Calculator"
        description="Calculate macros for a cutting phase using a 40% protein / 30% carbs / 30% fat split to preserve muscle during fat loss."
        url="https://www.bmicalculatorsingapore.com/macro-calculator/cutting"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Macro Calculator", url: "https://www.bmicalculatorsingapore.com/macro-calculator" },
          { name: "Cutting", url: "https://www.bmicalculatorsingapore.com/macro-calculator/cutting" },
        ]}
      />

      <CalculatorSection
        badge="Cutting · 40% Protein · 30% Carbs · 30% Fat"
        title="Cutting Macro Calculator"
        description="Pre-set for a cutting phase. Calculates your daily protein, carb, and fat targets to lose fat while preserving muscle mass."
      >
        <MacroCalculatorClient defaultGoal="cutting" />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Why High Protein Matters When Cutting
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              During a calorie deficit, your body can break down muscle tissue for energy — a process called
              catabolism. <strong>High protein intake (1.6–2.4g/kg)</strong> is the primary nutritional strategy
              to prevent this and preserve lean mass while losing fat.
            </p>
            <p>
              Protein also has the highest satiety of all macronutrients, keeping you fuller for longer on
              fewer calories. For Singaporeans navigating hawker food on a cut, prioritise protein-rich options:
              grilled chicken (35g per serving), fish (25–30g), tofu (15g per block), and eggs (6g each).
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Cutting Macro Targets by Body Weight
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Body Weight</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Daily Calories (deficit)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Carbs</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Fat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bw: "55 kg", kcal: "1,400", protein: "140g", carbs: "105g", fat: "47g" },
                  { bw: "65 kg", kcal: "1,600", protein: "160g", carbs: "120g", fat: "53g" },
                  { bw: "75 kg", kcal: "1,800", protein: "180g", carbs: "135g", fat: "60g" },
                  { bw: "85 kg", kcal: "2,000", protein: "200g", carbs: "150g", fat: "67g" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.bw}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.kcal} kcal</td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-secondary-dark)" }}>{row.protein}</td>
                    <td className="p-3" style={{ color: "var(--color-primary)" }}>{row.carbs}</td>
                    <td className="p-3" style={{ color: "var(--color-warning)" }}>{row.fat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--color-neutral)" }}>
            Approximate values assuming moderate activity and sedentary TDEE minus 400 kcal. Use the calculator above for personalised targets.
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
