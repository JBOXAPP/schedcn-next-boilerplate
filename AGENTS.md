# AGENTS.md

## Project Overview

JBOX Next.js boilerplate using **Next.js 16** (App Router), **React 19**, **TypeScript 5**, **Tailwind CSS 4**, and **shadcn/ui** primitives. The current route surface is intentionally minimal: a root layout and a root page only.

Installed packages still include **next-intl** and **TanStack React Query**, but they are not wired into the active route tree right now. Treat them as optional scaffolding unless the user explicitly wants them re-enabled.

There is no test framework configured. No test runner or test files exist.

## Build And Type Check

```bash
bun run build
bunx tsc --noEmit
```

`npm run build` also works, but the repo is currently set up around `bun.lock`.

## Current App Structure

```text
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
components/
  providers/
    query-provider.tsx
  ui/
i18n/
  navigation.ts
  request.ts
  routing.ts
lib/
  query-client.ts
  utils.ts
messages/
  en.json
```

## Routing Baseline

- The active App Router entrypoints are `app/layout.tsx` and `app/page.tsx`.
- `app/page.tsx` currently returns `null` on purpose. This is the minimum passing App Router setup for this boilerplate.
- There is no active `proxy.ts`.
- There is no active `[locale]` route segment.
- If you add routing back, keep the root layout as the owner of `<html>` and `<body>`.

## Optional Scaffolding

- `i18n/` and `messages/` still exist, but locale routing is not active.
- `components/providers/query-provider.tsx` and `lib/query-client.ts` still exist, but React Query is not mounted in the root layout.
- Keep this distinction clear: installed code or helper files do not imply active runtime behavior.

## Code Style

### TypeScript

- `strict: true` is enabled.
- Use `type` imports when importing types.
- Prefer inline prop types or `React.ComponentProps` patterns used by the existing UI components.

### Imports

- Use the `@/*` path alias for project-local imports.
- Group imports as: framework, third-party, then local imports.

### Formatting

- Follow the existing file formatting in the repo.
- Use 2-space indentation.
- Use single quotes in `.ts` and `.tsx` files where the surrounding file already follows that style.
- Avoid semicolon churn unless the file already uses semicolons consistently.

### React Components

- Default to Server Components.
- Add `'use client'` only when hooks, browser APIs, event handlers, or client-only libraries require it.
- Keep components simple and local until reuse is real.

### Tailwind CSS

- Tailwind v4 is configured through `app/globals.css`.
- Theme tokens are defined as CSS custom properties there.
- Use `cn()` from `@/lib/utils` when merging utility classes.

## shadcn/ui

- Use the shadcn CLI to add new UI components:

```bash
bunx shadcn add <component-name>
```

- Do not hand-roll files into `components/ui/` when a shadcn generator exists for that component.

## Libraries In Use

| Library | Purpose |
|---|---|
| `next` | App Router framework |
| `tailwindcss` | Styling system |
| `radix-ui`, `@base-ui/react` | Headless UI primitives |
| `class-variance-authority` | Variant definitions |
| `clsx` + `tailwind-merge` | Class composition via `cn()` |
| `lucide-react` | Icons |
| `tw-animate-css` | Tailwind animation utilities |
| `framer-motion` | Client-side animation when needed |

## React Query And i18n Guidance

- Do not assume React Query or `next-intl` are active just because packages and helper files exist.
- If you re-enable React Query, mount `QueryProvider` deliberately in `app/layout.tsx` or a nested route layout.
- If you re-enable i18n routing, add the route structure and runtime wiring explicitly instead of assuming the leftover `i18n/` files are enough.

## Naming Conventions

- Files: `kebab-case.tsx`
- Components: PascalCase
- Utilities: camelCase
- CSS custom properties: `kebab-case`
- Data attributes: `data-slot="..."`
