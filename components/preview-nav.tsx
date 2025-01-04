"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function PreviewNav() {
  const pathname = usePathname()

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-sm rounded-full border shadow-lg p-2">
      <nav className="flex items-center gap-2">
        {routes.map((route) => (
          <Button
            key={route.path}
            variant={pathname === route.path ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href={route.path}>{route.label}</Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}

