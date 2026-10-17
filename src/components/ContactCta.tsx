import { ArrowRight, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactCta() {
  return <section className="relative overflow-hidden bg-black py-16 text-center text-white sm:py-20"><div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80')" }}/><div className="absolute inset-0 bg-black/65"/><div className="relative mx-auto max-w-3xl px-5"><span className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[var(--color-primary)]"><PhoneCall size={22}/></span><p className="mb-3 text-xs font-extrabold tracking-[.25em] text-[var(--color-primary)]">YOUR NEXT REP STARTS HERE</p><h2 className="font-[Barlow_Condensed] text-4xl font-black uppercase sm:text-6xl">Ready to make a change?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">Tell us what you want to achieve. We’ll help you find the membership and training plan that fits.</p><Link to="/contact" className="btn-primary mt-7">Contact Our Team <ArrowRight size={17}/></Link></div></section>
}
