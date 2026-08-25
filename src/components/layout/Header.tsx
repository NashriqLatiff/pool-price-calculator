export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-1">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Swimming Pool Cost Estimator
          </p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Pool Price Calculator
          </h1>

          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Estimate your swimming pool construction price based on pool size,
            system type, and project location.
          </p>
        </div>
      </div>
    </header>
  )
}