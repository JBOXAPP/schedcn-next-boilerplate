/**
 * Root Layout
 *
 * The outermost layout in the App Router. This is a minimal shell
 * that simply passes children through to the locale-aware layout
 * in app/[locale]/layout.tsx.
 *
 * Do NOT add <html>, <body>, or providers here — those belong
 * in the [locale] layout so they can be locale-aware.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
