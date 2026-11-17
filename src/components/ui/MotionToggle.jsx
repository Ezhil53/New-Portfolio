import { Pause, Play } from 'lucide-react'
import { useMotion } from '../../context/MotionContext'

export default function MotionToggle({ className = '' }) {
  const { reduced, toggle } = useMotion()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={!reduced}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-muted transition-colors hover:text-fg ${className}`}
    >
      {reduced ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      <span>{reduced ? 'Motion off' : 'Motion on'}</span>
    </button>
  )
}
