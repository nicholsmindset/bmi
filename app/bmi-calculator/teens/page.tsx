import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Teenagers Singapore — Age 13 to 18",
  description:
    "BMI calculator for teenagers in Singapore. Understand what your BMI means as a teen — adult BMI categories only apply from age 18. Consult your doctor for personalised guidance.",
  alternates: { canonical: "https://bmicalculator.sg/bmi-calculator/teens" },
  openGraph: {
    title: "BMI Calculator for Teenagers Singapore — Age 13 to 18",
    description: "BMI calculator for teenagers in Singapore. Understand what your BMI means as a teen — adult BMI categories only apply from age 18. Consult your doctor for personalised guidance.",
    url: "https://bmicalculator.sg/bmi-calculator/teens",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator for Teenagers Singapore — Age 13 to 18",
    description: "BMI calculator for teenagers in Singapore. Understand what your BMI means as a teen — adult BMI categories only apply from age 18. Consult your doctor for personalised guidance.",
  },
};

export default function BMITeensPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator for Teenagers"
        description="BMI calculator for teenagers with guidance on age-specific interpretation."
        url="https://bmicalculator.sg/bmi-calculator/teens"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What is a healthy BMI for teenagers?", answer: "For teenagers, BMI is interpreted using BMI-for-age percentile charts, not adult cutoffs. A healthy range is typically between the 5th and 85th percentile for age and sex." },
          { question: "Can teenagers use adult BMI categories?", answer: "No. Adult BMI categories (underweight <18.5, healthy 18.5–22.9) only apply to adults aged 18+. Teen BMI must be assessed using growth percentile charts." },
          { question: "What is a healthy weight for a 16-year-old?", answer: "Healthy weight for a teenager depends on their height, age, and sex. Use Singapore HPB growth charts or consult your school health service or paediatrician." },
          { question: "Should teenagers try to lose weight based on BMI?", answer: "Teenagers should not attempt weight loss without medical supervision. BMI in teens is still developing. Consult a doctor or dietitian before any dietary changes." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMI Calculator", url: "https://bmicalculator.sg/bmi-calculator" },
          { name: "BMI for Teenagers", url: "https://bmicalculator.sg/bmi-calculator/teens" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="For Teens 13–18 · Use With Caution"
        title="BMI Calculator for Teenagers"
        description="Adult BMI categories only apply from age 18. This tool shows your BMI number — teens should have results interpreted using age-specific growth percentile charts with a healthcare professional."
      >
        <BMICalculatorClient showChildrenWarning />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
