import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import MacroCalculatorClient from "@/components/calculators/MacroCalculatorClient";

export const metadata: Metadata = {
  title: "Bulking Macro Calculator — Protein, Carbs & Fat for Muscle Gain",
  description:
    "Calculate macros for a clean bulk. 30% protein / 50% carbs / 20% fat to fuel muscle growth without excessive fat gain.",
  alternates: { canonical: "https://bmicalculator.sg/macro-calculator/bulking" },
  openGraph: {
    title: "Bulking Macro Calculator — Protein, Carbs & Fat for Muscle Gain",
    description: "Calculate macros for a clean bulk. 30% protein / 50% carbs / 20% fat to fuel muscle growth without excessive fat gain.",
    url: "https://bmicalculator.sg/macro-calculator/bulking",
    type: "website",
  },
  twitter: {
    title: "Bulking Macro Calculator — Protein, Carbs & Fat for Muscle Gain",
    description: "Calculate macros for a clean bulk. 30% protein / 50% carbs / 20% fat to fuel muscle growth without excessive fat gain.",
  },
};

const FAQS = [
  {
    question: "How many calories above TDEE should I eat when bulking?",
    answer:
      "A lean bulk surplus of 200–400 kcal above your TDEE maximises muscle gain while minimising fat accumulation. This produces approximately 0.25–0.5 kg of weight gain per week — a controlled rate where most gains are lean tissue. Larger surpluses (500+ kcal) increase the rate of fat gain without proportionally increasing muscle synthesis. For Singaporeans eating hawker food, an extra 200–400 kcal might mean one additional protein-rich serving (chicken breast, fish, or eggs) rather than a full extra meal.",
  },
  {
    question: "What is a clean bulk vs dirty bulk?",
    answer:
      "A clean bulk involves eating a modest calorie surplus (200–400 kcal) from whole foods — lean proteins, complex carbohydrates, and healthy fats — to gain muscle with minimal fat. A dirty bulk involves eating anything in large quantities to maximise calorie surplus, leading to rapid weight gain but excessive fat accumulation that requires a longer cutting phase. Clean bulking is preferred by most evidence-based nutritionists and is more practical within Singapore&apos;s hawker food culture.",
  },
];

export default function MacroBulkingPage() {
  return (
    <>
      <CalculatorSchema
        name="Bulking Macro Calculator"
        description="Calculate macros for a clean bulk using a 30% protein / 50% carbs / 20% fat split to fuel muscle growth without excessive fat gain."
        url="https://bmicalculator.sg/macro-calculator/bulking"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Macro Calculator", url: "https://bmicalculator.sg/macro-calculator" },
          { name: "Bulking", url: "https://bmicalculator.sg/macro-calculator/bulking" },
        ]}
      />

      <CalculatorSection
        badge="Bulking · 30% Protein · 50% Carbs · 20% Fat"
        title="Bulking Macro Calculator"
        description="Pre-set for a bulking phase. Calculates protein, carb, and fat targets to maximise muscle gain with a controlled calorie surplus."
      >
        <MacroCalculatorClient defaultGoal="bulking" />
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
            Why Carbs Are King When Bulking
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The 50% carbohydrate allocation in a bulking macro split reflects carbohydrates&apos; role as the primary
              fuel for high-intensity resistance training. Muscle glycogen — stored carbohydrate — is the body&apos;s
              preferred energy source during heavy compound lifts. Adequate carbs improve training performance,
              which directly drives muscle hypertrophy.
            </p>
            <p>
              For Singaporeans, this means hawker staples like brown rice, noodles, and roti prata can work
              in your favour during a bulk. Pair carb-rich meals with a <strong>protein source of at least
              30–40g</strong> (chicken, fish, tofu, or eggs) to optimise muscle protein synthesis post-training.
            </p>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Clean Bulk Calorie Targets
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Surplus Size", value: "+200–400 kcal", desc: "Above TDEE daily", color: "var(--color-secondary)" },
              { label: "Weekly Gain", value: "0.25–0.5 kg", desc: "Mostly lean tissue", color: "var(--color-primary)" },
              { label: "Protein Target", value: "1.6–2.0g/kg", desc: "Per kg bodyweight", color: "var(--color-warning)" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p className="text-2xl font-extrabold mb-1" style={{ fontFamily: "var(--font-manrope)", color: s.color }}>{s.value}</p>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>{s.label}</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{s.desc}</p>
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
