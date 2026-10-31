import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { mailto, navLinks, profile } from '../../data/profile'
import Button from '../ui/Button'
import MotionToggle from '../ui/MotionToggle'

const linkClass = 'rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg'
const contactHref = mailto('Opportunity for Ezhilarasu K')

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock page scroll, close on Escape, keep Tab focus inside the header.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const focusable = [...headerRef.current.querySelectorAll('a[href], button:not([disabled])')].filter(
        (el) => el.getClientRects().length > 0,
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-xl font-bold tracking-wide" onClick={close}>
          EK
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {/* <MotionToggle /> */}
          <Button href={profile.resume} variant="secondary" download>
            <Download size={16} aria-hidden="true" /> Resume
          </Button>
          <Button href={contactHref}>Contact me</Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-bg px-5 pt-6 pb-10 sm:px-8 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="border-b border-line py-4 font-display text-2xl font-medium"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Button href={contactHref} onClick={close}>
                Contact me
              </Button>
              <Button href={profile.resume} variant="secondary" download>
                <Download size={16} aria-hidden="true" /> Download resume
              </Button>
              <MotionToggle className="self-start" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
