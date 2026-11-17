import { profile } from '../../data/profile'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'

const facts = [
  ['Based in', profile.location],
  // ['Currently', 'Full Stack Developer, Bigbay Cinema Factory'],
  // ['Education', 'B.Voc Information Technology, Bishop Heber College'],
]

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-surface">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width="800"
                height="1000"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full place-items-center text-sm text-muted">[Photo placeholder]</div>
            )}
          </div>
        </Reveal>
        <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg lg:col-span-7">
          <p>
            I'm a Full Stack Developer passionate about turning ideas into useful, engaging digital experiences. I enjoy solving problems, experimenting with new technologies, and constantly pushing myself to build better things.</p>
          <p>
            When I'm not building for the web, I'm exploring AI and its possibilities — discovering new ways to think, create, and innovate. I'm always ready to learn, take on challenges, and turn ideas into something real.
          </p>
          {/* <p>
            I'm a full stack developer in Chennai working with the MERN stack.
          </p> */}
          {/* <p>
            I like owning a feature from end to end: the interface, the REST API behind it, the database, and getting
            it deployed. My recent work includes a film academy platform with a JWT-secured admin panel and Razorpay
            payments.
          </p> */}
          <p>
            I'm looking for a full-time role where I can build reliable software as part of a collaborative
            engineering team. I also take on freelance web projects.
          </p>
          <dl className="!mt-8 divide-y divide-line border-y border-line text-base">
            {facts.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <dt className="text-muted">{k}</dt>
                <dd className="text-fg">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
