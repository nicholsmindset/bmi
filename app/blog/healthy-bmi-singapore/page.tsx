import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Healthy BMI for Singaporeans — HPB Asian Standard Explained",
  description:
    "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults — lower than WHO's 25.0. Learn why, see the full BMI chart, and check your BMI free.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/blog/healthy-bmi-singapore" },
  openGraph: {
    title: "Healthy BMI for Singaporeans — HPB Asian Standard Explained",
    description:
      "What is a healthy BMI in Singapore? HPB recommends 18.5–22.9 for Asian adults — lower than WHO's 25.0. Learn why, see the full BMI chart, and check your BMI free.",
    url: "https://www.bmicalculatorsingapore.com/blog/healthy-bmi-singapore",
    type: "article",
  },
};

export default function HealthyBMISingaporePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20 space-y-8">
      <header>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
        >
          Singapore Health Guide
        </p>
        <h1
          className="text-4xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Healthy BMI for Singaporeans — HPB Asian Standard Explained
        </h1>
        <p className="text-sm" style={{ color: "var(--color-neutral)" }}>
          Last updated: April 2026 · Source: Health Promotion Board (HPB) Singapore
        </p>
      </header>

      {/* Quick Answer box */}
      <aside
        className="rounded-2xl px-5 py-4"
        style={{ background: "var(--color-primary-light)", borderLeft: "4px solid var(--color-primary)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--color-primary)" }}>
          Quick Answer
        </p>
        <p className="text-sm font-medium mb-3" style={{ color: "var(--color-on-surface)", lineHeight: 1.6 }}>
          A healthy BMI for Singaporeans is <strong>18.5–22.9</strong> under HPB Asian standards.
          Overweight starts at <strong>23.0</strong> — not 25.0 as the WHO global standard states.
        </p>
        <ul className="space-y-1">
          {[
            "Healthy: 18.5–22.9 · Overweight: 23.0–27.4 · Obese: 27.5+",
            "~40% of Singaporeans aged 18–69 are overweight or obese by HPB standards",
            "Asian bodies carry more fat at the same BMI — that's why the threshold is lower",
          ].map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
              <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          What Is a Healthy BMI in Singapore?
        </h2>
        <p>
          Body Mass Index (BMI) is calculated by dividing your weight in kilograms by the square of
          your height in metres (kg/m²). Singapore&apos;s{" "}
          <strong>Health Promotion Board (HPB)</strong> uses lower BMI cutoffs than the WHO because
          Asian populations — including Chinese, Malay, and Indian Singaporeans — carry more body fat
          at any given BMI and face higher metabolic health risks at lower weight thresholds.
        </p>
        <p>
          The HPB healthy BMI range for Singaporean adults is <strong>18.5 to 22.9</strong>.
          This compares to the WHO global healthy range of 18.5 to 24.9.
          A Singaporean with a BMI of 24 — classified as &ldquo;healthy&rdquo; by WHO — is actually in the
          <strong> overweight</strong> category under Singapore standards.
        </p>
        <p>
          Use our{" "}
          <Link href="/bmi-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            BMI Calculator Singapore
          </Link>{" "}
          to check your result against HPB Asian standards instantly.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Singapore HPB BMI Categories
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr style={{ background: "var(--color-surface-container)" }}>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Category</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>HPB Asian BMI</th>
                <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>WHO Global BMI</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Underweight",    "< 18.5",     "< 18.5"],
                ["Healthy weight", "18.5–22.9",  "18.5–24.9"],
                ["Overweight",     "23.0–27.4",  "25.0–29.9"],
                ["Obese I",        "27.5–32.4",  "30.0–34.9"],
                ["Obese II",       "≥ 32.5",     "≥ 35.0"],
              ].map(([cat, hpb, who]) => (
                <tr key={cat} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                  <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{cat}</td>
                  <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{hpb}</td>
                  <td className="p-3" style={{ color: "var(--color-neutral)" }}>{who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
          Source: Health Promotion Board (HPB) Singapore · WHO Global BMI Classification
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Why Are Asian BMI Cutoffs Lower?
        </h2>
        <p>
          Multiple studies have shown that at the same BMI, Asian adults have a higher percentage of
          body fat and more visceral (abdominal) fat compared to Caucasian adults. Visceral fat
          accumulates around internal organs and is associated with insulin resistance, Type 2 diabetes,
          and cardiovascular disease — all of which are significant public health concerns in Singapore.
        </p>
        <p>
          The 2000 WHO consultation on obesity specifically recommended that Asian countries adopt lower
          action points for BMI. Singapore&apos;s HPB, along with Hong Kong, Taiwan, and Japan, has adopted
          23.0 as the overweight threshold and 27.5 as the obesity threshold for Asian populations.
        </p>
        <p>
          This matters because approximately <strong>40% of Singaporeans</strong> aged 18–69 are
          overweight or obese by HPB standards — a figure that would be lower under WHO cutoffs,
          potentially masking the true scale of the health risk.
        </p>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Limitations of BMI
        </h2>
        <p>
          BMI is a useful population-level screening tool but does not measure body composition directly.
          It cannot distinguish between muscle and fat — a lean, muscular athlete may have a higher BMI
          than expected with healthy body composition.
        </p>
        <p>
          For a more complete picture, use BMI alongside your{" "}
          <Link href="/body-fat-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            body fat percentage
          </Link>{" "}
          (US Navy method) and your{" "}
          <Link href="/waist-hip-ratio-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            waist-to-hip ratio
          </Link>{" "}
          — which measures central obesity that BMI alone can miss.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Frequently Asked Questions
        </h2>
        {[
          {
            q: "What is a healthy BMI for a 30-year-old Singaporean?",
            a: "The HPB healthy BMI range of 18.5–22.9 applies to all Singaporean adults regardless of age. The same thresholds are used for adults aged 18–65. For seniors (65+), your doctor may use slightly different assessment criteria.",
          },
          {
            q: "Is BMI 23 overweight in Singapore?",
            a: "Yes. A BMI of 23.0 or above is classified as overweight by Singapore HPB Asian standards. This is 2 points lower than the WHO global threshold of 25.0.",
          },
          {
            q: "What is the average BMI in Singapore?",
            a: "The average BMI in Singapore is approximately 23.5 for adults — placing the average Singaporean in the overweight category by HPB standards.",
          },
          {
            q: "Does HPB Asian BMI apply to Indian and Malay Singaporeans too?",
            a: "Yes. Singapore HPB recommends the same 18.5–22.9 healthy range for all Asian ethnic groups, including Chinese, Malay, and Indian Singaporeans. Research shows similar patterns of elevated metabolic risk at lower BMI across all three groups.",
          },
        ].map((item, i) => (
          <div key={i} className="rounded-2xl p-5" style={{ background: "var(--color-surface-container)" }}>
            <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{item.q}</h3>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{item.a}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl p-6 text-center"
        style={{ background: "var(--color-primary-container)" }}
      >
        <p className="font-bold mb-2" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary-dark)" }}>
          Check Your BMI Now
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
          Free Singapore HPB Asian standard. Instant results with your healthy weight range.
        </p>
        <Link
          href="/bmi-calculator"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ background: "var(--color-primary)", color: "white", textDecoration: "none" }}
        >
          Calculate My BMI →
        </Link>
      </div>
    </article>
  );
}
