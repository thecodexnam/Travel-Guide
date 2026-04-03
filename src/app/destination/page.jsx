'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const destinations = [
  {
    name: 'Paris, France',
    detail: 'Romantic streets, iconic landmarks, and timeless cafes.',
  },
  {
    name: 'Tokyo, Japan',
    detail: 'A fast-moving mix of neon skylines, food culture, and tradition.',
  },
  {
    name: 'New York, USA',
    detail: 'Skyscrapers, creative energy, and neighborhoods full of character.',
  },
]

function Page() {
  const router = useRouter()

  function handleDestinationClick(destinationName) {
    const citySlug = destinationName
      .toLowerCase()
      .replace(/, /g, '-')
      .replace(/ /g, '-')

    router.push(`/destination/${citySlug}`)
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:gap-10 sm:p-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Top Picks
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Welcome to the Destination Page
          </h1>
          <p className="text-base leading-7 text-white/70">
            Discover a few standout cities and start planning your next trip.
          </p>
        </div>

        <ul className="flex flex-wrap gap-6">
          {destinations.map((destination) => (
            <li
              key={destination.name}
              className="basis-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 sm:p-6 md:basis-[calc(50%-12px)] xl:basis-[calc(33.333%-16px)]"
              onClick={() => handleDestinationClick(destination.name)}
            >
              <div className="space-y-4">
                <span className="inline-flex rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200">
                  Featured Destination
                </span>
                <h2 className="text-2xl font-semibold">{destination.name}</h2>
                <p className="text-sm leading-6 text-white/70">
                  {destination.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Page
