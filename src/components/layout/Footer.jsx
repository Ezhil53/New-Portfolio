import { navLinks, profile } from '../../data/profile'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'

const iconCls = 'inline-flex size-11 items-center justify-center text-muted transition-colors hover:text-accent'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="inline-flex min-h-11 items-center hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex">
          <a href={profile.github} className={iconCls} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="size-5" />
          </a>
          <a href={profile.linkedin} className={iconCls} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
