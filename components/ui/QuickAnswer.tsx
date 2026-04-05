interface QuickAnswerProps {
  answer: string;
  bullets: string[];
  source?: string;
}

export default function QuickAnswer({ answer, bullets, source }: QuickAnswerProps) {
  return (
    <aside
      className="rounded-2xl px-5 py-4 mb-6"
      style={{
        background: "var(--color-primary-light)",
        borderLeft: "4px solid var(--color-primary)",
      }}
    >
      <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--color-primary)" }}>
        Quick Answer
      </p>
      <p className="text-sm font-medium mb-3" style={{ color: "var(--color-on-surface)", lineHeight: 1.6 }}>
        {answer}
      </p>
      <ul className="space-y-1 mb-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <span style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }}>•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {source && (
        <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>
          Source: {source}
        </p>
      )}
    </aside>
  );
}
