// app/admin/dashboard/page.tsx
import { getUserRole } from "@/lib/clerk";

export default async function AdminDashboard() {
  const role = await getUserRole();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">👑 Admin Dashboard</h1>
      <p>Your role: {role}</p>
    </div>
  );
}
