interface FAQ {
  question: string;
  answer: string;
}

interface Breadcrumb {
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
}

export default function CalculatorSchema({
  name,
  description,
  url,
  lastReviewed,
  faqs,
  breadcrumbs,
  isMedical = false,
}: CalculatorSchemaProps) {
  const mainEntity = isMedical
    ? {
        "@type": "MedicalWebPage",
        name,
        description,
        url,
        lastReviewed,
        reviewedBy: {
          "@type": "Organization",
          name: "bmicalculator.sg",
        },
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
    </>
  );
}
