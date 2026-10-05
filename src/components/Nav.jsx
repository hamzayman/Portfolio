import { useState, useEffect } from 'react'

const links = [
  { href: '#', label: 'Home', section: 'hero' },
  { href: '#about', label: 'About', section: 'about' },
  { href: '#projects', label: 'Projects', section: 'projects' },
  { href: '#learning', label: 'Learning', section: 'learning' },
  { href: '#contact', label: 'Contact', section: 'contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('.section')
      let current = 'hero'
      sections.forEach(s => {
        if (s.offsetTop <= window.scrollY + 120) {
          current = s.id
        }
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Close on scroll
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [menuOpen])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          hamza<span className="nav-logo-dot">.</span>eid
        </a>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a
              key={l.section}
              href={l.href}
              className={`nav-link${active === l.section ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
      </div>
    </nav>
  )
}
