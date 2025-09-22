import React from "react";
import { SignIn, SignedOut, SignedIn } from "@clerk/clerk-react";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-900">
      <SignedOut>
        <SignIn
          routing="path"
          path="/login"
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
          ✅ You’re already signed in.
        </h2>
      </SignedIn>
    </div>
  );
};

export default Login;
