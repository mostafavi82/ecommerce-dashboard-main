"use client";

import { AlertTriangle, RotateCw } from "lucide-react";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50/50 px-6 py-16 text-center dark:border-red-500/20 dark:bg-red-500/5"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/15">
        <AlertTriangle className="h-7 w-7 text-red-500 dark:text-red-400" />
      </span>
      <h2 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
        Couldn&apos;t load the dashboard
      </h2>
      <p className="mt-2 max-w-md text-sm text-slate-500 dark:text-slate-400">
        We were unable to fetch the dashboard data from the server. Please
        check your connection and try again.
      </p>
      <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
        ({message})
      </p>
      <button
        onClick={onRetry}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        <RotateCw className="h-4 w-4" />
        Try again
      </button>
    </div>
  );
}
