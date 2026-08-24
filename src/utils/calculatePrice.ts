import {
  POOL_CATEGORY_THRESHOLDS,
  POOL_PRICING,
} from "@/data/pricing"

import type {
  PoolCalculatorInput,
  PoolCategory,
  PriceBreakdown,
} from "@/types/calculator"

export function calculatePoolArea(
  length: number,
  width: number,
): number {
  return length * width
}

export function getPoolCategory(
  area: number,
): PoolCategory {
  if (area >= POOL_CATEGORY_THRESHOLDS.ultraLarge) {
    return "ultra-large"
  }

  if (area >= POOL_CATEGORY_THRESHOLDS.large) {
    return "large"
  }

  if (area >= POOL_CATEGORY_THRESHOLDS.medium) {
    return "medium"
  }

  return "small"
}

function getPricingCategoryKey(
  category: PoolCategory,
) {
  switch (category) {
    case "small":
      return "small"

    case "medium":
      return "medium"

    case "large":
      return "large"

    case "ultra-large":
      return "ultraLarge"
  }
}

export function calculatePoolPrice(
  input: PoolCalculatorInput,
): PriceBreakdown {
  const { dimensions, location, poolSystem } = input

  const area = calculatePoolArea(
    dimensions.length,
    dimensions.width,
  )

  if (area < POOL_CATEGORY_THRESHOLDS.small) {
    throw new Error(
      "Pool area must be at least 80 square feet.",
    )
  }

  const category = getPoolCategory(area)
  const categoryKey = getPricingCategoryKey(category)

  const locationKey =
    location === "melaka"
      ? "melaka"
      : "outsideMelaka"

  const minimumPricing =
    POOL_PRICING[poolSystem].minimum[categoryKey][
      locationKey
    ]

  const maximumPricing =
    POOL_PRICING[poolSystem].maximum[categoryKey][
      locationKey
    ]

  const minimumOriginalPrice =
    area * minimumPricing.rate

  const maximumOriginalPrice =
    area * maximumPricing.rate

  const minimumFinalPrice =
    area *
    (minimumPricing.rate -
      minimumPricing.discount)

  const maximumFinalPrice =
    area *
    (maximumPricing.rate -
      maximumPricing.discount)

  return {
    area,
    category,

    minimumRate: minimumPricing.rate,
    maximumRate: maximumPricing.rate,

    minimumDiscount: minimumPricing.discount,
    maximumDiscount: maximumPricing.discount,

    originalPrice: {
      minimum: minimumOriginalPrice,
      maximum: maximumOriginalPrice,
    },

    finalPrice: {
      minimum: minimumFinalPrice,
      maximum: maximumFinalPrice,
    },
  }
}