import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import IdealWeightClient from "@/components/calculators/IdealWeightClient";

export const metadata: Metadata = {
  title: "Ideal Weight for Women Singapore — HPB Healthy Weight Range",
  description:
    "Calculate the ideal weight range for women using Singapore HPB Asian BMI standard (18.5–22.9). HPB healthy weight for your height.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator/women" },
  openGraph: {
    title: "Ideal Weight for Women Singapore — HPB Healthy Weight Range",
    description: "Calculate the ideal weight range for women using Singapore HPB Asian BMI standard (18.5–22.9). HPB healthy weight for your height.",
    url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator/women",
    type: "website",
  },
  twitter: {
    title: "Ideal Weight for Women Singapore — HPB Healthy Weight Range",
    description: "Calculate the ideal weight range for women using Singapore HPB Asian BMI standard (18.5–22.9). HPB healthy weight for your height.",
  },
};

const FAQS = [
  {
    question: "What is the ideal weight for a 160cm woman in Singapore?",
    answer:
      "For a 160cm Singaporean woman, the HPB healthy weight range (BMI 18.5–22.9) is approximately 47.4–58.6 kg. The Hamwi formula gives an ideal weight of approximately 52.2 kg. Singapore HPB uses the tighter Asian BMI threshold (22.9 vs. the WHO&apos;s 24.9) because Asian women carry greater metabolic and cardiovascular risk at the same BMI as Western populations. The HPB-aligned range of 47.4–58.6 kg is the recommended target.",
  },
  {
    question: "Why do women have different ideal weight ranges from men?",
    answer:
      "Women naturally carry more body fat than men — typically 20–25% body fat at fitness level vs. 14–17% for men — and have lower average muscle mass. This means women of the same height as men will have a lower ideal weight range. Hormonal differences (oestrogen) also influence where fat is stored. These biological differences are built into both the HPB BMI thresholds and the Hamwi formula constants (45.5 kg base for women vs. 48 kg for men).",
  },
];

export default function IdealWeightWomenPage() {
  return (
    <>
      <CalculatorSchema
        name="Ideal Weight for Women Singapore"
        description="Calculate the ideal weight range for women using Singapore HPB Asian BMI standard (18.5–22.9) and the Hamwi formula."
        url="https://www.bmicalculatorsingapore.com/ideal-weight-calculator/women"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Ideal Weight Calculator", url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator" },
          { name: "Women", url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator/women" },
        ]}
      />

      <CalculatorSection
        badge="Female · HPB Asian Standard · Hamwi Formula"
        title="Ideal Weight for Women"
        description="The calculator will pre-select female. Shows your HPB healthy weight range (BMI 18.5–22.9) and Hamwi formula ideal weight for your height."
      >
        <IdealWeightClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Ideal Weight Ranges for Singaporean Women by Height
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Height</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>HPB Range (BMI 18.5–22.9)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Hamwi Ideal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { height: "150 cm", hpb: "41.6 – 51.5 kg", hamwi: "43.2 kg" },
                  { height: "155 cm", hpb: "44.4 – 55.0 kg", hamwi: "46.3 kg" },
                  { height: "160 cm", hpb: "47.4 – 58.6 kg", hamwi: "49.5 kg" },
                  { height: "165 cm", hpb: "50.4 – 62.3 kg", hamwi: "52.7 kg" },
                  { height: "170 cm", hpb: "53.5 – 66.2 kg", hamwi: "55.9 kg" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.height}</td>
                    <td className="p-3" style={{ color: "var(--color-secondary-dark)" }}>{row.hpb}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.hamwi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--color-neutral)" }}>
            &ldquo;Ideal weight for 160cm female&rdquo; has a traffic potential of 35,000 — this page targets that keyword via Singapore HPB context.
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
