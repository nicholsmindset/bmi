import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer — Singapore Health Calculators",
  description: "Our calculators provide general health information only and are not a substitute for professional medical advice from a qualified doctor or healthcare provider.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/medical-disclaimer" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "31 March 2026";

export default function MedicalDisclaimerPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1
        className="text-3xl font-extrabold mb-2"
        style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
      >
        Medical Disclaimer
      </h1>
      <p className="text-sm mb-10" style={{ color: "var(--color-neutral)" }}>
        Last updated: {LAST_UPDATED}
      </p>

      <div
        className="rounded-2xl p-5 mb-10"
        style={{
          background: "#FFF8E1",
          border: "2px solid #FFB300",
          color: "var(--color-on-surface-variant)",
        }}
      >
        <p className="font-semibold text-base mb-2" style={{ color: "#E65100" }}>
          Important Notice
        </p>
        <p className="text-sm leading-relaxed">
          The health calculators, information, and content on bmicalculatorsingapore.com are for{" "}
          <strong>general informational and educational purposes only</strong>. They are not intended
          to be, and should not be used as, a substitute for professional medical advice, diagnosis,
          or treatment. Always consult a qualified healthcare professional before making any health
          decisions.
        </p>
      </div>

      <div className="space-y-10 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            1. Not Medical Advice
          </h2>
          <p className="mb-3">
            Nothing on bmicalculatorsingapore.com constitutes medical advice, and no doctor-patient relationship
            is created by your use of this website. The calculators, articles, and health information
            are based on publicly available guidelines from Singapore&apos;s Health Promotion Board (HPB),
            Ministry of Health (MOH), and international health bodies.
          </p>
          <p>
            These tools are designed to help you understand general health metrics. They cannot account
            for your complete medical history, current medications, pre-existing conditions, or other
            individual factors that a qualified clinician would consider.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            2. Limitations of Health Calculators
          </h2>
          <p className="mb-3">BMI and other health calculators have known limitations:</p>
          <ul className="space-y-2 mb-3">
            {[
              "BMI may overestimate health risk for muscular individuals",
              "BMI does not distinguish between fat mass and lean muscle mass",
              "BMI does not capture fat distribution — abdominal fat carries higher risk than BMI reflects",
              "Calorie, sleep, and other calculators provide estimates based on population averages and may not reflect individual variation",
              "Blood pressure and cholesterol readings should always be interpreted by a medical professional",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-warning)" }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p>
            Always interpret calculator results in the context of your overall health and in
            consultation with a healthcare professional.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            3. Seek Professional Medical Advice
          </h2>
          <p className="mb-3">
            Seek the advice of a doctor or qualified health provider if you have any questions
            regarding a medical condition, your weight, blood pressure, cholesterol, sleep, nutrition,
            or exercise. Never disregard professional medical advice or delay seeking it because of
            something you read or calculated on this website.
          </p>
          <p>
            If you are experiencing a medical emergency, call{" "}
            <strong style={{ color: "var(--color-on-surface)" }}>995</strong> (Singapore emergency
            services) immediately or go to your nearest A&amp;E department.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            4. Singapore HPB &amp; MOH Guidelines
          </h2>
          <p>
            Where this website references HPB or MOH guidelines, these are provided in good faith
            based on publicly available information. Guidelines are updated periodically — always
            refer to the official{" "}
            <a href="https://www.hpb.gov.sg" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }} className="underline">
              HPB website
            </a>{" "}
            and{" "}
            <a href="https://www.moh.gov.sg" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary)" }} className="underline">
              MOH website
            </a>{" "}
            for the most current recommendations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            5. No Liability
          </h2>
          <p>
            bmicalculatorsingapore.com and its operators disclaim all liability for any loss, injury, or damage
            arising from your use of, or reliance on, any information or calculator results on this
            website. Use of this website is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            6. Singapore Health Resources
          </h2>
          <ul className="space-y-2">
            {[
              { label: "HealthHub (MOH)", url: "https://www.healthhub.sg" },
              { label: "Health Promotion Board", url: "https://www.hpb.gov.sg" },
              { label: "Singapore Heart Foundation", url: "https://www.myheart.org.sg" },
              { label: "Diabetes Singapore", url: "https://www.diabetes.org.sg" },
              { label: "Screen for Life — subsidised health screenings", url: "https://www.healthhub.sg/programmes/screen-for-life" },
            ].map((item) => (
              <li key={item.url} className="flex items-start gap-2">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--color-primary)" }}
                />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-primary)" }}
                  className="underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

      </div>

      <div className="mt-12 pt-6" style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
        <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
          See also:{" "}
          <Link href="/privacy" style={{ color: "var(--color-primary)" }} className="underline">Privacy Policy</Link>
          {" · "}
          <Link href="/affiliate-disclosure" style={{ color: "var(--color-primary)" }} className="underline">Affiliate Disclosure</Link>
        </p>
      </div>
    </article>
  );
}
