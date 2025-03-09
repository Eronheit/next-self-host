import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const protectedCookie = request.cookies.get('protected');

  if (protectedCookie?.value !== '1' && url.pathname.includes('protected')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  /* if(!!request.headers.get('host') && !url.host.includes(request.headers.get('host') ?? '')) {
    return NextResponse.redirect(new URL(url.pathname, request.headers.get('host') ?? ''));
  } */

}

export const config = {
  matcher: ['/((?!_next/|_static/|_vercel|[w-]+.w+).*)']
};
