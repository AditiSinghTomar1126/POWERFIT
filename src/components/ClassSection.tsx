import { ArrowUpRight, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { classes } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function ClassSection() {
  return <section className="bg-white py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8"><div><SectionHeading eyebrow="UPCOMING CLASSES" title="Move with the energy." text="Get coached, meet your people, and make every session count. There is always a class to fit your week."/><Link to="/packages" className="btn-primary mt-8">View All Classes <ArrowUpRight size={16}/></Link></div><div className="divide-y divide-black/10 border-y border-black/10">{classes.map((item,i)=><article key={item.title} className="grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-[10px] font-extrabold tracking-[.2em] text-[var(--color-primary)]">{item.day}</p><h3 className="mt-2 font-[Barlow_Condensed] text-3xl font-bold uppercase">{item.title}</h3><p className="mt-1 text-xs text-[var(--color-muted)]">{item.level}</p></div><div className="flex items-center justify-between gap-6 sm:justify-end"><span className="flex items-center gap-2 text-sm font-semibold"><Clock3 size={16} className="text-[var(--color-primary)]"/>{item.time}</span><Link to="/contact" aria-label={`Join ${item.title}`} className="grid h-11 w-11 place-items-center rounded-full bg-black text-white transition hover:bg-[var(--color-primary)]"><ArrowUpRight size={18}/></Link></div></article>)}</div></div></section>
}
