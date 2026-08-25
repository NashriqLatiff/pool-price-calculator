import { useMemo, useState } from "react"

import {
  feetAndInchesToDecimalFeet,
  feetToMeters,
  metersToFeet,
} from "@/utils/unitConversion"

type ConversionMode = "meters-to-feet" | "feet-to-meters"

export function UnitConverter() {
  const [mode, setMode] =
    useState<ConversionMode>("meters-to-feet")

  const [value, setValue] = useState("3")

  const [precisionFeet, setPrecisionFeet] = useState("5")
  const [precisionInches, setPrecisionInches] = useState("7")

  const convertedValue = useMemo(() => {
  if (value.trim() === "") {
    return null
  }

  const numericValue = Number(value)

  if (!Number.isFinite(numericValue) || numericValue < 0) {
    return null
  }

  try {
    if (mode === "meters-to-feet") {
      return metersToFeet(numericValue)
    }

    return feetToMeters(numericValue)
  } catch {
    return null
  }
}, [mode, value])

  const decimalFeet = useMemo(() => {
  if (
    precisionFeet.trim() === "" ||
    precisionInches.trim() === ""
  ) {
    return null
  }

  const feet = Number(precisionFeet)
  const inches = Number(precisionInches)

  if (
    !Number.isFinite(feet) ||
    !Number.isFinite(inches)
  ) {
    return null
  }

  try {
    return feetAndInchesToDecimalFeet(feet, inches)
  } catch {
    return null
  }
}, [precisionFeet, precisionInches])

  return (
    <section className="space-y-6 rounded-xl border bg-background p-6 shadow-sm">
      <div>
        <h2 className="text-2xl font-semibold">
          Unit Converter
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Convert pool measurements between meters and feet.
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="conversion-mode"
          className="text-sm font-medium"
        >
          Conversion
        </label>

        <select
          id="conversion-mode"
          value={mode}
          onChange={(event) =>
            setMode(event.target.value as ConversionMode)
          }
          className="h-10 w-full rounded-md border bg-background px-3"
        >
          <option value="meters-to-feet">
            Meter → Feet
          </option>

          <option value="feet-to-meters">
            Feet → Meter
          </option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="conversion-value"
          className="text-sm font-medium"
        >
          {mode === "meters-to-feet"
            ? "Meters"
            : "Feet"}
        </label>

        <input
          id="conversion-value"
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(event) =>
            setValue(event.target.value)
          }
          className="h-10 w-full rounded-md border bg-background px-3"
        />
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Result
        </p>

        <p className="mt-1 text-2xl font-semibold">
          {convertedValue !== null
            ? `${convertedValue.toFixed(2)} ${
                mode === "meters-to-feet" ? "ft" : "m"
              }`
            : "Enter a valid value"}
        </p>
      </div>

      <div className="border-t pt-6">
        <div>
          <h3 className="text-lg font-semibold">
            Precision Foot Calculator
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Convert feet and inches into decimal feet.
          </p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="precision-feet"
              className="text-sm font-medium"
            >
              Feet
            </label>

            <input
              id="precision-feet"
              type="number"
              min="0"
              value={precisionFeet}
              onChange={(event) =>
                setPrecisionFeet(event.target.value)
            }
              className="h-10 w-full rounded-md border bg-background px-3"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="precision-inches"
              className="text-sm font-medium"
            >
              Inches
            </label>

            <input
              id="precision-inches"
              type="number"
              min="0"
              max="11"
              value={precisionInches}
              onChange={(event) =>
                setPrecisionInches(event.target.value)
            }
              className="h-10 w-full rounded-md border bg-background px-3"
            />
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground">
            Total Feet
          </p>

          <p className="mt-1 text-2xl font-semibold">
            {decimalFeet !== null
              ? `${decimalFeet.toFixed(2)} ft`
              : "Enter valid feet and inches"}
          </p>
        </div>
      </div>
    </section>
  )
}