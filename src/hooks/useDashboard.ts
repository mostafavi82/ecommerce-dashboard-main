"use client";

import { useCallback, useEffect, useState } from "react";
import type { DashboardData, DashboardResponse } from "@/lib/types";

interface DashboardState {
  data: DashboardData | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Fetches the dashboard data through the local API proxy and exposes
 * loading / error states plus a manual `refetch` for the retry button.
 */
export function useDashboard() {
  const [state, setState] = useState<DashboardState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchDashboard = useCallback(async (signal?: AbortSignal) => {
    setState((s) => ({ ...s, isLoading: true, error: null }));
    try {
      const res = await fetch("/api/dashboard", { signal });
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      const json = (await res.json()) as DashboardResponse;
      if (!json?.dashboard) {
        throw new Error("Malformed API response");
      }
      setState({ data: json.dashboard, isLoading: false, error: null });
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setState({
        data: null,
        isLoading: false,
        error:
          err instanceof Error
            ? err.message
            : "Something went wrong while loading the dashboard.",
      });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchDashboard(controller.signal);
    return () => controller.abort();
  }, [fetchDashboard]);

  return { ...state, refetch: () => fetchDashboard() };
}
