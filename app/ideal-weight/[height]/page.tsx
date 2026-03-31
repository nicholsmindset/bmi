import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";

const MIN_H = 145;
const MAX_H = 195;

export async function generateStaticParams() {
  return Array.from({ length: MAX_H - MIN_H + 1 }, (_, i) => ({
    height: `${i + MIN_H}cm`,
  }));
}

interface Props {
  params: Promise<{ height: string }>;
}

function parseHeight(height: string): number | null {
  const n = parseInt(height.replace("cm", ""));
  return n >= MIN_H && n <= MAX_H ? n : null;
}

// HPB healthy weight range (BMI 18.5–22.9)
function hpbRange(cm: number) {
  const m = cm / 100;
  return {
    min: Math.round(18.5 * m * m * 10) / 10,
    max: Math.round(22.9 * m * m * 10) / 10,
  };
}

// WHO healthy weight range (BMI 18.5–24.9)
function whoRange(cm: number) {
  const m = cm / 100;
  return {
    min: Math.round(18.5 * m * m * 10) / 10,
    max: Math.round(24.9 * m * m * 10) / 10,
  };
}

// Hamwi ideal weight (midpoint, in kg)
function hamwiIdeal(cm: number, sex: "male" | "female"): number {
  const inchesOver5ft = Math.max(0, (cm / 2.54) - 60);
  const kg = sex === "male"
    ? 48.0 + 2.7 * inchesOver5ft
    : 45.5 + 2.2 * inchesOver5ft;
  return Math.round(kg * 10) / 10;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { height } = await params;
  const cm = parseHeight(height);
  if (!cm) return { title: "Ideal Weight Calculator — Singapore HPB" };
  const hpb = hpbRange(cm);
  return {
    title: `Ideal Weight for ${cm}cm — Singapore HPB Healthy Range`,
    description: `What is the ideal weight for ${cm}cm? According to Singapore HPB, a healthy weight for ${cm}cm is ${hpb.min}–${hpb.max}kg. See male and female healthy ranges.`,
    alternates: { canonical: `https://bmicalculator.sg/ideal-weight/${height}` },
  };
}

export default async function IdealWeightPage({ params }: Props) {
  const { height } = await params;
  const cm = parseHeight(height);

  if (!cm) {
    return <p className="p-8 text-center">Invalid height parameter.</p>;
  }

  const hpb = hpbRange(cm);
  const who = whoRange(cm);
  const maleMid  = hamwiIdeal(cm, "male");
  const femaleMid = hamwiIdeal(cm, "female");

  return (
    <>
      <CalculatorSchema
        name={`Ideal Weight for ${cm}cm`}
        description={`Singapore HPB healthy weight range for ${cm}cm height.`}
        url={`https://bmicalculator.sg/ideal-weight/${height}`}
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: `What is the ideal weight for ${cm}cm?`,
            answer: `According to Singapore HPB Asian standards (BMI 18.5–22.9), a healthy weight for ${cm}cm is ${hpb.min}–${hpb.max}kg. The WHO standard (BMI 18.5–24.9) gives a range of ${who.min}–${who.max}kg.`,
          },
          {
            question: `What is the ideal weight for a ${cm}cm female?`,
            answer: `For a ${cm}cm woman, the Hamwi formula suggests ${femaleMid}kg as an ideal weight. Singapore HPB recommends maintaining BMI 18.5–22.9, which is ${hpb.min}–${hpb.max}kg for this height.`,
          },
          {
            question: `What is the ideal weight for a ${cm}cm male?`,
            answer: `For a ${cm}cm man, the Hamwi formula suggests ${maleMid}kg as an ideal weight. Singapore HPB recommends maintaining BMI 18.5–22.9, which is ${hpb.min}–${hpb.max}kg for this height.`,
          },
          {
            question: "Why does Singapore use different weight targets from WHO?",
            answer: "Asians carry more body fat at the same BMI compared to Caucasians. HPB's lower cutoff (overweight ≥23.0 vs WHO ≥25.0) better reflects metabolic risk in Singaporean and Asian populations.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Ideal Weight Calculator", url: "https://bmicalculator.sg/ideal-weight-calculator" },
          { name: `Ideal Weight for ${cm}cm`, url: `https://bmicalculator.sg/ideal-weight/${height}` },
        ]}
        isMedical
      />

      <CalculatorSection
        badge={`${cm}cm · Singapore HPB`}
        title={`Ideal Weight for ${cm}cm`}
        description={`The HPB-recommended healthy weight range for ${cm}cm is ${hpb.min}–${hpb.max}kg (BMI 18.5–22.9). This is Singapore's Asian standard — lower than the global WHO range.`}
      >
        {/* Weight range cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* HPB card */}
          <div className="rounded-2xl p-5 text-center" style={{ background: "var(--color-primary-container)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-primary-dark)" }}>
              Singapore HPB (Asian)
            </p>
            <p className="text-3xl font-extrabold my-2" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}>
              {hpb.min}–{hpb.max} kg
            </p>
            <p className="text-xs" style={{ color: "var(--color-primary-dark)" }}>BMI 18.5–22.9 · Recommended default</p>
          </div>
          {/* WHO card */}
          <div className="rounded-2xl p-5 text-center" style={{ background: "var(--color-surface-container)" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-on-surface-variant)" }}>
              WHO Global Standard
            </p>
            <p className="text-3xl font-extrabold my-2" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
              {who.min}–{who.max} kg
            </p>
            <p className="text-xs" style={{ color: "var(--color-neutral)" }}>BMI 18.5–24.9 · Not recommended for Asians</p>
          </div>
        </div>

        {/* Male/Female breakdown */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "var(--color-surface-container)" }}>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Method</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Female</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Male</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  method: "HPB Asian (BMI 18.5–22.9)",
                  female: `${hpb.min}–${hpb.max}kg`,
                  male: `${hpb.min}–${hpb.max}kg`,
                  note: "Singapore recommended",
                },
                {
                  method: "Hamwi Formula",
                  female: `~${femaleMid}kg`,
                  male: `~${maleMid}kg`,
                  note: "Midpoint estimate",
                },
                {
                  method: "WHO (BMI 18.5–24.9)",
                  female: `${who.min}–${who.max}kg`,
                  male: `${who.min}–${who.max}kg`,
                  note: "Global standard",
                },
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                  <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.method}</td>
                  <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.female}</td>
                  <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.male}</td>
                  <td className="p-3 text-xs" style={{ color: "var(--color-neutral)" }}>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <MedicalDisclaimer context="bmi" />
        </div>
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-10 pb-16">
        <div className="rounded-2xl p-6" style={{ background: "var(--color-surface-container)" }}>
          <h2 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Why HPB Uses Lower Cutoffs Than WHO
          </h2>
          <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            Multiple studies of Singaporean and Asian populations show that metabolic risk factors such as diabetes,
            hypertension, and dyslipidaemia begin to rise at BMI values of 23.0 — well below the WHO overweight
            threshold of 25.0. Singapore&apos;s HPB adopted these lower cutoffs to provide more accurate health risk
            assessments for Singaporeans and other Asian ethnic groups.
          </p>
        </div>
        <p className="text-sm mt-6" style={{ color: "var(--color-on-surface-variant)" }}>
          Compare with our full{" "}
          <Link href="/ideal-weight-calculator" style={{ color: "var(--color-primary)" }} className="underline font-medium">
            Ideal Weight Calculator
          </Link>{" "}
          or use the{" "}
          <Link href="/bmi-calculator" style={{ color: "var(--color-primary)" }} className="underline font-medium">
            BMI Calculator Singapore
          </Link>{" "}
          with HPB Asian standards.
        </p>
      </section>
    </>
  );
}
