import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import IdealWeightClient from "@/components/calculators/IdealWeightClient";
import QuickAnswer from "@/components/ui/QuickAnswer";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator Singapore — HPB Healthy Weight Range",
  description:
    "Calculate your ideal weight using Singapore HPB Asian standards (BMI 18.5–22.9) and the Hamwi formula. See healthy weight ranges for men and women.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator" },
  openGraph: {
    title: "Ideal Weight Calculator Singapore — HPB Healthy Weight Range",
    description:
      "Calculate your ideal weight using Singapore HPB Asian standards (BMI 18.5–22.9) and the Hamwi formula. See healthy weight ranges for men and women.",
    url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator",
    type: "website",
  },
  twitter: {
    title: "Ideal Weight Calculator Singapore — HPB Healthy Weight Range",
    description:
      "Calculate your ideal weight using Singapore HPB Asian standards (BMI 18.5–22.9) and the Hamwi formula. See healthy weight ranges for men and women.",
  },
};

const RELATED = [
  {
    name: "BMI Calculator",
    tagline: "Check your current BMI against HPB standards",
    href: "/bmi-calculator",
    iconPath:
      "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    accent: "#005EB8",
  },
  {
    name: "Calorie Deficit Calculator",
    tagline: "Create a plan to reach your ideal weight",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z",
    accent: "#F57C00",
  },
  {
    name: "Body Fat Calculator",
    tagline: "Measure body composition, not just weight",
    href: "/body-fat-calculator",
    iconPath:
      "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    accent: "#D84315",
  },
  {
    name: "Waist-Hip Ratio Calculator",
    tagline: "Assess abdominal fat risk beyond BMI",
    href: "/waist-hip-ratio-calculator",
    iconPath:
      "M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
    accent: "#7B1FA2",
  },
];

// HPB ideal weight ranges: BMI 18.5–22.9, calculated for heights 155–175cm
// Female range: weight = BMI × (height m)²
// Male: same formula — table shows both
const HEIGHT_TABLE = [
  { height: "155 cm", femaleRange: "44.4 – 55.0 kg", maleRange: "44.4 – 55.0 kg" },
  { height: "158 cm", femaleRange: "46.2 – 57.2 kg", maleRange: "46.2 – 57.2 kg" },
  { height: "160 cm", femaleRange: "47.4 – 58.6 kg", maleRange: "47.4 – 58.6 kg" },
  { height: "162 cm", femaleRange: "48.6 – 60.1 kg", maleRange: "48.6 – 60.1 kg" },
  { height: "165 cm", femaleRange: "50.3 – 62.4 kg", maleRange: "50.3 – 62.4 kg" },
  { height: "168 cm", femaleRange: "52.2 – 64.7 kg", maleRange: "52.2 – 64.7 kg" },
  { height: "170 cm", femaleRange: "53.5 – 66.2 kg", maleRange: "53.5 – 66.2 kg" },
  { height: "172 cm", femaleRange: "54.7 – 67.8 kg", maleRange: "54.7 – 67.8 kg" },
  { height: "175 cm", femaleRange: "56.7 – 70.2 kg", maleRange: "56.7 – 70.2 kg" },
];

export default function IdealWeightPage() {
  return (
    <>
      <CalculatorSchema
        name="Ideal Weight Calculator Singapore"
        description="Calculate your ideal weight using the Singapore HPB healthy BMI range (18.5–22.9) and the Hamwi formula for men and women."
        url="https://www.bmicalculatorsingapore.com/ideal-weight-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is the ideal weight for Singaporeans?",
            answer:
              "Singapore HPB defines healthy weight as a BMI between 18.5 and 22.9 — lower than the WHO's 18.5–24.9. For a 165cm Singaporean woman, the HPB healthy weight range is 50.3–62.4 kg. Use this calculator to find your specific range by height.",
          },
          {
            question: "What formula is used for ideal weight?",
            answer:
              "This calculator uses two methods: (1) The HPB healthy BMI range (18.5–22.9), which gives the most clinically relevant range for Singapore. (2) The Hamwi formula — 48 kg + 2.7 kg per inch over 5ft for men; 45.5 kg + 2.2 kg per inch over 5ft for women.",
          },
          {
            question: "Why is Singapore's healthy BMI range different from WHO?",
            answer:
              "Research shows Asians accumulate more visceral fat and face higher metabolic risk at lower BMI values than people of European descent. Singapore HPB therefore uses an overweight threshold of BMI 23.0 (not WHO's 25.0) and obese at 27.5 (not 30.0).",
          },
          {
            question: "How can I reach my ideal weight safely?",
            answer:
              "Use the calorie deficit calculator to create a sustainable 500 kcal daily deficit for 0.5 kg/week weight loss. Combine with strength training to preserve muscle mass. Avoid crash diets — they reduce BMR and increase long-term weight regain risk.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Ideal Weight Calculator", url: "https://www.bmicalculatorsingapore.com/ideal-weight-calculator" },
        ]}
        isMedical
        howToSteps={[
          { name: "Enter your height", text: "Enter your height in centimetres or feet and inches." },
          { name: "Select your sex", text: "The Hamwi formula uses sex-specific calculations for ideal weight." },
          { name: "Choose your standard", text: "Select HPB Asian (BMI 18.5–22.9) or WHO (BMI 18.5–24.9) to see the healthy weight range for your height." },
          { name: "Compare your results", text: "See the Hamwi ideal weight and the HPB healthy weight range side by side." },
        ]}
        citations={[
          { name: "Health Promotion Board — Healthy Weight for Singaporeans", url: "https://www.healthhub.sg/live-healthy/ideal-weight" },
        ]}
      />

      <CalculatorSection
        badge="Hamwi + HPB Asian Standard"
        title="Ideal Weight Calculator"
        description="Find your ideal weight using Singapore HPB healthy BMI range and the Hamwi formula. Compare Asian (BMI 18.5–22.9) vs WHO (18.5–24.9) healthy weight ranges for your height."
      >
        <QuickAnswer
          answer="The HPB healthy weight range for a 165 cm adult is 50.4–62.4 kg. This uses a BMI of 18.5–22.9 — lower than the WHO's 25.0 cutoff for Asian populations."
          bullets={[
            "HPB Asian standard: BMI 18.5–22.9 · WHO global standard: BMI 18.5–24.9",
            "A 160 cm woman: healthy weight 47.4–58.6 kg (HPB) vs 47.4–64.0 kg (WHO)",
            "Ideal weight by HPB is lower than WHO — Asians carry more body fat at the same BMI",
          ]}
          source="Health Promotion Board (HPB) Singapore · Hamwi Formula"
        />
        <IdealWeightClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-10">
        {/* Why Singapore's range differs */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Why Singapore Uses Different Healthy Weight Ranges
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The World Health Organisation defines overweight as BMI ≥ 25.0. Singapore&apos;s Health Promotion Board
              sets a lower threshold of <strong>BMI ≥ 23.0</strong>, with obesity beginning at BMI 27.5 rather than
              30.0. This isn&apos;t arbitrary — it reflects robust evidence specific to Asian physiology.
            </p>
            <p>
              Multiple studies across Chinese, Malay, and Indian populations (all present in Singapore) show that
              Asians accumulate significantly more <strong>visceral (abdominal) fat</strong> at the same BMI compared
              to people of European descent. Visceral fat is metabolically active and strongly associated with type 2
              diabetes, cardiovascular disease, and metabolic syndrome — all of which are priority health concerns in
              Singapore.
            </p>
            <p>
              For practical purposes, this means your healthy weight target should be based on HPB standards, not the
              WHO figures printed on most international charts. This calculator defaults to the HPB range.
            </p>
          </div>
        </div>

        {/* Standards comparison */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Asian HPB vs WHO BMI Standards
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>
                    Category
                  </th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-primary)" }}>
                    Singapore HPB (Asian)
                  </th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-neutral)" }}>
                    WHO (Global)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Underweight", hpb: "< 18.5", who: "< 18.5" },
                  { cat: "Healthy", hpb: "18.5 – 22.9", who: "18.5 – 24.9" },
                  { cat: "Overweight", hpb: "23.0 – 27.4", who: "25.0 – 29.9" },
                  { cat: "Obese Class I", hpb: "27.5 – 32.4", who: "30.0 – 34.9" },
                  { cat: "Obese Class II", hpb: "≥ 32.5", who: "≥ 35.0" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {row.cat}
                    </td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-primary)" }}>
                      {row.hpb}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.who}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Height reference table */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            HPB Healthy Weight Range by Height
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            Based on Singapore HPB healthy BMI range of 18.5–22.9. Ranges are the same for men and women at the same
            height — body composition goals may differ, but the clinical weight range does not.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>
                    Height
                  </th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-secondary)" }}>
                    Women — HPB Range
                  </th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-primary)" }}>
                    Men — HPB Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {HEIGHT_TABLE.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>
                      {row.height}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.femaleRange}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.maleRange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--color-neutral)" }}>
            These ranges are calculated using BMI = weight (kg) ÷ height (m)². For individualised targets, use the
            calculator above which also applies the Hamwi formula for a single midpoint ideal weight value.
          </p>
        </div>

        {/* Hamwi formula explainer */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            The Hamwi Formula Explained
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Male",
                formula: "48.0 kg + 2.7 kg for each inch over 5 feet (152.4 cm)",
                color: "var(--color-primary)",
              },
              {
                label: "Female",
                formula: "45.5 kg + 2.2 kg for each inch over 5 feet (152.4 cm)",
                color: "var(--color-secondary)",
              },
            ].map((row) => (
              <div
                key={row.label}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderLeft: `4px solid ${row.color}` }}
              >
                <p className="text-sm font-bold mb-2" style={{ color: row.color }}>
                  {row.label}
                </p>
                <code className="text-sm font-mono block" style={{ color: "var(--color-on-surface)" }}>
                  {row.formula}
                </code>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: "var(--color-on-surface-variant)" }}>
            The Hamwi formula was originally developed for clinical dietetics practice and gives a single midpoint
            &quot;ideal&quot; weight value. This calculator presents it alongside the HPB healthy BMI range, which is
            the more clinically relevant measure for Singapore residents. Use the HPB range as your primary target.
          </p>
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
            {[
              {
                q: "What is the ideal weight for Singaporeans?",
                a: "Singapore HPB defines healthy weight as a BMI between 18.5 and 22.9 — lower than the WHO's 18.5–24.9. For a 165cm Singaporean woman, the HPB healthy weight range is 50.3–62.4 kg. Use this calculator to find your specific range by height.",
              },
              {
                q: "What formula is used for ideal weight?",
                a: "This calculator uses two methods: (1) The HPB healthy BMI range (18.5–22.9), which gives the most clinically relevant range for Singapore. (2) The Hamwi formula — 48 kg + 2.7 kg per inch over 5ft for men; 45.5 kg + 2.2 kg per inch over 5ft for women.",
              },
              {
                q: "Why is Singapore's healthy BMI range different from WHO?",
                a: "Research shows Asians accumulate more visceral fat and face higher metabolic risk at lower BMI values than people of European descent. Singapore HPB therefore uses an overweight threshold of BMI 23.0 (not WHO's 25.0) and obese at 27.5 (not 30.0).",
              },
              {
                q: "How can I reach my ideal weight safely?",
                a: "Use the calorie deficit calculator to create a sustainable 500 kcal daily deficit for 0.5 kg/week weight loss. Combine with strength training to preserve muscle mass. Avoid crash diets — they reduce BMR and increase long-term weight regain risk.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>
                  {q}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {a}
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
