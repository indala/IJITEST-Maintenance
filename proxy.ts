import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow root path
  if (pathname === '/') {
    return NextResponse.next()
  }

  // Allow static assets and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/public') ||
    pathname.match(/\.(css|js|png|jpg|jpeg|svg|gif|webp|ico|json)$/)
  ) {
    return NextResponse.next()
  }

  // Redirect all other paths to home page
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}