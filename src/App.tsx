import { CalculatorForm } from "@/components/calculator/CalculatorForm"
import { PriceSummary } from "@/components/calculator/PriceSummary"
import { Header } from "@/components/layout/Header"

function App() {
  return (
    <div className="min-h-screen bg-muted/40">
      <Header />

      <main className="mx-auto grid max-w-6xl gap-6 px-6 py-8 lg:grid-cols-2">
        <div className="rounded-xl border bg-background p-6 shadow-sm">
          <CalculatorForm />
        </div>

        <div className="rounded-xl border bg-background p-6 shadow-sm">
          <PriceSummary />
        </div>
      </main>
    </div>
  )
}

export default App