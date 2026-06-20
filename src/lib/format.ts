/** Shared number / currency formatting helpers. */

export function formatCompactCurrency(value: number): string {
  if (value >= 1_000_000_000) {
    return `Rp ${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (value >= 1_000_000) {
    return `Rp ${(value / 1_000_000).toFixed(0)}M`;
  }
  return `Rp ${value.toLocaleString("en-US")}`;
}

export function formatRupiah(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`;
}

export function formatUsd(value: number): string {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}




export function formatCompactNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(value % 1000 === 0 ? 0 : 1)}k`;
  return value.toLocaleString("en-US");
}

export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}
