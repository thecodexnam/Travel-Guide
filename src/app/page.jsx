'use client'

import React from 'react'
import Link from 'next/link'

const highlights = [
  'Curated travel pages',
  'Reusable visual language',
  'Responsive Tailwind layout',
]

function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section className="mx-auto grid w-full max-w-6xl gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:gap-8 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Explore Better
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Build your next trip with a clean travel dashboard.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/70">
            Browse destinations, read about the project, and jump straight to
            the pages you need with a simple, consistent layout.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/home"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
            >
              Go to Home
            </Link>
            <Link
              href="/destination"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              View Destinations
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black/30 p-5 text-white/80"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Highlight
              </p>
              <h2 className="mt-3 text-xl font-semibold text-white">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page
