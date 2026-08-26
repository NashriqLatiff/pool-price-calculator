import type { PriceBreakdown } from "@/types/calculator"

interface PriceSummaryProps {
  result: PriceBreakdown | null
  error: string | null
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatCategory(
  category: PriceBreakdown["category"],
) {
  switch (category) {
    case "small":
      return "Kecil"

    case "medium":
      return "Sederhana"

    case "large":
      return "Besar"

    case "ultra-large":
      return "Ultra Besar"
  }
}

export function PriceSummary({
  result,
  error,
}: PriceSummaryProps) {
  if (error) {
    return (
      <section className="space-y-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Estimated Price
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            Unable to Calculate
          </h2>
        </div>

        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      </section>
    )
  }

  if (!result) {
    return (
      <section className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Estimated Price
        </p>

        <h2 className="text-xl font-semibold">
          Waiting for valid pool details
        </h2>

        <p className="text-sm leading-6 text-muted-foreground">
          Enter valid dimensions and project information to see
          the estimated construction price.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      {/* Main Price */}
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Estimated Price Range
        </p>

        <div className="mt-2 space-y-1">
          <p className="break-words text-3xl font-bold tracking-tight sm:text-4xl">
            {formatCurrency(result.finalPrice.minimum)}
          </p>

          <p className="text-sm text-muted-foreground">
            to
          </p>

          <p className="break-words text-2xl font-semibold tracking-tight sm:text-3xl">
            {formatCurrency(result.finalPrice.maximum)}
          </p>
        </div>

        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          Estimated range based on pool size, system type,
          project location, and current pricing rules.
        </p>
      </div>

      {/* Pool Information */}
      <div className="border-t pt-5">
        <h3 className="text-sm font-semibold">
          Pool Information
        </h3>

        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Pool Area
            </dt>

            <dd className="font-medium">
              {result.area.toLocaleString("en-MY")} sqft
            </dd>
          </div>

          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Size Category
            </dt>

            <dd className="font-medium">
              {formatCategory(result.category)}
            </dd>
          </div>
        </dl>
      </div>

      {/* Pricing Breakdown */}
      <div className="border-t pt-5">
        <h3 className="text-sm font-semibold">
          Pricing Breakdown
        </h3>

        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Minimum Rate
            </dt>

            <dd className="font-medium">
              RM {result.minimumRate}/sqft
            </dd>
          </div>

          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Maximum Rate
            </dt>

            <dd className="font-medium">
              RM {result.maximumRate}/sqft
            </dd>
          </div>

          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Minimum Discount
            </dt>

            <dd className="font-medium">
              RM {result.minimumDiscount}/sqft
            </dd>
          </div>

          <div className="flex items-center justify-between gap-4">
            <dt className="text-muted-foreground">
              Maximum Discount
            </dt>

            <dd className="font-medium">
              RM {result.maximumDiscount}/sqft
            </dd>
          </div>
        </dl>
      </div>

      {/* Original Price */}
      <div className="border-t pt-5">
        <div className="rounded-xl bg-muted/60 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Original Price Before Discount
          </p>

          <p className="mt-2 text-sm font-semibold">
            {formatCurrency(result.originalPrice.minimum)}
            {" – "}
            {formatCurrency(result.originalPrice.maximum)}
          </p>
        </div>
      </div>
    </section>
  )
}