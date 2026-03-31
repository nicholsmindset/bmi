"use client";

import { useState } from "react";

type Activity = "walking" | "running" | "cycling" | "swimming" | "badminton";

const MET_VALUES: Record<Activity, { low: number; moderate: number; high: number; label: string }> = {
  walking:  { low: 2.5, moderate: 3.5, high: 4.5,  label: "Walking" },
  running:  { low: 6.0, moderate: 8.0, high: 11.0, label: "Running" },
  cycling:  { low: 4.0, moderate: 6.0, high: 10.0, label: "Cycling" },
  swimming: { low: 5.0, moderate: 7.0, high: 9.0,  label: "Swimming" },
  badminton:{ low: 4.5, moderate: 6.0, high: 7.0,  label: "Badminton" },
};

const DURATIONS = [15, 30, 45, 60, 90];

export default function CaloriesBurnedClient({
  defaultActivity,
  defaultWeightKg,
}: {
  defaultActivity?: Activity;
  defaultWeightKg?: number;
}) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [activity, setActivity] = useState<Activity>(defaultActivity ?? "walking");
  const [weight, setWeight] = useState(defaultWeightKg ? String(defaultWeightKg) : "");
  const [duration, setDuration] = useState("30");
  const [intensity, setIntensity] = useState<"low" | "moderate" | "high">("moderate");
  const [result, setResult] = useState<{ kcal: number; kcalPerMin: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const weightKg = unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    const durationH = parseFloat(duration) / 60;
    if (isNaN(weightKg) || weightKg < 20 || weightKg > 300 || isNaN(durationH) || durationH <= 0) {
      setError("Please enter valid weight and duration values.");
      return;
    }
    const met = MET_VALUES[activity][intensity];
    const kcal = Math.round(met * weightKg * durationH);
    const kcalPerMin = Math.round((met * weightKg) / 60 * 10) / 10;
    setResult({ kcal, kcalPerMin });
  }

  return (
    <div>
      <div className="flex gap-2 mb-5">
        {(["metric", "imperial"] as const).map((u) => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); }}
            className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
            style={{ background: unit === u ? "var(--color-primary)" : "var(--color-surface-container)", color: unit === u ? "#fff" : "var(--color-on-surface-variant)" }}>
            {u === "metric" ? "Metric (kg)" : "Imperial (lbs)"}
          </button>
        ))}
      </div>

      {/* Activity selector */}
      <div className="mb-4">
        <label className="block text-xs font-semibold mb-1" style={{ color: "var(--color-on-surface-variant)" }}>Activity</label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {(Object.entries(MET_VALUES) as [Activity, typeof MET_VALUES[Activity]][]).map(([a, meta]) => (
            <button key={a} onClick={() => setActivity(a)}
              className="py-2 rounded-xl text-xs font-semibold border transition-all"
              style={{ background: activity === a ? "var(--color-primary-container)" : "var(--color-surface)", borderColor: activity === a ? "var(--color-primary)" : "var(--color-outline-variant)", color: activity === a ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)" }}>
              {meta.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "var(--color-on-surface-variant)" }}>Weight ({unit === "metric" ? "kg" : "lbs"})</label>
          <input type="number" min={20} max={300} value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "e.g. 65" : "e.g. 143"}
            className="w-full px-3 py-2 rounded-xl border text-sm"
            style={{ borderColor: "var(--color-outline-variant)", background: "var(--color-surface)", color: "var(--color-on-surface)" }} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1" style={{ color: "var(--color-on-surface-variant)" }}>Duration (minutes)</label>
          <div className="flex gap-1">
            {DURATIONS.map((d) => (
              <button key={d} onClick={() => setDuration(String(d))}
                className="flex-1 py-2 rounded-lg text-xs font-semibold border transition-all"
                style={{ background: duration === String(d) ? "var(--color-primary-container)" : "var(--color-surface)", borderColor: duration === String(d) ? "var(--color-primary)" : "var(--color-outline-variant)", color: duration === String(d) ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)" }}>
                {d}
              </button>
            ))}
          </div>
          <input type="number" min={1} max={600} value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="or enter custom"
            className="w-full mt-2 px-3 py-2 rounded-xl border text-sm"
            style={{ borderColor: "var(--color-outline-variant)", background: "var(--color-surface)", color: "var(--color-on-surface)" }} />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-semibold mb-1" style={{ color: "var(--color-on-surface-variant)" }}>Intensity</label>
        <div className="flex gap-2">
          {([["low", "Low"], ["moderate", "Moderate"], ["high", "High"]] as const).map(([i, label]) => (
            <button key={i} onClick={() => setIntensity(i)}
              className="flex-1 py-2 rounded-xl text-sm font-semibold border transition-all"
              style={{ background: intensity === i ? "var(--color-primary-container)" : "var(--color-surface)", borderColor: intensity === i ? "var(--color-primary)" : "var(--color-outline-variant)", color: intensity === i ? "var(--color-primary-dark)" : "var(--color-on-surface-variant)" }}>
              {label} (MET {MET_VALUES[activity][i]})
            </button>
          ))}
        </div>
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate}
        className="w-full py-3 rounded-2xl text-sm font-bold transition-all hover:opacity-90"
        style={{ background: "var(--color-primary)", color: "#fff" }}>
        Calculate Calories Burned
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="rounded-2xl p-5 text-center" style={{ background: "var(--color-primary-container)" }}>
            <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}>
              {result.kcal}
            </p>
            <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-primary-dark)" }}>
              calories burned · {duration} min {MET_VALUES[activity].label}
            </p>
            <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>
              {result.kcalPerMin} kcal/min · MET {MET_VALUES[activity][intensity]} ({intensity} intensity)
            </p>
          </div>

          {/* Duration breakdown */}
          <div>
            <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
              Calories burned at {intensity} intensity ({MET_VALUES[activity].label}):
            </p>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-outline-variant)" }}>
              {DURATIONS.map((d, i) => {
                const weightKg = unit === "metric" ? parseFloat(weight) : parseFloat(weight) * 0.453592;
                const met = MET_VALUES[activity][intensity];
                const kcal = isNaN(weightKg) ? 0 : Math.round(met * weightKg * (d / 60));
                return (
                  <div key={d} className="flex justify-between px-4 py-2.5 text-sm"
                    style={{ background: String(d) === duration ? "var(--color-primary-container)" : i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)", borderBottom: i < DURATIONS.length - 1 ? "1px solid var(--color-outline-variant)" : "none" }}>
                    <span style={{ color: "var(--color-on-surface-variant)" }}>{d} minutes</span>
                    <span className="font-bold" style={{ color: "var(--color-primary)" }}>{kcal > 0 ? `${kcal} kcal` : "—"}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
