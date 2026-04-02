import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";

const MIN_AGE = 18;
const MAX_AGE = 80;

export async function generateStaticParams() {
  return Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => ({
    age: String(i + MIN_AGE),
  }));
}

interface Props {
  params: Promise<{ age: string }>;
}

function parseAge(age: string): number | null {
  const n = parseInt(age);
  return n >= MIN_AGE && n <= MAX_AGE ? n : null;
}

function getAgeContext(age: number): string {
  if (age < 30) return "Young adults aged 18–29 benefit most from establishing healthy BMI habits early. Singapore HPB research shows metabolic risk rises sharply with BMI above 23.0 in Asian adults.";
  if (age < 40) return "Adults in their 30s often experience gradual weight gain from career stress and lifestyle changes. Maintaining BMI below 23.0 significantly reduces type 2 diabetes risk in Singaporean adults.";
  if (age < 50) return "In your 40s, muscle mass begins to decline (sarcopenia) and body fat distribution shifts. Singapore MOH recommends regular physical activity and a balanced diet to maintain healthy BMI in midlife.";
  if (age < 60) return "Adults in their 50s face increased cardiovascular risk. Singapore HPB data links BMI above 27.5 (Obese I) with higher rates of hypertension and dyslipidaemia in local populations.";
  if (age < 70) return "For Singaporeans in their 60s, a BMI of 18.5–24 is recommended. Some research suggests slightly higher BMI (22–24) may be protective against frailty and osteoporosis in older Asian adults.";
  return "For seniors aged 70+, maintaining muscle mass and avoiding underweight status (BMI <18.5) is as important as avoiding obesity. Consult your doctor for personalised weight management guidance.";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { age } = await params;
  const a = parseAge(age);
  if (!a) return { title: "BMI Calculator by Age — Singapore HPB" };
  return {
    title: `BMI Calculator for Age ${a} — Healthy Range Singapore`,
    description: `What is a healthy BMI at age ${a} in Singapore? Calculate your BMI using HPB Asian standards and see what the numbers mean for your age group.`,
    alternates: { canonical: `https://www.bmicalculatorsingapore.com/bmi/age/${age}` },
  };
}

export default async function BMIByAgePage({ params }: Props) {
  const { age } = await params;
  const a = parseAge(age);

  if (!a) {
    return <p className="p-8 text-center">Invalid age parameter.</p>;
  }

  const showSeniorNote = a >= 65;

  return (
    <>
      <CalculatorSchema
        name={`BMI Calculator for Age ${a}`}
        description={`Calculate your BMI at age ${a} using Singapore HPB Asian standards.`}
        url={`https://www.bmicalculatorsingapore.com/bmi/age/${age}`}
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: `What is a healthy BMI for a ${a}-year-old in Singapore?`,
            answer: `For ${a >= 65 ? "seniors" : "adults"} in Singapore, the HPB recommends a BMI of 18.5–22.9 as healthy. ${showSeniorNote ? "For those 65+, some guidelines suggest maintaining BMI up to 23–24 may protect against frailty." : "Overweight starts at 23.0 and obese at 27.5 — lower thresholds than WHO standards."}`,
          },
          {
            question: `Does healthy BMI change with age for Singaporeans?`,
            answer: `The HPB Asian cutoffs (healthy: 18.5–22.9, overweight: 23.0–27.4, obese: ≥27.5) apply to all adults. For those over 65, slightly higher BMI may be acceptable — consult your doctor for personalised guidance.`,
          },
          {
            question: "Why does Singapore use different BMI cutoffs from the WHO?",
            answer: "Asians carry more body fat at the same BMI compared to Europeans. Research shows Singapore's HPB cutoffs (overweight ≥23.0 vs WHO ≥25.0) better predict metabolic disease risk in local populations.",
          },
          {
            question: "How accurate is BMI as an indicator of health?",
            answer: "BMI is a useful screening tool but does not measure body fat directly. It can misclassify muscular individuals as overweight. For a complete picture, consider waist circumference and waist-to-hip ratio alongside BMI.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Calculator", url: "https://www.bmicalculatorsingapore.com/bmi-calculator" },
          { name: `BMI for Age ${a}`, url: `https://www.bmicalculatorsingapore.com/bmi/age/${age}` },
        ]}
        isMedical
      />

      <CalculatorSection
        badge={`Age ${a} · Singapore HPB`}
        title={`BMI Calculator for Age ${a}`}
        description={`Calculate your BMI using Singapore's HPB Asian standards. ${showSeniorNote ? "For seniors 65+, consult your doctor about your ideal weight range." : "Overweight starts at BMI 23.0 — lower than the WHO cutoff of 25.0."}`}
      >
        <BMICalculatorClient showChildrenWarning={a < 18} />
        {showSeniorNote && (
          <div
            className="mt-4 p-4 rounded-xl text-sm border-l-4"
            style={{ background: "#E3F2FD", borderLeftColor: "#1565C0", color: "#0D47A1" }}
          >
            <strong>Note for seniors 65+:</strong> For those aged 65 and above, some clinical guidelines suggest a BMI of up to 23–24 may be protective against frailty and malnutrition. Discuss your ideal weight range with your doctor.
          </div>
        )}
        <div className="mt-6"><MedicalDisclaimer context="bmi" /></div>
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-10 pb-16">
        <div className="rounded-2xl p-6" style={{ background: "var(--color-surface-container)" }}>
          <h2 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            BMI at Age {a} — What You Should Know
          </h2>
          <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            {getAgeContext(a)}
          </p>
        </div>
        <p className="text-sm mt-6" style={{ color: "var(--color-on-surface-variant)" }}>
          Use our full{" "}
          <Link href="/bmi-calculator" style={{ color: "var(--color-primary)" }} className="underline font-medium">
            BMI Calculator Singapore
          </Link>{" "}
          for complete Asian HPB analysis, or check the{" "}
          <Link href="/bmi-chart" style={{ color: "var(--color-primary)" }} className="underline font-medium">
            BMI Chart
          </Link>{" "}
          for your age group.
        </p>
      </section>
    </>
  );
}
