import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import QuickAnswer from "@/components/ui/QuickAnswer";
import Link from "next/link";
import WHRClient from "@/components/calculators/WHRClient";

export const metadata: Metadata = {
  title: "Waist-to-Hip Ratio Calculator — Cardiovascular Risk Singapore",
  description:
    "Calculate your waist-to-hip ratio using Singapore HPB Asian thresholds. WHR identifies central obesity risk that BMI alone can miss.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator" },
  openGraph: {
    title: "Waist-to-Hip Ratio Calculator — Cardiovascular Risk Singapore",
    description:
      "Calculate your waist-to-hip ratio using Singapore HPB Asian thresholds. WHR identifies central obesity risk that BMI alone can miss.",
    url: "https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator",
    type: "website",
  },
  twitter: {
    title: "Waist-to-Hip Ratio Calculator — Cardiovascular Risk Singapore",
    description:
      "Calculate your waist-to-hip ratio using Singapore HPB Asian thresholds. WHR identifies central obesity risk that BMI alone can miss.",
  },
};

export default function WHRPage() {
  return (
    <>
      <CalculatorSchema
        name="Waist-to-Hip Ratio Calculator Singapore"
        description="Calculate waist-to-hip ratio using Singapore HPB and WHO Asia-Pacific cardiovascular risk thresholds."
        url="https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is a healthy waist-to-hip ratio for Singaporeans?",
            answer:
              "Singapore HPB and WHO Asia-Pacific guidelines recommend a WHR below 0.90 for men and below 0.80 for women as low risk. Above 0.95 (men) and 0.85 (women) indicates high cardiovascular risk.",
          },
          {
            question: "Why is waist-to-hip ratio important?",
            answer:
              "WHR measures central (abdominal) obesity — excess fat around the belly — which is more strongly linked to cardiovascular disease, diabetes, and metabolic syndrome than total body fat or BMI.",
          },
          {
            question: "How does WHR compare to BMI?",
            answer:
              "BMI doesn't distinguish where fat is stored. Two people with the same BMI can have very different cardiovascular risk depending on fat distribution. WHR identifies abdominal obesity that BMI misses.",
          },
          {
            question: "How do I reduce my waist-to-hip ratio?",
            answer:
              "Reduce overall body fat through a calorie deficit and regular aerobic exercise. Spot-reducing belly fat alone is not possible, but consistent exercise — especially cardio — preferentially reduces visceral abdominal fat.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Waist-Hip Ratio Calculator", url: "https://www.bmicalculatorsingapore.com/waist-hip-ratio-calculator" },
        ]}
        howToSteps={[
          { name: "Select your sex", text: "Men and women have different risk thresholds for waist-to-hip ratio." },
          { name: "Measure your waist", text: "Measure at the narrowest point of the torso, usually midway between the lowest rib and the hip bone. Breathe out gently." },
          { name: "Measure your hips", text: "Measure at the widest point of the hips and buttocks. Keep the tape horizontal." },
          { name: "Read your risk category", text: "Your WHR and cardiovascular risk category (Low / Moderate / High) appear instantly based on Singapore HPB / WHO Asia-Pacific thresholds." },
        ]}
        citations={[
          { name: "WHO Western Pacific Region — Waist Circumference and WHR", url: "https://apps.who.int/iris/handle/10665/43190" },
          { name: "Health Promotion Board — Obesity and Abdominal Obesity", url: "https://www.healthhub.sg/live-healthy/healthy-weight" },
        ]}
      />

      <CalculatorSection
        badge="WHR · Singapore HPB / WHO Asia-Pacific"
        title="Waist-to-Hip Ratio Calculator"
        description="The BMI check that BMI misses. Waist-to-hip ratio measures abdominal fat distribution — a stronger predictor of cardiovascular risk than weight alone. Singapore uses lower thresholds than global guidelines."
      >
        <QuickAnswer
          answer="A healthy waist-to-hip ratio is below 0.90 for men and below 0.80 for women (Singapore HPB / WHO Asia-Pacific). Higher ratios indicate elevated cardiovascular risk from central obesity."
          bullets={[
            "Men: Low risk < 0.90 · Moderate 0.90–0.95 · High risk > 0.95",
            "Women: Low risk < 0.80 · Moderate 0.80–0.85 · High risk > 0.85",
            "WHR detects abdominal fat that BMI misses — a key risk factor for diabetes and heart disease",
          ]}
          source="Singapore HPB · WHO Western Pacific Region"
        />
        <WHRClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-10">

        {/* H2: What Your WHR Result Means */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            What Your WHR Result Means
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Risk Level</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Men (WHR)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Women (WHR)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { risk: "Low risk",      men: "< 0.90", women: "< 0.80", ok: true },
                  { risk: "Moderate risk", men: "0.90–0.95", women: "0.80–0.85", ok: false },
                  { risk: "High risk",     men: "> 0.95", women: "> 0.85", ok: false },
                ].map((row) => (
                  <tr key={row.risk} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: row.ok ? "var(--color-success)" : "var(--color-warning)" }}>{row.risk}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.men}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>Source: Singapore HPB and WHO Western Pacific Region Asia-Pacific guidelines.</p>
        </div>

        {/* H2: WHR vs BMI */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Why WHR Matters More Than BMI for Singaporeans
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              <Link href="/bmi-calculator" className="underline" style={{ color: "var(--color-primary)" }}>BMI alone</Link> cannot
              identify where fat is stored. Research consistently shows that <strong>visceral fat</strong> —
              fat surrounding internal organs in the abdominal cavity — is far more metabolically dangerous
              than subcutaneous fat stored elsewhere.
            </p>
            <p>
              South Asian and Chinese Singaporeans in particular tend to accumulate visceral fat at lower
              overall BMI levels. A person with a &ldquo;normal&rdquo; BMI of 22 can still have an elevated WHR
              and carry meaningful cardiovascular risk. Checking both BMI and WHR together gives a much
              fuller picture of your health.
            </p>
          </div>
        </div>

        {/* H2: How to Measure */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            How to Measure Your Waist and Hip Correctly
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Waist measurement",
                steps: [
                  "Stand upright, feet together",
                  "Measure at the narrowest point — usually halfway between your lowest rib and hip bone",
                  "Breathe out gently. Do not suck in or hold your breath",
                  "Keep the tape horizontal and snug (not tight)",
                ],
              },
              {
                label: "Hip measurement",
                steps: [
                  "Stand upright with feet together",
                  "Measure at the widest point of your hips and buttocks",
                  "Keep the tape horizontal around the widest circumference",
                  "Measure in the morning before eating for consistency",
                ],
              },
            ].map((section) => (
              <div key={section.label} className="rounded-2xl p-4" style={{ background: "var(--color-surface-container)" }}>
                <p className="font-semibold mb-2 text-sm" style={{ color: "var(--color-on-surface)" }}>{section.label}</p>
                <ol className="space-y-1">
                  {section.steps.map((step, i) => (
                    <li key={i} className="text-xs flex gap-2" style={{ color: "var(--color-on-surface-variant)" }}>
                      <span className="font-semibold" style={{ color: "var(--color-primary)", flexShrink: 0 }}>{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* H2: WHR vs Waist Circumference */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Waist-to-Hip Ratio vs Waist Circumference Alone
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Both WHR and waist circumference alone are valid predictors of cardiovascular risk.
              Singapore HPB recommends waist circumference targets of <strong>below 90 cm for men</strong> and
              <strong> below 80 cm for women</strong>. WHR adds context by comparing waist to hip size,
              which can reveal risk in people with larger frames.
            </p>
            <p>
              High WHR is closely correlated with elevated{" "}
              <Link href="/blood-pressure-checker" className="underline" style={{ color: "var(--color-primary)" }}>blood pressure</Link>{" "}
              and cholesterol — two of the leading contributors to cardiovascular disease in Singapore.
              If your WHR is in the moderate or high risk range, a consultation with your GP or polyclinic
              is recommended.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is a healthy waist-to-hip ratio for Singaporeans?",
                a: "Singapore HPB and WHO Asia-Pacific guidelines recommend a WHR below 0.90 for men and below 0.80 for women as low risk. Above 0.95 (men) and 0.85 (women) indicates high cardiovascular risk.",
              },
              {
                q: "Why is waist-to-hip ratio important?",
                a: "WHR measures central (abdominal) obesity — excess fat around the belly — which is more strongly linked to cardiovascular disease, diabetes, and metabolic syndrome than total body fat or BMI.",
              },
              {
                q: "How does WHR compare to BMI?",
                a: "BMI doesn't distinguish where fat is stored. Two people with the same BMI can have very different cardiovascular risk depending on fat distribution. WHR identifies abdominal obesity that BMI misses.",
              },
              {
                q: "How do I reduce my waist-to-hip ratio?",
                a: "Reduce overall body fat through a calorie deficit and regular aerobic exercise. Spot-reducing belly fat alone is not possible, but consistent exercise — especially cardio — preferentially reduces visceral abdominal fat.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: "var(--color-surface-container)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{item.q}</h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4"><MedicalDisclaimer context="blood-pressure" /></div>

        <RelatedCalculators items={[
          {
            name: "BMI Calculator",
            tagline: "Singapore HPB Asian standard",
            href: "/bmi-calculator",
            iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
            accent: "#005EB8",
          },
          {
            name: "Body Fat Percentage Calculator",
            tagline: "US Navy circumference method",
            href: "/body-fat-calculator",
            iconPath: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a7 7 0 110 14A7 7 0 0112 5zm0 2a5 5 0 100 10A5 5 0 0012 7z",
            accent: "#00695C",
          },
          {
            name: "Blood Pressure Checker",
            tagline: "Singapore MOH hypertension categories",
            href: "/blood-pressure-checker",
            iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
            accent: "#B71C1C",
          },
          {
            name: "Ideal Weight Calculator",
            tagline: "HPB healthy weight range",
            href: "/ideal-weight-calculator",
            iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
            accent: "#7B1FA2",
          },
        ]} />
      </section>
    </>
  );
}
