'use client'

import React from 'react'
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

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4 text-white sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/70 px-5 py-4 shadow-[0_20px_70px_rgba(2,6,23,0.45)] backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <Link href="/">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/15 text-sm font-semibold text-cyan-200 ring-1 ring-inset ring-cyan-200/20">
              TG
            </span>
            <div>
              <p className="text-lg font-semibold tracking-[0.08em] text-white sm:text-xl">
                Travel Guide
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                City Notes
              </p>
            </div>
          </div>
        </Link>
        <ul className="flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href === '/destination' &&
                pathname.startsWith('/destination/'))
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
    </nav>
  )
}

export default NavBar
