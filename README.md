# Little Roots Home Daycare Frontend

Vite + React + TypeScript website for Little Roots Home Daycare.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## SEO Setup

The site includes technical SEO essentials:

- Route-level metadata and canonical URLs via [src/components/Seo.tsx](src/components/Seo.tsx)
- Local business structured data and FAQ schema via [src/seo/structuredData.ts](src/seo/structuredData.ts)
- Central SEO configuration in [src/seo/siteSeo.ts](src/seo/siteSeo.ts)
- Crawl files: [public/robots.txt](public/robots.txt) and [public/sitemap.xml](public/sitemap.xml)

If business details change (phone, address, hours, social URLs), update [src/seo/siteSeo.ts](src/seo/siteSeo.ts).

## Post-Deploy SEO Checklist

1. Verify indexing in Google Search Console and submit sitemap: `https://littlerootsdaycare.com/sitemap.xml`.
2. Keep Google Business Profile details exactly consistent with website NAP (name, address, phone).
3. Ask enrolled families for new Google reviews regularly and respond to each review.
4. Add at least one new local content update monthly (program updates, enrollment availability, daycare tips).

