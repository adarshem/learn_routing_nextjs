import { NextRequest, NextResponse } from 'next/server';

//https://nextjs.org/docs/pages/building-your-application/routing/middleware

export function middleware(request: NextRequest) {
  console.log('==== middleware', request);
  return NextResponse.next();
}

// https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
export const config = {
  matcher: '/news',
};
