"use client";

import {
  ArrowLeftRight,
  DollarSign,
  ShoppingBag,
  Users,
} from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";
import { formatCompactNumber } from "@/lib/format";
import { SalesTargetCard } from "./SalesTargetCard";
import { StatCard } from "./StatCard";
import { SalesChartCard } from "./SalesChartCard";
import { CustomerGrowthCard } from "./CustomerGrowthCard";
import { PopularProductsCard } from "./PopularProductsCard";
import { PromoCard } from "./PromoCard";
import { DashboardSkeleton } from "./DashboardSkeleton";
import { ErrorState } from "./ErrorState";

export function DashboardView() {
  const { data, isLoading, error, refetch } = useDashboard();

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white lg:text-2xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
          An easy way to manage sales with care and precision.
        </p>
      </div>

      {isLoading && <DashboardSkeleton />}

      {!isLoading && error && <ErrorState message={error} onRetry={refetch} />}

      {!isLoading && !error && data && (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          {/* ===== Left column: target + chart ===== */}
          <div className="space-y-5 xl:col-span-2">
            <SalesTargetCard data={data.sales_target} />
            <SalesChartCard data={data.sales_chart} />
          </div>

          {/* ===== Right column: stats + promo ===== */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <StatCard
                title="Total Revenue"
                stat={data.stats.total_revenue}
                formatter={(v) => `$${formatCompactNumber(v)}`}
                highlighted
                icon={<DollarSign className="h-4 w-4" />}
              />
              <StatCard
                title="Total Customer"
                stat={data.stats.total_customers}
                formatter={formatCompactNumber}
                icon={<Users className="h-4 w-4" />}
              />
              <StatCard
                title="Total Transactions"
                stat={data.stats.total_transactions}
                formatter={formatCompactNumber}
                icon={<ArrowLeftRight className="h-4 w-4" />}
              />
              <StatCard
                title="Total Product"
                stat={data.stats.total_products}
                formatter={formatCompactNumber}
                icon={<ShoppingBag className="h-4 w-4" />}
              />
            </div>
            <div className="flex-1">
              <PromoCard />
            </div>
          </div>

          {/* ===== Bottom row: customer growth + popular products ===== */}
          <div className="xl:col-span-1">
            <CustomerGrowthCard data={data.customer_growth_by_province} />
          </div>
          <div className="xl:col-span-2">
            <PopularProductsCard data={data.popular_products} />
          </div>
        </div>
      )}
    </div>
  );
}
