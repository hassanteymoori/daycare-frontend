import { Link } from 'react-router-dom'
import { programs } from '../data/content'

export function HomePage() {
  return (
    <section className="page-section">
      <article className="hero-copy panel">
        <p className="eyebrow">Daycare in Woodinville, WA</p>
        <h1>Looking for a trusted daycare in Woodinville, WA?</h1>
        <p>
          Yalda Childcare is a licensed family home daycare serving Woodinville
          families since 2018. We provide a safe, nurturing, and structured
          environment where children build confidence, independence, and early
          learning skills.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-outline">
            Schedule a Tour
          </Link>
          <a href="tel:+14252986424" className="btn btn-solid">
            Call Now
          </a>
        </div>
        <p className="home-rating">Rated by local families in Woodinville</p>
      </article>

      <article className="panel checklist-panel">
        <p>
          Licensed Family Home Daycare • Small Group Setting • Experienced & Caring
          Environment
        </p>
        <Link to="/reviews" className="text-link">
          Read Our Google Reviews
        </Link>
      </article>

      <article className="panel title-block">
        <p className="eyebrow">Programs</p>
        <h2>Our Childcare Programs</h2>
        <p>
          We offer age-appropriate programs designed to support early development
          through guided play, structured routines, and nurturing care.
        </p>
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
        <h2>Frequently Asked Questions</h2>
        <h3>How can I schedule a tour?</h3>
        <p>
          Click the Schedule a Tour button and submit the request form. We will
          contact you to confirm a time that works for your family.
        </p>
        <h3>Do you currently have availability?</h3>
        <p>
          Please submit a tour request or call directly for the most up-to-date
          enrollment information.
        </p>
        <h3>Where are you located?</h3>
        <p>We serve families in Woodinville, WA and nearby communities.</p>
      </article>

      <article className="panel cta-panel">
        <h2>Ready to visit Yalda Child Care?</h2>
        <p>
          Schedule a tour today and see why Woodinville families trust Yalda
          Childcare.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-outline">
            Schedule a Tour
          </Link>
          <a href="tel:+14252986424" className="btn btn-solid">
            Call Now
          </a>
        </div>
      </article>
    </section>
  )
}