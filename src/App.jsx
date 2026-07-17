import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import { About, Experience, Projects, Skills, Online, Contact, Footer } from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Online />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
