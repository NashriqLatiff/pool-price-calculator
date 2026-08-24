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

function formatCategory(category: PriceBreakdown["category"]) {
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
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Estimated Price
        </h2>

        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      </section>
    )
  }

  if (!result) {
    return (
      <section>
        <h2 className="text-xl font-semibold">
          Estimated Price
        </h2>

        <p className="mt-2 text-muted-foreground">
          Enter your pool details to see the estimated price.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">
          Estimated Price
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Estimated construction price range.
        </p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground">
          Price Range
        </p>

        <p className="mt-1 text-3xl font-bold tracking-tight">
          {formatCurrency(result.finalPrice.minimum)}
          {" – "}
          {formatCurrency(result.finalPrice.maximum)}
        </p>
      </div>

      <div className="grid gap-4 border-t pt-5 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Pool Area
          </p>

          <p className="font-semibold">
            {result.area} sqft
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Size Category
          </p>

          <p className="font-semibold">
            {formatCategory(result.category)}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Minimum Rate
          </p>

          <p className="font-semibold">
            RM {result.minimumRate}/sqft
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Maximum Rate
          </p>

          <p className="font-semibold">
            RM {result.maximumRate}/sqft
          </p>
        </div>
      </div>
    </section>
  )
}