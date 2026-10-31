import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import { MotionProvider, useMotion } from './context/MotionContext'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

const BelowFold = lazy(() => import('./components/sections/BelowFold'))

function Page() {
  const { reduced } = useMotion()
  return (
    <MotionConfig reducedMotion={reduced ? 'always' : 'never'}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Suspense fallback={<div aria-hidden="true" style={{ minHeight: '100svh' }} />}>
          <BelowFold />
        </Suspense>
      </main>
    </MotionConfig>
  )
}

export default function App() {
  return (
    <MotionProvider>
      <Page />
    </MotionProvider>
  )
}
