import "./globals.css"
import Script from "next/script"

const umamiHost = process.env.NEXT_PUBLIC_JBOX_UMAMI_HOST
const umamiWebsiteId = process.env.NEXT_PUBLIC_JBOX_UMAMI_WEBSITE_ID

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
        {umamiHost && umamiWebsiteId ? (
          <Script
            src={`${umamiHost}/script.js`}
            data-website-id={umamiWebsiteId}
            data-errors="true"
            data-performance="true"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  )
}
