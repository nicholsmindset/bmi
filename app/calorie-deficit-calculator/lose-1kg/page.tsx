import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import CalorieDeficitClient from "@/components/calculators/CalorieDeficitClient";

export const metadata: Metadata = {
  title: "How to Lose 1kg Per Week — Calorie Deficit Calculator Singapore",
  description:
    "Calculate exactly how many calories to eat to lose 1kg per week safely. Singapore HPB-aligned calorie deficit guide with personalised daily targets.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/calorie-deficit-calculator/lose-1kg" },
  openGraph: {
    title: "How to Lose 1kg Per Week — Calorie Deficit Calculator Singapore",
    description: "Calculate exactly how many calories to eat to lose 1kg per week safely. Singapore HPB-aligned calorie deficit guide with personalised daily targets.",
    url: "https://www.bmicalculatorsingapore.com/calorie-deficit-calculator/lose-1kg",
    type: "website",
  },
  twitter: {
    title: "How to Lose 1kg Per Week — Calorie Deficit Calculator Singapore",
    description: "Calculate exactly how many calories to eat to lose 1kg per week safely. Singapore HPB-aligned calorie deficit guide with personalised daily targets.",
  },
};

export default function Lose1kgPage() {
  return (
    <>
      <CalculatorSchema
        name="Lose 1kg Per Week — Calorie Deficit Calculator"
        description="Calculate the calorie deficit needed to lose 1kg per week using Singapore HPB guidelines."
        url="https://www.bmicalculatorsingapore.com/calorie-deficit-calculator/lose-1kg"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "How many calories do I need to cut to lose 1kg per week?",
            answer:
              "To lose 1kg per week, you need a daily calorie deficit of approximately 1,100 kcal (since 1kg of fat = ~7,700 kcal ÷ 7 days). This is the maximum deficit recommended by Singapore HPB. Most people find 0.5–0.75 kg/week more sustainable.",
          },
          {
            question: "Is losing 1kg per week safe?",
            answer:
              "Losing 1kg per week is at the upper limit of what HPB considers safe. It requires a ~1,100 kcal daily deficit and may lead to muscle loss without adequate protein intake (1.6–2.2g/kg body weight). A more moderate pace of 0.5kg/week is sustainable long-term.",
          },
          {
            question: "How long will it take to lose 10kg at 1kg per week?",
            answer:
              "At 1kg per week, losing 10kg takes approximately 10 weeks. However, metabolic adaptation typically slows weight loss after 4–6 weeks. Most people lose 1kg/week for the first few weeks before rate decreases.",
          },
          {
            question: "What should I eat to lose 1kg per week in Singapore?",
            answer:
              "Focus on high-protein foods to preserve muscle: chicken breast (chicken rice without skin), fish (fish soup), tofu, and eggs. Reduce refined carbs like white rice by half and avoid sugary drinks. Track calories using the calculator above for your personalised target.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Calorie Deficit Calculator", url: "https://www.bmicalculatorsingapore.com/calorie-deficit-calculator" },
          { name: "Lose 1kg Per Week", url: "https://www.bmicalculatorsingapore.com/calorie-deficit-calculator/lose-1kg" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="Lose 1kg/Week · Maximum Safe Rate"
        title="How to Lose 1kg Per Week"
        description="Losing 1kg per week requires a daily calorie deficit of ~1,100 kcal — the maximum recommended by Singapore HPB. Use the calculator below to find your personalised daily calorie target. Select 1.0 kg/week as your goal."
      >
        <CalorieDeficitClient />
        <div className="mt-6"><MedicalDisclaimer context="calorie-deficit" /></div>
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            What It Takes to Lose 1kg Per Week
          </h2>
          <div className="space-y-4 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              One kilogram of body fat contains approximately <strong>7,700 kcal</strong> of stored energy.
              To lose 1kg in 7 days, you must burn 7,700 more calories than you consume — a daily deficit of
              approximately <strong>1,100 kcal</strong>.
            </p>
            <p>
              For most Singaporeans with a TDEE of 1,700–2,200 kcal, this means eating <strong>600–1,100 kcal per day</strong> —
              which is very restrictive. This is why 0.5kg/week (550 kcal deficit) is generally more sustainable and
              preserves more muscle mass.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Singapore Hawker Food Guide for a Calorie Deficit
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Hawker Dish</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Calories</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Deficit-Friendly?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dish: "Chicken Rice (no skin)", cal: "~450 kcal", prot: "~30g", ok: true },
                  { dish: "Fish Soup with Rice",    cal: "~380 kcal", prot: "~28g", ok: true },
                  { dish: "Yong Tau Foo (clear soup)", cal: "~320 kcal", prot: "~22g", ok: true },
                  { dish: "Wonton Noodle Soup",    cal: "~430 kcal", prot: "~20g", ok: true },
                  { dish: "Char Kway Teow",        cal: "~750 kcal", prot: "~15g", ok: false },
                  { dish: "Nasi Lemak (full set)", cal: "~700 kcal", prot: "~18g", ok: false },
                  { dish: "Mee Rebus",             cal: "~500 kcal", prot: "~17g", ok: false },
                  { dish: "Teh Tarik (full sugar)", cal: "~170 kcal", prot: "~5g", ok: false },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.dish}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.cal}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.prot}</td>
                    <td className="p-3 font-medium" style={{ color: row.ok ? "var(--color-success)" : "var(--color-error)" }}>
                      {row.ok ? "✓ Good choice" : "✗ Limit"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
