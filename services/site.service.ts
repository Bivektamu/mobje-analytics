import { db } from "@/lib/db";
import { SiteInput } from "@/typeDefs";
import { randomBytes } from "node:crypto";


export  async function createSite(siteInput: SiteInput) {
    {
        const { domain, orgId } = siteInput

        const apiKey = randomBytes(16).toString("hex")
        return db.site.create({
            data: {
                domain,
                organizationId: orgId,
                apiKey
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