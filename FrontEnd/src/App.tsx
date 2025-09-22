import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import Login from "./Auth/Login";
import Signup from "./Auth/SignUp";
import Home from "./Pages/Home";
import AdminPage from "./Pages/AdminPage";
import AdminRoute from "./Routes/AdminRoute";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY!;

const App: React.FC = () => (
  <ClerkProvider publishableKey={clerkPubKey}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Home />
              </SignedIn>
              <SignedOut>
                <Navigate to="/login" replace />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/admin"
          element={
            <SignedIn>
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            </SignedIn>
          }
        />
      </Routes>
    </Router>
  </ClerkProvider>
);

export default App;
