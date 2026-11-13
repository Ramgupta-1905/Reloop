import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Search } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { LISTINGS_STORAGE_KEY } from '../authStorage'
import { marketplaceProducts } from '../data'

const categories = ['All', 'Electronics', 'Furniture', 'Lifestyle']

function loadSavedListings() {
  try {
    const saved = window.localStorage.getItem(LISTINGS_STORAGE_KEY)
    if (!saved) return { listings: [], error: '' }

    const parsed = JSON.parse(saved)
    if (!Array.isArray(parsed)) {
      return { listings: [], error: 'Saved listings are in an invalid format. Clear this site’s listing data and try again.' }
    }
    return { listings: parsed, error: '' }
  } catch (readError) {
    const message = readError instanceof SyntaxError
      ? 'We couldn’t read your saved listings. Clear this site’s listing data and try again.'
      : readError.message || 'We couldn’t load your saved listings.'
    return { listings: [], error: message }
  }
}

export default function MarketplacePage() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [savedListings] = useState(loadSavedListings)
  const { listings: userListings, error } = savedListings
  const requestedCategory = params.get('category')
  const activeCategory = categories.includes(requestedCategory) ? requestedCategory : 'All'

  const listings = useMemo(() => [...userListings, ...marketplaceProducts], [userListings])
  const visibleListings = useMemo(() => {
    const term = query.trim().toLowerCase()
    return listings.filter((listing) => {
      const matchesCategory = activeCategory === 'All' || listing.category === activeCategory
      const matchesSearch = !term || `${listing.name} ${listing.description}`.toLowerCase().includes(term)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, listings, query])

  function selectCategory(event) {
    const nextParams = new URLSearchParams(params)
    if (event.target.value === 'All') nextParams.delete('category')
    else nextParams.set('category', event.target.value)
    setParams(nextParams)
  }

  return (
    <main className="marketplace-page">
      <div className="marketplace-heading">
        <Link className="marketplace-back" to="/"><ArrowLeft size={15} /> Home</Link>
        <p className="eyebrow">Good things, going around</p>
        <h1>Browse the marketplace.</h1>
        <p>Find a pre-loved product, check the details and start with a fair offer.</p>
      </div>
      <section className="marketplace-controls" aria-label="Search and filter listings">
        <label className="marketplace-search"><Search size={18} /><span className="sr-only">Search listings</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" /></label>
        <label className="marketplace-category">Category<select value={activeCategory} onChange={selectCategory}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
      </section>
      {error && <p className="marketplace-error" role="alert">{error}</p>}
      {!error && visibleListings.length === 0 ? (
        <p className="marketplace-empty">No listings match that search. Try another product name or category.</p>
      ) : (
        <section className="marketplace-grid" aria-label="Product listings">
          {visibleListings.map((listing) => (
            <article className="marketplace-card" key={listing.id || listing.name}>
              <div className="marketplace-card-image"><img src={listing.image} alt={listing.name} loading="lazy" /><span>{listing.condition}</span></div>
              <div className="marketplace-card-content">
                <p className="marketplace-card-category">{listing.category}</p>
                <h2>{listing.name}</h2>
                <p className="marketplace-card-description">{listing.description}</p>
                <p className="marketplace-card-detail"><strong>{listing.detailLabel}</strong> {listing.detail}</p>
                <div className="marketplace-card-footer"><strong>₹{Number(listing.price).toLocaleString('en-IN')}</strong><span>Seller: {listing.seller}</span></div>
              </div>
            </article>
          ))}
        </section>
      )}
      <div className="marketplace-bottom"><span>Have something useful to pass on?</span><Link className="button button-primary" to="/listings/new">Create a listing <ArrowRight size={15} /></Link></div>
    </main>
  )
}
