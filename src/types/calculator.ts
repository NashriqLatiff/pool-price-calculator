export type LocationType =
  | "melaka"
  | "outside-melaka"

export type PoolSystem =
  | "skimmer"
  | "overflow"
  | "infinity"

export type PackageType =
  | "basic"
  | "premium"

export interface PoolDimensions {
  length: number
  width: number
  depth: number
}

export interface PoolCalculatorInput {
  dimensions: PoolDimensions
  location: LocationType
  poolSystem: PoolSystem
  packageType: PackageType
}

export interface PoolPriceBreakdown {
  basePrice: number
  locationCharge: number
  systemCharge: number
  packageCharge: number
  totalPrice: number
}