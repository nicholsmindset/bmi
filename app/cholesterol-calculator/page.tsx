import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CholesterolClient from "@/components/calculators/CholesterolClient";

export const metadata: Metadata = {
  title: "Cholesterol Ratio Calculator Singapore — TC/HDL Cardiovascular Risk",
  description:
    "Calculate your total cholesterol to HDL ratio and assess cardiovascular risk using Singapore HPB targets. Includes LDL calculation via Friedewald equation.",
  alternates: { canonical: "https://bmicalculator.sg/cholesterol-calculator" },
  openGraph: {
    title: "Cholesterol Ratio Calculator Singapore — TC/HDL Cardiovascular Risk",
    description:
      "Calculate your total cholesterol to HDL ratio and assess cardiovascular risk using Singapore HPB targets. Includes LDL calculation via Friedewald equation.",
    url: "https://bmicalculator.sg/cholesterol-calculator",
    type: "website",
  },
  twitter: {
    title: "Cholesterol Ratio Calculator Singapore — TC/HDL Cardiovascular Risk",
    description:
      "Calculate your total cholesterol to HDL ratio and assess cardiovascular risk using Singapore HPB targets. Includes LDL calculation via Friedewald equation.",
  },
};

const FAQS = [
  {
    question: "What is a healthy cholesterol ratio in Singapore?",
    answer:
      "Singapore HPB recommends a TC/HDL ratio below 4.5 for men and below 4.0 for women. A ratio below 3.5 is considered optimal. The higher your HDL (good cholesterol) relative to total cholesterol, the lower your cardiovascular risk.",
  },
  {
    question: "What is the difference between LDL and HDL cholesterol?",
    answer:
      "LDL (low-density lipoprotein) is 'bad' cholesterol — it deposits in artery walls and increases cardiovascular risk. HDL (high-density lipoprotein) is 'good' cholesterol — it transports cholesterol to the liver for removal. Singapore HPB recommends LDL below 3.0 mmol/L for healthy adults, and below 1.8 mmol/L for those with cardiovascular disease.",
  },
  {
    question: "How common is high cholesterol in Singapore?",
    answer:
      "Approximately 17.4% of Singaporeans have elevated total cholesterol (above 6.2 mmol/L), and about 40% have borderline high cholesterol. Hyperlipidaemia is the third most common chronic condition in Singapore, after hypertension and diabetes.",
  },
  {
    question: "How can I lower my TC/HDL ratio?",
    answer:
      "To lower your TC/HDL ratio: (1) Increase HDL by exercising regularly — 150 min/week of moderate aerobic activity raises HDL by 5–10%. (2) Reduce saturated fat intake by cutting coconut milk, palm oil, and fatty meats common in Singapore cuisine. (3) Replace refined carbs with high-fibre options. Consult your GP before taking cholesterol-lowering supplements.",
  },
];

const RELATED = [
  {
    name: "Blood Pressure Checker",
    tagline: "Assess your cardiovascular risk",
    href: "/blood-pressure-checker",
    iconPath:
      "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z",
    accent: "#B71C1C",
  },
  {
    name: "BMI Calculator",
    tagline: "High BMI raises cholesterol risk",
    href: "/bmi-calculator",
    iconPath:
      "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    accent: "#005EB8",
  },
  {
    name: "Waist-to-Hip Ratio Calculator",
    tagline: "Central obesity & heart risk",
    href: "/waist-hip-ratio-calculator",
    iconPath:
      "M17 8C8 10 5.9 16.17 3.82 21L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-2 4-5 5z",
    accent: "#7B1FA2",
  },
  {
    name: "Calorie Deficit Calculator",
    tagline: "Lose weight to improve lipid profile",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
    accent: "#F57C00",
  },
];

export default function CholesterolCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Cholesterol Ratio Calculator Singapore"
        description="Calculate your TC/HDL ratio and assess cardiovascular risk using Singapore HPB targets."
        url="https://bmicalculator.sg/cholesterol-calculator"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Cholesterol Calculator", url: "https://bmicalculator.sg/cholesterol-calculator" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="TC/HDL Ratio · Singapore HPB Targets"
        title="Cholesterol Ratio Calculator"
        description="Check your TC/HDL (total cholesterol to HDL) ratio — a stronger predictor of cardiovascular risk than total cholesterol alone. Singapore HPB targets: below 4.5 for men, below 4.0 for women."
      >
        <CholesterolClient />
        <div className="mt-6">
          <MedicalDisclaimer context="cholesterol" />
        </div>
      </CalculatorSection>

      {/* Ad unit 1 */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8 pb-16">
        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        {/* TC/HDL Risk Reference Table */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            TC/HDL Risk Reference Table
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            The TC/HDL ratio is calculated by dividing your total cholesterol by your HDL (good)
            cholesterol. Lower is better — a higher ratio indicates greater cardiovascular risk.
            Singapore HPB thresholds apply to fasting lipid panel results (mmol/L).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    TC/HDL Ratio
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Risk Level
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    HPB Assessment
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Recommended Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    ratio: "< 3.5",
                    risk: "Optimal",
                    assess: "Well below target",
                    action: "Maintain current lifestyle",
                    color: "var(--color-success)",
                  },
                  {
                    ratio: "3.5 – 4.0",
                    risk: "Desirable",
                    assess: "Within HPB target (women)",
                    action: "Monitor annually, healthy lifestyle",
                    color: "var(--color-secondary)",
                  },
                  {
                    ratio: "4.0 – 4.5",
                    risk: "Borderline",
                    assess: "Within HPB target (men only)",
                    action: "Improve diet, increase exercise",
                    color: "var(--color-warning)",
                  },
                  {
                    ratio: "4.5 – 5.5",
                    risk: "Elevated",
                    assess: "Above HPB target",
                    action: "GP consult recommended",
                    color: "var(--color-error)",
                  },
                  {
                    ratio: "> 5.5",
                    risk: "High Risk",
                    assess: "Significantly elevated",
                    action: "Prompt GP review required",
                    color: "var(--color-error)",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <td
                      className="p-3 font-semibold"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {row.ratio}
                    </td>
                    <td className="p-3 font-medium" style={{ color: row.color }}>
                      {row.risk}
                    </td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.assess}
                    </td>
                    <td className="p-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 overflow-x-auto">
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--color-on-surface)" }}
            >
              Singapore HPB Lipid Panel Targets
            </h3>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Measure
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Desirable
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    Borderline High
                  </th>
                  <th
                    className="text-left p-3 font-semibold"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    High / Action Required
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    measure: "Total Cholesterol",
                    desirable: "< 5.2 mmol/L",
                    borderline: "5.2 – 6.1 mmol/L",
                    high: "≥ 6.2 mmol/L",
                  },
                  {
                    measure: "LDL Cholesterol",
                    desirable: "< 3.0 mmol/L",
                    borderline: "3.0 – 3.9 mmol/L",
                    high: "≥ 4.0 mmol/L",
                  },
                  {
                    measure: "HDL Cholesterol",
                    desirable: "≥ 1.0 mmol/L (men) / ≥ 1.2 mmol/L (women)",
                    borderline: "—",
                    high: "< 1.0 mmol/L (low — risk)",
                  },
                  {
                    measure: "Triglycerides",
                    desirable: "< 1.7 mmol/L",
                    borderline: "1.7 – 2.2 mmol/L",
                    high: "≥ 2.3 mmol/L",
                  },
                  {
                    measure: "TC/HDL Ratio (men)",
                    desirable: "< 4.5",
                    borderline: "4.5 – 5.5",
                    high: "> 5.5",
                  },
                  {
                    measure: "TC/HDL Ratio (women)",
                    desirable: "< 4.0",
                    borderline: "4.0 – 5.0",
                    high: "> 5.0",
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderTop: "1px solid var(--color-outline-variant)" }}
                  >
                    <td
                      className="p-3 font-medium"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {row.measure}
                    </td>
                    <td
                      className="p-3"
                      style={{ color: "var(--color-success)" }}
                    >
                      {row.desirable}
                    </td>
                    <td
                      className="p-3"
                      style={{ color: "var(--color-warning)" }}
                    >
                      {row.borderline}
                    </td>
                    <td
                      className="p-3"
                      style={{ color: "var(--color-error)" }}
                    >
                      {row.high}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Source: Singapore Health Promotion Board and MOH Clinical Practice Guidelines for
            Lipids. These are general population targets; individuals with cardiovascular disease,
            diabetes, or other risk factors may have lower LDL targets. Consult your doctor.
          </p>
        </div>

        {/* Cholesterol in Singapore stats */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Cholesterol in Singapore
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                stat: "17.4%",
                label: "High Cholesterol",
                desc: "Of Singaporeans have total cholesterol above 6.2 mmol/L (elevated threshold)",
                color: "#B71C1C",
              },
              {
                stat: "40%",
                label: "Borderline High",
                desc: "Have borderline elevated cholesterol, placing them at increased long-term risk",
                color: "#E65100",
              },
              {
                stat: "#3",
                label: "Chronic Condition",
                desc: "Hyperlipidaemia is the third most common chronic condition in Singapore, after hypertension and diabetes",
                color: "#7B1FA2",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-manrope)", color: item.color }}
                >
                  {item.stat}
                </p>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            className="rounded-2xl p-5 text-sm space-y-2"
            style={{ background: "var(--color-surface-low)", color: "var(--color-on-surface-variant)" }}
          >
            <p>
              <strong style={{ color: "var(--color-on-surface)" }}>Singapore diet and cholesterol:</strong>{" "}
              Common local foods high in saturated fat — coconut milk (in laksa, rendang, nasi
              lemak), palm oil used in cooking, organ meats, and full-fat dairy — can elevate LDL
              cholesterol over time. The HPB encourages Singaporeans to choose leaner cooking methods
              (steaming, grilling) and substitute coconut milk with reduced-fat alternatives where
              possible.
            </p>
            <p>
              <strong style={{ color: "var(--color-on-surface)" }}>Screening recommendations:</strong>{" "}
              Singapore MOH recommends a fasting lipid panel every 3 years for adults aged 40 and
              above with no known risk factors. Those with diabetes, hypertension, or a family
              history of heart disease should screen earlier and more frequently.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {faq.question}
                </h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RelatedCalculators items={RELATED} />
      </section>
    </>
  );
}
