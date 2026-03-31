type DisclaimerContext =
  | "bmi"
  | "blood-pressure"
  | "cholesterol"
  | "calorie-deficit"
  | "general";

interface MedicalDisclaimerProps {
  context?: DisclaimerContext;
}

const MESSAGES: Record<DisclaimerContext, string> = {
  bmi: "BMI is a screening tool, not a diagnostic measure. It does not account for muscle mass, bone density, or fat distribution. Results may not reflect health status for athletes, elderly, or pregnant individuals.",
  "blood-pressure":
    "This checker is for reference only and does not constitute a medical diagnosis. High blood pressure readings require confirmation by a healthcare professional. Do not self-diagnose or alter medication based on this tool.",
  cholesterol:
    "Cholesterol ratios are for informational purposes only. Cardiovascular risk depends on many factors. Consult a doctor before making any changes to diet, medication, or lifestyle.",
  "calorie-deficit":
    "Calorie targets are estimates based on population averages. Individual metabolic rates vary. Do not reduce calories below 1,200/day (women) or 1,500/day (men) without medical supervision.",
  general:
    "This calculator provides estimates for informational purposes only. Results vary by individual. Consult a qualified healthcare professional for personalised medical advice.",
};

export default function MedicalDisclaimer({
  context = "general",
}: MedicalDisclaimerProps) {
  return (
    <div
      className="flex gap-3 p-4 rounded-xl border-l-4 text-sm"
      style={{
        background: "#FFFDE7",
        borderLeftColor: "#F57C00",
        color: "#5D4037",
      }}
    >
      <svg
        className="flex-shrink-0 mt-0.5"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="#F57C00"
      >
        <path d="M12 2L1 21h22L12 2zm0 3.5L20.5 19H3.5L12 5.5zM11 10v5h2v-5h-2zm0 6v2h2v-2h-2z" />
      </svg>
      <div>
        <p className="font-semibold mb-1">Medical disclaimer</p>
        <p>{MESSAGES[context]}</p>
        <p className="mt-1 font-medium">
          Always consult a qualified healthcare professional for personalised advice.
        </p>
      </div>
    </div>
  );
}
