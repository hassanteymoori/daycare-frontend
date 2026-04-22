import { Baby, BookOpenText, GraduationCap, Sparkles, Users } from 'lucide-react'
import { programs } from '../data/content'

export function ProgramsPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Programs</p>
        <h1 className="heading-with-icon">
          <BookOpenText size={20} aria-hidden="true" />
          Our Childcare Programs
        </h1>
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
        <h2 className="heading-with-icon">
          <Sparkles size={18} aria-hidden="true" />
          Why Families Choose Yalda Child Care
        </h2>
        <ul>
          <li className="icon-list-item"><Baby size={16} aria-hidden="true" />Licensed family home daycare in Woodinville, WA</li>
          <li className="icon-list-item"><Users size={16} aria-hidden="true" />Small group setting for individualized attention</li>
          <li className="icon-list-item"><GraduationCap size={16} aria-hidden="true" />Consistent daily routines for security and growth</li>
          <li className="icon-list-item"><BookOpenText size={16} aria-hidden="true" />Clear communication with families</li>
          <li className="icon-list-item"><Sparkles size={16} aria-hidden="true" />Safe and structured learning environment</li>
        </ul>
      </article>
    </section>
  )
}