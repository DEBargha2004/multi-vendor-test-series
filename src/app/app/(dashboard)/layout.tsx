import { cn } from "@/lib/utils";
import React from "react";

export default function Layout({
  children,
  total_attempts,
  total_purchases,
  total_revenue,
  active_examinees,
  total_submissions,
  test_trend,
  cash_flow,
  recent_submissions,
  recent_purchases,
  recent_tests,
  recent_toppers,
  recent_reviews,
}: {
  children: React.ReactNode;
  total_attempts: React.ReactNode;
  total_purchases: React.ReactNode;
  total_revenue: React.ReactNode;
  active_examinees: React.ReactNode;
  total_submissions: React.ReactNode;
  test_trend: React.ReactNode;
  cash_flow: React.ReactNode;
  recent_submissions: React.ReactNode;
  recent_purchases: React.ReactNode;
  recent_tests: React.ReactNode;
  recent_toppers: React.ReactNode;
  recent_reviews: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-12 gap-4 @container p-4">
      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full"
        )}
      >
        {children}
      </section>
      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full"
        )}
      >
        {total_attempts}
      </section>
      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full"
        )}
      >
        {total_purchases}
      </section>
      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full"
        )}
      >
        {total_revenue}
      </section>

      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full"
        )}
      >
        {active_examinees}
      </section>
      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full",
          "@6xl:row-start-3 @4xl:row-start-2"
        )}
      >
        {total_submissions}
      </section>
      <section
        className={cn(
          "@6xl:col-span-3 @4xl:col-span-4 @xl:col-span-6 col-span-full",
          "@6xl:row-start-4 @4xl:row-start-3"
        )}
      >
        {cash_flow}
      </section>

      <section
        className={cn(
          "@6xl:col-span-9 row-span-3 col-span-full",
          "@6xl:row-start-auto",
          "grid @2xl:grid-cols-2 gap-4"
        )}
      >
        <section>{recent_submissions}</section>
        <section>{recent_purchases}</section>
      </section>

      <section className={cn("@6xl:col-span-4 @4xl:col-span-6 col-span-full")}>
        {recent_tests}
      </section>
      <section className={cn("@6xl:col-span-4 @4xl:col-span-6 col-span-full")}>
        {recent_toppers}
      </section>
      <section className={cn("@6xl:col-span-4 @4xl:col-span-6 col-span-full")}>
        {recent_reviews}
      </section>
      <section className={cn("@4xl:col-span-6 col-span-full h-fit")}>
        {test_trend}
      </section>
    </main>
  );
}
