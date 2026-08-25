import { useMemo, useState } from "react"

import { CalculatorForm } from "@/components/calculator/CalculatorForm"
import { PriceSummary } from "@/components/calculator/PriceSummary"
import { Header } from "@/components/layout/Header"

import type { PoolCalculatorInput } from "@/types/calculator"

import { calculatePoolPrice } from "@/utils/calculatePrice"
import {
  hasValidationErrors,
  validateCalculatorInput,
} from "@/utils/validateCalculator"

import { UnitConverter } from "@/components/converter/UnitConverter"

const INITIAL_INPUT: PoolCalculatorInput = {
  location: "melaka",
  poolSystem: "skimmer",

  dimensions: {
    length: 16,
    width: 8,
    depth: 4,
  },
}

function App() {
  const [input, setInput] =
    useState<PoolCalculatorInput>(INITIAL_INPUT)

  const validationErrors = useMemo(
    () => validateCalculatorInput(input),
    [input],
  )

  const calculation = useMemo(() => {
    if (hasValidationErrors(validationErrors)) {
      return {
        result: null,
        error: null,
      }
    }

    try {
      return {
        result: calculatePoolPrice(input),
        error: null,
      }
    } catch (error) {
      return {
        result: null,
        error:
          error instanceof Error
            ? error.message
            : "Unable to calculate pool price.",
      }
    }
  }, [input, validationErrors])

  return (
    <div className="min-h-screen bg-muted/40">
      <Header />

      <main className="mx-auto max-w-6xl space-y-6 px-6 py-8">
        <UnitConverter />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border bg-background p-6 shadow-sm">
            <CalculatorForm
              value={input}
              errors={validationErrors}
              onChange={setInput}
          />
        </div>

        <div className="rounded-xl border bg-background p-6 shadow-sm">
          <PriceSummary
            result={calculation.result}
            error={calculation.error}
        />
        </div>
        </div>
      </main>
    </div>
  )
}

export default App