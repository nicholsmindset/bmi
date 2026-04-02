import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";

export const metadata: Metadata = {
  title: "Diabetes Risk in Singapore — BMI, Weight & Prevention Guide",
  description:
    "Singapore has one of the world's highest diabetes rates at 9.1% of adults. Learn how BMI, overweight, and lifestyle factors drive diabetes risk and what the HPB recommends to prevent it.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/health/diabetes-risk" },
  openGraph: {
    title: "Diabetes Risk in Singapore — BMI, Weight & Prevention Guide",
    description: "Singapore has one of the world's highest diabetes rates at 9.1% of adults. Learn how BMI, overweight, and lifestyle factors drive diabetes risk and what the HPB recommends to prevent it.",
    url: "https://www.bmicalculatorsingapore.com/health/diabetes-risk",
    type: "website",
  },
  twitter: {
    title: "Diabetes Risk in Singapore — BMI, Weight & Prevention Guide",
    description: "Singapore has one of the world's highest diabetes rates at 9.1% of adults. Learn how BMI, overweight, and lifestyle factors drive diabetes risk and what the HPB recommends to prevent it.",
  },
};

const FAQS = [
  {
    question: "What is Singapore's diabetes prevalence?",
    answer:
      "According to the National Population Health Survey 2022, approximately 9.5% of Singaporean adults aged 18–69 have diabetes, with around one-third undiagnosed. The prevalence is significantly higher in older age groups — about 33% of adults aged 60–69 have diabetes. Singapore ranks among the highest in the developed world for diabetes rates, which the government has recognised as a national health priority.",
  },
  {
    question: "What BMI increases diabetes risk in Singapore?",
    answer:
      "For Singaporeans, significant diabetes risk begins at a BMI of 23.0 (overweight by HPB standards) and increases substantially above 27.5 (obese). Research in Asian populations shows that the diabetes risk threshold is 3–5 BMI units lower than in Caucasians. A Singaporean at BMI 24 has the equivalent metabolic risk of a Caucasian at BMI 27–28. Even modest weight loss of 5–10% body weight can reduce diabetes risk by up to 50% in high-risk individuals.",
  },
  {
    question: "How can Singaporeans prevent Type 2 diabetes?",
    answer:
      "The HPB recommends a combination of healthy weight maintenance (HPB BMI 18.5–22.9), at least 150 minutes of moderate-intensity exercise per week, a diet low in refined carbohydrates and added sugar, and regular health screening. Singapore's national Diabetes Prevention Programme offers structured support for high-risk individuals. Reducing consumption of popular high-glycaemic foods such as white rice, noodles, and sweetened beverages is particularly relevant for the local diet.",
  },
  {
    question: "Is waist size a better predictor of diabetes than BMI?",
    answer:
      "Waist circumference is an excellent complementary measure to BMI for predicting diabetes risk, as it directly reflects visceral (abdominal) fat — the metabolically active fat most strongly linked to insulin resistance. Singapore HPB recommends waist circumference thresholds of less than 90 cm for men and less than 80 cm for women. Many Singaporeans in the 'healthy' BMI range 18.5–22.9 may still have elevated abdominal fat and diabetes risk, making waist measurement an important additional check.",
  },
];

const STATS = [
  { value: "9.5%", label: "Adults with diabetes (NPHS 2022)" },
  { value: "~33%", label: "Undiagnosed at time of detection" },
  { value: "33%", label: "Prevalence in adults aged 60–69" },
  { value: "BMI 23", label: "HPB threshold where risk rises" },
];

export default function DiabetesRiskPage() {
  return (
    <>
      <CalculatorSchema
        name="Diabetes Risk in Singapore"
        description="Guide to diabetes risk factors, BMI connection, and HPB prevention recommendations for Singaporeans."
        url="https://www.bmicalculatorsingapore.com/health/diabetes-risk"
        lastReviewed="2026-03-31"
        isMedical={true}
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Health", url: "https://www.bmicalculatorsingapore.com/health" },
          { name: "Diabetes Risk", url: "https://www.bmicalculatorsingapore.com/health/diabetes-risk" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: "var(--color-secondary-container)", color: "var(--color-secondary-dark)" }}
        >
          Health Guide · HPB Recommendations
        </span>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Diabetes Risk in Singapore
        </h1>
        <p className="text-base mb-8 max-w-2xl" style={{ color: "var(--color-on-surface-variant)" }}>
          Singapore has one of the highest diabetes prevalence rates in the developed world.
          Understanding the link between body weight, BMI, and Type 2 diabetes is a critical first
          step in prevention.
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
          This page provides general health information only. It is not a substitute for professional
          medical advice, diagnosis, or treatment. Consult your doctor or a registered healthcare
          professional for personalised medical guidance.
        </div>

        {/* Stats boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {STATS.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl p-4 text-center"
              style={{ background: "var(--color-surface-container)", border: "1px solid var(--color-outline-variant)" }}
            >
              <p
                className="text-2xl font-extrabold mb-1"
                style={{ fontFamily: "var(--font-manrope)", color: "var(--color-secondary)" }}
              >
                {s.value}
              </p>
              <p className="text-xs leading-tight" style={{ color: "var(--color-on-surface-variant)" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Article content */}
        <div className="space-y-8 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Singapore&apos;s Diabetes Crisis
            </h2>
            <p>
              Singapore&apos;s War on Diabetes, launched by the government in 2016, reflects the urgency
              of the epidemic. Type 2 diabetes accounts for about 90% of all diabetes cases in Singapore.
              The economic burden is significant — diabetes-related complications including kidney failure,
              blindness, and lower limb amputations consume a substantial portion of national healthcare
              spending.
            </p>
            <p className="mt-3">
              The three major ethnic groups in Singapore — Chinese, Malay, and Indian — all face elevated
              diabetes risk compared to Caucasian populations at the same BMI. Indians in Singapore have
              the highest prevalence, followed by Malays, then Chinese. All groups benefit from weight
              management at lower BMI thresholds than WHO global guidelines suggest.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              The BMI &amp; Diabetes Connection
            </h2>
            <p>
              Excess body weight is the primary modifiable risk factor for Type 2 diabetes. Adipose
              (fat) tissue — particularly visceral fat stored around abdominal organs — disrupts insulin
              signalling and leads to insulin resistance over time. For Singaporeans, this process begins
              at a lower BMI than for Caucasians, which is why the HPB defines overweight as BMI &ge;23.0.
            </p>
            <p className="mt-3">
              A landmark study of over 200,000 Asian adults found that diabetes risk begins to increase
              significantly at BMI 23 and rises steeply above BMI 27.5 for Asian populations. Even modest
              weight loss of 5&ndash;7% of body weight (about 3.5 kg for a 65 kg person) can meaningfully
              reduce insulin resistance and diabetes risk.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Key Risk Factors
            </h2>
            <ul className="space-y-2">
              {[
                "BMI ≥23.0 (HPB overweight threshold for Asian adults)",
                "Waist circumference ≥90 cm (men) or ≥80 cm (women)",
                "Family history of diabetes (1st-degree relative)",
                "Prediabetes or impaired fasting glucose",
                "Sedentary lifestyle — less than 150 min exercise/week",
                "Diet high in refined carbohydrates and sweetened beverages",
                "Age ≥40 years (screened under Screen for Life programme)",
                "Gestational diabetes history",
                "Polycystic ovary syndrome (PCOS)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-secondary)" }}
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
              HPB Prevention Recommendations
            </h2>
            <p>
              The HPB&apos;s Healthier Choice Symbol programme, the Diabetes Prevention Programme, and
              the Screen for Life initiative provide Singaporeans with accessible tools for diabetes
              prevention. Key recommendations include:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Maintain a healthy BMI between 18.5 and 22.9",
                "Eat more whole grains, vegetables, and legumes",
                "Reduce refined carbohydrates — swap white rice for brown rice or multi-grain options",
                "Limit sugar-sweetened beverages; choose plain water or unsweetened options",
                "Achieve at least 150 minutes of moderate exercise weekly",
                "Get regular HbA1c and fasting glucose screening from age 40",
                "For high-risk individuals, join the HPB Diabetes Prevention Programme",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-secondary)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
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
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator links */}
        <div
          className="rounded-3xl p-6"
          style={{ background: "var(--color-secondary-container)", border: "1px solid var(--color-secondary-light)" }}
        >
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-secondary-dark)" }}
          >
            Related Calculators
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/bmi-calculator", label: "BMI Calculator" },
              { href: "/calorie-deficit-calculator", label: "Calorie Deficit Calculator" },
              { href: "/blood-pressure-checker", label: "Blood Pressure Checker" },
              { href: "/waist-hip-ratio-calculator", label: "Waist-Hip Ratio Calculator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
                style={{
                  background: "var(--color-secondary)",
                  color: "#fff",
                }}
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
