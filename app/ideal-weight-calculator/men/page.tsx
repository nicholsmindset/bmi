import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import IdealWeightClient from "@/components/calculators/IdealWeightClient";

export const metadata: Metadata = {
  title: "Ideal Weight for Men Singapore — HPB Healthy Weight Range",
  description:
    "Calculate the ideal weight range for men using Singapore HPB Asian BMI standard (18.5–22.9) and Hamwi formula. HPB healthy weight for your height.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator/men" },
  openGraph: {
    title: "Ideal Weight for Men Singapore — HPB Healthy Weight Range",
    description: "Calculate the ideal weight range for men using Singapore HPB Asian BMI standard (18.5–22.9) and Hamwi formula. HPB healthy weight for your height.",
    url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator/men",
    type: "website",
  },
  twitter: {
    title: "Ideal Weight for Men Singapore — HPB Healthy Weight Range",
    description: "Calculate the ideal weight range for men using Singapore HPB Asian BMI standard (18.5–22.9) and Hamwi formula. HPB healthy weight for your height.",
  },
};

const FAQS = [
  {
    question: "What is the ideal weight for a 175cm man in Singapore?",
    answer:
      "For a 175cm Singaporean man, the HPB healthy weight range (BMI 18.5–22.9) is approximately 56.6–70.0 kg. The Hamwi formula gives an ideal weight of approximately 72.6 kg for that height. Singapore HPB recommends using the Asian BMI range (18.5–22.9) rather than the WHO range (18.5–24.9), as Asian populations carry higher metabolic risk at lower BMI values. The ideal weight for health is the lower HPB range: 56.6–70.0 kg.",
  },
  {
    question: "How does muscle mass affect ideal weight for men?",
    answer:
      "Men with significant muscle mass from resistance training may fall at the higher end of or slightly above the HPB ideal weight range without any increased health risk. BMI and weight-based targets do not distinguish between muscle and fat. If you are muscular and physically active, consider tracking body fat percentage alongside weight — a body fat of 14–17% (fitness category) or 18–24% (acceptable) is a more meaningful health marker for men than a weight target alone.",
  },
];

export default function IdealWeightMenPage() {
  return (
    <>
      <CalculatorSchema
        name="Ideal Weight for Men Singapore"
        description="Calculate the ideal weight range for men using Singapore HPB Asian BMI standard (18.5–22.9) and the Hamwi formula."
        url="https://www.bmicalculatorsingapore.com/ideal-weight-calculator/men"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Ideal Weight Calculator", url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator" },
          { name: "Men", url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator/men" },
        ]}
      />

      <CalculatorSection
        badge="Male · HPB Asian Standard · Hamwi Formula"
        title="Ideal Weight for Men"
        description="The calculator will pre-select male. Shows your HPB healthy weight range (BMI 18.5–22.9) and Hamwi formula ideal weight for your height."
      >
        <IdealWeightClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-8">
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Ideal Weight Ranges for Singaporean Men by Height
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
                  { height: "160 cm", hpb: "47.4 – 58.6 kg", hamwi: "57.2 kg" },
                  { height: "165 cm", hpb: "50.4 – 62.3 kg", hamwi: "60.8 kg" },
                  { height: "170 cm", hpb: "53.5 – 66.2 kg", hamwi: "64.4 kg" },
                  { height: "175 cm", hpb: "56.7 – 70.1 kg", hamwi: "68.0 kg" },
                  { height: "180 cm", hpb: "59.9 – 74.2 kg", hamwi: "71.7 kg" },
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
            Singapore HPB uses the Asian BMI standard (healthy: 18.5–22.9) rather than the WHO standard (18.5–24.9).
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
