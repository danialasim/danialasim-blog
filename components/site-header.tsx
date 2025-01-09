import Link from "next/link"
import { Download, Menu } from 'lucide-react'
import { ModeToggle } from "./mode-toggle"
import { MobileNav } from "./mobile-nav"
import { Button } from "./ui/button"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center px-4 md:px-8">
        <div className="flex items-center space-x-1 md:space-x-2">
          <div className="p-2 rounded-xl">
            <Image
              src="/images/logo.png"
              alt="Website Logo"
              width={48}
              height={48}
              className="h-12 w-12 md:h-14 md:w-14 brightness-0 dark:brightness-200"
            />
          </div>
          <Link href="/" className="font-bold text-lg md:text-xl">Danial Asim</Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 mx-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-2 md:space-x-4">
          <Button variant="default" size="sm" className="hidden md:inline-flex gap-2" asChild>
            <Link href="/resume.pdf" target="_blank">
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </Button>
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
