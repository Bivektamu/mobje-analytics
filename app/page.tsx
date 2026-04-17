import { db } from "@/lib/db";

export default async function Home() {
  const orgs = await db.organization.findMany()
  return (
    <div>
      <p>Organizations: {orgs.length}</p>
    </div>
  );
}
