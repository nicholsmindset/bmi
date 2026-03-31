"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import StandardToggle from "@/components/ui/StandardToggle";
import ResultGauge from "@/components/ui/ResultGauge";
import ResultBadge from "@/components/ui/ResultBadge";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import {
  calculateBMI,
  classifyBMI,
  lbsToKg,
  ftInToCm,
  ASIAN_CATEGORIES,
  WHO_CATEGORIES,
  type BMICategory,
} from "@/lib/bmi-logic";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

type Standard = "asian" | "who";
type Unit = "metric" | "imperial";

interface BMIResult {
  bmi: number;
  category: BMICategory;
}

export default function BMICalculatorClient({
  showChildrenWarning = false,
}: {
  showChildrenWarning?: boolean;
}) {
  const [standard, setStandard] = useState<Standard>("asian");
  const [unit, setUnit] = useState<Unit>("metric");

  // Metric inputs
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // Imperial inputs
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLbs, setWeightLbs] = useState("");

  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    let h: number, w: number;

    if (unit === "metric") {
      h = parseFloat(heightCm);
      w = parseFloat(weightKg);
    } else {
      h = ftInToCm(parseFloat(heightFt) || 0, parseFloat(heightIn) || 0);
      w = lbsToKg(parseFloat(weightLbs) || 0);
    }

    if (!h || !w || h <= 0 || w <= 0) {
      setError("Please enter valid height and weight values.");
      return;
    }
    if (h < 100 || h > 250) {
      setError("Please enter a height between 100–250 cm.");
      return;
    }
    if (w < 20 || w > 300) {
      setError("Please enter a weight between 20–300 kg.");
      return;
    }

    const bmi = calculateBMI(w, h);
    const category = classifyBMI(bmi, standard);
    setResult({ bmi, category });
  }

  const gaugeSegments =
    standard === "asian"
      ? ASIAN_CATEGORIES.map((c, i) => ({
          label: c.label,
          color: c.color,
          widthPercent: [10, 20, 25, 20, 25][i],
        }))
      : WHO_CATEGORIES.map((c, i) => ({
          label: c.label,
          color: c.color,
          widthPercent: [10, 25, 25, 40][i],
        }));

  const affiliateProducts =
    result && !showChildrenWarning
      ? AFFILIATE_MAP[result.category.affiliateKey] ?? []
      : [];

  return (
    <CalculatorCard accentColor="var(--color-primary)">
      <form onSubmit={handleCalculate} noValidate>
        {/* Toggle row */}
        <div className="flex flex-wrap gap-3 mb-8">
          <StandardToggle
            options={[
              { value: "asian", label: "Asian / Singapore" },
              { value: "who", label: "WHO Global" },
            ]}
            value={standard}
            onChange={(v) => {
              setStandard(v as Standard);
              setResult(null);
            }}
          />
          <StandardToggle
            options={[
              { value: "metric", label: "Metric" },
              { value: "imperial", label: "Imperial" },
            ]}
            value={unit}
            onChange={(v) => {
              setUnit(v as Unit);
              setResult(null);
            }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Height */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                Height
              </label>
              {unit === "metric" ? (
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    placeholder="170"
                    value={heightCm}
                    onChange={(e) => setHeightCm(e.target.value)}
                    className="w-full text-2xl font-bold bg-transparent border-b-2 pb-2 outline-none transition-colors"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: "var(--color-on-surface)",
                      borderColor: "var(--color-outline-variant)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-primary)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-outline-variant)")
                    }
                  />
                  <span
                    className="absolute right-0 bottom-2 text-sm font-medium"
                    style={{ color: "var(--color-neutral)" }}
                  >
                    cm
                  </span>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="5"
                      value={heightFt}
                      onChange={(e) => setHeightFt(e.target.value)}
                      className="w-full text-2xl font-bold bg-transparent border-b-2 pb-2 outline-none"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        color: "var(--color-on-surface)",
                        borderColor: "var(--color-outline-variant)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-primary)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-outline-variant)")
                      }
                    />
                    <span
                      className="absolute right-0 bottom-2 text-sm font-medium"
                      style={{ color: "var(--color-neutral)" }}
                    >
                      ft
                    </span>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      inputMode="decimal"
                      placeholder="7"
                      value={heightIn}
                      onChange={(e) => setHeightIn(e.target.value)}
                      className="w-full text-2xl font-bold bg-transparent border-b-2 pb-2 outline-none"
                      style={{
                        fontFamily: "var(--font-manrope)",
                        color: "var(--color-on-surface)",
                        borderColor: "var(--color-outline-variant)",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-primary)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "var(--color-outline-variant)")
                      }
                    />
                    <span
                      className="absolute right-0 bottom-2 text-sm font-medium"
                      style={{ color: "var(--color-neutral)" }}
                    >
                      in
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Weight */}
            <div>
              <label
                className="block text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-on-surface-variant)" }}
              >
                Weight
              </label>
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  placeholder={unit === "metric" ? "65" : "143"}
                  value={unit === "metric" ? weightKg : weightLbs}
                  onChange={(e) =>
                    unit === "metric"
                      ? setWeightKg(e.target.value)
                      : setWeightLbs(e.target.value)
                  }
                  className="w-full text-2xl font-bold bg-transparent border-b-2 pb-2 outline-none transition-colors"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "var(--color-on-surface)",
                    borderColor: "var(--color-outline-variant)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-outline-variant)")
                  }
                />
                <span
                  className="absolute right-0 bottom-2 text-sm font-medium"
                  style={{ color: "var(--color-neutral)" }}
                >
                  {unit === "metric" ? "kg" : "lbs"}
                </span>
              </div>
            </div>

            {error && (
              <p className="text-sm" style={{ color: "var(--color-error)" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white text-base font-bold transition-opacity hover:opacity-90 active:scale-[0.99]"
              style={{
                background: "var(--color-primary)",
                fontFamily: "var(--font-manrope)",
              }}
            >
              Calculate BMI
            </button>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-center">
            {result ? (
              <div className="animate-fadeSlideUp space-y-6">
                <div className="text-center">
                  <p
                    className="text-6xl font-extrabold mb-1"
                    style={{
                      fontFamily: "var(--font-manrope)",
                      color: result.category.color,
                    }}
                  >
                    {result.bmi}
                  </p>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "var(--color-on-surface-variant)" }}
                  >
                    Your BMI
                  </p>
                  <ResultBadge
                    label={result.category.label}
                    category={result.category.cls as Parameters<typeof ResultBadge>[0]["category"]}
                  />
                </div>

                <ResultGauge
                  segments={gaugeSegments}
                  needlePosition={result.category.gaugePos}
                  show={true}
                />

                <div
                  className="rounded-xl p-4 text-sm space-y-1"
                  style={{ background: "var(--color-surface-container)" }}
                >
                  <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>
                    {standard === "asian" ? "HPB Asian" : "WHO"} healthy range
                  </p>
                  <p style={{ color: "var(--color-on-surface-variant)" }}>
                    BMI {standard === "asian" ? "18.5 – 22.9" : "18.5 – 24.9"} for your height
                  </p>
                </div>

                {/* Singapore-specific context note */}
                {standard === "asian" && (
                  <p className="text-xs text-center px-2" style={{ color: "var(--color-neutral)" }}>
                    {result.category.cls === "healthy"
                      ? "Only 32% of Singaporeans fall in the HPB healthy range (MOH 2024)"
                      : result.category.cls === "overweight"
                      ? "35% of Singaporeans are overweight by HPB's BMI ≥23.0 standard"
                      : result.category.cls === "underweight"
                      ? "Using the HPB threshold — Singapore&apos;s standard for Asian body types"
                      : "Singapore&apos;s HPB uses BMI ≥27.5 for obesity vs WHO&apos;s ≥30.0"}
                  </p>
                )}
              </div>
            ) : (
              <div
                className="text-center rounded-2xl p-8"
                style={{ background: "var(--color-surface-container)" }}
              >
                <p
                  className="text-5xl font-extrabold mb-2"
                  style={{
                    fontFamily: "var(--font-manrope)",
                    color: "var(--color-outline-variant)",
                  }}
                >
                  —
                </p>
                <p className="text-sm" style={{ color: "var(--color-neutral)" }}>
                  Enter your details to see your BMI
                </p>
              </div>
            )}
          </div>
        </div>
      </form>

      {/* Affiliate cards — only after result, never on children pages */}
      {result && affiliateProducts.length > 0 && (
        <AffiliateGrid products={affiliateProducts} />
      )}
    </CalculatorCard>
  );
}
