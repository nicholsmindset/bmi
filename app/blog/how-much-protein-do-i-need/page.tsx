import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Protein Do I Need Per Day? Singapore Guide",
  description:
    "How much protein do you need daily? ISSN-aligned guide for Singaporeans. See protein targets by weight and goal, hawker food sources, and get your free protein calculator.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/blog/how-much-protein-do-i-need" },
  openGraph: {
    title: "How Much Protein Do I Need Per Day? Singapore Guide",
    description:
      "How much protein do you need daily? ISSN-aligned guide for Singaporeans. See protein targets by weight and goal, hawker food sources, and get your free protein calculator.",
    url: "https://www.bmicalculatorsingapore.com/blog/how-much-protein-do-i-need",
    type: "article",
  },
};

export default function ProteinNeedsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-20 space-y-8">
      <header>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-manrope)" }}
        >
          Nutrition Guide
        </p>
        <h1
          className="text-4xl font-extrabold mb-4 leading-tight"
          style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
        >
          How Much Protein Do I Need Per Day?
        </h1>
        <p className="text-sm" style={{ color: "var(--color-neutral)" }}>
          Last updated: April 2026 · Based on ISSN Guidelines & HPB Singapore
        </p>
      </header>

      {/* Quick Answer */}
      <aside
        className="rounded-2xl px-5 py-4"
        style={{ background: "var(--color-primary-light)", borderLeft: "4px solid var(--color-primary)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--color-primary)" }}>
          Quick Answer
        </p>
        <p className="text-sm font-medium mb-3" style={{ color: "var(--color-on-surface)", lineHeight: 1.6 }}>
          Most adults need <strong>0.8–1.6 g of protein per kg</strong> of body weight per day.
          Those building muscle or losing weight need <strong>1.6–2.2 g/kg</strong>.
        </p>
        <ul className="space-y-1">
          {[
            "General health: 0.8–1.2 g/kg · Weight loss: 1.2–1.6 g/kg · Muscle gain: 1.6–2.2 g/kg",
            "A 65 kg person building muscle needs 104–143 g protein per day",
            "Spread protein across 3–4 meals for optimal muscle protein synthesis",
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
          Protein Requirements by Goal
        </h2>
        <p>
          The right amount of protein depends on your body weight, goal, and activity level.
          The <strong>International Society of Sports Nutrition (ISSN)</strong> provides the most
          widely cited evidence-based guidelines for protein intake:
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ background: "var(--color-surface-container)" }}>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Goal</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>g per kg/day</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>60 kg person</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>75 kg person</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["General health (sedentary)", "0.8–1.0 g/kg", "48–60 g",  "60–75 g"],
              ["Weight loss / cutting",      "1.2–1.6 g/kg", "72–96 g",  "90–120 g"],
              ["Muscle gain / bulking",       "1.6–2.2 g/kg", "96–132 g", "120–165 g"],
              ["Athletic performance",        "1.4–1.8 g/kg", "84–108 g", "105–135 g"],
            ].map(([goal, range, g60, g75]) => (
              <tr key={goal} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{goal}</td>
                <td className="p-3" style={{ color: "var(--color-on-surface)" }}>{range}</td>
                <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{g60}</td>
                <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{g75}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Getting Protein from Singapore Hawker Food
        </h2>
        <p>
          You don&apos;t need protein shakes to hit your daily target. Singapore hawker centres offer
          excellent protein sources at every meal:
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ background: "var(--color-surface-container)" }}>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Hawker Dish</th>
              <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein (approx.)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Chicken rice (1 plate)", "~35 g"],
              ["Fish soup (1 bowl)", "~28 g"],
              ["Char kway teow (1 plate)", "~12 g"],
              ["Tofu (100 g)", "~8 g"],
              ["Satay chicken (3 skewers)", "~18 g"],
              ["Nasi lemak with chicken", "~25 g"],
              ["Mee goreng (1 plate)", "~14 g"],
              ["Egg (1 large)", "~6 g"],
            ].map(([dish, protein]) => (
              <tr key={dish} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{dish}</td>
                <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Protein and Weight Loss
        </h2>
        <p>
          Higher protein intake during a{" "}
          <Link href="/calorie-deficit-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            calorie deficit
          </Link>{" "}
          helps preserve muscle mass — which would otherwise be broken down for energy. Aim for at
          least 1.2–1.6 g/kg during weight loss to minimise muscle loss.
        </p>
        <p>
          Protein is also the most satiating macronutrient — keeping you fuller for longer, which
          makes it easier to stick to your calorie target. Use the{" "}
          <Link href="/macro-calculator" style={{ color: "var(--color-primary)", textDecoration: "underline" }}>
            Macro Calculator
          </Link>{" "}
          to split your daily calories into protein, carbs, and fat targets.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
          Frequently Asked Questions
        </h2>
        {[
          {
            q: "How much protein do I need to build muscle?",
            a: "The ISSN recommends 1.6–2.2 g of protein per kg of body weight per day for muscle gain. A 70 kg person should aim for 112–154 g per day. Spread this across 3–4 meals of roughly 35–40 g each for optimal muscle protein synthesis.",
          },
          {
            q: "Can I get enough protein from plant-based foods in Singapore?",
            a: "Yes. Tofu, tempeh, edamame, lentil soup, and nuts are all good plant-based protein sources available in Singapore hawker centres and supermarkets. You may need to eat a wider variety to ensure complete amino acid profiles.",
          },
          {
            q: "Is it safe to eat a lot of protein?",
            a: "For healthy adults, intakes up to 2.2 g/kg/day are well-tolerated. Higher intakes do not cause kidney damage in people with healthy kidneys. If you have kidney disease, consult your doctor before increasing protein.",
          },
          {
            q: "How much protein do I need if I only want to maintain weight?",
            a: "For weight maintenance with light activity, 0.8–1.2 g/kg/day is sufficient. Singapore HPB recommends at least 0.8 g/kg for sedentary adults. If you exercise regularly, aim for 1.2–1.4 g/kg.",
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
          Calculate Your Protein Target
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--color-on-surface-variant)" }}>
          Enter your weight and goal for a personalised daily protein target with per-meal breakdown.
        </p>
        <Link
          href="/protein-calculator"
          className="inline-block px-6 py-3 rounded-xl font-semibold text-sm"
          style={{ background: "var(--color-primary)", color: "white", textDecoration: "none" }}
        >
          Protein Calculator →
        </Link>
      </div>
    </article>
  );
}
