import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trainers } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function TrainersSection() {
  return <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionHeading eyebrow="MEET THE COACHES" title="Your team. Your progress." text="Experienced coaches who bring knowledge, energy, and encouragement to every session."/><Link to="/about" className="btn-primary w-fit">Meet Our Team <ArrowUpRight size={16}/></Link></div><div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">{trainers.map((trainer)=><article key={trainer.name} className="group relative overflow-hidden rounded-2xl bg-[#ececef]"><img src={trainer.image} alt={trainer.name} className="h-[270px] w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-[350px]"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent p-4 pt-16 text-white sm:p-6 sm:pt-20"><span className="text-[9px] font-extrabold tracking-[.2em] text-[var(--color-primary)] sm:text-[10px]">{trainer.tag}</span><h3 className="mt-1 font-[Barlow_Condensed] text-xl font-bold uppercase sm:text-2xl">{trainer.name}</h3><p className="mt-1 text-[10px] text-white/65 sm:text-xs">{trainer.role}</p></div></article>)}</div></div></section>
}
