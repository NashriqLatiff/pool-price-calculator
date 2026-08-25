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
  <div className="min-h-screen bg-muted/30">
    <Header />

    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-10">
        {/* Unit Conversion Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Unit Conversion Tools
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Convert measurements before entering your pool dimensions.
            </p>
          </div>

          <UnitConverter />
        </section>

        {/* Pool Calculator Section */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Pool Price Calculator
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Enter your project details to calculate the estimated pool price.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
            <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
              <CalculatorForm
                value={input}
                errors={validationErrors}
                onChange={setInput}
              />
            </div>

            <div className="lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-2xl border bg-background p-5 shadow-sm sm:p-6">
                <PriceSummary
                  result={calculation.result}
                  error={calculation.error}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
)
}

export default App