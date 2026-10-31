import { ArrowUpRight, Mail } from 'lucide-react'
import { mailto, profile } from '../../data/profile'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'

const strip = (url) => url.replace(/^https?:\/\/(www\.)?/, '')

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: 'GitHub', value: strip(profile.github), href: profile.github, Icon: GitHubIcon, external: true },
  { label: 'LinkedIn', value: strip(profile.linkedin), href: profile.linkedin, Icon: LinkedInIcon, external: true },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-line"
    >
      {/* Decorative accent blobs. Kept soft so text stays readable. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 size-[28rem] rounded-full bg-accent/20 blur-[110px]" />
        <div className="absolute -bottom-40 -left-32 size-[24rem] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(198,244,50,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2
            id="contact-title"
            className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Let's build something{' '}
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              together.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Whether you're hiring for a full-time role or have a web project in mind, email is the quickest way to
            reach me.
          </p>
          <div className="mt-8">
            <Button href={mailto('Hello Ezhilarasu')}>
              <Mail size={16} aria-hidden="true" /> Send me an email
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="rounded-2xl border border-line bg-bg/60 p-2 backdrop-blur-md">
            <ul>
              {links.map(({ label, value, href, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/5 sm:p-4"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-accent transition-colors group-hover:border-accent">
                      {Icon === Mail ? <Mail size={20} aria-hidden="true" /> : <Icon className="size-5" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted">{label}</span>
                      <span className="block truncate text-fg">{value}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      size={18}
                      className="shrink-0 text-muted transition-colors group-hover:text-accent"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}