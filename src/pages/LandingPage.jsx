import AboutSection from '../sections/AboutSection'
import BenefitsSection from '../sections/BenefitsSection'
import CategoriesSection from '../sections/CategoriesSection'
import FaqSection from '../sections/FaqSection'
import HeroSection from '../sections/HeroSection'
import HowItWorksSection from '../sections/HowItWorksSection'
import PricingSection from '../sections/PricingSection'
import SellerCalloutSection from '../sections/SellerCalloutSection'

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <CategoriesSection />
      <HowItWorksSection />
      <PricingSection />
      <SellerCalloutSection />
      <FaqSection />
    </main>
  )
}
