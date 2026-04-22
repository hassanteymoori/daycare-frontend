import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="page-section hero-grid">
      <article className="hero-copy panel">
        <p className="eyebrow">Trusted Family Daycare</p>
        <h1>Where curiosity grows, and children feel at home.</h1>
        <p>
          Yalda Childcare offers nurturing, play-based programs for infants,
          toddlers, and preschoolers in a warm neighborhood setting.
        </p>
        <div className="hero-actions">
          <Link to="/programs" className="btn btn-solid">
            Explore Programs
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Book a Tour
          </Link>
        </div>
      </article>

      <article className="panel hero-stats">
        <h2>At a glance</h2>
        <div className="kpi-grid">
          <div>
            <strong>12+</strong>
            <span>Years of experience</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>Parent satisfaction</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Daily family updates</span>
          </div>
        </div>
      </article>
    </section>
  )
}