/**
 * i18n Proxy (formerly Middleware)
 *
 * Intercepts incoming requests and handles locale detection + redirects.
 * For example, visiting "/" redirects to "/en" based on the default locale.
 *
 * The `config.matcher` defines which routes go through the proxy.
 * When adding a new locale, add a corresponding matcher pattern
 * (e.g., '/(es)/:path*' for Spanish).
 */
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export function proxy(request: NextRequest) {
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/',
    '/(en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
