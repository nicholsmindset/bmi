"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdFormat = "leaderboard" | "rectangle" | "responsive";

interface AdUnitProps {
  format: AdFormat;
  slot: string;
  className?: string;
}

const FORMAT_CLASSES: Record<AdFormat, string> = {
  leaderboard: "ad-leaderboard",
  rectangle:   "ad-rectangle",
  responsive:  "ad-responsive",
};

export default function AdUnit({ format, slot, className = "" }: AdUnitProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const isPlaceholder = !client || client === "ca-pub-PLACEHOLDER";

  useEffect(() => {
    if (isPlaceholder) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet
    }
  }, [isPlaceholder]);

  if (isPlaceholder) {
    return (
      <div
        className={`${FORMAT_CLASSES[format]} ${className} flex items-center justify-center border border-dashed rounded-lg`}
        style={{
          borderColor: "var(--color-outline-variant)",
          background: "var(--color-surface-container)",
        }}
      >
        <span className="text-xs" style={{ color: "var(--color-neutral)" }}>
          Ad unit — {format}
        </span>
      </div>
    );
  }

  return (
    <div className={`${FORMAT_CLASSES[format]} ${className}`}>
      <p className="text-[10px] text-center py-1" style={{ color: "var(--color-neutral)" }}>
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format === "responsive" ? "auto" : undefined}
        data-full-width-responsive={format === "responsive" ? "true" : undefined}
      />
    </div>
  );
}
