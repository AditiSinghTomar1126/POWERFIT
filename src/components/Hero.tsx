import { ArrowRight, ArrowUpRight, Dumbbell, Users, Trophy, Clock3 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { stats } from '../data/siteData'

export default function Hero() {
  const icons = [Clock3, Users, Trophy, Dumbbell]
  return <section className="relative min-h-[720px] overflow-hidden bg-black text-white md:min-h-[800px]">
    <div className="absolute inset-0 bg-cover bg-[center_35%] opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2200&q=90')" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
    <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-5 pb-36 pt-32 md:min-h-[800px] lg:px-8" >
      <div className="max-w-xl"><p className="mb-5 flex items-center gap-3 text-xs font-extrabold tracking-[.28em] text-white/80"><span className="h-[2px] w-10 bg-[var(--color-primary)]" /> STRONGER EVERY DAY</p>
        <h1 className="font-[Barlow_Condensed] text-6xl font-black uppercase leading-[.88] tracking-tight sm:text-7xl md:text-8xl lg:text-[100px]">Build your <span className="text-[var(--color-primary)]">body.</span><br />Own your <span className="text-white/70">power.</span></h1>
        <p className="mt-7 max-w-md text-sm leading-7 text-white/70 sm:text-base">Transform your fitness with expert trainers, powerful programs, and modern gym equipment built for your goals.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link to="/membership" className="btn-primary">Get Started <ArrowRight size={17} /></Link><a href="#about" className="btn-outline">Explore Gym <ArrowUpRight size={17} /></a></div>
        <div className="mt-9 flex items-center gap-3"><div className="flex -space-x-3">{['photo-1534528741775-53994a69daeb','photo-1500648767791-00dcc994a43e','photo-1506794778202-cad84cf45f1d','photo-1531123897727-8f129e1688ce'].slice(0,4).map((id,i)=><img key={i} src={`https://images.unsplash.com/${id.replace('一期','')}?auto=format&fit=crop&w=80&h=80&q=80`} alt="" className="h-9 w-9 rounded-full border-2 border-black object-cover" />)}</div><div><p className="font-[Barlow_Condensed] text-2xl font-bold">2K+</p><p className="text-xs text-white/55">Happy members and counting</p></div></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-black/60 backdrop-blur-sm"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 px-5 py-5 sm:grid-cols-4 lg:px-8">{stats.map((stat,i)=>{const Icon=icons[i];return <div key={stat.label} className="flex items-center gap-3 border-white/15 px-2 sm:border-r sm:px-5 last:border-0"><Icon className="shrink-0 text-[var(--color-primary)]" size={25}/><div><p className="font-[Barlow_Condensed] text-xl font-bold uppercase sm:text-2xl">{stat.value}</p><p className="text-[9px] font-bold uppercase tracking-wider text-white/55 sm:text-[10px]">{stat.label}</p></div></div>})}</div></div>
   </div>
    </section>
}
