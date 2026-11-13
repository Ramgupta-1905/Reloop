import {
  BadgeIndianRupee,
  ClipboardCheck,
  Handshake,
  Recycle,
} from 'lucide-react'

const benefits = [
  {
    icon: BadgeIndianRupee,
    title: 'Better Deals',
    description: 'Find quality pre-owned products at affordable prices.',
  },
  {
    icon: Handshake,
    title: 'Flexible Negotiation',
    description:
      'Buyers can make offers, while sellers can accept, reject or counteroffer.',
  },
  {
    icon: ClipboardCheck,
    title: "Know What You're Getting",
    description:
      'Clear product descriptions, condition information and seller details help users make informed decisions.',
  },
  {
    icon: Recycle,
    title: 'Give Things Another Go',
    description:
      'Keep useful products in circulation and reduce unnecessary waste.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-heading">
        <p className="eyebrow">Why people choose ReLoop</p>
        <h2>A better way to buy and sell.</h2>
        <p>
          Find something useful, agree on a fair price and feel good about
          passing it on.
        </p>
      </div>
      <div className="benefits-grid">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article className="benefit-item" key={title}>
            <span className="benefit-icon">
              <Icon size={22} strokeWidth={1.7} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
