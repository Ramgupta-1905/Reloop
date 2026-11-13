import laptopImage from '../assets/laptop.avif'

export const landingAuthLinks = {
  signIn: '/auth?mode=login',
  browse: '/auth?mode=login&next=%2F%23categories',
  sell: '/auth?mode=login&next=%2F%23seller-cta',
}

export const heroProducts = [
  {
    name: 'Laptop (i5, 16GB)',
    price: '₹28,000',
    originalPrice: '₹35,000',
    image: laptopImage,
  },
  {
    name: '1 Seater Sofa',
    price: '₹4,500',
    originalPrice: '₹6,000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=960&q=85',
  },
]

export const categoryCards = [
  {
    name: 'Electronics',
    detail: 'Tech worth another look',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Furniture',
    detail: 'Pieces with a past',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'Lifestyle',
    detail: 'Everyday things, loved again',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85',
  },
  {
    name: 'A Little More',
    detail: 'See what turns up',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=800&q=85',
  },
]

export const listingPreview = {
  name: 'ThinkPad X1 Carbon',
  category: 'Electronics',
  condition: 'Excellent',
  price: 32500,
  seller: 'Aarav',
  image: laptopImage,
}

export const questions = [
  [
    'How do offers work?',
    'Send the seller a price that feels fair to you. They can accept, decline or come back with a counteroffer. You can keep track of the conversation right here on ReLoop.',
  ],
  [
    'Is ReLoop free to use?',
    'Getting started is free. ReLoop helps buyers and sellers find each other and agree on a price.',
  ],
  [
    'Does ReLoop handle payments or delivery?',
    'No. Payment, collection and delivery are arranged directly between the buyer and seller. ReLoop does not process payments or provide delivery.',
  ],
  [
    'What do the condition labels mean?',
    'Sellers describe their item as Like new, Excellent, Good or Fair. Read the listing details and ask the seller any questions before you agree.',
  ],
  [
    'How do I sell something?',
    'Create an account, add a few details and a photo, then set the price you have in mind. You can respond to offers from your account.',
  ],
]
