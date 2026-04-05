import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Singapore Health Calculators",
  description: "Privacy policy for our Singapore health calculator suite. Learn how we collect, use, and protect your information in compliance with Singapore's PDPA.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "31 March 2026";

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
      >
        Privacy Policy
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-neutral)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            1. Who We Are
          </h2>
          <p>
            bmicalculatorsingapore.com (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at{" "}
            <strong>https://www.bmicalculatorsingapore.com</strong>, a free Singapore health calculator suite built on
            Health Promotion Board (HPB) Asian standards. This Privacy Policy explains how we handle
            information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            2. Information We Collect
          </h2>
          <p className="mb-3">
            <strong style={{ color: "var(--color-on-surface)" }}>Calculator inputs:</strong> All
            calculations (BMI, calorie, sleep, etc.) are performed entirely in your browser. We do{" "}
            <strong>not</strong> transmit, store, or log any health data you enter into our calculators.
            Your numbers never leave your device.
          </p>
          <p className="mb-3">
            <strong style={{ color: "var(--color-on-surface)" }}>Analytics data:</strong> We use Google
            Analytics 4 (GA4) to collect anonymised usage data including page views, session duration,
            device type, and approximate geographic location (country/city level). This data is aggregated
            and cannot identify you personally.
          </p>
          <p>
            <strong style={{ color: "var(--color-on-surface)" }}>Cookies:</strong> We use first-party
            cookies for analytics and third-party cookies served by Google AdSense and Google Analytics.
            You can manage or disable cookies through your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            3. Google AdSense &amp; Advertising
          </h2>
          <p className="mb-3">
            We display advertisements through Google AdSense. Google may use cookies and web beacons to
            serve personalised ads based on your browsing activity across websites. Google&apos;s advertising
            practices are governed by the{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              className="underline"
            >
              Google Privacy Policy
            </a>
            .
          </p>
          <p>
            You can opt out of personalised advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              className="underline"
            >
              Google Ad Settings
            </a>{" "}
            or by using the{" "}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              className="underline"
            >
              Network Advertising Initiative opt-out tool
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            4. Affiliate Links
          </h2>
          <p>
            Some pages on bmicalculatorsingapore.com contain affiliate links to third-party retailers including
            iHerb, Amazon Singapore, Lazada, and Shopee. When you click an affiliate link and make a
            purchase, we may earn a commission at no additional cost to you. These third-party websites
            have their own privacy policies which govern any data you provide to them. We are not
            responsible for their data practices. Please see our{" "}
            <a href="/affiliate-disclosure" style={{ color: "var(--color-primary)" }} className="underline">
              Affiliate Disclosure
            </a>{" "}
            for full details.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            5. How We Use Information
          </h2>
          <ul className="space-y-2">
            {[
              "To understand how visitors use our website and improve our calculators",
              "To measure the effectiveness of our content and identify popular pages",
              "To serve relevant advertisements through Google AdSense",
              "To comply with legal obligations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-primary)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            6. Data Sharing &amp; Third Parties
          </h2>
          <p className="mb-3">
            We do not sell, rent, or trade your personal information to third parties. We share
            anonymised analytics data with Google Analytics and ad impression data with Google AdSense
            solely for the purposes described above.
          </p>
          <p>
            We may disclose information if required by Singapore law or a valid legal process, or to
            protect the rights, property, or safety of our users or the public.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            7. Data Retention
          </h2>
          <p>
            As we do not collect personal data directly, we have no personal data to retain. Anonymised
            analytics data is retained by Google Analytics for 14 months by default and governed by
            Google&apos;s data retention policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            8. Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed at children under the age of 13. We do not knowingly collect
            personal information from children. Our children&apos;s BMI calculator pages include
            appropriate health messaging and do not display weight-loss affiliate products.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            9. Your Rights (Singapore PDPA)
          </h2>
          <p className="mb-3">
            Under Singapore&apos;s Personal Data Protection Act (PDPA), you have the right to access
            and correct personal data we hold about you. As we do not collect identifiable personal data,
            there is generally no personal data held about individual users.
          </p>
          <p>
            If you have concerns about data associated with your use of this website, please contact us
            at the address below. For Google Analytics data, you may also use the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary)" }}
              className="underline"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be reflected in
            the &ldquo;Last updated&rdquo; date at the top of this page. Continued use of the website
            after changes are posted constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            11. Contact
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us
            at: <strong style={{ color: "var(--color-on-surface)" }}>hello@bmicalculatorsingapore.com</strong>
          </p>
        </section>

      </div>
    </article>
  );
}
