import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import MedicalDisclaimer from "@/components/ui/MedicalDisclaimer";
import Link from "next/link";
import BodyFatClient from "@/components/calculators/BodyFatClient";
import QuickAnswer from "@/components/ui/QuickAnswer";

export const metadata: Metadata = {
  title: "Body Fat Percentage Calculator Singapore — US Navy Method",
  description:
    "Calculate body fat % with just a tape measure. Uses the US Navy method. See ACE body fat categories and healthy ranges for Singaporean men and women.",
  alternates: { canonical: "https://www.bmicalculatorsingapore.com/body-fat-calculator" },
  openGraph: {
    title: "Body Fat Percentage Calculator Singapore — US Navy Method",
    description:
      "Calculate body fat % with just a tape measure. Uses the US Navy method. See ACE body fat categories and healthy ranges for Singaporean men and women.",
    url: "https://www.bmicalculatorsingapore.com/body-fat-calculator",
    type: "website",
  },
  twitter: {
    title: "Body Fat Percentage Calculator Singapore — US Navy Method",
    description:
      "Calculate body fat % with just a tape measure. Uses the US Navy method. See ACE body fat categories and healthy ranges for Singaporean men and women.",
  },
};

export default function BodyFatPage() {
  return (
    <>
      <CalculatorSchema
        name="Body Fat Percentage Calculator Singapore"
        description="Calculate body fat percentage using the US Navy method with ACE category assessment."
        url="https://www.bmicalculatorsingapore.com/body-fat-calculator"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What is a healthy body fat percentage for Singaporeans?",
            answer:
              "For Singaporean men, fitness level body fat is 14–17% and acceptable is 18–24%. For Singaporean women, fitness is 21–24% and acceptable is 25–31%. These ACE categories align with Asian health risk assessments.",
          },
          {
            question: "How do I measure my body fat at home?",
            answer:
              "The US Navy method requires only a tape measure. Measure your waist at navel level, neck just below the larynx, and for women, your hips at the widest point. Enter these three (or four) measurements into the calculator above.",
          },
          {
            question: "Is BMI or body fat percentage more accurate?",
            answer:
              "Body fat percentage is a more direct measure of body composition. BMI can misclassify muscular individuals as overweight. However, for population-level screening, BMI remains the standard used by Singapore HPB.",
          },
          {
            question: "How accurate is the US Navy body fat formula?",
            answer:
              "The US Navy formula estimates body fat to within ±3–4% of DEXA scan results for most individuals. Accuracy decreases for very obese or very lean individuals. Ensure consistent measurement technique for reliable results.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://www.bmicalculatorsingapore.com" },
          { name: "Body Fat Calculator", url: "https://www.bmicalculatorsingapore.com/body-fat-calculator" },
        ]}
        isMedical
        howToSteps={[
          { name: "Select your sex", text: "Men and women use different formulas — select male or female." },
          { name: "Enter your height", text: "Enter your height in centimetres or feet and inches." },
          { name: "Measure and enter your waist", text: "Measure your waist at navel level. Breathe out gently. Enter in cm." },
          { name: "Measure and enter your neck", text: "Measure your neck just below the Adam's apple, sloping slightly downward." },
          { name: "Women: enter your hip measurement", text: "Measure at the widest point of the hips and buttocks." },
          { name: "Read your result", text: "Your body fat percentage and ACE category (Athlete / Fitness / Acceptable / Obese) are shown instantly." },
        ]}
        citations={[
          { name: "ACE Body Fat Percentage Norms", url: "https://www.acefitness.org/resources/everyone/blog/112/percent-body-fat-norms-for-men-and-women/" },
          { name: "US Navy Body Fat Estimation Method", url: "https://pubmed.ncbi.nlm.nih.gov/3985516/" },
        ]}
      />

      <CalculatorSection
        badge="US Navy Method · ACE Categories"
        title="Body Fat Percentage Calculator"
        description="Measure your waist, neck (and hips if female) to calculate body fat percentage without scales or expensive equipment. Uses the validated US Navy circumference method."
      >
        <QuickAnswer
          answer="Healthy body fat for men is 8–19%, and 21–33% for women (ACE guidelines). Asian populations may face metabolic risks at lower body fat levels."
          bullets={[
            "Men: Essential <5% · Athlete 6–13% · Fitness 14–17% · Acceptable 18–24% · Obese 25%+",
            "Women: Essential <13% · Athlete 14–20% · Fitness 21–24% · Acceptable 25–31% · Obese 32%+",
            "Asian adults may have higher metabolic risk at the same body fat % as Caucasians",
          ]}
          source="American Council on Exercise (ACE) · HPB Singapore"
        />
        <BodyFatClient />
      </CalculatorSection>

      <section className="max-w-3xl mx-auto px-4 mt-12 pb-16 space-y-10">

        {/* H2: Understanding Your Result */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Understanding Your Body Fat Result
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Body fat percentage is the proportion of your total body weight made up of fat tissue.
              Unlike <Link href="/bmi-calculator" className="underline" style={{ color: "var(--color-primary)" }}>BMI</Link>,
              body fat percentage distinguishes between fat mass and lean mass (muscle, bone, water), making it
              a more precise indicator of body composition.
            </p>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "var(--color-surface-container)" }}>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Category</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Men</th>
                  <th className="text-left p-3 font-semibold" style={{ color: "var(--color-on-surface)" }}>Women</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "Essential Fat", men: "2–5%",  women: "10–13%" },
                  { cat: "Athlete",       men: "6–13%", women: "14–20%" },
                  { cat: "Fitness",       men: "14–17%",women: "21–24%" },
                  { cat: "Acceptable",    men: "18–24%",women: "25–31%" },
                  { cat: "Obese",         men: "≥ 25%", women: "≥ 32%" },
                ].map((row) => (
                  <tr key={row.cat} style={{ borderTop: "1px solid var(--color-outline-variant)" }}>
                    <td className="p-3 font-medium" style={{ color: "var(--color-on-surface)" }}>{row.cat}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.men}</td>
                    <td className="p-3" style={{ color: "var(--color-on-surface-variant)" }}>{row.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--color-neutral)" }}>Source: American Council on Exercise (ACE) body fat classification.</p>
        </div>

        {/* H2: How US Navy Method Works */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            How the US Navy Body Fat Method Works
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              The US Navy circumference method estimates body fat from simple tape measure readings.
              It requires only three measurements (four for women): waist at the navel, neck just below
              the larynx, and for women, the hips at the widest point.
            </p>
            <p>
              The formula uses logarithms of these measurements and has been validated to estimate body fat
              within <strong>±3–4% of DEXA scan results</strong> for most individuals — accurate enough for
              tracking progress over time without expensive equipment.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {[
              { label: "Waist", tip: "Measure at navel level. Breathe out gently and measure — do not suck in." },
              { label: "Neck", tip: "Measure just below the larynx (Adam's apple), sloping downward slightly." },
              { label: "Hip (women)", tip: "Measure at the widest point of the hips and buttocks." },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl p-4" style={{ background: "var(--color-surface-container)" }}>
                <p className="font-semibold mb-1 text-sm" style={{ color: "var(--color-on-surface)" }}>{m.label}</p>
                <p className="text-xs" style={{ color: "var(--color-on-surface-variant)" }}>{m.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* H2: Body Fat vs BMI */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Body Fat vs BMI — Which Is More Useful?
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              <Link href="/bmi-calculator" className="underline" style={{ color: "var(--color-primary)" }}>BMI</Link> is
              the standard used by Singapore HPB for population health screening. It is quick, requires no measurements,
              and correlates well with disease risk across large groups. However, BMI cannot distinguish between
              muscle and fat — a muscular person may have a high BMI with healthy body composition.
            </p>
            <p>
              Body fat percentage is more specific but requires measurement technique and consistent conditions.
              Pair body fat percentage with your{" "}
              <Link href="/waist-hip-ratio-calculator" className="underline" style={{ color: "var(--color-primary)" }}>waist-to-hip ratio</Link>{" "}
              for a complete picture of central fat distribution, which is a key cardiovascular risk factor for
              Singaporeans.
            </p>
          </div>
        </div>

        {/* H2: Body Fat for Singaporeans */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Body Fat Ranges for Singaporeans
          </h2>
          <div className="space-y-3 text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Research shows that Asian populations — including Chinese, Malay, and Indian Singaporeans — tend to
              accumulate more <strong>visceral fat</strong> (abdominal fat surrounding internal organs) at lower BMI and
              body fat levels compared to Caucasians. This means metabolic risks such as insulin resistance,
              Type 2 diabetes, and cardiovascular disease can appear at body fat percentages that would be considered
              &ldquo;acceptable&rdquo; in Western populations.
            </p>
            <p>
              Singapore HPB and the WHO Western Pacific office suggest that the metabolic risk threshold for
              Asian adults may be approximately <strong>2% lower</strong> than the ACE categories listed above.
              If your result is in the upper &ldquo;Acceptable&rdquo; range, consider consulting your GP for
              a fuller cardiovascular risk assessment.
            </p>
          </div>
        </div>


        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What is a healthy body fat percentage for Singaporeans?",
                a: "For Singaporean men, fitness level body fat is 14–17% and acceptable is 18–24%. For Singaporean women, fitness is 21–24% and acceptable is 25–31%. These ACE categories align with Asian health risk assessments.",
              },
              {
                q: "How do I measure my body fat at home?",
                a: "The US Navy method requires only a tape measure. Measure your waist at navel level, neck just below the larynx, and for women, your hips at the widest point. Enter these three (or four) measurements into the calculator above.",
              },
              {
                q: "Is BMI or body fat percentage more accurate?",
                a: "Body fat percentage is a more direct measure of body composition. BMI can misclassify muscular individuals as overweight. However, for population-level screening, BMI remains the standard used by Singapore HPB.",
              },
              {
                q: "How accurate is the US Navy body fat formula?",
                a: "The US Navy formula estimates body fat to within ±3–4% of DEXA scan results for most individuals. Accuracy decreases for very obese or very lean individuals. Ensure consistent measurement technique for reliable results.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: "var(--color-surface-container)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{item.q}</h3>
                <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4"><MedicalDisclaimer context="bmi" /></div>

        <RelatedCalculators items={[
          {
            name: "BMI Calculator",
            tagline: "Singapore HPB Asian standard",
            href: "/bmi-calculator",
            iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
            accent: "#005EB8",
          },
          {
            name: "Waist-to-Hip Ratio Calculator",
            tagline: "Central obesity risk check",
            href: "/waist-hip-ratio-calculator",
            iconPath: "M17 8C8 10 5.9 16.17 3.82 21L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-2 4-5 5z",
            accent: "#B71C1C",
          },
          {
            name: "Ideal Weight Calculator",
            tagline: "HPB healthy weight range",
            href: "/ideal-weight-calculator",
            iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
            accent: "#00695C",
          },
          {
            name: "TDEE Calculator",
            tagline: "Calories burned per day",
            href: "/tdee-calculator",
            iconPath: "M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.76 2.09 7.07 5.22 8.78L6 22h5V2.05z",
            accent: "#F57C00",
          },
        ]} />
      </section>
    </>
  );
}
