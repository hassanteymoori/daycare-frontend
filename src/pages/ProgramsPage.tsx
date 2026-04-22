import { programs } from '../data/content'

export function ProgramsPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Programs</p>
        <h1>Age-based learning paths</h1>
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
    </section>
  )
}