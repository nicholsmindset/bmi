import { ReactNode } from "react";
import Link from "next/link";

interface RelatedLink {
  href: string;
  label: string;
}

interface CalculatorSectionProps {
  children: ReactNode;
  title: string;
  badge?: string;
  description?: string;
  /** Content rendered in the right sidebar on desktop */
  sidebar?: ReactNode;
  /** Quick links shown in the sidebar below any sidebar content */
  relatedLinks?: RelatedLink[];
  /** True for medically-sensitive pages — adds HPB medical disclaimer callout */
  isMedical?: boolean;
}

export default function CalculatorSection({
  children,
  title,
  badge,
  description,
  sidebar,
  relatedLinks,
  isMedical,
}: CalculatorSectionProps) {
  const hasSidebar = sidebar || (relatedLinks && relatedLinks.length > 0);

  return (
    <div style={{ background: "#F8F9FC", minHeight: "100vh" }}>
      {/* Page header */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--color-outline-variant)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          {badge && (
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              {badge}
            </p>
          )}
          <h1
            className="text-2xl sm:text-3xl font-extrabold mb-2"
            style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="text-sm max-w-2xl"
              style={{ color: "var(--color-on-surface-variant)", lineHeight: "1.7" }}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {hasSidebar ? (
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Main — calculator + content */}
            <div className="min-w-0">{children}</div>

            {/* Sidebar */}
            <aside className="space-y-4">
              {sidebar}

              {relatedLinks && relatedLinks.length > 0 && (
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid var(--color-outline-variant)", background: "#fff" }}
                >
                  <div
                    className="px-4 py-3"
                    style={{
                      borderBottom: "1px solid var(--color-outline-variant)",
                      background: "var(--color-surface-container)",
                    }}
                  >
                    <p
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--color-neutral)" }}
                    >
                      Related Calculators
                    </p>
                  </div>
                  <div className="divide-y" style={{ borderColor: "var(--color-outline-variant)" }}>
                    {relatedLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 text-sm group"
                        style={{ color: "var(--color-primary)" }}
                      >
                        <span className="group-hover:underline font-medium">{link.label}</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ color: "var(--color-outline)" }}
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {isMedical && (
                <div
                  className="rounded-xl p-4 text-xs"
                  style={{
                    background: "#FFF8E1",
                    border: "1px solid #FFE082",
                    color: "#5D4037",
                    lineHeight: "1.6",
                  }}
                >
                  <p className="font-bold mb-1">Medical Disclaimer</p>
                  <p>
                    This calculator is for informational purposes only. Results do not constitute medical
                    advice. Consult a qualified healthcare professional for diagnosis and treatment.
                  </p>
                </div>
              )}
            </aside>
          </div>
        ) : (
          <div className="max-w-3xl">{children}</div>
        )}
      </div>
    </div>
  );
}
