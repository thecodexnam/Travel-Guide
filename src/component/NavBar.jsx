"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/home', label: 'Home' },
  { href: '/destination', label: 'Destination' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 text-white sm:px-6">
      <div className="mx-auto w-full max-w-6xl md:flex md:items-center md:justify-between">
        <div className="flex w-full items-center justify-between rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-5 py-4 shadow-[0_20px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl">
          <Link href="/">
            <a className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/15 text-sm font-semibold text-cyan-200 ring-1 ring-inset ring-cyan-200/20">
                TG
              </span>
              <div className="hidden sm:block">
                <p className="text-lg font-semibold tracking-[0.08em] text-white sm:text-xl">
                  Travel Guide
                </p>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                  City Notes
                </p>
              </div>
            </a>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <ul className="flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
                {links.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href === '/destination' && pathname.startsWith('/destination/'))
                  const linkClasses = isActive
                    ? 'border-cyan-200/30 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-400/20'
                    : 'border-white/10 bg-white/5 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-100'

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`inline-flex rounded-full border px-3 py-2 text-xs font-medium sm:px-4 sm:text-sm ${linkClasses}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <button
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="ml-2 inline-flex items-center justify-center rounded-md bg-white/6 p-2 text-white/90 md:hidden"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="mt-3 rounded-[1rem] border border-white/8 bg-slate-950/80 p-4 shadow-lg md:hidden">
            <ul className="flex flex-col gap-3">
              {links.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === '/destination' && pathname.startsWith('/destination/'))
                const linkClasses = isActive
                  ? 'bg-cyan-300 text-slate-950'
                  : 'bg-white/5 hover:bg-white/10'

                return (
                  <li key={link.href}>
                    <Link href={link.href} className={`block rounded-lg px-4 py-2 text-sm font-medium ${linkClasses}`}> 
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
