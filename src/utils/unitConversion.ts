const FEET_PER_METER = 3.28084
const INCHES_PER_FOOT = 12

export function metersToFeet(meters: number): number {
  if (!Number.isFinite(meters) || meters < 0) {
    throw new Error("Meters must be a valid non-negative number.")
  }

  return meters * FEET_PER_METER
}

export function feetToMeters(feet: number): number {
  if (!Number.isFinite(feet) || feet < 0) {
    throw new Error("Feet must be a valid non-negative number.")
  }

  return feet / FEET_PER_METER
}

export function feetAndInchesToDecimalFeet(
  feet: number,
  inches: number,
): number {
  if (!Number.isFinite(feet) || feet < 0) {
    throw new Error("Feet must be a valid non-negative number.")
  }

  if (!Number.isFinite(inches) || inches < 0 || inches >= INCHES_PER_FOOT) {
    throw new Error("Inches must be between 0 and 11.")
  }

  return feet + inches / INCHES_PER_FOOT
}