"use client";

import { useState } from "react";

type Sex = "male" | "female";

function getRisk(ratio: number, sex: Sex): { label: string; cls: string; desc: string } {
  const threshold = sex === "female" ? 4.0 : 4.5;
  if (ratio < 3.5) return { label: "Optimal", cls: "success", desc: "Very low cardiovascular risk. Keep up the healthy lifestyle." };
  if (ratio < threshold) return { label: "Desirable", cls: "success", desc: "Low cardiovascular risk. Within Singapore HPB healthy range." };
  if (ratio < 5.0) return { label: "Borderline High", cls: "warning", desc: "Moderately elevated risk. Review diet and exercise habits." };
  if (ratio < 6.0) return { label: "High", cls: "danger", desc: "Elevated cardiovascular risk. Consult your doctor or polyclinic." };
  return { label: "Very High", cls: "danger", desc: "High cardiovascular risk. Medical consultation strongly advised." };
}

const RISK_COLORS: Record<string, string> = {
  success: "#1B5E20",
  warning: "#E65100",
  danger: "#BA1A1A",
};

const RISK_BG: Record<string, string> = {
  success: "#E8F5E9",
  warning: "#FFF3E0",
  danger: "#FFEBEE",
};

export default function CholesterolClient() {
  const [sex, setSex] = useState<Sex>("male");
  const [totalCholesterol, setTotalCholesterol] = useState("");
  const [hdl, setHdl] = useState("");
  const [ldl, setLdl] = useState("");
  const [triglycerides, setTriglycerides] = useState("");
  const [result, setResult] = useState<{
    ratio: number; risk: ReturnType<typeof getRisk>; ldlCalc?: number;
    nonHdl?: number;
  } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    const tc = parseFloat(totalCholesterol);
    const hdlN = parseFloat(hdl);
    if (isNaN(tc) || isNaN(hdlN) || tc <= 0 || hdlN <= 0 || hdlN >= tc) {
      setError("Please enter valid total cholesterol and HDL values. HDL must be less than total.");
      return;
    }

    const ratio = Math.round((tc / hdlN) * 100) / 100;
    const risk = getRisk(ratio, sex);
    const trig = parseFloat(triglycerides);
    const ldlInput = parseFloat(ldl);

    // Friedewald equation if LDL not provided but triglycerides available
    let ldlCalc: number | undefined;
    if (!isNaN(trig) && trig > 0 && isNaN(ldlInput)) {
      ldlCalc = Math.round((tc - hdlN - trig / 5) * 10) / 10;
    }
    const nonHdl = Math.round((tc - hdlN) * 10) / 10;

    setResult({ ratio, risk, ldlCalc: !isNaN(ldlInput) ? ldlInput : ldlCalc, nonHdl });
  }

  return (
    <div>
      <div className="mb-4">
        <label className="form-label">Sex</label>
        <div className="flex gap-2">
          {(["male", "female"] as Sex[]).map((s) => (
            <button key={s} onClick={() => setSex(s)}
              className={`sex-btn${sex === s ? " active" : ""}`}>
              {s === "male" ? "Male" : "Female"}
            </button>
          ))}
        </div>
        <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>HPB targets differ: &lt;4.5 (men), &lt;4.0 (women)</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-5">
        {[
          { label: "Total Cholesterol (mmol/L)", value: totalCholesterol, setter: setTotalCholesterol, placeholder: "e.g. 5.2", required: true },
          { label: "HDL Cholesterol (mmol/L)", value: hdl, setter: setHdl, placeholder: "e.g. 1.3", required: true },
          { label: "LDL Cholesterol (mmol/L)", value: ldl, setter: setLdl, placeholder: "e.g. 3.2 (optional)", required: false },
          { label: "Triglycerides (mmol/L)", value: triglycerides, setter: setTriglycerides, placeholder: "e.g. 1.5 (optional)", required: false },
        ].map(({ label, value, setter, placeholder, required }) => (
          <div key={label}>
            <label className="form-label">
              {label} {required && <span style={{ color: "var(--color-error)" }}>*</span>}
            </label>
            <input type="number" step="0.1" min={0} value={value} onChange={(e) => setter(e.target.value)} placeholder={placeholder}
              className="calc-input" />
          </div>
        ))}
      </div>

      {error && <p className="text-sm mb-3" style={{ color: "var(--color-error)" }}>{error}</p>}

      <button onClick={calculate} className="calc-btn">
        Check Cholesterol Ratio
      </button>

      {result && (
        <div className="mt-6 space-y-4 animate-fadeSlideUp">
          <div className="rounded-2xl p-5 text-center" style={{ background: RISK_BG[result.risk.cls] }}>
            <p className="text-5xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: RISK_COLORS[result.risk.cls] }}>
              {result.ratio}
            </p>
            <p className="text-sm font-bold mt-1" style={{ color: RISK_COLORS[result.risk.cls] }}>
              TC/HDL Ratio · {result.risk.label}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-neutral)" }}>{result.risk.desc}</p>
          </div>

          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--color-outline-variant)" }}>
            {[
              { label: "TC/HDL Ratio", value: result.ratio, target: sex === "female" ? "< 4.0" : "< 4.5" },
              ...(result.nonHdl !== undefined ? [{ label: "Non-HDL Cholesterol", value: `${result.nonHdl} mmol/L`, target: "< 3.8" }] : []),
              ...(result.ldlCalc !== undefined ? [{ label: "LDL Cholesterol", value: `${result.ldlCalc} mmol/L`, target: "< 3.0" }] : []),
            ].map((row, i, arr) => (
              <div key={row.label} className="flex items-center justify-between px-4 py-3 text-sm"
                style={{ background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-container)", borderBottom: i < arr.length - 1 ? "1px solid var(--color-outline-variant)" : "none" }}>
                <div>
                  <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>{row.label}</p>
                  <p className="text-xs" style={{ color: "var(--color-neutral)" }}>HPB target: {row.target}</p>
                </div>
                <p className="font-bold" style={{ color: "var(--color-primary)" }}>{row.value}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-4 text-xs space-y-1" style={{ background: "#FFF3E0", color: "#7F3F00" }}>
            <p className="font-semibold">⚠️ Medical Disclaimer</p>
            <p>This tool is for informational purposes only. Cholesterol levels must be interpreted in context with other risk factors by a licensed medical professional. Consult your GP or polyclinic for a complete cardiovascular risk assessment.</p>
          </div>
        </div>
      )}
    </div>
  );
}
