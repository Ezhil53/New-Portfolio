import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const MotionContext = createContext({ reduced: false, toggle: () => {} })

/**
 * `reduced` follows the OS prefers-reduced-motion setting until the visitor
 * flips the on-page toggle, which then takes priority.
 */
export function MotionProvider({ children }) {
  const query = '(prefers-reduced-motion: reduce)'
  const [system, setSystem] = useState(() => window.matchMedia(query).matches)
  const [override, setOverride] = useState(null)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = (e) => setSystem(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const reduced = override ?? system
  const toggle = useCallback(() => setOverride(!reduced), [reduced])
  const value = useMemo(() => ({ reduced, toggle }), [reduced, toggle])

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
}

export const useMotion = () => useContext(MotionContext)
