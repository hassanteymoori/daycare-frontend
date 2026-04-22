import { HandHeart, MessageCircleHeart, Puzzle, School, ShieldCheck, Users } from 'lucide-react'

export function AboutPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">About</p>
        <h1>Yalda Child Care licensed daycare in Woodinville, WA</h1>
        <p>
          Yalda Child Care is a licensed family home daycare serving infants,
          toddlers, and preschool-age children in Woodinville, WA. We provide a
          nurturing, structured environment where children learn, grow, and thrive.
        </p>
      </article>

      <article className="panel value-list">
        <h2 className="heading-with-icon">
          <HandHeart size={18} aria-hidden="true" />
          Our Mission & Values
        </h2>
        <p>
          Our mission is to provide a safe, trusting, and joyful place where
          families and children feel supported.
        </p>
        <ul>
          <li className="icon-list-item"><ShieldCheck size={16} aria-hidden="true" />Respect & Care: every child is treated with kindness and dignity.</li>
          <li className="icon-list-item"><Puzzle size={16} aria-hidden="true" />Learning Through Play: activities encourage curiosity and growth.</li>
          <li className="icon-list-item"><MessageCircleHeart size={16} aria-hidden="true" />Clear Communication: families stay informed and involved.</li>
        </ul>
      </article>

      <article className="panel value-list">
        <h2 className="heading-with-icon">
          <Users size={18} aria-hidden="true" />
          Why Families Choose Us
        </h2>
        <ul>
          <li className="icon-list-item"><ShieldCheck size={16} aria-hidden="true" />Licensed and experienced caregivers</li>
          <li className="icon-list-item"><MessageCircleHeart size={16} aria-hidden="true" />Consistent routines with open parent communication</li>
          <li className="icon-list-item"><Users size={16} aria-hidden="true" />Small-group setting with individualized attention</li>
        </ul>
      </article>

      <article className="panel">
        <h2 className="heading-with-icon">
          <MessageCircleHeart size={18} aria-hidden="true" />
          Community & Family Engagement
        </h2>
        <p>
          We encourage family involvement through regular updates, partnerships,
          and community connections that help children feel supported at daycare
          and at home.
        </p>
      </article>

      <article className="panel">
        <h2 className="heading-with-icon">
          <School size={18} aria-hidden="true" />
          Serving Woodinville, WA
        </h2>
        <p>
          Yalda Child Care is proud to serve families in Woodinville and
          surrounding communities.
        </p>
        <p>10+ years of experience supporting children&apos;s development.</p>
      </article>
    </section>
  )
}