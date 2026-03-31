"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import StandardToggle from "@/components/ui/StandardToggle";

type Sex = "male" | "female";

const WHR_RISK = {
  male:   [
    { max: 0.90, label: "Low risk",       color: "#2E7D32" },
    { max: 0.95, label: "Moderate risk",  color: "#F57C00" },
    { max: 999,  label: "High risk",      color: "#B71C1C" },
  ],
  female: [
    { max: 0.80, label: "Low risk",       color: "#2E7D32" },
    { max: 0.85, label: "Moderate risk",  color: "#F57C00" },
    { max: 999,  label: "High risk",      color: "#B71C1C" },
  ],
};

function getRisk(sex: Sex, whr: number) {
  return WHR_RISK[sex].find((r) => whr <= r.max)!;
}

export default function WHRClient() {
  const [sex, setSex] = useState<Sex>("female");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<{ whr: number; risk: typeof WHR_RISK["male"][0] } | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const w = parseFloat(waist);
    const h = parseFloat(hip);
    if (!w || !h || w < 40 || h < 40) {
      setError("Please enter valid measurements.");
      return;
    }
    if (w >= h * 1.5) {
      setError("Please check your measurements — waist should be less than hip.");
      return;
    }
    const whr = Math.round((w / h) * 1000) / 1000;
    setResult({ whr, risk: getRisk(sex, whr) });
  }

  const inputClass = "w-full bg-transparent border-b-2 pb-2 outline-none font-bold text-xl transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-manrope)",
    color: "var(--color-on-surface)",
    borderColor: "var(--color-outline-variant)",
  };
  const accent = "var(--color-calc-risk)";

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
              { label: "Waist circumference", state: waist, set: setWaist, placeholder: "75", hint: "Measure at navel level" },
              { label: "Hip circumference",   state: hip,   set: setHip,   placeholder: "95", hint: "Measure at widest point" },
            ].map(({ label, state, set, placeholder, hint }) => (
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
                  <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>cm</span>
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>{hint}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="rounded-xl p-4" style={{ background: "var(--color-surface-container)" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                WHR Thresholds (Singapore HPB / WHO Asia-Pacific)
              </p>
              <div className="space-y-1 text-xs">
                {WHR_RISK[sex].map((r) => (
                  <div key={r.label} className="flex justify-between">
                    <span style={{ color: r.color }}>{r.label}</span>
                    <span style={{ color: "var(--color-neutral)" }}>
                      {sex === "male"
                        ? r.max === 0.90 ? "≤ 0.90" : r.max === 0.95 ? "0.91–0.95" : "> 0.95"
                        : r.max === 0.80 ? "≤ 0.80" : r.max === 0.85 ? "0.81–0.85" : "> 0.85"
                      }
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {error && <p className="text-sm" style={{ color: "var(--color-error)" }}>{error}</p>}

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: accent, fontFamily: "var(--font-manrope)" }}
            >
              Calculate WHR
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className="animate-fadeSlideUp mt-8 space-y-4">
          <div className="flex items-center gap-6 rounded-2xl p-6" style={{ background: "var(--color-surface-container)" }}>
            <div>
              <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: result.risk.color }}>
                {result.whr}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-neutral)" }}>waist-to-hip ratio</p>
            </div>
            <div>
              <p className="text-xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: result.risk.color }}>
                {result.risk.label}
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>
                Singapore HPB / WHO Asia-Pacific threshold
              </p>
            </div>
          </div>

          <div className="rounded-xl p-4 text-sm" style={{ background: "var(--color-primary-container)" }}>
            <p style={{ color: "var(--color-primary-dark)" }}>
              <strong>WHR vs BMI:</strong> Waist-to-hip ratio identifies central (abdominal) obesity — the fat distribution
              most strongly linked to heart disease and diabetes — which BMI alone can miss.
            </p>
          </div>
        </div>
      )}
    </CalculatorCard>
  );
}
