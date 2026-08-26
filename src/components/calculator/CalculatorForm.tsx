import type { CalculatorValidationErrors } from "@/utils/validateCalculator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import type {
  PoolCalculatorInput,
  PoolLocation,
  PoolSystem,
} from "@/types/calculator"

interface CalculatorFormProps {
  value: PoolCalculatorInput
  errors: CalculatorValidationErrors
  onChange: (value: PoolCalculatorInput) => void
}

export function CalculatorForm({
  value,
  errors,
  onChange,
}: CalculatorFormProps) {
  function updateLocation(location: PoolLocation) {
    onChange({
      ...value,
      location,
    })
  }

  function updatePoolSystem(poolSystem: PoolSystem) {
    onChange({
      ...value,
      poolSystem,
    })
  }

  function updateDimension(
    key: "length" | "width" | "depth",
    newValue: number,
  ) {
    onChange({
      ...value,
      dimensions: {
        ...value.dimensions,
        [key]: newValue,
      },
    })
  }

  return (
    <section className="space-y-6">
      <div>
        <div className="space-y-1">
  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
    Project Configuration
  </p>

  <h2 className="text-2xl font-semibold tracking-tight">
    Pool Details
  </h2>

  <p className="text-sm leading-6 text-muted-foreground">
    Select the project location, pool system, and pool dimensions.
    Pricing updates automatically as you change the values.
  </p>
</div>
      </div>

      <div className="space-y-3 rounded-xl border bg-muted/20 p-4">
  <div>
    <Label htmlFor="location" className="text-sm font-semibold">
      Project Location
    </Label>

    <p className="mt-1 text-xs text-muted-foreground">
      Pricing differs between Melaka and projects outside Melaka.
    </p>
  </div>

  <Select
    value={value.location}
    onValueChange={(selectedValue) =>
      updateLocation(selectedValue as PoolLocation)
    }
  >
    <SelectTrigger id="location" className="w-full">
      <SelectValue placeholder="Select location" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="melaka">
        Melaka
      </SelectItem>

      <SelectItem value="outside-melaka">
        Outside Melaka
      </SelectItem>
    </SelectContent>
  </Select>
</div>

      <div className="space-y-3 rounded-xl border bg-muted/20 p-4">
  <div>
    <Label htmlFor="pool-system" className="text-sm font-semibold">
      Pool System
    </Label>

    <p className="mt-1 text-xs text-muted-foreground">
      Choose the construction system used for the pool.
    </p>
  </div>

  <Select
    value={value.poolSystem}
    onValueChange={(selectedValue) =>
      updatePoolSystem(selectedValue as PoolSystem)
    }
  >
    <SelectTrigger id="pool-system" className="w-full">
      <SelectValue placeholder="Select pool system" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="skimmer">
        Skimmer System
      </SelectItem>

      <SelectItem value="overflow">
        Overflow System
      </SelectItem>
    </SelectContent>
  </Select>
</div>

<div className="space-y-4">
  <div>
    <h3 className="text-sm font-semibold">
      Pool Dimensions
    </h3>

    <p className="mt-1 text-xs text-muted-foreground">
      Enter all measurements in feet. Minimum pool area is 80 sqft.
    </p>
  </div>

  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {/* Length */}
    ...
  </div>
</div>

      <div className="space-y-2">
  <Label htmlFor="length">
    Length
  </Label>

  <div className="relative">
    <Input
      id="length"
      type="number"
      min={0}
      step="0.1"
      value={value.dimensions.length}
      onChange={(event) =>
        updateDimension(
          "length",
          Number(event.target.value),
        )
      }
      className="pr-10"
    />

    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
      ft
    </span>
  </div>

  {errors.length && (
    <p className="text-xs text-destructive">
      {errors.length}
    </p>
  )}
</div>

        <div className="space-y-2">
            <Label htmlFor="width">
            Width
        </Label>

        <div className="relative">
            <Input
                id="width"
                type="number"
                min={0}
                step="0.1"
                value={value.dimensions.width}
                onChange={(event) =>
                    updateDimension(
                    "width",
                Number(event.target.value),
            )
            }
            className="pr-10"
            />

            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
            ft
            </span>
        </div>

        {errors.width && (
            <p className="text-xs text-destructive">
        {errors.width}
            </p>
        )}
        </div>

        <div className="space-y-2">
  <Label htmlFor="depth">
    Depth
  </Label>

  <div className="relative">
    <Input
      id="depth"
      type="number"
      min={0}
      step="0.1"
      value={value.dimensions.depth}
      onChange={(event) =>
        updateDimension(
          "depth",
          Number(event.target.value),
        )
      }
      className="pr-10"
    />

          <p className="text-xs text-muted-foreground">
            Depth does not affect the pool price.
          </p>

          {errors.depth && (
            <p className="text-xs text-destructive">
            {errors.depth}
            </p>
            )}
        </div>
      </div>
      {/* AREA ERROR DI SINI */}
        {errors.area && (
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4">
                <p className="text-sm font-medium text-destructive">
                    Invalid pool size
                </p>

                <p className="mt-1 text-sm text-destructive">
                    {errors.area}
                </p>
            </div>
        )}
    </section>
  )
}