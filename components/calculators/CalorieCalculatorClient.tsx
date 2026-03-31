"use client";

import { useState } from "react";

type Sex = "male" | "female";
type Activity = "sedentary" | "light" | "moderate" | "active" | "very_active";
type Goal = "lose" | "maintain" | "gain";

const ACTIVITY_LABELS: Record<Activity, string> = {
  sedentary: "Sedentary (office job, no exercise)",
  light: "Light (1–3 days/week)",
  moderate: "Moderate (3–5 days/week)",
  active: "Active (6–7 days/week)",
  very_active: "Very active (physical job/twice daily)",
};

const ACTIVITY_MULTIPLIERS: Record<Activity, number> = {
  sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9,
};

const MACRO_SPLITS: Record<Goal, { protein: number; carbs: number; fat: number }> = {
  lose:     { protein: 0.40, carbs: 0.30, fat: 0.30 },
  maintain: { protein: 0.30, carbs: 0.40, fat: 0.30 },
  gain:     { protein: 0.30, carbs: 0.50, fat: 0.20 },
};

export default function CalorieCalculatorClient() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [sex, setSex] = useState<Sex>("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [activity, setActivity] = useState<Activity>("moderate");
  const [goal, setGoal] = useState<Goal>("maintain");
  const [result, setResult] = useState<{
    bmr: number; tdee: number; target: number;
    protein: number; carbs: number; fat: number;
  } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const ageN = parseFloat(age);
    const weightKg = unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const heightCm = unit === "metric"
      ? parseFloat(height)
      : parseFloat(heightFt) * 30.48 + parseFloat(heightIn) * 2.54;

    if (isNaN(ageN) || isNaN(weightKg) || isNaN(heightCm) ||
      ageN < 1 || ageN > 120 || weightKg < 20 || weightKg > 300 || heightCm < 50 || heightCm > 250) {
      setError("Please enter valid values for all fields.");
      return;
    }

    const bmr = sex === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * ageN + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * ageN - 161;

    const tdee = bmr * ACTIVITY_MULTIPLIERS[activity];
    const target = goal === "lose" ? tdee - 500 : goal === "gain" ? tdee + 300 : tdee;
    const splits = MACRO_SPLITS[goal];

    setResult({
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      target: Math.round(target),
      protein: Math.round((target * splits.protein) / 4),
      carbs: Math.round((target * splits.carbs) / 4),
      fat: Math.round((target * splits.fat) / 9),
    });
  }

  return (
    <div>
      <div className="toggle-group mb-5">
        {(["metric", "imperial"] as const).map((u) => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); }}
            className={`toggle-pill${unit === u ? " active" : ""}`}>
            {u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="form-label">Sex</label>
          <div className="flex gap-2">
            {(["male", "female"] as Sex[]).map((s) => (
              <button key={s} onClick={() => setSex(s)}
                className={`sex-btn${sex === s ? " active" : ""}`}>
                {s === "male" ? "Male" : "Female"}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="form-label">Age (years)</label>
          <input type="number" min={1} max={120} value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 30"
            className="calc-input" />
        </div>
        <div>
          <label className="form-label">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
          <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 65" : "e.g. 143"}
            className="calc-input" />
        </div>
        {unit === "metric" ? (
          <div>
            <label className="form-label">Height (cm)</label>
            <input type="number" min={50} max={250} value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 165"
              className="calc-input" />
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

      <div className="mb-4">
        <label className="form-label">Activity Level</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value as Activity)}
          className="calc-input">
          {Object.entries(ACTIVITY_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
      </div>

      <div className="mb-5">
        <label className="form-label">Goal</label>
        <div className="flex gap-2">
          {([["lose", "Lose Weight"], ["maintain", "Maintain"], ["gain", "Gain Muscle"]] as const).map(([g, label]) => (
            <button key={g} onClick={() => setGoal(g)}
              className={`sex-btn${goal === g ? " active" : ""}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Calculate Calories
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="rounded-2xl p-5 text-center" style={{ background: "var(--color-primary-container)" }}>
            <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}>
              {result.target.toLocaleString()}
            </p>
            <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-primary-dark)" }}>calories/day</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>
              TDEE {result.tdee.toLocaleString()} · BMR {result.bmr.toLocaleString()}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-on-surface-variant)" }}>Macronutrient breakdown:</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Protein", value: result.protein, unit: "g", color: "var(--color-primary)" },
                { label: "Carbs", value: result.carbs, unit: "g", color: "var(--color-secondary)" },
                { label: "Fat", value: result.fat, unit: "g", color: "var(--color-warning)" },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl p-3 text-center" style={{ background: "var(--color-surface-container)" }}>
                  <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: m.color }}>{m.value}{m.unit}</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--color-on-surface-variant)" }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl p-3 text-xs" style={{ background: "var(--color-surface-container)", color: "var(--color-neutral)" }}>
            Singapore HPB recommends 45–55% calories from carbohydrates, 15–20% from protein, and 25–35% from fat for balanced nutrition.
          </div>
        </div>
      )}
    </div>
  );
}
