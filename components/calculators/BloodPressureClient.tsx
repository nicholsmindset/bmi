"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

interface BPCategory {
  label: string;
  sysMin: number;
  sysMax: number;
  diaMin: number;
  diaMax: number;
  color: string;
  desc: string;
  showAffiliate?: boolean;
}

const BP_CATEGORIES: BPCategory[] = [
  {
    label: "Normal",
    sysMin: 0,   sysMax: 119, diaMin: 0,   diaMax: 79,
    color: "#2E7D32",
    desc: "Your blood pressure is in the normal range. Maintain a healthy lifestyle.",
  },
  {
    label: "Elevated",
    sysMin: 120, sysMax: 129, diaMin: 0,   diaMax: 79,
    color: "#F57C00",
    desc: "Elevated blood pressure is above normal but not yet high blood pressure. Lifestyle changes are recommended.",
  },
  {
    label: "High — Stage 1",
    sysMin: 130, sysMax: 139, diaMin: 80,  diaMax: 89,
    color: "#E65100",
    desc: "Stage 1 hypertension. Your doctor may recommend lifestyle changes and possibly medication.",
    showAffiliate: true,
  },
  {
    label: "High — Stage 2",
    sysMin: 140, sysMax: 179, diaMin: 90,  diaMax: 119,
    color: "#B71C1C",
    desc: "Stage 2 hypertension. Consult your doctor promptly. Medication is typically prescribed at this stage.",
    showAffiliate: true,
  },
  {
    label: "Hypertensive Crisis",
    sysMin: 180, sysMax: 999, diaMin: 120, diaMax: 999,
    color: "#7B0000",
    desc: "Seek emergency medical care immediately. A reading this high requires immediate attention.",
    showAffiliate: false,
  },
];

function getCategory(sys: number, dia: number): BPCategory {
  if (sys >= 180 || dia >= 120) return BP_CATEGORIES[4];
  if (sys >= 140 || dia >= 90)  return BP_CATEGORIES[3];
  if (sys >= 130 || dia >= 80)  return BP_CATEGORIES[2];
  if (sys >= 120 && dia < 80)   return BP_CATEGORIES[1];
  return BP_CATEGORIES[0];
}

export default function BloodPressureClient() {
  const [systolic, setSystolic]   = useState("");
  const [diastolic, setDiastolic] = useState("");
  const [result, setResult] = useState<{ sys: number; dia: number; cat: BPCategory } | null>(null);
  const [error, setError]   = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);
    if (!sys || !dia || sys < 60 || sys > 250 || dia < 40 || dia > 150) {
      setError("Please enter valid blood pressure readings.");
      return;
    }
    if (sys <= dia) {
      setError("Systolic (top number) must be higher than diastolic (bottom number).");
      return;
    }
    setResult({ sys, dia, cat: getCategory(sys, dia) });
  }

  const inputClass = "w-full bg-transparent border-b-2 pb-2 outline-none font-bold text-xl transition-colors";
  const inputStyle = {
    fontFamily: "var(--font-manrope)",
    color: "var(--color-on-surface)",
    borderColor: "var(--color-outline-variant)",
  };
  const accent = "#B71C1C";

  return (
    <CalculatorCard accentColor={accent}>
      <form onSubmit={handleCalculate} noValidate>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Systolic (top number)
              </label>
              <div className="relative">
                <input
                  type="number" inputMode="numeric" placeholder="120"
                  value={systolic}
                  onChange={(e) => { setSystolic(e.target.value); setResult(null); }}
                  className={inputClass} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = accent)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                />
                <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>mmHg</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Diastolic (bottom number)
              </label>
              <div className="relative">
                <input
                  type="number" inputMode="numeric" placeholder="80"
                  value={diastolic}
                  onChange={(e) => { setDiastolic(e.target.value); setResult(null); }}
                  className={inputClass} style={inputStyle}
                  onFocus={(e) => (e.currentTarget.style.borderColor = accent)}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
                />
                <span className="absolute right-0 bottom-2 text-sm" style={{ color: "var(--color-neutral)" }}>mmHg</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl p-4" style={{ background: "var(--color-surface-container)" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: "var(--color-on-surface-variant)" }}>
                Singapore MOH / JNC8 Categories
              </p>
              <div className="space-y-1 text-xs">
                {BP_CATEGORIES.map((cat) => (
                  <div key={cat.label} className="flex justify-between">
                    <span style={{ color: cat.color }}>{cat.label}</span>
                    <span style={{ color: "var(--color-neutral)" }}>
                      {cat.label === "Normal" ? "<120/<80"
                       : cat.label === "Elevated" ? "120–129/<80"
                       : cat.label === "High — Stage 1" ? "130–139/80–89"
                       : cat.label === "High — Stage 2" ? "140–179/90–119"
                       : "≥180/≥120"}
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
              Check Blood Pressure
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className="animate-fadeSlideUp mt-8 space-y-4">
          <div className="flex items-center gap-6 rounded-2xl p-6" style={{ background: "var(--color-surface-container)" }}>
            <div>
              <p className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: result.cat.color }}>
                {result.sys}/{result.dia}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-neutral)" }}>mmHg</p>
            </div>
            <div>
              <p className="text-xl font-bold" style={{ fontFamily: "var(--font-manrope)", color: result.cat.color }}>
                {result.cat.label}
              </p>
              <p className="text-sm mt-1 max-w-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                {result.cat.desc}
              </p>
            </div>
          </div>

          {/* BP reference table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>Category</th>
                  <th className="text-left p-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>Systolic</th>
                  <th className="text-left p-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>Diastolic</th>
                </tr>
              </thead>
              <tbody>
                {BP_CATEGORIES.map((cat) => (
                  <tr
                    key={cat.label}
                    style={{
                      borderTop: "1px solid var(--color-outline-variant)",
                      background: result.cat.label === cat.label ? `${cat.color}15` : undefined,
                    }}
                  >
                    <td className="p-2 font-medium" style={{ color: cat.color }}>{cat.label}</td>
                    <td className="p-2" style={{ color: "var(--color-on-surface)" }}>
                      {cat.label === "Normal" ? "<120"
                       : cat.label === "Elevated" ? "120–129"
                       : cat.label === "High — Stage 1" ? "130–139"
                       : cat.label === "High — Stage 2" ? "140–179"
                       : "≥180"}
                    </td>
                    <td className="p-2" style={{ color: "var(--color-on-surface)" }}>
                      {cat.label === "Normal" ? "<80"
                       : cat.label === "Elevated" ? "<80"
                       : cat.label === "High — Stage 1" ? "80–89"
                       : cat.label === "High — Stage 2" ? "90–119"
                       : "≥120"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {result.cat.showAffiliate && (
            <AffiliateGrid products={AFFILIATE_MAP["blood_pressure_high"] ?? []} />
          )}
        </div>
      )}
    </CalculatorCard>
  );
}
