"use client";

import { useState } from "react";

type Sex = "male" | "female";

const ACTIVITY_LABELS: Record<string, string> = {
  sedentary: "Sedentary (1.2×)",
  light: "Light activity (1.375×)",
  moderate: "Moderate (1.55×)",
  active: "Active (1.725×)",
  very_active: "Very active (1.9×)",
};
const ACTIVITY_MULTIPLIERS: Record<string, number> = {
  sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, very_active: 1.9,
};

export default function BMRCalculatorClient({ defaultSex }: { defaultSex?: Sex }) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [sex, setSex] = useState<Sex>(defaultSex ?? "male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<{ bmr: number; tdeeLevels: { label: string; kcal: number }[] } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const ageN = parseFloat(age);
    const weightKg = unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const heightCm =
      unit === "metric"
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

    const tdeeLevels = Object.entries(ACTIVITY_MULTIPLIERS).map(([k, mult]) => ({
      label: ACTIVITY_LABELS[k],
      kcal: Math.round(bmr * mult),
    }));

    setResult({ bmr: Math.round(bmr), tdeeLevels });
  }

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

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
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

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Calculate BMR
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="rounded-2xl p-5 text-center" style={{ background: "var(--color-primary-container)" }}>
            <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}>
              {result.bmr.toLocaleString()}
            </p>
            <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-primary-dark)" }}>calories/day (BMR)</p>
            <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>
              Mifflin-St Jeor · {sex === "male" ? "Male" : "Female"} · Basal Metabolic Rate
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
              Your TDEE at different activity levels:
            </p>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-outline-variant)" }}>
              {result.tdeeLevels.map((row, i) => (
                <div key={row.label} className="flex items-center justify-between px-4 py-2.5 text-sm"
                  style={{ background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)", borderBottom: i < result.tdeeLevels.length - 1 ? `1px solid var(--color-outline-variant)` : "none" }}>
                  <span style={{ color: "var(--color-on-surface-variant)" }}>{row.label}</span>
                  <span className="font-bold" style={{ color: "var(--color-on-surface)" }}>{row.kcal.toLocaleString()} kcal</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a href="/tdee-calculator"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
              style={{ background: "var(--color-primary-container)", color: "var(--color-primary-dark)" }}>
              Full TDEE Calculator →
            </a>
            <a href="/calorie-deficit-calculator"
              className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-80"
              style={{ background: "var(--color-secondary-container)", color: "var(--color-secondary-dark)" }}>
              Create a Deficit →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
