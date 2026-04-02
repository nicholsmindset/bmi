import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import ProteinCalculatorClient from "@/components/calculators/ProteinCalculatorClient";
import { HAWKER_PROTEIN_TABLE } from "@/lib/sg-food-data";

export const metadata: Metadata = {
  title: "Protein Calculator Singapore — Daily Protein Intake",
  description:
    "Calculate how much protein you need per day based on weight, goal, and activity. ISSN-aligned recommendations. Includes Singapore hawker food protein sources.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/protein-calculator" },
  openGraph: {
    title: "Protein Calculator Singapore — Daily Protein Intake",
    description:
      "Calculate how much protein you need per day based on weight, goal, and activity. ISSN-aligned recommendations. Includes Singapore hawker food protein sources.",
    url: "https://www.bmicalculatorsingapore.com/protein-calculator",
    type: "website",
  },
  twitter: {
    title: "Protein Calculator Singapore — Daily Protein Intake",
    description:
      "Calculate how much protein you need per day based on weight, goal, and activity. ISSN-aligned recommendations. Includes Singapore hawker food protein sources.",
  },
};

const RELATED = [
  {
    name: "Calorie Deficit Calculator",
    tagline: "Protect muscle while cutting",
    href: "/calorie-deficit-calculator",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#7B1FA2",
  },
  {
    name: "Macro Calculator",
    tagline: "Full macronutrient breakdown",
    href: "/macro-calculator",
    iconPath: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#7B1FA2",
  },
  {
    name: "TDEE Calculator",
    tagline: "Total daily energy needs",
    href: "/tdee-calculator",
    iconPath: "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#F57C00",
  },
];

export default function ProteinCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Protein Calculator Singapore"
        description="Calculate your daily protein intake based on weight, goal, and activity level using ISSN guidelines."
        url="https://www.bmicalculatorsingapore.com/protein-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "How much protein do I need per day in Singapore?",
            answer:
              "For general health, aim for 0.8–1.2g of protein per kg of body weight. For muscle building, aim for 1.6–2.2g/kg. A 65kg person building muscle needs approximately 104–143g of protein daily.",
          },
          {
            question: "How many grams of protein per kg body weight?",
            answer:
              "The ISSN recommends 1.4–2.0g per kg for physically active individuals. Singapore HPB recommends 0.8g/kg as the minimum for sedentary adults.",
          },
          {
            question: "Can I get enough protein from Singapore hawker food?",
            answer:
              "Yes. Chicken rice provides ~30g protein, fish soup ~28g, and a portion of tofu ~8g. A typical hawker meal can provide 20–30g of protein, requiring 3–5 meals to hit daily targets for muscle building.",
          },
          {
            question: "What happens if I do not eat enough protein?",
            answer:
              "Insufficient protein can cause muscle loss (especially during weight loss), impaired recovery, weakened immunity, and hair loss. This is especially important for Singaporeans following calorie-restricted diets.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Protein Calculator", url: "https://www.bmicalculatorsingapore.com/protein-calculator" },
        ]}
      />

      <CalculatorSection
        badge="ISSN Guidelines · Singapore"
        title="Protein Calculator"
        description="Enter your body weight and goal to find your daily protein target. Results include a per-meal breakdown and a Singapore hawker food protein guide."
      >
        <ProteinCalculatorClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            ISSN Protein Guidelines by Goal
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Goal</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein/kg</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>For 65kg person</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>For 80kg person</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { goal: "Weight loss",   range: "1.2–1.6g",  g65: "78–104g",   g80: "96–128g" },
                  { goal: "Maintenance",   range: "0.8–1.2g",  g65: "52–78g",    g80: "64–96g"  },
                  { goal: "Muscle gain",   range: "1.6–2.2g",  g65: "104–143g",  g80: "128–176g" },
                  { goal: "Athletic perf.", range: "1.4–1.8g", g65: "91–117g",   g80: "112–144g" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.goal}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.range}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.g65}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.g80}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hawker food protein table */}
        <div>
          <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Protein in Singapore Hawker Food
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-neutral)" }}>
            Common dishes ranked by protein content — standard hawker portions
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Dish</th>
                  <th className="text-right p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein</th>
                  <th className="text-right p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Calories</th>
                  <th className="text-left p-3 font-semibold hidden sm:table-cell" style={{ color: "var(--color-neutral)" }}>Portion</th>
                </tr>
              </thead>
              <tbody>
                {HAWKER_PROTEIN_TABLE.map((dish, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{dish.name}</td>
                    <td className="p-3 text-right font-bold" style={{ color: "var(--color-primary)" }}>{dish.protein}g</td>
                    <td className="p-3 text-right" style={{ color: "var(--color-on-surface-variant)" }}>{dish.calories} kcal</td>
                    <td className="p-3 hidden sm:table-cell text-xs" style={{ color: "var(--color-neutral)" }}>{dish.portionNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Sources: HPB Energy &amp; Nutrient Composition of Food, Singapore Food Agency. Values are estimates — portions vary by stall.
          </p>
        </div>

        <AdUnit format="responsive" slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"} />

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is plant-based protein as effective as whey for muscle gain?",
                a: "Plant proteins can support muscle gain when consumed in sufficient amounts and combined to ensure complete amino acid profiles. Leucine content is the primary driver of muscle protein synthesis — whey has a slight edge here, but soy and pea protein are the closest plant-based equivalents.",
              },
              {
                q: "When should I eat protein for best results?",
                a: "Distributing protein evenly across 3–4 meals (25–40g per meal) maximises muscle protein synthesis. Consuming 20–40g of protein within 2 hours post-exercise is beneficial. A slow-digesting protein (casein/cottage cheese) before bed may support overnight recovery.",
              },
              {
                q: "Can eating too much protein be harmful?",
                a: "For healthy adults without kidney disease, high protein intake (up to 2.5g/kg) is generally safe. Evidence for kidney harm in healthy individuals is weak. However, excessive protein (>3g/kg) offers no additional benefit and displaces other important nutrients.",
              },
              {
                q: "What protein sources are best for Singaporeans?",
                a: "Budget-friendly Singapore sources include: chicken breast (cheap in hawker centres), eggs (excellent value), tofu and tempeh (plant-based, affordable), fish and seafood. Premium options: iHerb whey protein, plant-based protein powders.",
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
