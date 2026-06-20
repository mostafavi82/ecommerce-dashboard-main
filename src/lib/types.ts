/** Typed contract of the /dashboard API response. */

export type ChangeDirection = "up" | "down";

export interface SalesTarget {
  in_progress: number;
  target: number;
  progress_percentage: number;
}

export interface Stat {
  value: number;
  change_percentage: number;
  change_direction: ChangeDirection;
  period: string;
}

export interface Stats {
  total_revenue: Stat;
  total_customers: Stat;
  total_transactions: Stat;
  total_products: Stat;
}

export interface SalesChartPoint {
  month: string;
  avg_sale_value: number;
  avg_item_per_sale: number;
}

export interface SalesChartSeries {
  label: string;
  color: string;
}

export interface SalesChart {
  title: string;
  summary: {
    average_item_per_sale: number;
    average_sale_value: number;
  };
  series: SalesChartSeries[];
  data: SalesChartPoint[];
}

export interface ProvinceGrowth {
  province: string;
  growth_percentage: number;
}

export interface PopularProduct {
  id: string;
  name: string;
  price: number;
  sales: number;
  status: string;
}

export interface DashboardData {
  sales_target: SalesTarget;
  stats: Stats;
  sales_chart: SalesChart;
  customer_growth_by_province: ProvinceGrowth[];
  popular_products: PopularProduct[];
}

export interface DashboardResponse {
  dashboard: DashboardData;
}
