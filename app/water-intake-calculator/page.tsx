import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import WaterIntakeClient from "@/components/calculators/WaterIntakeClient";

export const metadata: Metadata = {
  title: "Water Intake Calculator Singapore — Daily Hydration Target",
  description:
    "Calculate how much water to drink per day adjusted for Singapore's tropical climate, body weight, and activity level.",
  alternates: { canonical: "https://bmicalculator.sg/water-intake-calculator" },
  openGraph: {
    title: "Water Intake Calculator Singapore — Daily Hydration Target",
    description:
      "Calculate how much water to drink per day adjusted for Singapore's tropical climate, body weight, and activity level.",
    url: "https://bmicalculator.sg/water-intake-calculator",
    type: "website",
  },
  twitter: {
    title: "Water Intake Calculator Singapore — Daily Hydration Target",
    description:
      "Calculate how much water to drink per day adjusted for Singapore's tropical climate, body weight, and activity level.",
  },
};

const FAQS = [
  {
    question: "How much water should I drink per day in Singapore?",
    answer:
      "Due to Singapore's tropical climate (30°C average, 80% humidity), adults should aim for 2.5–3.5 litres of water daily — higher than the standard international guideline of 2L. Active individuals exercising outdoors in Singapore should add 500ml per hour of exercise on top of their baseline.",
  },
  {
    question: "Does coffee and tea count towards water intake?",
    answer:
      "Moderate consumption of coffee and tea (2–3 cups per day) does contribute to hydration. The mild diuretic effect of caffeine does not significantly reduce hydration at typical consumption levels. However, Singapore's heat means caffeinated beverages should not replace plain water — they count for about 80% of their volume.",
  },
  {
    question: "What are signs of dehydration in Singapore's heat?",
    answer:
      "Dark yellow urine, headaches, fatigue, and dry mouth are common signs. In Singapore's heat, dehydration can occur faster than in temperate climates. Aim for pale yellow urine as a simple hydration indicator. Elderly Singaporeans are at higher risk as the thirst mechanism weakens with age.",
  },
  {
    question: "Is it possible to drink too much water?",
    answer:
      "Yes — hyponatremia (water intoxication) occurs when sodium is diluted by excessive water intake, typically above 3–4 litres per hour during endurance events. For everyday activity in Singapore, this is not a concern. Aim for 250–300ml (one glass) every 1–2 hours rather than large amounts at once.",
  },
];

const RELATED = [
  {
    name: "BMI Calculator",
    tagline: "Singapore HPB Asian standards",
    href: "/bmi-calculator",
    iconPath:
      "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    accent: "#005EB8",
  },
  {
    name: "Calorie Calculator",
    tagline: "Daily energy intake target",
    href: "/calorie-calculator",
    iconPath:
      "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#7B1FA2",
  },
  {
    name: "Calories Burned Calculator",
    tagline: "Walking, running, cycling",
    href: "/calories-burned-calculator",
    iconPath:
      "M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z",
    accent: "#00695C",
  },
];

export default function WaterIntakeCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Water Intake Calculator Singapore"
        description="Calculate how much water to drink per day adjusted for Singapore's tropical climate, body weight, and activity level."
        url="https://bmicalculator.sg/water-intake-calculator"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Water Intake Calculator", url: "https://bmicalculator.sg/water-intake-calculator" },
        ]}
      />

      <CalculatorSection
        badge="Tropical Climate Adjusted · Singapore"
        title="Water Intake Calculator"
        description="Singapore's 30°C heat and 80% humidity means you need more water than international guidelines suggest. This calculator adjusts your daily hydration target for tropical climate, body weight, and exercise."
      >
        <WaterIntakeClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8 pb-16">
        {/* Why Singaporeans Need More Water */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Why Singaporeans Need More Water
          </h2>
          <p className="text-sm mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            Standard international water intake guidelines (often cited as 2L/day) were developed
            for temperate climates. Singapore's year-round heat and high humidity significantly
            increase fluid losses through perspiration — even during sedentary activity.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              {
                stat: "30°C",
                label: "Average Temperature",
                desc: "Year-round ambient temperature in Singapore, far above the 20°C norm used in global guidelines",
                color: "#B71C1C",
              },
              {
                stat: "80%",
                label: "Average Humidity",
                desc: "High humidity reduces the cooling efficiency of sweat, increasing fluid loss per hour",
                color: "#E65100",
              },
              {
                stat: "+500ml",
                label: "Exercise Adjustment",
                desc: "Additional water needed per hour of outdoor exercise in Singapore's tropical heat",
                color: "#005EB8",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-manrope)", color: item.color }}
                >
                  {item.stat}
                </p>
                <p
                  className="text-xs font-semibold mb-2"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-5" style={{ background: "var(--color-primary-light)" }}>
            <h3
              className="font-semibold mb-2"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Higher-Risk Groups in Singapore
            </h3>
            <ul className="space-y-1 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
              <li>
                <strong>Elderly (65+):</strong> Reduced thirst sensation means dehydration often
                sets in before the urge to drink. Aim to drink on a schedule, not just when thirsty.
              </li>
              <li>
                <strong>Outdoor workers:</strong> Construction, delivery, and agricultural workers
                face severe fluid loss in Singapore's direct sun — up to 1–1.5L per hour in
                strenuous conditions.
              </li>
              <li>
                <strong>Children:</strong> Higher surface-area-to-body-mass ratio increases
                heat gain and fluid needs relative to adults.
              </li>
              <li>
                <strong>Those with kidney stones:</strong> Singapore has a high prevalence of
                kidney stones, partly attributed to chronic low-grade dehydration. Adequate
                hydration is the primary prevention strategy.
              </li>
            </ul>
          </div>
        </div>

        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        {/* Hydration quick reference */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Hydration Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Urine Colour
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Hydration Status
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    colour: "Pale yellow / clear",
                    status: "Well hydrated",
                    action: "Maintain current intake",
                    ok: true,
                  },
                  {
                    colour: "Straw yellow",
                    status: "Adequately hydrated",
                    action: "Drink water with next meal",
                    ok: true,
                  },
                  {
                    colour: "Dark yellow",
                    status: "Mildly dehydrated",
                    action: "Drink 250–500ml now",
                    ok: false,
                  },
                  {
                    colour: "Amber / orange",
                    status: "Moderately dehydrated",
                    action: "Drink water immediately, rest",
                    ok: false,
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>
                      {row.colour}
                    </td>
                    <td
                      className="p-3 font-medium"
                      style={{
                        color: row.ok
                          ? "var(--color-success)"
                          : "var(--color-warning)",
                      }}
                    >
                      {row.status}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
