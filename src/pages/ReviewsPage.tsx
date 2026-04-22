import { reviews } from '../data/content'

export function ReviewsPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Reviews</p>
        <h1>Families who trust Yalda</h1>
      </article>

      <div className="review-grid">
        {reviews.map((item) => (
          <article key={item.parent} className="panel review-card">
            <p>&quot;{item.quote}&quot;</p>
            <span>{item.parent}</span>
          </article>
        ))}
      </div>
    </section>
  )
}