import { db } from "@/lib/db";
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
        const { apiKey, type, path } = body
        if (!apiKey || !type) {
            return Response.json({
                error: 'Missing fields'
            }, {
                status: 400,
                headers: corsHeaders()
            })
        }

        const site = await db.site.findUnique({
            where: {
                apiKey
            }
        })

        if (!site)
            return Response.json({
                error: 'Invalid API Key'
            }, { status: 403 })

        // Domain validation
        const origin = req.headers.get("origin")
        if (origin && !origin.includes(site.domain))
            return Response.json({
                error: 'Invalid Domain',
            }, { status: 403 })

        await db.event.create({
            data: {
                siteId: site.id,
                type,
                path: path || '/'
            }
        })

        return Response.json({ success: true }, {
            status: 201,
            headers: corsHeaders()

        })

    } catch (error) {
        return Response.json({
            error:  "Server Error"
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