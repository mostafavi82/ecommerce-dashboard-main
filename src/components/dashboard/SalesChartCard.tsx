"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { SalesChart } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { formatRupiah } from "@/lib/format";
import { useTheme } from "@/hooks/useTheme";

const SERIES_COLORS: Record<string, string> = {
  green: "#22C55E",
  blue: "#2563EB",
};

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number; stroke: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
        {label}
      </p>
      {payload.map((entry) => (
        <p
          key={entry.name}
          className="mt-1 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.stroke }}
          />
          <span>{entry.name}:</span>
          <span className="font-semibold text-slate-900 dark:text-white">
            {formatRupiah(entry.value)}
          </span>
        </p>
      ))}
    </div>
  );
}

export function SalesChartCard({ data }: { data: SalesChart }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gridColor = isDark ? "#334155" : "#E2E8F0";
  const tickColor = isDark ? "#64748B" : "#94A3B8";
  const cursorColor = isDark ? "#475569" : "#CBD5E1";

  const colorFor = (label: string) => {
    const series = data.series.find((s) => s.label === label);
    return SERIES_COLORS[series?.color ?? "blue"] ?? "#2563EB";
  };

  const avgSaleColor = colorFor("Average Sale Value");
  const avgItemColor = colorFor("Average Item per Sale");

  return (
    <Card className="flex h-full flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {data.title}
        </h3>
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: avgSaleColor }}
            />
            Avg Sale Value
          </span>
          <span className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: avgItemColor }}
            />
            Avg Item per Sale
          </span>
        </div>
      </div>

      {/* Summary chips */}
      <div className="mt-4 flex flex-wrap gap-3">
        <div className="rounded-xl bg-emerald-50 px-4 py-2.5 dark:bg-emerald-500/10">
          <p className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
            Average Sale Value
          </p>
          <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
            {formatRupiah(data.summary.average_sale_value)}
          </p>
        </div>
        <div className="rounded-xl bg-blue-50 px-4 py-2.5 dark:bg-blue-500/10">
          <p className="text-[11px] font-medium text-blue-700 dark:text-blue-400">
            Average Item per Sale
          </p>
          <p className="text-sm font-bold text-blue-700 dark:text-blue-400">
            {formatRupiah(data.summary.average_item_per_sale)}
          </p>
        </div>
      </div>

      <div className="mt-4 h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data.data}
            margin={{ top: 10, right: 8, bottom: 0, left: -6 }}
          >
            <CartesianGrid
              strokeDasharray="4 6"
              vertical={false}
              stroke={gridColor}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: tickColor }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: tickColor }}
              tickFormatter={(v: number) => `${Math.round(v / 1_000_000)}M`}
              width={48}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: cursorColor, strokeDasharray: "4 4" }}
            />
            <Line
              type="monotone"
              dataKey="avg_sale_value"
              name="Average Sale Value"
              stroke={avgSaleColor}
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                stroke: isDark ? "#0f172a" : "#fff",
              }}
            />
            <Line
              type="monotone"
              dataKey="avg_item_per_sale"
              name="Average Item per Sale"
              stroke={avgItemColor}
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                stroke: isDark ? "#0f172a" : "#fff",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
