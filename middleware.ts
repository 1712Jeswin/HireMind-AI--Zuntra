// frontend/middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Protect specific routes
const isProtectedRoute = createRouteMatcher([
  "/candidate(.*)",   // everything under /admin
  "/interviewer(.*)",    // everything under /user
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // If not signed in & trying to access a protected route → redirect
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  return;
});

// Only run middleware for certain routes
export const config = {
  matcher: [
    // protect /admin/* and /user/*
    "/((?!_next|.*\\..*).*)",
  ],
};
