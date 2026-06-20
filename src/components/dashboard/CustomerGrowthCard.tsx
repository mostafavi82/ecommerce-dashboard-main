import Image from "next/image";
import type { ProvinceGrowth } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";

const PROVINCE_COLORS = ["#F59E0B", "#EF4444", "#2563EB", "#22C55E", "#A855F7"];

export function CustomerGrowthCard({ data }: { data: ProvinceGrowth[] }) {
  return (
    <Card className="flex h-full flex-col">
      <div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Customer Growth
        </h3>
        <p className="mt-0.5 text-sm text-slate-400 dark:text-slate-500">
          Track customer by locations
        </p>
      </div>

      {/* Static map exported from the design */}
      <div className="relative mt-4 h-44 w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800">
        <Image
          src="/images/indonesia-map.png"
          alt="Customer distribution map of Indonesia"
          fill
          className="object-cover dark:opacity-60 dark:invert"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        {/* Decorative location pins */}
        {data.slice(0, 3).map((p, i) => (
          <span
            key={p.province}
            className="absolute flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-md"
            style={{
              backgroundColor: PROVINCE_COLORS[i % PROVINCE_COLORS.length],
              left: `${[52, 62, 47][i]}%`,
              top: `${[55, 30, 62][i]}%`,
            }}
            title={p.province}
          >
            {p.growth_percentage}%
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-4">
        {data.map((province, i) => (
          <li key={province.province} className="flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{
                backgroundColor: PROVINCE_COLORS[i % PROVINCE_COLORS.length],
              }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                  {province.province}
                </p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {province.growth_percentage}%
                </p>
              </div>
              <div className="mt-1.5">
                <ProgressBar
                  value={province.growth_percentage}
                  className="h-1.5"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
