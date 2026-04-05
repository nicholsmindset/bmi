import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Seniors Singapore — Age 60 and Above",
  description:
    "BMI calculator for seniors using Singapore HPB standards. Older adults have different healthy BMI ranges. Learn what BMI means for Singaporeans aged 60+.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-calculator/seniors" },
  openGraph: {
    title: "BMI Calculator for Seniors Singapore — Age 60 and Above",
    description: "BMI calculator for seniors using Singapore HPB standards. Older adults have different healthy BMI ranges. Learn what BMI means for Singaporeans aged 60+.",
    url: "https://www.bmicalculatorsingapore.com/bmi-calculator/seniors",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator for Seniors Singapore — Age 60 and Above",
    description: "BMI calculator for seniors using Singapore HPB standards. Older adults have different healthy BMI ranges. Learn what BMI means for Singaporeans aged 60+.",
  },
};

export default function BMISeniorsPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator for Seniors"
        description="BMI calculator for seniors aged 60+ using Singapore HPB standards."
        url="https://www.bmicalculatorsingapore.com/bmi-calculator/seniors"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What BMI is healthy for seniors over 65 in Singapore?", answer: "For Singaporeans aged 65 and above, some evidence suggests that a slightly higher BMI of 22–27 may be protective. Very low BMI (below 22) in older adults is associated with malnutrition, muscle loss, and higher mortality risk. Singapore HPB recommends individualized assessment for seniors." },
          { question: "Is being underweight dangerous for seniors?", answer: "Yes. Underweight seniors (BMI <18.5) are at higher risk of muscle loss, falls, fractures, and malnutrition. Maintaining muscle mass is especially important after 60." },
          { question: "Should seniors aim to lose weight to lower BMI?", answer: "Not necessarily. Seniors should avoid rapid weight loss without medical supervision as this can cause muscle loss. Focus on maintaining muscle through protein intake and activity." },
          { question: "Does BMI become less accurate with age?", answer: "Yes. Older adults tend to lose muscle mass and gain fat even with stable weight, so BMI can underestimate health risk. Additional measures like waist circumference (below 90cm for men, below 80cm for women) and grip strength assessment are recommended alongside BMI for seniors." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: "BMI for Seniors", url: "https://www.bmicalculatorsingapore.com/bmi-calculator/seniors" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="For Seniors 60+ · Singapore HPB"
        title="BMI Calculator for Seniors"
        description="BMI for seniors aged 60+ requires different interpretation. Maintaining a BMI of 18.5–24 and preserving muscle mass is key. Consult your doctor for personalised guidance."
      >
        <BMICalculatorClient />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
