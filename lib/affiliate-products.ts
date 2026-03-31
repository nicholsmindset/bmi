export interface AffiliateProduct {
  platform: "iherb" | "lazada" | "shopee" | "amazon";
  platformLabel: string;
  name: string;
  description: string;
  ctaText: string;
  url: string;
}

export const AFFILIATE_MAP: Record<string, AffiliateProduct[]> = {
  bmi_underweight: [
    {
      platform: "amazon",
      platformLabel: "Amazon SG",
      name: "RENPHO Smart Body Scale",
      description:
        "Track BMI, body fat, muscle mass and 10 other metrics. Free Singapore delivery.",
      ctaText: "View on Amazon SG",
      url: "https://www.amazon.sg/dp/B07KGNFTRB?tag=robertnicho0a-20",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb · Up to 10% off",
      name: "MyProtein Impact Whey Protein",
      description:
        "25g protein per serving. Ideal for healthy weight gain. Ships to Singapore.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "shopee",
      platformLabel: "Shopee SG",
      name: "Ensure Gold Vanilla Nutrition Drink",
      description:
        "Complete nutrition with 26 vitamins and minerals. Ideal for underweight adults.",
      ctaText: "Shop on Shopee",
      url: "https://shopee.sg/search?keyword=ensure+gold",
    },
  ],

  bmi_healthy: [
    {
      platform: "amazon",
      platformLabel: "Amazon SG",
      name: "RENPHO Smart Body Scale",
      description:
        "Monitor your healthy BMI over time with 13-metric body composition tracking.",
      ctaText: "View on Amazon SG",
      url: "https://www.amazon.sg/dp/B07KGNFTRB?tag=robertnicho0a-20",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Garden of Life Organic Multivitamin",
      description:
        "Whole food multivitamin to support overall health. Delivered to Singapore.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "Fitbit Inspire 3 Fitness Tracker",
      description:
        "Activity tracking, heart rate monitoring, and sleep insights. Free SG delivery.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/fitbit/",
    },
  ],

  bmi_overweight: [
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "Xiaomi Mi Body Composition Scale 2",
      description:
        "13 body metrics including BMI and body fat %. Bluetooth sync. Free SG shipping.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/xiaomi-body-scale/",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "NOW Psyllium Husk Capsules",
      description:
        "Natural fibre supplement to support digestive health and satiety during weight loss.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Garden of Life Organic Fibre",
      description:
        "7g of fibre per serving. Supports healthy digestion and appetite management.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
  ],

  bmi_obese1: [
    {
      platform: "amazon",
      platformLabel: "Amazon SG",
      name: "Withings Body+ Smart Scale",
      description:
        "Professional body composition tracking. Wi-Fi sync with Apple Health and Google Fit.",
      ctaText: "View on Amazon SG",
      url: "https://www.amazon.sg/dp/B071XW4C5Q?tag=robertnicho0a-20",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "NOW Foods CLA 1000mg",
      description:
        "Conjugated linoleic acid to support healthy body composition alongside diet and exercise.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "Resistance Band Set (5 levels)",
      description:
        "Start your fitness journey at home. HPB-endorsed home exercise option.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/resistance-bands/",
    },
  ],

  bmi_obese2: [
    {
      platform: "amazon",
      platformLabel: "Amazon SG",
      name: "Withings Body+ Smart Scale",
      description:
        "Track your weight management progress. Syncs with Apple Health and Google Fit.",
      ctaText: "View on Amazon SG",
      url: "https://www.amazon.sg/dp/B071XW4C5Q?tag=robertnicho0a-20",
    },
    {
      platform: "amazon",
      platformLabel: "Amazon SG",
      name: "Omron HEM-7120 Blood Pressure Monitor",
      description:
        "Monitor cardiovascular health alongside BMI reduction. High BMI increases hypertension risk.",
      ctaText: "View on Amazon SG",
      url: "https://www.amazon.sg/?tag=robertnicho0a-20",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Nature's Way CLA",
      description:
        "Supports healthy body composition alongside a medically supervised weight loss plan.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
  ],

  protein_muscle_gain: [
    {
      platform: "iherb",
      platformLabel: "iHerb · Up to 10% off",
      name: "Optimum Nutrition Gold Standard Whey",
      description:
        "24g protein per serving. The world's best-selling protein powder. Ships to Singapore.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "NOW Sports Creatine Monohydrate",
      description:
        "5g creatine per serving. Supports muscle strength and recovery. No fillers.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "MyProtein Creatine Monohydrate",
      description:
        "Pure creatine monohydrate for strength and muscle gains. Local Singapore warehouse.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/myprotein-creatine/",
    },
  ],

  protein_weight_loss: [
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Garden of Life Sport Organic Protein",
      description:
        "30g protein, 0g sugar. Certified for sport. Ideal for lean muscle preservation during cut.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Isopure Zero Carb Whey Isolate",
      description:
        "25g protein, 0g carbs per serving. Maximum protein density for calorie-controlled diets.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
  ],

  sleep_poor: [
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "NOW Foods Melatonin 3mg",
      description:
        "Pharmaceutical-grade melatonin for sleep onset. Start with 0.5–3mg, 30 min before bed.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Natural Vitality CALM Magnesium",
      description:
        "Magnesium glycinate for muscle relaxation and improved sleep quality. Tropical flavour.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "Fitbit Inspire 3 Sleep Tracker",
      description:
        "Monitor sleep stages, HRV, and sleep score nightly. Free Singapore delivery.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/fitbit/",
    },
  ],

  calorie_cutting: [
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "MyProtein Impact Whey Isolate",
      description:
        "High protein, low calorie. Preserve muscle on a calorie deficit. Local SG warehouse.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/myprotein/",
    },
    {
      platform: "shopee",
      platformLabel: "Shopee SG",
      name: "Digital Kitchen Food Scale",
      description:
        "Accurate food weighing for calorie tracking. Essential tool for hitting your calorie target.",
      ctaText: "Shop on Shopee",
      url: "https://shopee.sg/search?keyword=digital+food+scale",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Garden of Life Organic Fibre",
      description:
        "Feel full longer. Soluble fibre slows digestion and supports hunger management on a deficit.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
  ],

  blood_pressure_high: [
    {
      platform: "amazon",
      platformLabel: "Amazon SG",
      name: "Omron HEM-7120 Blood Pressure Monitor",
      description:
        "Clinically validated upper arm BP monitor. Store 60 readings. Singapore warranty.",
      ctaText: "View on Amazon SG",
      url: "https://www.amazon.sg/?tag=robertnicho0a-20",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "NOW Magnesium Glycinate 400mg",
      description:
        "Well-absorbed form of magnesium. Supports healthy blood pressure and muscle relaxation.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Jarrow Formulas CoQ10 100mg",
      description:
        "Antioxidant that supports cardiovascular health. Often low in those taking statins.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
  ],

  water_intake: [
    {
      platform: "iherb",
      platformLabel: "iHerb",
      name: "Liquid I.V. Hydration Multiplier",
      description:
        "Electrolyte drink mix. 2-3x faster hydration than water alone. Great for Singapore's climate.",
      ctaText: "Buy on iHerb",
      url: "https://www.iherb.com",
    },
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "Hydro Flask 32oz Water Bottle",
      description:
        "Keeps water cold for 24h in Singapore's heat. Motivates consistent daily hydration.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/hydro-flask/",
    },
    {
      platform: "lazada",
      platformLabel: "Lazada SG",
      name: "Philips Water Pitcher Filter",
      description:
        "Removes chlorine and impurities. Improves taste so you drink more. Local SG delivery.",
      ctaText: "Buy on Lazada",
      url: "https://www.lazada.sg/tag/philips-water-filter/",
    },
  ],
};
