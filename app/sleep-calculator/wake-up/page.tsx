import type { Metadata } from "next";
import CalculatorSection from "@/components/ui/CalculatorSection";
import CalculatorSchema from "@/components/seo/CalculatorSchema";
import SleepCalculatorClient from "@/components/calculators/SleepCalculatorClient";

export const metadata: Metadata = {
  title: "Wake Up Time Calculator Singapore — Best Alarm Times by Sleep Cycle",
  description:
    "Enter your bedtime and find the best times to wake up based on 90-minute sleep cycles. Feel refreshed instead of groggy every morning.",
  alternates: { canonical: "https://bmicalculator.sg/sleep-calculator/wake-up" },
  openGraph: {
    title: "Wake Up Time Calculator Singapore — Best Alarm Times by Sleep Cycle",
    description: "Enter your bedtime and find the best times to wake up based on 90-minute sleep cycles. Feel refreshed instead of groggy every morning.",
    url: "https://bmicalculator.sg/sleep-calculator/wake-up",
    type: "website",
  },
  twitter: {
    title: "Wake Up Time Calculator Singapore — Best Alarm Times by Sleep Cycle",
    description: "Enter your bedtime and find the best times to wake up based on 90-minute sleep cycles. Feel refreshed instead of groggy every morning.",
  },
};

export default function WakeUpCalculatorPage() {
  return (
    <>
      <CalculatorSchema
        name="Wake Up Time Calculator"
        description="Find the best wake-up times based on your bedtime and 90-minute sleep cycles."
        url="https://bmicalculator.sg/sleep-calculator/wake-up"
        lastReviewed="2026-03-31"
        faqs={[
          {
            question: "What time should I wake up if I sleep at 11PM?",
            answer:
              "If you fall asleep at 11:00 PM, the optimal wake-up times are: 5:44 AM (4 cycles, 6h), 7:14 AM (5 cycles, 7.5h), 8:44 AM (6 cycles, 9h — recommended), or 10:14 AM (7 cycles, 10.5h). Add 14 minutes for time to fall asleep.",
          },
          {
            question: "How many hours of sleep do I need?",
            answer:
              "The National Sleep Foundation recommends 7–9 hours for adults aged 18–64, and 7–8 hours for those 65 and older. Singapore adults average just 6.5 hours, which is associated with higher rates of obesity, diabetes, and cognitive impairment.",
          },
          {
            question: "What is the best wake-up time for productivity?",
            answer:
              "Waking after 5–6 complete sleep cycles (7.5–9 hours) optimises cognitive performance and alertness. For most Singapore working schedules requiring a 7 AM wake-up, a bedtime of 9:46 PM or 11:16 PM aligns with full cycle completion.",
          },
          {
            question: "Should I set multiple alarms?",
            answer:
              "Multiple alarms and snoozing can fragment late-stage REM sleep, which is crucial for memory and mood. It is better to set one alarm timed to the end of a sleep cycle. Use this calculator to find a single optimal alarm time.",
          },
        ]}
        breadcrumbs={[
          { name: "Home", url: "https://bmicalculator.sg" },
          { name: "Sleep Calculator", url: "https://bmicalculator.sg/sleep-calculator" },
          { name: "Wake Up Time Calculator", url: "https://bmicalculator.sg/sleep-calculator/wake-up" },
        ]}
      />

      <CalculatorSection
        badge="Wake-Up Time · 90-Min Cycles"
        title="Wake Up Time Calculator"
        description="Enter when you plan to fall asleep and find the best times to set your alarm — timed to the end of a complete 90-minute sleep cycle so you wake up refreshed, not groggy."
      >
        <SleepCalculatorClient defaultMode="wakeup" />
      </CalculatorSection>
    </>
  );
}
