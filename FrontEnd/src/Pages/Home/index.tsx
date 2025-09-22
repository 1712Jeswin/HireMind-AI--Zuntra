import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";

const Home: React.FC = () => {
  const { user } = useUser();
  const role = user?.publicMetadata?.role ?? "user";

  return (
    <div>
      <h1>Welcome {user?.firstName ?? "Guest"}</h1>
      <p>Your role: {role}</p>
      <UserButton afterSignOutUrl="/" />
      <br />
      {role === "admin" && <a href="/admin">Go to Admin Dashboard</a>}
    </div>
  );
};

export default Home;
