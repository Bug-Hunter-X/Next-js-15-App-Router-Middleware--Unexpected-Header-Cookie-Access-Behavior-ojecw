```javascript
// middlewareSolution.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('auth-token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Verify token (replace with actual verification)
  if (!verifyToken(token)) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/protected',
}

function verifyToken(token) {
  // Replace this with your actual token verification logic
  return token === 'valid-token';
}
```