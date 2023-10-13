import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://etc-club.vercel.app',
            lastModified: new Date(),
        },
    ]
}