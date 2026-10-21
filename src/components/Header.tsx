import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Dumbbell, ArrowUpRight } from 'lucide-react'
import { navLinks } from '../data/siteData'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--color-primary)]"><Dumbbell size={22} strokeWidth={2.8} /></span>
          <span className="leading-none"><span className="block font-[Barlow_Condensed] text-2xl font-black uppercase tracking-wide">Power<span className="text-[var(--color-primary)]">Fit</span></span><span className="mt-1 block text-[9px] font-semibold uppercase tracking-[.22em] text-white/55">Ultimate Gym Center</span></span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map(link => <NavLink key={link.label} to={link.href} className={({ isActive }) => `text-xs font-bold uppercase tracking-wider transition hover:text-[var(--color-primary)] ${isActive ? 'text-[var(--color-primary)]' : 'text-white/85'}`}>{link.label}</NavLink>)}
        </nav>
        <Link to="/membership" className="btn-primary !hidden !rounded-md !px-5 !py-3 lg:inline-flex">Join Class <ArrowUpRight size={16} /></Link>
        <button aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="grid gap-1 border-t border-white/10 bg-black px-5 py-4 lg:hidden">{navLinks.map(link => <NavLink key={link.label} to={link.href} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-md px-3 py-3 text-sm font-bold uppercase ${isActive ? 'bg-white/10 text-[var(--color-primary)]' : 'text-white'}`}>{link.label}</NavLink>)}<Link to="/membership" onClick={() => setOpen(false)} className="btn-primary mt-2">Join Class <ArrowUpRight size={16} /></Link></nav>}
    </header>
  )
}
