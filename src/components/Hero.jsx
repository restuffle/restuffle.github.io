import { useReveal, useTypewriter } from '../hooks.js'
import { roles, links, metrics } from '../data.js'
import { MapPinIcon, BriefcaseIcon, GradCapIcon, CloudIcon } from './Icons.jsx'

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export default function Hero() {
  const { text, reduced } = useTypewriter(roles)

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true">
          <span className="blob blob-a"></span>
          <span className="blob blob-b"></span>
          <span className="blob blob-c"></span>
        </div>
        <div className="container hero-inner">
          <Reveal as="p" className="hero-kicker">
            <span className="mono">// hello, I'm</span>
          </Reveal>
          <Reveal as="h1" className="hero-name">
            Ryan <span className="hero-name-accent">Stuffle</span>
          </Reveal>
          <Reveal as="p" className="hero-role" aria-label={`I build ${roles.join(', ')}`}>
            I build{' '}
            <span className="accent typewriter">
              {text}
              {!reduced && <span className="caret" aria-hidden="true"></span>}
            </span>
            <br />
            for the teams that keep healthcare running.
          </Reveal>
          <Reveal as="p" className="hero-sub">
            Software engineer with a B.S. in Computer Science from Indiana University
            Bloomington, back at Cook Medical for a second internship — this time on the
            AI &amp; Innovation team. I like backend problems, serverless architectures,
            and code that quietly does its job every five minutes without being asked twice.
          </Reveal>
          <Reveal className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a
              href={links.resume}
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé
            </a>
          </Reveal>
          <Reveal as="ul" className="hero-meta mono">
            <li>
              <MapPinIcon className="meta-icon" /> Indiana
            </li>
            <li>
              <BriefcaseIcon className="meta-icon" /> AI &amp; Innovation Intern @ Cook Medical
            </li>
            <li>
              <GradCapIcon className="meta-icon" /> B.S. Computer Science · IU Bloomington
            </li>
            <li>
              <CloudIcon className="meta-icon" /> Azure · Java · Python
            </li>
          </Reveal>
        </div>
      </section>

      <section className="strip" aria-label="Key results">
        <div className="container strip-inner">
          {metrics.map((m) => (
            <Reveal key={m.label} className="strip-item">
              <span className="strip-figure">{m.figure}</span>
              <span className="strip-label">{m.label}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export { Reveal }
