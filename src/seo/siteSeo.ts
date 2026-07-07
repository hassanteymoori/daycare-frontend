export const seoConfig = {
  siteName: 'Little Roots Home Daycare',
  siteUrl: 'https://littlerootsdaycare.com',
  defaultTitle: 'Little Roots Home Daycare | Licensed Family Child Care in Puyallup, WA',
  defaultDescription:
    'Licensed family home daycare in Puyallup, WA for children ages 3 months to 5 years. Montessori-inspired, play-based learning, USDA/CACFP meals, and a safe, nurturing environment.',
  defaultKeywords: [
    'daycare in puyallup wa',
    'puyallup daycare',
    'family home daycare puyallup',
    'licensed childcare puyallup',
    'infant care puyallup',
    'toddler care puyallup',
    'preschool daycare puyallup',
    'montessori inspired daycare',
    'little roots home daycare',
  ],
  business: {
    name: 'Little Roots Home Daycare',
    legalName: 'Little Roots Home Daycare',
    image: '/favicon.svg',
    telephone: '+1-425-429-8058',
    email: 'barghiyalda@gmail.com',
    address: {
      streetAddress: '8627 185th St Ct E',
      addressLocality: 'Puyallup',
      addressRegion: 'WA',
      postalCode: '98375',
      addressCountry: 'US',
    },
    openingHours: 'Mo-Fr 07:00-17:30',
    areaServed: ['Puyallup', 'South Hill', 'Graham', 'Spanaway', 'Tacoma'],
    sameAs: [
      'https://www.instagram.com/littleroots_homedaycare',
      'https://www.google.com/maps/place/Little+Roots+Home+Daycare/@47.088058,-122.31332,2547m/data=!3m1!1e3!4m15!1m8!3m7!1s0x54911d572f2d6d87:0xc6600d43bb9f3d0!2s8627+185th+St+Ct+E,+Puyallup,+WA+98375!3b1!8m2!3d47.0880582!4d-122.3133199!16s%2Fg%2F11c4zwqcd3!3m5!1s0x54911d60c1730585:0xc0a67c98f4579af1!8m2!3d47.0880582!4d-122.3133199!16s%2Fg%2F11nqpkzl6f?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
    ],
  },
}

export function toAbsoluteUrl(path: string): string {
  if (!path || path === '/') {
    return seoConfig.siteUrl
  }

  return `${seoConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}
