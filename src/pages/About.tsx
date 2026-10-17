import PageBanner from '../components/PageBanner'
import AboutSection from '../components/AboutSection'
import BenefitsSection from '../components/BenefitsSection'
import TrainersSection from '../components/TrainersSection'
import ContactCta from '../components/ContactCta'

export default function About() {
  return <><PageBanner eyebrow="THE POWERFIT DIFFERENCE" title="Built around you" crumb="About"/><AboutSection/><BenefitsSection/><TrainersSection/><ContactCta/></>
}
