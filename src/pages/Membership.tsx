import PageBanner from '../components/PageBanner'
import PricingSection from '../components/PricingSection'
import BenefitsSection from '../components/BenefitsSection'
import ContactCta from '../components/ContactCta'

export default function Membership() {
  return <><PageBanner eyebrow="FIND YOUR FIT" title="Membership" crumb="Membership"/><PricingSection/><BenefitsSection/><ContactCta/></>
}
