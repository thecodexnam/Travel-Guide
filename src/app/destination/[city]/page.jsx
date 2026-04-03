import React from 'react'
import Image from 'next/image'
import parisImage from '@/assets/paris.jpg'
import tokyoImage from '@/assets/tokyo.jpg'
import newYorkImage from '@/assets/new-york.jpg'

const cityDetails = {
  'paris-france': {
    image: parisImage,
    title: 'Paris, France',
    tagline: 'Romantic streets, grand museums, and timeless cafe culture.',
    summary:
      'Paris is a classic destination for architecture, art, food, and slow evening walks by the river.',
  },
  'tokyo-japan': {
    image: tokyoImage,
    title: 'Tokyo, Japan',
    tagline: 'Bright city lights, precise design, and unforgettable food.',
    summary:
      'Tokyo blends modern energy with quiet traditions, giving you a city that feels fast and deeply detailed at the same time.',
  },
  'new-york-usa': {
    image: newYorkImage,
    title: 'New York, USA',
    tagline: 'A dense, creative city full of iconic streets and skylines.',
    summary:
      'New York offers landmarks, neighborhoods, and nonstop movement, making it a strong pick for first-time and repeat travelers.',
  },
}

async function Page({ params }) {
  const { city } = await params
  const destination = cityDetails[city] || {
    image: parisImage,
    title: city.replace(/-/g, ' '),
    tagline: 'A destination worth exploring.',
    summary: 'More information for this city can be added here later.',
  }

  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section className="mx-auto grid w-full max-w-6xl gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:gap-8 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Destination Details
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {destination.title}
          </h1>
          <p className="text-lg text-white/80">{destination.tagline}</p>
          <p className="max-w-2xl text-base leading-7 text-white/70">
            {destination.summary}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Best For
              </p>
              <p className="mt-3 text-white/75">
                Sightseeing, culture, food, and memorable city walks.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                Travel Mood
              </p>
              <p className="mt-3 text-white/75">
                Stylish, energetic, and easy to explore at your own pace.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-black to-white/5 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_45%)]" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/55">
                Visual Preview
              </p>
            </div>

            <div className="relative h-60 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-lg shadow-cyan-500/10 sm:h-72">
              <Image
                src={destination.image}
                alt={`${destination.title} destination preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                City Slug
              </p>
              <p className="mt-3 break-words text-white/80">{city}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
