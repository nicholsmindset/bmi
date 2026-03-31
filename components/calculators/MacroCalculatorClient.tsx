"use client";

import { useState } from "react";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type Goal = "cutting" | "bulking" | "maintenance" | "keto" | "high_protein";

const GOAL_LABELS: Record<Goal, string> = {
  cutting: "Cutting (Fat Loss)",
  bulking: "Bulking (Muscle Gain)",
  maintenance: "Maintenance",
  keto: "Keto",
  high_protein: "High Protein",
};

const MACRO_SPLITS: Record<Goal, { protein: number; carbs: number; fat: number }> = {
  cutting:      { protein: 0.40, carbs: 0.30, fat: 0.30 },
  bulking:      { protein: 0.30, carbs: 0.50, fat: 0.20 },
  maintenance:  { protein: 0.30, carbs: 0.40, fat: 0.30 },
  keto:         { protein: 0.25, carbs: 0.05, fat: 0.70 },
  high_protein: { protein: 0.40, carbs: 0.35, fat: 0.25 },
};

const GOAL_DESCRIPTIONS: Record<Goal, string> = {
  cutting: "High protein preserves muscle while in a deficit. Lower carbs to reduce total calories.",
  bulking: "Higher carbs fuel workouts and muscle synthesis. Prioritize post-workout nutrition.",
  maintenance: "Balanced macros for long-term health. Adjust based on energy levels.",
  keto: "Very low carb forces fat as primary fuel. Takes 2–4 weeks to adapt.",
  high_protein: "Optimised for body recomposition — building muscle while minimising fat gain.",
};

const AFFILIATE_KEYS: Partial<Record<Goal, keyof typeof AFFILIATE_MAP>> = {
  cutting: "calorie_cutting",
  bulking: "protein_muscle_gain",
  high_protein: "protein_muscle_gain",
};

export default function MacroCalculatorClient({ defaultGoal }: { defaultGoal?: Goal }) {
  const [calories, setCalories] = useState("");
  const [bodyWeight, setBodyWeight] = useState("");
  const [goal, setGoal] = useState<Goal>(defaultGoal ?? "maintenance");
  const [result, setResult] = useState<{
    protein: number; carbs: number; fat: number;
    proteinPct: number; carbsPct: number; fatPct: number;
    proteinPerKg: number;
  } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const cal = parseFloat(calories);
    const bw = parseFloat(bodyWeight);
    if (isNaN(cal) || cal < 500 || cal > 10000) {
      setError("Please enter a valid daily calorie target (500–10,000).");
      return;
    }
    const splits = MACRO_SPLITS[goal];
    const protein = Math.round((cal * splits.protein) / 4);
    const carbs = Math.round((cal * splits.carbs) / 4);
    const fat = Math.round((cal * splits.fat) / 9);

    setResult({
      protein, carbs, fat,
      proteinPct: Math.round(splits.protein * 100),
      carbsPct: Math.round(splits.carbs * 100),
      fatPct: Math.round(splits.fat * 100),
      proteinPerKg: !isNaN(bw) && bw > 0 ? Math.round((protein / bw) * 10) / 10 : 0,
    });
  }

  const affiliateKey = AFFILIATE_KEYS[goal];

  return (
    <div>
      <div className="mb-4">
        <label className="form-label">Daily Calorie Target</label>
        <input type="number" min={500} max={10000} value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="e.g. 2000"
          className="calc-input" />
        <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>
          Don&apos;t know your calories? <a href="/tdee-calculator" className="underline" style={{ color: "var(--color-primary)" }}>Calculate TDEE first</a>
        </p>
      </div>

      <div className="mb-4">
        <label className="form-label">Body Weight (kg) — optional, for g/kg display</label>
        <input type="number" min={30} max={300} value={bodyWeight} onChange={(e) => setBodyWeight(e.target.value)} placeholder="e.g. 70"
          className="calc-input" />
      </div>

      <div className="mb-5">
        <label className="form-label">Goal</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {(Object.entries(GOAL_LABELS) as [Goal, string][]).map(([g, label]) => (
            <button key={g} onClick={() => setGoal(g)}
              className="py-2 px-3 rounded-xl text-sm font-semibold border transition-all text-center"
              style={{ background: goal === g ? "var(--color-primary-container)" : "var(--color-surface)", borderColor: goal === g ? "var(--color-primary)" : "var(--color-outline-variant)", color: goal === g ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Calculate Macros
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Protein", value: result.protein, pct: result.proteinPct, color: "var(--color-primary)", sub: result.proteinPerKg > 0 ? `${result.proteinPerKg}g/kg` : undefined },
              { label: "Carbs", value: result.carbs, pct: result.carbsPct, color: "var(--color-secondary)", sub: undefined },
              { label: "Fat", value: result.fat, pct: result.fatPct, color: "var(--color-warning)", sub: undefined },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-surface-container)" }}>
                <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: m.color }}>{m.value}g</p>
                <p className="text-xs font-bold mt-0.5" style={{ color: "var(--color-on-surface-variant)" }}>{m.label}</p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{m.pct}%{m.sub ? ` · ${m.sub}` : ""}</p>
              </div>
            ))}
          </div>

          {/* Visual bar */}
          <div className="rounded-xl overflow-hidden h-3 flex">
            <div style={{ width: `${result.proteinPct}%`, background: "var(--color-primary)" }} />
            <div style={{ width: `${result.carbsPct}%`, background: "var(--color-secondary)" }} />
            <div style={{ width: `${result.fatPct}%`, background: "var(--color-warning)" }} />
          </div>

          <div className="rounded-xl p-4 text-sm" style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)" }}>
            {GOAL_DESCRIPTIONS[goal]}
          </div>

          {affiliateKey && AFFILIATE_MAP[affiliateKey] && (
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-neutral)" }}>Recommended products:</p>
              <AffiliateGrid products={(AFFILIATE_MAP[affiliateKey] as typeof AFFILIATE_MAP[keyof typeof AFFILIATE_MAP]).slice(0, 2)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
