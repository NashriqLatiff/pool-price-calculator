import type { PoolCalculatorInput } from "@/types/calculator"

export interface CalculatorValidationErrors {
  length?: string
  width?: string
  depth?: string
  area?: string
}

export function validateCalculatorInput(
  input: PoolCalculatorInput,
): CalculatorValidationErrors {
  const errors: CalculatorValidationErrors = {}

  const { length, width, depth } = input.dimensions

  if (!Number.isFinite(length) || length <= 0) {
    errors.length = "Length must be greater than 0."
  }

  if (!Number.isFinite(width) || width <= 0) {
    errors.width = "Width must be greater than 0."
  }

  if (!Number.isFinite(depth) || depth <= 0) {
    errors.depth = "Depth must be greater than 0."
  }

  if (
    Number.isFinite(length) &&
    Number.isFinite(width) &&
    length > 0 &&
    width > 0
  ) {
    const area = length * width

    if (area < 80) {
      errors.area =
        "Pool area must be at least 80 square feet."
    }
  }

  return errors
}

export function hasValidationErrors(
  errors: CalculatorValidationErrors,
): boolean {
  return Object.keys(errors).length > 0
}