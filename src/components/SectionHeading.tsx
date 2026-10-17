type Props = { eyebrow: string; title: string; text?: string; light?: boolean; centered?: boolean }

export default function SectionHeading({ eyebrow, title, text, light = false, centered = false }: Props) {
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-2xl ${light ? 'text-white' : 'text-black'}`}>
      <span className="mb-4 inline-flex items-center gap-3 text-xs font-extrabold tracking-[.22em] text-[var(--color-primary)]">
        <span className="h-[2px] w-8 bg-[var(--color-primary)]" />{eyebrow}
      </span>
      <h2 className="font-[Barlow_Condensed] text-4xl font-extrabold uppercase leading-[.98] tracking-tight sm:text-5xl md:text-6xl">{title}</h2>
      {text && <p className={`mt-5 max-w-xl text-sm leading-7 sm:text-base ${light ? 'text-white/65' : 'text-[var(--color-muted)]'} ${centered ? 'mx-auto' : ''}`}>{text}</p>}
    </div>
  )
}
