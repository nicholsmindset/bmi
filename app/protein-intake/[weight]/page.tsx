import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import ProteinCalculatorClient from "@/components/calculators/ProteinCalculatorClient";

const WEIGHTS = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

export async function generateStaticParams() {
  return WEIGHTS.map((w) => ({ weight: `${w}kg` }));
}

interface Props {
  params: Promise<{ weight: string }>;
}

function parseWeight(weight: string): number | null {
  const n = parseInt(weight.replace("kg", ""));
  return WEIGHTS.includes(n) ? n : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { weight } = await params;
  const kg = parseWeight(weight);
  if (!kg) return { title: "Protein Intake Calculator — BMI Calculator SG" };
  return {
    title: `Protein Intake for ${kg}kg — How Much Protein Do You Need? | Singapore`,
    description: `How much protein should a ${kg}kg person eat per day? ISSN-backed protein targets for weight loss, maintenance, muscle gain, and athletic performance.`,
    alternates: { canonical: `https://www.bmicalculatorsingapore.com/protein-intake/${weight}` },
  };
}

export default async function ProteinIntakePage({ params }: Props) {
  const { weight } = await params;
  const kg = parseWeight(weight);

  if (!kg) {
    return <p className="p-8 text-center">Invalid weight parameter.</p>;
  }

  const goals = [
    { name: "Weight loss",  min: 1.2, max: 1.6 },
    { name: "Maintenance",  min: 0.8, max: 1.2 },
    { name: "Muscle gain",  min: 1.6, max: 2.2 },
    { name: "Athletic",     min: 1.4, max: 1.8 },
  ];

  return (
    <>
      <CalculatorSchema
        name={`Protein Intake for ${kg}kg`}
        description={`ISSN protein targets for a ${kg}kg person for weight loss, maintenance, muscle gain, and athletic performance.`}
        url={`https://www.bmicalculatorsingapore.com/protein-intake/${weight}`}
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: `How much protein does a ${kg}kg person need per day?`,
            answer: `A ${kg}kg person needs ${Math.round(kg * 0.8)}–${Math.round(kg * 1.2)}g for maintenance, ${Math.round(kg * 1.2)}–${Math.round(kg * 1.6)}g for weight loss, and ${Math.round(kg * 1.6)}–${Math.round(kg * 2.2)}g for muscle gain per day according to ISSN guidelines.`,
          },
          {
            question: `How many meals does a ${kg}kg person need to hit protein targets?`,
            answer: `For muscle gain, a ${kg}kg person needs ~${Math.round(kg * 1.9)}g/day. Spread across 3 meals, that is ~${Math.round(kg * 1.9 / 3)}g per meal — achievable with chicken, fish, or eggs at each meal.`,
          },
          {
            question: "What protein foods are best for Singaporeans?",
            answer:
              "Top sources in Singapore: chicken breast (hawker chicken rice, ~30g per serving), eggs (2 large = ~14g), fish (fish soup = ~28g), tofu (100g firm = ~8g), and protein supplements from iHerb.",
          },
          {
            question: "Should protein intake change if I exercise?",
            answer: `Yes. For a ${kg}kg person who exercises moderately, aim for ${Math.round(kg * 1.4)}–${Math.round(kg * 1.8)}g/day. For strength training targeting muscle gain, ${Math.round(kg * 1.6)}–${Math.round(kg * 2.2)}g/day is optimal.`,
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Protein Calculator", url: "https://www.bmicalculatorsingapore.com/protein-calculator" },
          { name: `Protein Intake for ${kg}kg`, url: `https://www.bmicalculatorsingapore.com/protein-intake/${weight}` },
        ]}
      />

      <CalculatorSection
        badge={`Protein · ${kg}kg`}
        title={`Protein Intake for ${kg}kg`}
        description={`Daily protein targets for a ${kg}kg person based on ISSN guidelines. Adjust your goal below to see your personalised range.`}
      >
        <ProteinCalculatorClient initialWeightKg={kg} />
      </CalculatorSection>

      {/* Summary table for all goals */}
      <section className="max-w-3xl mx-auto px-4 mt-10 pb-16">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          All Protein Targets for {kg}kg
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "var(--color-surface-container)" }}>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Goal</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Daily protein</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Per meal (3×)</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Per meal (4×)</th>
              </tr>
            </thead>
            <tbody>
              {goals.map((g) => {
                const daily = Math.round(((g.min + g.max) / 2) * kg);
                return (
                  <tr key={g.name} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{g.name}</td>
                    <td className="p-3 font-bold" style={{ color: "var(--color-calc-fitness)" }}>
                      {Math.round(g.min * kg)}–{Math.round(g.max * kg)}g
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{Math.round(daily / 3)}g</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{Math.round(daily / 4)}g</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm mt-6" style={{ color: "var(--color-on-surface-variant)" }}>
          Use our full{" "}
          <Link href="/protein-calculator" style={{ color: "var(--color-primary)" }} className="underline font-medium">
            Protein Calculator
          </Link>{" "}
          to customise by goal and activity level.
        </p>
      </section>
    </>
  );
}
