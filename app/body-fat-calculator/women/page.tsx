import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import BodyFatClient from "@/components/calculators/BodyFatClient";

export const metadata: Metadata = {
  title: "Body Fat Calculator for Women — US Navy Method Singapore",
  description:
    "Calculate body fat % for women using the US Navy circumference method. Waist, neck, and hip measurements. ACE categories for women.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/body-fat-calculator/women" },
  openGraph: {
    title: "Body Fat Calculator for Women — US Navy Method Singapore",
    description: "Calculate body fat % for women using the US Navy circumference method. Waist, neck, and hip measurements. ACE categories for women.",
    url: "https://www.bmicalculatorsingapore.com/body-fat-calculator/women",
    type: "website",
  },
  twitter: {
    title: "Body Fat Calculator for Women — US Navy Method Singapore",
    description: "Calculate body fat % for women using the US Navy circumference method. Waist, neck, and hip measurements. ACE categories for women.",
  },
};

const FAQS = [
  {
    question: "What is healthy body fat % for Singaporean women?",
    answer:
      "For women, ACE categories define fitness body fat as 21–24% and acceptable as 25–31%. Women naturally carry more body fat than men due to hormonal differences — essential fat for women is 10–13% compared to 2–5% for men. Singaporean women with body fat above 32% are in the obese category, which is associated with higher risk of type 2 diabetes, cardiovascular disease, and hormonal disruption. Aiming for the fitness range (21–24%) is a practical health goal for most active Singaporean women.",
  },
  {
    question: "How do women measure body fat at home?",
    answer:
      "For women, the US Navy method requires three measurements: (1) Waist circumference — at the narrowest point, measured while breathing out naturally; (2) Hip circumference — at the widest point across the buttocks; (3) Neck circumference — just below the larynx. Use a flexible tape measure and measure each site twice, averaging the results. Consistent technique matters — measure at the same time of day and in the same stance for comparable readings over time.",
  },
];

const ACE_CATEGORIES_WOMEN = [
  { category: "Essential Fat", range: "<14%", description: "Minimum for physiological function" },
  { category: "Athlete", range: "15–20%", description: "Competitive athletes, very lean" },
  { category: "Fitness", range: "21–24%", description: "Active, healthy, visibly fit" },
  { category: "Acceptable", range: "25–31%", description: "Average, moderate health risk" },
  { category: "Obese", range: ">32%", description: "Elevated metabolic disease risk" },
];

export default function BodyFatWomenPage() {
  return (
    <>
      <CalculatorSchema
        name="Body Fat Calculator for Women Singapore"
        description="Calculate body fat percentage for women using the US Navy circumference method with ACE category assessment."
        url="https://www.bmicalculatorsingapore.com/body-fat-calculator/women"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Body Fat Calculator", url: "https://www.bmicalculatorsingapore.com/body-fat-calculator" },
          { name: "Women", url: "https://www.bmicalculatorsingapore.com/body-fat-calculator/women" },
        ]}
      />

      <CalculatorSection
        badge="Female · US Navy Method · Waist + Hip + Neck"
        title="Body Fat Calculator for Women"
        description="Select female in the calculator. Uses the US Navy circumference method — waist, neck, and hip measurements. No calipers or DEXA scan required."
      >
        <BodyFatClient />
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
            ACE Body Fat Categories for Women
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Category</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Body Fat %</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {ACE_CATEGORIES_WOMEN.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>{row.category}</td>
                    <td className="p-3 font-bold" style={{ color: "var(--color-secondary)" }}>{row.range}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Why Women Have Higher Body Fat Than Men
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Women naturally carry 5–10% more body fat than men due to oestrogen, which promotes fat storage for
              reproductive function. This essential fat is stored in the breasts, hips, and thighs — areas that
              serve physiological rather than metabolic purposes.
            </p>
            <p>
              This is why women&apos;s body fat categories are offset from men&apos;s — a 25% body fat woman is
              in the acceptable category (similar health risk to a 20% body fat man). Comparing your body fat
              to male standards is misleading and unhealthy.
            </p>
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
