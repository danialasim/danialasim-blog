import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the contact page
  if (request.nextUrl.pathname === '/contact') {
    // Redirect to the not-found page
    return NextResponse.redirect(new URL('/not-found', request.url))
  }
  
  return NextResponse.next()
}

// Configure the paths that should be handled by this middleware
export const config = {
  matcher: '/contact'
}
