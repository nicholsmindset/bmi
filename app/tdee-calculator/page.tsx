import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import TDEECalculatorClient from "@/components/calculators/TDEECalculatorClient";

export const metadata: Metadata = {
  title: "TDEE Calculator Singapore — Total Daily Energy Expenditure",
  description:
    "Calculate your Total Daily Energy Expenditure (TDEE) using Mifflin-St Jeor. Singapore HPB-aligned activity levels. Know exactly how many calories you burn per day.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/tdee-calculator" },
  openGraph: {
    title: "TDEE Calculator Singapore — Total Daily Energy Expenditure",
    description:
      "Calculate your Total Daily Energy Expenditure (TDEE) using Mifflin-St Jeor. Singapore HPB-aligned activity levels. Know exactly how many calories you burn per day.",
    url: "https://www.bmicalculatorsingapore.com/tdee-calculator",
    type: "website",
  },
  twitter: {
    title: "TDEE Calculator Singapore — Total Daily Energy Expenditure",
    description:
      "Calculate your Total Daily Energy Expenditure (TDEE) using Mifflin-St Jeor. Singapore HPB-aligned activity levels. Know exactly how many calories you burn per day.",
  },
};

const RELATED = [
  {
    name: "Calorie Deficit Calculator",
    tagline: "Create your deficit from TDEE",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
    accent: "#F57C00",
  },
  {
    name: "BMR Calculator",
    tagline: "Understand your base metabolic rate",
    href: "/bmr-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#005EB8",
  },
  {
    name: "Macro Calculator",
    tagline: "Break your TDEE into macros",
    href: "/macro-calculator",
    iconPath:
      "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#7B1FA2",
  },
  {
    name: "Calorie Calculator",
    tagline: "Daily calorie target for your goal",
    href: "/calorie-calculator",
    iconPath:
      "M18.5 3H6c-1.1 0-2 .9-2 2v5.71c0 3.83 2.95 7.18 6.78 7.29 3.96.12 7.22-3.06 7.22-7v-1h.5c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3zM16 5v3H6V5h10zm2.5 3H18V5h.5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8zM4 19h16v2H4z",
    accent: "#00695C",
  },
];

export default function TDEEPage() {
  return (
    <>
      <CalculatorSchema
        name="TDEE Calculator Singapore"
        description="Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor formula with Singapore HPB-aligned activity levels."
        url="https://www.bmicalculatorsingapore.com/tdee-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is TDEE?",
            answer:
              "TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day, accounting for your Basal Metabolic Rate (BMR) and physical activity. Knowing your TDEE is the foundation of any nutrition plan — whether your goal is weight loss, maintenance, or muscle gain.",
          },
          {
            question: "How is TDEE calculated?",
            answer:
              "TDEE = BMR × Activity Multiplier. This calculator uses the Mifflin-St Jeor formula for BMR (proven more accurate for Asian populations than Harris-Benedict), then multiplies by your activity level: sedentary 1.2×, lightly active 1.375×, moderately active 1.55×, active 1.725×, very active 1.9×.",
          },
          {
            question: "How many calories should I eat to lose weight in Singapore?",
            answer:
              "Subtract 500 calories from your TDEE to lose approximately 0.5 kg per week — the safest sustainable rate. Singapore HPB recommends women consume at least 1,200 kcal/day and men at least 1,500 kcal/day, even in a deficit.",
          },
          {
            question: "Why does TDEE change over time?",
            answer:
              "As you lose weight, your TDEE decreases because you have less body mass to maintain. Recalculate your TDEE every 2–4 weeks during a weight loss phase to avoid a calorie surplus. Muscle gain also increases TDEE over time.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "TDEE Calculator", url: "https://www.bmicalculatorsingapore.com/tdee-calculator" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="Mifflin-St Jeor · Singapore HPB Activity Levels"
        title="TDEE Calculator"
        description="Total Daily Energy Expenditure — the exact number of calories your body burns each day. Set your goal to see your personalised calorie target for weight loss, maintenance, or muscle gain."
      >
        <TDEECalculatorClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-10">
        {/* What is TDEE */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            What Is TDEE and Why Does It Matter?
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              TDEE stands for Total Daily Energy Expenditure — the total number of calories your body burns over 24 hours,
              including your resting metabolic rate (BMR), physical activity, and the thermic effect of food (digestion).
            </p>
            <p>
              Understanding your TDEE is the single most important number in nutrition science. Eat above your TDEE and
              you gain weight. Eat below it and you lose weight. Match it and you maintain. Every sustainable diet or
              muscle-building programme starts with an accurate TDEE estimate.
            </p>
            <p>
              This calculator uses the <strong>Mifflin-St Jeor equation</strong> — validated as the most accurate BMR
              predictor for Asian populations in peer-reviewed literature — combined with Singapore HPB activity level
              definitions.
            </p>
          </div>
        </div>

        {/* TDEE components */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            What Makes Up Your TDEE?
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                stat: "60–70%",
                label: "BMR",
                desc: "Basal Metabolic Rate — calories burned at complete rest to sustain breathing, circulation, and cell repair",
              },
              {
                stat: "20–30%",
                label: "Activity (EAT + NEAT)",
                desc: "Calories from exercise (EAT) and everyday movement like walking and fidgeting (NEAT)",
              },
              {
                stat: "8–10%",
                label: "Thermic Effect of Food",
                desc: "Energy used to digest food — protein costs the most at 20–30% of its own calorie content",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}
                >
                  {s.stat}
                </p>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>
                  {s.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity multipliers table */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Activity Level Multipliers Explained
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>
                    Activity Level
                  </th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>
                    Multiplier
                  </th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "Sedentary", mult: "1.2×", desc: "Desk job, little or no exercise" },
                  { level: "Lightly Active", mult: "1.375×", desc: "Light exercise 1–3 days/week" },
                  { level: "Moderately Active", mult: "1.55×", desc: "Moderate exercise 3–5 days/week" },
                  { level: "Active", mult: "1.725×", desc: "Hard exercise 6–7 days/week" },
                  { level: "Very Active", mult: "1.9×", desc: "Physical job or twice-daily training" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {row.level}
                    </td>
                    <td className="p-3 font-bold" style={{ color: "var(--color-primary)" }}>
                      {row.mult}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--color-neutral)" }}>
            Most office workers in Singapore fall into Sedentary or Lightly Active. When in doubt, choose a lower
            activity level — it is easier to eat more if you are losing too fast than to reverse unintended weight gain.
          </p>
        </div>

        {/* Goal calorie adjustments */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Calorie Targets by Goal
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                goal: "Lose Weight",
                adjust: "TDEE − 500 kcal",
                result: "≈ 0.5 kg/week fat loss",
                color: "var(--color-warning)",
              },
              {
                goal: "Maintain Weight",
                adjust: "TDEE",
                result: "Weight-stable intake",
                color: "var(--color-primary)",
              },
              {
                goal: "Gain Muscle",
                adjust: "TDEE + 300 kcal",
                result: "Lean bulk, minimal fat gain",
                color: "var(--color-secondary)",
              },
            ].map((g) => (
              <div
                key={g.goal}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderTop: `3px solid ${g.color}` }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: g.color }}>
                  {g.goal}
                </p>
                <p className="text-base font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  {g.adjust}
                </p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  {g.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is TDEE?",
                a: "TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day, accounting for your Basal Metabolic Rate and physical activity level. It is the starting point for any nutrition plan — whether you want to lose, maintain, or gain weight.",
              },
              {
                q: "How is TDEE calculated?",
                a: "TDEE = BMR × Activity Multiplier. This calculator uses the Mifflin-St Jeor formula which is more accurate for Asian populations. Activity multipliers range from 1.2 (sedentary) to 1.9 (very active).",
              },
              {
                q: "How many calories should I eat to lose 0.5 kg per week?",
                a: "Subtract 500 calories from your TDEE. This creates a 3,500 kcal weekly deficit, which equals approximately 0.5 kg of fat loss. Singapore HPB recommends this rate as the most sustainable target for long-term success.",
              },
              {
                q: "Why does TDEE change over time?",
                a: "As you lose weight, your BMR decreases because you have less body mass to sustain. Recalculate every 2–4 weeks during weight loss to keep your calorie target accurate and avoid a weight-loss plateau.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>
                  {q}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {a}
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
