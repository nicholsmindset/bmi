"use client";

type BadgeCategory =
  | "underweight"
  | "healthy"
  | "overweight"
  | "obese1"
  | "obese2"
  | "low"
  | "moderate"
  | "high"
  | "normal"
  | "elevated"
  | "default";

interface ResultBadgeProps {
  label: string;
  category: BadgeCategory;
}

const CATEGORY_STYLES: Record<BadgeCategory, { bg: string; text: string }> = {
  underweight: { bg: "#DBEAFE", text: "#1D4ED8" },
  healthy:     { bg: "#D1FAE5", text: "#065F46" },
  normal:      { bg: "#D1FAE5", text: "#065F46" },
  low:         { bg: "#D1FAE5", text: "#065F46" },
  overweight:  { bg: "#FFEDD5", text: "#C2410C" },
  moderate:    { bg: "#FFEDD5", text: "#C2410C" },
  elevated:    { bg: "#FFEDD5", text: "#C2410C" },
  obese1:      { bg: "#FEE2E2", text: "#B91C1C" },
  obese2:      { bg: "#FCE7F3", text: "#9D174D" },
  high:        { bg: "#FEE2E2", text: "#B91C1C" },
  default:     { bg: "var(--color-surface-container)", text: "var(--color-on-surface-variant)" },
};

function Icon({ category }: { category: BadgeCategory }) {
  if (category === "healthy" || category === "normal" || category === "low") {
    return (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
        <path d="M13.5 3L6 10.5 2.5 7 1 8.5l5 5 9-9-1.5-1.5z" />
      </svg>
    );
  }
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1L1 14h14L8 1zm0 2.5L13.2 13H2.8L8 3.5zM7 7v3h2V7H7zm0 4v2h2v-2H7z" />
    </svg>
  );
}

export default function ResultBadge({ label, category }: ResultBadgeProps) {
  const styles = CATEGORY_STYLES[category] ?? CATEGORY_STYLES.default;

  return (
    <span
      key={label}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold animate-fadeSlideUp"
      style={{
        background: styles.bg,
        color: styles.text,
      }}
    >
      <Icon category={category} />
      {label}
    </span>
  );
}
