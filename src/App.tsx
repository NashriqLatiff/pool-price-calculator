import { Button } from "@/components/ui/button"

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <div className="space-y-6 rounded-2xl border bg-background p-10 shadow-sm">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            Pool Price Calculator
          </h1>

          <p className="mt-2 text-muted-foreground">
            React + TypeScript + Vite + Tailwind CSS + shadcn/ui
          </p>
        </div>

        <Button>Start Calculation</Button>
      </div>
    </main>
  )
}

export default App