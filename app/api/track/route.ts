import { db } from "@/lib/db";
import { error } from "console";

const allowedOrigin = "*"

export async function OPTIONS() {
    return new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": allowedOrigin,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        }
    })

}
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { siteId, type, path } = body
        console.log(siteId, type, path)
        if (!siteId || !type) {
            return Response.json({
                error: 'Missing fields'
            }, {
                status: 400,
                headers: corsHeaders()
            })
        }

        const site = await db.site.findUnique({
            where: {
                id: siteId
            }
        })

        if (!site) Response.json({
            error: 'Invalid Site'
        }, { status: 403 })
        
        await db.event.create({
            data: {
                siteId,
                type,
                path: path || '/'
            }
        })

        return Response.json({ success: true }, {
            status: 201,
            headers: corsHeaders()

        })

    } catch (error) {
        console.log(error.message)
        return Response.json({
            error: "Something went wrong"
        },
            {
                status: 500,
                headers: corsHeaders()

            }
        )
    }



}

function corsHeaders() {
    return {
        "Access-Control-Allow-Origin": allowedOrigin,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }
}