import React from 'react'

const homeCards = [
  'Plan routes',
  'Compare destinations',
  'Keep travel notes simple',
]

function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:p-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Home Base
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Welcome to the Home Page
          </h1>
          <p className="text-base leading-7 text-white/70">
            Explore the world with a lighter, more structured starting point
            for the rest of the travel pages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {homeCards.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black/30 p-6"
            >
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                A basic content block that gives this page some structure and
                balance.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page
