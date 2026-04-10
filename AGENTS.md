# AGENTS.md

## Project Overview

JBOX Next.js boilerplate using **Next.js 16** (App Router), **React 19**, **TypeScript 5**, **Tailwind CSS 4**, and **shadcn/ui** (radix-vega style). Package manager is **bun**.

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
app/                  # Next.js App Router pages and layouts
  globals.css         # Tailwind imports + CSS custom properties (theme)
  layout.tsx          # Root layout
  page.tsx            # Home page
components/
  ui/                 # shadcn/ui components (do not modify manually — use shadcn CLI)
lib/
  utils.ts            # cn() utility (clsx + tailwind-merge)
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

### Naming Conventions

- Files: `kebab-case.tsx` (e.g., `alert-dialog.tsx`, `input-group.tsx`).
- Components: PascalCase exports (e.g., `CardHeader`, `SelectTrigger`).
- Utility functions: camelCase (e.g., `cn`).
- CSS custom properties: `kebab-case` (e.g., `--card-foreground`, `--radius-md`).
- Data attributes: `kebab-case` with `data-slot` pattern (e.g., `data-slot="card-header"`).
