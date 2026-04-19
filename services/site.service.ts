import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { SiteInput } from "@/typeDefs";


export  async function createSite(siteInput: SiteInput) {
    {
        const { domain, orgId } = siteInput
        return db.site.create({
            data: {
                domain,
                organizationId: orgId
            }
        })
    }
}


export  async function getSitesByOrg(orgId: string) {
    return db.site.findMany({
        where: {
            organizationId: orgId,
        },
        // orderBy: {
        //     createdAt: 'desc'
        // }
    })
}