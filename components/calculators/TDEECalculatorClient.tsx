"use client";

import { useState } from "react";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type Sex = "male" | "female";
type Activity = "sedentary" | "light" | "moderate" | "active" | "very_active";
type Goal = "lose" | "maintain" | "gain";

const ACTIVITY_LABELS: Record<Activity, string> = {
  sedentary: "Sedentary (little/no exercise)",
  light: "Light (1–3 days/week)",
  moderate: "Moderate (3–5 days/week)",
  active: "Active (6–7 days/week)",
  very_active: "Very active (hard exercise daily)",
};

const ACTIVITY_MULTIPLIERS: Record<Activity, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

function calcBMR(weight: number, height: number, age: number, sex: Sex): number {
  if (sex === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

export default function TDEECalculatorClient({ defaultActivity }: { defaultActivity?: Activity }) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [activity, setActivity] = useState<Activity>(defaultActivity ?? "moderate");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [result, setResult] = useState<{ bmr: number; tdee: number; target: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const ageN = parseFloat(age);
    const weightKg = unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const heightCm =
      unit === "metric"
        ? parseFloat(height)
        : parseFloat(heightFt) * 30.48 + parseFloat(heightIn) * 2.54;

    if (
      isNaN(ageN) || isNaN(weightKg) || isNaN(heightCm) ||
      ageN < 1 || ageN > 120 || weightKg < 20 || weightKg > 300 || heightCm < 50 || heightCm > 250
    ) {
      setError("Please enter valid values for all fields.");
      return;
    }

    const bmr = calcBMR(weightKg, heightCm, ageN, sex);
    const tdee = bmr * ACTIVITY_MULTIPLIERS[activity];
    const target = goal === "lose" ? tdee - 500 : goal === "gain" ? tdee + 300 : tdee;
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), target: Math.round(target) });
  }

  const affiliateKey = goal === "lose" ? "calorie_cutting" : goal === "gain" ? "protein_muscle_gain" : null;

  return (
    <div>
      {/* Unit toggle */}
      <div className="toggle-group mb-5">
        {(["metric", "imperial"] as const).map((u) => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); }}
            className={`toggle-pill${unit === u ? " active" : ""}`}>
            {u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        {/* Sex */}
        <div>
          <label className="form-label">Sex</label>
          <div className="flex gap-2">
            {(["male", "female"] as Sex[]).map((s) => (
              <button key={s} onClick={() => setSex(s)} className={`sex-btn${sex === s ? " active" : ""}`}>
                {s === "male" ? "Male" : "Female"}
              </button>
            ))}
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="form-label">Age (years)</label>
          <input
            type="number" min={1} max={120} value={age} onChange={(e) => setAge(e.target.value)}
            placeholder="e.g. 30"
            className="calc-input"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="form-label">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <input
            type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "e.g. 65" : "e.g. 143"}
            className="calc-input"
          />
        </div>

        {/* Height */}
        {unit === "metric" ? (
          <div>
            <label className="form-label">Height (cm)</label>
            <input
              type="number" min={50} max={250} value={height} onChange={(e) => setHeight(e.target.value)}
              placeholder="e.g. 165"
              className="calc-input"
            />
          </div>
        ) : (
          <div>
            <label className="form-label">Height (ft / in)</label>
            <div className="flex gap-2">
              <input type="number" min={1} max={8} value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="ft"
                className="calc-input w-1/2" />
              <input type="number" min={0} max={11} value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="in"
                className="calc-input w-1/2" />
            </div>
          </div>
        )}
      </div>

      {/* Activity level */}
      <div className="mb-4">
        <label className="form-label">Activity Level</label>
        <select
          value={activity} onChange={(e) => setActivity(e.target.value as Activity)}
          className="calc-input"
        >
          {Object.entries(ACTIVITY_LABELS).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
      </div>

      {/* Goal */}
      <div className="mb-5">
        <label className="form-label">Your Goal</label>
        <div className="flex gap-2">
          {([["lose", "Lose Weight"], ["maintain", "Maintain"], ["gain", "Gain Muscle"]] as const).map(([g, label]) => (
            <button
              key={g}
              onClick={() => setGoal(g)}
              className="flex-1 py-2 rounded-xl text-sm font-semibold border transition-all"
              style={{
                background: goal === g ? "var(--color-primary-container)" : "var(--color-surface)",
                borderColor: goal === g ? "var(--color-primary)" : "var(--color-outline-variant)",
                color: goal === g ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Calculate TDEE
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "BMR", value: result.bmr, desc: "Base calories at rest" },
              { label: "TDEE", value: result.tdee, desc: "Maintenance calories" },
              { label: goal === "lose" ? "To Lose" : goal === "gain" ? "To Gain" : "Maintain", value: result.target, desc: "Your daily target" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl p-4 text-center" style={{ background: "var(--color-primary-container)" }}>
                <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}>
                  {item.value.toLocaleString()}
                </p>
                <p className="text-xs font-bold mt-0.5" style={{ color: "var(--color-primary-dark)" }}>{item.label}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-4 text-sm space-y-1" style={{ background: "var(--color-surface-container)" }}>
            <p style={{ color: "var(--color-on-surface)" }}>
              <strong>BMR {result.bmr} kcal</strong> × {ACTIVITY_MULTIPLIERS[activity]} ({ACTIVITY_LABELS[activity].split(" (")[0]}) = <strong>{result.tdee} kcal TDEE</strong>
            </p>
            {goal !== "maintain" && (
              <p style={{ color: "var(--color-on-surface-variant)" }}>
                {goal === "lose" ? `${result.tdee} − 500 = ${result.target} kcal/day (≈0.5 kg/week loss)` : `${result.tdee} + 300 = ${result.target} kcal/day (lean bulk)`}
              </p>
            )}
          </div>

          {affiliateKey && AFFILIATE_MAP[affiliateKey as keyof typeof AFFILIATE_MAP] && (
            <div>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-neutral)" }}>
                {goal === "lose" ? "Support your deficit with:" : "Support your bulk with:"}
              </p>
              <AffiliateGrid products={(AFFILIATE_MAP[affiliateKey as keyof typeof AFFILIATE_MAP] as typeof AFFILIATE_MAP[keyof typeof AFFILIATE_MAP]).slice(0, 2)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
