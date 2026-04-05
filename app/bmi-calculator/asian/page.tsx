import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";
import QuickAnswer from "@/components/ui/QuickAnswer";

export const metadata: Metadata = {
  title: "Healthy BMI Singapore — HPB Asian BMI Ranges Explained",
  description:
    "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults. Check your BMI against Singapore's official HPB Asian standards — overweight starts at 23.0.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-calculator/asian" },
  openGraph: {
    title: "Healthy BMI Singapore — HPB Asian BMI Ranges Explained",
    description: "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults. Check your BMI against Singapore's official HPB Asian standards — overweight starts at 23.0.",
    url: "https://www.bmicalculatorsingapore.com/bmi-calculator/asian",
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
        url="https://www.bmicalculatorsingapore.com/bmi-calculator/asian"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "What is a healthy BMI for Asians?", answer: "The HPB recommends 18.5–22.9 for Asians. Above 23.0 is overweight, above 27.5 is obese." },
          { question: "Why are Asian BMI cutoffs lower?", answer: "Asians have higher body fat at the same BMI, increasing disease risk at lower weights." },
          { question: "Is BMI 23 overweight for Asians?", answer: "Yes. BMI ≥23.0 is overweight by HPB Asian standards, vs ≥25.0 by WHO standards." },
          { question: "Does this apply to Chinese, Malay, and Indian Singaporeans?", answer: "Yes — HPB Asian standards apply to all Asian ethnic groups in Singapore." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: "Asian Standards", url: "https://www.bmicalculatorsingapore.com/bmi-calculator/asian" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="HPB Asian Standard"
        title="Asian BMI Calculator"
        description="Uses Singapore's HPB Asian cutoffs: healthy 18.5–22.9, overweight ≥23.0. The standard recommended for all Asian populations."
      >
        <QuickAnswer
          answer="The HPB-recommended healthy BMI range for Asian adults in Singapore is 18.5–22.9. Overweight is defined as BMI ≥ 23.0, and obese as ≥ 27.5."
          bullets={[
            "HPB cutoffs: Healthy 18.5–22.9 · Overweight 23.0–27.4 · Obese I 27.5–32.4 · Obese II ≥ 32.5",
            "Overweight threshold is 23.0 — 2 points lower than the WHO global standard of 25.0",
            "~40% of Singaporeans are overweight or obese under HPB Asian standards",
          ]}
          source="Health Promotion Board (HPB) Singapore"
        />
        <BMICalculatorClient />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
