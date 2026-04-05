import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import ProteinCalculatorClient from "@/components/calculators/ProteinCalculatorClient";

export const metadata: Metadata = {
  title: "Protein Calculator for Muscle Gain Singapore — ISSN Guidelines",
  description:
    "Calculate daily protein intake for muscle building. ISSN recommends 1.6–2.2g per kg bodyweight. Includes Singapore hawker food protein sources.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/protein-calculator/muscle-gain" },
  openGraph: {
    title: "Protein Calculator for Muscle Gain Singapore — ISSN Guidelines",
    description: "Calculate daily protein intake for muscle building. ISSN recommends 1.6–2.2g per kg bodyweight. Includes Singapore hawker food protein sources.",
    url: "https://www.bmicalculatorsingapore.com/protein-calculator/muscle-gain",
    type: "website",
  },
  twitter: {
    title: "Protein Calculator for Muscle Gain Singapore — ISSN Guidelines",
    description: "Calculate daily protein intake for muscle building. ISSN recommends 1.6–2.2g per kg bodyweight. Includes Singapore hawker food protein sources.",
  },
};

const FAQS = [
  {
    question: "How much protein do I need to build muscle?",
    answer:
      "The International Society of Sports Nutrition (ISSN) recommends 1.6–2.2g of protein per kg of body weight per day for muscle hypertrophy. A 70 kg Singaporean building muscle should aim for 112–154g of protein daily. Spreading this across 3–4 meals (30–40g per meal) maximises muscle protein synthesis — the process that builds new muscle tissue. Consuming more than 2.2g/kg provides minimal additional muscle-building benefit for most people.",
  },
  {
    question: "What are the best protein sources available in Singapore?",
    answer:
      "Singapore offers excellent protein options at hawker centres: chicken rice (35g protein per serving), fish soup (25g), bee hoon soup with fish (20g), and tofu (15g per block). For supplementation, whey protein isolate provides 25–30g per serving and is widely available on iHerb, Lazada, and Shopee. Local options include eggs (6g each), tempeh (10g per 100g), and canned tuna (25g per 100g). Protein spread across the day from these whole food sources is ideal.",
  },
];

const HAWKER_PROTEIN = [
  { food: "Chicken Rice (whole leg)", protein: "~45g" },
  { food: "Chicken Rice (half)", protein: "~25g" },
  { food: "Fish Soup with Rice", protein: "~30g" },
  { food: "Grilled Fish (whole)", protein: "~40g" },
  { food: "Tofu (1 block, 300g)", protein: "~18g" },
  { food: "Egg (1 large)", protein: "~6g" },
  { food: "Cai Fan — meat dish (1 serving)", protein: "~15–25g" },
  { food: "Nasi Lemak with chicken", protein: "~30g" },
];

export default function ProteinMuscleGainPage() {
  return (
    <>
      <CalculatorSchema
        name="Protein Calculator for Muscle Gain Singapore"
        description="Calculate daily protein intake for muscle building following ISSN guidelines of 1.6–2.2g per kg bodyweight."
        url="https://www.bmicalculatorsingapore.com/protein-calculator/muscle-gain"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Protein Calculator", url: "https://www.bmicalculatorsingapore.com/protein-calculator" },
          { name: "Muscle Gain", url: "https://www.bmicalculatorsingapore.com/protein-calculator/muscle-gain" },
        ]}
      />

      <CalculatorSection
        badge="Muscle Gain · 1.6–2.2g/kg · ISSN Guidelines"
        title="Protein Calculator for Muscle Gain"
        description="Pre-set for muscle gain. Calculates your daily protein target based on ISSN evidence — 1.6–2.2g per kg of body weight. Includes per-meal breakdown."
      >
        <ProteinCalculatorClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Hawker Food Protein Guide — Muscle Building
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            You can hit your protein targets eating entirely from Singapore hawker centres. Here are reliable protein sources:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Food</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein</th>
                </tr>
              </thead>
              <tbody>
                {HAWKER_PROTEIN.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.food}</td>
                    <td className="p-3 font-bold" style={{ color: "var(--color-secondary-dark)" }}>{row.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--color-neutral)" }}>
            A strategy of 3 hawker meals with a protein focus (chicken, fish, or tofu at each) can provide 80–120g of protein daily without supplements.
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
