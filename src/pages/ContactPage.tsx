import { Baby, Mail, MessageSquareText, Phone, Send, UserRound } from 'lucide-react'
import { contactPageContent } from '../data/content'

export function ContactPage() {
  return (
    <section className="page-section contact-layout">
      <article className="panel title-block">
        <p className="eyebrow">{contactPageContent.eyebrow}</p>
        <h1>{contactPageContent.title}</h1>
        <p>{contactPageContent.description}</p>
      </article>

      <form
        className="panel contact-card"
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="contact-bot-field">
            Do not fill this out if you are human:
            <input id="contact-bot-field" name="bot-field" />
          </label>
        </p>

        <label htmlFor="parent-name" className="meta-line"><UserRound size={14} aria-hidden="true" />{contactPageContent.parentNameLabel}</label>
        <input id="parent-name" name="parentName" placeholder={contactPageContent.parentNamePlaceholder} required />

        <label htmlFor="child-age" className="meta-line"><Baby size={14} aria-hidden="true" />{contactPageContent.childAgeLabel}</label>
        <input id="child-age" name="childAge" placeholder={contactPageContent.childAgePlaceholder} required />

        <label htmlFor="phone-number" className="meta-line"><Phone size={14} aria-hidden="true" />{contactPageContent.phoneLabel}</label>
        <input id="phone-number" name="phoneNumber" type="tel" placeholder={contactPageContent.phonePlaceholder} required />

        <label htmlFor="inquiry-message" className="meta-line"><MessageSquareText size={14} aria-hidden="true" />{contactPageContent.inquiryLabel}</label>
        <textarea
          id="inquiry-message"
          name="inquiryMessage"
          placeholder={contactPageContent.inquiryPlaceholder}
          rows={5}
          required
        />

        <button type="submit" className="btn btn-solid">
          <Send size={16} aria-hidden="true" />
          {contactPageContent.submitLabel}
        </button>

        <p className="muted meta-line"><Mail size={14} aria-hidden="true" />{contactPageContent.contactLine}</p>
      </form>
    </section>
  )
}