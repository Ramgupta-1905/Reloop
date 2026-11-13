import { Check } from 'lucide-react'
import { listingPreview } from '../data/landingContent'

const buyerSteps = [
  'Explore pre-owned products',
  'Check product details and condition',
  'Make an offer that suits your budget',
]

const sellerSteps = [
  'List something you no longer need',
  'Set your asking price',
  'Connect with people and respond to offers',
]

const participantStories = [
  {
    label: 'For buyers',
    title: 'Finding something you love',
    items: buyerSteps,
  },
  {
    label: 'For sellers',
    title: 'Passing something on',
    items: sellerSteps,
  },
]

export default function HowItWorksSection() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-intro">
        <div>
          <p className="eyebrow">A marketplace for both sides</p>
          <h2>
            Good finds. Fair deals.
            <br />
            <span>Happy new homes.</span>
          </h2>
        </div>
        <p>
          Whether you&apos;re looking for something or passing something on,
          ReLoop makes it easier to find the right person and agree on a fair
          price.
        </p>
      </div>
      <div className="how-layout">
        <figure className="how-listing-preview">
          <div className="how-listing-photo">
            <img
              src={listingPreview.image}
              alt="A pre-owned ThinkPad laptop listing"
              loading="lazy"
            />
            <span className="listing-condition">
              {listingPreview.condition} condition
            </span>
          </div>
          <figcaption className="how-listing-caption">
            <p className="eyebrow">Marketplace listing</p>
            <div>
              <h3>{listingPreview.name}</h3>
              <strong>₹{listingPreview.price.toLocaleString('en-IN')}</strong>
            </div>
            <span>
              {listingPreview.category} · Seller {listingPreview.seller}
            </span>
          </figcaption>
          <div className="offer-preview">
            <p>Example offer</p>
            <div>
              <span>You offered</span>
              <strong>₹30,500</strong>
            </div>
            <div>
              <span>Seller countered</span>
              <strong>₹31,200</strong>
            </div>
          </div>
        </figure>
        <div className="how-sides">
          {participantStories.map((story) => (
            <article className="how-side" key={story.label}>
              <p className="eyebrow">{story.label}</p>
              <h3>{story.title}</h3>
              <ul>
                {story.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
