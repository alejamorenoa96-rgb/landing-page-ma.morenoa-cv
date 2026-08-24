import { contact } from '../content/i18n'
import { useLanguage } from '../context/useLanguage'
import './Nav.css'

const links = [
  { href: '#top', key: 'home' as const },
  { href: '#impact', key: 'impact' as const },
  { href: '#contact', key: 'contact' as const },
]

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  )
}

export function Nav() {
  const { t, toggleLang } = useLanguage()

  return (
    <header className="nav">
      <a className="nav__brand" href="#top">
        <span className="nav__mark">MA</span>
        <span className="nav__name">Maria Alejandra</span>
      </a>

      <nav className="nav__links" aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {t.nav[link.key]}
          </a>
        ))}
      </nav>

      <div className="nav__end">
        <a
          className="nav__icon"
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a className="nav__icon" href={`mailto:${contact.email}`} aria-label="Email">
          <MailIcon />
        </a>
        <button type="button" className="nav__lang" onClick={toggleLang} aria-label={`Switch to ${t.nav.langToggle}`}>
          {t.nav.langToggle}
        </button>
      </div>
    </header>
  )
}
