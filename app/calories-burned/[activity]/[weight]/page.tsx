import type { Metadata } from "next";
import Link from "next/link";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";

const ACTIVITIES = ["walking", "running", "cycling", "swimming"] as const;
const WEIGHTS = [50, 60, 70, 80, 90, 100];

type Activity = (typeof ACTIVITIES)[number];

const MET_VALUES: Record<Activity, { low: number; moderate: number; high: number; label: string }> = {
  walking:  { low: 2.5, moderate: 3.5, high: 4.5,  label: "Walking" },
  running:  { low: 6.0, moderate: 8.0, high: 11.0, label: "Running" },
  cycling:  { low: 4.0, moderate: 6.0, high: 10.0, label: "Cycling" },
  swimming: { low: 5.0, moderate: 7.0, high: 9.0,  label: "Swimming" },
};

const INTENSITY_LABELS = {
  low:      { label: "Slow / easy",    paceExamples: { walking: "2–3 km/h", running: "6–8 km/h",  cycling: "10–15 km/h", swimming: "Leisurely" } },
  moderate: { label: "Moderate pace",  paceExamples: { walking: "4–5 km/h", running: "8–10 km/h", cycling: "15–20 km/h", swimming: "Steady pace" } },
  high:     { label: "Fast / intense", paceExamples: { walking: "5–6 km/h", running: "12+ km/h",  cycling: "25+ km/h",   swimming: "Vigorous laps" } },
};

export async function generateStaticParams() {
  return ACTIVITIES.flatMap((activity) =>
    WEIGHTS.map((w) => ({ activity, weight: `${w}kg` }))
  );
}

interface Props {
  params: Promise<{ activity: string; weight: string }>;
}

function parseParams(activity: string, weight: string): { activity: Activity; kg: number } | null {
  if (!ACTIVITIES.includes(activity as Activity)) return null;
  const kg = parseInt(weight.replace("kg", ""));
  if (!WEIGHTS.includes(kg)) return null;
  return { activity: activity as Activity, kg };
}

function calcCalories(met: number, kg: number, durationH: number): number {
  return Math.round(met * kg * durationH);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { activity, weight } = await params;
  const parsed = parseParams(activity, weight);
  if (!parsed) return { title: "Calories Burned Calculator — Singapore" };
  const { activity: act, kg } = parsed;
  const met = MET_VALUES[act];
  const label = met.label;
  const cal30 = calcCalories(met.moderate, kg, 0.5);
  const cal60 = calcCalories(met.moderate, kg, 1.0);
  return {
    title: `Calories Burned ${label} for ${kg}kg — Singapore Calculator`,
    description: `How many calories does a ${kg}kg person burn ${activity}? At moderate pace: ${cal30} kcal in 30 min, ${cal60} kcal in 1 hour. Calculator with slow, moderate, and fast intensity.`,
    alternates: { canonical: `https://bmicalculator.sg/calories-burned/${activity}/${weight}` },
  };
}

export default async function CaloriesBurnedPage({ params }: Props) {
  const { activity, weight } = await params;
  const parsed = parseParams(activity, weight);

  if (!parsed) {
    return <p className="p-8 text-center">Invalid parameters.</p>;
  }

  const { activity: act, kg } = parsed;
  const met = MET_VALUES[act];

  const durations = [15, 30, 45, 60, 90];

  return (
    <>
      <CalculatorSchema
        name={`Calories Burned ${met.label} for ${kg}kg`}
        description={`Calories burned ${activity} calculator for a ${kg}kg person at different intensities.`}
        url={`https://bmicalculator.sg/calories-burned/${activity}/${weight}`}
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: `How many calories does a ${kg}kg person burn ${activity} for 30 minutes?`,
            answer: `At moderate pace, a ${kg}kg person burns approximately ${calcCalories(met.moderate, kg, 0.5)} calories ${activity} for 30 minutes. At a slow pace: ${calcCalories(met.low, kg, 0.5)} kcal. Fast pace: ${calcCalories(met.high, kg, 0.5)} kcal.`,
          },
          {
            question: `How many calories does a ${kg}kg person burn ${activity} for 1 hour?`,
            answer: `At moderate pace, a ${kg}kg person burns approximately ${calcCalories(met.moderate, kg, 1)} calories ${activity} for 1 hour. At a slow pace: ${calcCalories(met.low, kg, 1)} kcal. Fast pace: ${calcCalories(met.high, kg, 1)} kcal.`,
          },
          {
            question: `Is ${activity} a good exercise for weight loss in Singapore?`,
            answer: `${met.label} burns ${calcCalories(met.moderate, kg, 1)} kcal per hour at moderate pace for a ${kg}kg person. Combined with a calorie deficit diet, regular ${activity} can support sustainable weight loss.`,
          },
          {
            question: "How accurate are calorie burn estimates?",
            answer: "These estimates use MET (Metabolic Equivalent of Task) values and body weight. Actual calorie burn varies based on fitness level, terrain, temperature, and individual metabolism. Use as a guideline, not an exact measure.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Calories Burned Calculator", url: "https://bmicalculator.sg/calories-burned-calculator" },
          { name: `${met.label} (${kg}kg)`, url: `https://bmicalculator.sg/calories-burned/${activity}/${weight}` },
        ]}
      />

      <CalculatorSection
        badge={`${met.label} · ${kg}kg`}
        title={`Calories Burned ${met.label} — ${kg}kg`}
        description={`Estimated calorie burn for a ${kg}kg person ${activity} at different intensities and durations. Based on MET values and body weight.`}
      >
        <div className="space-y-4">
          {(["low", "moderate", "high"] as const).map((intensity) => {
            const m = met[intensity];
            const info = INTENSITY_LABELS[intensity];
            const paceEx = info.paceExamples[act];
            return (
              <div key={intensity}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold" style={{ color: "var(--color-on-surface)" }}>{info.label}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--color-surface-container)", color: "var(--color-neutral)" }}>
                    {paceEx}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {durations.map((dur) => (
                    <div key={dur} className="rounded-xl p-3 text-center" style={{ background: "var(--color-surface-container)" }}>
                      <p className="text-lg font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-secondary)" }}>
                        {calcCalories(m, kg, dur / 60)}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>kcal</p>
                      <p className="text-xs font-medium mt-1" style={{ color: "var(--color-on-surface-variant)" }}>{dur} min</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-10 pb-16 space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Full Duration Table — Moderate Pace
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Duration</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Slow ({MET_VALUES[act].low} MET)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Moderate ({MET_VALUES[act].moderate} MET)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Fast ({MET_VALUES[act].high} MET)</th>
                </tr>
              </thead>
              <tbody>
                {[15, 20, 30, 45, 60, 75, 90, 120].map((d) => (
                  <tr key={d} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{d} min</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{calcCalories(met.low, kg, d / 60)} kcal</td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-secondary)" }}>{calcCalories(met.moderate, kg, d / 60)} kcal</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{calcCalories(met.high, kg, d / 60)} kcal</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl p-4 text-sm" style={{ background: "var(--color-surface-container)" }}>
          <p style={{ color: "var(--color-on-surface-variant)" }}>
            <strong>Formula:</strong> Calories = MET × body weight (kg) × duration (hours).
            Estimates are based on standard MET values and may vary ±15% based on individual fitness, terrain, and conditions.
          </p>
        </div>
        <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
          See our full{" "}
          <Link href="/calories-burned-calculator" style={{ color: "var(--color-primary)" }} className="underline font-medium">
            Calories Burned Calculator
          </Link>{" "}
          for all activities and intensity levels.
        </p>
      </section>
    </>
  );
}
