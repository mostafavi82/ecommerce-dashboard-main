import Image from "next/image";
import type { PopularProduct } from "@/lib/types";
import { Card } from "@/components/ui/Card";
import { formatNumber, formatUsd } from "@/lib/format";
import { cn } from "@/lib/cn";

export function PopularProductsCard({ data }: { data: PopularProduct[] }) {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          Popular Products
        </h3>
        <a
          href="#"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          See all
        </a>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400 dark:border-slate-800 dark:text-slate-500">
              <th className="pb-3 pr-4 font-semibold">Product</th>
              <th className="pb-3 pr-4 font-semibold">Price</th>
              <th className="pb-3 pr-4 font-semibold">Sales</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, i) => (
              <tr
                key={`${product.id}-${i}`}
                className="border-b border-slate-50 last:border-0 dark:border-slate-800/60"
              >
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800">
                      <Image
                        src="/images/product-shoe.png"
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-slate-800 dark:text-slate-100">
                        {product.name}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        ID {product.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3.5 pr-4 font-medium text-slate-700 dark:text-slate-300">
                  {formatUsd(product.price)}
                </td>
                <td className="py-3.5 pr-4 font-medium text-slate-700 dark:text-slate-300">
                  {formatNumber(product.sales)}
                </td>
                <td className="py-3.5">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
                      product.status.toLowerCase() === "success"
                        ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
                    )}
                  >
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
