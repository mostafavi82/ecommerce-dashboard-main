import { cn } from "@/lib/cn";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  /** Set false when the consumer provides its own background color. */
  defaultBg?: boolean;
}

export function Card({ className, children, defaultBg = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-100 p-5 shadow-[0_1px_3px_rgba(16,24,40,0.06)] dark:border-slate-800",
        defaultBg && "bg-white dark:bg-slate-900",
        className
      )}
    >
      {children}
    </div>
  );
}
