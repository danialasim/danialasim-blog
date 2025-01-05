import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-16rem)]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">404 - Not Found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  )
}

