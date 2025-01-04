"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/about",
      label: "About",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col space-y-4 mt-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-md hover:bg-primary/10 ${
                pathname === route.href ? "text-primary" : "text-muted-foreground"
              }`}
              onClick={() => setOpen(false)}
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 px-2 py-1"
            onClick={() => setOpen(false)}
          >
            Download Resume
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

