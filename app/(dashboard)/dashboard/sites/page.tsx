import { createSiteAction } from "@/actions/site.action";
import { getCurrentUser } from "@/lib/auth"
import { getSitesByOrg } from "@/services/site.service";
import { redirect } from "next/navigation";

export default async function SitesPage() {
    const user = await getCurrentUser()
    if (!user) redirect('/login')

    const sites = await getSitesByOrg(user.organizationId)

    return (
        <div>
            <h1>Your Site</h1>
            <form action={createSiteAction}>
                <input type="text" name="domain" placeholder="example.com" />
                <button type="submit">Add Site</button>
            </form>

            <ul>
                {
                    sites.map(site => (
                        <li key={site.id}>{site.domain}</li>
                    ))
                }
            </ul>
        </div>
    )


}