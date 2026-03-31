import { ReactNode } from "react";

interface CalculatorCardProps {
  children: ReactNode;
  accentColor?: string;
}

export default function CalculatorCard({
  children,
  accentColor,
}: CalculatorCardProps) {
  return (
    <div
      style={{
        background: "linear-gradient(160deg, #ffffff 0%, #f8f6ff 100%)",
        border: "1px solid rgba(160, 150, 210, 0.22)",
        borderTop: accentColor ? `3px solid ${accentColor}` : "1px solid rgba(160, 150, 210, 0.22)",
        borderRadius: 20,
        padding: "2rem",
        boxShadow: "0 4px 24px rgba(100, 80, 180, 0.07)",
      }}
    >
      {children}
    </div>
  );
}
