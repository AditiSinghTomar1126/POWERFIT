import { Dumbbell, HeartPulse, Users, CalendarCheck } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { benefits } from '../data/siteData'

const icons = [Dumbbell, HeartPulse, Users, CalendarCheck]

export default function BenefitsSection() {
  return <section className="bg-[var(--color-light-bg)] py-20 sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8"><div className="relative"><img src="https://images.unsplash.com/photo-1534368270820-9de3d8053204?auto=format&fit=crop&w=1100&q=85" alt="Athlete working through a training session" className="h-[500px] w-full rounded-2xl object-cover sm:h-[590px]"/><div className="absolute -bottom-5 right-4 rounded-xl bg-[var(--color-primary)] p-5 text-white shadow-xl sm:right-8 sm:p-7"><p className="font-[Barlow_Condensed] text-4xl font-black">500+</p><p className="text-xs font-bold uppercase tracking-wider">People trained</p></div></div><div><SectionHeading eyebrow="WHY POWERFIT" title="More than a gym. Your next chapter." text="Great fitness is built on consistency, expert guidance, and a place where you feel you belong. We bring all three together."/><div className="mt-9 grid gap-6 sm:grid-cols-2">{benefits.map((item,i)=>{const Icon=icons[i];return <div key={item.title} className="border-t border-black/10 pt-5"><span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]"><Icon size={22}/></span><h3 className="font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.text}</p></div>})}</div></div></div></section>
}
