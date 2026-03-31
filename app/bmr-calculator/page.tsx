import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import BMRCalculatorClient from "@/components/calculators/BMRCalculatorClient";

export const metadata: Metadata = {
  title: "BMR Calculator Singapore — Basal Metabolic Rate",
  description:
    "Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation. The most accurate BMR formula for Singaporeans. See your TDEE at all activity levels.",
  alternates: { canonical: "https://bmicalculator.sg/bmr-calculator" },
  openGraph: {
    title: "BMR Calculator Singapore — Basal Metabolic Rate",
    description:
      "Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation. The most accurate BMR formula for Singaporeans. See your TDEE at all activity levels.",
    url: "https://bmicalculator.sg/bmr-calculator",
    type: "website",
  },
  twitter: {
    title: "BMR Calculator Singapore — Basal Metabolic Rate",
    description:
      "Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation. The most accurate BMR formula for Singaporeans. See your TDEE at all activity levels.",
  },
};

const RELATED = [
  {
    name: "TDEE Calculator",
    tagline: "Turn BMR into total daily calories",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#F57C00",
  },
  {
    name: "Calorie Deficit Calculator",
    tagline: "Create a safe weight loss deficit",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
    accent: "#D84315",
  },
  {
    name: "Ideal Weight Calculator",
    tagline: "HPB healthy weight range for your height",
    href: "/ideal-weight-calculator",
    iconPath:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    accent: "#005EB8",
  },
  {
    name: "Protein Calculator",
    tagline: "Daily protein target for your goal",
    href: "/protein-calculator",
    iconPath:
      "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#00695C",
  },
];

export default function BMRPage() {
  return (
    <>
      <CalculatorSchema
        name="BMR Calculator Singapore"
        description="Calculate your Basal Metabolic Rate using the Mifflin-St Jeor equation, optimised for Asian populations."
        url="https://bmicalculator.sg/bmr-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is BMR?",
            answer:
              "Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest to sustain essential functions — breathing, circulation, cell production, and temperature regulation. For most adults, BMR accounts for 60–70% of total daily calorie burn.",
          },
          {
            question: "Is Mifflin-St Jeor accurate for Singaporeans?",
            answer:
              "Yes. Research shows Mifflin-St Jeor predicts resting energy expenditure more accurately for Asian populations than the older Harris-Benedict equation. A 2011 study found Mifflin-St Jeor had the highest accuracy across diverse ethnic groups, including South-East Asians.",
          },
          {
            question: "What is the difference between BMR and TDEE?",
            answer:
              "BMR is the base calories at rest. TDEE (Total Daily Energy Expenditure) multiplies BMR by your activity level to estimate total daily calorie burn. To calculate your TDEE, multiply your BMR by your activity multiplier: 1.2 (sedentary) up to 1.9 (very active).",
          },
          {
            question: "Does BMR decrease with age?",
            answer:
              "Yes. BMR decreases by approximately 1–2% per decade after age 20, primarily due to age-related muscle loss (sarcopenia). Maintaining muscle mass through resistance training is the most effective way to preserve BMR as you age.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMR Calculator", url: "https://bmicalculator.sg/bmr-calculator" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="Mifflin-St Jeor · Basal Metabolic Rate"
        title="BMR Calculator"
        description="Discover your Basal Metabolic Rate — the calories your body burns at rest. Mifflin-St Jeor formula, optimised for Asian populations. See how your BMR translates to TDEE across all activity levels."
      >
        <BMRCalculatorClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-10">
        {/* Why BMR matters for Singaporeans */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Why BMR Matters for Singaporeans
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Singapore&apos;s high-stress, sedentary work culture means many adults unknowingly consume far more than
              their BMR — sometimes without any purposeful exercise to compensate. When your daily intake consistently
              exceeds your TDEE, the excess is stored as body fat regardless of food quality.
            </p>
            <p>
              The Singapore HPB dietary guidelines recommend approximately <strong>1,800 kcal/day for moderately
              active women</strong> and <strong>2,200 kcal/day for moderately active men</strong>. However, for a
              sedentary office worker, these figures can overestimate actual needs by 200–400 kcal — enough to gain
              nearly 10 kg over a year if left unchecked.
            </p>
            <p>
              Knowing your precise BMR lets you set a calorie target grounded in your biology rather than generic
              guidelines. It is the starting point for calculating your TDEE and creating a calorie deficit that is
              tailored to your body weight, height, age, and sex.
            </p>
          </div>
        </div>

        {/* Mifflin-St Jeor formula */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            The Mifflin-St Jeor Formula
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Male",
                formula: "BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) + 5",
                color: "var(--color-primary)",
              },
              {
                label: "Female",
                formula: "BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161",
                color: "var(--color-secondary)",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderLeft: `4px solid ${row.color}` }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: row.color }}>
                  {row.label}
                </p>
                <code
                  className="text-sm font-mono block"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {row.formula}
                </code>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: "var(--color-neutral)" }}>
            Published in 1990 by Mifflin and St Jeor, this equation has been validated in multiple independent
            studies as the most accurate resting metabolic rate predictor for people of Asian descent — more reliable
            than the older Harris-Benedict equation from 1919.
          </p>
        </div>

        {/* BMR to TDEE breakdown */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            From BMR to TDEE — Activity Multipliers
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
                    TDEE Example (BMR = 1,500 kcal)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "Sedentary", mult: "× 1.2", tdee: "1,800 kcal" },
                  { level: "Lightly Active", mult: "× 1.375", tdee: "2,063 kcal" },
                  { level: "Moderately Active", mult: "× 1.55", tdee: "2,325 kcal" },
                  { level: "Active", mult: "× 1.725", tdee: "2,588 kcal" },
                  { level: "Very Active", mult: "× 1.9", tdee: "2,850 kcal" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>
                      {row.level}
                    </td>
                    <td className="p-3 font-bold" style={{ color: "var(--color-primary)" }}>
                      {row.mult}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.tdee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Age and BMR */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            How BMR Changes With Age
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { age: "Age 25", change: "Baseline", note: "Peak muscle mass for most adults" },
              { age: "Age 45", change: "−5 to −10%", note: "Gradual decline from muscle loss" },
              { age: "Age 65", change: "−15 to −20%", note: "Significant impact without resistance training" },
            ].map((s) => (
              <div
                key={s.age}
                className="rounded-2xl p-5 text-center"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p
                  className="text-xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}
                >
                  {s.age}
                </p>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>
                  {s.change}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>
                  {s.note}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: "var(--color-on-surface-variant)" }}>
            Resistance training (lifting weights, bodyweight exercises) is the most effective strategy to slow
            age-related BMR decline by preserving lean muscle mass. Even 2 sessions per week can significantly
            offset the metabolic slowdown associated with ageing.
          </p>
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
                q: "What is BMR?",
                a: "Basal Metabolic Rate (BMR) is the number of calories your body burns at complete rest to sustain essential functions — breathing, circulation, cell production, and temperature regulation. For most adults, BMR accounts for 60–70% of total daily calorie burn.",
              },
              {
                q: "Is Mifflin-St Jeor accurate for Singaporeans?",
                a: "Yes. Research shows Mifflin-St Jeor predicts resting energy expenditure more accurately for Asian populations than the older Harris-Benedict equation. A 2011 study found Mifflin-St Jeor had the highest accuracy across diverse ethnic groups, including South-East Asians.",
              },
              {
                q: "What is the difference between BMR and TDEE?",
                a: "BMR is the base calories burned at rest. TDEE (Total Daily Energy Expenditure) multiplies BMR by your activity level to estimate total daily calorie burn. Multiply your BMR by 1.2 (sedentary) up to 1.9 (very active) to find your TDEE.",
              },
              {
                q: "Does BMR decrease with age?",
                a: "Yes. BMR decreases by approximately 1–2% per decade after age 20, primarily due to age-related muscle loss (sarcopenia). Maintaining muscle mass through resistance training is the most effective way to preserve BMR as you age.",
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
