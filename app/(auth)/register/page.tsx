import { registerAction } from "@/actions/auth.actions";

export default function RegisterPage() {
    return (
        <form action={registerAction}>
            <input name="email" type="text" placeholder="Email" />
            <input name="password" type="text" placeholder="password" />
            <input name="orgName" type="text" placeholder="Organization" />
            <button type="submit">Submit</button>
        </form>
    )
}