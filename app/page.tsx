import type { Metadata } from "next";
import Link from "next/link";
import BMICalculatorClient from "@/components/calculators/BMICalculatorClient";
import AdUnit from "@/components/ui/AdUnit";

export const metadata: Metadata = {
  title: "15 Free Singapore Health Calculators — BMI, Calories, Sleep & More",
  description:
    "Singapore's complete health calculator suite using HPB Asian standards. BMI, calorie deficit, TDEE, sleep, protein, body fat, blood pressure and more. Free, instant results.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com" },
  openGraph: {
    title: "15 Free Singapore Health Calculators — BMI, Calories, Sleep & More",
    description:
      "Singapore's complete health calculator suite using HPB Asian standards. BMI, calorie deficit, TDEE, sleep, protein, body fat, blood pressure and more. Free, instant results.",
    url: "https://www.bmicalculatorsingapore.com",
    type: "website",
  },
  twitter: {
    title: "15 Free Singapore Health Calculators — BMI, Calories, Sleep & More",
    description:
      "Singapore's complete health calculator suite using HPB Asian standards. BMI, calorie deficit, TDEE, sleep, protein, body fat, blood pressure and more.",
  },
};

const CALCULATOR_GROUPS = [
  {
    category: "Weight & Body Composition",
    color: "#2563EB",
    bgColor: "#EFF6FF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 12h18M3 18h18"/>
      </svg>
    ),
    tools: [
      { href: "/bmi-calculator",             name: "BMI Calculator",                desc: "Singapore HPB Asian standard — overweight from BMI 23.0", badge: "Most used" },
      { href: "/ideal-weight-calculator",    name: "Ideal Weight Calculator",       desc: "HPB healthy weight range for your height" },
      { href: "/body-fat-calculator",        name: "Body Fat % Calculator",         desc: "US Navy method — no body fat scale needed" },
      { href: "/waist-hip-ratio-calculator", name: "Waist-Hip Ratio Calculator",    desc: "Central obesity risk the BMI misses" },
    ],
  },
  {
    category: "Calories & Nutrition",
    color: "#7C3AED",
    bgColor: "#F3EEFF",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    tools: [
      { href: "/calorie-deficit-calculator", name: "Calorie Deficit Calculator", desc: "Daily calorie target to reach your goal weight by a target date", badge: "Popular" },
      { href: "/tdee-calculator",            name: "TDEE Calculator",            desc: "Total daily energy expenditure — your maintenance calories" },
      { href: "/bmr-calculator",             name: "BMR Calculator",             desc: "Basal metabolic rate using Mifflin-St Jeor equation" },
      { href: "/calorie-calculator",         name: "Calorie Calculator",         desc: "How many calories should you eat per day?" },
      { href: "/macro-calculator",           name: "Macro Calculator",           desc: "Daily protein, carbs and fat targets by goal" },
      { href: "/protein-calculator",         name: "Protein Intake Calculator",  desc: "ISSN protein recommendations with hawker food guide" },
      { href: "/calories-burned-calculator", name: "Calories Burned Calculator", desc: "Walking, running, cycling, swimming, badminton" },
      { href: "/water-intake-calculator",    name: "Water Intake Calculator",    desc: "Daily hydration target for Singapore's tropical climate" },
    ],
  },
  {
    category: "Sleep & Health Risk",
    color: "#DB2777",
    bgColor: "#FDF2F8",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
    tools: [
      { href: "/sleep-calculator",       name: "Sleep Cycle Calculator",       desc: "Optimal bedtime and wake-up times using 90-minute sleep cycles" },
      { href: "/blood-pressure-checker", name: "Blood Pressure Checker",       desc: "Singapore MOH and JNC8 blood pressure categories" },
      { href: "/cholesterol-calculator", name: "Cholesterol Ratio Calculator", desc: "TC/HDL cardiovascular risk ratio with Singapore HPB targets" },
    ],
  },
];

const STATS = [
  { value: "12.7%", label: "Adult obesity rate",      note: "Using HPB Asian BMI threshold of 27.5",             color: "#F87171" },
  { value: "9.1%",  label: "Diabetes prevalence",     note: "One of Asia's highest rates — closely linked to BMI", color: "#FB923C" },
  { value: "6.5h",  label: "Average nightly sleep",   note: "Singapore ranks among the world's most sleep-deprived nations", color: "#818CF8" },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.bmicalculatorsingapore.com/#website",
                url: "https://www.bmicalculatorsingapore.com",
                name: "BMI Calculator Singapore",
                description: "Singapore's complete health calculator suite using HPB Asian standards.",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.bmicalculatorsingapore.com/bmi-calculator",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://www.bmicalculatorsingapore.com/#organization",
                url: "https://www.bmicalculatorsingapore.com",
                name: "BMI Calculator Singapore",
                description: "Free Singapore health calculators using HPB Asian standards.",
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero — blue gradient top accent */}
      <section
        style={{
          background: "linear-gradient(180deg, #EEF4FF 0%, #F7F6FF 100%)",
          borderBottom: "1px solid var(--color-outline-variant)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12">
          <div className="max-w-2xl mb-8">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: "var(--color-primary-container)", color: "var(--color-primary-dark)" }}
            >
              Singapore HPB Asian Standards · Free
            </span>
            <h1
              className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3"
              style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
            >
              Singapore Health Calculators
            </h1>
            <p className="text-base" style={{ color: "var(--color-on-surface-variant)", lineHeight: "1.7" }}>
              15 free calculators built on Singapore HPB standards. BMI, calorie deficit, TDEE, protein, sleep
              cycles, blood pressure — all results instant, no sign-ups required.
            </p>
          </div>

          {/* BMI Calculator — above the fold */}
          <BMICalculatorClient />
        </div>
      </section>

      {/* Ad */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      {/* Calculator Directory */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2
          className="text-xl font-bold mb-1"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          All Calculators
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--color-neutral)" }}>
          15 tools · Singapore HPB Asian standards where applicable
        </p>

        <div className="space-y-10">
          {CALCULATOR_GROUPS.map((group) => (
            <div key={group.category}>
              {/* Category header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
                    style={{ background: group.bgColor, color: group.color }}
                  >
                    {group.icon}
                  </span>
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
                  >
                    {group.category}
                  </h3>
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: group.bgColor, color: group.color }}
                >
                  {group.tools.length} tools
                </span>
              </div>

              {/* 2-column card grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group relative flex flex-col justify-between rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      background: "#fff",
                      border: "1px solid var(--color-outline-variant)",
                      borderLeft: `3px solid ${group.color}`,
                    }}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <p
                          className="text-sm font-semibold leading-snug group-hover:underline"
                          style={{ color: group.color }}
                        >
                          {tool.name}
                        </p>
                        {"badge" in tool && tool.badge && (
                          <span
                            className="shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                            style={{ background: group.bgColor, color: group.color }}
                          >
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>
                        {tool.desc}
                      </p>
                    </div>
                    <div className="flex justify-end mt-3">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ color: group.color, opacity: 0.5 }}
                        className="group-hover:opacity-100 transition-opacity"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ad mid-page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />
      </div>

      {/* Singapore Health Stats */}
      <section style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h2
            className="text-xl font-bold mb-1"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Singapore Health at a Glance
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--color-neutral)" }}>
            Key statistics from the Ministry of Health and Health Promotion Board
          </p>

          {/* Coloured stat cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {STATS.map((s) => (
              <div
                key={s.value}
                className="rounded-xl px-6 py-6"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-outline-variant)",
                  borderTop: `3px solid ${s.color}`,
                }}
              >
                <p
                  className="text-3xl font-extrabold mb-1"
                  style={{ fontFamily: "var(--font-manrope)", color: s.color }}
                >
                  {s.value}
                </p>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  {s.label}
                </p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  {s.note}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-5"
            style={{ background: "var(--color-primary-light)", borderLeft: "3px solid var(--color-primary)" }}
          >
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Why Singapore uses different BMI thresholds
            </p>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)", lineHeight: "1.7" }}>
              Singapore&apos;s Health Promotion Board (HPB) defines overweight as BMI ≥23.0 and obese as BMI ≥27.5
              — lower than the WHO global cutoffs of 25.0 and 30.0. Research shows Asians accumulate visceral fat
              and face metabolic risk at lower BMI values than people of European descent.{" "}
              <Link href="/bmi-calculator/asian" style={{ color: "var(--color-primary)" }} className="underline font-medium">
                HPB vs WHO explained →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
