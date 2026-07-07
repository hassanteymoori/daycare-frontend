import { Link } from 'react-router-dom'
import {
  CalendarCheck2,
  CircleHelp,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { JsonLd, Seo } from '../components/Seo'
import { homeContent, programs, siteContent } from '../data/content'
import { buildDaycareSchema, buildFaqSchema } from '../seo/structuredData'

export function HomePage() {
  const daycareSchema = buildDaycareSchema()
  const faqSchema = buildFaqSchema()

  return (
    <section className="page-section">
      <Seo
        title="Daycare in Puyallup, WA"
        description="Trusted licensed family home daycare in Puyallup, WA for infants, toddlers, and preschoolers. Montessori-inspired, play-based learning, USDA/CACFP meals, and daily family communication."
        path="/"
      />
      <JsonLd id="daycare" data={daycareSchema} />
      <JsonLd id="home-faq" data={faqSchema} />

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
      
      </article>

      <article className="panel checklist-panel">
        <p className="meta-line">
          <ShieldCheck size={16} aria-hidden="true" />
          {homeContent.trustLine}
        </p>
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
