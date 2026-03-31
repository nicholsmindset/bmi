"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import StandardToggle from "@/components/ui/StandardToggle";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { calculateBMR, ACTIVITY_MULTIPLIERS, lbsToKg, ftInToCm } from "@/lib/bmi-logic";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type Unit = "metric" | "imperial";
type ActivityLevel = keyof typeof ACTIVITY_MULTIPLIERS;
type WeeklyGoal = 0.25 | 0.5 | 0.75 | 1.0;
type Sex = "male" | "female";

const ACTIVITY_OPTIONS = [
  { value: "sedentary",   label: "Sedentary (desk job, little exercise)" },
  { value: "light",       label: "Light (1–3 days/week)" },
  { value: "moderate",    label: "Moderate (3–5 days/week)" },
  { value: "active",      label: "Active (6–7 days/week)" },
  { value: "very_active", label: "Very Active (athlete / physical job)" },
];

const WEEKLY_GOALS: { value: WeeklyGoal; label: string }[] = [
  { value: 0.25, label: "0.25 kg/week (slow)" },
  { value: 0.5,  label: "0.5 kg/week (moderate)" },
  { value: 0.75, label: "0.75 kg/week (fast)" },
  { value: 1.0,  label: "1.0 kg/week (aggressive)" },
];

interface CalorieResult {
  tdee: number;
  dailyTarget: number;
  dailyDeficit: number;
  weeksToGoal: number;
  targetDate: string;
  safetyWarning: string | null;
}

function addWeeks(weeks: number): string {
  const d = new Date();
  d.setDate(d.getDate() + Math.round(weeks * 7));
  return d.toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" });
}

export default function CalorieDeficitClient() {
  const [unit, setUnit] = useState<Unit>("metric");
  const [sex, setSex] = useState<Sex>("female");

  // Metric
  const [currentWeightKg, setCurrentWeightKg] = useState("");
  const [targetWeightKg, setTargetWeightKg] = useState("");
  const [heightCm, setHeightCm] = useState("");
  // Imperial
  const [currentWeightLbs, setCurrentWeightLbs] = useState("");
  const [targetWeightLbs, setTargetWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");

  const [age, setAge] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [weeklyGoal, setWeeklyGoal] = useState<WeeklyGoal>(0.5);

  const [result, setResult] = useState<CalorieResult | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    let cw: number, tw: number, h: number;

    if (unit === "metric") {
      cw = parseFloat(currentWeightKg);
      tw = parseFloat(targetWeightKg);
      h  = parseFloat(heightCm);
    } else {
      cw = lbsToKg(parseFloat(currentWeightLbs));
      tw = lbsToKg(parseFloat(targetWeightLbs));
      h  = ftInToCm(parseFloat(heightFt) || 0, parseFloat(heightIn) || 0);
    }

    const a = parseInt(age);

    if (!cw || !tw || !h || !a) {
      setError("Please fill in all fields.");
      return;
    }
    if (tw >= cw) {
      setError("Target weight must be less than current weight for a deficit.");
      return;
    }
    if (a < 15 || a > 99) {
      setError("Please enter an age between 15 and 99.");
      return;
    }

    const bmr  = calculateBMR(cw, h, a, sex);
    const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);

    const dailyDeficit = Math.round((weeklyGoal * 7700) / 7);
    const dailyTarget  = tdee - dailyDeficit;
    const weeksToGoal  = (cw - tw) * 7700 / (weeklyGoal * 7700);

    const minCalories = sex === "male" ? 1500 : 1200;
    let safetyWarning: string | null = null;

    if (dailyDeficit > 1000) {
      safetyWarning = `A deficit of ${dailyDeficit} kcal/day exceeds the recommended maximum of 1,000 kcal. Consider a more moderate goal to preserve muscle and sustain results.`;
    } else if (dailyTarget < minCalories) {
      safetyWarning = `Your daily target of ${dailyTarget} kcal falls below the HPB minimum of ${minCalories} kcal/day for ${sex === "male" ? "men" : "women"}. Consider a lower weekly loss goal.`;
    }

    setResult({
      tdee,
      dailyTarget: Math.max(dailyTarget, minCalories),
      dailyDeficit,
      weeksToGoal: Math.round(weeksToGoal * 10) / 10,
      targetDate: addWeeks(weeksToGoal),
      safetyWarning,
    });
  }

  const inputClass = "w-full bg-transparent border-b-2 pb-2 outline-none font-bold text-xl transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-manrope)",
    color: "var(--color-on-surface)",
    borderColor: "var(--color-outline-variant)",
  };

  return (
    <CalculatorCard accentColor="var(--color-calc-energy)">
      <form onSubmit={handleCalculate} noValidate>
        {/* Unit + Sex toggles */}
        <div className="flex flex-wrap gap-3 mb-8">
          <StandardToggle
            options={[{ value: "metric", label: "Metric" }, { value: "imperial", label: "Imperial" }]}
            value={unit}
            onChange={(v) => { setUnit(v as Unit); setResult(null); }}
          />
          <StandardToggle
            options={[{ value: "female", label: "Female" }, { value: "male", label: "Male" }]}
            value={sex}
            onChange={(v) => { setSex(v as Sex); setResult(null); }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {/* Current weight */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Current weight
              </label>
              <div className="relative">
                <input
                  type="number" inputMode="decimal"
                  placeholder={unit === "metric" ? "75" : "165"}
                  value={unit === "metric" ? currentWeightKg : currentWeightLbs}
                  onChange={(e) => unit === "metric" ? setCurrentWeightKg(e.target.value) : setCurrentWeightLbs(e.target.value)}
                  className={inputClass} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-energy)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                />
                <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </div>
            </div>

            {/* Target weight */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Target weight
              </label>
              <div className="relative">
                <input
                  type="number" inputMode="decimal"
                  placeholder={unit === "metric" ? "65" : "143"}
                  value={unit === "metric" ? targetWeightKg : targetWeightLbs}
                  onChange={(e) => unit === "metric" ? setTargetWeightKg(e.target.value) : setTargetWeightLbs(e.target.value)}
                  className={inputClass} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-energy)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                />
                <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </div>
            </div>

            {/* Height */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Height
              </label>
              {unit === "metric" ? (
                <div className="relative">
                  <input type="number" inputMode="decimal" placeholder="165"
                    value={heightCm} onChange={(e) => setHeightCm(e.target.value)}
                    className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-energy)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                  />
                  <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>cm</span>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input type="number" inputMode="decimal" placeholder="5"
                      value={heightFt} onChange={(e) => setHeightFt(e.target.value)}
                      className={inputClass} style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-energy)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                    />
                    <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>ft</span>
                  </div>
                  <div className="relative flex-1">
                    <input type="number" inputMode="decimal" placeholder="5"
                      value={heightIn} onChange={(e) => setHeightIn(e.target.value)}
                      className={inputClass} style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-energy)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                    />
                    <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>in</span>
                  </div>
                </div>
              )}
            </div>

            {/* Age */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>Age</label>
              <div className="relative">
                <input type="number" inputMode="numeric" placeholder="30"
                  value={age} onChange={(e) => setAge(e.target.value)}
                  className={inputClass} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-energy)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                />
                <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>years</span>
              </div>
            </div>
          </div>

          <div className="space-y-5">
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
                {ACTIVITY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Weekly goal */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Weekly loss goal
              </label>
              <div className="space-y-2">
                {WEEKLY_GOALS.map((g) => (
                  <label key={g.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio" name="weeklyGoal" value={String(g.value)}
                      checked={weeklyGoal === g.value}
                      onChange={() => setWeeklyGoal(g.value)}
                      className="accent-[var(--color-calc-energy)]"
                    />
                    <span className="text-sm" style={{ color: "var(--color-on-surface)" }}>{g.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {error && (
              <p className="text-sm" style={{ color: "var(--color-error)" }}>{error}</p>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: "var(--color-calc-energy)", fontFamily: "var(--font-manrope)" }}
            >
              Calculate Calorie Deficit
            </button>
          </div>
        </div>
      </form>

      {/* Results */}
      {result && (
        <div className="animate-fadeSlideUp mt-8 space-y-4">
          {result.safetyWarning && (
            <div
              className="flex gap-3 p-4 rounded-xl text-sm border-l-4"
              style={{ background: "#FFF8E1", borderLeftColor: "#F9A825", color: "#5D4037" }}
            >
              <span>⚠️</span>
              <p>{result.safetyWarning}</p>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "TDEE", value: `${result.tdee.toLocaleString()}`, unit: "kcal/day" },
              { label: "Daily target", value: `${result.dailyTarget.toLocaleString()}`, unit: "kcal/day" },
              { label: "Daily deficit", value: `${result.dailyDeficit.toLocaleString()}`, unit: "kcal/day" },
              { label: "Weeks to goal", value: `${result.weeksToGoal}`, unit: "weeks" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-4 text-center"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-calc-energy)" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-neutral)" }}>{stat.unit}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: "var(--color-on-surface-variant)" }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-xl p-4 text-sm"
            style={{ background: "var(--color-primary-container)" }}
          >
            <p style={{ color: "var(--color-primary-dark)" }}>
              <strong>Estimated goal date:</strong> {result.targetDate} ({result.weeksToGoal} weeks at {weeklyGoal} kg/week)
            </p>
          </div>

          <AffiliateGrid products={AFFILIATE_MAP["calorie_cutting"] ?? []} />
        </div>
      )}
    </CalculatorCard>
  );
}
