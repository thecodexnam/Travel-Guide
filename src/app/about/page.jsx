import React from 'react'

function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:p-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            About
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Welcome to the About Page
          </h1>
          <p className="max-w-3xl text-base leading-7 text-white/70">
            Learn more about the idea behind this travel guide and the simple
            visual system shared across the app.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-xl font-semibold">What this app is for</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              A basic course project that now has more readable spacing,
              stronger contrast, and more intentional page structure.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-xl font-semibold">Design direction</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Dark surfaces, cyan accents, rounded sections, and consistent
              content cards across all pages.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
