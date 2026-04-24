/**
 * Home Page
 *
 * Demonstrates React Query data fetching in a client component.
 * The useQuery hook below fetches posts from JSONPlaceholder (a free fake API)
 * and handles loading/error states automatically.
 *
 * i18n is also available — see the comment block at the bottom of this file
 * for instructions on adding translations.
 *
 * React Query quick reference:
 *   - queryKey: unique identifier for this query (used for caching and deduplication)
 *   - queryFn: async function that fetches the data
 *   - The result ({ data, isLoading, error }) is reactive — components re-render
 *     when the fetch completes, and cached data is served instantly on revisit
 */
'use client'

import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

// --- Skeleton components for loading states ---

function SkeletonBlock({ className }: { className?: string }) {
  return (
    <motion.div
      className={`rounded-md bg-muted ${className}`}
      initial={{ opacity: 0.4 }}
      animate={{ opacity: [0.4, 0.7, 0.4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

function SkeletonCard() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <SkeletonBlock className="h-5 w-2/5" />
      <SkeletonBlock className="h-3 w-3/5" />
      <div className="space-y-2 pt-2">
        <SkeletonBlock className="h-3 w-full" />
        <SkeletonBlock className="h-3 w-4/5" />
        <SkeletonBlock className="h-3 w-3/5" />
      </div>
      <div className="pt-2">
        <SkeletonBlock className="h-8 w-20 rounded-md" />
      </div>
    </div>
  )
}

// --- Data types for the example API response ---

type Post = {
  id: number
  title: string
  body: string
}

// --- Example: fetching data with React Query ---

function PostCards() {
  // useQuery fetches data and manages loading/error/cache states
  // queryKey ['posts'] uniquely identifies this query in the cache
  // queryFn is the async function that actually fetches the data
  const { data: posts, isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
        .then((res) => res.json()),
  })

  if (error) {
    return (
      <div className="col-span-full rounded-xl border border-destructive bg-card p-6">
        <p className="text-destructive text-sm">Failed to load posts: {error.message}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    )
  }

  return posts?.map((post) => (
    <div key={post.id} className="rounded-xl border bg-card p-6 space-y-3">
      <h3 className="text-lg font-semibold line-clamp-1">{post.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-3">{post.body}</p>
    </div>
  ))
}

// --- Page component ---

export default function Page() {
  return (
    <div className="min-h-screen p-6 md:p-12 flex flex-col items-center gap-10 bg-background">
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SkeletonBlock className="h-9 w-56 mx-auto" />
        <SkeletonBlock className="h-5 w-40 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {/* React Query example — fetches 3 posts from JSONPlaceholder */}
        <PostCards />
        {/* Placeholder skeleton cards for future content */}
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}

/**
 * --- i18n usage ---
 *
 * To add translations to this page:
 *   1. Add keys to messages/en.json (e.g., "home": { "heading": "Welcome" })
 *   2. Import useTranslations from 'next-intl'
 *   3. Call const t = useTranslations('home')
 *   4. Render with {t('heading')} — reads from the active locale's messages
 */
