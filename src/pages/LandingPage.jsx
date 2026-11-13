import { useState } from 'react'
import { ArrowRight, ArrowUpRight, BadgeIndianRupee, Check, ClipboardCheck, Handshake, Heart, Leaf, Recycle, ShieldCheck } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import flowerpotImage from '../assets/flowerpot.avif'
import { SESSION_STORAGE_KEY } from '../authStorage'
import { heroProducts, marketplaceProducts } from '../data'
import { pricingPlans } from '../pricingPlans'

const categories = [
  { name: 'Electronics', detail: 'Tech worth another look', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=85' },
  { name: 'Furniture', detail: 'Pieces with a past', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85' },
  { name: 'Lifestyle', detail: 'Everyday things, loved again', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85' },
  { name: 'A Little More', detail: 'See what turns up', image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=800&q=85' },
]

const benefits = [
  { icon: BadgeIndianRupee, title: 'Better Deals', description: 'Find quality pre-owned products at affordable prices.' },
  { icon: Handshake, title: 'Flexible Negotiation', description: 'Buyers can make offers, while sellers can accept, reject or counteroffer.' },
  { icon: ClipboardCheck, title: "Know What You're Getting", description: 'Clear product descriptions, condition information and seller details help users make informed decisions.' },
  { icon: Recycle, title: 'Give Things Another Go', description: 'Keep useful products in circulation and reduce unnecessary waste.' },
]

const reloopSides = [
  {
    label: 'For buyers',
    title: 'Finding something you love',
    items: ['Explore pre-owned products', 'Check product details and condition', 'Make an offer that suits your budget'],
  },
  {
    label: 'For sellers',
    title: 'Passing something on',
    items: ['List something you no longer need', 'Set your asking price', 'Connect with people and respond to offers'],
  },
]

const previewProduct = marketplaceProducts[0]

const questions = [
  ['How do offers work?', 'Send the seller a price that feels fair to you. They can accept, decline or come back with a counteroffer. You can keep track of the conversation right here on ReLoop.'],
  ['Is ReLoop free to use?', 'Getting started is free. ReLoop helps buyers and sellers find each other and agree on a price.'],
  ['Does ReLoop handle payments or delivery?', 'No. Payment, collection and delivery are arranged directly between the buyer and seller. ReLoop does not process payments or provide delivery.'],
  ['What do the condition labels mean?', 'Sellers describe their item as Like new, Excellent, Good or Fair. Read the listing details and ask the seller any questions before you agree.'],
  ['How do I sell something?', 'Create an account, add a few details and a photo, then set the price you have in mind. You can respond to offers from your account.'],
]

export default function LandingPage() {
  const [openQuestion, setOpenQuestion] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const isSignedIn = Boolean(window.localStorage.getItem(SESSION_STORAGE_KEY))
  const selectedPlanId = pricingPlans.some((plan) => plan.id === searchParams.get('plan'))
    ? searchParams.get('plan')
    : pricingPlans[0].id
  const selectedPlanIndex = pricingPlans.findIndex((plan) => plan.id === selectedPlanId)

  function selectPlan(planId) {
    setSearchParams({ plan: planId }, { replace: true })
  }

  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="hero-kicker"><Leaf size={15} /> Buy · Sell · Reuse</div>
          <h1>Give products<br />a <span>second life.</span></h1>
          <div className="hero-actions">
            <Link to="/auth?mode=login&next=%2Fmarketplace" className="button button-primary">Start Buying <ArrowRight size={16} /></Link>
            <Link to="/auth?mode=login&next=%2Flistings%2Fnew" className="button button-outline">Sell an Item <ArrowUpRight size={15} /></Link>
          </div>
          <div className="hero-points">
            <span><ShieldCheck size={17} /> Safe & simple</span>
            <span><Handshake size={17} /> Negotiate deals</span>
            <span><Leaf size={16} /> Sustainable choice</span>
          </div>
        </div>
        <div className="hero-visual">
          <svg className="hero-loop" viewBox="0 0 640 400" fill="none" aria-hidden="true"><path d="M37 286C15 225 42 160 99 150c62-11 103 64 156 99 51 34 107 37 151 4 41-31 70-105 126-119 52-13 93 23 84 70-10 53-76 79-129 66-65-16-100-100-153-143-50-41-117-41-151 0-33 40-6 94 32 126" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
          {heroProducts.map((product, index) => (
            <article className={`hero-product-card hero-product-card-${index + 1}`} key={product.name}>
              <div className="hero-product-image"><img src={product.image} alt="" /><span className="hero-heart" aria-hidden="true"><Heart size={20} /></span></div>
              <div className="hero-product-info"><h2>{product.name}</h2><div className="hero-product-price"><strong>{product.price}</strong><del>{product.originalPrice}</del></div><span className="hero-product-offer">Offers welcome</span></div>
            </article>
          ))}
          <span className="hero-spark hero-spark-one">✳</span><span className="hero-spark hero-spark-two">✳</span>
        </div>
      </section>

      <section className="section why-section" id="why-reloop">
        <div className="why-story">
          <div className="why-copy">
            <p className="eyebrow">A little more life in good things</p>
            <h2>Why ReLoop exists.</h2>
            <p className="why-paragraph">A simple marketplace to buy and sell pre-owned electronics, furniture and more. List what you don't need, find what you want, and negotiate the best price.</p>
            <p className="why-supporting">ReLoop makes it easier to find something useful, agree on a fair price and pass it along to someone who will enjoy it.</p>
          </div>
          <figure className="why-visual">
            <img src={flowerpotImage} alt="A flower pot bringing life to a home" loading="lazy" />
            <figcaption><Recycle size={16} /> Good things deserve another go.</figcaption>
          </figure>
        </div>
      </section>

      <section className="benefits-section" id="benefits">
        <div className="benefits-heading">
          <p className="eyebrow">Why people choose ReLoop</p>
          <h2>A better way to buy and sell.</h2>
          <p>Find something useful, agree on a fair price and feel good about passing it on.</p>
        </div>
        <div className="benefits-grid">{benefits.map(({ icon: Icon, title, description }) => (
          <article className="benefit-item" key={title}>
            <span className="benefit-icon"><Icon size={22} strokeWidth={1.7} /></span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}</div>
      </section>

      <section className="section category-section" id="categories">
        <div className="section-heading">
          <div><p className="eyebrow">Browse ReLoop</p><h2>Find something <span>good.</span></h2></div>
          <Link className="text-link" to="/auth?mode=login&next=%2Fmarketplace">Browse all listings <ArrowRight size={15} /></Link>
        </div>
        <div className="category-grid">{categories.map((category) => (
          <Link className="category-card" to={`/auth?mode=login&next=${encodeURIComponent(`/marketplace?category=${category.name}`)}`} key={category.name}>
            <img src={category.image} alt="" loading="lazy" />
            <span className="category-arrow"><ArrowUpRight size={16} /></span>
            <span className="category-label"><strong>{category.name}</strong><small>{category.detail}</small></span>
          </Link>
        ))}</div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-intro">
          <div><p className="eyebrow">A marketplace for both sides</p><h2>Good finds. Fair deals.<br /><span>Happy new homes.</span></h2></div>
          <p>Whether you're looking for something or passing something on, ReLoop makes it easier to find the right person and agree on a fair price.</p>
        </div>
        <div className="how-layout">
          <figure className="how-listing-preview">
            <div className="how-listing-photo">
              <img src={previewProduct.image} alt="A pre-owned ThinkPad laptop listing" loading="lazy" />
              <span className="listing-condition">{previewProduct.condition} condition</span>
            </div>
            <figcaption className="how-listing-caption">
              <p className="eyebrow">Marketplace listing</p>
              <div><h3>{previewProduct.name}</h3><strong>₹{previewProduct.price.toLocaleString('en-IN')}</strong></div>
              <span>{previewProduct.category} · Seller {previewProduct.seller}</span>
            </figcaption>
            <div className="offer-preview">
              <p>Example offer</p>
              <div><span>You offered</span><strong>₹30,500</strong></div>
              <div><span>Seller countered</span><strong>₹31,200</strong></div>
            </div>
          </figure>
          <div className="how-sides">{reloopSides.map((side) => (
            <article className="how-side" key={side.label}>
              <p className="eyebrow">{side.label}</p>
              <h3>{side.title}</h3>
              <ul>{side.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
            </article>
          ))}</div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-heading"><p className="eyebrow">One account for everything</p><h2>Choose how you use ReLoop.</h2><p>Prices shown are for demonstration. No payments are taken here.</p></div>
        <div className="pricing-grid">
          <span className={`pricing-selection-indicator pricing-selection-${selectedPlanIndex}`} aria-hidden="true" />
          {pricingPlans.map((plan) => {
            const selected = plan.id === selectedPlanId
            return (
              <article className={`pricing-card ${selected ? 'pricing-card-selected' : ''}`} key={plan.id}>
                <button type="button" className="pricing-card-select" aria-pressed={selected} onClick={() => selectPlan(plan.id)}>
                  <div className="pricing-card-title">
                    <h3>{plan.name}</h3>
                    <span className="pricing-card-badges">
                      {plan.badge && <span className="popular-tag">{plan.badge}</span>}
                      {selected && <span className="selected-tag">Selected</span>}
                    </span>
                  </div>
                  <div className="pricing-card-price"><strong>{plan.price}</strong><span>{plan.period}</span></div>
                  <p className="pricing-card-description">{plan.description}</p>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
                </button>
                <Link to={`/auth?mode=login&plan=${plan.id}`} className={`button ${selected ? 'button-primary' : 'button-outline'} pricing-action`}>Get Started <ArrowRight size={15} /></Link>
              </article>
            )
          })}
        </div>
      </section>

      <section className="seller-callout" id="seller-cta">
        <div className="seller-callout-image"><img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=85" alt="Pre-owned furniture in a bright, welcoming room" loading="lazy" /></div>
        <div className="seller-callout-copy">
          <p className="eyebrow">Ready for its next chapter?</p>
          <h2>Someone else might<br />love that <span>thing.</span></h2>
          <p>Give what you no longer need a new home. Set your price, share the details and see who's interested.</p>
          <Link to={isSignedIn ? '/listings/new' : '/auth?mode=login&next=%2Flistings%2Fnew'} className="button button-dark">Get started selling <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-heading"><p className="eyebrow">Support & answers</p><h2>Frequently asked <span>questions.</span></h2><p>Clear answers about buying, selling, offers and finding a good second-hand thing.</p></div>
        <div className="faq-list">{questions.map(([question, answer], index) => <div className={`faq-item ${openQuestion === index ? 'faq-open' : ''}`} key={question}><button onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)} aria-expanded={openQuestion === index}><span>{question}</span><span className="faq-toggle">{openQuestion === index ? '−' : '+'}</span></button>{openQuestion === index && <p>{answer}</p>}</div>)}</div>
      </section>
    </main>
  )
}
