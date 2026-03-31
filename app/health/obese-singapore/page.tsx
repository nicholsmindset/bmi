import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";

export const metadata: Metadata = {
  title: "Obesity in Singapore — Rates, HPB Threshold BMI 27.5 & Treatment",
  description:
    "12.7% of Singapore adults are obese (BMI ≥27.5 by HPB Asian standards). Learn about metabolic complications, waist circumference risk, and the HPB treatment pathway for obesity.",
  alternates: { canonical: "https://bmicalculator.sg/health/obese-singapore" },
  openGraph: {
    title: "Obesity in Singapore — Rates, HPB Threshold BMI 27.5 & Treatment",
    description: "12.7% of Singapore adults are obese (BMI ≥27.5 by HPB Asian standards). Learn about metabolic complications, waist circumference risk, and the HPB treatment pathway for obesity.",
    url: "https://bmicalculator.sg/health/obese-singapore",
    type: "website",
  },
  twitter: {
    title: "Obesity in Singapore — Rates, HPB Threshold BMI 27.5 & Treatment",
    description: "12.7% of Singapore adults are obese by HPB standards. Learn about metabolic complications and the HPB treatment pathway.",
  },
};

const FAQS = [
  {
    question: "What is the obesity rate in Singapore?",
    answer:
      "According to the HPB National Population Health Survey 2022, approximately 12.7% of Singaporean adults aged 18–69 are classified as obese (BMI ≥27.5 by HPB Asian standards). Using the WHO global threshold of BMI ≥30, the rate would be lower at approximately 6–7%. The HPB uses the lower threshold because Asians develop serious metabolic complications at lower BMI values. Obesity rates are highest in older adults and have increased significantly over the past two decades.",
  },
  {
    question: "At what BMI is a person considered obese in Singapore?",
    answer:
      "In Singapore, the HPB classifies obesity as BMI ≥27.5 (Obese I: 27.5–32.4; Obese II: ≥32.5). This is significantly lower than the WHO global obesity threshold of BMI ≥30. The difference means that a Singaporean at BMI 28 would be classified as obese by local standards but only overweight by WHO standards. Medical assessment and possible clinical weight management are recommended for Singaporeans with BMI ≥27.5, especially when combined with other risk factors.",
  },
  {
    question: "What are the metabolic complications of obesity in Singapore?",
    answer:
      "Obesity (BMI ≥27.5 in Singaporeans) significantly elevates the risk of Type 2 diabetes, hypertension, dyslipidaemia (abnormal cholesterol), non-alcoholic fatty liver disease (NAFLD), obstructive sleep apnoea, and certain cancers. At the population level, approximately 70% of Singaporeans with Type 2 diabetes are overweight or obese. The metabolic syndrome — a cluster of abdominal obesity, high blood sugar, high blood pressure, and abnormal cholesterol — affects an estimated 20–25% of adult Singaporeans.",
  },
  {
    question: "What treatment options are available for obesity in Singapore?",
    answer:
      "Singapore offers a tiered approach to obesity treatment: (1) Lifestyle modification — diet counselling and exercise programmes, available through polyclinics and subsidised under CHAS; (2) Medical weight management — physician-supervised programmes, including medication in some cases; (3) Surgical options — bariatric surgery (sleeve gastrectomy, gastric bypass) for severe obesity (BMI ≥37.5, or ≥32.5 with serious comorbidities) at public hospitals like SGH and NUH; (4) Structured programmes — the HPB and SingHealth run evidence-based weight management programmes. Early intervention at BMI 27.5 is more effective than waiting until BMI exceeds 32.5.",
  },
];

const STATS = [
  { value: "12.7%", label: "Adults obese by HPB standards (NPHS 2022)" },
  { value: "BMI 27.5", label: "HPB obesity threshold for Asians" },
  { value: "20–25%", label: "Adults with metabolic syndrome" },
  { value: "70%", label: "Diabetics who are overweight or obese" },
];

export default function ObeseSingaporePage() {
  return (
    <>
      <CalculatorSchema
        name="Obesity in Singapore"
        description="Guide to obesity rates, HPB BMI threshold, metabolic complications, and treatment options in Singapore."
        url="https://bmicalculator.sg/health/obese-singapore"
        lastReviewed="2026-03-31"
        isMedical={true}
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Health", url: "https://bmicalculator.sg/health" },
          { name: "Obesity in Singapore", url: "https://bmicalculator.sg/health/obese-singapore" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: "#FBE9E7", color: "var(--bmi-obese1)" }}
        >
          Health Guide · HPB Obesity Standards
        </span>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Obesity in Singapore
        </h1>
        <p className="text-base mb-8 max-w-2xl" style={{ color: "var(--color-on-surface-variant)" }}>
          One in eight Singaporean adults is obese by HPB standards. Obesity in Singapore is defined
          at a lower BMI threshold than global standards due to the elevated metabolic risks faced by
          Asian populations at lower body weight.
        </p>

        {/* Medical disclaimer */}
        <div
          className="rounded-2xl p-4 mb-8 text-sm"
          style={{
            background: "var(--color-tertiary-light)",
            border: "1px solid var(--color-outline-variant)",
            color: "var(--color-on-surface-variant)",
          }}
        >
          <strong style={{ color: "var(--color-on-surface)" }}>Medical disclaimer: </strong>
          This page provides general health information. Obesity is a medical condition — consult a
          doctor for proper assessment and personalised treatment recommendations.
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl p-4 text-center"
              style={{
                background: "var(--color-surface-container)",
                border: "1px solid var(--color-outline-variant)",
              }}
            >
              <p
                className="text-2xl font-extrabold mb-1"
                style={{ fontFamily: "var(--font-manrope)", color: "var(--bmi-obese1)" }}
              >
                {s.value}
              </p>
              <p className="text-xs leading-tight" style={{ color: "var(--color-on-surface-variant)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Article body */}
        <div className="space-y-8 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Singapore&apos;s HPB Obesity Definition
            </h2>
            <p>
              Singapore&apos;s HPB defines obesity as BMI &ge;27.5, divided into two classes:
            </p>
            <div
              className="mt-4 rounded-2xl p-4 overflow-x-auto"
              style={{ background: "var(--color-surface-container)" }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ color: "var(--color-on-surface)" }}>
                    <th className="text-left py-2 font-semibold">Category</th>
                    <th className="text-center py-2 font-semibold">HPB BMI Range</th>
                    <th className="text-center py-2 font-semibold">Risk Level</th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--color-on-surface-variant)" }}>
                  {[
                    ["Obese I", "27.5 – 32.4", "High"],
                    ["Obese II", "≥ 32.5", "Very high"],
                  ].map(([cat, range, risk]) => (
                    <tr key={cat} className="border-t" style={{ borderColor: "var(--color-outline-variant)" }}>
                      <td className="py-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>
                        {cat}
                      </td>
                      <td className="py-2 text-center font-bold" style={{ color: "var(--bmi-obese1)" }}>
                        {range}
                      </td>
                      <td className="py-2 text-center">{risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              For comparison, the WHO global obesity threshold is BMI &ge;30. This means that a
              Singaporean at BMI 28 — medically obese by local HPB standards — would be classified as
              merely &ldquo;overweight&rdquo; by WHO global standards. Always use HPB Asian standards
              when assessing health risk for Singaporeans.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Waist Circumference: The Abdominal Obesity Measure
            </h2>
            <p>
              BMI alone does not distinguish between fat distributed throughout the body and fat
              concentrated in the abdomen. Visceral (abdominal) fat is metabolically far more dangerous
              than subcutaneous fat stored elsewhere. The HPB recommends measuring waist circumference
              alongside BMI for a more complete obesity risk assessment.
            </p>
            <div
              className="mt-4 rounded-2xl p-4"
              style={{ background: "var(--color-surface-container)" }}
            >
              <p className="text-sm font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>
                Singapore HPB Waist Circumference Thresholds
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>Men</p>
                  <p>Low risk: &lt;90 cm</p>
                  <p>Moderate risk: 90–94 cm</p>
                  <p>High risk: &ge;95 cm</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>Women</p>
                  <p>Low risk: &lt;80 cm</p>
                  <p>Moderate risk: 80–84 cm</p>
                  <p>High risk: &ge;85 cm</p>
                </div>
              </div>
            </div>
            <p className="mt-4">
              Many Singaporeans with a &ldquo;normal&rdquo; BMI of 22 may still have abdominal obesity
              with waist circumference above these thresholds. This pattern — normal BMI with high
              visceral fat — is sometimes called &ldquo;metabolically obese normal weight&rdquo; and
              carries real health risks.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Metabolic Complications of Obesity
            </h2>
            <ul className="space-y-2">
              {[
                "Type 2 diabetes — risk increases exponentially above BMI 27.5",
                "Hypertension — each 10 kg of excess weight adds approximately 5 mmHg to systolic BP",
                "Dyslipidaemia — high LDL, low HDL, elevated triglycerides",
                "Non-alcoholic fatty liver disease (NAFLD) — prevalent in ~30% of obese Singaporeans",
                "Obstructive sleep apnoea — disrupted sleep worsens obesity via hunger hormone dysregulation",
                "Metabolic syndrome — cluster of abdominal obesity, high blood sugar, high BP, abnormal cholesterol",
                "Increased cancer risk — colorectal, endometrial, breast, kidney",
                "Osteoarthritis — excess load on knee and hip joints accelerates cartilage damage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--bmi-obese1)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              HPB Treatment Pathway
            </h2>
            <p>
              The HPB and Singapore&apos;s polyclinic and hospital systems offer a structured pathway
              for managing obesity:
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  step: "Step 1 — Lifestyle Modification",
                  desc: "Diet counselling, exercise prescription, and behavioural support. Available at polyclinics, subsidised under CHAS for eligible residents. First-line for all BMI 27.5+ patients.",
                },
                {
                  step: "Step 2 — Structured Weight Management",
                  desc: "HPB-affiliated and hospital weight management programmes offering multi-disciplinary support (dietitian, physiotherapist, psychologist). Recommended for BMI ≥27.5 with comorbidities.",
                },
                {
                  step: "Step 3 — Medical Pharmacotherapy",
                  desc: "Prescription weight loss medication for select patients with BMI ≥27.5 and obesity-related conditions, under physician supervision. Not first-line; requires prior lifestyle intervention.",
                },
                {
                  step: "Step 4 — Bariatric Surgery",
                  desc: "Available at SGH, NUH, and private hospitals for patients with BMI ≥37.5, or BMI ≥32.5 with serious comorbidities (T2D, severe sleep apnoea). Sleeve gastrectomy and gastric bypass are most common.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl p-4"
                  style={{
                    background: "var(--color-surface-low)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <p
                    className="font-semibold text-sm mb-1"
                    style={{ color: "var(--color-on-surface)" }}
                  >
                    {item.step}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Ad unit */}
        <div className="my-10">
          <AdUnit
            format="responsive"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
            className="mx-auto"
          />
        </div>

        {/* FAQ section */}
        <div className="mb-10">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl p-5"
                style={{
                  background: "var(--color-surface-low)",
                  border: "1px solid var(--color-outline-variant)",
                }}
              >
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  {faq.question}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-on-surface-variant)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator links */}
        <div
          className="rounded-3xl p-6"
          style={{ background: "#FBE9E7", border: "1px solid #FFCCBC" }}
        >
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--bmi-obese1)" }}
          >
            Check Your Numbers
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/bmi-calculator", label: "BMI Calculator" },
              { href: "/waist-hip-ratio-calculator", label: "Waist-Hip Ratio Calculator" },
              { href: "/calorie-deficit-calculator", label: "Calorie Deficit Calculator" },
              { href: "/tdee-calculator", label: "TDEE Calculator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors"
                style={{ background: "var(--bmi-obese1)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
