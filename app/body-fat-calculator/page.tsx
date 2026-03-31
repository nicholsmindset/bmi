import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import BodyFatClient from "@/components/calculators/BodyFatClient";

export const metadata: Metadata = {
  title: "Body Fat Percentage Calculator Singapore — US Navy Method",
  description:
    "Calculate body fat % with just a tape measure. Uses the US Navy method. See ACE body fat categories and healthy ranges for Singaporean men and women.",
  alternates: { canonical: "https://bmicalculator.sg/body-fat-calculator" },
  openGraph: {
    title: "Body Fat Percentage Calculator Singapore — US Navy Method",
    description:
      "Calculate body fat % with just a tape measure. Uses the US Navy method. See ACE body fat categories and healthy ranges for Singaporean men and women.",
    url: "https://bmicalculator.sg/body-fat-calculator",
    type: "website",
  },
  twitter: {
    title: "Body Fat Percentage Calculator Singapore — US Navy Method",
    description:
      "Calculate body fat % with just a tape measure. Uses the US Navy method. See ACE body fat categories and healthy ranges for Singaporean men and women.",
  },
};

export default function BodyFatPage() {
  return (
    <>
      <CalculatorSchema
        name="Body Fat Percentage Calculator Singapore"
        description="Calculate body fat percentage using the US Navy method with ACE category assessment."
        url="https://bmicalculator.sg/body-fat-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is a healthy body fat percentage for Singaporeans?",
            answer:
              "For Singaporean men, fitness level body fat is 14–17% and acceptable is 18–24%. For Singaporean women, fitness is 21–24% and acceptable is 25–31%. These ACE categories align with Asian health risk assessments.",
          },
          {
            question: "How do I measure my body fat at home?",
            answer:
              "The US Navy method requires only a tape measure. Measure your waist at navel level, neck just below the larynx, and for women, your hips at the widest point. Enter these three (or four) measurements into the calculator above.",
          },
          {
            question: "Is BMI or body fat percentage more accurate?",
            answer:
              "Body fat percentage is a more direct measure of body composition. BMI can misclassify muscular individuals as overweight. However, for population-level screening, BMI remains the standard used by Singapore HPB.",
          },
          {
            question: "How accurate is the US Navy body fat formula?",
            answer:
              "The US Navy formula estimates body fat to within ±3–4% of DEXA scan results for most individuals. Accuracy decreases for very obese or very lean individuals. Ensure consistent measurement technique for reliable results.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Body Fat Calculator", url: "https://bmicalculator.sg/body-fat-calculator" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="US Navy Method · ACE Categories"
        title="Body Fat Percentage Calculator"
        description="Measure your waist, neck (and hips if female) to calculate body fat percentage without scales or expensive equipment. Uses the validated US Navy circumference method."
      >
        <BodyFatClient />
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
