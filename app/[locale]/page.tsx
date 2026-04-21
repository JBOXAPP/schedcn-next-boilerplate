/**
 * Home Page
 *
 * To use i18n translations in a client component:
 *   1. Add keys to messages/en.json (e.g., "home": { "heading": "Welcome" })
 *   2. Import useTranslations from 'next-intl'
 *   3. Call const t = useTranslations('home')
 *   4. Render with {t('heading')} — it reads the value from the active locale's messages
 */
'use client'

import { motion } from 'framer-motion'

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
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}
