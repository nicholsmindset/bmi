import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSchema from "@/components/seo/CalculatorSchema";

export const metadata: Metadata = {
  title: "Heart Disease Risk in Singapore — Cholesterol, Blood Pressure & Weight",
  description:
    "Cardiovascular disease is Singapore's second leading cause of death. Understand how cholesterol, blood pressure, BMI, and lifestyle affect your heart disease risk and what HPB recommends.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/health/heart-disease" },
  openGraph: {
    title: "Heart Disease Risk in Singapore — Cholesterol, Blood Pressure & Weight",
    description: "Cardiovascular disease is Singapore's second leading cause of death. Understand how cholesterol, blood pressure, BMI, and lifestyle affect your heart disease risk and what HPB recommends.",
    url: "https://www.bmicalculatorsingapore.com/health/heart-disease",
    type: "website",
  },
  twitter: {
    title: "Heart Disease Risk in Singapore — Cholesterol, Blood Pressure & Weight",
    description: "Cardiovascular disease is Singapore's second leading cause of death. Understand how cholesterol, blood pressure, BMI, and lifestyle affect your heart disease risk.",
  },
};

const FAQS = [
  {
    question: "How common is heart disease in Singapore?",
    answer:
      "Cardiovascular disease (CVD) — encompassing heart attacks, heart failure, and stroke — is the second leading cause of death in Singapore, accounting for approximately 32% of all deaths according to the Singapore Heart Foundation and Ministry of Health. About 24 Singaporeans die from heart disease or stroke every day. The prevalence of high cholesterol among adults is approximately 38%, and high blood pressure affects roughly 35% of Singaporean adults.",
  },
  {
    question: "What cholesterol level is healthy for Singaporeans?",
    answer:
      "Singapore MOH and HPB guidelines recommend total cholesterol below 5.2 mmol/L, LDL ('bad') cholesterol below 3.4 mmol/L for low-risk individuals (below 2.6 for moderate risk), and HDL ('good') cholesterol above 1.0 mmol/L for men and above 1.3 mmol/L for women. The TC/HDL ratio — total cholesterol divided by HDL — should ideally be below 4.5 for men and below 4.0 for women. This ratio is considered one of the most useful single cardiovascular risk indicators.",
  },
  {
    question: "What blood pressure is high risk in Singapore?",
    answer:
      "Singapore MOH follows JNC8/ACC-AHA guidelines: Normal is below 120/80 mmHg, Elevated is 120–129/<80 mmHg, High Stage 1 is 130–139/80–89 mmHg, and High Stage 2 is 140+/90+ mmHg. Hypertensive crisis (requiring emergency care) is above 180/120 mmHg. Approximately 35% of Singaporean adults have hypertension. High blood pressure significantly multiplies cardiovascular risk when combined with high cholesterol or obesity.",
  },
  {
    question: "How much exercise does the HPB recommend to protect the heart?",
    answer:
      "The HPB recommends at least 150 minutes of moderate-intensity aerobic activity per week, or 75 minutes of vigorous-intensity activity. For additional cardiovascular benefits, 300 minutes of moderate activity weekly is suggested. Muscle-strengthening activities on 2 or more days per week are also recommended. Even walking briskly for 30 minutes five times a week has been shown to reduce cardiovascular disease risk by 20–30%. Singapore's park connector network and public fitness corners make this accessible for most residents.",
  },
];

const STATS = [
  { value: "32%", label: "Of deaths from cardiovascular disease" },
  { value: "24/day", label: "Singaporeans die from heart disease or stroke" },
  { value: "38%", label: "Adults with high cholesterol" },
  { value: "35%", label: "Adults with high blood pressure" },
];

export default function HeartDiseasePage() {
  return (
    <>
      <CalculatorSchema
        name="Heart Disease Risk in Singapore"
        description="Guide to cardiovascular disease risk factors, cholesterol, blood pressure, and HPB prevention recommendations."
        url="https://www.bmicalculatorsingapore.com/health/heart-disease"
        lastReviewed="2026-03-31"
        isMedical={true}
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Health", url: "https://www.bmicalculatorsingapore.com/health" },
          { name: "Heart Disease", url: "https://www.bmicalculatorsingapore.com/health/heart-disease" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: "#FFEBEE", color: "var(--bmi-obese2)" }}
        >
          Health Guide · Cardiovascular Risk
        </span>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Heart Disease Risk in Singapore
        </h1>
        <p className="text-base mb-8 max-w-2xl" style={{ color: "var(--color-on-surface-variant)" }}>
          Cardiovascular disease is Singapore&apos;s second leading cause of death. High cholesterol,
          hypertension, obesity, and physical inactivity are all modifiable risk factors — understanding
          them is the first step towards better heart health.
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
          This page provides general health information only and is not a substitute for professional
          medical advice, diagnosis, or treatment. Consult a doctor for cardiovascular risk assessment.
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
              Cardiovascular Disease in Singapore
            </h2>
            <p>
              Coronary heart disease (CHD), the most common form of heart disease, is caused by buildup
              of plaque in the coronary arteries. In Singapore, CHD is the top cause of hospital
              admissions for cardiovascular conditions. Stroke — a cardiovascular event affecting the
              brain&apos;s blood supply — accounts for about a quarter of all cardiovascular deaths.
            </p>
            <p className="mt-3">
              Singapore&apos;s Heart Foundation estimates that 2,000 Singaporeans suffer a heart attack
              each month. The good news: Singapore has excellent acute cardiac care infrastructure, and
              most major cardiovascular risk factors are preventable through lifestyle changes.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Key Cardiovascular Risk Factors
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "High Cholesterol",
                  body: "LDL cholesterol above 3.4 mmol/L increases arterial plaque formation. The HPB recommends cholesterol screening from age 40, or earlier with family history of heart disease.",
                },
                {
                  title: "High Blood Pressure (Hypertension)",
                  body: "Sustained blood pressure above 130/80 mmHg damages arterial walls and forces the heart to work harder. It is often asymptomatic — regular measurement is the only way to detect it.",
                },
                {
                  title: "Overweight & Obesity",
                  body: "BMI ≥23.0 (HPB overweight) increases heart disease risk by elevating LDL, reducing HDL, and raising blood pressure. Central obesity (waist >90 cm men, >80 cm women) is particularly harmful.",
                },
                {
                  title: "Type 2 Diabetes",
                  body: "Diabetes doubles cardiovascular disease risk by damaging blood vessels and promoting inflammation. Singapore's high diabetes prevalence makes CVD prevention especially important.",
                },
                {
                  title: "Physical Inactivity",
                  body: "Less than 150 minutes of moderate exercise weekly significantly raises CVD risk. About 40% of Singaporeans do not meet the HPB physical activity guidelines.",
                },
                {
                  title: "Smoking",
                  body: "Smoking damages the endothelium (artery lining), raises blood pressure, and accelerates atherosclerosis. Singapore has among the lowest smoking rates in Asia (~12%), partly due to strict tobacco controls.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-4"
                  style={{
                    background: "var(--color-surface-low)",
                    border: "1px solid var(--color-outline-variant)",
                  }}
                >
                  <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-on-surface)" }}>
                    {item.title}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              HPB &amp; MOH Prevention Guidelines
            </h2>
            <p>
              Singapore&apos;s HPB and MOH recommend a comprehensive lifestyle approach to cardiovascular
              disease prevention, aligned with international cardiological evidence:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Achieve and maintain HPB-healthy BMI of 18.5–22.9",
                "Eat a diet rich in vegetables, fruits, whole grains, and legumes",
                "Limit saturated fats, trans fats, and dietary cholesterol",
                "Reduce sodium intake — aim for less than 2,000 mg/day (Singapore average is far above this)",
                "Achieve at least 150 minutes of moderate-intensity aerobic exercise weekly",
                "Quit smoking and avoid secondhand smoke",
                "Screen for blood pressure, cholesterol, and HbA1c regularly under Screen for Life",
                "Manage stress — chronic stress elevates cortisol and raises cardiovascular risk",
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
          style={{ background: "#FFEBEE", border: "1px solid #FFCDD2" }}
        >
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--bmi-obese2)" }}
          >
            Related Health Calculators
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/blood-pressure-checker", label: "Blood Pressure Checker" },
              { href: "/cholesterol-calculator", label: "Cholesterol Ratio Calculator" },
              { href: "/calories-burned-calculator", label: "Calories Burned Calculator" },
              { href: "/bmi-calculator", label: "BMI Calculator" },
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
