import { HandHeart, MessageCircleHeart, Puzzle, School, ShieldCheck, Users } from 'lucide-react'
import { Seo } from '../components/Seo'
import { aboutContent } from '../data/content'

export function AboutPage() {
  return (
    <section className="page-section">
      <Seo
        title="About Our Daycare in Puyallup, WA"
        description="Meet Little Roots Home Daycare and owner Yalda Barghi. Learn about our mission, safety standards, Montessori-inspired play-based learning, and family partnerships in Puyallup, WA."
        path="/about"
      />

      <article className="panel title-block">
        <p className="eyebrow">{aboutContent.eyebrow}</p>
        <h1>{aboutContent.title}</h1>
        <p>{aboutContent.intro}</p>
      </article>

      <article className="panel value-list">
        <h2 className="heading-with-icon">
          <HandHeart size={18} aria-hidden="true" />
          {aboutContent.missionTitle}
        </h2>
        <p>{aboutContent.missionBody}</p>
        <ul>
          <li className="icon-list-item"><ShieldCheck size={16} aria-hidden="true" />{aboutContent.missionValues[0]}</li>
          <li className="icon-list-item"><Puzzle size={16} aria-hidden="true" />{aboutContent.missionValues[1]}</li>
          <li className="icon-list-item"><MessageCircleHeart size={16} aria-hidden="true" />{aboutContent.missionValues[2]}</li>
        </ul>
      </article>

      <article className="panel value-list">
        <h2 className="heading-with-icon">
          <Users size={18} aria-hidden="true" />
          {aboutContent.whyTitle}
        </h2>
        <ul>
          <li className="icon-list-item"><ShieldCheck size={16} aria-hidden="true" />{aboutContent.whyItems[0]}</li>
          <li className="icon-list-item"><MessageCircleHeart size={16} aria-hidden="true" />{aboutContent.whyItems[1]}</li>
          <li className="icon-list-item"><Users size={16} aria-hidden="true" />{aboutContent.whyItems[2]}</li>
        </ul>
      </article>

      <article className="panel">
        <h2 className="heading-with-icon">
          <MessageCircleHeart size={18} aria-hidden="true" />
          {aboutContent.communityTitle}
        </h2>
        <p>{aboutContent.communityBody}</p>
      </article>

      <article className="panel">
        <h2 className="heading-with-icon">
          <School size={18} aria-hidden="true" />
          {aboutContent.servingTitle}
        </h2>
        <p>{aboutContent.servingBody}</p>
        <p>{aboutContent.servingStat}</p>
      </article>
    </section>
  )
}