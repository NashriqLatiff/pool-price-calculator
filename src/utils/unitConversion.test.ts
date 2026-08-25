import { describe, expect, it } from "vitest"

import {
  feetAndInchesToDecimalFeet,
  feetToMeters,
  metersToFeet,
} from "./unitConversion"

describe("metersToFeet", () => {
  it("converts meters to feet correctly", () => {
    expect(metersToFeet(3)).toBeCloseTo(9.84252, 5)
  })

  it("converts zero meters to zero feet", () => {
    expect(metersToFeet(0)).toBe(0)
  })
})

describe("feetToMeters", () => {
  it("converts feet to meters correctly", () => {
    expect(feetToMeters(50)).toBeCloseTo(15.24, 2)
  })

  it("converts zero feet to zero meters", () => {
    expect(feetToMeters(0)).toBe(0)
  })
})

describe("feetAndInchesToDecimalFeet", () => {
  it("converts feet and inches to decimal feet correctly", () => {
    expect(
      feetAndInchesToDecimalFeet(5, 7),
    ).toBeCloseTo(5.5833, 4)
  })

  it("handles zero inches", () => {
    expect(
      feetAndInchesToDecimalFeet(5, 0),
    ).toBe(5)
  })
})

describe("unit conversion validation", () => {
  it("rejects negative meters", () => {
    expect(() => metersToFeet(-1)).toThrow()
  })

  it("rejects negative feet", () => {
    expect(() => feetToMeters(-1)).toThrow()
  })

  it("rejects inches greater than 11", () => {
    expect(() =>
      feetAndInchesToDecimalFeet(5, 12),
    ).toThrow()
  })
})