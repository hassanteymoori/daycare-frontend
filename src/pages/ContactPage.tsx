import { Baby, Mail, Phone, Send, UserRound } from 'lucide-react'
import { contactPageContent } from '../data/content'

export function ContactPage() {
  return (
    <section className="page-section contact-layout">
      <article className="panel title-block">
        <p className="eyebrow">{contactPageContent.eyebrow}</p>
        <h1>{contactPageContent.title}</h1>
        <p>{contactPageContent.description}</p>
      </article>

      <form className="panel contact-card" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="parent-name" className="meta-line"><UserRound size={14} aria-hidden="true" />{contactPageContent.parentNameLabel}</label>
        <input id="parent-name" placeholder={contactPageContent.parentNamePlaceholder} />

        <label htmlFor="child-age" className="meta-line"><Baby size={14} aria-hidden="true" />{contactPageContent.childAgeLabel}</label>
        <input id="child-age" placeholder={contactPageContent.childAgePlaceholder} />

        <label htmlFor="phone-number" className="meta-line"><Phone size={14} aria-hidden="true" />{contactPageContent.phoneLabel}</label>
        <input id="phone-number" type="tel" placeholder={contactPageContent.phonePlaceholder} />

        <button type="submit" className="btn btn-solid">
          <Send size={16} aria-hidden="true" />
          {contactPageContent.submitLabel}
        </button>

        <p className="muted meta-line"><Mail size={14} aria-hidden="true" />{contactPageContent.contactLine}</p>
      </form>
    </section>
  )
}