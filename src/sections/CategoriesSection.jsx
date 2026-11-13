import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categoryCards, landingAuthLinks } from '../data/landingContent'

export default function CategoriesSection() {
  return (
    <section className="section category-section" id="categories">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Browse ReLoop</p>
          <h2>
            Find something <span>good.</span>
          </h2>
        </div>
        <Link className="text-link" to={landingAuthLinks.browse}>
          Browse all listings <ArrowRight size={15} />
        </Link>
      </div>
      <div className="category-grid">
        {categoryCards.map((category) => (
          <Link
            className="category-card"
            to={landingAuthLinks.browse}
            key={category.name}
          >
            <img src={category.image} alt="" loading="lazy" />
            <span className="category-arrow">
              <ArrowUpRight size={16} />
            </span>
            <span className="category-label">
              <strong>{category.name}</strong>
              <small>{category.detail}</small>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
