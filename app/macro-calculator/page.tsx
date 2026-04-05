import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import MacroCalculatorClient from "@/components/calculators/MacroCalculatorClient";

export const metadata: Metadata = {
  title: "Macro Calculator Singapore — Protein, Carbs & Fat Targets",
  description:
    "Calculate your daily macronutrient targets. Choose cutting, bulking, maintenance, or keto and get your personalised protein, carb, and fat goals in grams.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/macro-calculator" },
  openGraph: {
    title: "Macro Calculator Singapore — Protein, Carbs & Fat Targets",
    description:
      "Calculate your daily macronutrient targets. Choose cutting, bulking, maintenance, or keto and get your personalised protein, carb, and fat goals in grams.",
    url: "https://www.bmicalculatorsingapore.com/macro-calculator",
    type: "website",
  },
  twitter: {
    title: "Macro Calculator Singapore — Protein, Carbs & Fat Targets",
    description:
      "Calculate your daily macronutrient targets. Choose cutting, bulking, maintenance, or keto and get your personalised protein, carb, and fat goals in grams.",
  },
};

const FAQS = [
  {
    question: "What is a macro calculator?",
    answer:
      "A macro calculator determines how many grams of protein, carbohydrates, and fat you should eat daily based on your calorie target and health goal. Macros are tracked by grams: protein and carbs = 4 kcal/g, fat = 9 kcal/g.",
  },
  {
    question: "How much protein do I need per day?",
    answer:
      "For muscle building, aim for 1.6–2.2g of protein per kg of body weight (ISSN guidelines). For maintenance, 0.8–1.2g/kg is sufficient. A 65kg Singaporean building muscle needs 104–143g of protein daily — equivalent to about 4 chicken breasts.",
  },
  {
    question: "What is the best macro split for fat loss?",
    answer:
      "For cutting, a 40% protein / 30% carbs / 30% fat split is effective. Higher protein during a deficit preserves muscle mass and increases satiety. Singapore HPB recommends keeping dietary fat below 30% of total calories for cardiovascular health.",
  },
  {
    question: "Can I do keto in Singapore?",
    answer:
      "Keto is possible in Singapore but requires careful hawker food navigation. Most hawker dishes are high in carbs (rice, noodles). Suitable options: grilled fish, roasted meats without sauce, tofu, eggs, and most vegetable dishes. Be aware that many sauces contain sugar.",
  },
];

const RELATED = [
  {
    name: "Calorie Calculator",
    tagline: "Get your daily calorie target first",
    href: "/calorie-calculator",
    iconPath:
      "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#005EB8",
  },
  {
    name: "Protein Intake Calculator",
    tagline: "Detailed protein intake by goal",
    href: "/protein-calculator",
    iconPath:
      "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#00695C",
  },
  {
    name: "Calorie Deficit Calculator",
    tagline: "Weight loss calorie planning",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#7B1FA2",
  },
  {
    name: "TDEE Calculator",
    tagline: "Total daily energy expenditure",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#F57C00",
  },
];

export default function MacroCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Macro Calculator Singapore"
        description="Calculate your daily protein, carbohydrate, and fat targets based on your calorie goal and objective."
        url="https://www.bmicalculatorsingapore.com/macro-calculator"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Macro Calculator", url: "https://www.bmicalculatorsingapore.com/macro-calculator" },
        ]}
      />

      <CalculatorSection
        badge="Protein · Carbs · Fat · All Goals"
        title="Macro Calculator"
        description="Calculate your daily protein, carbohydrate, and fat targets based on your calorie goal and objective. Choose cutting, bulking, maintenance, keto, or high-protein splits."
      >
        <MacroCalculatorClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8 pb-16">
        {/* Macro Splits Reference Guide */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Macro Splits Reference Guide
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            Different goals require different macronutrient ratios. The percentages below represent
            the proportion of total daily calories from each macronutrient.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Goal
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Protein
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Carbs
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Fat
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Best For
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    goal: "Cutting",
                    protein: "40%",
                    carbs: "30%",
                    fat: "30%",
                    bestFor: "Fat loss while preserving muscle",
                  },
                  {
                    goal: "Bulking",
                    protein: "30%",
                    carbs: "50%",
                    fat: "20%",
                    bestFor: "Muscle gain with controlled fat gain",
                  },
                  {
                    goal: "Maintenance",
                    protein: "30%",
                    carbs: "40%",
                    fat: "30%",
                    bestFor: "Body recomposition, performance",
                  },
                  {
                    goal: "Keto",
                    protein: "25%",
                    carbs: "5%",
                    fat: "70%",
                    bestFor: "Rapid fat loss, blood sugar control",
                  },
                  {
                    goal: "High Protein",
                    protein: "40%",
                    carbs: "35%",
                    fat: "25%",
                    bestFor: "Satiety, muscle retention on deficit",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <td
                      className="p-3 font-semibold"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {row.goal}
                    </td>
                    <td
                      className="p-3"
                      style={{ color: "var(--color-secondary-dark)" }}
                    >
                      {row.protein}
                    </td>
                    <td
                      className="p-3"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {row.carbs}
                    </td>
                    <td
                      className="p-3"
                      style={{ color: "var(--color-warning)" }}
                    >
                      {row.fat}
                    </td>
                    <td className="p-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.bestFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Which Macro Split Is Right For You */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Which Macro Split Is Right For You?
          </h2>
          <div className="space-y-3">
            {[
              {
                label: "Cutting",
                color: "#7B1FA2",
                desc:
                  "You are eating below your TDEE to lose body fat. Higher protein (40%) preserves lean muscle mass during the deficit, while moderate carbs keep training performance. Suitable for most Singaporeans looking to lose weight.",
              },
              {
                label: "Bulking",
                color: "#00695C",
                desc:
                  "You are eating above your TDEE to build muscle. Higher carbs (50%) fuel intense training sessions and support glycogen replenishment. Best combined with a structured resistance training programme.",
              },
              {
                label: "Maintenance",
                color: "#005EB8",
                desc:
                  "You are eating at your TDEE to maintain weight and body composition. A balanced split supports energy levels, recovery, and long-term adherence. Ideal for those satisfied with current weight.",
              },
              {
                label: "Keto",
                color: "#B71C1C",
                desc:
                  "Very low carbs (5%) induce ketosis — a metabolic state where fat becomes the primary fuel source. Effective for rapid fat loss and blood sugar management, but difficult to sustain with Singapore's carb-heavy hawker food culture.",
              },
              {
                label: "High Protein",
                color: "#E65100",
                desc:
                  "Maximum protein intake increases satiety, reduces hunger, and preserves muscle on a deficit. Evidence strongly supports high protein for body recomposition. A practical choice for active Singaporeans who train regularly.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 flex gap-4"
                style={{ background: "var(--color-surface-container)" }}
              >
                <div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ background: item.color }}
                />
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: item.color }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {faq.question}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RelatedCalculators items={RELATED} />
      </section>
    </>
  );
}
