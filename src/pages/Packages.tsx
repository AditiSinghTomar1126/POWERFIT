import PageBanner from '../components/PageBanner'
import ProgramsSection from '../components/ProgramsSection'
import ClassSection from '../components/ClassSection'
import PricingSection from '../components/PricingSection'
import ContactCta from '../components/ContactCta'

export default function Packages() {
  return <><PageBanner eyebrow="TRAIN WITH PURPOSE" title="Programs & packages" crumb="Packages"/><ProgramsSection/><ClassSection/><PricingSection/><ContactCta/></>
}
