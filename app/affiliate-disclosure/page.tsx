import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — bmicalculatorsingapore.com",
  description: "Affiliate disclosure for bmicalculatorsingapore.com. We earn commissions from qualifying purchases through affiliate links at no extra cost to you.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/affiliate-disclosure" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "31 March 2026";

const PARTNERS = [
  {
    name: "iHerb",
    commission: "Up to 10%",
    notes: "Health supplements, vitamins, protein powders, and wellness products. Commission earned on qualifying purchases made through our links.",
  },
  {
    name: "Amazon Singapore",
    commission: "Up to 4–8%",
    notes: "Health monitoring devices (scales, blood pressure monitors), fitness equipment, and health products. We participate in the Amazon Associates programme. Our Amazon affiliate tag is robertnicho0a-20.",
  },
  {
    name: "Lazada Singapore",
    commission: "Up to 6.5%",
    notes: "Health and wellness products including smart scales, fitness trackers, and supplements.",
  },
  {
    name: "Shopee Singapore",
    commission: "Up to 5%",
    notes: "Health and wellness products including kitchen scales, fitness equipment, and dietary products.",
  },
];

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
      >
        Affiliate Disclosure
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-neutral)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <div
        className="rounded-2xl p-5 mb-10"
        style={{
          background: "var(--color-primary-light)",
          border: "1px solid var(--color-primary-container)",
          color: "var(--color-on-surface-variant)",
        }}
      >
        <p className="text-sm leading-relaxed">
          bmicalculatorsingapore.com participates in affiliate marketing programmes. This means we may earn a
          commission when you click an affiliate link and make a qualifying purchase —{" "}
          <strong style={{ color: "var(--color-on-surface)" }}>at no additional cost to you</strong>.
          Affiliate commissions help us keep all calculators free and ad-supported for everyone.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            1. What Is Affiliate Marketing?
          </h2>
          <p>
            Affiliate marketing is a performance-based arrangement where a website (bmicalculatorsingapore.com)
            earns a commission by promoting products or services of another company. When you click a
            specially tracked link on our site and complete a purchase, we receive a small percentage
            of the sale. The price you pay is not affected in any way.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            2. Our Affiliate Partners
          </h2>
          <div className="space-y-4">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="rounded-xl p-4"
                style={{
                  background: "var(--color-surface-container)",
                  border: "1px solid var(--color-outline-variant)",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-sm" style={{ color: "var(--color-on-surface)" }}>
                    {p.name}
                  </p>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: "var(--color-secondary-container)", color: "var(--color-secondary-dark)" }}
                  >
                    {p.commission}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                  {p.notes}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            3. How We Identify Affiliate Links
          </h2>
          <p className="mb-3">
            Affiliate links on this website are marked with{" "}
            <code
              className="px-1.5 py-0.5 rounded text-xs font-mono"
              style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface)" }}
            >
              rel=&quot;nofollow noopener sponsored&quot;
            </code>{" "}
            in the HTML, in accordance with Google&apos;s guidelines for affiliate links. Product
            recommendation sections are labelled &ldquo;Recommended products&rdquo; and appear after
            calculator results, never as unsolicited pop-ups or pre-calculation gates.
          </p>
          <p>
            A note in the footer of every page reads: &ldquo;This site earns commissions from affiliate
            links at no extra cost to you.&rdquo;
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            4. Editorial Independence
          </h2>
          <p className="mb-3">
            Affiliate relationships do not influence our health information, calculator methodologies,
            or editorial content. We do not endorse specific products based on commission rates. Product
            suggestions are chosen for relevance to the calculator result — for example, a blood pressure
            monitor recommendation appears only after a blood pressure check, not across the entire site.
          </p>
          <p>
            We follow Singapore&apos;s HPB and MOH standards for all health information regardless of
            any affiliate partnership.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            5. Amazon Associates Disclosure
          </h2>
          <p>
            bmicalculatorsingapore.com is a participant in the Amazon Associates Programme, an affiliate
            advertising programme designed to provide a means for sites to earn advertising fees by
            advertising and linking to Amazon.sg. Our Amazon affiliate tag is{" "}
            <strong style={{ color: "var(--color-on-surface)" }}>robertnicho0a-20</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            6. No Additional Cost to You
          </h2>
          <p>
            Clicking an affiliate link or purchasing through it does not increase the price you pay.
            In some cases, affiliate links may provide access to discount codes or promotions (for
            example, iHerb first-order discounts). We do not receive payment for featuring specific
            products — commissions are earned only when a qualifying purchase is completed.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            7. Questions
          </h2>
          <p>
            If you have any questions about our affiliate relationships or how we select products to
            recommend, please contact us at{" "}
            <strong style={{ color: "var(--color-on-surface)" }}>hello@bmicalculatorsingapore.com</strong>.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-6" style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
        <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
          See also:{" "}
          <Link href="/privacy" style={{ color: "var(--color-primary)" }} className="underline">Privacy Policy</Link>
          {" · "}
          <Link href="/medical-disclaimer" style={{ color: "var(--color-primary)" }} className="underline">Medical Disclaimer</Link>
        </p>
      </div>
    </article>
  );
}
