import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { profile } from '../../data/profile'
import Button from '../ui/Button'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'
import HeroVisual from '../three/HeroVisual'

// One orchestrated entrance on page load. Nothing else on the page loops.
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const socialClass =
  'inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent'

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-svh max-w-7xl items-center gap-8 px-5 pt-16 pb-16 lg:grid-cols-12 lg:gap-6"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
        >
          <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.availability}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 font-display  text-[clamp(1.875rem,5vw,3.75rem)] leading-[1.02] font-semibold tracking-tight"
        >
          <span className="block">Hi, I am {profile.name}</span>
        </motion.h1>
         <motion.h1
          variants={item}
          className="mt-6 font-display text-3xl leading-[1.02] font-semibold tracking-tight"
        >
          <span className="block text-muted">{profile.role}</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects">
            View projects <ArrowDown size={16} aria-hidden="true" />
          </Button>
          <Button href={profile.resume} variant="secondary" download>
            <Download size={16} aria-hidden="true" /> Download resume
          </Button>
          
        <motion.div variants={item} className="flex gap-3">
          <a href={profile.github} className={socialClass} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="size-5" />
          </a>
          <a href={profile.linkedin} className={socialClass} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-5" />
          </a>
        </motion.div>
        </motion.div>

        {/* <motion.div variants={item} className="mt-8 flex gap-3">
          <a href={profile.github} className={socialClass} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="size-5" />
          </a>
          <a href={profile.linkedin} className={socialClass} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="size-5" />
          </a>
        </motion.div> */}
      </motion.div>

      <div className="lg:col-span-5">
        <HeroVisual />
      </div>
    </section>
  )
}
