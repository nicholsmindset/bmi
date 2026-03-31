import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "Healthy BMI Singapore — HPB Asian BMI Ranges Explained",
  description:
    "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults. Check your BMI against Singapore's official HPB Asian standards — overweight starts at 23.0.",
  alternates: { canonical: "https://bmicalculator.sg/bmi-calculator/asian" },
  openGraph: {
    title: "Healthy BMI Singapore — HPB Asian BMI Ranges Explained",
    description: "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults. Check your BMI against Singapore's official HPB Asian standards — overweight starts at 23.0.",
    url: "https://bmicalculator.sg/bmi-calculator/asian",
    type: "website",
  },
  twitter: {
    title: "Healthy BMI Singapore — HPB Asian BMI Ranges Explained",
    description: "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults. Check your BMI against Singapore's official HPB Asian standards — overweight starts at 23.0.",
  },
};

export default function AsianBMIPage() {
  return (
    <>
      <CalculatorSchema
        name="Asian BMI Calculator"
        description="BMI calculator using HPB Asian standards for Singaporeans."
        url="https://bmicalculator.sg/bmi-calculator/asian"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What is a healthy BMI for Asians?", answer: "The HPB recommends 18.5–22.9 for Asians. Above 23.0 is overweight, above 27.5 is obese." },
          { question: "Why are Asian BMI cutoffs lower?", answer: "Asians have higher body fat at the same BMI, increasing disease risk at lower weights." },
          { question: "Is BMI 23 overweight for Asians?", answer: "Yes. BMI ≥23.0 is overweight by HPB Asian standards, vs ≥25.0 by WHO standards." },
          { question: "Does this apply to Chinese, Malay, and Indian Singaporeans?", answer: "Yes — HPB Asian standards apply to all Asian ethnic groups in Singapore." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "BMI Calculator", url: "https://bmicalculator.sg/bmi-calculator" },
          { name: "Asian Standards", url: "https://bmicalculator.sg/bmi-calculator/asian" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="HPB Asian Standard"
        title="Asian BMI Calculator"
        description="Uses Singapore's HPB Asian cutoffs: healthy 18.5–22.9, overweight ≥23.0. The standard recommended for all Asian populations."
      >
        <BMICalculatorClient />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
