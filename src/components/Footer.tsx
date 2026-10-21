import { Link } from 'react-router-dom'
import { ArrowUpRight, Dumbbell, Instagram, Facebook, Youtube } from 'lucide-react'
import { navLinks } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div><Link to="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary)]"><Dumbbell /></span><span className="font-[Barlow_Condensed] text-2xl font-black uppercase">Power<span className="text-[var(--color-primary)]">Fit</span></span></Link><p className="mt-5 max-w-xs text-sm leading-7 text-white/55">Built for every goal. Backed by expert coaches, quality equipment, and a community that keeps you moving.</p><div className="mt-5 flex gap-3">{[Instagram, Facebook, Youtube].map((Icon, i) => <a key={i} href="#contact" aria-label={['Instagram', 'Facebook', 'YouTube'][i]} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]"><Icon size={17} /></a>)}</div></div>
        <div><h3 className="mb-5 font-bold uppercase tracking-wider">Explore</h3><div className="grid gap-3">{navLinks.map(link => <Link key={link.label} to={link.href} className="text-sm text-white/55 transition hover:text-white">{link.label}</Link>)}</div></div>
        <div><h3 className="mb-5 font-bold uppercase tracking-wider">Opening Hours</h3><p className="mb-3 text-sm text-white/55">Mon – Fri <span className="float-right text-white">5am – 11pm</span></p><p className="mb-3 text-sm text-white/55">Saturday <span className="float-right text-white">6am – 9pm</span></p><p className="text-sm text-white/55">Sunday <span className="float-right text-white">7am – 7pm</span></p></div>
        <div><h3 className="mb-5 font-bold uppercase tracking-wider">Get Started</h3><p className="text-sm leading-7 text-white/55">Ready to make your next move? Let’s build a plan around you.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[var(--color-primary)]">Talk to our team <ArrowUpRight size={16} /></Link></div>
      </div>
      <div className=" flex flex-wrap justify-between border-t border-white/10 px-10 py-5 text-center text-xs text-white/40">
      <span>© {new Date().getFullYear()} PowerFit Gym. All rights reserved.</span>

      <span>Made and Managed by ATNexus</span>
       </div>
    </footer>
  )
}
