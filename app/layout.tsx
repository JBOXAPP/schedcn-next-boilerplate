/**
 * Root Layout
 *
 * The outermost layout in the App Router. Must include <html> and <body>
 * since Next.js requires these tags in the root layout for all routes,
 * including 404s and error boundaries that don't match the [locale] segment.
 *
 * Fonts and CSS are imported here so they're available globally.
 * Locale-specific logic (providers, lang attribute) lives in [locale]/layout.tsx.
 */
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
