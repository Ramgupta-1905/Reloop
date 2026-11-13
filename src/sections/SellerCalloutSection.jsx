import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { landingAuthLinks } from '../data/landingContent'

export default function SellerCalloutSection() {
  return (
    <section className="seller-callout" id="seller-cta">
      <div className="seller-callout-image">
        <img
          src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85"
          alt="Pre-owned furniture in a bright, welcoming room"
          loading="lazy"
        />
      </div>
      <div className="seller-callout-copy">
        <p className="eyebrow">Ready for its next chapter?</p>
        <h2>
          Someone else might
          <br />
          love that <span>thing.</span>
        </h2>
        <p>
          Give what you no longer need a new home. Set your price, share the
          details and see who&apos;s interested.
        </p>
        <Link to={landingAuthLinks.sell} className="button button-dark">
          Get started selling <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  )
}
