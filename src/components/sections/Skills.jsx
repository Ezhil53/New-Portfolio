import { skillGroups } from '../../data/skills'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools I use day to day, grouped by where they sit in a project.">
      <Reveal>
        <dl>
          {skillGroups.map((g) => (
            <div
              key={g.name}
              className="grid gap-4 border-t border-line py-6 last:border-b sm:grid-cols-[14rem_1fr] sm:gap-8"
            >
              <dt className="font-display text-lg font-medium">{g.name}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  )
}
