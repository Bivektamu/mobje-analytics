import { db } from "@/lib/db";

export async function getAnalytics(siteId:string) {
    const [pageviews, clicks, events] = await Promise.all([
        db.event.count({
            where: {
                type: "pageview",
                siteId
            }
        }),

        db.event.count({
            where: {
                siteId,
                type:'click'
            }
        }),
        
        db.event.findMany({
            where: {
                siteId
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 20
        })
    ])

    return {
        pageviews, clicks, events
    }


}