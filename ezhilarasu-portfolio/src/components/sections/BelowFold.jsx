// Everything under the hero loads as one lazy chunk.
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import About from './About'
import Freelance from './Freelance'
import Contact from './Contact'
import Footer from '../layout/Footer'

export default function BelowFold() {
  return (
    <>
      <About />
      <Projects />
      <Experience />
      <Skills />
      {/* <Freelance /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
