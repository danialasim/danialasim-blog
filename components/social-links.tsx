import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from "./ui/button"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" asChild>
        <Link href="https://github.com/danialasim" target="_blank" rel="noopener noreferrer">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" asChild>
        <Link href="https://www.linkedin.com/in/danialasim/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" asChild>
        <Link href="mailto:danialasimbashir@gmail.com">
          <Mail className="h-4 w-4" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full w-9 h-9" asChild>
        <Link href="tel:+923249759646">
          <Phone className="h-4 w-4" />
          <span className="sr-only">Phone</span>
        </Link>
      </Button>
    </div>
  )
}

