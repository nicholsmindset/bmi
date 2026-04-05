import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — BMI Calculator Singapore",
  description:
    "BMI Calculator Singapore is a free health calculator hub built on HPB Asian standards. Learn about our editorial standards, data sources, and medical review process.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/about" },
  openGraph: {
    title: "About — BMI Calculator Singapore",
    description:
      "BMI Calculator Singapore is a free health calculator hub built on HPB Asian standards. Learn about our editorial standards, data sources, and medical review process.",
    url: "https://www.bmicalculatorsingapore.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20 space-y-10">
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
        >
          About This Site
        </p>
        <h1
          className="text-4xl font-extrabold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          BMI Calculator Singapore
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
          A free Singapore health calculator suite built on HPB Asian standards.
          All 15 calculators use medically validated formulas from Singapore&apos;s Health
          Promotion Board (HPB), the Ministry of Health (MOH), and internationally
          recognised clinical guidelines.
        </p>
      </div>

      <div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          What We Do
        </h2>
        <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
          <p>
            We provide free, Singapore-specific health calculators that use Asian HPB standards
            as the default — not the WHO global cutoffs that were designed for Caucasian populations.
            Overweight in Singapore starts at BMI 23.0, not 25.0. Our tools reflect that.
          </p>
          <p>
            Every calculator is designed to give you instant, accurate results without
            paywalls, email gates, or advertising-gated content. Calculators are always
            above the fold.
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Our Editorial Standards
        </h2>
        <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
          <p>
            All calculator formulas are sourced from peer-reviewed clinical guidelines and
            Singapore government health authorities. Specific sources include:
          </p>
          <ul className="space-y-2 ml-4">
            {[
              "Health Promotion Board (HPB) Singapore — BMI, ideal weight, nutrition, and activity guidelines",
              "Ministry of Health (MOH) Singapore — Hypertension and chronic disease management guidelines",
              "International Society of Sports Nutrition (ISSN) — Protein intake recommendations",
              "National Sleep Foundation (NSF) — Sleep duration recommendations",
              "American Council on Exercise (ACE) — Body fat percentage classifications",
              "WHO Western Pacific Region — Waist circumference and waist-to-hip ratio for Asian populations",
              "Mifflin-St Jeor Equation (1990) — BMR calculation validated for Asian populations",
            ].map((source, i) => (
              <li key={i} className="flex items-start gap-2">
                <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>•</span>
                <span>{source}</span>
              </li>
            ))}
          </ul>
          <p>
            All health pages are marked with a <strong>last reviewed date</strong> in structured data (schema.org).
            We update content whenever Singapore MOH or HPB guidelines change.
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Limitations and Disclaimer
        </h2>
        <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
          <p>
            All calculators on this site are <strong>educational tools only</strong> and are not a
            substitute for professional medical advice, diagnosis, or treatment. Results are estimates
            based on population-level formulas and may not reflect individual circumstances.
          </p>
          <p>
            If you have concerns about your health — including your weight, blood pressure, cholesterol,
            or sleep — please consult a qualified healthcare professional, your GP, or a polyclinic.
            For emergencies, call 995.
          </p>
          <p>
            Read our full{" "}
            <Link href="/medical-disclaimer" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
              Medical Disclaimer
            </Link>{" "}
            for complete details.
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Why Singapore-Specific Standards Matter
        </h2>
        <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
          <p>
            The standard WHO BMI classification (overweight ≥ 25.0) was developed primarily using data
            from Caucasian populations. Multiple studies — including research from Singapore&apos;s own HPB —
            have shown that Chinese, Malay, and Indian populations in Singapore carry higher proportions
            of body fat at the same BMI, and face elevated risks of diabetes and cardiovascular disease
            at lower BMI thresholds.
          </p>
          <p>
            By using HPB Asian standards by default on every calculator, we ensure that Singaporeans
            receive risk assessments calibrated to their actual biology — not global averages.
          </p>
        </div>
      </div>

      <div>
        <h2
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          Calculators Available
        </h2>
        <div className="grid sm:grid-cols-2 gap-2 text-sm">
          {[
            ["BMI Calculator", "/bmi-calculator"],
            ["Calorie Deficit Calculator", "/calorie-deficit-calculator"],
            ["TDEE Calculator", "/tdee-calculator"],
            ["BMR Calculator", "/bmr-calculator"],
            ["Protein Calculator", "/protein-calculator"],
            ["Sleep Calculator", "/sleep-calculator"],
            ["Ideal Weight Calculator", "/ideal-weight-calculator"],
            ["Body Fat Percentage Calculator", "/body-fat-calculator"],
            ["Waist-to-Hip Ratio Calculator", "/waist-hip-ratio-calculator"],
            ["Blood Pressure Checker", "/blood-pressure-checker"],
            ["Macro Calculator", "/macro-calculator"],
            ["Calorie Calculator", "/calorie-calculator"],
            ["Water Intake Calculator", "/water-intake-calculator"],
            ["Calories Burned Calculator", "/calories-burned-calculator"],
            ["Cholesterol Calculator", "/cholesterol-calculator"],
          ].map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{
                background: "var(--color-surface-container)",
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>→</span>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
