import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CalorieCalculatorClient from "@/components/calculators/CalorieCalculatorClient";

export const metadata: Metadata = {
  title: "Calorie Calculator Singapore — How Many Calories Should I Eat?",
  description:
    "Calculate your daily calorie needs using Singapore HPB dietary guidelines. Enter your stats for a personalised calorie target to lose, maintain, or gain weight.",
  alternates: { canonical: "https://bmicalculator.sg/calorie-calculator" },
  openGraph: {
    title: "Calorie Calculator Singapore — How Many Calories Should I Eat?",
    description:
      "Calculate your daily calorie needs using Singapore HPB dietary guidelines. Enter your stats for a personalised calorie target to lose, maintain, or gain weight.",
    url: "https://bmicalculator.sg/calorie-calculator",
    type: "website",
  },
  twitter: {
    title: "Calorie Calculator Singapore — How Many Calories Should I Eat?",
    description:
      "Calculate your daily calorie needs using Singapore HPB dietary guidelines. Enter your stats for a personalised calorie target to lose, maintain, or gain weight.",
  },
};

const FAQS = [
  {
    question: "How many calories should I eat per day in Singapore?",
    answer:
      "For adults with moderate activity, Singapore HPB recommends approximately 2,200 kcal/day for men and 1,800 kcal/day for women. However, individual needs vary significantly based on weight, height, age, and activity level. Use this calculator for your personalised target.",
  },
  {
    question: "Is 1,200 calories enough per day?",
    answer:
      "1,200 kcal/day is the minimum Singapore HPB recommends for women in a calorie deficit. Below this level, it becomes very difficult to meet micronutrient needs. Men should not go below 1,500 kcal/day. For sustainable weight loss, a 500 kcal daily deficit from TDEE is safer and more effective.",
  },
  {
    question: "How do I count calories for Singapore hawker food?",
    answer:
      "Common hawker dishes: Chicken rice ~450 kcal, Laksa ~589 kcal, Fish ball noodle soup ~350 kcal, Char kway teow ~744 kcal, Roti prata ~270 kcal per piece. The Health Promotion Board's My Healthy Plate guide recommends ¼ grains, ¼ protein, and ½ vegetables at each meal.",
  },
  {
    question: "Do I need to count calories to lose weight?",
    answer:
      "Calorie counting is one of the most evidence-based approaches to weight management. While not mandatory, understanding your energy balance significantly improves success rates. Singapore National Registry of Diseases data shows obesity rates are rising — awareness of portion sizes and calorie content is a key public health goal.",
  },
];

const RELATED = [
  {
    name: "Calorie Deficit Calculator",
    tagline: "Turn your target into a deficit plan",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#7B1FA2",
  },
  {
    name: "TDEE Calculator",
    tagline: "Your total daily energy expenditure",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#F57C00",
  },
  {
    name: "Macro Calculator",
    tagline: "Break calories into protein, carbs & fat",
    href: "/macro-calculator",
    iconPath:
      "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#005EB8",
  },
  {
    name: "BMR Calculator",
    tagline: "Your base metabolic rate",
    href: "/bmr-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#007F5F",
  },
];

export default function CalorieCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Calorie Calculator Singapore"
        description="Calculate your daily calorie needs using Singapore HPB dietary guidelines."
        url="https://bmicalculator.sg/calorie-calculator"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Calorie Calculator", url: "https://bmicalculator.sg/calorie-calculator" },
        ]}
      />

      <CalculatorSection
        badge="Mifflin-St Jeor · Singapore HPB Guidelines"
        title="Calorie Calculator"
        description="How many calories do you need per day? This calculator uses the Mifflin-St Jeor formula and Singapore HPB dietary guidelines to give you a personalised daily calorie target — with macronutrient breakdown."
      >
        <CalorieCalculatorClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8 pb-16">
        {/* Singapore HPB Daily Calorie Guidelines */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Singapore HPB Daily Calorie Guidelines
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            The Health Promotion Board recommends the following reference values for moderately active
            adults. Your personal target will differ based on height, weight, age, and goal — use the
            calculator above for an individualised result.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Age Group
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Men (kcal/day)
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Women (kcal/day)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["18–29 years", "2,300", "1,900"],
                  ["30–49 years", "2,200", "1,800"],
                  ["50–69 years", "2,000", "1,700"],
                  ["70+ years",   "1,900", "1,600"],
                ].map(([age, men, women]) => (
                  <tr
                    key={age}
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {age}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>
                      {men}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>
                      {women}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Source: Singapore Health Promotion Board Dietary Reference Intakes (DRI) for moderate activity.
            Adjust ±200–400 kcal for sedentary or very active lifestyles.
          </p>
        </div>

        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        {/* Singapore Hawker Food Calorie Guide */}
        <div>
          <h2
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Singapore Hawker Food Calorie Guide
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            Knowing the approximate calorie content of common hawker dishes makes calorie tracking
            practical in Singapore without needing a food scale. Values are estimates for standard
            portions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Dish
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Calories
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    HPB Healthier Choice
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dish: "Chicken rice (with skin)", kcal: "~607 kcal", healthier: false },
                  { dish: "Chicken rice (without skin)", kcal: "~450 kcal", healthier: true },
                  { dish: "Fish ball noodle soup", kcal: "~350 kcal", healthier: true },
                  { dish: "Laksa", kcal: "~589 kcal", healthier: false },
                  { dish: "Char kway teow", kcal: "~744 kcal", healthier: false },
                  { dish: "Wonton noodle soup", kcal: "~390 kcal", healthier: true },
                  { dish: "Roti prata (plain, 1 piece)", kcal: "~270 kcal", healthier: false },
                  { dish: "Economy rice (3 dishes)", kcal: "~550–700 kcal", healthier: false },
                  { dish: "Yong tau foo (soup, 8 pcs)", kcal: "~280 kcal", healthier: true },
                  { dish: "Mixed vegetable rice (3 veg)", kcal: "~420 kcal", healthier: true },
                  { dish: "Nasi lemak (with egg & ikan bilis)", kcal: "~495 kcal", healthier: false },
                  { dish: "Prawn noodle soup", kcal: "~455 kcal", healthier: false },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>
                      {row.dish}
                    </td>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {row.kcal}
                    </td>
                    <td className="p-3">
                      {row.healthier ? (
                        <span
                          className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            background: "var(--color-secondary-container)",
                            color: "var(--color-secondary-dark)",
                          }}
                        >
                          HPB Healthier
                        </span>
                      ) : (
                        <span style={{ color: "var(--color-neutral)" }}>—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Calorie values are approximate and vary by stall and portion size. Source: Singapore
            Health Promotion Board Food Composition Database.
          </p>
        </div>

        {/* FAQ section */}
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
