import { useSearchParams, Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { pricingPlans } from '../data/pricingPlans'

export default function PricingSection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedPlan = searchParams.get('plan')
  const selectedPlanId = pricingPlans.some((plan) => plan.id === requestedPlan)
    ? requestedPlan
    : pricingPlans[0].id
  const selectedPlanIndex = pricingPlans.findIndex(
    (plan) => plan.id === selectedPlanId,
  )

  function selectPlan(planId) {
    setSearchParams({ plan: planId }, { replace: true })
  }

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-heading">
        <p className="eyebrow">One account for everything</p>
        <h2>Choose how you use ReLoop.</h2>
        <p>Prices shown are for demonstration. No payments are taken here.</p>
      </div>
      <div className="pricing-grid">
        <span
          className={`pricing-selection-indicator pricing-selection-${selectedPlanIndex}`}
          aria-hidden="true"
        />
        {pricingPlans.map((plan) => {
          const selected = plan.id === selectedPlanId

          return (
            <article
              className={`pricing-card ${selected ? 'pricing-card-selected' : ''}`}
              key={plan.id}
            >
              <button
                type="button"
                className="pricing-card-select"
                aria-pressed={selected}
                onClick={() => selectPlan(plan.id)}
              >
                <div className="pricing-card-title">
                  <h3>{plan.name}</h3>
                  <span className="pricing-card-badges">
                    {plan.badge && (
                      <span className="popular-tag">{plan.badge}</span>
                    )}
                    {selected && <span className="selected-tag">Selected</span>}
                  </span>
                </div>
                <div className="pricing-card-price">
                  <strong>{plan.price}</strong>
                  <span>{plan.period}</span>
                </div>
                <p className="pricing-card-description">{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </button>
              <Link
                to={`/auth?mode=login&plan=${plan.id}`}
                className={`button ${selected ? 'button-primary' : 'button-outline'} pricing-action`}
              >
                Get Started <ArrowRight size={15} />
              </Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}
