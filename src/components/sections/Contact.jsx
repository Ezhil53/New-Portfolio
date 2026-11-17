import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { mailto, profile } from '../../data/profile'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'

const paths = [
  {
    title: 'Hiring for a full-time role',
    text: 'Full stack, MERN, React or frontend positions.',
    subject: 'Job opportunity for Ezhilarasu K',
  },
  {
    title: 'Starting a freelance project',
    text: 'A MERN web app or a landing page.',
    subject: 'Freelance project enquiry',
  },
]

const socialClass =
  'inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-accent'

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let's work together"
      intro="Email is the quickest way to reach me. Pick the option that fits and your email app opens with the subject filled in."
    >
      {/* <div className="grid gap-4 md:grid-cols-2">
        {paths.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <a
              href={mailto(p.subject)}
              className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent sm:p-8"
            >
              <span>
                <span className="block font-display text-xl font-semibold sm:text-2xl">{p.title}</span>
                <span className="mt-2 block text-muted">{p.text}</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </a>
          </Reveal>
        ))}
      </div> */}

      <Reveal className="mt-10 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
        <div className="font-display flex items-center gap-2 text-md underline-offset-4 hover:text-accent hover:underlin">
         <MapPin size={20}/> {profile.location}
        </div>
        <a href={`mailto:${profile.email}`} className="font-display flex items-center gap-2 text-md underline-offset-4 hover:text-accent hover:underlin">
          <Mail size={20} /> {profile.email}
        </a>
        <div className="font-display flex items-center gap-2 text-md underline-offset-4 hover:text-accent hover:underlin">
         <Phone size={20} /> {profile.phone}
        </div>
        <a href={profile.github} className={socialClass} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="size-5" /> GitHub
        </a>
        <a href={profile.linkedin} className={socialClass} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="size-5" /> LinkedIn
        </a>
      </Reveal>
    </Section>
  )
}
