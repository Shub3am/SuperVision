import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/component/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SuperVision',
  description: 'Speed Read Anything within Seconds!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}><Header/>{children}</body>
    </html>
  )
}
