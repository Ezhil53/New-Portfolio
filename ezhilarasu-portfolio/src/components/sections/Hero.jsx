import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Briefcase, Download, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import { useMotion } from '../../context/MotionContext'
import Button from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import HeroVisual from '../three/HeroVisual'

// Entrance sequence on page load.
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const wordsParent = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const greeting = ['Hi,', 'I', 'am']
const nameWords = profile.name.split(' ')

// Roles rotate in the hero. The first one comes from profile.js.
const roles = [profile.role, 'MERN Stack Developer', 'React Developer', 'Frontend Developer']

const floatingChips = [
  { label: 'React.js', className: 'top-[7%] left-0 sm:left-[2%]', dur: 5.5 },
  { label: 'Node.js', className: 'top-[26%] right-0 sm:right-[0%]', dur: 6.5 },
  { label: 'Express.js', className: 'bottom-[22%] left-0 sm:left-[0%]', dur: 6 },
  { label: 'MongoDB', className: 'bottom-[4%] right-[6%]', dur: 7 },
]

const socialClass =
  'inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent'

function RotatingRole() {
  const { reduced } = useMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduced) {
      setI(0)
      return
    }
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <span aria-hidden="true" className="relative block h-[1.25em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[i]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="block"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { reduced } = useMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70])

  return (
    <div ref={ref} className="relative isolate overflow-hidden">
      {/* Decorative accent glow behind the 3D shape. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 -z-10 size-[30rem] rounded-full bg-accent/10 blur-[120px]"
        animate={reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <section
        id="home"
        className="mx-auto grid min-h-svh max-w-6xl items-center gap-8 px-5 pt-16 pb-16 lg:grid-cols-12 lg:gap-6"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
          >
            <span className="relative flex size-2" aria-hidden="true">
              {!reduced && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              )}
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </motion.p>

          {/* One h1. The visual version below is hidden from screen readers to avoid repeats. */}
          <motion.h1
            variants={wordsParent}
            className="mt-6 font-display text-[clamp(1.875rem,5vw,3.75rem)] leading-[1.1] font-semibold tracking-tight"
          >
            <span className="sr-only">
              Hi, I am {profile.name}, {profile.role}
            </span>
            <span aria-hidden="true" className="block">
              {[...greeting, ...nameWords].map((w, idx) => (
                <span key={idx} className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <motion.span
                    variants={word}
                    className={`inline-block ${idx < greeting.length ? 'text-muted' : 'text-fg'}`}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 font-display text-2xl font-semibold tracking-tight text-accent sm:text-3xl"
          >
            <RotatingRole />
          </motion.div>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button href="#projects">
                View projects <ArrowDown size={16} aria-hidden="true" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button href={profile.resume} variant="secondary" download>
                <Download size={16} aria-hidden="true" /> Download resume
              </Button>
            </motion.div>
            <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <motion.a
              href={profile.github}
              className={socialClass}
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
            >
              <GitHubIcon className="size-5" />
            </motion.a>
            <motion.a
              href={profile.linkedin}
              className={socialClass}
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
            >
              <LinkedInIcon className="size-5" />
            </motion.a>
          </motion.div>

          {/* <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" className="text-accent" /> {profile.location}
            </li>
            <li className="inline-flex items-center gap-2">
              <Briefcase size={16} aria-hidden="true" className="text-accent" /> Bigbay Cinema Factory
            </li>
          </motion.ul> */}
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
          {/* Decorative floating tech chips. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {floatingChips.map((c, idx) => (
              <motion.span
                key={c.label}
                className={`absolute inline-flex items-center gap-2 rounded-full border border-line bg-bg/70 px-3 py-1.5 text-xs text-fg backdrop-blur-md sm:text-sm ${c.className}`}
                initial={{ opacity: 0 }}
                animate={reduced ? { opacity: 1 } : { opacity: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.9 + idx * 0.12 },
                  y: { duration: c.dur, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.4 },
                }}
              >
                <span className="size-1.5 rounded-full bg-accent" />
                {c.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Scroll cue (decorative; "View projects" is the real link). */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center lg:flex">
        <motion.a
          href="#projects"
          tabIndex={-1}
          className="pointer-events-auto flex h-10 w-6 justify-center rounded-full border border-line pt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.span
            className="size-1.5 rounded-full bg-accent"
            animate={reduced ? undefined : { y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.a>
      </div>
    </div>
  )
}