import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Children Singapore — Age 2 to 18",
  description:
    "BMI calculator for children in Singapore. Note: adult BMI categories do not apply to children. Children's BMI must be interpreted using age- and sex-specific percentile charts.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-calculator/children" },
  openGraph: {
    title: "BMI Calculator for Children Singapore — Age 2 to 18",
    description: "BMI calculator for children in Singapore. Note: adult BMI categories do not apply to children. Children's BMI must be interpreted using age- and sex-specific percentile charts.",
    url: "https://www.bmicalculatorsingapore.com/bmi-calculator/children",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator for Children Singapore — Age 2 to 18",
    description: "BMI calculator for children in Singapore. Note: adult BMI categories do not apply to children. Children's BMI must be interpreted using age- and sex-specific percentile charts.",
  },
};

export default function BMIChildrenPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator for Children"
        description="BMI calculator for children with important guidance on interpreting results using age-specific percentiles."
        url="https://www.bmicalculatorsingapore.com/bmi-calculator/children"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "Can I use adult BMI categories for children?", answer: "No. Adult BMI categories (like ≥23 = overweight) do not apply to children. Children's BMI must be compared to age- and sex-specific percentile charts provided by MOH or HPB." },
          { question: "How is BMI interpreted for children in Singapore?", answer: "For children, BMI is plotted on growth charts. Above the 91st percentile for age and sex is considered overweight; above the 98th percentile is obese. Consult your paediatrician." },
          { question: "When should I be concerned about my child's BMI?", answer: "If your child's BMI-for-age consistently falls above the 91st or below the 5th percentile, consult a paediatrician or dietitian for personalised assessment." },
          { question: "Where can I get a Singapore children's BMI chart?", answer: "HPB and KKH Women's and Children's Hospital provide Singapore-specific growth charts for children. Your child's paediatrician can plot BMI against age-appropriate percentile curves." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: "BMI for Children", url: "https://www.bmicalculatorsingapore.com/bmi-calculator/children" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="For Children · Read Disclaimer First"
        title="BMI Calculator for Children"
        description="Important: Adult BMI categories do not apply to children under 18. This calculator shows the BMI value only. Interpretation requires age- and sex-specific growth percentile charts — consult your paediatrician."
      >
        {/* showChildrenWarning=true suppresses all affiliate products on this page */}
        <BMICalculatorClient showChildrenWarning />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
