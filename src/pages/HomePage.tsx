import { Link } from 'react-router-dom'
import {
  CalendarCheck2,
  CircleHelp,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { homeContent, programs, siteContent } from '../data/content'

export function HomePage() {
  return (
    <section className="page-section">
      <article className="hero-copy panel">
        <p className="eyebrow">{homeContent.eyebrow}</p>
        <h1>{homeContent.heroTitle}</h1>
        <p>{homeContent.heroDescription}</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-outline">
            <CalendarCheck2 size={16} aria-hidden="true" />
            {homeContent.scheduleTourLabel}
          </Link>
          <a href={siteContent.sidebar.phoneHref} className="btn btn-solid">
            <PhoneCall size={16} aria-hidden="true" />
            {homeContent.callNowLabel}
          </a>
        </div>
        {/* <p className="home-rating"> */}
          {/* <Star size={16} aria-hidden="true" /> */}
          /* {homeContent.ratingLine} */
        {/* </p> */}
      </article>

      <article className="panel checklist-panel">
        <p className="meta-line">
          <ShieldCheck size={16} aria-hidden="true" />
          {homeContent.trustLine}
        </p>
        {/* <Link to="/reviews" className="text-link"> */}
          {/* <Star size={16} aria-hidden="true" /> */}
          /* {homeContent.readReviewsLabel} */
        {/* </Link> */}
      </article>

      <article className="panel title-block">
        <p className="eyebrow">{homeContent.programsEyebrow}</p>
        <h2>{homeContent.programsTitle}</h2>
        <p>{homeContent.programsDescription}</p>
      </article>

      <div className="program-grid">
        {programs.map((program) => (
          <article key={program.title} className="panel program-card">
            <h3>
              {program.title} <small>{program.age}</small>
            </h3>
            <p>{program.details}</p>
            <span className="pill">{program.ratio}</span>
          </article>
        ))}
      </div>

      <article className="panel faq-panel">
        <h2 className="heading-with-icon">
          <CircleHelp size={18} aria-hidden="true" />
          {homeContent.faqTitle}
        </h2>
        {homeContent.faqs.map((faq) => (
          <div key={faq.question}>
            <h3>{faq.question}</h3>
            {faq.withMapPin ? (
              <p className="meta-line">
                <MapPin size={16} aria-hidden="true" />
                {faq.answer}
              </p>
            ) : (
              <p>{faq.answer}</p>
            )}
          </div>
        ))}
      </article>

      <article className="panel cta-panel">
        <h2 className="heading-with-icon">
          <Sparkles size={18} aria-hidden="true" />
          {homeContent.ctaTitle}
        </h2>
        <p>{homeContent.ctaDescription}</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-outline">
            <CalendarCheck2 size={16} aria-hidden="true" />
            {homeContent.scheduleTourLabel}
          </Link>
          <a href={siteContent.sidebar.phoneHref} className="btn btn-solid">
            <PhoneCall size={16} aria-hidden="true" />
            {homeContent.callNowLabel}
          </a>
        </div>
      </article>
    </section>
  )
}
