import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "sonner"
import { defaultMetadata } from './metadata'
import Head from './head'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Head />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pt-16 md:pt-20 px-1 md:px-2 lg:px-3">
              {children}
            </main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

