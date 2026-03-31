type Platform = "iherb" | "lazada" | "shopee" | "amazon";

interface AffiliateCardProps {
  platform: Platform;
  platformLabel: string;
  name: string;
  description: string;
  ctaText: string;
  url: string;
}

const PLATFORM_COLORS: Record<Platform, string> = {
  iherb:   "#2E7D32",
  lazada:  "#E65100",
  shopee:  "#C62828",
  amazon:  "#F57C00",
};

export default function AffiliateCard({
  platform,
  platformLabel,
  name,
  description,
  ctaText,
  url,
}: AffiliateCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-5 border flex flex-col gap-3 hover:-translate-y-0.5 transition-all hover:shadow-md"
      style={{ borderColor: "var(--color-outline-variant)" }}
    >
      <span
        className="text-[11px] font-bold uppercase tracking-wide"
        style={{ color: PLATFORM_COLORS[platform] }}
      >
        {platformLabel}
      </span>
      <div>
        <p className="text-sm font-semibold" style={{ color: "var(--color-on-surface)" }}>
          {name}
        </p>
        <p className="text-xs mt-1" style={{ color: "var(--color-on-surface-variant)" }}>
          {description}
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="nofollow noopener sponsored"
        className="self-start px-4 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: "var(--color-primary)" }}
      >
        {ctaText}
      </a>
    </div>
  );
}

interface AffiliateGridProps {
  products: AffiliateCardProps[];
}

export function AffiliateGrid({ products }: AffiliateGridProps) {
  // Affiliate programme pending approval — hidden until approved
  return null;
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-6">
      <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
        Recommended products
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <AffiliateCard key={product.name} {...product} />
        ))}
      </div>
      <p className="text-[10px] mt-2" style={{ color: "var(--color-neutral)" }}>
        Affiliate links — we earn a small commission at no cost to you.
      </p>
    </div>
  );
}
