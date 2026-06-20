import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { Stat } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

interface StatCardProps {
  title: string;
  stat: Stat;
  formatter: (value: number) => string;
  highlighted?: boolean;
  icon: React.ReactNode;
}

export function StatCard({
  title,
  stat,
  formatter,
  highlighted = false,
  icon,
}: StatCardProps) {
  const isUp = stat.change_direction === "up";

  return (
    <Card
      defaultBg={!highlighted}
      className={cn(
        "flex flex-col justify-between gap-4",
        highlighted && "border-blue-600 bg-blue-600 text-white dark:border-blue-600"
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            "text-sm font-medium",
            highlighted ? "text-blue-100" : "text-slate-500 dark:text-slate-400"
          )}
        >
          {title}
        </p>
        <span
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full",
            highlighted
              ? "bg-white/15 text-white"
              : "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400"
          )}
        >
          {icon}
        </span>
      </div>

      <div>
        <p
          className={cn(
            "text-2xl font-bold tracking-tight",
            highlighted ? "text-white" : "text-slate-900 dark:text-white"
          )}
        >
          {formatter(stat.value)}
        </p>
        <p
          className={cn(
            "mt-2 flex flex-wrap items-center gap-1.5 text-xs",
            highlighted ? "text-blue-100" : "text-slate-400 dark:text-slate-500"
          )}
        >
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-semibold",
              highlighted
                ? "bg-white/15 text-white"
                : isUp
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                : "bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400"
            )}
          >
            {isUp ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {stat.change_percentage}%
          </span>
          {stat.period}
        </p>
      </div>
    </Card>
  );
}
