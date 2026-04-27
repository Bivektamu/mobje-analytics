import { cookies } from "next/headers";
import { db } from "./db";

export async function getCurrentUser() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    if(!session) return null
    const user = await db.user.findUnique({
        where: {
            id: session
        }
    })

    return user
}