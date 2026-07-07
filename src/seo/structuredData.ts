import { homeContent } from '../data/content'
import { seoConfig, toAbsoluteUrl } from './siteSeo'

export function buildDaycareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    '@id': `${seoConfig.siteUrl}#childcare`,
    name: seoConfig.business.name,
    legalName: seoConfig.business.legalName,
    url: seoConfig.siteUrl,
    image: toAbsoluteUrl(seoConfig.business.image),
    telephone: seoConfig.business.telephone,
    email: seoConfig.business.email,
    description: seoConfig.defaultDescription,
    openingHours: seoConfig.business.openingHours,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.business.address.streetAddress,
      addressLocality: seoConfig.business.address.addressLocality,
      addressRegion: seoConfig.business.address.addressRegion,
      postalCode: seoConfig.business.address.postalCode,
      addressCountry: seoConfig.business.address.addressCountry,
    },
    areaServed: seoConfig.business.areaServed.map((name) => ({
      '@type': 'City',
      name,
    })),
    sameAs: seoConfig.business.sameAs,
    priceRange: '$$$',
  }
}

export function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeContent.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
