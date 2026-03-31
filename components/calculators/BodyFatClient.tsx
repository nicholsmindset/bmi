"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import StandardToggle from "@/components/ui/StandardToggle";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type Sex = "male" | "female";

interface BodyFatCategory {
  label: string;
  min: number;
  max: number;
  color: string;
  affiliateKey?: "bmi_overweight" | "bmi_obese1";
}

const CATEGORIES: Record<Sex, BodyFatCategory[]> = {
  male: [
    { label: "Essential fat", min: 0,   max: 5,   color: "#2196F3" },
    { label: "Athlete",       min: 6,   max: 13,  color: "#005EB8" },
    { label: "Fitness",       min: 14,  max: 17,  color: "#2E7D32" },
    { label: "Acceptable",    min: 18,  max: 24,  color: "#F57C00" },
    { label: "Obese",         min: 25,  max: 100, color: "#B71C1C", affiliateKey: "bmi_obese1" },
  ],
  female: [
    { label: "Essential fat", min: 0,   max: 13,  color: "#2196F3" },
    { label: "Athlete",       min: 14,  max: 20,  color: "#005EB8" },
    { label: "Fitness",       min: 21,  max: 24,  color: "#2E7D32" },
    { label: "Acceptable",    min: 25,  max: 31,  color: "#F57C00" },
    { label: "Obese",         min: 32,  max: 100, color: "#B71C1C", affiliateKey: "bmi_obese1" },
  ],
};

function getCategory(sex: Sex, pct: number): BodyFatCategory {
  return CATEGORIES[sex].find(c => pct >= c.min && pct <= c.max) ?? CATEGORIES[sex][CATEGORIES[sex].length - 1];
}

function calcBodyFat(sex: Sex, heightCm: number, waistCm: number, neckCm: number, hipCm?: number): number {
  const h = Math.log10(heightCm);
  if (sex === "male") {
    const wn = Math.log10(waistCm - neckCm);
    return 495 / (1.0324 - 0.19077 * wn + 0.15456 * h) - 450;
  } else {
    if (!hipCm) return NaN;
    const whn = Math.log10(waistCm + hipCm - neckCm);
    return 495 / (1.29579 - 0.35004 * whn + 0.22100 * h) - 450;
  }
}

export default function BodyFatClient() {
  const [sex, setSex] = useState<Sex>("female");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<{ pct: number; category: BodyFatCategory } | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const h = parseFloat(height);
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const hp = parseFloat(hip);

    if (!h || !w || !n || (sex === "female" && !hp)) {
      setError("Please fill in all fields.");
      return;
    }
    if (w <= n) {
      setError("Waist must be greater than neck circumference.");
      return;
    }

    const pct = calcBodyFat(sex, h, w, n, sex === "female" ? hp : undefined);
    if (isNaN(pct) || pct < 1 || pct > 70) {
      setError("Could not calculate — please check your measurements.");
      return;
    }

    setResult({ pct: Math.round(pct * 10) / 10, category: getCategory(sex, pct) });
  }

  const inputClass = "w-full bg-transparent border-b-2 pb-2 outline-none font-bold text-xl transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-manrope)",
    color: "var(--color-on-surface)",
    borderColor: "var(--color-outline-variant)",
  };
  const accent = "var(--color-calc-fitness)";

  return (
    <CalculatorCard accentColor={accent}>
      <form onSubmit={handleCalculate} noValidate>
        <div className="flex flex-wrap gap-3 mb-8">
          <StandardToggle
            options={[{ value: "female", label: "Female" }, { value: "male", label: "Male" }]}
            value={sex}
            onChange={(v) => { setSex(v as Sex); setResult(null); }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            {[
              { label: "Height", state: height, set: setHeight, unit: "cm", placeholder: "165" },
              { label: "Waist (at navel)", state: waist, set: setWaist, unit: "cm", placeholder: "75" },
              { label: "Neck", state: neck, set: setNeck, unit: "cm", placeholder: "33" },
            ].map(({ label, state, set, unit, placeholder }) => (
              <div key={label}>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                  {label}
                </label>
                <div className="relative">
                  <input type="number" inputMode="decimal" placeholder={placeholder}
                    value={state} onChange={(e) => { set(e.target.value); setResult(null); }}
                    className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = accent)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                  />
                  <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>{unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            {sex === "female" && (
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                  Hip (widest point)
                </label>
                <div className="relative">
                  <input type="number" inputMode="decimal" placeholder="95"
                    value={hip} onChange={(e) => { setHip(e.target.value); setResult(null); }}
                    className={inputClass} style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = accent)}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                  />
                  <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>cm</span>
                </div>
              </div>
            )}

            <div className="rounded-xl p-4 text-xs" style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)" }}>
              <p className="font-semibold mb-1">Measurement guide:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Waist: measure at navel level, exhale naturally</li>
                <li>Neck: measure below larynx, tape slightly downward-sloping</li>
                {sex === "female" && <li>Hip: measure at widest point across buttocks</li>}
              </ul>
            </div>

            {error && <p className="text-sm" style={{ color: "var(--color-error)" }}>{error}</p>}

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: accent, fontFamily: "var(--font-manrope)" }}
            >
              Calculate Body Fat %
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className="animate-fadeSlideUp mt-8 space-y-4">
          <div className="flex items-center gap-6 rounded-2xl p-6" style={{ background: "var(--color-surface-container)" }}>
            <div>
              <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: result.category.color }}>
                {result.pct}%
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-neutral)" }}>body fat</p>
            </div>
            <div>
              <p className="text-xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: result.category.color }}>
                {result.category.label}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>
                ACE category · {result.category.min}–{result.category.max === 100 ? result.category.min + "+" : result.category.max}%
              </p>
            </div>
          </div>

          {/* Categories reference */}
          <div className="space-y-1">
            {CATEGORIES[sex].map((cat) => (
              <div
                key={cat.label}
                className="flex items-center justify-between px-4 py-2 rounded-lg"
                style={{
                  background: result.category.label === cat.label ? `${cat.color}20` : "transparent",
                  border: result.category.label === cat.label ? `1.5px solid ${cat.color}` : "1.5px solid transparent",
                }}
              >
                <span className="text-sm font-medium" style={{ color: cat.color }}>{cat.label}</span>
                <span className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  {cat.min}–{cat.max === 100 ? `${cat.min}+` : `${cat.max}`}%
                </span>
              </div>
            ))}
          </div>

          {result.category.affiliateKey && (
            <AffiliateGrid products={AFFILIATE_MAP[result.category.affiliateKey] ?? []} />
          )}
        </div>
      )}
    </CalculatorCard>
  );
}
