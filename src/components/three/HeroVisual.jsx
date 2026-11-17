import { Component, lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useMotion } from '../../context/MotionContext'
import { useWebGLSupport } from '../../hooks/useWebGLSupport'
import HeroFallback from './HeroFallback'

// Three.js lives in its own chunk and loads after first paint.
const HeroScene = lazy(() => import('./HeroScene'))

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

export default function HeroVisual() {
  const { reduced } = useMotion()
  const webgl = useWebGLSupport()
  const ref = useRef(null)
  const [inView, setInView] = useState(true)
  const [idle, setIdle] = useState(false)

  // Wait for the browser to be idle so the 3D bundle never competes with first paint.
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setIdle(true), { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(() => setIdle(true), 300)
    return () => clearTimeout(id)
  }, [])

  // Stop rendering while the hero is off-screen.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const show3D = webgl && !reduced && idle

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none relative h-72 w-full sm:h-96 lg:h-[34rem]"
    >
      {show3D ? (
        <SceneBoundary fallback={<HeroFallback />}>
          <Suspense fallback={<HeroFallback />}>
            <HeroScene active={inView} />
          </Suspense>
        </SceneBoundary>
      ) : (
        <HeroFallback />
      )}
    </div>
  )
}
