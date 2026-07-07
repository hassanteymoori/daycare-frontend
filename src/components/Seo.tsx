import { useEffect } from 'react'
import { seoConfig, toAbsoluteUrl } from '../seo/siteSeo'

type SeoProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  keywords?: string[]
  noIndex?: boolean
}

function setOrCreateMetaTag(name: string, content: string, useProperty = false) {
  const selector = useProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let tag = document.head.querySelector<HTMLMetaElement>(selector)

  if (!tag) {
    tag = document.createElement('meta')
    if (useProperty) {
      tag.setAttribute('property', name)
    } else {
      tag.setAttribute('name', name)
    }
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function setOrCreateCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', href)
}

export function Seo({ title, description, path = '/', image = '/favicon.svg', keywords, noIndex = false }: SeoProps) {
  useEffect(() => {
    const finalTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle
    const finalDescription = description ?? seoConfig.defaultDescription
    const canonical = toAbsoluteUrl(path)
    const imageUrl = toAbsoluteUrl(image)
    const finalKeywords = (keywords ?? seoConfig.defaultKeywords).join(', ')

    document.title = finalTitle

    setOrCreateMetaTag('description', finalDescription)
    setOrCreateMetaTag('keywords', finalKeywords)
    setOrCreateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')

    setOrCreateMetaTag('og:type', 'website', true)
    setOrCreateMetaTag('og:site_name', seoConfig.siteName, true)
    setOrCreateMetaTag('og:title', finalTitle, true)
    setOrCreateMetaTag('og:description', finalDescription, true)
    setOrCreateMetaTag('og:url', canonical, true)
    setOrCreateMetaTag('og:image', imageUrl, true)

    setOrCreateMetaTag('twitter:card', 'summary_large_image')
    setOrCreateMetaTag('twitter:title', finalTitle)
    setOrCreateMetaTag('twitter:description', finalDescription)
    setOrCreateMetaTag('twitter:image', imageUrl)

    setOrCreateCanonical(canonical)
  }, [description, image, keywords, noIndex, path, title])

  return null
}

type JsonLdProps = {
  id: string
  data: Record<string, unknown>
}

export function JsonLd({ id, data }: JsonLdProps) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`
    let script = document.getElementById(scriptId) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    script.textContent = JSON.stringify(data)

    return () => {
      script?.remove()
    }
  }, [data, id])

  return null
}
