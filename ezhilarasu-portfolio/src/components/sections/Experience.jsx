import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { experience } from '../../data/experience'
import { useMotion } from '../../context/MotionContext'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'

function Item({ e, id }) {
  const [open, setOpen] = useState(false)
  const { reduced } = useMotion()
  const panelId = `experience-panel-${id}`

  return (
    <li className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute top-2 -left-[5px] size-2.5 rounded-full border border-accent bg-bg"
      />
      <Reveal>
        <h3>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="group flex w-full items-start justify-between gap-4 text-left"
          >
            <span className="block">
              <span className="block font-display text-xl font-semibold transition-colors group-hover:text-accent sm:text-2xl">
                {e.title}
              </span>
              <span className="mt-1 block font-normal text-muted">{e.org}</span>
              <span className="mt-1 block text-sm font-normal text-muted sm:hidden">{e.dates}</span>
            </span>
            <span className="flex shrink-0 items-center gap-4 pt-1.5">
              <span className="hidden text-sm font-normal text-muted sm:block">{e.dates}</span>
              <ChevronDown
                aria-hidden="true"
                size={20}
                className={`text-muted transition-transform duration-300 group-hover:text-accent ${
                  open ? 'rotate-180' : ''
                }`}
              />
            </span>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 pb-1">
                <ul className="max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-line sm:text-base">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {e.tech.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {e.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </li>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <ol className="ml-2 border-l border-line">
        {experience.map((e, i) => (
          <Item key={e.title} e={e} id={i} />
        ))}
      </ol>
    </Section>
  )
}