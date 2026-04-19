"use server"

import { getCurrentUser } from "@/lib/auth";
import { createSite } from "@/services/site.service";
import { redirect } from "next/navigation";

export async function createSiteAction(formData: FormData) {
    const user = await getCurrentUser()
    if (!user) redirect('/login')
    const domain = formData.get('domain') as string
    await createSite({
        domain,
        orgId:user.organizationId
    })

    redirect ('/dashboard/sites')
}