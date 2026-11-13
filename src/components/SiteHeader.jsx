import { useState } from 'react'
import { ArrowRight, Menu, Repeat2, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'About', href: '/#why-reloop' },
  { label: 'Features', href: '/#benefits' },
  { label: 'Browse', href: '/#categories' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="ReLoop home">
          <span className="brand-mark"><Repeat2 size={19} strokeWidth={2.5} /></span>
          <span>ReLoop<span className="brand-period">.</span></span>
        </Link>
        <button className="mobile-menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(({ label, href }) => <a href={href} key={label} onClick={closeMenu}>{label}</a>)}
          <div className="mobile-nav-actions">
            <Link to="/auth?mode=login" className="button button-primary" onClick={closeMenu}>Get Started <ArrowRight size={15} /></Link>
          </div>
        </nav>
        <div className="header-actions">
          <Link to="/auth?mode=login" className="button button-primary button-small">Get Started <ArrowRight size={14} /></Link>
        </div>
      </div>
    </header>
  )
}
