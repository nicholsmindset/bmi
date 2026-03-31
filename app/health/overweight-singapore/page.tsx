import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";

export const metadata: Metadata = {
  title: "Overweight in Singapore — HPB Rates, BMI Standards & Weight Loss Guide",
  description:
    "40.3% of Singapore adults are overweight or obese by Asian HPB standards. Learn what 'overweight' means in Singapore, why the threshold is BMI 23, and how to lose weight safely.",
  alternates: { canonical: "https://bmicalculator.sg/health/overweight-singapore" },
  openGraph: {
    title: "Overweight in Singapore — HPB Rates, BMI Standards & Weight Loss Guide",
    description: "40.3% of Singapore adults are overweight or obese by Asian HPB standards. Learn what 'overweight' means in Singapore, why the threshold is BMI 23, and how to lose weight safely.",
    url: "https://bmicalculator.sg/health/overweight-singapore",
    type: "website",
  },
  twitter: {
    title: "Overweight in Singapore — HPB Rates, BMI Standards & Weight Loss Guide",
    description: "40.3% of Singapore adults are overweight or obese by Asian HPB standards. Learn what 'overweight' means in Singapore and how to lose weight safely.",
  },
};

const FAQS = [
  {
    question: "What percentage of Singaporeans are overweight?",
    answer:
      "According to the HPB National Population Health Survey 2022, approximately 40.3% of Singaporean adults aged 18–69 are overweight or obese by Asian BMI standards (BMI ≥23.0). This compares to about 28% using the WHO global threshold of BMI ≥25.0. The difference reflects the use of Singapore's HPB Asian cutoffs, which better reflect the metabolic risks faced by Asian adults.",
  },
  {
    question: "Is a BMI of 23 overweight in Singapore?",
    answer:
      "Yes. Singapore's Health Promotion Board (HPB) defines overweight as a BMI of 23.0 or above for Asian adults. This is lower than the international WHO threshold of 25.0. The lower HPB cutoff is based on evidence that Asians, including Singaporeans, develop metabolic complications such as diabetes and cardiovascular disease at lower BMI values than Caucasians. A BMI of 23–27.4 is classified as overweight (HPB); 27.5 and above is classified as obese.",
  },
  {
    question: "How can I lose weight safely in Singapore?",
    answer:
      "The HPB recommends a structured approach: (1) Calculate your daily calorie needs using a TDEE calculator, (2) Create a moderate calorie deficit of 500–750 kcal/day to lose 0.5–0.75 kg/week, (3) Aim for a diet with balanced macronutrients, reduced refined carbohydrates, and adequate protein to preserve muscle mass, (4) Achieve at least 150 minutes of moderate-intensity exercise weekly, (5) Get adequate sleep — sleep deprivation raises hunger hormones. Do not go below 1,200 kcal/day (women) or 1,500 kcal/day (men). The HPB Community Health Assist Scheme (CHAS) subsidises dietitian visits for eligible Singaporeans.",
  },
  {
    question: "Which foods are making Singaporeans overweight?",
    answer:
      "Singapore's hawker culture — while a source of national pride — includes many calorie-dense staples. White rice (high glycaemic index), fried dishes like nasi lemak and char kway teow, sweetened drinks like kopi-o and teh tarik, and kueh (sticky rice cakes) are commonly consumed in excess. Singapore also has one of the highest per-capita sweetened beverage consumption rates in Southeast Asia. The HPB Healthier Dining Programme and Nutri-Grade labelling on beverages are government initiatives helping Singaporeans make healthier food choices.",
  },
];

const STATS = [
  { value: "40.3%", label: "Adults overweight/obese by HPB standards" },
  { value: "BMI 23", label: "HPB overweight threshold for Asians" },
  { value: "1 in 9", label: "Singaporeans with diabetes (partly weight-related)" },
  { value: "28%", label: "Would be overweight by WHO thresholds only" },
];

export default function OverweightSingaporePage() {
  return (
    <>
      <CalculatorSchema
        name="Overweight in Singapore"
        description="Guide to overweight rates, BMI standards, and weight loss recommendations in Singapore."
        url="https://bmicalculator.sg/health/overweight-singapore"
        lastReviewed="2026-03-31"
        isMedical={true}
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Health", url: "https://bmicalculator.sg/health" },
          { name: "Overweight in Singapore", url: "https://bmicalculator.sg/health/overweight-singapore" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{ background: "#FFF3E0", color: "var(--bmi-overweight)" }}
        >
          Health Guide · HPB Asian Standards
        </span>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Overweight in Singapore
        </h1>
        <p className="text-base mb-8 max-w-2xl" style={{ color: "var(--color-on-surface-variant)" }}>
          More than 40% of Singaporean adults are overweight or obese by HPB Asian standards. Understanding
          what &ldquo;overweight&rdquo; means in Singapore, and how the HPB thresholds differ from global
          standards, is essential for accurate health assessment.
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
          This page provides general health information only. For personalised weight management advice,
          consult a doctor or registered dietitian.
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
                style={{ fontFamily: "var(--font-manrope)", color: "var(--bmi-overweight)" }}
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
              Singapore&apos;s HPB BMI Standards Explained
            </h2>
            <p>
              The most important thing Singaporeans need to know about BMI is that Singapore uses{" "}
              <strong>different thresholds from the WHO global standard</strong>. The HPB Asian
              classification places the overweight threshold at BMI 23.0, compared to the WHO&apos;s
              25.0. This means that many Singaporeans who would be classified as &ldquo;normal
              weight&rdquo; by international tools are actually overweight by local health standards.
            </p>
            <div
              className="mt-4 rounded-2xl p-4 overflow-x-auto"
              style={{ background: "var(--color-surface-container)" }}
            >
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ color: "var(--color-on-surface)" }}>
                    <th className="text-left py-2 font-semibold">Category</th>
                    <th className="text-center py-2 font-semibold">HPB (Singapore)</th>
                    <th className="text-center py-2 font-semibold">WHO (Global)</th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--color-on-surface-variant)" }}>
                  {[
                    ["Healthy weight", "18.5–22.9", "18.5–24.9"],
                    ["Overweight", "23.0–27.4", "25.0–29.9"],
                    ["Obese", "≥27.5", "≥30.0"],
                  ].map(([cat, hpb, who]) => (
                    <tr key={cat} className="border-t" style={{ borderColor: "var(--color-outline-variant)" }}>
                      <td className="py-2">{cat}</td>
                      <td className="py-2 text-center font-semibold" style={{ color: "var(--bmi-overweight)" }}>
                        {hpb}
                      </td>
                      <td className="py-2 text-center">{who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Why 40% of Singaporeans Are Overweight
            </h2>
            <p>
              The rise in overweight rates in Singapore mirrors global trends but is amplified by
              specific local factors: a hawker culture rich in refined carbohydrates and fried foods,
              increasing sedentary desk work, and a high-stress work environment. The transition from
              a physically active workforce in the 1960s–80s to a predominantly desk-based economy has
              dramatically reduced baseline daily energy expenditure.
            </p>
            <p className="mt-3">
              Rates are highest among older Singaporeans (60–69: estimated 50%+ overweight by HPB
              standards) and lowest among those aged 18–29. Overweight rates are also higher in men
              than women across all age groups.
            </p>
          </section>

          <section>
            <h2
              className="text-xl font-bold mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Health Risks of Being Overweight at BMI 23–27.4
            </h2>
            <ul className="space-y-2">
              {[
                "Increased risk of Type 2 diabetes — significant at BMI 23+",
                "Elevated LDL cholesterol and reduced HDL cholesterol",
                "Higher blood pressure (each 5 BMI units adds ~5 mmHg systolic BP)",
                "Greater risk of non-alcoholic fatty liver disease",
                "Increased risk of certain cancers (colorectal, breast, endometrial)",
                "Joint strain and early-onset osteoarthritis",
                "Sleep apnoea and disrupted sleep quality",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "var(--bmi-overweight)" }}
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
              HPB Weight Management Recommendations
            </h2>
            <p>
              The HPB recommends a goal of reaching BMI 18.5&ndash;22.9 for most Singaporean adults.
              For those currently overweight (BMI 23&ndash;27.4), an initial target of 5&ndash;10% body
              weight loss is clinically meaningful and achievable. A moderate calorie deficit of
              500&ndash;750 kcal/day is considered safe and leads to 0.5&ndash;0.75 kg of weight
              loss per week.
            </p>
            <p className="mt-3">
              Singapore&apos;s HPB offers free resources including the Healthy 365 app, the Eat, Drink,
              Shop Healthy Challenge, and the Step Challenge to support weight management. The Community
              Health Assist Scheme (CHAS) subsidises dietitian and physiotherapist consultations for
              eligible residents.
            </p>
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
          style={{ background: "#FFF3E0", border: "1px solid #FFE0B2" }}
        >
          <h2
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--bmi-overweight)" }}
          >
            Calculate Your Numbers
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/bmi-calculator", label: "BMI Calculator" },
              { href: "/calorie-deficit-calculator", label: "Calorie Deficit Calculator" },
              { href: "/tdee-calculator", label: "TDEE Calculator" },
              { href: "/ideal-weight-calculator", label: "Ideal Weight Calculator" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block px-4 py-2 rounded-xl text-sm font-semibold text-white transition-colors"
                style={{ background: "var(--bmi-overweight)" }}
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
