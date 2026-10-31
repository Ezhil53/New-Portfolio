import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Database, Layers, Monitor, Server, Wrench } from 'lucide-react'
import { skillGroups } from '../../data/skills'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'

// Icons are matched by category name. Unknown categories fall back to Layers.
const icons = {
  Frontend: Monitor,
  Backend: Server,
  Databases: Database,
  'Tools and platforms': Wrench,
  Concepts: Layers,
}

// Wide categories take two columns on large screens so rows stay balanced.
const isWide = (g) => g.items.length > 6

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active !== 'All'
  const visible = filtered ? skillGroups.filter((g) => g.name === active) : skillGroups

  return (
    <div className="relative isolate overflow-hidden">
      {/* Decorative accent glow, kept soft so text stays readable. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 -left-32 size-104 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-28 bottom-0 size-96 rounded-full bg-accent/15 blur-[110px]" />
      </div>

      <Section id="skills" title="Skills" intro="The tools I use day to day, grouped by where they sit in a project.">
        <Reveal>
          {/* <div role="group" aria-label="Filter skills by category" className="flex flex-wrap gap-2">
            {['All', ...skillGroups.map((g) => g.name)].map((name) => {
              const on = active === name
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(name)}
                  className={`min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${
                    on
                      ? 'border-accent bg-accent text-bg'
                      : 'border-line text-muted hover:border-accent hover:text-fg'
                  }`}
                >
                  {name}
                </button>
              )
            })}
          </div> */}
          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'category' : 'categories'}
          </p>
        </Reveal>

        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {visible.map((g) => {
              const Icon = icons[g.name] ?? Layers
              const span = filtered
                ? 'md:col-span-2 lg:col-span-3'
                : isWide(g)
                  ? 'lg:col-span-'
                  : ''
              return (
                <motion.li
                  key={g.name}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={span}
                >
                  <article className="group h-full rounded-2xl border border-line bg-bg/60 p-6 backdrop-blur-md transition-colors duration-300 hover:border-accent/60 sm:p-7">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-accent transition-colors duration-300 group-hover:border-accent">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-xl font-semibold">{g.name}</h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${g.name} skills`}>
                      {g.items.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-line px-3.5 py-1.5 text-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.li>
              )
            })}
          </AnimatePresence>
        </ul>
      </Section>
    </div>
  )
}