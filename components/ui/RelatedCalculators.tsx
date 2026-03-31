import Link from "next/link";

interface RelatedItem {
  name: string;
  tagline: string;
  href: string;
  iconPath?: string; // unused — kept for backwards compat
  accent?: string;   // unused — kept for backwards compat
}

interface RelatedCalculatorsProps {
  items: RelatedItem[];
  title?: string;
}

export default function RelatedCalculators({
  items,
  title = "Related Calculators",
}: RelatedCalculatorsProps) {
  return (
    <div className="mt-8">
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: "1px solid var(--color-outline-variant)" }}
      >
        <div
          className="px-4 py-3"
          style={{
            background: "var(--color-surface-container)",
            borderBottom: "1px solid var(--color-outline-variant)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-neutral)" }}>
            {title}
          </p>
        </div>
        <div
          className="divide-y bg-white"
          style={{ borderColor: "var(--color-outline-variant)" }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between px-4 py-3 group"
            >
              <div>
                <p
                  className="text-sm font-medium group-hover:underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.name}
                </p>
                <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                  {item.tagline}
                </p>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--color-outline)", flexShrink: 0, marginLeft: 12 }}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
