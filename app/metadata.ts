import { Metadata } from 'next'

export const siteConfig = {
  name: 'AI/ML Engineer Portfolio',
  description: 'Personal portfolio and blog of an AI/ML Engineer',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.danialasim.com/',
  ogImage: '/og-image.jpg',
  links: {
    github: 'https://github.com/danialasim',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'Danial Asim' }],
  creator: 'Danial Asim',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@danialasim',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.ico',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
}
