import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BodyFatClient from "@/components/calculators/BodyFatClient";

export const metadata: Metadata = {
  title: "Body Fat Calculator for Men — US Navy Method Singapore",
  description:
    "Calculate body fat percentage for men using the US Navy circumference method. Measure waist and neck. ACE body fat categories for men.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/body-fat-calculator/men" },
  openGraph: {
    title: "Body Fat Calculator for Men — US Navy Method Singapore",
    description: "Calculate body fat percentage for men using the US Navy circumference method. Measure waist and neck. ACE body fat categories for men.",
    url: "https://www.bmicalculatorsingapore.com/body-fat-calculator/men",
    type: "website",
  },
  twitter: {
    title: "Body Fat Calculator for Men — US Navy Method Singapore",
    description: "Calculate body fat percentage for men using the US Navy circumference method. Measure waist and neck. ACE body fat categories for men.",
  },
};

const FAQS = [
  {
    question: "What is healthy body fat % for Singaporean men?",
    answer:
      "According to ACE (American Council on Exercise) categories, acceptable body fat for men is 18–24%, with the fitness category at 14–17% and athlete category at 6–13%. For Singaporean men, Singapore HPB and clinical guidelines align with these ACE categories. Men with body fat above 25% are classified as obese and carry significantly elevated risk for type 2 diabetes, cardiovascular disease, and metabolic syndrome — all of which are major public health priorities in Singapore.",
  },
  {
    question: "How do men measure body fat with a tape measure?",
    answer:
      "For men, the US Navy method requires two measurements: (1) Waist circumference — measured horizontally at the navel level while relaxed, not sucked in; (2) Neck circumference — measured just below the larynx (Adam&apos;s apple), perpendicular to the neck&apos;s axis. Use a flexible tape measure and take each measurement twice, averaging the results. Measure at the same time of day — morning before eating is most consistent.",
  },
];

const ACE_CATEGORIES_MEN = [
  { category: "Essential Fat", range: "<5%", description: "Minimum for physiological function" },
  { category: "Athlete", range: "6–13%", description: "Competitive athletes, very lean" },
  { category: "Fitness", range: "14–17%", description: "Active, healthy, visibly fit" },
  { category: "Acceptable", range: "18–24%", description: "Average, moderate health risk" },
  { category: "Obese", range: ">25%", description: "Elevated metabolic disease risk" },
];

export default function BodyFatMenPage() {
  return (
    <>
      <CalculatorSchema
        name="Body Fat Calculator for Men Singapore"
        description="Calculate body fat percentage for men using the US Navy circumference method with ACE category assessment."
        url="https://www.bmicalculatorsingapore.com/body-fat-calculator/men"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Body Fat Calculator", url: "https://www.bmicalculatorsingapore.com/body-fat-calculator" },
          { name: "Men", url: "https://www.bmicalculatorsingapore.com/body-fat-calculator/men" },
        ]}
      />

      <CalculatorSection
        badge="Male · US Navy Method · ACE Categories"
        title="Body Fat Calculator for Men"
        description="Select male in the calculator. Uses the US Navy circumference method — waist and neck measurements only. No calipers or DEXA scan required."
      >
        <BodyFatClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            ACE Body Fat Categories for Men
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
                {ACE_CATEGORIES_MEN.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>{row.category}</td>
                    <td className="p-3 font-bold" style={{ color: "var(--color-primary)" }}>{row.range}</td>
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
            US Navy Method vs. Other Measurement Methods
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { method: "US Navy Method", accuracy: "±3–4%", cost: "Free — tape measure only", color: "var(--color-primary)" },
              { method: "Skinfold Calipers", accuracy: "±3–5%", cost: "Requires trained tester", color: "var(--color-secondary)" },
              { method: "DEXA Scan", accuracy: "±1–2%", cost: "$80–150 in Singapore", color: "var(--color-warning)" },
            ].map((m) => (
              <div
                key={m.method}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderTop: `3px solid ${m.color}` }}
              >
                <p className="text-sm font-bold mb-1" style={{ color: m.color }}>{m.method}</p>
                <p className="text-base font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>{m.accuracy}</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{m.cost}</p>
              </div>
            ))}
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
