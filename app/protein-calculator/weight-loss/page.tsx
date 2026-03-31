import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import ProteinCalculatorClient from "@/components/calculators/ProteinCalculatorClient";

export const metadata: Metadata = {
  title: "Protein Calculator for Weight Loss Singapore — Preserve Muscle",
  description:
    "Calculate protein intake for weight loss. High protein (1.2–1.6g/kg) preserves muscle during a calorie deficit. Singapore-focused.",
  alternates: { canonical: "https://bmicalculator.sg/protein-calculator/weight-loss" },
  openGraph: {
    title: "Protein Calculator for Weight Loss Singapore — Preserve Muscle",
    description: "Calculate protein intake for weight loss. High protein (1.2–1.6g/kg) preserves muscle during a calorie deficit. Singapore-focused.",
    url: "https://bmicalculator.sg/protein-calculator/weight-loss",
    type: "website",
  },
  twitter: {
    title: "Protein Calculator for Weight Loss Singapore — Preserve Muscle",
    description: "Calculate protein intake for weight loss. High protein (1.2–1.6g/kg) preserves muscle during a calorie deficit. Singapore-focused.",
  },
};

const FAQS = [
  {
    question: "Why is protein important during weight loss?",
    answer:
      "When you eat fewer calories than you burn, your body can burn both fat and muscle for energy. Adequate protein intake (1.2–1.6g/kg for weight loss) signals your body to preserve lean muscle while prioritising fat as fuel. This is critical because muscle loss during a diet slows your BMR, making it harder to keep weight off long term. High protein also increases satiety — you feel fuller — making it easier to stick to a calorie deficit without hunger.",
  },
  {
    question: "Can I eat too much protein?",
    answer:
      "For most healthy adults, protein intakes up to 2.5g/kg per day are safe and have no adverse effects on kidney function (in people without pre-existing kidney disease). Singapore HPB does not set an upper limit but recommends a balanced diet. Excess protein is simply used for energy or excreted — it does not convert to fat in meaningful quantities. The practical concern for most people is cost and meal planning, not safety.",
  },
];

export default function ProteinWeightLossPage() {
  return (
    <>
      <CalculatorSchema
        name="Protein Calculator for Weight Loss Singapore"
        description="Calculate daily protein intake for weight loss — 1.2–1.6g/kg to preserve muscle during a calorie deficit."
        url="https://bmicalculator.sg/protein-calculator/weight-loss"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Protein Calculator", url: "https://bmicalculator.sg/protein-calculator" },
          { name: "Weight Loss", url: "https://bmicalculator.sg/protein-calculator/weight-loss" },
        ]}
      />

      <CalculatorSection
        badge="Weight Loss · 1.2–1.6g/kg · Muscle Preservation"
        title="Protein Calculator for Weight Loss"
        description="Pre-set for weight loss. Calculates your protein target to preserve lean muscle during a calorie deficit. Based on ISSN and HPB guidelines."
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

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Protein Targets for Weight Loss by Body Weight
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Body Weight</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Minimum (1.2g/kg)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Target (1.4g/kg)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>High (1.6g/kg)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { bw: "50 kg", min: "60g", target: "70g", high: "80g" },
                  { bw: "60 kg", min: "72g", target: "84g", high: "96g" },
                  { bw: "70 kg", min: "84g", target: "98g", high: "112g" },
                  { bw: "80 kg", min: "96g", target: "112g", high: "128g" },
                  { bw: "90 kg", min: "108g", target: "126g", high: "144g" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.bw}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.min}</td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-secondary-dark)" }}>{row.target}</td>
                    <td className="p-3" style={{ color: "var(--color-primary)" }}>{row.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--color-neutral)" }}>
            Aim for the target column (1.4g/kg) when cutting. Increase to 1.6g/kg if you train 4+ days per week.
          </p>
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
