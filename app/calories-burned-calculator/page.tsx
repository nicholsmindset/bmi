import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import CaloriesBurnedClient from "@/components/calculators/CaloriesBurnedClient";

export const metadata: Metadata = {
  title: "Calories Burned Calculator Singapore — Walking, Running, Cycling, Swimming",
  description:
    "Calculate calories burned during exercise using MET values and your body weight. Walking, running, cycling, swimming, badminton and more Singapore-friendly activities. Instant results.",
  alternates: { canonical: "https://bmicalculator.sg/calories-burned-calculator" },
  openGraph: {
    title: "Calories Burned Calculator Singapore — Walking, Running, Cycling, Swimming",
    description:
      "Calculate calories burned during exercise using MET values and your body weight. Walking, running, cycling, swimming, badminton and more Singapore-friendly activities. Instant results.",
    url: "https://bmicalculator.sg/calories-burned-calculator",
    type: "website",
  },
  twitter: {
    title: "Calories Burned Calculator Singapore — Walking, Running, Cycling, Swimming",
    description:
      "Calculate calories burned during exercise using MET values and your body weight. Walking, running, cycling, swimming, badminton and more Singapore-friendly activities. Instant results.",
  },
};

const FAQS = [
  {
    question: "How many calories does 30 minutes of walking burn?",
    answer:
      "A 65 kg person burns approximately 114–195 kcal during 30 minutes of walking, depending on pace. At a leisurely pace (MET 2.5) the estimate is around 114 kcal; at a brisk pace (MET 3.5) roughly 160 kcal; and at a fast pace (MET 4.5) around 195 kcal. Heavier individuals burn proportionally more calories for the same duration and speed.",
  },
  {
    question: "Is cycling or running better for calorie burn?",
    answer:
      "Running burns more calories per minute than cycling at comparable effort levels. Running at a moderate pace (MET 8.0) burns roughly 60–70% more calories than cycling at a moderate pace (MET 6.0) for the same duration. However, cycling is lower-impact and allows longer workout duration, which can result in comparable or higher total calorie burn per session for many people. Both are excellent for weight management.",
  },
  {
    question: "How many calories does swimming burn per hour?",
    answer:
      "Swimming burns approximately 325–585 kcal per hour for a 65 kg person, depending on stroke intensity. At low intensity (MET 5.0) the estimate is around 325 kcal/hour; at moderate intensity (MET 7.0) roughly 455 kcal/hour; and at vigorous intensity (MET 9.0) approximately 585 kcal/hour. Swimming is one of the highest calorie-burning full-body exercises and is also joint-friendly.",
  },
  {
    question: "What Singapore-friendly exercises burn the most calories?",
    answer:
      "Running burns the most calories among common Singapore exercises — a 70 kg person burns 480–770 kcal per hour. Swimming is a close second at 350–630 kcal/hour and is popular year-round due to Singapore's climate and abundant public pools. Cycling (280–700 kcal/hour), badminton (315–490 kcal/hour, very popular locally), and brisk walking (175–315 kcal/hour) are all excellent options. The best exercise for calorie burn is one you can sustain consistently.",
  },
];

const RELATED = [
  {
    name: "TDEE Calculator",
    tagline: "Total daily energy burned",
    href: "/tdee-calculator",
    iconPath:
      "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.72L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
    accent: "#7B1FA2",
  },
  {
    name: "BMI Calculator",
    tagline: "Check your weight status",
    href: "/bmi-calculator",
    iconPath:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7zm0 2a5 5 0 100 10A5 5 0 0012 7z",
    accent: "#005EB8",
  },
  {
    name: "Calorie Deficit Calculator",
    tagline: "Plan your weight loss",
    href: "/calorie-deficit-calculator",
    iconPath:
      "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
    accent: "#00695C",
  },
  {
    name: "Protein Intake Calculator",
    tagline: "Fuel your workouts",
    href: "/protein-calculator",
    iconPath:
      "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    accent: "#B71C1C",
  },
];

const MET_TABLE = [
  { activity: "Walking (slow)", met: "2.5", example: "Strolling, window shopping" },
  { activity: "Walking (moderate)", met: "3.5", example: "Brisk walk, neighbourhood park" },
  { activity: "Walking (fast)", met: "4.5", example: "Power walking, MRT stairs" },
  { activity: "Running (light jog)", met: "6.0", example: "Gentle jog, parkrun warmup" },
  { activity: "Running (moderate)", met: "8.0", example: "Steady 6 min/km pace" },
  { activity: "Running (vigorous)", met: "11.0", example: "Race pace, interval training" },
  { activity: "Cycling (leisure)", met: "4.0", example: "Park connector, casual ride" },
  { activity: "Cycling (moderate)", met: "6.0", example: "Steady commute cycling" },
  { activity: "Cycling (vigorous)", met: "10.0", example: "Fast road cycling, spinning class" },
  { activity: "Swimming (light)", met: "5.0", example: "Easy laps, recreational swim" },
  { activity: "Swimming (moderate)", met: "7.0", example: "Steady freestyle laps" },
  { activity: "Swimming (vigorous)", met: "9.0", example: "Competitive pace, butterfly stroke" },
  { activity: "Badminton", met: "4.5–7.0", example: "Recreational to competitive" },
  { activity: "Stair climbing", met: "4.0", example: "HDB stairwell, stadium steps" },
  { activity: "Yoga", met: "2.5", example: "Hatha/restorative yoga" },
  { activity: "Hawker stall work", met: "2.5", example: "Light standing, food prep" },
];

export default function CaloriesBurnedCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Calories Burned Calculator Singapore"
        description="Calculate calories burned during exercise using MET values and your body weight."
        url="https://bmicalculator.sg/calories-burned-calculator"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          {
            name: "Calories Burned Calculator",
            url: "https://bmicalculator.sg/calories-burned-calculator",
          },
        ]}
      />

      <CalculatorSection
        badge="Exercise · MET Method"
        title="Calories Burned Calculator"
        description="Select your activity, enter your body weight and duration, and instantly see how many calories you burn. Uses MET (Metabolic Equivalent of Task) values — the same method used by exercise scientists worldwide."
      >
        <CaloriesBurnedClient />
      </CalculatorSection>

      {/* Ad unit 1 — immediately below calculator */}
      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 space-y-10">
        {/* MET Reference Table */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            MET Values for Popular Singapore Activities
          </h2>
          <p className="text-base mb-5" style={{ color: "var(--color-on-surface-variant)" }}>
            MET (Metabolic Equivalent of Task) measures exercise intensity relative to rest. A MET of 1.0
            equals sitting quietly. The formula used is:{" "}
            <strong>Calories = MET &times; weight (kg) &times; duration (hours)</strong>.
          </p>
          <div
            className="overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--color-outline-variant)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "#fff" }}>
                  <th className="text-left px-4 py-3 font-semibold">Activity</th>
                  <th className="text-center px-4 py-3 font-semibold">MET</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Example</th>
                </tr>
              </thead>
              <tbody>
                {MET_TABLE.map((row, i) => (
                  <tr
                    key={row.activity}
                    style={{
                      background:
                        i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)",
                    }}
                  >
                    <td
                      className="px-4 py-3 font-medium"
                      style={{ color: "var(--color-on-surface)" }}
                    >
                      {row.activity}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {row.met}
                    </td>
                    <td
                      className="px-4 py-3 hidden sm:table-cell"
                      style={{ color: "var(--color-on-surface-variant)" }}
                    >
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
            Source: Compendium of Physical Activities (Ainsworth et al., 2011). MET values are estimates;
            actual calorie burn varies by fitness level, terrain, and individual metabolism.
          </p>
        </div>

        {/* Ad unit 2 — midpage */}
        <div>
          <AdUnit
            format="responsive"
            slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
            className="mx-auto"
          />
        </div>

        {/* How it works */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            How the Calories Burned Formula Works
          </h2>
          <div className="space-y-4 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The calculator uses the <strong>MET (Metabolic Equivalent of Task)</strong> method
              developed from decades of exercise science research. MET values represent the ratio of
              energy expended during an activity compared to sitting at rest (1 MET &asymp; 1 kcal/kg/hour).
            </p>
            <p>
              The calculation is:{" "}
              <strong>Calories burned = MET &times; body weight (kg) &times; duration (hours)</strong>.
              For example, a 65 kg person cycling at a moderate pace (MET 6.0) for 45 minutes burns
              approximately 65 &times; 6.0 &times; 0.75 = <strong>293 kcal</strong>.
            </p>
            <p>
              In Singapore&apos;s tropical climate (average 30&deg;C), your body works slightly harder to
              regulate temperature during outdoor exercise, meaning actual calorie burn may be 5&ndash;10%
              higher than the calculator shows for outdoor activities.
            </p>
          </div>
        </div>

        {/* FAQ section */}
        <div>
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

        <RelatedCalculators items={RELATED} title="Related calculators" />
      </section>
    </>
  );
}
