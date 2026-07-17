import { useState } from 'react'
import { useActiveSection, useScrollProgress } from '../hooks.js'
import { links } from '../data.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

const sections = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sections)
  const progress = useScrollProgress()

  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand-bracket">&lt;</span>rs
          <span className="brand-bracket">/&gt;</span>
        </a>
        <nav
          className={`site-nav${open ? ' is-open' : ''}`}
          id="site-nav"
          aria-label="Main navigation"
        >
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              onClick={close}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <a
            className="icon-link"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            className="icon-link"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
          <a className="nav-cta" href={links.resume} target="_blank" rel="noopener noreferrer">
            Résumé
          </a>
        </nav>
        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
