import { Metadata } from 'next'

export const siteConfig = {
  name: 'AI/ML Engineer Portfolio',
  description: 'Personal portfolio and blog of an AI/ML Engineer',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
  },
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: '/icon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/icon.ico',
  },
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
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
}

