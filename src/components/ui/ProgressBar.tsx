"use client";

import { cn } from "@/lib/cn";

interface ProgressBarProps {
  value: number; // 0 - 100
  className?: string;
  barClassName?: string;
  showThumb?: boolean;
}

export function ProgressBar({
  value,
  className,
  barClassName,
  showThumb = false,
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "relative h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-full bg-blue-600 transition-[width] duration-700 ease-out dark:bg-blue-500",
          barClassName
        )}
        style={{ width: `${clamped}%` }}
      />
      {showThumb && (
        <span
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 -translate-x-1/2 rounded-full border-[3px] border-blue-600 bg-white shadow transition-[left] duration-700 ease-out dark:border-blue-500 dark:bg-slate-900"
          style={{ left: `${clamped}%` }}
        />
      )}
    </div>
  );
}
