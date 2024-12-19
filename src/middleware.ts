import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from './helpers/isAuthenticated';

export const middleware = async (request: NextRequest) => {
  const userExists = isAuthenticated(request);

  if (userExists) {
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: '/signin',
};