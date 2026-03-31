import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import AdUnit from "@/components/ui/AdUnit";
import CalorieCalculatorClient from "@/components/calculators/CalorieCalculatorClient";

export const metadata: Metadata = {
  title: "Calorie Calculator Singapore — HPB Dietary Guidelines",
  description:
    "Calculate daily calories following Singapore HPB dietary guidelines. Personalised for Singaporeans — hawker food calorie guide, My Healthy Plate, and age-specific targets.",
  alternates: { canonical: "https://bmicalculator.sg/calorie-calculator/singapore" },
  openGraph: {
    title: "Calorie Calculator Singapore — HPB Dietary Guidelines",
    description: "Calculate daily calories following Singapore HPB dietary guidelines. Personalised for Singaporeans — hawker food calorie guide, My Healthy Plate, and age-specific targets.",
    url: "https://bmicalculator.sg/calorie-calculator/singapore",
    type: "website",
  },
  twitter: {
    title: "Calorie Calculator Singapore — HPB Dietary Guidelines",
    description: "Calculate daily calories following Singapore HPB dietary guidelines. Personalised for Singaporeans — hawker food calorie guide, My Healthy Plate, and age-specific targets.",
  },
};

const FAQS = [
  {
    question: "How many calories should I eat per day in Singapore?",
    answer:
      "Singapore HPB recommends approximately 2,200 kcal/day for moderately active men and 1,800 kcal/day for moderately active women. However, these are population averages — your individual needs depend on your weight, height, age, and activity level. A sedentary 55 kg woman aged 35 may only need 1,500 kcal/day, while an active 80 kg man aged 25 may need 2,800 kcal/day. Use this calculator for a personalised target based on the Mifflin-St Jeor formula.",
  },
  {
    question: "How do I count calories for hawker food?",
    answer:
      "Most hawker dishes do not display calories, but estimates are available from HPB's online food database. Common reference points: a standard plate of chicken rice is approximately 450 kcal, laksa 589 kcal, char kway teow 744 kcal, and fish ball noodle soup 350 kcal. A practical approach is to use HPB&apos;s My Healthy Plate guide — fill half your plate with vegetables, a quarter with wholegrains (brown rice), and a quarter with protein (fish, chicken, tofu). This method controls portions without calorie counting.",
  },
  {
    question: "What is Singapore's recommended calorie intake by age?",
    answer:
      "Singapore HPB guidelines: Children 7–9 years: 1,500–1,700 kcal; Teenagers 13–17: 2,000–2,500 kcal; Adults 18–60 (moderate activity): Women 1,800 kcal, Men 2,200 kcal; Adults 60+ (moderate activity): Women 1,600 kcal, Men 2,000 kcal. These are baseline moderate-activity figures. Sedentary individuals need 10–20% fewer calories; highly active individuals may need 20–30% more. Singapore&apos;s ageing population means many adults over 55 need to consciously increase protein intake to offset age-related muscle loss.",
  },
  {
    question: "Is low-calorie eating sustainable in Singapore's food culture?",
    answer:
      "Yes — with smart hawker ordering. Singapore&apos;s hawker culture is actually well-suited to moderate-calorie eating when you choose wisely. Soups (mee soto, fish soup, bak kut teh broth) are lower calorie than fried dishes. Requesting &lsquo;less rice&rsquo; or substituting with brown rice reduces carbs. Avoiding sugary drinks (teh tarik, milo) saves 150–200 kcal per meal. HPB&apos;s Healthier Choice Symbol programme labels over 2,000 healthier hawker options island-wide, making it practical to eat out daily while managing calories.",
  },
];

const HAWKER_CALORIES = [
  { dish: "Chicken Rice (half chicken + rice)", calories: "~450 kcal" },
  { dish: "Laksa", calories: "~589 kcal" },
  { dish: "Char Kway Teow", calories: "~744 kcal" },
  { dish: "Fish Ball Noodle Soup (dry)", calories: "~350 kcal" },
  { dish: "Roti Prata (plain, 1 piece)", calories: "~270 kcal" },
  { dish: "Nasi Lemak (with fried chicken)", calories: "~560 kcal" },
  { dish: "Wonton Mee (dry)", calories: "~420 kcal" },
  { dish: "Hokkien Mee", calories: "~490 kcal" },
  { dish: "Mee Soto", calories: "~320 kcal" },
  { dish: "Bak Chor Mee (dry)", calories: "~480 kcal" },
  { dish: "Fish Head Curry (1 portion)", calories: "~380 kcal" },
  { dish: "Yong Tau Foo (6 items, soup)", calories: "~350 kcal" },
  { dish: "Chwee Kueh (6 pieces)", calories: "~280 kcal" },
  { dish: "Satay (5 sticks, chicken)", calories: "~230 kcal" },
  { dish: "Popiah (fresh, 1 roll)", calories: "~140 kcal" },
  { dish: "Teh Tarik (standard)", calories: "~130 kcal" },
  { dish: "Kopi O Kosong", calories: "~5 kcal" },
];

export default function CalorieCalculatorSingaporePage() {
  return (
    <>
      <CalculatorSchema
        name="Calorie Calculator Singapore"
        description="Calculate daily calorie needs following Singapore HPB dietary guidelines, with a hawker food calorie guide and My Healthy Plate context."
        url="https://bmicalculator.sg/calorie-calculator/singapore"
        lastReviewed="2026-03-31"
        faqs={FAQS}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Calorie Calculator", url: "https://bmicalculator.sg/calorie-calculator" },
          { name: "Singapore", url: "https://bmicalculator.sg/calorie-calculator/singapore" },
        ]}
      />

      <CalculatorSection
        badge="Singapore HPB · Local Food Guide · Mifflin-St Jeor"
        title="Calorie Calculator Singapore"
        description="Personalised daily calorie target following Singapore HPB guidelines. Enter your stats to find out exactly how many calories you need to lose, maintain, or gain weight — with Singapore hawker food context."
      >
        <CalorieCalculatorClient />
      </CalculatorSection>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        <AdUnit
          format="leaderboard"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD ?? "PLACEHOLDER"}
          className="mx-auto"
        />
      </div>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-10">
        {/* Singapore HPB guidelines */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Singapore HPB Calorie Guidelines
          </h2>
          <div className="space-y-3 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The Singapore Health Promotion Board (HPB) bases its dietary guidelines on local population data,
              accounting for the lower average body size of Singaporeans compared to Western populations. HPB
              calorie recommendations are therefore lower than many international guidelines.
            </p>
            <p>
              HPB&apos;s <strong>My Healthy Plate</strong> model divides every meal into: <strong>½ plate fruit and
              vegetables</strong> (fibre, micronutrients), <strong>¼ plate wholegrains</strong> (brown rice, wholemeal
              bread), and <strong>¼ plate meat and alternatives</strong> (protein — fish, chicken, tofu, legumes).
              This visual model controls portions without calorie counting and naturally produces meals in the
              400–600 kcal range.
            </p>
            <p>
              For weight management, HPB recommends a maximum deficit of 500 kcal/day, with minimum floors of
              <strong> 1,200 kcal/day for women</strong> and <strong>1,500 kcal/day for men</strong> to ensure
              adequate micronutrient intake.
            </p>
          </div>
        </div>

        {/* HPB calorie targets by activity */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            HPB Calorie Targets by Activity Level
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Activity Level</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Women (kcal/day)</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Men (kcal/day)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "Sedentary (office, little exercise)", women: "1,600–1,800", men: "1,900–2,100" },
                  { level: "Moderate (exercise 3–5 days/week)", women: "1,800–2,000", men: "2,200–2,400" },
                  { level: "Active (exercise 6–7 days/week)", women: "2,100–2,400", men: "2,600–2,900" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.level}</td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-secondary-dark)" }}>{row.women}</td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-primary)" }}>{row.men}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--color-neutral)" }}>
            Based on HPB guidelines for average-weight Singaporean adults. Use the calculator above for your personalised target.
          </p>
        </div>

        <AdUnit
          format="responsive"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESPONSIVE ?? "PLACEHOLDER"}
        />

        {/* Hawker calories table */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Singapore Hawker Food Calorie Guide
          </h2>
          <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
            Calorie estimates based on HPB Nutrient Composition Database and Health Promotion Board Singapore. Actual values vary by portion size and preparation method.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Dish</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Calories</th>
                </tr>
              </thead>
              <tbody>
                {HAWKER_CALORIES.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{row.dish}</td>
                    <td className="p-3 font-semibold" style={{ color: "var(--color-primary)" }}>{row.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm mt-3" style={{ color: "var(--color-neutral)" }}>
            Tip: Choose soup-based dishes over fried dishes to save 200–400 kcal per meal. Request less rice or substitute brown rice for a lower-glycaemic option.
          </p>
        </div>

        {/* My Healthy Plate */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            HPB My Healthy Plate — Singapore&apos;s Portion Guide
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                portion: "½ Plate",
                food: "Fruit & Vegetables",
                examples: "Leafy greens, tofu, mixed vegetables, papaya, melon",
                color: "var(--color-secondary)",
              },
              {
                portion: "¼ Plate",
                food: "Wholegrains",
                examples: "Brown rice, wholemeal bread, oats, quinoa",
                color: "var(--color-primary)",
              },
              {
                portion: "¼ Plate",
                food: "Meat & Alternatives",
                examples: "Fish, chicken (no skin), tofu, eggs, legumes",
                color: "var(--color-warning)",
              },
            ].map((s) => (
              <div
                key={s.portion}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)", borderTop: `3px solid ${s.color}` }}
              >
                <p className="text-xl font-extrabold mb-1" style={{ fontFamily: "var(--font-manrope)", color: s.color }}>{s.portion}</p>
                <p className="text-sm font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{s.food}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>{s.examples}</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: "var(--color-on-surface-variant)" }}>
            Following My Healthy Plate at every meal naturally produces a 400–600 kcal meal without counting. Three meals per day totals 1,200–1,800 kcal — appropriate for most Singaporean adults aiming to manage weight.
          </p>
        </div>

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map(({ question, answer }) => (
              <div
                key={question}
                className="rounded-2xl p-5"
                style={{ background: "var(--color-surface-container)" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{question}</h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
