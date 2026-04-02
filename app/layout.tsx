import type { Metadata } from "next";
import { Manrope, Public_Sans } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bmicalculatorsingapore.com"),
  title: {
    default: "Singapore Health Calculators — BMI, Calories, Sleep & More",
    template: "%s | bmicalculatorsingapore.com",
  },
  description:
    "Free Singapore health calculators using HPB Asian standards. BMI, calorie deficit, TDEE, protein, sleep and 10 more tools. Instant results.",
  openGraph: {
    type: "website",
    siteName: "bmicalculatorsingapore.com",
    locale: "en_SG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "bmicalculatorsingapore.com — Singapore Health Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bmicalcsg",
    images: ["/og-image.png"],
  },
  verification: {
    google: "pqaMzsQutdAdWLv_nNVdN98R3vaIKfnEVJQ4C3W1oWE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const NAV_LINKS = [
  { href: "/bmi-calculator",             label: "BMI" },
  { href: "/calorie-deficit-calculator", label: "Calorie Deficit" },
  { href: "/tdee-calculator",            label: "TDEE" },
  { href: "/protein-calculator",         label: "Protein" },
  { href: "/sleep-calculator",           label: "Sleep" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-SG"
      className={`${manrope.variable} ${publicSans.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#F7F6FF" }}
      >
        {/* Header */}
        <header
          className="sticky top-0 z-50"
          style={{
            background: "rgba(247, 246, 255, 0.92)",
            borderBottom: "1px solid rgba(160, 150, 210, 0.2)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="h-14 flex items-center justify-between">
              {/* Logo */}
              <Link
                href="/"
                className="flex items-center gap-2 group"
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--color-primary)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ color: "var(--color-on-surface)", fontFamily: "var(--font-manrope)" }}
                >
                  bmicalculator<span style={{ color: "var(--color-primary)" }}>.sg</span>
                </span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="nav-link px-3 py-1.5 rounded-md text-sm font-medium"
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/"
                  className="ml-2 px-3 py-1.5 rounded-md text-sm font-semibold"
                  style={{
                    background: "var(--color-primary-container)",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  All tools →
                </Link>
              </nav>

              {/* Mobile menu — just link home */}
              <Link
                href="/"
                className="md:hidden text-sm font-medium"
                style={{ color: "var(--color-primary)" }}
              >
                All tools →
              </Link>
            </div>
          </div>
        </header>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4BZMKT2Q3N"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4BZMKT2Q3N');
        `}</Script>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer
          style={{
            background: "#FDFCFF",
            borderTop: "1px solid rgba(160, 150, 210, 0.2)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
            <div className="grid sm:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="sm:col-span-1">
                <p
                  className="text-sm font-bold mb-2"
                  style={{ fontFamily: "var(--font-manrope)", color: "var(--color-on-surface)" }}
                >
                  bmicalculatorsingapore.com
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-neutral)" }}>
                  Singapore&apos;s free health calculator suite, built on HPB Asian standards.
                </p>
              </div>

              {/* Calculators */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--color-neutral)" }}>
                  Calculators
                </p>
                <ul className="space-y-2">
                  {[
                    ["BMI Calculator", "/bmi-calculator"],
                    ["TDEE Calculator", "/tdee-calculator"],
                    ["Calorie Deficit", "/calorie-deficit-calculator"],
                    ["Protein Calculator", "/protein-calculator"],
                    ["Sleep Calculator", "/sleep-calculator"],
                  ].map(([name, href]) => (
                    <li key={href}>
                      <Link href={href} className="footer-link text-xs">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* More tools */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--color-neutral)" }}>
                  More tools
                </p>
                <ul className="space-y-2">
                  {[
                    ["Body Fat %", "/body-fat-calculator"],
                    ["Blood Pressure", "/blood-pressure-checker"],
                    ["BMR Calculator", "/bmr-calculator"],
                    ["Macro Calculator", "/macro-calculator"],
                    ["Water Intake", "/water-intake-calculator"],
                  ].map(([name, href]) => (
                    <li key={href}>
                      <Link href={href} className="footer-link text-xs">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--color-neutral)" }}>
                  Information
                </p>
                <ul className="space-y-2">
                  {[
                    ["Privacy Policy", "/privacy"],
                    ["Medical Disclaimer", "/medical-disclaimer"],
                    ["Affiliate Disclosure", "/affiliate-disclosure"],
                    ["BMI Chart", "/bmi-chart"],
                  ].map(([name, href]) => (
                    <li key={href}>
                      <Link href={href} className="footer-link text-xs">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="pt-6 flex flex-col sm:flex-row justify-between gap-3"
              style={{ borderTop: "1px solid var(--color-outline-variant)" }}
            >
              <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                © 2026 bmicalculatorsingapore.com — For informational purposes only. Not a substitute for medical advice.
              </p>
              <p className="text-xs" style={{ color: "var(--color-neutral)" }}>
                This site earns commissions from affiliate links at no extra cost to you.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
