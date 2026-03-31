"use client";

interface ToggleOption {
  value: string;
  label: string;
}

interface StandardToggleProps {
  options: ToggleOption[];
  value: string;
  onChange: (value: string) => void;
  size?: "sm" | "md";
}

export default function StandardToggle({
  options,
  value,
  onChange,
  size = "md",
}: StandardToggleProps) {
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  const padding = size === "sm" ? "px-3 py-1" : "px-4 py-2";

  return (
    <div
      className="flex gap-1 p-1 rounded-full"
      style={{ background: "var(--color-surface-container)" }}
    >
      {options.map((opt) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`${padding} ${textSize} font-semibold rounded-full transition-all`}
            style={
              isActive
                ? {
                    background: "var(--color-primary)",
                    color: "#fff",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  }
                : {
                    color: "var(--color-on-surface-variant)",
                  }
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
