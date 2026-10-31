import Reveal from './Reveal'

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-18">
        <Reveal>
          <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
