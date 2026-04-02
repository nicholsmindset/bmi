import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import BloodPressureClient from "@/components/calculators/BloodPressureClient";

export const metadata: Metadata = {
  title: "Blood Pressure Checker Singapore — BP Categories & Chart",
  description:
    "Check your blood pressure reading against Singapore MOH and JNC8 categories. Normal, elevated, Stage 1, and Stage 2 hypertension ranges explained.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/blood-pressure-checker" },
  openGraph: {
    title: "Blood Pressure Checker Singapore — BP Categories & Chart",
    description:
      "Check your blood pressure reading against Singapore MOH and JNC8 categories. Normal, elevated, Stage 1, and Stage 2 hypertension ranges explained.",
    url: "https://www.bmicalculatorsingapore.com/blood-pressure-checker",
    type: "website",
  },
  twitter: {
    title: "Blood Pressure Checker Singapore — BP Categories & Chart",
    description:
      "Check your blood pressure reading against Singapore MOH and JNC8 categories. Normal, elevated, Stage 1, and Stage 2 hypertension ranges explained.",
  },
};

export default function BloodPressurePage() {
  return (
    <>
      <CalculatorSchema
        name="Blood Pressure Checker Singapore"
        description="Check your blood pressure reading against Singapore MOH and JNC8 hypertension categories."
        url="https://www.bmicalculatorsingapore.com/blood-pressure-checker"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is normal blood pressure in Singapore?",
            answer:
              "Normal blood pressure in Singapore is below 120/80 mmHg according to Singapore MOH and JNC8 guidelines. Elevated is 120–129/<80. Stage 1 hypertension begins at 130/80 mmHg.",
          },
          {
            question: "What is Stage 2 hypertension?",
            answer:
              "Stage 2 hypertension is a blood pressure reading of 140/90 mmHg or higher. Singapore MOH recommends medication alongside lifestyle changes at this stage. Consult your doctor promptly.",
          },
          {
            question: "How common is high blood pressure in Singapore?",
            answer:
              "Approximately 35% of Singaporeans aged 18–69 have hypertension. Many are undiagnosed. Regular blood pressure monitoring — at least once every 2 years for healthy adults — is recommended by HPB.",
          },
          {
            question: "What should I do if my blood pressure is high?",
            answer:
              "If your reading is 130/80 or above, consult your GP or polyclinic. Do not attempt to self-treat hypertension. Lifestyle changes (reduced sodium, exercise, weight loss) combined with medication when prescribed are the evidence-based approach.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Blood Pressure Checker", url: "https://www.bmicalculatorsingapore.com/blood-pressure-checker" },
        ]}
        isMedical
      />

      <CalculatorSection
        badge="Singapore MOH · JNC8 Categories"
        title="Blood Pressure Checker"
        description="Enter your systolic (top) and diastolic (bottom) blood pressure readings to see your category according to Singapore MOH and JNC8 guidelines."
      >
        <BloodPressureClient />
        <div className="mt-6"><MedicalDisclaimer context="blood-pressure" /></div>
      </CalculatorSection>

      {/* Ad unit 1 */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-6">
        {/* Ad unit 2 — high RPM page gets 2 */}
        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Understanding Your Blood Pressure Reading
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Blood pressure is measured in mmHg (millimetres of mercury) and expressed as two numbers.
              The <strong>systolic</strong> (top number) measures pressure when your heart beats.
              The <strong>diastolic</strong> (bottom number) measures pressure between beats.
            </p>
            <p>
              A single high reading does not diagnose hypertension. Blood pressure naturally varies throughout the day.
              A diagnosis of hypertension requires elevated readings on at least two separate occasions, confirmed by a doctor.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Hypertension in Singapore — Key Facts
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: "35%",  label: "Prevalence", desc: "Of Singaporean adults aged 18–69 have hypertension" },
              { stat: "50%",  label: "Undiagnosed", desc: "Of those with hypertension are not aware of their condition" },
              { stat: "#1",   label: "Risk Factor",  desc: "Hypertension is the leading risk factor for stroke in Singapore" },
            ].map((s) => (
              <div key={s.stat} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-surface-container)" }}>
                <p className="text-3xl font-extrabold mb-1" style={{ fontFamily: "var(--font-manrope)", color: "#B71C1C" }}>{s.stat}</p>
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-on-surface-variant)" }}>{s.label}</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
