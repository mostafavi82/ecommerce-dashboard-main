import { Card } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function DashboardSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-3" aria-busy="true" aria-label="Loading dashboard">
      {/* Left column */}
      <div className="space-y-5 xl:col-span-2">
        <Card>
          <Skeleton className="h-5 w-32" />
          <Skeleton className="mt-3 h-7 w-48" />
          <Skeleton className="mt-6 h-2.5 w-full rounded-full" />
        </Card>
        <Card>
          <Skeleton className="h-6 w-44" />
          <div className="mt-4 flex gap-3">
            <Skeleton className="h-14 w-44" />
            <Skeleton className="h-14 w-44" />
          </div>
          <Skeleton className="mt-5 h-64 w-full" />
        </Card>
      </div>

      {/* Right column */}
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-9 w-9 rounded-full" />
              </div>
              <Skeleton className="mt-5 h-7 w-24" />
              <Skeleton className="mt-3 h-4 w-28" />
            </Card>
          ))}
        </div>
        <Skeleton className="h-44 w-full rounded-2xl" />
      </div>

      {/* Bottom row */}
      <Card>
        <Skeleton className="h-6 w-40" />
        <Skeleton className="mt-4 h-40 w-full rounded-xl" />
        <div className="mt-5 space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-full" />
          ))}
        </div>
      </Card>
      <Card className="xl:col-span-2">
        <Skeleton className="h-6 w-44" />
        <div className="mt-5 space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
