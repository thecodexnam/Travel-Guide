import './globals.css'
import { Boldonse } from 'next/font/google'
import NavBar from '@/component/NavBar'

const boldonse = Boldonse({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title: 'Travel Guide',
  description: 'Your ultimate travel companion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${boldonse.className} min-h-screen pt-28 text-white md:pt-24`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
