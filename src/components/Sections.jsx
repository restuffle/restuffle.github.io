import { Reveal } from './Hero.jsx'
import { useCardGlow } from '../hooks.js'
import { experience, projects, skillGroups, education, links } from '../data.js'
import { ProjectIcon, GitHubIcon, LinkedInIcon, ArrowIcon, MailIcon } from './Icons.jsx'

/* ===== About ===== */
export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <Reveal as="p" className="section-label mono">
            01. about
          </Reveal>
          <Reveal as="h2">Healthcare needs good software. I want to build it.</Reveal>
        </div>
        <div className="about-copy">
          <Reveal as="p">
            I graduated from Indiana University Bloomington in December 2025 with a B.S. in
            Computer Science and a certificate in Business &amp; Statistics — which means I can
            talk to both the engineers and the people reading the quarterly dashboard.
          </Reveal>
          <Reveal as="p">
            All of my internships put software next to patient care. At <strong>Cook Medical</strong>{' '}
            I shipped serverless cloud applications on Azure — file transfer pipelines, real-time
            notification systems, and an AI-powered knowledge bot for clinician resources — and
            I'm back this summer as an <strong>AI &amp; Innovation Intern</strong> building an
            AI-powered automation testing pipeline. Before that, at <strong>SIRA Radiology</strong>{' '}
            I was the bridge between IT and the radiologists, improving scheduling systems and
            keeping imaging equipment compliant with ACR and MQSA standards.
          </Reveal>
          <Reveal as="p">
            What I care about: event-driven architecture, security that's built in rather than
            bolted on, and documentation the next engineer will actually thank you for.
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ===== Experience ===== */
export function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <Reveal as="p" className="section-label mono">
          02. experience
        </Reveal>
        <Reveal as="h2">Where I've worked</Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="article" className="timeline-item" key={job.title + job.when}>
              <div className="timeline-when mono">
                {job.when}
                {job.current && <span className="current-badge">current</span>}
              </div>
              <div className="timeline-body">
                <h3>{job.title}</h3>
                <p className="timeline-org">{job.org}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="tech-tags mono">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== Projects ===== */
function ProjectCard({ project }) {
  const glowRef = useCardGlow()
  return (
    <Reveal as="article" className="card">
      <div className="card-glow-wrap" ref={glowRef}>
        <div className="card-top">
          <span className="card-icon" aria-hidden="true">
            <ProjectIcon name={project.icon} />
          </span>
          {project.flagship && <span className="card-badge mono">flagship</span>}
        </div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        {project.stat && <p className="card-stat mono">{project.stat}</p>}
        <ul className="tech-tags mono">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="p" className="section-label mono">
          03. projects
        </Reveal>
        <Reveal as="h2">Things I've built</Reveal>
        <Reveal as="p" className="section-intro">
          Production work from my time at Cook Medical — real systems with real users and
          uptime that mattered.
        </Reveal>

        <div className="cards">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== Skills ===== */
export function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <Reveal as="p" className="section-label mono">
          04. skills
        </Reveal>
        <Reveal as="h2">Toolbox</Reveal>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal className="skill-group" key={group.name}>
              <h3 className="mono">{group.name}</h3>
              <ul className="tech-tags mono">
                {group.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="education">
          <div>
            <h3>{education.school}</h3>
            <p className="timeline-org">{education.detail}</p>
          </div>
          <ul className="tech-tags mono">
            {education.courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Online ===== */
export function Online() {
  const cards = [
    {
      href: links.github,
      icon: <GitHubIcon />,
      title: 'GitHub',
      handle: 'github.com/restuffle',
      desc: 'Where my projects live — including the source for this site.',
    },
    {
      href: links.linkedin,
      icon: <LinkedInIcon />,
      title: 'LinkedIn',
      handle: 'linkedin.com/in/restuffle',
      desc: 'Experience, education, and how to reach me professionally.',
    },
  ]
  return (
    <section className="section" id="online">
      <div className="container">
        <Reveal as="p" className="section-label mono">
          05. online
        </Reveal>
        <Reveal as="h2">Find me online</Reveal>
        <Reveal as="p" className="section-intro">
          Code, career history, and the occasional work in progress.
        </Reveal>
        <div className="online-grid">
          {cards.map((c) => (
            <Reveal
              as="a"
              className="online-card"
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="online-icon" aria-hidden="true">
                {c.icon}
              </span>
              <span className="online-body">
                <strong>{c.title}</strong>
                <span className="mono">{c.handle}</span>
                <span className="online-desc">{c.desc}</span>
              </span>
              <span className="online-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== Contact ===== */
export function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="container contact-inner">
        <Reveal as="p" className="section-label mono">
          06. contact
        </Reveal>
        <Reveal as="h2">Let's build something.</Reveal>
        <Reveal as="p" className="section-intro">
          I'm always glad to talk about backend and cloud engineering roles, healthcare tech,
          or an interesting problem you're working on.
        </Reveal>
        <Reveal className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${links.email}`}>
            <MailIcon className="btn-icon" /> {links.email}
          </a>
          <a
            className="btn btn-ghost"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
          <a
            className="btn btn-ghost"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </Reveal>
        <Reveal as="p" className="contact-phone mono">
          or call: <a href="tel:+18126063106">{links.phone}</a>
        </Reveal>
      </div>
    </section>
  )
}

/* ===== Footer ===== */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Ryan Stuffle ·{' '}
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          ·{' '}
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <p className="mono">built with React + Vite · deployed by GitHub Actions</p>
      </div>
    </footer>
  )
}
