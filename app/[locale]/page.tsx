'use client'

import { useTranslations } from 'next-intl'
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

function Card({
  title,
  description,
  body,
  cta,
}: {
  title: string
  description: string
  body: string
  cta: string
}) {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <p className="text-sm leading-relaxed">{body}</p>
      <div className="pt-2">
        <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          {cta}
        </button>
      </div>
    </div>
  )
}

export default function Page() {
  const t = useTranslations('home')

  return (
    <div className="min-h-screen p-6 md:p-12 flex flex-col items-center gap-10 bg-background">
      <motion.div
        className="text-center space-y-2"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold">{t('heading')}</h1>
        <p className="text-muted-foreground">{t('subtitle')}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <Card
          title={t('card.title')}
          description={t('card.description')}
          body={t('card.body')}
          cta={t('card.cta')}
        />
        <div className="space-y-6">
          <SkeletonBlock className="h-5 w-2/5" />
          <SkeletonBlock className="h-3 w-3/5" />
          <div className="space-y-2 pt-2">
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-4/5" />
          </div>
        </div>
        <div className="space-y-6">
          <SkeletonBlock className="h-5 w-2/5" />
          <SkeletonBlock className="h-3 w-3/5" />
          <div className="space-y-2 pt-2">
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-4/5" />
          </div>
        </div>
        <div className="space-y-6">
          <SkeletonBlock className="h-5 w-2/5" />
          <SkeletonBlock className="h-3 w-3/5" />
          <div className="space-y-2 pt-2">
            <SkeletonBlock className="h-3 w-full" />
            <SkeletonBlock className="h-3 w-4/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
