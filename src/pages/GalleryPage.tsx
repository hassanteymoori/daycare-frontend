import { galleryShots } from '../data/content'

export function GalleryPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Gallery</p>
        <h1>A peek into our day</h1>
      </article>

      <div className="gallery-grid">
        {galleryShots.map((shot) => (
          <article key={shot.title} className="gallery-card panel">
            <div className="photo-placeholder" aria-hidden="true" />
            <h3>{shot.title}</h3>
            <p>{shot.caption}</p>
          </article>
        ))}
      </div>
    </section>
  )
}