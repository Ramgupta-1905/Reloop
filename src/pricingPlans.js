export const pricingPlans = [
  {
    id: 'reloop-free',
    name: 'ReLoop Free',
    price: '₹0',
    period: '/ Always',
    description: 'Explore, buy and sell at no cost.',
    features: [
      'Browse all available listings',
      'Search and filter products',
      'View product details and condition',
      'Create and manage up to 3 active listings',
      'Make offers and negotiate prices',
      'Respond to offers',
      'Track buying and selling activity',
    ],
  },
  {
    id: 'reloop-plus',
    name: 'ReLoop Plus',
    price: '₹149',
    period: '/ Month',
    description: 'More ways to find good deals and manage your listings.',
    features: [
      'Everything in ReLoop Free',
      'Save unlimited favourite products',
      'Save searches and get new listing alerts',
      'Create up to 10 active listings',
      'Access advanced product filters',
      'Get alerts for price changes',
      'Track offers and counteroffers in one place',
      'Enhanced listing visibility',
    ],
    badge: 'Popular choice',
  },
  {
    id: 'reloop-pro',
    name: 'ReLoop Pro',
    price: '₹249',
    period: '/ Month',
    description: 'Get more control over your marketplace activity.',
    features: [
      'Everything in ReLoop Plus',
      'Create unlimited active listings',
      'Priority placement in marketplace results',
      'Detailed listing performance insights',
      'Advanced offer and negotiation tracking',
      'More listing management options',
      'Featured profile visibility',
      'Priority customer support',
    ],
  },
]

export function getPricingPlan(id) {
  return pricingPlans.find((plan) => plan.id === id)
}
