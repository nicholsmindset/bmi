import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import SleepCalculatorClient from "@/components/calculators/SleepCalculatorClient";

export const metadata: Metadata = {
  title: "Sleep Calculator Singapore — Best Bedtime & Wake Up Time",
  description:
    "Find the best time to sleep or wake up based on 90-minute sleep cycles. Enter your wake time to get 4 bedtime options. Avoid grogginess by waking between cycles.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/sleep-calculator" },
  openGraph: {
    title: "Sleep Calculator Singapore — Best Bedtime & Wake Up Time",
    description:
      "Find the best time to sleep or wake up based on 90-minute sleep cycles. Enter your wake time to get 4 bedtime options. Avoid grogginess by waking between cycles.",
    url: "https://www.bmicalculatorsingapore.com/sleep-calculator",
    type: "website",
  },
  twitter: {
    title: "Sleep Calculator Singapore — Best Bedtime & Wake Up Time",
    description:
      "Find the best time to sleep or wake up based on 90-minute sleep cycles. Enter your wake time to get 4 bedtime options. Avoid grogginess by waking between cycles.",
  },
};

const RELATED = [
  {
    name: "BMI Calculator",
    tagline: "Sleep deprivation raises BMI risk",
    href: "/bmi-calculator",
    iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 2a5 5 0 100 10A5 5 0 0012 7z",
    accent: "#005EB8",
  },
  {
    name: "Calorie Calculator",
    tagline: "Sleep affects hunger hormones",
    href: "/calorie-calculator",
    iconPath: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-2.29-.48-3.25-1.42-4.14-.98-.91-2.71-1.85-5.08-1.85s-4.1.94-5.08 1.85C3.51 11.74 3 12.7 3 14.99v1h13.03v-1z",
    accent: "#F57C00",
  },
  {
    name: "Protein Intake Calculator",
    tagline: "Recovery nutrition for sleep",
    href: "/protein-calculator",
    iconPath: "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#00695C",
  },
];

export default function SleepCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Sleep Calculator Singapore"
        description="Calculate the optimal bedtime or wake-up time based on 90-minute sleep cycles."
        url="https://www.bmicalculatorsingapore.com/sleep-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is the best time to sleep in Singapore?",
            answer:
              "For a 6:30am wake-up, the optimal bedtimes using 90-minute sleep cycles are 9:16pm (7 cycles, 10.5h), 10:46pm (6 cycles, 9h), 12:16am (5 cycles, 7.5h), or 1:46am (4 cycles, 6h). Factor in 14 minutes to fall asleep.",
          },
          {
            question: "How many sleep cycles per night is optimal?",
            answer:
              "Most adults need 5–6 complete sleep cycles per night, equating to 7.5–9 hours. Each cycle lasts approximately 90 minutes and includes light sleep, deep sleep, and REM sleep stages.",
          },
          {
            question: "Why do I wake up tired even after 8 hours of sleep?",
            answer:
              "Waking mid-cycle causes sleep inertia — groggy, tired feelings. Try to time your alarm to complete a full 90-minute cycle. Use this sleep calculator to find your optimal wake-up time.",
          },
          {
            question: "How much sleep do Singaporeans need?",
            answer:
              "The NSF recommends 7–9 hours for adults aged 18–64 and 7–8 hours for those 65+. Singapore consistently ranks among the most sleep-deprived populations globally, with average sleep of just 6.5 hours.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Sleep Calculator", url: "https://www.bmicalculatorsingapore.com/sleep-calculator" },
        ]}
      />

      <CalculatorSection
        badge="Sleep Cycle · 90-Min Method"
        title="Sleep Cycle Calculator"
        description="Choose a wake-up time to find your ideal bedtime, or enter when you plan to sleep to find the best time to wake up. Results are timed to complete full 90-minute sleep cycles."
      >
        <SleepCalculatorClient defaultMode="bedtime" />
      </CalculatorSection>

      {/* Ad unit 1 — immediately below calculator */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-8">
        {/* Ad unit 2 — midpage */}
        <div>
          <AdUnit
            format="rectangle"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE ?? "PLACEHOLDER"}
            className="mx-auto"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            How Sleep Cycles Work
          </h2>
          <div className="space-y-4 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Each sleep cycle lasts approximately <strong>90 minutes</strong> and passes through four stages:
              N1 (light sleep), N2 (deeper sleep), N3 (slow-wave deep sleep), and REM (rapid eye movement).
              Waking up at the end of a cycle — rather than mid-cycle — leaves you feeling refreshed.
            </p>
            <p>
              The calculator adds <strong>14 minutes</strong> of sleep latency — the average time it takes a healthy
              adult to fall asleep after lying down. This means your actual bedtime should be 14 minutes before the
              first sleep cycle begins.
            </p>
          </div>
        </div>

        {/* Sleep duration table */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Sleep Duration by Cycles
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Cycles</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Sleep Time</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Total in Bed</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>NSF Assessment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { c: 4, sleep: "6h 0m",  total: "6h 14m", assess: "Insufficient", color: "#D84315" },
                  { c: 5, sleep: "7h 30m", total: "7h 44m", assess: "Minimum recommended", color: "#F57C00" },
                  { c: 6, sleep: "9h 0m",  total: "9h 14m", assess: "Optimal for adults", color: "#2E7D32" },
                  { c: 7, sleep: "10h 30m", total: "10h 44m", assess: "Good for recovery days", color: "#005EB8" },
                ].map((row) => (
                  <tr key={row.c} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>{row.c} cycles</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.sleep}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.total}</td>
                    <td className="p-3 font-medium" style={{ color: row.color }}>{row.assess}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Total in bed includes 14-minute average sleep latency. NSF = National Sleep Foundation.
          </p>
        </div>

        {/* Singapore sleep context */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Sleep in Singapore
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: "6.5h", label: "Average nightly sleep", desc: "Singapore ranks among the most sleep-deprived nations globally" },
              { stat: "44%",  label: "Get less than 7h", desc: "Of Singaporean adults report sleeping fewer than 7 hours on weeknights" },
              { stat: "3×",   label: "Obesity risk",      desc: "Higher obesity risk for those sleeping fewer than 6 hours per night" },
            ].map((s) => (
              <div key={s.stat} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-surface-container)" }}>
                <p className="text-3xl font-extrabold mb-1" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-calc-sleep)" }}>
                  {s.stat}
                </p>
                <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-on-surface-variant)" }}>{s.label}</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ad unit 3 — above FAQ (sleep page only) */}
        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What time should I sleep if I wake up at 6AM?",
                a: "For a 6:00 AM wake-up, the optimal bedtimes are: 8:46 PM (7 cycles, 10.5h), 10:16 PM (6 cycles, 9h — recommended), 11:46 PM (5 cycles, 7.5h), or 1:16 AM (4 cycles, 6h — minimum).",
              },
              {
                q: "Can I catch up on sleep on weekends?",
                a: "Partial recovery is possible — sleeping an extra 1–2 hours on weekends can reduce some effects of chronic sleep debt. However, it does not fully reverse the cognitive and metabolic effects of a week of insufficient sleep. Consistent sleep schedules are more effective.",
              },
              {
                q: "Does drinking coffee affect sleep cycles?",
                a: "Caffeine has a half-life of 5–7 hours. A coffee at 3 PM still has 50% of its caffeine active at 8–10 PM, which can delay sleep onset and reduce deep sleep (N3) stages even if you fall asleep normally. Avoid caffeine after 2 PM if you have a 10–11 PM bedtime.",
              },
              {
                q: "Is 6 hours of sleep enough for Singaporeans?",
                a: "No. The National Sleep Foundation recommends 7–9 hours for adults. Regularly sleeping 6 hours is associated with increased risk of obesity, diabetes, cardiovascular disease, and reduced cognitive performance — risks that are elevated in Singapore's high-stress environment.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: "var(--color-surface-container)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{item.q}</h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <RelatedCalculators items={RELATED} />
      </section>
    </>
  );
}
