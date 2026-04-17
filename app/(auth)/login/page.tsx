import { loginAction } from "@/actions/auth.actions";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const user = await getCurrentUser()
    if(user) redirect('/dashboard')
    return (
        <form action={loginAction}>
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="text" placeholder="password" />
            <button type="submit">Login</button>
        </form>
    )

}