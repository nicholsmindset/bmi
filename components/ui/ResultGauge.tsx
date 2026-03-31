"use client";

interface GaugeSegment {
  label: string;
  color: string;
  widthPercent: number;
}

interface ResultGaugeProps {
  segments: GaugeSegment[];
  needlePosition: number; // 0–100
  show: boolean;
}

export default function ResultGauge({
  segments,
  needlePosition,
  show,
}: ResultGaugeProps) {
  return (
    <div className="w-full">
      {/* Labels */}
      <div className="flex justify-between mb-1">
        {segments.map((seg) => (
          <span
            key={seg.label}
            className="text-[10px] font-bold uppercase tracking-wide"
            style={{
              color: "var(--color-on-surface-variant)",
              flex: `0 0 ${seg.widthPercent}%`,
              textAlign: "center",
            }}
          >
            {seg.label}
          </span>
        ))}
      </div>

      {/* Segments bar */}
      <div className="relative flex h-3 w-full overflow-hidden rounded-full">
        {segments.map((seg, i) => (
          <div
            key={seg.label}
            style={{
              width: `${seg.widthPercent}%`,
              background: seg.color,
              borderRadius:
                i === 0
                  ? "9999px 0 0 9999px"
                  : i === segments.length - 1
                  ? "0 9999px 9999px 0"
                  : undefined,
            }}
          />
        ))}

        {/* Needle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-1 h-5 rounded-full transition-all duration-500"
          style={{
            left: show ? `${needlePosition}%` : "0%",
            opacity: show ? 1 : 0,
            background: "var(--color-on-surface)",
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            transform: `translateX(-50%) translateY(-50%)`,
          }}
        />
      </div>
    </div>
  );
}
