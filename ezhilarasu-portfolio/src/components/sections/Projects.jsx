import { ExternalLink } from 'lucide-react'
import { featuredProject, sampleProjects } from '../../data/projects'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'
import { GitHubIcon } from '../ui/BrandIcons'

const gridBg = {
  backgroundImage:
    'linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)',
  backgroundSize: '28px 28px',
}

function Media({ project, className = '' }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        width="1200"
        height="675"
        className={`h-full w-full object-contain ${className}`}
      />
    )
  }
  return (
    <div
      role="img"
      aria-label="Screenshot placeholder"
      style={gridBg}
      className={`grid place-items-center bg-bg text-sm text-muted ${className}`}
    >
      [Screenshot placeholder]
    </div>
  )
}

function Links({ live, repo }) {
  if (!live && !repo) return null
  const cls =
    'inline-flex min-h-11 items-center gap-2 text-sm text-fg underline-offset-4 transition-colors hover:text-accent hover:underline'
  return (
    <div className="mt-6 flex flex-wrap gap-x-6">
      {live && (
        <a href={live} className={cls} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={16} aria-hidden="true" /> Live demo
        </a>
      )}
      {repo && (
        <a href={repo} className={cls} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="size-4" /> Source code
        </a>
      )}
    </div>
  )
}

function Featured({ p }) {
  return (
    <Reveal>
      <article className="grid overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-accent/60 lg:grid-cols-2">
        <div className="aspect-vide lg:min-h-[26rem">
          <Media project={p} className="h-full min-h-" />
        </div>
        <div className="p-6 sm:p-9">
          <p className="text-sm text-accent">{p.kind}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
          <h4 className="mt-6 font-medium">What I built</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-line">
            {p.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {p.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </ul>
          <Links live={p.live} repo={p.repo} />
        </div>
      </article>
    </Reveal>
  )
}

function Sample({ p, delay }) {
  const rows = [
    ['Problem', p.problem],
    ['Solution', p.solution],
    ['My contribution', p.contribution],
  ]
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-line p-5 transition-colors duration-300 hover:border-accent/60">
        <Media project={p} className="aspect-video rounded-lg border border-line" />
        <p className="mt-5 text-sm text-muted">{p.kind}</p>
        <h3 className="mt-1 font-display text-xl font-semibold">{p.title}</h3>
        <dl className="mt-2 space-y-3 text-sm">
          {rows.map(([k, v]) => (
            <div key={k}>
              {/* <dt className="font-medium">{k}</dt> */}
              <dd className="mt-0.5 leading-relaxed text-muted">{v}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        <div className="mt-auto">
          <Links live={p.live} repo={p.repo} />
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="A production project from my current work, plus sample cards that hold the place for more."
    >
      <div className="space-y-6">
        {/* <Featured p={featuredProject} /> */}
        <div className="grid gap-6 md:grid-cols-3">
          {sampleProjects.map((p, i) => (
            <Sample key={i} p={p} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </Section>
  )
}
