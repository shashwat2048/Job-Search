import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get("authToken")?.value;
    if(!token){
        return NextResponse.redirect(`${request.nextUrl.origin}/login`);
    }
    return NextResponse.next();
}
export const config = {
    matcher: ['/', '/jobs/:path*','/saved']
  }