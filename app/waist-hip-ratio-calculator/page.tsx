import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import WHRClient from "@/components/calculators/WHRClient";

export const metadata: Metadata = {
  title: "Waist-to-Hip Ratio Calculator — Cardiovascular Risk Singapore",
  description:
    "Calculate your waist-to-hip ratio using Singapore HPB Asian thresholds. WHR identifies central obesity risk that BMI alone can miss.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator" },
  openGraph: {
    title: "Waist-to-Hip Ratio Calculator — Cardiovascular Risk Singapore",
    description:
      "Calculate your waist-to-hip ratio using Singapore HPB Asian thresholds. WHR identifies central obesity risk that BMI alone can miss.",
    url: "https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator",
    type: "website",
  },
  twitter: {
    title: "Waist-to-Hip Ratio Calculator — Cardiovascular Risk Singapore",
    description:
      "Calculate your waist-to-hip ratio using Singapore HPB Asian thresholds. WHR identifies central obesity risk that BMI alone can miss.",
  },
};

export default function WHRPage() {
  return (
    <>
      <CalculatorSchema
        name="Waist-to-Hip Ratio Calculator Singapore"
        description="Calculate waist-to-hip ratio using Singapore HPB and WHO Asia-Pacific cardiovascular risk thresholds."
        url="https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is a healthy waist-to-hip ratio for Singaporeans?",
            answer:
              "Singapore HPB and WHO Asia-Pacific guidelines recommend a WHR below 0.90 for men and below 0.80 for women as low risk. Above 0.95 (men) and 0.85 (women) indicates high cardiovascular risk.",
          },
          {
            question: "Why is waist-to-hip ratio important?",
            answer:
              "WHR measures central (abdominal) obesity — excess fat around the belly — which is more strongly linked to cardiovascular disease, diabetes, and metabolic syndrome than total body fat or BMI.",
          },
          {
            question: "How does WHR compare to BMI?",
            answer:
              "BMI doesn't distinguish where fat is stored. Two people with the same BMI can have very different cardiovascular risk depending on fat distribution. WHR identifies abdominal obesity that BMI misses.",
          },
          {
            question: "How do I reduce my waist-to-hip ratio?",
            answer:
              "Reduce overall body fat through a calorie deficit and regular aerobic exercise. Spot-reducing belly fat alone is not possible, but consistent exercise — especially cardio — preferentially reduces visceral abdominal fat.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Waist-Hip Ratio Calculator", url: "https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator" },
        ]}
      />

      <CalculatorSection
        badge="WHR · Singapore HPB / WHO Asia-Pacific"
        title="Waist-to-Hip Ratio Calculator"
        description="The BMI check that BMI misses. Waist-to-hip ratio measures abdominal fat distribution — a stronger predictor of cardiovascular risk than weight alone. Singapore uses lower thresholds than global guidelines."
      >
        <WHRClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>
    </>
  );
}
