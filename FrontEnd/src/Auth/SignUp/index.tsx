import React, { useEffect } from "react";
import {
  SignUp,
  SignedOut,
  SignedIn,
  useUser,
  useClerk,
} from "@clerk/clerk-react";

const Signup: React.FC = () => {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  useEffect(() => {
    if (user && !user.publicMetadata.role) {
      // Set default role as "user" after signup
      clerkUser?.update({
        publicMetadata: { role: "user" },
      });
    }
  }, [user, clerkUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <SignedOut>
        <SignUp
          routing="path"
          path="/signup"
          appearance={{
            elements: {
              rootBox:
                "bg-gray-800 text-white rounded-xl shadow-lg p-8 w-full max-w-md",
              card: "bg-transparent shadow-none",
              headerTitle: "text-2xl font-bold mb-2 text-center text-white",
              headerSubtitle: "text-gray-300 mb-6 text-center",
              formFieldLabel: "text-gray-200 font-medium",
              formFieldInput:
                "mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white focus:border-cyan-500 focus:ring-cyan-500",
              footerActionLink:
                "text-cyan-400 hover:text-cyan-300 font-medium",
              formButtonPrimary:
                "bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200",
            },
          }}
        />
      </SignedOut>

      <SignedIn>
        <h2 className="text-center text-white text-lg">
          ✅ You’re signed in as {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </SignedIn>
    </div>
  );
};

export default Signup;
