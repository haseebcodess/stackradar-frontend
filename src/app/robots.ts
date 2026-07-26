import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://stackradar-dev.vercel.app/sitemap.xml',
    host: 'https://stackradar-dev.vercel.app',
  }
}