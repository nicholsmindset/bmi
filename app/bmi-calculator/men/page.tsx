import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Men Singapore — Healthy Range",
  description:
    "BMI calculator for men using Singapore HPB Asian standards. See what BMI means for male health, muscle mass considerations, and healthy weight ranges.",
  alternates: { canonical: "https://bmicalculator.sg/bmi-calculator/men" },
  openGraph: {
    title: "BMI Calculator for Men Singapore — Healthy Range",
    description: "BMI calculator for men using Singapore HPB Asian standards. See what BMI means for male health, muscle mass considerations, and healthy weight ranges.",
    url: "https://bmicalculator.sg/bmi-calculator/men",
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
        url="https://bmicalculator.sg/bmi-calculator/men"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What is a healthy BMI for men in Singapore?", answer: "A healthy BMI for men in Singapore is 18.5–22.9 under HPB Asian standards. Men with high muscle mass may have a higher BMI without excess fat." },
          { question: "At what BMI should men in Singapore be concerned?", answer: "Men with BMI ≥23.0 are considered overweight by HPB standards. At BMI ≥27.5, the health risks associated with obesity — including diabetes and heart disease — increase significantly." },
          { question: "Does BMI account for muscle mass in men?", answer: "No. BMI does not distinguish muscle from fat. Athletic men with high muscle mass may have elevated BMI without health risk. Body fat percentage is a more accurate measure for muscular individuals." },
          { question: "What is the average BMI for men in Singapore?", answer: "The average BMI for adult men in Singapore is approximately 23.6, placing the average Singaporean man in the overweight category by HPB Asian standards." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMI Calculator", url: "https://bmicalculator.sg/bmi-calculator" },
          { name: "BMI for Men", url: "https://bmicalculator.sg/bmi-calculator/men" },
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
