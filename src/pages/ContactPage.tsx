import { Baby, Mail, Phone, Send, UserRound } from 'lucide-react'

export function ContactPage() {
  return (
    <section className="page-section contact-layout">
      <article className="panel title-block">
        <p className="eyebrow">Contact us</p>
        <h1>Let us help with your childcare plan</h1>
        <p>
          Tell us your child&apos;s age and preferred start date. We respond within
          one business day.
        </p>
      </article>

      <form className="panel contact-card" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="parent-name" className="meta-line"><UserRound size={14} aria-hidden="true" />Parent Name</label>
        <input id="parent-name" placeholder="Your full name" />

        <label htmlFor="child-age" className="meta-line"><Baby size={14} aria-hidden="true" />Child Age</label>
        <input id="child-age" placeholder="Example: 2 years old" />

        <label htmlFor="phone-number" className="meta-line"><Phone size={14} aria-hidden="true" />Phone Number</label>
        <input id="phone-number" type="tel" placeholder="(555) 123-4567" />

        <button type="submit" className="btn btn-solid">
          <Send size={16} aria-hidden="true" />
          Send Inquiry
        </button>

        <p className="muted meta-line"><Mail size={14} aria-hidden="true" />Call (425) 298-6424 or email hello@yaldachildcare.com</p>
      </form>
    </section>
  )
}