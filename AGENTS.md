# AGENTS.md

## Project Overview

JBOX Next.js boilerplate using **Next.js 16** (App Router), **React 19**, **TypeScript 5**, **Tailwind CSS 4**, **shadcn/ui** (radix-vega style), **next-intl** (i18n), and **TanStack React Query**. Package manager is **bun**.

There is no test framework configured. No test runner, no test files exist. If tests are added in the future, configure vitest or jest and update this section.

## Type Checking

```bash
bunx tsc --noEmit    # Run TypeScript type checking
```

## Code Style

### TypeScript

- **Strict mode** is enabled (`strict: true` in tsconfig.json).
- Target: ES2017, module: esnext, moduleResolution: bundler.
- Use `React.ComponentProps<"element">` for component prop types (not manual interface definitions) — see existing UI components.
- Avoid explicit `interface` for props; use inline types or `React.ComponentProps` intersections.
- Use `type` imports when importing types: `import type { ... }`.

### Imports

- Use `@/*` path alias for all project-local imports (maps to project root).
- React is imported as `import * as React from "react"`.
- Utility imports: `import { cn } from "@/lib/utils"`.
- UI component imports: `import { Button } from "@/components/ui/button"`.
- Group imports: React first, then third-party libraries, then local `@/` imports, separated by blank lines.

### Formatting

- No Prettier config is present. Follow existing file formatting.
- 2-space indentation.
- Single quotes for strings in `.ts`/`.tsx` files (enforced by existing patterns).
- No semicolons at end of statements (matching existing code style).
- No trailing commas (matching existing code style).

### React Components

- **Function declarations** (not arrow functions) for components: `function Button({ ... }) { ... }`.
- Use `data-slot` attributes on root elements of UI components for identification.
- Destructure props inline in function parameters.
- Always spread remaining props (`...props`) onto the root element.
- Accept `className` as a prop and merge with `cn()`.
- Export components as named exports at the bottom of the file: `export { Button, buttonVariants }`.
- shadcn/ui components use `cva` from class-variance-authority for variants.

### Client vs Server Components

- Default to **Server Components** (no `"use client"` directive).
- Only add `"use client"` when the component uses hooks, browser APIs, event handlers, or client-side libraries (e.g., framer-motion).
- RSC is enabled in `components.json` (`"rsc": true`).

### Tailwind CSS

- Tailwind v4 with `@tailwindcss/postcss` plugin.
- Use CSS variable-based theming: `bg-card`, `text-muted-foreground`, `border-input`, etc.
- Use `cn()` from `@/lib/utils` to merge Tailwind classes (handles conflicts via tailwind-merge).
- All color/theme tokens are defined as CSS custom properties in `app/globals.css` using oklch colors.
- Both light and dark mode themes are defined (`:root` and `.dark`).

### ESLint Rules

- `@typescript-eslint/no-unused-vars`: warn, with `_` prefix ignore pattern for both args and vars.
- `@next/next/no-img-element`: error — always use `next/image` instead of `<img>`.
- `react/no-unescaped-entities`: off.

### File Organization

```
app/                          # Next.js App Router pages and layouts
  layout.tsx                  # Root layout (<html>, <body>, fonts, globals.css)
  globals.css                 # Tailwind imports + CSS custom properties (theme)
  [locale]/                   # Locale-aware routes (i18n)
    layout.tsx                # NextIntlClientProvider + QueryProvider wrappers
    page.tsx                  # Home page
components/
  ui/                         # shadcn/ui components (do not modify manually — use shadcn CLI)
  providers/                  # Client-side context providers
    query-provider.tsx        # React Query QueryClientProvider
i18n/
  routing.ts                  # Locale config (locales list, defaultLocale)
  request.ts                  # Server-side message loading for current request
  navigation.ts               # Locale-aware Link, useRouter, redirect, getPathname
lib/
  utils.ts                    # cn() utility (clsx + tailwind-merge)
  query-client.ts             # Shared QueryClient singleton
messages/
  en.json                     # English translation keys (JSON — no comments allowed)
middleware.ts → proxy.ts       # Locale detection + redirects (Next.js 16 proxy convention)
```

### Adding shadcn/ui Components

Use the shadcn CLI to add new UI components:

```bash
bunx shadcn add <component-name>
```

Do not manually create files in `components/ui/` — always use the CLI. The style is `radix-vega` with `lucide` icons.

### Key Libraries

| Library | Purpose |
|---|---|
| `next-intl` | Internationalization (locale routing, translations, navigation) |
| `@tanstack/react-query` | Server state management (data fetching, caching, mutations) |
| `radix-ui` | Headless UI primitives (shadcn foundation) |
| `@base-ui/react` | Additional headless UI primitives |
| `class-variance-authority` | Component variant definitions |
| `clsx` + `tailwind-merge` | Class name composition via `cn()` |
| `lucide-react` | Icon library |
| `tw-animate-css` | Tailwind animation utilities |
| `framer-motion` | Animation library (client-side only) |

### Error Handling

- No project-specific error handling patterns are established yet.
- Follow Next.js conventions: use `error.tsx` boundary files for route-level error handling.
- Use `not-found.tsx` for 404 handling.

### Internationalization (next-intl)

- Locales are defined in `i18n/routing.ts`. Default locale is `en`.
- To add a new language: add the locale code to `routing.locales`, create `messages/<locale>.json`, update `proxy.ts` matcher.
- Translation files are JSON (`messages/en.json`) — **no comments allowed** in JSON files.
- Use `useTranslations('<namespace>')` in client components: `const t = useTranslations('home')` then `{t('heading')}`.
- Use locale-aware navigation from `@/i18n/navigation` instead of `next/link` or `next/navigation`:
  ```ts
  import { Link, useRouter, redirect, usePathname, getPathname } from '@/i18n/navigation'
  ```
- The proxy (`proxy.ts`, formerly `middleware.ts`) handles locale detection and redirects. Do NOT rename it back to `middleware.ts` — Next.js 16 uses the `proxy` convention.
- Root layout (`app/layout.tsx`) owns `<html>` and `<body>` tags. The `[locale]` layout only adds providers.

### React Query (@tanstack/react-query)

- The shared `QueryClient` is created in `lib/query-client.ts` (singleton pattern, HMR-safe).
- Default options: `staleTime: 5min`, `gcTime: 30min`. Override per-query as needed.
- `QueryProvider` wraps the app in `components/providers/query-provider.tsx`.
- Use `useQuery` for reads, `useMutation` for writes:
  ```ts
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/todos').then(r => r.json()),
  })
  ```
- `queryKey` uniquely identifies a query in the cache — use descriptive arrays like `['users', id]`.

### Naming Conventions

- Files: `kebab-case.tsx` (e.g., `alert-dialog.tsx`, `input-group.tsx`).
- Components: PascalCase exports (e.g., `CardHeader`, `SelectTrigger`).
- Utility functions: camelCase (e.g., `cn`).
- CSS custom properties: `kebab-case` (e.g., `--card-foreground`, `--radius-md`).
- Data attributes: `kebab-case` with `data-slot` pattern (e.g., `data-slot="card-header"`).
