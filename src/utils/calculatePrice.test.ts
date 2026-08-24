import { describe, expect, it } from "vitest"

import {
  calculatePoolArea,
  calculatePoolPrice,
  getPoolCategory,
} from "./calculatePrice"

describe("calculatePoolArea", () => {
  it("calculates pool area from length and width", () => {
    expect(calculatePoolArea(16, 8)).toBe(128)
  })
})

describe("getPoolCategory", () => {
  it("categorizes 80 sqft as small", () => {
    expect(getPoolCategory(80)).toBe("small")
  })

  it("categorizes 128 sqft as medium", () => {
    expect(getPoolCategory(128)).toBe("medium")
  })

  it("categorizes 200 sqft as large", () => {
    expect(getPoolCategory(200)).toBe("large")
  })

  it("categorizes 240 sqft as ultra-large", () => {
    expect(getPoolCategory(240)).toBe("ultra-large")
  })
})

describe("calculatePoolPrice", () => {
  it("calculates Skimmer Melaka pricing correctly", () => {
    const result = calculatePoolPrice({
      location: "melaka",
      poolSystem: "skimmer",
      dimensions: {
        length: 16,
        width: 8,
        depth: 4,
      },
    })

    expect(result.area).toBe(128)
    expect(result.category).toBe("medium")

    expect(result.finalPrice.minimum).toBe(40960)
    expect(result.finalPrice.maximum).toBe(43520)
  })

  it("calculates Skimmer outside Melaka pricing correctly", () => {
    const result = calculatePoolPrice({
      location: "outside-melaka",
      poolSystem: "skimmer",
      dimensions: {
        length: 16,
        width: 8,
        depth: 4,
      },
    })

    expect(result.finalPrice.minimum).toBe(51200)
    expect(result.finalPrice.maximum).toBe(55040)
  })

  it("calculates Overflow Melaka pricing correctly", () => {
    const result = calculatePoolPrice({
      location: "melaka",
      poolSystem: "overflow",
      dimensions: {
        length: 16,
        width: 8,
        depth: 4,
      },
    })

    expect(result.finalPrice.minimum).toBe(43520)
    expect(result.finalPrice.maximum).toBe(46080)
  })

  it("calculates Overflow outside Melaka pricing correctly", () => {
    const result = calculatePoolPrice({
      location: "outside-melaka",
      poolSystem: "overflow",
      dimensions: {
        length: 12,
        width: 8,
        depth: 4,
      },
    })

    expect(result.area).toBe(96)
    expect(result.category).toBe("small")

    expect(result.finalPrice.minimum).toBe(45120)
    expect(result.finalPrice.maximum).toBe(47040)
  })

  it("does not change price when pool depth changes", () => {
  const threeFeet = calculatePoolPrice({
    location: "melaka",
    poolSystem: "skimmer",
    dimensions: {
      length: 16,
      width: 8,
      depth: 3,
    },
  })

  const fourFeet = calculatePoolPrice({
    location: "melaka",
    poolSystem: "skimmer",
    dimensions: {
      length: 16,
      width: 8,
      depth: 4,
    },
  })

  expect(threeFeet.finalPrice).toEqual(
    fourFeet.finalPrice,
  )
})

it("rejects pools smaller than 80 sqft", () => {
  expect(() =>
    calculatePoolPrice({
      location: "melaka",
      poolSystem: "skimmer",
      dimensions: {
        length: 9,
        width: 8,
        depth: 4,
      },
    }),
  ).toThrow(
    "Pool area must be at least 80 square feet.",
  )
})
})