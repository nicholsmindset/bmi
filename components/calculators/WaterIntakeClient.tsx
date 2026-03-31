"use client";

import { useState } from "react";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

const ACTIVITY_EXTRA: Record<ActivityLevel, number> = {
  sedentary: 0,
  light: 250,
  moderate: 500,
  active: 750,
};

export default function WaterIntakeClient() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [exerciseMinutes, setExerciseMinutes] = useState("0");
  const [climate, setClimate] = useState<"tropical" | "temperate">("tropical");
  const [result, setResult] = useState<{
    baseml: number; exerciseml: number; climateml: number; totalml: number; glasses: number;
  } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const weightKg = unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const exMins = parseFloat(exerciseMinutes) || 0;
    if (isNaN(weightKg) || weightKg < 20 || weightKg > 300) {
      setError("Please enter a valid weight.");
      return;
    }
    const base = unit === "metric"
      ? weightKg * (climate === "tropical" ? 40 : 35)
      : weightKg * (climate === "tropical" ? 40 : 35);

    const exerciseExtra = Math.round((exMins / 60) * 500);
    const climateExtra = climate === "tropical" ? ACTIVITY_EXTRA[activity] : Math.round(ACTIVITY_EXTRA[activity] * 0.7);
    const total = Math.round(base + exerciseExtra + climateExtra);
    const glasses = Math.round(total / 250);

    setResult({ baseml: Math.round(base), exerciseml: exerciseExtra, climateml: climateExtra, totalml: total, glasses });
  }

  return (
    <div>
      <div className="toggle-group mb-5">
        {(["metric", "imperial"] as const).map((u) => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); }}
            className={`toggle-pill${unit === u ? " active" : ""}`}>
            {u === "metric" ? "Metric (kg)" : "Imperial (lbs)"}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="form-label">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
          <input type="number" min={1} value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 65" : "e.g. 143"}
            className="calc-input" />
        </div>
        <div>
          <label className="form-label">Exercise (minutes/day)</label>
          <input type="number" min={0} max={480} value={exerciseMinutes} onChange={(e) => setExerciseMinutes(e.target.value)} placeholder="e.g. 30"
            className="calc-input" />
        </div>
      </div>

      <div className="mb-4">
        <label className="form-label">Activity Level</label>
        <div className="grid grid-cols-2 gap-2">
          {([["sedentary", "Sedentary"], ["light", "Light"], ["moderate", "Moderate"], ["active", "Active"]] as const).map(([a, label]) => (
            <button key={a} onClick={() => setActivity(a)}
              className="py-2 rounded-xl text-sm font-semibold border transition-all"
              style={{ background: activity === a ? "var(--color-primary-container)" : "var(--color-surface)", borderColor: activity === a ? "var(--color-primary)" : "var(--color-outline-variant)", color: activity === a ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className="form-label">Climate</label>
        <div className="flex gap-2">
          {([["tropical", "Tropical (Singapore)"], ["temperate", "Temperate"]] as const).map(([c, label]) => (
            <button key={c} onClick={() => setClimate(c)}
              className="flex-1 py-2 rounded-xl text-sm font-semibold border transition-all"
              style={{ background: climate === c ? "var(--color-primary-container)" : "var(--color-surface)", borderColor: climate === c ? "var(--color-primary)" : "var(--color-outline-variant)", color: climate === c ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Calculate Water Intake
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="rounded-2xl p-5 text-center" style={{ background: "#e0f2fe" }}>
            <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "#0284c7" }}>
              {(result.totalml / 1000).toFixed(1)}L
            </p>
            <p className="text-sm font-semibold mt-1" style={{ color: "#0369a1" }}>{result.totalml} ml · {result.glasses} glasses (250ml)</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>Daily water intake target</p>
          </div>

          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-outline-variant)" }}>
            {[
              { label: "Base (body weight)", value: `${result.baseml} ml` },
              { label: "Exercise adjustment", value: `+${result.exerciseml} ml` },
              { label: "Activity/climate bonus", value: `+${result.climateml} ml` },
              { label: "Total daily target", value: `${result.totalml} ml`, bold: true },
            ].map((row, i) => (
              <div key={row.label} className="flex justify-between px-4 py-2.5 text-sm"
                style={{ background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)", borderBottom: i < 3 ? "1px solid var(--color-outline-variant)" : "none" }}>
                <span style={{ color: "var(--color-on-surface-variant)" }}>{row.label}</span>
                <span className={row.bold ? "font-bold" : ""} style={{ color: row.bold ? "#0284c7" : "var(--color-on-surface)" }}>{row.value}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-neutral)" }}>Hydration essentials:</p>
            <AffiliateGrid products={(AFFILIATE_MAP.water_intake as typeof AFFILIATE_MAP[keyof typeof AFFILIATE_MAP]).slice(0, 2)} />
          </div>
        </div>
      )}
    </div>
  );
}
