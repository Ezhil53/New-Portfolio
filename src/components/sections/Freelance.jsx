import { mailto } from '../../data/profile'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'
import Button from '../ui/Button'

const services = [
  {
    title: 'MERN web apps',
    fit: 'A business, shop or educational site that needs public pages, an admin area and a database behind them.',
    does: 'React frontend, Node and Express REST API, MongoDB, JWT login for admin panels, image uploads and Razorpay payments.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Razorpay'],
    subject: 'Freelance enquiry: MERN web app',
  },
  {
    title: 'Landing pages',
    fit: 'A business, product or event that needs a fast, responsive page that explains what you offer and invites enquiries.',
    does: 'Mobile-first layouts built to be readable and consistent across browsers, deployed to Vercel or Netlify.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
    subject: 'Freelance enquiry: landing page',
  },
]

export default function Freelance() {
  return (
    <Section id="freelance" title="Freelance work" intro="I take on freelance projects in two areas.">
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">
                <span className="font-medium text-fg">Good fit if you have: </span>
                {s.fit}
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                <span className="font-medium text-fg">What you get: </span>
                {s.does}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {s.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button href={mailto(s.subject)} variant="secondary">
                  Enquire about this
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
