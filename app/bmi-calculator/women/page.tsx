import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Women Singapore — Healthy Weight Range",
  description:
    "BMI calculator for women using Singapore HPB Asian standards. See healthy BMI ranges for Singaporean women and what your result means for your health.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-calculator/women" },
  openGraph: {
    title: "BMI Calculator for Women Singapore — Healthy Weight Range",
    description: "BMI calculator for women using Singapore HPB Asian standards. See healthy BMI ranges for Singaporean women and what your result means for your health.",
    url: "https://www.bmicalculatorsingapore.com/bmi-calculator/women",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator for Women Singapore — Healthy Weight Range",
    description: "BMI calculator for women using Singapore HPB Asian standards. See healthy BMI ranges for Singaporean women and what your result means for your health.",
  },
};

export default function BMIWomenPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator for Women"
        description="BMI calculator for women using Singapore HPB Asian standards."
        url="https://www.bmicalculatorsingapore.com/bmi-calculator/women"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What is a healthy BMI for women in Singapore?", answer: "A healthy BMI for women in Singapore is 18.5–22.9 under HPB Asian standards. Women generally have higher body fat percentages than men at the same BMI." },
          { question: "What BMI is considered underweight for women?", answer: "A BMI below 18.5 is considered underweight. For women, this can be associated with nutrient deficiencies, hormonal disruption, and reduced bone density." },
          { question: "Is BMI accurate for women?", answer: "BMI is a useful screening tool but has limitations for women. It doesn't distinguish fat from lean mass and may underestimate health risks for women with low muscle mass and high body fat at 'normal' BMI." },
          { question: "What BMI is ideal for a woman to get pregnant?", answer: "HPB recommends a BMI of 18.5–22.9 before pregnancy. Both underweight (BMI <18.5) and overweight (BMI ≥23.0) status can affect fertility and pregnancy outcomes." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: "BMI for Women", url: "https://www.bmicalculatorsingapore.com/bmi-calculator/women" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="For Women · HPB Asian Standard"
        title="BMI Calculator for Women"
        description="BMI calculator for Singaporean women using HPB Asian standards. Healthy range: 18.5–22.9. Not applicable during pregnancy."
      >
        <BMICalculatorClient />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
