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
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 px-4 py-4 text-white backdrop-blur sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link href="/">
          <h1 className="text-lg font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-xl sm:tracking-[0.2em]">
            Travel Guide
          </h1>
        </Link>
        <ul className="flex flex-wrap gap-2 text-sm text-white/70 sm:gap-3">
          {links.map((link) => {
            const isActive = pathname === link.href
            const linkClasses = isActive
              ? 'border-cyan-300 bg-cyan-300 text-black'
              : 'border-white/10 bg-white/5 hover:border-cyan-300 hover:text-cyan-200'

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`inline-flex rounded-full border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${linkClasses}`}
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
