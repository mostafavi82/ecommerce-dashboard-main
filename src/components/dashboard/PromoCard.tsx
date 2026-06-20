import { ArrowRight, Sparkles } from "lucide-react";

/** Static promotional banner from the design ("Level up your sales..."). */
export function PromoCard() {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-5 text-white shadow-[0_1px_3px_rgba(16,24,40,0.06)]">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10" />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold">
          <Sparkles className="h-3.5 w-3.5" />
          Culters Pro
        </span>
        <h3 className="mt-3 text-lg font-bold leading-snug">
          Level up your sales managing to the next level.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-blue-100">
          An easy way to manage sales with care and precision.
        </p>
      </div>

      <button className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50">
        Update to Siohioma+
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
