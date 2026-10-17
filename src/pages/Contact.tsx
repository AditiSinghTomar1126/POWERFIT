import { MapPin, Phone, Mail, Clock3 } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'

const details = [
  { icon: MapPin, title: 'Visit the gym', text: '123 Fitness Avenue, Your City' },
  { icon: Phone, title: 'Call our team', text: '+1 (300) 404-4888' },
  { icon: Mail, title: 'Email us', text: 'hello@powerfit.example' },
  { icon: Clock3, title: 'Opening hours', text: 'Mon–Fri: 5am–11pm' },
]

export default function Contact() {
  return <><PageBanner eyebrow="WE'RE HERE TO HELP" title="Get in touch" crumb="Contact"/><section className="bg-[var(--color-light-bg)] py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8"><div><p className="mb-4 text-xs font-extrabold tracking-[.2em] text-[var(--color-primary)]">LET'S CONNECT</p><h2 className="font-[Barlow_Condensed] text-5xl font-black uppercase leading-none sm:text-6xl">Your goals.<br/>Our game plan.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[var(--color-muted)]">Ask about memberships, classes, or personal coaching. We’ll help you choose a starting point and make your first visit easy.</p><div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">{details.map(item=>{const Icon=item.icon;return <div key={item.title} className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]"><Icon size={20}/></span><div><h3 className="font-extrabold">{item.title}</h3><p className="mt-1 text-sm text-[var(--color-muted)]">{item.text}</p></div></div>})}</div></div><ContactForm/></div></section></>
}
