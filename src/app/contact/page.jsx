import React from 'react'

const contactDetails = [
  'Email: hello@travelguide.dev',
  'Phone: +91 90000 00000',
  'Office: Kolkata, India',
]

function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-8 text-white sm:px-6 sm:py-12">
      <section className="mx-auto grid w-full max-w-5xl gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 sm:p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
            Contact
          </p>
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Welcome to the Contact Page
          </h1>
          <p className="text-base leading-7 text-white/70">
            Feel free to reach out through any of the example channels shown
            here.
          </p>
        </div>

        <div className="space-y-4">
          {contactDetails.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-black/30 p-5 text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page
