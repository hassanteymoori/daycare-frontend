import { useEffect, useState } from 'react'
import { Camera, X } from 'lucide-react'
import { galleryPageContent, galleryShots } from '../data/content'

const galleryImages = Object.entries(
  import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string)

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    if (activeIndex === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex])

  const activeShot =
    activeIndex === null
      ? null
      : {
          src: galleryImages[activeIndex],
          details: galleryShots[activeIndex % galleryShots.length],
        }

  return (
    <section className="page-section">
      <article className="panel title-block">
        <p className="eyebrow">{galleryPageContent.eyebrow}</p>
        <h1 className="heading-with-icon">
          <Camera size={20} aria-hidden="true" />
          {galleryPageContent.title}
        </h1>
      </article>

      <div className="gallery-mosaic">
        {galleryImages.map((src, index) => {
          const shot = galleryShots[index % galleryShots.length]
          return (
            <article key={src} className="gallery-tile">
              <button
                type="button"
                className="gallery-image-button"
                onClick={() => setActiveIndex(index)}
                aria-label={shot?.title ? `Open larger image: ${shot.title}` : 'Open larger gallery image'}
              >
                <div className="gallery-image-wrap">
                  <img
                    src={src}
                    alt={shot?.title ? `${shot.title} at Little Roots Home Daycare` : 'Little Roots Home Daycare gallery photo'}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    {shot?.title && <h3>{shot.title}</h3>}
                    {shot?.caption && <p>{shot.caption}</p>}
                    <p className="gallery-overlay-tagline">{galleryPageContent.cardTagline}</p>
                  </div>
                </div>
              </button>
            </article>
          )
        })}
      </div>

      {activeShot && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeShot.details?.title ?? 'Expanded gallery image'}
          onClick={() => setActiveIndex(null)}
        >
          <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image preview"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <img
              src={activeShot.src}
              alt={
                activeShot.details?.title
                  ? `${activeShot.details.title} at Little Roots Home Daycare`
                  : 'Little Roots Home Daycare gallery photo'
              }
              className="gallery-lightbox-image"
            />
            {(activeShot.details?.title || activeShot.details?.caption) && (
              <div className="gallery-lightbox-text">
                {activeShot.details?.title && <h3>{activeShot.details.title}</h3>}
                {activeShot.details?.caption && <p>{activeShot.details.caption}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}