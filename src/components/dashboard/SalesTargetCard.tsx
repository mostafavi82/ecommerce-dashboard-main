import type { SalesTarget } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatRupiah } from "@/lib/format";

export function SalesTargetCard({ data }: { data: SalesTarget }) {
  return (
    <Card>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-400 dark:text-slate-500">Target</p>
          <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
            Sales Target
          </h3>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            In Progress{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {data.progress_percentage}%
            </span>
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4 text-sm">
        <p className="font-semibold text-slate-800 dark:text-slate-100">
          {formatRupiah(data.in_progress)}
        </p>
        <p className="text-slate-400 dark:text-slate-500">
          Target&nbsp;
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {formatRupiah(data.target)}
          </span>
        </p>
      </div>

      <div className="mt-3 py-1.5">
        <ProgressBar value={data.progress_percentage} showThumb />
      </div>
    </Card>
  );
}
