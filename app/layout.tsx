import "./globals.css"
import Script from "next/script"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Keep JBOX devtools mounted in the root layout; preview tooling depends on it. */}
        <Script src="/jbox-devtools.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
