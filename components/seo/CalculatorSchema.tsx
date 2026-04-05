interface FAQ {
  question: string;
  answer: string;
}

interface Breadcrumb {
  name: string;
  url: string;
}

interface HowToStep {
  name: string;
  text: string;
}

interface Citation {
  name: string;
  url: string;
}

interface CalculatorSchemaProps {
  name: string;
  description: string;
  url: string;
  lastReviewed: string; // YYYY-MM-DD
  faqs: FAQ[];
  breadcrumbs: Breadcrumb[];
  isMedical?: boolean;
  howToSteps?: HowToStep[];
  citations?: Citation[];
}

export default function CalculatorSchema({
  name,
  description,
  url,
  lastReviewed,
  faqs,
  breadcrumbs,
  isMedical = false,
  howToSteps,
  citations,
}: CalculatorSchemaProps) {
  const mainEntity = isMedical
    ? {
        "@type": "MedicalWebPage",
        name,
        description,
        url,
        lastReviewed,
        author: {
          "@type": "Organization",
          name: "BMI Calculator Singapore",
          url: "https://www.bmicalculatorsingapore.com",
        },
        reviewedBy: {
          "@type": "Organization",
          name: "BMI Calculator Singapore",
          url: "https://www.bmicalculatorsingapore.com",
        },
        medicalAudience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
        },
        ...(citations && citations.length > 0
          ? {
              citation: citations.map((c) => ({
                "@type": "CreativeWork",
                name: c.name,
                url: c.url,
              })),
            }
          : {}),
      }
    : {
        "@type": "WebApplication",
        name,
        description,
        url,
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        isAccessibleForFree: true,
      };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  const mainSchema = {
    "@context": "https://schema.org",
    ...mainEntity,
  };

  const howToSchema = howToSteps && howToSteps.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to Use the ${name}`,
        step: howToSteps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.name,
          text: step.text,
        })),
      }
    : null;

  const safeStringify = (obj: unknown) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeStringify(howToSchema) }}
        />
      )}
    </>
  );
}
