import { reviews } from '../data/content'

export function ReviewsPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Reviews</p>
        <h1>Families who trust Yalda Child Care</h1>
      </article>

      <div className="review-grid">
        {reviews.map((item) => (
          <article key={item.parent} className="panel review-card">
            <p>&quot;{item.quote}&quot;</p>
            <span>{item.parent}</span>
          </article>
        ))}
      </div>

      <article className="panel review-actions">
        <a href="https://google.com" target="_blank" rel="noreferrer" className="text-link">
          See our reviews on Google
        </a>
        <a href="https://google.com" target="_blank" rel="noreferrer" className="text-link">
          Leave a review for Yalda Child Care
        </a>
      </article>
    </section>
  )
}