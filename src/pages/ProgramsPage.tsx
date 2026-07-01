import { Baby, BookOpenText, GraduationCap, Sparkles, Users, Utensils } from 'lucide-react'
import { programs, programsPageContent } from '../data/content'

export function ProgramsPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">{programsPageContent.eyebrow}</p>
        <h1 className="heading-with-icon">
          <BookOpenText size={20} aria-hidden="true" />
          {programsPageContent.title}
        </h1>
        <p>{programsPageContent.description}</p>
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

      <article className="panel value-list">
        <h2 className="heading-with-icon">
          <Sparkles size={18} aria-hidden="true" />
          {programsPageContent.whyTitle}
        </h2>
        <ul>
          <li className="icon-list-item"><Baby size={16} aria-hidden="true" />{programsPageContent.whyItems[0]}</li>
          <li className="icon-list-item"><Users size={16} aria-hidden="true" />{programsPageContent.whyItems[1]}</li>
          <li className="icon-list-item"><GraduationCap size={16} aria-hidden="true" />{programsPageContent.whyItems[2]}</li>
          <li className="icon-list-item"><BookOpenText size={16} aria-hidden="true" />{programsPageContent.whyItems[3]}</li>
          <li className="icon-list-item"><Sparkles size={16} aria-hidden="true" />{programsPageContent.whyItems[4]}</li>
          <li className="icon-list-item"><Utensils size={16} aria-hidden="true" />{programsPageContent.whyItems[5]}</li>
        </ul>
      </article>
    </section>
  )
}
