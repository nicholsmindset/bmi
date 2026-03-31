"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import StandardToggle from "@/components/ui/StandardToggle";
import { AffiliateGrid } from "@/components/ui/AffiliateCard";
import { AFFILIATE_MAP } from "@/lib/affiliate-products";

const SLEEP_LATENCY = 14; // minutes to fall asleep
const CYCLE_MIN = 90;     // minutes per sleep cycle

type Mode = "bedtime" | "wakeup";
type AgeGroup = "adult" | "senior";

interface SleepOption {
  time: string;
  cycles: number;
  hours: number;
  quality: "poor" | "ok" | "good" | "best";
}

function toMinutes(h: number, m: number): number {
  return h * 60 + m;
}

function formatTime(totalMinutes: number): string {
  // Normalise to 0–1439
  const t = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(t / 60);
  const m = t % 60;
  const suffix = h < 12 ? "AM" : "PM";
  const displayH = h % 12 === 0 ? 12 : h % 12;
  return `${displayH}:${String(m).padStart(2, "0")} ${suffix}`;
}

function parseTimeInput(val: string): number | null {
  // val is "HH:MM" from <input type="time">
  const parts = val.split(":");
  if (parts.length !== 2) return null;
  const h = parseInt(parts[0]);
  const m = parseInt(parts[1]);
  if (isNaN(h) || isNaN(m)) return null;
  return h * 60 + m;
}

function qualityLabel(cycles: number): { quality: SleepOption["quality"]; label: string; color: string } {
  if (cycles <= 4) return { quality: "poor", label: "Too little sleep", color: "#D84315" };
  if (cycles === 5) return { quality: "ok",   label: "Minimum recommended", color: "#F57C00" };
  if (cycles === 6) return { quality: "good", label: "Recommended",          color: "#2E7D32" };
  return            { quality: "best",         label: "Optimal",              color: "#005EB8" };
}

function computeSleepOptions(targetMinutes: number, mode: Mode): SleepOption[] {
  const options: SleepOption[] = [];
  for (let cycles = 4; cycles <= 7; cycles++) {
    const totalSleepMin = cycles * CYCLE_MIN + SLEEP_LATENCY;
    let result: number;
    if (mode === "bedtime") {
      // User wants to wake at targetMinutes → subtract to find bedtime
      result = targetMinutes - totalSleepMin;
    } else {
      // User wants to sleep at targetMinutes → add to find wake-up
      result = targetMinutes + totalSleepMin;
    }
    options.push({
      time: formatTime(result),
      cycles,
      hours: parseFloat((cycles * CYCLE_MIN / 60).toFixed(1)),
      quality: qualityLabel(cycles).quality,
    });
  }
  // Bedtime: reverse so largest (most sleep) comes first
  return mode === "bedtime" ? [...options].reverse() : options;
}

export default function SleepCalculatorClient({ defaultMode = "bedtime" }: { defaultMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const [ageGroup, setAgeGroup] = useState<AgeGroup>("adult");
  const [timeValue, setTimeValue] = useState("");
  const [options, setOptions] = useState<SleepOption[] | null>(null);

  const recommended = ageGroup === "senior" ? "7–8 hours" : "7–9 hours";

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const mins = parseTimeInput(timeValue);
    if (mins === null) return;
    setOptions(computeSleepOptions(mins, mode));
  }

  const modeLabel = mode === "bedtime"
    ? "I want to wake up at…"
    : "I plan to fall asleep at…";

  const resultLabel = mode === "bedtime" ? "Bedtime options" : "Wake-up options";
  const showSleepAffiliate = options !== null && options.some(o => o.cycles <= 4);

  return (
    <CalculatorCard accentColor="var(--color-calc-sleep)">
      <form onSubmit={handleCalculate} noValidate>
        {/* Mode + age toggles */}
        <div className="flex flex-wrap gap-3 mb-8">
          <StandardToggle
            options={[
              { value: "bedtime", label: "Find bedtime" },
              { value: "wakeup",  label: "Find wake-up" },
            ]}
            value={mode}
            onChange={(v) => { setMode(v as Mode); setOptions(null); }}
          />
          <StandardToggle
            options={[
              { value: "adult",  label: "Adult (18–64)" },
              { value: "senior", label: "Senior (65+)" },
            ]}
            value={ageGroup}
            onChange={(v) => { setAgeGroup(v as AgeGroup); setOptions(null); }}
          />
        </div>

        <div className="space-y-5 max-w-sm">
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-on-surface-variant)" }}
            >
              {modeLabel}
            </label>
            <input
              type="time"
              value={timeValue}
              onChange={(e) => { setTimeValue(e.target.value); setOptions(null); }}
              required
              className="w-full bg-transparent border-b-2 pb-2 outline-none font-bold text-xl transition-colors"
              style={{
                fontFamily: "var(--font-manrope)",
                color: "var(--color-on-surface)",
                borderColor: "var(--color-outline-variant)",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-calc-sleep)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-outline-variant)")}
            />
          </div>

          <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
            Recommendation for {ageGroup === "adult" ? "adults 18–64" : "seniors 65+"}: <strong>{recommended}</strong> (NSF)
          </p>

          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
            style={{ background: "var(--color-calc-sleep)", fontFamily: "var(--font-manrope)" }}
          >
            Calculate
          </button>
        </div>
      </form>

      {/* Results */}
      {options && (
        <div className="animate-fadeSlideUp mt-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
            {resultLabel} <span className="normal-case font-normal">(includes {SLEEP_LATENCY} min to fall asleep)</span>
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {options.map((opt) => {
              const { label, color } = qualityLabel(opt.cycles);
              const isBest = opt.cycles === 6 || opt.cycles === 7;
              return (
                <div
                  key={opt.cycles}
                  className="rounded-2xl p-4 border-2 transition-all"
                  style={{
                    background: isBest ? "var(--color-surface-container)" : "transparent",
                    borderColor: isBest ? "var(--color-calc-sleep)" : "var(--color-outline-variant)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-2xl font-extrabold" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-calc-sleep)" }}>
                      {opt.time}
                    </p>
                    {isBest && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: "var(--color-calc-sleep)", color: "#fff" }}
                      >
                        Best
                      </span>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                    {opt.cycles} cycles · {opt.hours}h sleep
                  </p>
                  <p className="text-xs font-medium mt-1" style={{ color }}>
                    {label}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="rounded-xl p-4 text-sm"
            style={{ background: "var(--color-primary-container)" }}
          >
            <p style={{ color: "var(--color-primary-dark)" }}>
              <strong>How it works:</strong> Each sleep cycle lasts ~90 minutes. Waking at the end of a cycle
              (rather than mid-cycle) helps you feel refreshed. We add {SLEEP_LATENCY} minutes for the time it
              typically takes to fall asleep.
            </p>
          </div>

          {showSleepAffiliate && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
                Improve your sleep quality
              </p>
              <AffiliateGrid products={AFFILIATE_MAP["sleep_poor"] ?? []} />
            </div>
          )}
        </div>
      )}
    </CalculatorCard>
  );
}
