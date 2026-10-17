import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', interest: 'Membership', message: '' })
  const update = (key: keyof typeof form, value: string) => setForm(current => ({ ...current, [key]: value }))
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }
  return <form onSubmit={submit} className="rounded-2xl bg-white p-6 shadow-[0_20px_70px_#0000000b] sm:p-9">
    <h2 className="font-[Barlow_Condensed] text-3xl font-black uppercase">Let’s talk goals</h2><p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Fill in the details and our team will be ready to help.</p>
    {submitted ? <div role="status" className="mt-8 rounded-xl bg-green-50 p-6 text-green-800"><CheckCircle2 size={28}/><h3 className="mt-3 font-bold">Thanks, {form.name}!</h3><p className="mt-1 text-sm">Your message has been captured in this demo. Connect a form service to receive real submissions.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-4 text-sm font-bold underline">Send another message</button></div> : <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <label className="grid gap-2 text-xs font-bold uppercase tracking-wider">Your name<input required value={form.name} onChange={e => update('name', e.target.value)} placeholder="Full name" className="rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-[var(--color-primary)]"/></label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-wider">Email address<input required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" className="rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-[var(--color-primary)]"/></label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-wider sm:col-span-2">I'm interested in<select value={form.interest} onChange={e => update('interest', e.target.value)} className="rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-[var(--color-primary)]"><option>Membership</option><option>Personal Training</option><option>Group Classes</option><option>Corporate Fitness</option></select></label>
      <label className="grid gap-2 text-xs font-bold uppercase tracking-wider sm:col-span-2">Your message<textarea required rows={4} value={form.message} onChange={e => update('message', e.target.value)} placeholder="Tell us a little about your goals..." className="resize-y rounded-lg border border-black/10 bg-[#fafafa] px-4 py-3 text-sm font-normal normal-case tracking-normal outline-none transition focus:border-[var(--color-primary)]"/></label>
      <button type="submit" className="btn-primary w-fit sm:col-span-2">Send Message <Send size={16}/></button>
    </div>}
  </form>
}
