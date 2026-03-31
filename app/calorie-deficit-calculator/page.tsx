import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CalorieDeficitClient from "@/components/calculators/CalorieDeficitClient";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator Singapore — Safe Weight Loss Calories",
  description:
    "Calculate your daily calorie deficit to lose weight safely. Singapore HPB-aligned. Enter weight, height, and goal for your personalised calorie target and timeline.",
  alternates: { canonical: "https://bmicalculator.sg/calorie-deficit-calculator" },
  openGraph: {
    title: "Calorie Deficit Calculator Singapore — Safe Weight Loss Calories",
    description:
      "Calculate your daily calorie deficit to lose weight safely. Singapore HPB-aligned. Enter weight, height, and goal for your personalised calorie target and timeline.",
    url: "https://bmicalculator.sg/calorie-deficit-calculator",
    type: "website",
  },
  twitter: {
    title: "Calorie Deficit Calculator Singapore — Safe Weight Loss Calories",
    description:
      "Calculate your daily calorie deficit to lose weight safely. Singapore HPB-aligned. Enter weight, height, and goal for your personalised calorie target and timeline.",
  },
};

const RELATED = [
  {
    name: "TDEE Calculator",
    tagline: "Total daily energy expenditure",
    href: "/tdee-calculator",
    iconPath: "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#F57C00",
  },
  {
    name: "Macro Calculator",
    tagline: "Break your calories into macros",
    href: "/macro-calculator",
    iconPath: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#7B1FA2",
  },
  {
    name: "Protein Intake Calculator",
    tagline: "Protect muscle on a deficit",
    href: "/protein-calculator",
    iconPath: "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#00695C",
  },
  {
    name: "BMR Calculator",
    tagline: "Find your base metabolic rate",
    href: "/bmr-calculator",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#005EB8",
  },
];

export default function CalorieDeficitPage() {
  return (
    <>
      <CalculatorSchema
        name="Calorie Deficit Calculator Singapore"
        description="Calculate your daily calorie deficit to lose weight safely using Singapore HPB guidelines."
        url="https://bmicalculator.sg/calorie-deficit-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "How many calories should I eat to lose 0.5kg per week?",
            answer:
              "To lose 0.5kg per week, create a daily calorie deficit of approximately 550 calories below your TDEE. Use Singapore HPB guidelines: women should not go below 1,200 calories/day and men not below 1,500 calories/day.",
          },
          {
            question: "Is a 500 calorie deficit safe?",
            answer:
              "Yes, a 500 calorie daily deficit is generally safe and results in approximately 0.5kg of weight loss per week. Avoid deficits greater than 1,000 calories per day.",
          },
          {
            question: "How long to lose 5kg on a calorie deficit?",
            answer:
              "At a 500 calorie daily deficit (0.5kg/week), losing 5kg takes approximately 10 weeks. At a more aggressive 750 calorie deficit (0.75kg/week), it takes around 7 weeks.",
          },
          {
            question: "What is the minimum safe calories per day in Singapore?",
            answer:
              "Singapore HPB guidelines recommend women consume at least 1,200 calories per day and men at least 1,500 calories per day, even when in a calorie deficit for weight loss.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Calorie Deficit Calculator", url: "https://bmicalculator.sg/calorie-deficit-calculator" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="Calorie Deficit · HPB-Aligned"
        title="Calorie Deficit Calculator"
        description="Enter your current weight, target weight, and activity level to find your daily calorie target, deficit, and how many weeks it will take to reach your goal."
      >
        <CalorieDeficitClient />
        <div className="mt-6"><MedicalDisclaimer context="calorie-deficit" /></div>
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit format="leaderboard" slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"} className="mx-auto" />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8">
        {/* HPB context */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            How to Calculate Your Calorie Deficit
          </h2>
          <div className="space-y-4 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              A calorie deficit means consuming fewer calories than your body burns. Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is
              calculated using the <strong>Mifflin-St Jeor equation</strong> — the most accurate BMR formula for Asian populations — multiplied by
              your activity level.
            </p>
            <p>
              <strong>1 kg of body fat ≈ 7,700 kcal.</strong> To lose 0.5 kg/week, you need a 550 kcal daily deficit.
              To lose 1.0 kg/week (the maximum recommended by HPB), you need approximately 1,100 kcal deficit per day.
            </p>
          </div>
        </div>

        {/* Safety guidelines */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Singapore HPB Safe Weight Loss Guidelines
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Weekly Goal</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Daily Deficit</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Weeks to Lose 5kg</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>HPB Assessment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { goal: "0.25 kg/week", deficit: "~275 kcal/day", weeks: "~20 weeks", assess: "Very sustainable", ok: true },
                  { goal: "0.5 kg/week",  deficit: "~550 kcal/day", weeks: "~10 weeks", assess: "Recommended", ok: true },
                  { goal: "0.75 kg/week", deficit: "~825 kcal/day", weeks: "~7 weeks",  assess: "Manageable",    ok: true },
                  { goal: "1.0 kg/week",  deficit: "~1,100 kcal/day", weeks: "~5 weeks", assess: "Maximum recommended", ok: false },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.goal}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.deficit}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.weeks}</td>
                    <td className="p-3 font-medium" style={{ color: row.ok ? "var(--color-success)" : "var(--color-warning)" }}>
                      {row.assess}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--color-neutral)" }}>
            Minimum intake: 1,200 kcal/day (women) and 1,500 kcal/day (men) per HPB guidelines.
            The calculator will not set a daily target below these thresholds.
          </p>
        </div>

        <AdUnit format="responsive" slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"} />

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Should I eat back calories burned from exercise?",
                a: "It depends on how you set your activity level. If you selected 'moderate' or above and exercise is included in that estimate, do not eat back calories. If you selected 'sedentary' and exercise separately, you may eat back 50–75% of exercise calories to avoid over-restriction.",
              },
              {
                q: "Why is my daily calorie target higher than expected?",
                a: "The calculator uses your activity level to estimate TDEE. A 75 kg moderately active person burns around 2,325 kcal/day. Cutting too aggressively risks muscle loss — HPB recommends a maximum deficit of 1,000 kcal/day.",
              },
              {
                q: "What happens when I reach my target weight?",
                a: "Switch from a deficit to maintenance calories (your TDEE at your new weight). Recalculate using the TDEE Calculator to find your new maintenance intake.",
              },
              {
                q: "Can I use this calculator if I have diabetes or other conditions?",
                a: "This calculator provides general estimates only. If you have diabetes, kidney disease, or are under medical supervision, consult your doctor or dietitian before making significant dietary changes.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: "var(--color-surface-container)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{item.q}</h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <RelatedCalculators items={RELATED} />
      </section>
    </>
  );
}
