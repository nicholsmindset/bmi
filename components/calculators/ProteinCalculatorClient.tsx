"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import StandardToggle from "@/components/ui/StandardToggle";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { lbsToKg } from "@/lib/bmi-logic";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type Unit = "metric" | "imperial";
type Goal = "weight_loss" | "maintenance" | "muscle_gain" | "athletic";
type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very_active";

const PROTEIN_MULTIPLIERS: Record<Goal, { min: number; max: number }> = {
  weight_loss:  { min: 1.2, max: 1.6 },
  maintenance:  { min: 0.8, max: 1.2 },
  muscle_gain:  { min: 1.6, max: 2.2 },
  athletic:     { min: 1.4, max: 1.8 },
};

const GOAL_OPTIONS: { value: Goal; label: string }[] = [
  { value: "weight_loss",  label: "Weight loss / cutting" },
  { value: "maintenance",  label: "Maintenance" },
  { value: "muscle_gain",  label: "Muscle gain / bulking" },
  { value: "athletic",     label: "Athletic performance" },
];

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: "sedentary",   label: "Sedentary (desk job)" },
  { value: "light",       label: "Light (1–3 days/week)" },
  { value: "moderate",    label: "Moderate (3–5 days/week)" },
  { value: "active",      label: "Active (6–7 days/week)" },
  { value: "very_active", label: "Very Active (athlete)" },
];

const HAWKER_TABLE = [
  { dish: "Chicken Rice (no skin)",     protein: 30, cal: 450 },
  { dish: "Fish Soup with Rice",        protein: 28, cal: 380 },
  { dish: "Yong Tau Foo (6 pcs, soup)", protein: 22, cal: 320 },
  { dish: "Scrambled Eggs (2 large)",   protein: 14, cal: 180 },
  { dish: "Firm Tofu (100g)",           protein: 8,  cal: 80  },
  { dish: "Grilled Chicken Satay (5 sticks)", protein: 20, cal: 280 },
  { dish: "Wonton Noodle Soup",         protein: 20, cal: 430 },
  { dish: "Mee Soto",                   protein: 18, cal: 380 },
];

interface ProteinResult {
  dailyGrams: number;
  minGrams: number;
  maxGrams: number;
  gPerKg: number;
  per3Meals: number;
  per4Meals: number;
  affiliateKey: "protein_muscle_gain" | "protein_weight_loss";
}

export default function ProteinCalculatorClient({ initialWeightKg }: { initialWeightKg?: number }) {
  const [unit, setUnit] = useState<Unit>("metric");
  const [weightKg, setWeightKg] = useState(initialWeightKg ? String(initialWeightKg) : "");
  const [weightLbs, setWeightLbs] = useState(
    initialWeightKg ? String(Math.round(initialWeightKg * 2.20462)) : ""
  );
  const [goal, setGoal] = useState<Goal>("muscle_gain");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [result, setResult] = useState<ProteinResult | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const w = unit === "metric" ? parseFloat(weightKg) : lbsToKg(parseFloat(weightLbs));
    if (!w || w < 30 || w > 300) {
      setError("Please enter a valid weight.");
      return;
    }

    const { min, max } = PROTEIN_MULTIPLIERS[goal];
    const mid = (min + max) / 2;
    const dailyGrams = Math.round(mid * w);
    const minGrams   = Math.round(min * w);
    const maxGrams   = Math.round(max * w);

    setResult({
      dailyGrams,
      minGrams,
      maxGrams,
      gPerKg: parseFloat(mid.toFixed(1)),
      per3Meals: Math.round(dailyGrams / 3),
      per4Meals: Math.round(dailyGrams / 4),
      affiliateKey: goal === "muscle_gain" || goal === "athletic" ? "protein_muscle_gain" : "protein_weight_loss",
    });
  }

  const inputClass = "w-full bg-transparent border-b-2 pb-2 outline-none font-bold text-xl transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-manrope)",
    color: "var(--color-on-surface)",
    borderColor: "var(--color-outline-variant)",
  };

  return (
    <CalculatorCard accentColor="var(--color-calc-fitness)">
      <form onSubmit={handleCalculate} noValidate>
        <div className="flex flex-wrap gap-3 mb-8">
          <StandardToggle
            options={[{ value: "metric", label: "Metric" }, { value: "imperial", label: "Imperial" }]}
            value={unit}
            onChange={(v) => { setUnit(v as Unit); setResult(null); }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {/* Weight */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Body weight
              </label>
              <div className="relative">
                <input
                  type="number" inputMode="decimal"
                  placeholder={unit === "metric" ? "70" : "154"}
                  value={unit === "metric" ? weightKg : weightLbs}
                  onChange={(e) => unit === "metric" ? setWeightKg(e.target.value) : setWeightLbs(e.target.value)}
                  className={inputClass} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-fitness)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                />
                <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </div>
            </div>

            {/* Activity */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Activity level
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value as ActivityLevel)}
                className="w-full text-sm font-medium border-b-2 pb-2 bg-transparent outline-none"
                style={{ borderColor: "var(--color-outline-variant)", color: "var(--color-on-surface)" }}
              >
                {ACTIVITY_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-5">
            {/* Goal */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Goal
              </label>
              <div className="space-y-2">
                {GOAL_OPTIONS.map((g) => (
                  <label key={g.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio" name="goal" value={g.value}
                      checked={goal === g.value}
                      onChange={() => { setGoal(g.value); setResult(null); }}
                      className="accent-[var(--color-calc-fitness)]"
                    />
                    <span className="text-sm" style={{ color: "var(--color-on-surface)" }}>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {error && <p className="text-sm" style={{ color: "var(--color-error)" }}>{error}</p>}

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: "var(--color-calc-fitness)", fontFamily: "var(--font-manrope)" }}
            >
              Calculate Protein
            </button>
          </div>
        </div>
      </form>

      {/* Results */}
      {result && (
        <div className="animate-fadeSlideUp mt-8 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Daily target",  value: `${result.dailyGrams}g`,   unit: "grams/day" },
              { label: "Range",         value: `${result.minGrams}–${result.maxGrams}g`, unit: "ISSN range" },
              { label: "Per 3 meals",   value: `${result.per3Meals}g`,    unit: "grams/meal" },
              { label: "Per 4 meals",   value: `${result.per4Meals}g`,    unit: "grams/meal" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-surface-container)" }}>
                <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-calc-fitness)" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>{stat.unit}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: "var(--color-on-surface-variant)" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-4 text-sm" style={{ background: "var(--color-primary-container)" }}>
            <p style={{ color: "var(--color-primary-dark)" }}>
              <strong>Based on ISSN guidelines:</strong> {result.minGrams}–{result.maxGrams}g/day ({PROTEIN_MULTIPLIERS[goal].min}–{PROTEIN_MULTIPLIERS[goal].max}g/kg).
              Your target of <strong>{result.dailyGrams}g/day</strong> is the midpoint of this range.
            </p>
          </div>

          {/* Hawker table */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
              Singapore hawker food protein guide
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "var(--color-surface-container)" }}>
                    <th className="text-left p-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>Dish</th>
                    <th className="text-right p-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>Protein</th>
                    <th className="text-right p-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {HAWKER_TABLE.map((row) => (
                    <tr key={row.dish} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                      <td className="p-2" style={{ color: "var(--color-on-surface)" }}>{row.dish}</td>
                      <td className="p-2 text-right font-semibold" style={{ color: "var(--color-calc-fitness)" }}>{row.protein}g</td>
                      <td className="p-2 text-right" style={{ color: "var(--color-neutral)" }}>{row.cal} kcal</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <AffiliateGrid products={AFFILIATE_MAP[result.affiliateKey] ?? []} />
        </div>
      )}
    </CalculatorCard>
  );
}
