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
  onChange: (value: PoolCalculatorInput) => void
}

export function CalculatorForm({
  value,
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
        <h2 className="text-xl font-semibold">
          Pool Details
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Enter your pool specifications to calculate the estimated price.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">
          Project Location
        </Label>

        <Select
          value={value.location}
          onValueChange={(selectedValue) =>
            updateLocation(selectedValue as PoolLocation)
          }
        >
          <SelectTrigger id="location">
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

      <div className="space-y-2">
        <Label htmlFor="pool-system">
          Pool System
        </Label>

        <Select
          value={value.poolSystem}
          onValueChange={(selectedValue) =>
            updatePoolSystem(selectedValue as PoolSystem)
          }
        >
          <SelectTrigger id="pool-system">
            <SelectValue placeholder="Select pool system" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="skimmer">
              Skimmer
            </SelectItem>

            <SelectItem value="overflow">
              Overflow
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="length">
            Length (ft)
          </Label>

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
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="width">
            Width (ft)
          </Label>

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
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="depth">
            Depth (ft)
          </Label>

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
          />

          <p className="text-xs text-muted-foreground">
            Depth does not affect the pool price.
          </p>
        </div>
      </div>
    </section>
  )
}