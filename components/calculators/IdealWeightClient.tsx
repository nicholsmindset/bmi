"use client";

import { useState } from "react";

type Sex = "male" | "female";

function hpbRange(heightCm: number): { min: number; max: number } {
  return {
    min: Math.round(18.5 * (heightCm / 100) ** 2 * 10) / 10,
    max: Math.round(22.9 * (heightCm / 100) ** 2 * 10) / 10,
  };
}

function whoRange(heightCm: number): { min: number; max: number } {
  return {
    min: Math.round(18.5 * (heightCm / 100) ** 2 * 10) / 10,
    max: Math.round(24.9 * (heightCm / 100) ** 2 * 10) / 10,
  };
}

function hamwiIdeal(heightCm: number, sex: Sex): number {
  const totalInches = heightCm / 2.54;
  const inchesOver5ft = totalInches - 60;
  if (sex === "male") return Math.round((48.0 + Math.max(0, inchesOver5ft) * 2.7) * 10) / 10;
  return Math.round((45.5 + Math.max(0, inchesOver5ft) * 2.2) * 10) / 10;
}

export default function IdealWeightClient({ initialHeightCm }: { initialHeightCm?: number }) {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [sex, setSex] = useState<Sex>("female");
  const [height, setHeight] = useState(initialHeightCm ? String(initialHeightCm) : "");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<{
    heightCm: number; hpb: { min: number; max: number }; who: { min: number; max: number }; hamwi: number;
  } | null>(initialHeightCm ? (() => {
    const hcm = initialHeightCm;
    return { heightCm: hcm, hpb: hpbRange(hcm), who: whoRange(hcm), hamwi: hamwiIdeal(hcm, "female") };
  })() : null);
  const [error, setError] = useState("");
  const [calcSex, setCalcSex] = useState<Sex>("female");

  function calculate() {
    setError("");
    const heightCm =
      unit === "metric"
        ? parseFloat(height)
        : parseFloat(heightFt) * 30.48 + parseFloat(heightIn) * 2.54;

    if (isNaN(heightCm) || heightCm < 100 || heightCm > 250) {
      setError("Please enter a valid height (100–250 cm).");
      return;
    }
    setCalcSex(sex);
    setResult({ heightCm, hpb: hpbRange(heightCm), who: whoRange(heightCm), hamwi: hamwiIdeal(heightCm, sex) });
  }

  return (
    <div>
      {/* Unit toggle */}
      <div className="toggle-group mb-5">
        {(["metric", "imperial"] as const).map((u) => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); }}
            className={`toggle-pill${unit === u ? " active" : ""}`}>
            {u === "metric" ? "Metric (cm)" : "Imperial (ft/in)"}
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

        {unit === "metric" ? (
          <div>
            <label className="form-label">Height (cm)</label>
            <input type="number" min={100} max={250} value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 165"
              className="calc-input" />
          </div>
        ) : (
          <div>
            <label className="form-label">Height (ft / in)</label>
            <div className="flex gap-2">
              <input type="number" min={4} max={8} value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="ft"
                className="calc-input w-1/2" />
              <input type="number" min={0} max={11} value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="in"
                className="calc-input w-1/2" />
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Calculate Ideal Weight
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="rounded-2xl p-5" style={{ background: "var(--color-primary-container)" }}>
            <p className="text-xs font-bold mb-1" style={{ color: "var(--color-primary-dark)" }}>
              HPB Healthy Weight Range (Asian Standard)
            </p>
            <p className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-primary)" }}>
              {result.hpb.min}–{result.hpb.max} kg
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>BMI 18.5–22.9 at {Math.round(result.heightCm)} cm</p>
          </div>

          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-outline-variant)" }}>
            <div className="px-4 py-2.5 text-xs font-bold" style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)" }}>
              Weight Standards Comparison
            </div>
            {[
              { label: "HPB Asian Standard", range: `${result.hpb.min}–${result.hpb.max} kg`, note: "BMI 18.5–22.9" },
              { label: `Hamwi Formula (${calcSex})`, range: `${result.hamwi} kg`, note: "Ideal midpoint" },
              { label: "WHO Global Standard", range: `${result.who.min}–${result.who.max} kg`, note: "BMI 18.5–24.9" },
            ].map((row, i) => (
              <div key={row.label} className="flex items-center justify-between px-4 py-3"
                style={{ background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)", borderBottom: i < 2 ? "1px solid var(--color-outline-variant)" : "none" }}>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-on-surface)" }}>{row.label}</p>
                  <p className="text-xs" style={{ color: "var(--color-neutral)" }}>{row.note}</p>
                </div>
                <p className="text-sm font-bold" style={{ color: "var(--color-primary)" }}>{row.range}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
