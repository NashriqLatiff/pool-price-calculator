import type {
  PoolCalculatorInput,
  PoolPriceBreakdown,
} from "@/types/calculator"

export function calculatePoolPrice(
  input: PoolCalculatorInput
): PoolPriceBreakdown {
  const { dimensions, location, poolSystem, packageType } = input

  void dimensions
  void location
  void poolSystem
  void packageType

  const basePrice = 0
  const locationCharge = 0
  const systemCharge = 0
  const packageCharge = 0

  const totalPrice =
    basePrice +
    locationCharge +
    systemCharge +
    packageCharge

  return {
    basePrice,
    locationCharge,
    systemCharge,
    packageCharge,
    totalPrice,
  }
}