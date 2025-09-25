// app/page.tsx
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold"> Welcome to HireMind AI</h1>
      <p className="mt-4">Choose your path</p>

      <div className="flex gap-4 mt-6">
        <SignedOut>
          <SignInButton mode="redirect">
            <button className="px-4 py-2 rounded bg-white text-black" >
              Login
            </button>
          </SignInButton>

          <SignUpButton mode="redirect">
            <button className="px-4 py-2 rounded  bg-white text-black">
               Get Started
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </main>
  );
}
