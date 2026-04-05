import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";

export const metadata: Metadata = {
  title: "BMI Calculator for Pregnancy Singapore — Pre-Pregnancy BMI",
  description:
    "Calculate your pre-pregnancy BMI using Singapore HPB standards. Pre-pregnancy BMI determines healthy gestational weight gain targets recommended by your doctor.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-calculator/pregnancy" },
  openGraph: {
    title: "BMI Calculator for Pregnancy Singapore — Pre-Pregnancy BMI",
    description: "Calculate your pre-pregnancy BMI using Singapore HPB standards. Pre-pregnancy BMI determines healthy gestational weight gain targets recommended by your doctor.",
    url: "https://www.bmicalculatorsingapore.com/bmi-calculator/pregnancy",
    type: "website",
  },
  twitter: {
    title: "BMI Calculator for Pregnancy Singapore — Pre-Pregnancy BMI",
    description: "Calculate your pre-pregnancy BMI using Singapore HPB standards. Pre-pregnancy BMI determines healthy gestational weight gain targets recommended by your doctor.",
  },
};

export default function BMIPregnancyPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Calculator for Pregnancy"
        description="Pre-pregnancy BMI calculator to understand healthy weight gain targets during pregnancy."
        url="https://www.bmicalculatorsingapore.com/bmi-calculator/pregnancy"
        lastReviewed="2026-03-31"
        faqs={[
          { question: "Can I use this BMI calculator during pregnancy?", answer: "No. BMI is not used to assess health during pregnancy as weight changes are expected. Use your pre-pregnancy weight to calculate your pre-pregnancy BMI." },
          { question: "What BMI is recommended before pregnancy?", answer: "HPB recommends a pre-pregnancy BMI of 18.5–22.9 for Asian women. Both underweight and overweight status can affect fertility and pregnancy outcomes." },
          { question: "How much weight should I gain during pregnancy?", answer: "Recommended gestational weight gain depends on your pre-pregnancy BMI. Underweight: 12.5–18kg, normal weight: 11.5–16kg, overweight: 7–11.5kg, obese: 5–9kg." },
          { question: "Is BMI used to monitor weight during pregnancy?", answer: "No. During pregnancy, your obstetrician monitors gestational weight gain rather than BMI. Enter your pre-pregnancy weight to use this calculator meaningfully." },
          { question: "What is a healthy weight gain during pregnancy in Singapore?", answer: "Singapore MOH recommends gestational weight gain based on pre-pregnancy BMI: 12.5–18kg for underweight (BMI below 18.5), 11.5–16kg for healthy weight (BMI 18.5–22.9), 7–11.5kg for overweight (BMI 23–27.4), and 5–9kg for obese (BMI 27.5 and above)." },
          { question: "When can I use a BMI calculator after pregnancy?", answer: "Standard BMI calculators are accurate for non-pregnant adults. After delivery, most women retain some weight beyond pre-pregnancy levels. HPB recommends returning to a healthy BMI within 6–12 months postpartum through gradual diet adjustment and safe exercise, not rapid weight loss." },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: "BMI for Pregnancy", url: "https://www.bmicalculatorsingapore.com/bmi-calculator/pregnancy" },
        ]}
        isMedical
      />
      <CalculatorSection
        badge="Pre-Pregnancy BMI · HPB Standard"
        title="BMI Calculator for Pregnancy"
        description="Enter your pre-pregnancy weight and height. BMI is not calculated during pregnancy — this tool helps you understand your pre-pregnancy BMI, which your obstetrician uses to guide gestational weight gain targets."
      >
        {/* No weight-loss affiliate products for pregnancy page */}
        <BMICalculatorClient showChildrenWarning />
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>
    </>
  );
}
