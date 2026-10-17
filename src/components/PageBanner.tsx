type Props = { eyebrow: string; title: string; crumb: string }

export default function PageBanner({ eyebrow, title, crumb }: Props) {
  return <section className="relative flex min-h-[340px] items-end overflow-hidden bg-[var(--color-dark-bg)] pb-14 pt-32 text-white md:min-h-[390px] md:pb-16">
    <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85')" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
    <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8"><p className="mb-4 text-xs font-extrabold tracking-[.25em] text-[var(--color-primary)]">{eyebrow}</p><h1 className="font-[Barlow_Condensed] text-6xl font-black uppercase leading-none md:text-8xl">{title}</h1><p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/60">Home <span className="px-2 text-[var(--color-primary)]">/</span> {crumb}</p></div>
  </section>
}
