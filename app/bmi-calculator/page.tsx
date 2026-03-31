import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";
import AdUnit from "@/components/ui/AdUnit";

export const metadata: Metadata = {
  title: "BMI Calculator Singapore — Free HPB Asian Standard",
  description:
    "Free BMI calculator using Singapore's HPB Asian standards. Overweight starts at 23.0, not 25.0. Get instant results with healthy weight range for your height.",
  alternates: {
    canonical: "https://bmicalculator.sg/bmi-calculator",
  },
  openGraph: {
    title: "BMI Calculator Singapore — Free HPB Asian Standard",
    description:
      "Free BMI calculator using Singapore's HPB Asian standards. Overweight starts at 23.0, not 25.0. Get instant results with healthy weight range for your height.",
    url: "https://bmicalculator.sg/bmi-calculator",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator Singapore — Free HPB Asian Standard",
    description:
      "Free BMI calculator using Singapore's HPB Asian standards. Overweight starts at 23.0, not 25.0. Get instant results with healthy weight range for your height.",
  },
};

const FAQS = [
  {
    question: "What is a healthy BMI for Singaporeans?",
    answer:
      "According to Singapore's Health Promotion Board (HPB), a healthy BMI for Asian adults is 18.5–22.9. This is lower than the WHO global range of 18.5–24.9, as Asians have a higher proportion of body fat at the same BMI compared to Caucasians.",
  },
  {
    question: "Why does Singapore use different BMI cutoffs from the WHO?",
    answer:
      "Research shows that Asians, including Singaporeans, have higher body fat percentages and greater risk of obesity-related diseases like diabetes and heart disease at lower BMI values. The HPB Asian cutoffs (overweight ≥23.0, obese ≥27.5) better reflect these health risks.",
  },
  {
    question: "What is the average BMI in Singapore?",
    answer:
      "The average BMI in Singapore is approximately 23.5 for adults, placing the average Singaporean in the overweight category by HPB standards. Around 40% of Singaporeans aged 18–69 are classified as overweight or obese by Asian BMI standards.",
  },
  {
    question: "Is BMI accurate for Singaporeans?",
    answer:
      "BMI is a useful population-level screening tool but has limitations — it does not measure body fat directly or account for muscle mass. For Singaporeans, the Asian HPB cutoffs provide a more accurate health risk assessment than WHO standards. Those with high muscle mass (athletes) may have elevated BMI without excess fat.",
  },
];

const RELATED = [
  {
    name: "Calorie Deficit Calculator",
    tagline: "Plan your weight loss",
    href: "/calorie-deficit-calculator",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#7B1FA2",
  },
  {
    name: "Body Fat Percentage Calculator",
    tagline: "US Navy method",
    href: "/body-fat-calculator",
    iconPath: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a7 7 0 110 14A7 7 0 0112 5zm0 2a5 5 0 100 10A5 5 0 0012 7z",
    accent: "#00695C",
  },
  {
    name: "Waist-to-Hip Ratio Calculator",
    tagline: "Abdominal fat risk",
    href: "/waist-hip-ratio-calculator",
    iconPath: "M17 8C8 10 5.9 16.17 3.82 21L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-2 4-5 5z",
    accent: "#B71C1C",
  },
  {
    name: "Ideal Weight Calculator",
    tagline: "HPB healthy range",
    href: "/ideal-weight-calculator",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    accent: "#005EB8",
  },
];

export default function BMICalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator Singapore"
        description="Calculate your BMI using Singapore HPB Asian standards."
        url="https://bmicalculator.sg/bmi-calculator"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMI Calculator", url: "https://bmicalculator.sg/bmi-calculator" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="Singapore HPB Standard"
        title="BMI Calculator Singapore"
        description="Using Singapore's Health Promotion Board (HPB) Asian standards — the medically accurate cutoffs for Singaporeans. Overweight starts at BMI 23.0, not the WHO's 25.0."
      >
        <BMICalculatorClient />

        <div className="mt-6">
          <AdUnit
            format="leaderboard"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          />
        </div>

        <div className="mt-8">
          <MedicalDisclaimer context="bmi" />
        </div>

        <RelatedCalculators items={RELATED} />
      </CalculatorSection>

      {/* Educational content */}
      <section
        className="max-w-6xl mx-auto px-4 sm:px-6 pb-16"
        style={{ color: "var(--color-on-surface)" }}
      >
        <div
          className="mt-8 p-6 rounded-2xl"
          style={{ background: "var(--color-surface-low)" }}
        >
          <AdUnit
            format="responsive"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
          />
        </div>

        <h2
          className="text-2xl font-bold mt-12 mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Singapore HPB vs WHO BMI Standards
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "var(--color-surface-container)" }}>
                <th className="text-left p-3 font-semibold">Category</th>
                <th className="text-left p-3 font-semibold">HPB Asian BMI</th>
                <th className="text-left p-3 font-semibold">WHO Global BMI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Underweight", "< 18.5", "< 18.5"],
                ["Healthy weight", "18.5 – 22.9", "18.5 – 24.9"],
                ["Overweight", "23.0 – 27.4", "25.0 – 29.9"],
                ["Obese I", "27.5 – 32.4", "30.0 – 34.9"],
                ["Obese II", "≥ 32.5", "≥ 35.0"],
              ].map(([cat, hpb, who]) => (
                <tr
                  key={cat}
                  className="border-t"
                  style={{ borderColor: "var(--color-outline-variant)" }}
                >
                  <td className="p-3 font-medium">{cat}</td>
                  <td className="p-3">{hpb}</td>
                  <td className="p-3" style={{ color: "var(--color-neutral)" }}>
                    {who}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2
          className="text-2xl font-bold mt-10 mb-4"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold mb-1">{faq.question}</h3>
              <p style={{ color: "var(--color-on-surface-variant)" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
