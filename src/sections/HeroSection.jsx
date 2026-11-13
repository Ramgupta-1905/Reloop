import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Heart,
  Leaf,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroProducts, landingAuthLinks } from '../data/landingContent'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <div className="hero-kicker">
          <Leaf size={15} /> Buy · Sell · Reuse
        </div>
        <h1>
          Give products
          <br />a <span>second life.</span>
        </h1>
        <div className="hero-actions">
          <Link to={landingAuthLinks.browse} className="button button-primary">
            Start Buying <ArrowRight size={16} />
          </Link>
          <Link to={landingAuthLinks.sell} className="button button-outline">
            Sell an Item <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="hero-points">
          <span>
            <ShieldCheck size={17} /> Safe &amp; simple
          </span>
          <span>
            <Handshake size={17} /> Negotiate deals
          </span>
          <span>
            <Leaf size={16} /> Sustainable choice
          </span>
        </div>
      </div>
      <div className="hero-visual">
        <svg
          className="hero-loop"
          viewBox="0 0 640 400"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M37 286C15 225 42 160 99 150c62-11 103 64 156 99 51 34 107 37 151 4 41-31 70-105 126-119 52-13 93 23 84 70-10 53-76 79-129 66-65-16-100-100-153-143-50-41-117-41-151 0-33 40-6 94 32 126"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        {heroProducts.map((product, index) => (
          <article
            className={`hero-product-card hero-product-card-${index + 1}`}
            key={product.name}
          >
            <div className="hero-product-image">
              <img src={product.image} alt="" />
              <span className="hero-heart" aria-hidden="true">
                <Heart size={20} />
              </span>
            </div>
            <div className="hero-product-info">
              <h2>{product.name}</h2>
              <div className="hero-product-price">
                <strong>{product.price}</strong>
                <del>{product.originalPrice}</del>
              </div>
              <span className="hero-product-offer">Offers welcome</span>
            </div>
          </article>
        ))}
        <span className="hero-spark hero-spark-one">✳</span>
        <span className="hero-spark hero-spark-two">✳</span>
      </div>
    </section>
  )
}
