import { useState } from 'react'
import { Repeat2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SiteFooter() {
  const [contactSubmitted, setContactSubmitted] = useState(false)

  function submitContactForm(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setContactSubmitted(true)
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand brand-light" to="/"><span className="brand-mark"><Repeat2 size={18} /></span><span>ReLoop<span className="brand-period">.</span></span></Link>
          <p>Good things deserve another go.<br />Buy Smart. Sell Better.</p>
        </div>
        <div className="footer-column"><strong>EXPLORE</strong><a href="/#why-reloop">About ReLoop</a><a href="/#benefits">Features</a><a href="/#categories">Browse categories</a><a href="/#how-it-works">How it works</a><a href="/#pricing">Plans</a></div>
        <div className="footer-column"><strong>SUPPORT</strong><a href="/#faq">Common questions</a><a href="/#seller-cta">Sell an item</a></div>
        <div className="footer-column"><strong>ACCOUNT</strong><Link to="/auth?mode=login">Sign in</Link><Link to="/auth?mode=login">Get Started</Link></div>
        <div className="footer-column footer-contact">
          <strong>CONTACT</strong>
          <a href="mailto:hello@reloop.in">hello@reloop.in</a>
          <form className="footer-contact-form" onSubmit={submitContactForm} onChange={() => setContactSubmitted(false)}>
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Message<textarea name="message" rows="3" required /></label>
            <button type="submit" className="button button-primary">Send message</button>
            {contactSubmitted && <p className="footer-contact-success" role="status">Thanks for reaching out. This demo form does not send messages.</p>}
          </form>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 ReLoop. Made for things to go around.</span><span>Buy Smart. Sell Better.</span></div>
    </footer>
  )
}
