import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Men Singapore — Healthy Range",
  description:
    "BMI calculator for men using Singapore HPB Asian standards. See what BMI means for male health, muscle mass considerations, and healthy weight ranges.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-calculator/men" },
  openGraph: {
    title: "BMI Calculator for Men Singapore — Healthy Range",
    description: "BMI calculator for men using Singapore HPB Asian standards. See what BMI means for male health, muscle mass considerations, and healthy weight ranges.",
    url: "https://www.bmicalculatorsingapore.com/bmi-calculator/men",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator for Men Singapore — Healthy Range",
    description: "BMI calculator for men using Singapore HPB Asian standards. See what BMI means for male health, muscle mass considerations, and healthy weight ranges.",
  },
};

export default function BMIMenPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator for Men"
        description="BMI calculator for men using Singapore HPB Asian standards."
        url="https://www.bmicalculatorsingapore.com/bmi-calculator/men"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What is a healthy BMI for men in Singapore?", answer: "A healthy BMI for men in Singapore is 18.5–22.9 under HPB Asian standards. Men with high muscle mass may have a higher BMI without excess fat." },
          { question: "At what BMI should men in Singapore be concerned?", answer: "Men with BMI ≥23.0 are considered overweight by HPB standards. At BMI ≥27.5, the health risks associated with obesity — including diabetes and heart disease — increase significantly." },
          { question: "Does BMI account for muscle mass in men?", answer: "No. BMI does not distinguish muscle from fat. Athletic men with high muscle mass may have elevated BMI without health risk. Body fat percentage is a more accurate measure for muscular individuals." },
          { question: "What is the average BMI for men in Singapore?", answer: "The average BMI for adult men in Singapore is approximately 23.6, placing the average Singaporean man in the overweight category by HPB Asian standards." },
          { question: "What is a healthy BMI for men in Singapore?", answer: "A healthy BMI for adult men in Singapore is 18.5–22.9 under HPB Asian standards. BMI 23.0–27.4 is overweight and 27.5 or above is obese. Men with normal BMI but high waist circumference (above 90cm) may still carry elevated cardiovascular risk." },
          { question: "Does BMI differ for men vs women?", answer: "The BMI formula is the same for men and women, but body composition differs. Men typically carry more muscle mass, which can push BMI slightly higher without reflecting excess fat. Body fat percentage testing provides a more accurate picture for muscular men." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: "BMI for Men", url: "https://www.bmicalculatorsingapore.com/bmi-calculator/men" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="For Men · HPB Asian Standard"
        title="BMI Calculator for Men"
        description="BMI calculator for Singaporean men using HPB Asian standards. Note: men with high muscle mass may have elevated BMI without excess body fat."
      >
        <BMICalculatorClient />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
