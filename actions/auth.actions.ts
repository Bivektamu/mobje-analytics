"use server"


import { loginUser, registerUser } from "@/services/auth.service"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export async function registerAction(formData: FormData) {
    const email = formData.get('email') as string
    const orgName = formData.get('orgName') as string
    const password = formData.get('password') as string

    if(!password) throw new Error('Password required!')

    const user = await registerUser({
        email, password, orgName
    })

    const cookieStore = await cookies()
    cookieStore.set('session', user.id, {
        httpOnly: true,
    })
}

export async function loginAction(formData:FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const user = await loginUser({email, password})

    const cookieStore = await cookies()
    cookieStore.set('session', user.id, {
        httpOnly: true,
    })
    
}

export async function logoutAction() {
    const cookieStore = await cookies()
    
    cookieStore.delete('session')

    redirect('/login')

}