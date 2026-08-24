export type PoolLocation = "melaka" | "outside-melaka"

export type PoolSystem = "skimmer" | "overflow"

export type PoolCategory =
  | "small"
  | "medium"
  | "large"
  | "ultra-large"

export interface PoolDimensions {
  length: number
  width: number
  depth: number
}

export interface PoolCalculatorInput {
  location: PoolLocation
  poolSystem: PoolSystem
  dimensions: PoolDimensions
}

export interface PriceRange {
  minimum: number
  maximum: number
}

export interface PriceBreakdown {
  area: number
  category: PoolCategory

  minimumRate: number
  maximumRate: number

  minimumDiscount: number
  maximumDiscount: number

  originalPrice: PriceRange
  finalPrice: PriceRange
}