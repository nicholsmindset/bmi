import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";

export const metadata: Metadata = {
  title: "BMI Chart Singapore — HPB Asian & WHO BMI Ranges",
  description:
    "Complete BMI chart for Singapore using HPB Asian standards and WHO global categories. BMI tables for men and women by height from 155cm to 180cm. Understand what your BMI means.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/bmi-chart" },
  openGraph: {
    title: "BMI Chart Singapore — HPB Asian & WHO BMI Ranges",
    description:
      "Complete BMI chart for Singapore using HPB Asian standards and WHO global categories. BMI tables for men and women by height from 155cm to 180cm. Understand what your BMI means.",
    url: "https://www.bmicalculatorsingapore.com/bmi-chart",
    type: "website",
  },
  twitter: {
    title: "BMI Chart Singapore — HPB Asian & WHO BMI Ranges",
    description:
      "Complete BMI chart for Singapore using HPB Asian standards and WHO global categories. BMI tables for men and women by height from 155cm to 180cm. Understand what your BMI means.",
  },
};

const FAQS = [
  {
    question: "What BMI is considered overweight in Singapore?",
    answer:
      "In Singapore, the Health Promotion Board (HPB) defines overweight as a BMI of 23.0 or higher for Asian adults. This is lower than the WHO global threshold of 25.0. The HPB lower cutoff reflects research showing that Asians carry a higher proportion of body fat at the same BMI compared to Caucasians, and face higher risks of diabetes and cardiovascular disease at lower BMI values.",
  },
  {
    question: "At what BMI is weight loss recommended in Singapore?",
    answer:
      "The HPB recommends weight management strategies starting at a BMI of 23.0 (overweight) and more active medical intervention at 27.5 (obese). At BMI 23.0–27.4, lifestyle changes including diet modification and increased physical activity are recommended. At BMI 27.5 and above, medical assessment and possibly clinical weight management programmes may be appropriate. Consult a healthcare professional for personalised advice.",
  },
  {
    question: "How is the Singapore BMI chart different from other countries?",
    answer:
      "Singapore follows the Asia-Pacific BMI classification established by the World Health Organization and adopted by the HPB. The key differences from the international WHO classification are: the healthy range is 18.5–22.9 (not 18.5–24.9), overweight starts at 23.0 (not 25.0), and obese starts at 27.5 (not 30.0). This means that using the international WHO chart would underestimate health risks for Singaporeans — a BMI of 24, classified as 'healthy' by WHO standards, is 'overweight' by Singapore HPB standards.",
  },
  {
    question: "What are the limitations of BMI?",
    answer:
      "BMI does not directly measure body fat and has several known limitations: it overestimates risk for muscular individuals (athletes, bodybuilders) who have high lean mass; it may underestimate risk for older adults who have lost muscle but gained fat ('skinny fat'); it does not account for fat distribution (abdominal fat is more dangerous than fat in other areas); and it is the same regardless of sex despite men and women having different natural body fat levels. For a more complete assessment, consider combining BMI with waist circumference or waist-to-hip ratio.",
  },
];

// Weight ranges (kg) for HPB categories at each height
// Formula: weight = BMI × (heightM)²
const BMI_HEIGHT_DATA = [
  { height: "155 cm", hm: 1.55 },
  { height: "160 cm", hm: 1.60 },
  { height: "165 cm", hm: 1.65 },
  { height: "170 cm", hm: 1.70 },
  { height: "175 cm", hm: 1.75 },
  { height: "180 cm", hm: 1.80 },
].map(({ height, hm }) => {
  const w = (bmi: number) => Math.round(bmi * hm * hm);
  return {
    height,
    underweightMax: w(18.49),
    healthyMin: w(18.5),
    healthyMax: w(22.99),
    overweightMin: w(23.0),
    overweightMax: w(27.49),
    obese1Min: w(27.5),
    obese1Max: w(32.49),
    obese2Min: w(32.5),
  };
});

export default function BMIChartPage() {
  return (
    <>
      <CalculatorSchema
        name="BMI Chart Singapore"
        description="Complete BMI chart for Singapore using HPB Asian standards and WHO global categories."
        url="https://www.bmicalculatorsingapore.com/bmi-chart"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        isMedical={true}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "BMI Chart", url: "https://www.bmicalculatorsingapore.com/bmi-chart" },
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Page header */}
        <span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{
            background: "var(--color-primary-container)",
            color: "var(--color-primary-dark)",
          }}
        >
          Reference Chart · HPB Asian Standards
        </span>
        <h1
          className="text-3xl sm:text-4xl font-extrabold mb-3"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          BMI Chart Singapore
        </h1>
        <p className="text-base mb-8 max-w-2xl" style={{ color: "var(--color-on-surface-variant)" }}>
          Singapore&apos;s Health Promotion Board (HPB) uses different BMI cutoffs from the WHO global
          standard. This page shows both classification systems side by side, plus a weight reference
          table for common heights using HPB Asian standards.
        </p>

        {/* HPB vs WHO comparison */}
        <div className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            HPB Asian vs WHO Global BMI Categories
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            Asians carry a higher proportion of body fat at the same BMI compared to Caucasians and face
            elevated risks of diabetes and cardiovascular disease at lower BMI values. As a result,
            Singapore&apos;s HPB sets the overweight threshold at 23.0 — two full BMI points lower than
            the WHO global cutoff.
          </p>
          <div
            className="overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--color-outline-variant)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-tertiary)", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Category</th>
                  <th className="text-center px-4 py-3 font-semibold">HPB Asian Range</th>
                  <th className="text-center px-4 py-3 font-semibold">WHO Global Range</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">
                    Health Implications
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    cat: "Underweight",
                    hpb: "< 18.5",
                    who: "< 18.5",
                    notes: "Nutritional deficiency risk, weakened immunity",
                    color: "var(--bmi-underweight)",
                  },
                  {
                    cat: "Healthy weight",
                    hpb: "18.5 – 22.9",
                    who: "18.5 – 24.9",
                    notes: "Lowest disease risk for Asians",
                    color: "var(--bmi-healthy)",
                  },
                  {
                    cat: "Overweight",
                    hpb: "23.0 – 27.4",
                    who: "25.0 – 29.9",
                    notes: "Elevated T2 diabetes and CVD risk",
                    color: "var(--bmi-overweight)",
                  },
                  {
                    cat: "Obese I",
                    hpb: "27.5 – 32.4",
                    who: "30.0 – 34.9",
                    notes: "High risk; clinical assessment recommended",
                    color: "var(--bmi-obese1)",
                  },
                  {
                    cat: "Obese II",
                    hpb: "≥ 32.5",
                    who: "≥ 35.0",
                    notes: "Very high risk; medical intervention advised",
                    color: "var(--bmi-obese2)",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.cat}
                    style={{
                      background:
                        i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)",
                    }}
                  >
                    <td className="px-4 py-3 font-semibold flex items-center gap-2">
                      <span
                        className="inline-block w-3 h-3 rounded-full flex-shrink-0"
                        style={{ background: row.color }}
                      />
                      <span style={{ color: "var(--color-on-surface)" }}>{row.cat}</span>
                    </td>
                    <td
                      className="px-4 py-3 text-center font-bold"
                      style={{ color: row.color }}
                    >
                      {row.hpb}
                    </td>
                    <td
                      className="px-4 py-3 text-center"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {row.who}
                    </td>
                    <td
                      className="px-4 py-3 hidden sm:table-cell text-sm"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ad unit 1 */}
        <div className="my-8">
          <AdUnit
            format="leaderboard"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
            className="mx-auto"
          />
        </div>

        {/* Weight ranges by height */}
        <div className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            HPB Healthy Weight Ranges by Height
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            The table below shows HPB-classified weight ranges (kg) for each category based on height.
            Find your height row to see the corresponding weight ranges.
          </p>
          <div
            className="overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--color-outline-variant)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-tertiary)", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Height</th>
                  <th
                    className="text-center px-3 py-3 font-semibold"
                    style={{ color: "#90CAF9" }}
                  >
                    Underweight
                    <br />
                    <span className="font-normal text-xs opacity-80">&lt;18.5</span>
                  </th>
                  <th
                    className="text-center px-3 py-3 font-semibold"
                    style={{ color: "#A5D6A7" }}
                  >
                    Healthy
                    <br />
                    <span className="font-normal text-xs opacity-80">18.5–22.9</span>
                  </th>
                  <th
                    className="text-center px-3 py-3 font-semibold"
                    style={{ color: "#FFCC80" }}
                  >
                    Overweight
                    <br />
                    <span className="font-normal text-xs opacity-80">23–27.4</span>
                  </th>
                  <th
                    className="text-center px-3 py-3 font-semibold hidden md:table-cell"
                    style={{ color: "#FFAB91" }}
                  >
                    Obese I
                    <br />
                    <span className="font-normal text-xs opacity-80">27.5–32.4</span>
                  </th>
                  <th
                    className="text-center px-3 py-3 font-semibold hidden md:table-cell"
                    style={{ color: "#EF9A9A" }}
                  >
                    Obese II
                    <br />
                    <span className="font-normal text-xs opacity-80">≥32.5</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {BMI_HEIGHT_DATA.map((row, i) => (
                  <tr
                    key={row.height}
                    style={{
                      background:
                        i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-bold"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {row.height}
                    </td>
                    <td
                      className="px-3 py-3 text-center text-xs"
                      style={{ color: "var(--bmi-underweight)" }}
                    >
                      &lt;{row.underweightMax} kg
                    </td>
                    <td
                      className="px-3 py-3 text-center text-xs font-semibold"
                      style={{ color: "var(--bmi-healthy)" }}
                    >
                      {row.healthyMin}–{row.healthyMax} kg
                    </td>
                    <td
                      className="px-3 py-3 text-center text-xs"
                      style={{ color: "var(--bmi-overweight)" }}
                    >
                      {row.overweightMin}–{row.overweightMax} kg
                    </td>
                    <td
                      className="px-3 py-3 text-center text-xs hidden md:table-cell"
                      style={{ color: "var(--bmi-obese1)" }}
                    >
                      {row.obese1Min}–{row.obese1Max} kg
                    </td>
                    <td
                      className="px-3 py-3 text-center text-xs hidden md:table-cell"
                      style={{ color: "var(--bmi-obese2)" }}
                    >
                      &gt;{row.obese2Min} kg
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Weight ranges calculated using HPB Asian BMI categories. Values rounded to nearest whole kg.
            The Obese I and Obese II columns are hidden on small screens — scroll right or view on desktop.
          </p>
        </div>

        {/* How to read */}
        <div className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            How to Read This BMI Chart
          </h2>
          <div className="space-y-4 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              <strong>Step 1</strong> — Find your height row in the weight table above. If your height
              falls between values, use the nearest row or use the interactive calculator for an exact result.
            </p>
            <p>
              <strong>Step 2</strong> — Locate your current body weight in that row to identify your BMI
              category. The &ldquo;Healthy&rdquo; column shows the HPB-recommended weight range for your height.
            </p>
            <p>
              <strong>Step 3</strong> — Compare against the category definitions in the first table. Remember
              that Singapore follows HPB Asian standards where overweight starts at BMI 23.0, not the WHO
              global 25.0.
            </p>
            <p>
              <strong>Note</strong> — BMI is a screening tool, not a diagnostic measure. It does not
              distinguish between fat mass and muscle mass. Athletes and highly muscular individuals may
              have elevated BMI despite having healthy body composition.
            </p>
          </div>
        </div>

        {/* Ad unit 2 */}
        <div className="my-8">
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

        {/* CTA to interactive BMI calculator */}
        <div
          className="rounded-3xl p-8 text-center"
          style={{
            background: "var(--color-primary-container)",
            border: "1px solid var(--color-primary-light)",
          }}
        >
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary-dark)" }}
          >
            Calculate Your Exact BMI
          </h2>
          <p className="text-sm mb-5" style={{ color: "var(--color-primary-dark)" }}>
            Use our interactive BMI calculator for an instant, precise result with personalised
            health guidance using Singapore HPB standards.
          </p>
          <Link
            href="/bmi-calculator"
            className="inline-block px-6 py-3 rounded-xl font-semibold text-white text-sm transition-colors"
            style={{ background: "var(--color-primary)" }}
          >
            Calculate My BMI &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
