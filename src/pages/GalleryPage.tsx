import { Camera, Image, Sparkles } from 'lucide-react'
import { galleryShots } from '../data/content'

export function GalleryPage() {
  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">Gallery</p>
        <h1 className="heading-with-icon">
          <Camera size={20} aria-hidden="true" />
          A peek into our day
        </h1>
      </article>

      <div className="gallery-grid">
        {galleryShots.map((shot) => (
          <article key={shot.title} className="gallery-card panel">
            <div className="photo-placeholder" aria-hidden="true" />
            <h3 className="heading-with-icon">
              <Image size={16} aria-hidden="true" />
              {shot.title}
            </h3>
            <p>{shot.caption}</p>
            <p className="meta-line">
              <Sparkles size={14} aria-hidden="true" />
              Daily moments of learning and play
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}