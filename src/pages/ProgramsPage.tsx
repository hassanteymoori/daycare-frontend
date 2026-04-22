import { programs } from '../data/content'

export function ProgramsPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Programs</p>
        <h1>Our Childcare Programs</h1>
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

      <article className="panel value-list">
        <h2>Why Families Choose Yalda Child Care</h2>
        <ul>
          <li>Licensed family home daycare in Woodinville, WA</li>
          <li>Small group setting for individualized attention</li>
          <li>Consistent daily routines for security and growth</li>
          <li>Clear communication with families</li>
          <li>Safe and structured learning environment</li>
        </ul>
      </article>
    </section>
  )
}