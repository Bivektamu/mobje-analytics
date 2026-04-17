import { logoutAction } from "@/actions/auth.actions"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const user = await getCurrentUser()
    // if (!user) redirect('/login')

    return (
        <div>
            <p>Welcome {user?.email}</p>
            <form action={logoutAction}>
                <button type="submit">Log Out</button>
            </form>
        </div>
    )
}