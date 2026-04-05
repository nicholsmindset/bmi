import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Many Calories to Lose Weight? Singapore HPB Guide",
  description:
    "How many calories should you eat to lose weight safely? Singapore HPB-aligned guide. Calculate your daily calorie target, safe deficit, and timeline to reach your goal.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/blog/how-many-calories-to-lose-weight" },
  openGraph: {
    title: "How Many Calories to Lose Weight? Singapore HPB Guide",
    description:
      "How many calories should you eat to lose weight safely? Singapore HPB-aligned guide. Calculate your daily calorie target, safe deficit, and timeline to reach your goal.",
    url: "https://www.bmicalculatorsingapore.com/blog/how-many-calories-to-lose-weight",
    type: "article",
  },
};

export default function CaloriesToLoseWeightPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20 space-y-8">
      <header>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
        >
          Weight Loss Guide
        </p>
        <h1
          className="text-4xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          How Many Calories to Lose Weight?
        </h1>
        <p className="text-sm" style={{ color: "var(--color-neutral)" }}>
          Last updated: April 2026 · Source: Health Promotion Board (HPB) Singapore
        </p>
      </header>

      {/* Quick Answer */}
      <aside
        className="rounded-2xl px-5 py-4"
        style={{ background: "var(--color-primary-light)", borderLeft: "4px solid var(--color-primary)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--color-primary)" }}>
          Quick Answer
        </p>
        <p className="text-sm font-medium mb-3" style={{ color: "var(--color-on-surface)", lineHeight: 1.6 }}>
          To lose weight safely, eat <strong>500–750 kcal below your TDEE</strong> per day.
          This produces 0.5–0.75 kg of fat loss per week.
        </p>
        <ul className="space-y-1">
          {[
            "1 kg of fat = ~7,700 kcal · A 550 kcal/day deficit loses 0.5 kg/week",
            "HPB minimum: 1,200 kcal/day (women) and 1,500 kcal/day (men)",
            "Never exceed 1,000 kcal deficit per day — it risks muscle loss",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
              <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Step 1 — Find Your TDEE
        </h2>
        <p>
          Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is the total calories your body
          burns in a day, including exercise. It&apos;s calculated from your Basal Metabolic Rate (BMR) —
          the calories your body burns at rest — multiplied by your activity level.
        </p>
        <p>
          Use the{" "}
          <Link href="/tdee-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            TDEE Calculator
          </Link>{" "}
          to find your number. A typical 65 kg moderately active Singaporean woman has a TDEE of
          approximately 1,900–2,000 kcal/day.
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Step 2 — Set Your Deficit
        </h2>
        <p>
          One kilogram of body fat contains approximately <strong>7,700 kilocalories</strong>.
          To lose 0.5 kg per week, you need a daily deficit of 7,700 ÷ 7 ≈ <strong>550 kcal</strong>.
          To lose 1.0 kg per week (the maximum HPB recommends), you need an 1,100 kcal/day deficit.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ background: "var(--color-surface-container)" }}>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Weekly Goal</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Daily Deficit</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Weeks to Lose 5 kg</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>HPB Assessment</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["0.25 kg/week", "~275 kcal/day", "~20 weeks", "Very sustainable", true],
              ["0.5 kg/week",  "~550 kcal/day", "~10 weeks", "Recommended",     true],
              ["0.75 kg/week", "~825 kcal/day", "~7 weeks",  "Manageable",       true],
              ["1.0 kg/week",  "~1,100 kcal/day","~5 weeks", "Maximum allowed",  false],
            ].map(([goal, deficit, weeks, assess, ok]) => (
              <tr key={String(goal)} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{goal}</td>
                <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{deficit}</td>
                <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{weeks}</td>
                <td className="p-3 font-medium" style={{ color: ok ? "var(--color-success)" : "var(--color-warning)" }}>{assess}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Singapore HPB Safe Calorie Floors
        </h2>
        <p>
          No matter how aggressive your deficit, <strong>never go below</strong>:
        </p>
        <ul className="space-y-2 ml-4">
          <li className="flex items-start gap-2">
            <span style={{ color: "var(--color-primary)" }}>•</span>
            <span><strong>1,200 kcal/day</strong> for women</span>
          </li>
          <li className="flex items-start gap-2">
            <span style={{ color: "var(--color-primary)" }}>•</span>
            <span><strong>1,500 kcal/day</strong> for men</span>
          </li>
        </ul>
        <p>
          Eating below these thresholds risks nutrient deficiencies, muscle loss, metabolic
          adaptation (the body slowing down to compensate), and is not sustainable long-term.
          Our{" "}
          <Link href="/calorie-deficit-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            Calorie Deficit Calculator
          </Link>{" "}
          automatically enforces these HPB safe floors.
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Calories and Macronutrients
        </h2>
        <p>
          Hitting your calorie target is the primary driver of weight loss. But the split between
          protein, carbohydrates, and fat also matters — especially for preserving muscle.
          Use the{" "}
          <Link href="/macro-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            Macro Calculator
          </Link>{" "}
          to break your daily calorie target into macros, and the{" "}
          <Link href="/protein-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            Protein Calculator
          </Link>{" "}
          to make sure you&apos;re eating enough protein to protect muscle on a deficit.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Frequently Asked Questions
        </h2>
        {[
          {
            q: "How many calories should I eat to lose 0.5 kg per week?",
            a: "Subtract 550 kcal from your TDEE. For example, if your TDEE is 2,000 kcal/day, eat 1,450 kcal/day. This creates a 3,850 kcal weekly deficit, enough to lose 0.5 kg of fat per week.",
          },
          {
            q: "Should I eat back exercise calories?",
            a: "If you selected your actual activity level in the TDEE calculator (e.g., 'moderately active' includes your regular exercise), do not eat back exercise calories. If you selected 'sedentary' and exercise separately, you can eat back 50–75% of the calories burned.",
          },
          {
            q: "Why have I stopped losing weight on the same calories?",
            a: "As you lose weight, your TDEE decreases. Recalculate your TDEE at your new weight and adjust your calorie target. Your body also adapts to sustained deficits — taking a 1–2 week diet break at maintenance can reset metabolism.",
          },
          {
            q: "Is it better to exercise more or eat less to lose weight?",
            a: "Both work, and combining them is most effective. Creating a 500 kcal deficit through a mix of eating 250 kcal less and burning 250 kcal more through exercise is more sustainable than dieting alone and better for muscle retention.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl p-5" style={{ background: "var(--color-surface-container)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{item.q}</h3>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{item.a}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-6 text-center"
        style={{ background: "var(--color-primary-container)" }}
      >
        <p className="font-bold mb-2" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary-dark)" }}>
          Calculate Your Daily Calorie Target
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
          Enter your current weight, goal weight, and activity level for a personalised calorie target and timeline.
        </p>
        <Link
          href="/calorie-deficit-calculator"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ background: "var(--color-primary)", color: "white", textDecoration: "none" }}
        >
          Calorie Deficit Calculator →
        </Link>
      </div>
    </article>
  );
}
